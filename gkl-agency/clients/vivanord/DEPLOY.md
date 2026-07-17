# DEPLOY.md — publicera Vivanord (Vercel)

> **Omskriven 2026-07-17.** Det är **två** Vercel-projekt nu, inte ett: dropship-sajten och
> Hälsoklubben på egen subdomän. Se [[halsoklubben-subdoman]] för varför.

> [!success] DEPLOYAT 2026-07-18 via Vercel CLI (konto gonza1 / rojasgonzalo8501-1102)
> - **Dropship-sajten:** https://vivanord.vercel.app — live, verifierad (6 produkter, 0× 99 kr)
> - **Hälsoklubben:** https://vivanord-halsoklubben.vercel.app — live
> - Deployade direkt från de lokala mapparna (bara sajten laddades upp, inga docs).
>
> **KVAR — DNS hos Strato** (domänen ligger där, nameservers `*.rzone.de`). Sätt A-poster:
> | Namn | Typ | Värde |
> |---|---|---|
> | `vivanord.se` | A | `76.76.21.21` |
> | `www.vivanord.se` | A | `76.76.21.21` |
> | `halsoklubben.vivanord.se` | A | `76.76.21.21` |
>
> Alla tre domäner är redan tillagda i respektive Vercel-projekt. När A-posterna slår igenom
> verifierar Vercel automatiskt och utfärdar HTTPS. Sen svarar vivanord.se på riktigt.

## ⚠️ Tre saker att ALDRIG göra

1. **Peka aldrig vivanord.se på hela command center-repot.** Repot innehåller konfidentiellt
   material: kundbriefer, marknadsplaner, partnervillkor (400 kr/avtal!), leadkalkyler.
   Endast sajtmapparna får bli publika. Det är därför **Root Directory** är det viktigaste
   steget nedan.
2. **Lansera inte utan Rojdix organisationsnummer.** Samtyckesrutan säger
   `[org.nr XXXXXX-XXXX]`. Ett överlåtelsesamtycke är bara giltigt om mottagaren namnges —
   utan det får Rojdix inte ringa ett enda lead. Se [[rojdix-leadmottagare]].
3. **Länka aldrig ihop sajten och Hälsoklubben.** De är avsiktligt separerade. Ingen
   tävlingsflik i sajtens meny, ingen "gå till sajten"-meny på tävlingen.

---

## Projekt 1 — dropship-sajten → vivanord.se

1. **vercel.com** → logga in med GitHub → **Add New… → Project**
2. Välj repot **`gkl-command-center`** → Import
3. Konfigurera:
   - **Framework Preset:** `Other` (ren statisk HTML)
   - **Root Directory:** klicka **Edit** → `gkl-agency/deliverables/websites/vivanord`
     ← *detta är det som skyddar resten av repot*
   - **Build / Output / Install Command:** lämna alla tomma
4. **Deploy** → du får `vivanord-xxxx.vercel.app`. **Testa hela funneln här innan domänen
   kopplas** — du behöver inte vänta på .se-registret för att verifiera att allt fungerar.
5. **Settings → Domains** → lägg till `vivanord.se` + `www.vivanord.se`
6. DNS hos registraren enligt det Vercel visar — normalt:
   - `vivanord.se` → **A** → `76.76.21.21`
   - `www` → **CNAME** → `cname.vercel-dns.com`
7. HTTPS ordnas automatiskt när DNS slagit igenom (upp till 24 h, oftast mycket snabbare)

## Projekt 2 — Hälsoklubben → halsoklubben.vivanord.se

Samma repo, **annan Root Directory**. Skapa ett nytt projekt:

- **Root Directory:** `gkl-agency/deliverables/websites/vivanord-halsoklubben`
- **Domains:** `halsoklubben.vivanord.se`
- DNS: `halsoklubben` → **CNAME** → `cname.vercel-dns.com`

Funneln är `index.html` (quizet) + `tavlingsvillkor.html`, med `es/` för spanska.
Landningssidan ligger på roten, så annonslänken blir ren:
`halsoklubben.vivanord.se/?utm_source=facebook&utm_campaign=halsoklubben`

> **Varför två projekt:** tävlingen ska inte synas på dropship-sajten och sajten ska inte
> synas i tävlingsfunneln. Delade filer (`styles.css`, `main.js`, `cookies.js`, `pixel.js`)
> finns i **båda** mapparna som kopior — ändrar du en delad fil måste du ändra båda.
> Det är priset för separationen och det är medvetet.

---

## Meta-pixel (efter deploy)

`pixel.js` finns redan på alla sidor i båda projekten, gatead av cookiebannern.
Den gör **ingenting** förrän ID:t är ifyllt — sajten kan alltså deployas innan du har pixeln.

1. Events Manager → skapa pixel "Vivanord" → kopiera ID:t (15–16 siffror)
2. Sök-och-ersätt `__PIXEL_ID__` i **båda** `pixel.js` (vivanord/ och vivanord-halsoklubben/)
3. **Samma ID i båda** — annars kan du inte retargeta tävlingsbesökare med säljannonser
4. Domänverifiering: meta-taggen från Brand Safety → Domains läggs i `<head>` på `index.html`
   i båda mapparna. Verifiera **båda** domänerna.

Events är redan inkopplade: `Lead` på tävlingsformuläret, `Purchase` i kassan med produktens
faktiska förstapris (399, eller 199 för Absorb+).

---

## Checklista före riktig trafik

**Blockerande — annonser får inte starta utan dessa:**
- [ ] **Rojdix org.nr ifyllt** (8 ställen, SV + ES) — annars är leadsamtycket ogiltigt
- [ ] **Vivanord AB org.nr ifyllt** (6 ställen) — villkoren påstår redan att bolaget finns
- [ ] **Supabase admin-användare skapad** — Authentication → Users → Add user (Auto Confirm).
      Kontrollerat 2026-07-17: `auth.users` är **tom**, admin går inte att logga in i
- [ ] Sajten live med grönt hänglås på båda domänerna
- [ ] Formulären skriver till Supabase (inte bara localStorage!)
- [ ] Meta-pixel + domänverifiering på båda domänerna
- [ ] Juristgranskning av villkor, integritetspolicy och tävlingsvillkor
- [ ] Kundservice-kanal bestämd och ifylld (er adress eller Medvitals nummer)

**Klart:**
- [x] Priser speglar medvital.se exakt (verifierat mot rå HTML 2026-07-16) — se [[medvital-katalog]]
- [x] Uppsägningstexten rättad till 14 dagars varsel, SV + ES — se [[villkor-avvikelser]]
- [x] Hela sortimentet (6 produkter) på sajten med riktiga namn och innehåll
- [x] Rojdix inlagd som leadmottagare i samtyckeskedjan (org.nr saknas dock)
- [x] Tävlingen avlänkad från dropship-sajten + flyttad till eget projekt
- [x] Cookiebanner som gatear pixeln
- [x] `pixel.js` förberedd med Lead/Purchase-events

**Bekräfta med Medvital innan skarp trafik:**
- [ ] 14-dagarsregeln — deras produktsidor och köpvillkor säger fortfarande olika
- [ ] Hur länge Absorb+ 199 kr gäller ("tidsbegränsat erbjudande")
- [ ] Om 59 kr frakt läggs på 199 kr-ordern

*Relaterat: [[halsoklubben-subdoman]] · [[rojdix-leadmottagare]] · [[villkor-avvikelser]] ·
[[medvital-katalog]] · [[SUPABASE]] · [[STATUS]]*
