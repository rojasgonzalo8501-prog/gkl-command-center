# 🚀 LANSERING — vägen till första annonskronan

> **Uppdaterad 2026-07-18.** 🟢 Sajterna är LIVE — **vivanord.se** + **halsoklubben.vivanord.se**
> (Vercel, HTTPS, DNS klart). Men detta är fortfarande en **förhandsvisning**, inte skarp trafik.
> Steg 1 (deploy + DNV) är avbockat nedan; kvar är steg 0 (org.nr + Supabase-säkerhet) och
> steg 2–3 (pixel, Meta-konton, annonser).
>
> Ordningen spelar roll. Vissa steg tar dagar av väntan (Meta-granskning) — starta dem först.
> Andra tar 30 sekunder men blockerar skarp trafik (Rojdix org.nr, Supabase-registrering av).

---

## ⚠️ ÖPPEN RISK — repot är publikt (beslut 2026-07-17: behåll tills vidare)

`gkl-command-center` är ett **publikt** GitHub-repo. Det betyder att dina konfidentiella
dokument är webbåtkomliga för vem som helst som hittar URL:en — verifierat 2026-07-17:
`brief.md` (400 kr/avtal + hela leadkalkylen), `marketing-plan.md`, `medvital-mote.md`,
`rojdix-leadmottagare.md`, `medvital-katalog.md`. Din affärsuppgörelse, dina marginaler och
Rojdix-upplägget är alltså öppet googlingsbara. Du valde att behålla det publikt för nu så att
den delade presentationslänken (github.io) fortsätter fungera.

**Fixen när du vill stänga det:** `gh repo edit rojasgonzalo8501-prog/gkl-command-center
--visibility private` (Vercel deployar fint från privata repon; men github.io-länkarna slutar
fungera — ersätt presentationslänken med Vercel-URL:en då). Renast på sikt: flytta de
konfidentiella docsen till ett separat privat repo så bara sajten någonsin kan exponeras.

## 🔴 STEG 0 — det som stoppar allt (gör idag)

| # | Vad | Tid | Varför det blockerar |
|---|---|---|---|
| 1 | ✅ **Rojdix-mottagaren bekräftad** (2026-07-22) | klart | Leadmottagaren är **ROJDIX S.R.L. (Rumänien), reg.nr J40/6995/2023, CUI 47979950** — ifyllt i samtycket + villkoren + integritetspolicyn på alla sidor (SV + ES). EU/EES-transparensrad tillagd. ⚠️ Bekräfta mot Rojdix-avtalet att det är SRL:et (RO) och inte OÜ:t (EE) som är avtalspart/controller — namnger vi fel bolag blir samtycket ogiltigt. |
| 2 | **Juridisk avsändare** (ditt namn / enskild firma + org.nr) | 2 min | ✅ Inte längre falskt: "Vivanord AB" är borttaget överallt — sajten säger nu bara varumärket **Vivanord** tills du sätter den riktiga avsändaren. Det görs på **ETT ställe**: `legal.js` (`window.NV_LEGAL = { entity, orgnr }`) i halsoklubben-mappen. Fyll i `orgnr` FÖRST när det är sant. Krävs före skarpa leads (någon måste vara personuppgiftsansvarig/arrangör). |
| 3 | **Supabase admin-användare** | 30 sek | `auth.users` är tom. Admin-portalen går inte att logga in i. Authentication → Users → Add user, kryssa **Auto Confirm**. Steg-för-steg: [[SUPABASE]]. |
| 3b | **Stäng av publik registrering i Supabase** 🔴 | 30 sek | Säkerhetskritiskt. Authentication → Email → **Enable Signups = OFF**. Annars kan vem som helst registrera sig, bli "inloggad" och läsa **alla kunders namn/e-post/telefon/adress** (GDPR-läcka). Verifierat via säkerhetsadvisorn 2026-07-18. Se [[SUPABASE]]. |

✅ Uppdaterat 2026-07-22: Rojdix-bolagen är uppslagna. Register visar **ROJDIX S.R.L.** (Rumänien,
reg.nr J40/6995/2023, CUI 47979950) och **RojDix InC OÜ** (Estland, 14200872 — men med obetalda böter +
icke-inlämnade årsredovisningar). Beslut: **det rumänska SRL:et** används som namngiven mottagare.
Inget spanskt bolag hittades. EU/EES-transparensrad tillagd i integritetspolicyn (RO = EU, ingen
tredjelandsöverföring). Se `rojdix-leadmottagare.md`. **Kvar: bekräfta mot avtalet att SRL:et är
avtalspart/controller** (inte OÜ:t) innan skarpa telefonsamtyckesleads.

> [!warning] Org.nr-platshållarna borttagna för förhandsvisningen (2026-07-17)
> `[org.nr XXXXXX-XXXX]` togs bort från alla sidor så förhandsvisningen läser rent — men numren
> är **fortfarande rättsligt nödvändiga före riktig trafik**. Samtyckesrutan namnger nu Rojdix
> utan org.nr; det duger för att **visa** sajten, men **inte** för att samla in skarpa leads
> (ett överlåtelsesamtycke måste identifiera mottagaren fullständigt). Fyll i numren + koppla
> samtycket innan en enda annons pekar hit. HTML-kommentaren i `kampanj.html` påminner om det.

**Så fort 1 och 2 landar:** jag fyller i alla 14 ställena, SV + ES, på några minuter.

---

## STEG 1 — starta klockan på det som tar tid

