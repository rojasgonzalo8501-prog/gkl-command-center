# STATUS.md — Vivanord: var vi står (2026-07-14)

Uppdateras löpande. ✅ = klart · 🔶 = byggt men kräver din åtgärd för att aktiveras · ☐ = kvar

## ✅ KLART (byggt, testat, pushat)

| Del | Detalj |
|---|---|
| ✅ Affärsmodell | Återförsäljare åt Medvital: 400 kr/bekräftat avtal (utbetalas vid bekräftelse) + leadlista per lead. Vi äger leadsen (överlåtelse till Medvital, GDPR-korrekt samtycke med Medvital namngivet) |
| ✅ Varumärke | Vivanord beslutat, **vivanord.se köpt** |
| ✅ Sajt svenska | Hem, produkter (Flex+ synkad mot Medvitals riktiga data), kassa mot faktura, Hälsoklubben-tävling |
| ✅ Sajt spanska | Inicio, productos, pedido (sorteo byggd men pausad tills ES-säljare finns) |
| ✅ Admin-portal | Back office med sidomeny: Översikt (graf, språkfördelning, aktivitet), Leads/Ordrar (SV/ES-filter, sök, raddetaljer, statusflöde, CSV), Leadkalkyl |
| ✅ Supabase-koppling | Kod + SQL + guide färdig och testad — formulär skriver, admin läser/uppdaterar med riktig inloggning. Aktiveras med 2 rader konfig (se nedan) |
| ✅ Marknadsplan | Fullständig strategi (marketing-plan.md) + copy-paste-färdig Meta-lansering med annonstexter SV/ES (meta-lansering.md) |
| ✅ Deployguide | DEPLOY.md — Vercel + DNS steg för steg |
| ✅ Juridiska sidor | villkor.html, integritetspolicy.html, tavlingsvillkor.html byggda och länkade (SV). Utkast — kräver juristgranskning + ifyllda [hakparenteser] |
| ✅ Kundpresentation | Delbar länk (claude.ai-artefakt) + kopia i repot |

## 🔶 DU MÅSTE GÖRA — kräver dina konton/pengar/beslut (jag kan inte)

| # | Uppgift | Tid | Guide |
|---|---|---|---|
| 1 | ✅ **Supabase KLART via MCP**: projekt kopplat, tabeller + RLS deployade (härdade), URL + anon-nyckel inlagda, sajten i LIVE-läge. **KVAR (30 sek):** skapa admin-inloggning i Supabase → Authentication → Users → Add user (med Auto Confirm) | 30 sek | SUPABASE.md |
| 2 | **Publicera sajten**: Vercel-konto, koppla repot (Root Directory = sajtmappen), peka DNS för vivanord.se | 15 min + DNS-väntan | DEPLOY.md |
| 3 | **Meta Business Manager**: skapa BM, FB-sida, IG-konto, pixel, annonskonto med kort, verifiera domänen — skicka mig pixel-ID + domänverifierings-tagg | 1 h | meta-lansering.md |
| 4 | **Medvital-mötet**: produktblad + priser (3 produkter saknas), pris per lead, clawback-frågan, leadleveransformat, spansktalande säljare?, kundservicenummer till sajten | möte | medvital-katalog.md |
| 5 | **PRV/EUIPO-slutkoll** på "vivanord" (5 min, gratis) + överväg varumärkesregistrering (~2 000 kr) | 5 min | brief.md |
| 6 | **Juridiska texter**: sidorna finns nu som utkast — låt någon med juridisk kompetens granska köpvillkor + integritetspolicy + tävlingsvillkor och fyll i alla [hakparenteser] (org.nr, kontakt) före skarp lansering | — | villkor.html m.fl. |
| 7 | **E-postverktyg**: e-postflödets copy är KLAR (email-flode.md, 4 mejl + SMS + retention). Kvar: skapa Brevo-konto och klistra in flödet | 15 min | email-flode.md |

## ☐ JAG GÖR — så fort du levererar ovanstående

| # | Uppgift | Väntar på |
|---|---|---|
| 1 | Klistra in Supabase-nycklarna + verifiera live-läget | Din punkt 1 |
| 2 | Installera Meta-pixeln + Lead/Purchase-events + cookiebanner på alla sidor | Ditt pixel-ID (punkt 3) |
| 3 | Lägga in domänverifierings-taggen | Din tagg (punkt 3) |
| 4 | ✅ KLART: köpvillkor, integritetspolicy, tävlingsvillkor byggda och länkade (SV). ES-versioner kvar | — |
| 5 | Uppdatera produktsidorna med Medvitals riktiga katalog + kvartalsfakturans belopp | Ditt Medvital-möte (punkt 4) |
| 6 | Bygga orderexport till Medvital (format enligt deras önskemål) | Ditt Medvital-möte (punkt 4) |
| 7 | ✅ KLART: e-postflödet skrivet (email-flode.md) — kvar är bara Brevo-kontot | — |
| 8 | Aktivera spanska sorteo-sidan | Medvital bekräftar ES-säljare |

## ☐ SAKNAS ÄNNU — beslut/frågor ingen äger just nu (du frågade "vad fattas?")

1. **Bolagsfrågan**: sajtens villkor säger "Vivanord AB" — finns bolaget? Enskild firma,
   nytt AB eller bifirma till befintligt bolag? Påverkar villkorstexterna och Medvital-avtalet.
2. **Kundservice-kanal**: sajten lovar svar via mejl/telefon — vilken adress och vilket
   nummer? (Medvital äger kundservicen enligt avtalet, men NÅGOT ska stå på er sajt.)
   Förslag: hej@vivanord.se som vidarebefordras.
3. **Produktbilder**: sajten har emoji-platshållare — riktiga foton behövs från Medvital
   före lansering (annonser med produktbild konverterar 2–3× bättre).
4. **Skriftlighetskravet i praktiken**: Medvitals säljare måste skicka skriftlig bekräftelse
   efter samtal — bekräfta att deras flöde redan gör detta (de är juridisk säljare, men
   våra leads bränns om de slarvar).
5. ~~Vinsten till Hälsoklubben~~ **LÖST (2026-07-14): vinsten är höjd till 10 000 kr/mån
   och Medvital tillhandahåller och betalar ut den.** Tävlingsvillkoren på båda språken
   uppdaterade. ⚠️ Få in detta skriftligt i Medvital-avtalet — 120 000 kr/år är ett
   åtagande de ska stå bakom på papper, inte bara muntligt.

## Vägen till första annonskronan (ordning)
Supabase (du 20 min → jag 10 min) → Vercel + DNS (du 15 min) → Meta-konton (du 1 h → jag
pixlar 1 h) → villkorssidor (✅ klara — din granskning) → **annonserna live enligt
meta-lansering.md**. Realistiskt: 2–4 dagar om Medvital-mötet inte blockerar.
