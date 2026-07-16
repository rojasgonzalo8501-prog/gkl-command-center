# HANDOFF — Vivanord (läs denna först i en ny session)

> Komprimerad helhetsbild så en ny Claude Code-chatt kan fortsätta sömlöst.
> Uppdaterad 2026-07-16. Djupare detaljer: [[Obsidian-Vivanord]], [[STATUS]], [[brief]].

## Vad projektet är
**Vivanord** = D2C-kosttillskott på prenumeration i Sverige, **återförsäljare åt Medvital**.
Tidigare arbetsnamn: NordVital (bytt för nordvital.com var taget). Domänen **vivanord.se är köpt**
(väntar på .se-registrets godkännande innan DNS/deploy). Målgrupp: Sverige (svenska först) +
spansktalande i Sverige (komplett spansk sajt finns).

## Affären (viktigast att minnas)
- Vi är återförsäljare åt **Medvital Sverige AB** (org.nr 559421-2093). Kritisera dem aldrig i copy.
- **Intäkt 1:** 400 kr per bekräftat avtal, utbetalas vid bekräftelse.
- **Intäkt 2:** leadlistan säljs per lead (endast leads med telefonsamtycke), pris via admin-portalens
  Leadkalkyl (golv självkostnad +50 %, riktmärke 25–75 kr/lead).
- Medvital = juridisk säljare, sköter leverans/fakturering/kundservice/ångerrätt. **Vi äger leadsen.**
- Leads med telefonsamtycke **överlåts** till Medvital (GDPR-korrekt, Medvital namngiven i samtycket).
- Modell: dropship, ingen betalning på sajten — kunden betalar mot faktura.

## Pris mot kund
Första månaden **99 kr** → sedan **399 kr/mån**, låda med 3 månadsdoser **var 3:e månad**
(~1 197 kr + 59 kr frakt/leverans). Ingen bindningstid. ⚠️ Kvartalsbeloppet + 3 produkter
bekräftas på Medvital-mötet.

## Två varumärken
- **Vivanord** (vivanord.se) — huvudsajt: hem, produkter, kassa.
- **Hälsoklubben** (kampanj.html) — fristående tävling: 4 frågor → lead. Vinst **10 000 kr/mån,
  betalas av Medvital**. Meta-friskrivning i villkoren.

## Teknik (allt byggt & i GitHub)
- **Sajt:** ren statisk HTML. SV i roten, ES i `/es/`. Delad `styles.css` + `main.js`.
  Google Fonts laddas icke-renderblockerande (media=print-tricket) — ändra inte tillbaka.
- **Backend:** **Supabase LIVE**, projekt `itwayrczvhzzfvsoxhcc`
  (URL https://itwayrczvhzzfvsoxhcc.supabase.co). Tabeller `leads` + `ordrar`, RLS härdad
  (anon får bara skapa rader med startstatus; bara inloggade läser/uppdaterar; ingen delete).
  Nyckel ligger i `deliverables/websites/vivanord/supabase-config.js` (anon = publik, ok).
  Supabase-MCP är kopplad i repo-configen (`.mcp.json`) — kräver din OAuth per maskin.
- **Admin-portal:** `/admin/` — back office. LIVE-läge = Supabase Auth-inloggning (e-post/lösen).
  ⚠️ KVAR: skapa admin-användare i Supabase → Authentication → Users → Add user (Auto Confirm).
- **Cookiebanner** (`cookies.js`): tvåspråkig, gatear Meta-pixeln via `window.vivanordConsent`.
- **Juridik:** köpvillkor, integritetspolicy, tävlingsvillkor (SV + ES) — UTKAST, kräver
  juristgranskning + ifyllda [hakparenteser] (org.nr, kontakt).

## Deploy
**Vercel** (inte Netlify). Root Directory = `gkl-agency/deliverables/websites/vivanord` så bara
sajtmappen publiceras (INTE hela repot — det innehåller interna kalkyler). DNS-poster i DEPLOY.md.
Väntar bara på att domänen godkänns.

## Marknadsföring
- `meta-lansering.md`: 3 kampanjer (SV leadgen 250 kr/dag, SV direktköp 200, ES direktköp 100),
  8 färdiga policygranskade annonser. Regel: skriv om produkten/tjänsten, ALDRIG om personen.
  Nya konton: kör bara Kampanj 1 dag 1–4, slå på resten dag 5.
- `email-flode.md`: färdig Brevo-copy (välkomstflöde + retention). Kvar: skapa Brevo-konto.

## Status: kvar att göra
**Du (kräver dina konton/beslut):**
1. Supabase admin-användare (30 sek).
2. Vercel-deploy när domänen godkänts.
3. Meta Business Manager + FB/IG + pixel → skicka pixel-ID + domänverifierings-tagg.
4. Medvital-mötet: produktblad/priser, pris per lead, skriftligt om 10k-vinsten, ES-säljare?
5. PRV/EUIPO-slutkoll på namnet. 6. Juristgranska villkoren. 7. Brevo-konto.

**Jag (när du levererat):** installera pixel + events + domäntagg · uppdatera produktsidor med
Medvitals katalog · orderexport till Medvital · aktivera ES-sorteo (när ES-säljare finns).

**Öppna frågor:** finns "Vivanord AB" registrerat? · kundservicekanal på sajten? · riktiga produktfoton.

## Filkarta (allt under `gkl-agency/`)
- Sajt: `deliverables/websites/vivanord/` (index, produkter, bestall, kampanj, villkor,
  integritetspolicy, tavlingsvillkor, cookies.js, supabase-*, `es/`, `admin/`)
- Klientdocs: `clients/vivanord/` — STATUS, brief, marketing-plan(.md/.html), meta-lansering,
  medvital-katalog, email-flode, SUPABASE, DEPLOY, presentation.html, Obsidian-Vivanord, denna HANDOFF
- Dashboard: `dashboard/` (Command Center, localhost:3737, egen 💊 Vivanord-flik)

## Så fortsätter du i en ny session
1. Läs denna + [[STATUS]]. 2. Allt ligger på **main**. 3. Nästa naturliga block om inget nytt
sagts: annonsmaterial-briefer till designer, eller vad användaren senast bad om. Fråga inte om
sådant som redan står besvarat här.
