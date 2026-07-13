# Brief — NordVital (arbetsnamn)

## Uppdraget
Ny kund med samma produkter och affärsmodell som Medvital, under eget varumärke.
Vi bygger: varumärke, hemsida och marknadsföring via Facebook + Instagram.

**Referenssidor från kunden:**
1. https://medvital.se/ — varumärkes- och e-handelssidan (mallen för vår hemsida)
2. https://sparklubben.nu/ICA/ — tävlings-/leadgenereringssida (mallen för vår kampanjfunnel)

---

## Analys av referens 1: Medvital.se

**Vad de är:** Medvital Sverige AB (org.nr 559421-2093, Stockholm). Svenskt kosttillskottsbolag
med prenumerationsmodell.

**Sortiment:** Leder, hormonhälsa, skönhet och immunförsvar. Exempel:
- Skönhetstillskott: hyaluronsyra, biotin, CoQ10 + växtextrakt ("skönhet börjar inifrån")
- Immuntillskott: betaglukaner + vitamin A, C, D, zink och selen

**Affärsmodellens byggstenar (kopiera dessa):**
- Prenumeration **utan bindningstid** — pausa/avsluta när som helst
- Leverans **direkt i brevlådan** inom 1–3 vardagar (brevlådevänlig förpackning = ingen utlämning)
- 14 dagars ångerrätt enligt distansavtalslagen
- Endast leverans inom Sverige
- Enkel, trygg ton: "Enkelt att ta hand om sin hälsa"

**Deras svaghet (utnyttja denna):** Trustpilot visar återkommande klagomål om aggressiv
telefonförsäljning, dyra SMS-erbjudanden och att äldre känner sig lurade. Företag i denna nisch
har ett förtroendeproblem. **Vår öppning: bygg varumärket på transparens och enkel uppsägning.**

## Analys av referens 2: Sparklubben.nu/ICA

**Vad det är:** En kampanjsida (leadgenerering) där besökaren tävlar om ICA-presentkort
(månadsvinster 1 000 kr + huvudvinst 10 000 kr) genom att svara på 4 frågor. Gratis att delta.
I utbyte samtycker deltagaren till nyhetsbrev/erbjudanden från arrangören.

**Funnelns mekanik (kopiera strukturen, gör den schysst):**
1. Annons → "Vinn presentkort!" — låg tröskel, bred målgrupp
2. 4 enkla frågor = engagemang + kunskapsmoment (gör tävlingen laglig utan lotterilicens)
3. Kontaktformulär med samtyckesrutor = lead med marknadsföringstillstånd
4. Tack-sida → direkterbjudande (prova-på) + e-post/SMS-flöde efteråt

**URL:en innehåller `source`, `clickID`, `SSID`** — dvs. de kör affiliatetrafik med spårning.
Vi gör samma spårning med UTM-parametrar + Meta-pixel istället.

**Varning:** Denna typ av funnel har dåligt rykte när leads säljs vidare eller pressas i telefon.
Vi ringer VÅRA leads med aktivt telefonsamtycke från formuläret — aldrig köpta listor — och följer
skriftlighetskravet plus en schysst säljkodex (se marketing-plan.md §3). Det är både lagligt
tryggare och bättre för varumärket.

---

## Vår affärsmodell (sammanfattning)

| Del | Val |
|---|---|
| Produkt | 4 kosttillskott: Immun, Skönhet, Leder, Energi (samma kategorier som Medvital) |
| Pris | 249 kr/mån per produkt, första månaden 99 kr, fri frakt |
| Modell | Prenumeration utan bindningstid, leverans i brevlådan var 30:e dag |
| Kundanskaffning | FB/IG-annonser → Hälsoklubben (tävling/quiz) → **telemarketing (huvudsäljkanal)** |
| Uppföljning | E-post + SMS (med samtycke) + Meta-retargeting mot produktsidan |
| Differentiering | "Avsluta med ett klick" + schysst säljkodex — transparens som säljargument |

### Enhetsekonomi att räkna på (mål)
- Produktkostnad (vitpost/private label): ~40–60 kr/mån per kund
- Porto brevlådeförsändelse: ~20–30 kr
- Marginal per månad: ~150–180 kr → en kund som stannar 4+ månader bär en CAC på ~400–600 kr
- Mål-CPL via tävlingsfunnel: 10–25 kr | Lead→kund: 3–8 % → CAC 125–830 kr (optimera mot under 500 kr)

---

## Varumärke

**Arbetsnamn: NordVital** — nordiskt, hälsa, trovärdigt. MÅSTE verifieras innan lansering:
domän (nordvital.se), Bolagsverket, PRV:s varumärkesdatabas, EUIPO.

**Alternativ om namnet är upptaget:** Vivanord, Friskform, Livskraft Nordic, Purnord, Vitalum.

**Varumärkeslöfte:** "Kosttillskott utan krångel — och utan fula trick."

**Visuell identitet (används på hemsidan):**
- Färger: djupgrön (#1d5c4d) + krämvit (#faf7f2) + accent salviagrön (#7fb069)
- Typografi: ren sans-serif, mycket luft, stora trygghetsbadges
- Ton: varm, rak, svensk. Inga superlativ, inga mirakel. "Vi säger bara det forskningen tillåter."

## Produktlinje (EFSA-säkra påståenden)

| Produkt | Innehåll | Godkänt påstående (exempel) |
|---|---|---|
| **Immun+** | Betaglukaner, C, D, zink, selen | "Vitamin C, D, zink och selen bidrar till immunsystemets normala funktion" |
| **Skönhet Inifrån** | Hyaluronsyra, biotin, Q10, zink | "Biotin bidrar till att bibehålla normalt hår och normal hud" |
| **Flex Leder** | Kollagen, vitamin C, mangan | "Vitamin C bidrar till normal kollagenbildning som har betydelse för broskets normala funktion" |
| **Energi & Balans** | Magnesium, B6, B12, folsyra | "Magnesium och vitamin B6 bidrar till att minska trötthet och utmattning" |

> Obs: hyaluronsyra, kollagen och Q10 har INGA godkända EFSA-påståenden — påståenden kopplas
> alltid till vitaminet/mineralet i produkten, aldrig till dessa ingredienser direkt.

## Nästa steg
1. Kunden godkänner varumärkesnamn + kollar domän och register
2. Hitta leverantör av private label-kosttillskott (svensk/EU-tillverkare, brevlådevänlig förpackning)
3. Registrera företaget som livsmedelsföretagare hos kommunen (krav för kosttillskott)
4. Sätt upp Meta Business Manager, pixel, e-postverktyg (t.ex. Klaviyo) och betalning (Klarna/Stripe)
5. Lansera enligt `marketing-plan.md`