| # | Vad | Tid | Not |
|---|---|---|---|
| 4 | ✅ **Vercel-deploy, projekt 1** (dropship-sajten) | KLART 2026-07-18 | Live på **vivanord.se** + vivanord.vercel.app |
| 5 | ✅ **Vercel-deploy, projekt 2** (Hälsoklubben) | KLART 2026-07-18 | Live på **halsoklubben.vivanord.se** + vivanord-halsoklubben.vercel.app |
| 6 | **Meta Business Manager** + FB-sida + IG + annonskonto | 1 h | **Längsta stången.** Nya konton får trust-restriktioner och sidor mår bra av att åldras. Starta idag även om annonserna dröjer. |
| 7 | **PRV/EUIPO-slutkoll** på "vivanord" | 5 min | Gratis. Gör det innan varumärket syns publikt. |
| 8 | **Juristgranskning** av villkor + integritetspolicy + tävlingsvillkor | — | Skicka idag, svaret dröjer. Sidorna är utkast och märkta som sådana. |
| 9 | **Brevo-konto** | 15 min | Copyn är klar i [[email-flode]]. |

---

## STEG 2 — när steg 1 landat (jag gör)

| # | Vad | Väntar på |
|---|---|---|
| 10 | Fyll i Rojdix + Vivanord org.nr, 14 ställen SV + ES | Ditt steg 0 |
| 11 | Pixel-ID in i båda `pixel.js` + domänverifiering | Ditt pixel-ID (steg 6) |
| 12 | Verifiera hela funneln live: formulär → Supabase → admin | Ditt steg 3 + 4 |
| 13 | Uppdatera Kampanj 1:s destination till subdomänen | Ditt steg 5 |
| 14 | Leadkalkylen med riktigt pris per lead | Priset ur Rojdix-avtalet |

---

## STEG 3 — annonsstart

**Uppvärmningsregeln:** dag 1–4 kör **enbart Kampanj 1** (Hälsoklubben, 250 kr/dag). Nya konton
som direkt startar flera kampanjer flaggas oftare. Dag 5: slå på resten. Se [[meta-lansering]].

**Kreativen** kan produceras nu — 1C, 1A, 1B och 2B kräver ingen produktbild. Se
[[annonsmaterial-brief]]. 2A och 2C väntar på riktiga förpackningsbilder från Medvital.
Statiska annonser (1A/1B/1C × 3 format) och sex animerade videoannonser är byggda och ligger i
`deliverables/ads/vivanord-halsoklubben/` (README parar ihop varje fil med rätt copy).

**Rese-tävling (variant).** En andra tävlingssida är byggd — `resa.html` +
`resa-tavlingsvillkor.html` i halsoklubben-mappen — med vinsten *resepresentkort värt 10 000 kr*
i stället för matbutik. Samma hälsoquiz och lead-flöde. 🔴 Får INTE skarp trafik förrän **Medvital
skriftligen bekräftat att de tillhandahåller och betalar ut resepriset** (samma villkor som
presentkortsvinsten — få in det i avtalet). Drömrese-videon (`_UTKAST`) hör ihop med denna sida.

**Organiskt** ([[organiskt-innehall]]): lägg ut de första inläggen så fort FB/IG finns, så
sidan inte är tom när annonstrafiken landar och folk klickar på sidnamnet.

**Content-motorn är byggd, inte köpt.** `vivanord-daily-poster.json` (n8n) postar de 8 inläggen
till IG + FB på schema, med en compliance-grind som stoppar hälsopåståenden och gamla faktafel
innan de går ut. Aktiveras när kontona finns — se `Infrastructure/Social Content Engine - n8n.md`
i vaulten. Blotato/Higgsfield behövs inte vid start.

---

## ⚠️ Fortfarande obesvarat — påverkar annonserna

Tre saker som Medvital äger och som `meta-lansering.md` bygger på:

1. **14-dagarsregeln.** Deras produktsidor säger "avsluta när som helst", deras köpvillkor
   säger 14 dagars varsel. Vi har följt köpvillkoren (det bindande dokumentet) och skrivit om
   sajten SV + ES. Få det bekräftat — annars sitter vi med fel uppgift på egen sajt.
2. **Absorb+ 199 kr är "tidsbegränsat".** Det är vår **enda** annonskrok — fem av sex produkter
   har inget intropris alls. Löper det ut mitt i en kampanj står vi utan erbjudande.
3. **Frakt på 199 kr-ordern.** Absorb+-sidan säger "frakt ingår över 399 kr". Vi visar 59 kr
   (försiktiga hållet) — men gissar.

Frågorna ligger färdiga i [[medvital-mote]].

---

## Realistisk tidplan

| Dag | Vad |
|---|---|
| **Idag** | Steg 0 (org.nr + Supabase-admin) → jag fyller i · Vercel × 2 · Meta-konton skapas |
| **Dag 1–2** | DNS slår igenom · jag verifierar funneln live · kreativ produceras · organiskt börjar |
| **Dag 2–3** | Pixel + domänverifiering · juristsvar kommer förhoppningsvis |
| **Dag 3–4** | Kampanj 1 live (Hälsoklubben, 250 kr/dag, ensam) |
| **Dag 7–8** | Kampanj 2 + 3 på, om Medvital bekräftat Absorb+-priset |

**Realistiskt: annonser live om 3–4 dagar** — men bara om Rojdix org.nr kommer idag. Utan det
kan Hälsoklubben inte gå live alls, och Hälsoklubben är kampanjen som ska starta först.

*Relaterat: [[DEPLOY]] · [[rojdix-leadmottagare]] · [[medvital-mote]] · [[meta-lansering]] ·
[[halsoklubben-subdoman]] · [[STATUS]] · [[HANDOFF]]*
