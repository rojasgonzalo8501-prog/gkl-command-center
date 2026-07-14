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
| ✅ Deployguide | DEPLOY.md — Netlify + DNS steg för steg |
| ✅ Kundpresentation | Delbar länk (claude.ai-artefakt) + kopia i repot |

## 🔶 DU MÅSTE GÖRA — kräver dina konton/pengar/beslut (jag kan inte)

| # | Uppgift | Tid | Guide |
|---|---|---|---|
| 1 | **Supabase-konto**: skapa projekt, kör SQL-filen, skapa admin-användare, skicka mig URL + anon-nyckel | 20 min | SUPABASE.md |
| 2 | **Publicera sajten**: Netlify-konto, koppla repot, peka DNS för vivanord.se | 15 min + DNS-väntan | DEPLOY.md |
| 3 | **Meta Business Manager**: skapa BM, FB-sida, IG-konto, pixel, annonskonto med kort, verifiera domänen — skicka mig pixel-ID + domänverifierings-tagg | 1 h | meta-lansering.md |
| 4 | **Medvital-mötet**: produktblad + priser (3 produkter saknas), godkänt 99 kr-kampanjpris, pris per lead, clawback-frågan, leadleveransformat, spansktalande säljare?, kundservicenummer till sajten | möte | medvital-katalog.md |
| 5 | **PRV/EUIPO-slutkoll** på "vivanord" (5 min, gratis) + överväg varumärkesregistrering (~2 000 kr) | 5 min | brief.md |
| 6 | **Juridiska texter**: låt någon med juridisk kompetens granska köpvillkor + integritetspolicy + tävlingsvillkor innan lansering (jag skriver utkasten — se nedan) | — | — |
| 7 | **E-postverktyg**: skapa konto (rekommendation: Brevo — gratis 300 mejl/dag, funkar i Sverige) för välkomstflödet | 15 min | marketing-plan.md §5 |

## ☐ JAG GÖR — så fort du levererar ovanstående

| # | Uppgift | Väntar på |
|---|---|---|
| 1 | Klistra in Supabase-nycklarna + verifiera live-läget | Din punkt 1 |
| 2 | Installera Meta-pixeln + Lead/Purchase-events + cookiebanner på alla sidor | Ditt pixel-ID (punkt 3) |
| 3 | Lägga in domänverifierings-taggen | Din tagg (punkt 3) |
| 4 | Skriva utkast: köpvillkor, integritetspolicy, tävlingsvillkor (fullständiga sidor) | Kan göras direkt — säg till |
| 5 | Uppdatera produktsidorna med Medvitals riktiga katalog + kvartalsfakturans belopp | Ditt Medvital-möte (punkt 4) |
| 6 | Bygga orderexport till Medvital (format enligt deras önskemål) | Ditt Medvital-möte (punkt 4) |
| 7 | Skriva e-postflödet (5 mejl + SMS) i Brevo-format | Din punkt 7 |
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
5. **Vinsten till Hälsoklubben**: vem betalar presentkortet på 5 000 kr — ni eller Medvital?
   (Marknadsföringskostnad ~60 000 kr/år vid månadsvinster à 5 000 kr; kan sänkas till
   1 000 kr/mån i starten.)

## Vägen till första annonskronan (ordning)
Supabase (du 20 min → jag 10 min) → Netlify + DNS (du 15 min) → Meta-konton (du 1 h → jag
pixlar 1 h) → villkorssidor (jag utkast → din granskning) → **annonserna live enligt
meta-lansering.md**. Realistiskt: 2–4 dagar om Medvital-mötet inte blockerar.
