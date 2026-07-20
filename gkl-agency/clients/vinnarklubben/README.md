# Vinnarklubben — leadplattform (broker)

GKL Agencys egna leadfabrik, byggd i sparklubben.nu-stil men bred och multi-vertikal.
Mål: **bli den leadkälla bolag köper ifrån** i stället för att våra kunder köper leads av
sparklubben/NordicLeads. Konsumenter tävlar gratis → vi samlar leads med GDPR-samtycke → vi
säljer/överlåter dem till köpare i rätt bransch.

Levereras i `deliverables/websites/vinnarklubben/`.

---

## Affärsmodell

```
Meta/TikTok-annons ("vinn X")  →  Vinnarklubben-hubb (index.html)  →  tavling.html?k=<vertikal>
                                                                      quiz (kunskap + profil)
                                                                      → "Grattis, du kvalificerade dig"
                                                                      → lead + samtycke → Supabase
                                                                                              │
                                                          broker-admin: tagga, prissätta, sälja
                                                                                              │
                                                              köpare i vertikalen (per lead / överlåtelse)
```

- **Intäkt:** pris per lead. Endast leads med **partnersamtycke** är säljbara till telemarketing.
  Prissätt i admin-portalens **Leadkalkyl** — självkostnad per *säljbart* lead + påslag (golv +50 %).
- **Bred = fler köpare:** fem vertikaler v1 (Dagligvaror, Hälsa, Solceller, Telefoni, Försäkring).
  Varje vertikal har sina egna köpare. Solceller/försäkring/telefoni är högvärdesnischer.
- **Köparmodell:** intern broker-admin. Vi kontaktar bolag och exporterar deras leads (CSV per
  vertikal/köpare). Self-serve-köparportal är nästa steg om volymen motiverar det.

## Arkitektur (config-driven — en motor, alla vertikaler)

| Fil | Roll |
|---|---|
| `kampanjer.js` | **Sanningskälla.** Alla tävlingar/vertikaler. Lägg till en vertikal = ett objekt. |
| `tavling.html` | Återanvändbar funnel. `?k=<slug>` väljer kampanj. Bygger quiz + form + tack från katalogen. |
| `main.js` | Motorn: renderar hubb-korten, driver quizet, fångar profilsvar, skriver lead till Supabase. |
| `index.html` | Publik hubb — listar alla aktiva tävlingar (sparklubbens "innehållsfarm"-hemsida, fast ärlig). |
| `admin/index.html` | Intern broker-portal (se nedan). |
| `styles.css` | Designsystem (marinblå + guld + mint). |
| `supabase-config.js` | Projekt-URL + anon-nyckel + tabellnamn. |
| `vinnarklubben-setup.sql` | Skapar `vk_leads` + RLS. |
| `cookies.js` / `pixel.js` | GDPR-cookiesamtycke + Meta-pixel (laddas först efter samtycke). |
| `tavlingsvillkor.html` / `integritetspolicy.html` | Juridik (utkast). |

### Datamodell — `vk_leads`
Alla vertikaler i **en** tabell. Profilsvaren ligger i `svar` (jsonb) så en ny tävling aldrig
kräver schemaändring. Nyckelfält: `kampanj`, `vertikal`, kontakt, `svar`, `samtyckeEpost`,
`samtyckePartner`, `kalla`, `status` (ny→reserverad→sald→levererad/ogiltig), `kopare`, `pris`.

**Säkerhet (RLS):** anon-nyckeln får bara *skapa* leads med status `ny` och utan köpare/pris.
Admin läser/uppdaterar som inloggad (Supabase Auth).

## Broker-adminportalen (`admin/index.html`)
- **Översikt:** KPI:er (totalt/nya/sålda/intäkt), leads per vertikal, per källa, senaste.
- **Leads:** filter (vertikal, status, samtycke, fritext), radklick → profilsvar + tilldela
  **köpare** + **pris** + status. **CSV-export följer filtret** → filtrera på vertikal/köpare
  och exportera just den listan till köparen.
- **Leadkalkyl:** självkostnad per säljbart lead → rekommenderat pris.
- **Lägen:** LIVE (Supabase Auth) eller Prototyp (localStorage, PIN 1234, "Demo-data"-knapp).

## Aktivera riktig lagring (Supabase)
1. Kör `vinnarklubben-setup.sql` i Supabase → SQL Editor (skapar `vk_leads` + RLS).
   Pekar på samma projekt som Vivanord — `vk_leads` är separat, inget krockar.
2. `supabase-config.js` är redan ifylld med projektets URL + publika anon-nyckel.
3. Admin-inloggning: Supabase → Authentication → Users → Add user (Auto Confirm). Samma konto
   som Vivanord-adminen fungerar.

## Lägga till en ny vertikal
Lägg ett objekt i `window.VK_KAMPANJER` i `kampanjer.js`: `slug`, `vertikal`, `emoji`, `farg`,
`klubb`, `vinst`, `rubrik`, `sub`, `intro`, `quiz` (minst en `kunskap: true`, resten profilfrågor
med `field`), `partner.namn` (**det faktiska köparbolaget**) + `partner.text`, `epostText`.
Hubben och funneln plockar upp den automatiskt.

## ⚠️ Blockerare före skarp lansering
1. **Namnge köpare per vertikal** — byt varje `partner.namn: '[KÖPARE …]'` i `kampanjer.js` mot
   köparens juridiska namn. Ett vagt/oifyllt mottagarnamn gör överlåtelsesamtycket ogiltigt
   (exakt sparklubbens svaghet — se `clients/vivanord/sparklubben-teardown.md`).
2. **Arrangörens org.nr** — fyll i `[XXXXXX-XXXX]` i tavlingsvillkor.html + integritetspolicy.html.
3. **Juristgranskning** av båda juridiksidorna.
4. **Domän + hosting** — köp vinnarklubben.se, deploya mappen (Vercel), peka DNS.
5. **Meta-pixel** — ersätt `__PIXEL_ID__` i pixel.js, lägg domänverifierings-tagg i `<head>`.
6. **Köparavtal** — reglera exklusivitet, pris/lead, och att köparen (som ringer i eget namn)
   uppfyller skriftlighetskravet, NIX och inspelningsupplysning.
7. **Vinstfinansiering** — besluta vem som betalar ut varje tävlings vinst (egen budget eller
   sponsras av en vertikalpartner). Vinsten är ett åtagande — dokumentera det.

## Så slår vi sparklubben (från teardown)
| Sparklubben | Vinnarklubben |
|---|---|
| Vagt "sponsorer"-samtycke (GDPR-skakigt) | Namngiven köpare per ruta — rena, säljbara samtycken |
| Inget/svagt kunskapsmoment | Kunskapsfråga i varje tävling — laglig utan lotterilicens |
| Påhittad vinnare ("Karl-Bertil") | Ärlig trovärdighet — riktig vinnare läggs in efter dragning |
| Ren broker | Broker + config-motor som skalar till nya vertikaler på minuter |

*Relaterat: `clients/vivanord/sparklubben-teardown.md` (konkurrentanalysen som ligger till grund).*
