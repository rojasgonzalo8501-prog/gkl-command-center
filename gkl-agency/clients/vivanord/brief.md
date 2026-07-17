# Brief — Vivanord

## Uppdraget
Ny kund med samma produkter och affärsmodell som Medvital, under eget varumärke.
Vi bygger: varumärke, hemsida och marknadsföring via Facebook + Instagram.

**Referenssidor från kunden:**
1. https://medvital.se/ — varumärkes- och e-handelssidan (mallen för vår hemsida)
2. https://sparklubben.nu/ICA/ — tävlings-/leadgenereringssida (mallen för vår kampanjfunnel)

---

## PARTNERN ÄR MEDVITAL — vi är deras återförsäljare

**Avslöjat 2026-07-14:** "referenssidan" medvital.se är i själva verket vår partner.
**Vi blir återförsäljare åt Medvital Sverige AB (org.nr 559421-2093)** och säljer leadlistan.

> 🔴 **Ändrat 2026-07-16:** leadsen överlåts inte till Medvital utan till **Rojdix Telemarketing**
> — det är de som ringer. Medvital är juridisk säljare och sköter leverans, fakturering och
> kundservice. Vem vi fakturerar per lead är därmed en öppen fråga. Se [[rojdix-leadmottagare]].

Det ändrar tre saker:
1. **Kritisera aldrig Medvital** i copy, annonser eller säljmaterial — de är uppdragsgivaren.
   Den generiska formuleringen "branschen har fått dåligt rykte — vi gör tvärtom" är OK,
   men aldrig något som pekar mot Medvital.
2. **Produkter, priser och villkor synkade mot det som är bekräftat** (2026-07-14): sajten visar
   nu Flex+ med riktiga ingredienser, 399 kr/mån + 59 kr frakt, och Medvitals magprodukt ersätter
   vår påhittade Energi-produkt. Full faktalista + kvarvarande luckor: **`medvital-katalog.md`**.
   **Löst 2026-07-16:** hela sortimentet, alla priser, ingredienser, leveransintervall och
   uppsägningsregel hämtade ur medvital.se rå HTML. 99 kr-förslaget är skrotat — det fanns aldrig
   hos Medvital, och vi speglar deras priser exakt. Kvar: näringsdeklaration för Man+/Woman+.
3. **Vårt varumärke Vivanord är förvärvskanalen** — Medvital får en fräsch avsändare mot
   målgrupper där deras eget namn är bränt (Trustpilot). Vår schyssta profil skyddar båda.

## Analys av Medvital.se (nu partnerns modell — vi ärver den)

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

**Deras förtroendeproblem (nu VÅRT gemensamma problem):** Trustpilot visar återkommande klagomål
om aggressiv telefonförsäljning och att äldre känner sig lurade. Som deras återförsäljare och
leadleverantör är detta affärsrisken att hantera: Vivanords fräscha varumärke + schysst säljkodex
är precis det Medvital köper av oss. Om leads vi levererar ringer och klagar på oss, dör affären —
håll den schyssta profilen av rent kommersiella skäl.

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

## Vår affärsmodell (sammanfattning) — DROPSHIP-SAMARBETE

**Vi processar inga betalningar och håller inget lager.** Vi har direkt samarbete med
produktleverantören: sajten och telemarketingen tar emot beställningar och skickar dem till
partnern, som packar, levererar och **fakturerar kunden (faktura medföljer lådan)**.
Vår roll = varumärke + trafik + leads + försäljning. Partnerns roll = produkt + logistik + betalning.

| Del | Val |
|---|---|
| Produkt | Hela Medvitals sortiment om 6 kosttillskott: Flex+, Immun+, Beauty+, Absorb+, Man+, Woman+ |
| Pris mot kund | Speglar medvital.se exakt: 399 kr första leveransen + 59 kr frakt, sedan 1 197 kr + 59 kr var 3:e månad. **Absorb+:** 199 kr första månaden, sedan 399 kr var 4:e vecka. Betalning mot faktura. Se medvital-katalog.md — hitta aldrig på ett pris |
| Modell | Prenumeration utan bindningstid, leverans i brevlådan var 30:e dag (partnern skickar) |
| Kundanskaffning | FB/IG-annonser → Hälsoklubben (tävling/quiz) → **telemarketing (huvudsäljkanal)** |
| Orderflöde | Sajt/telemarketing → order till partnern (API/e-post) → partnern levererar + fakturerar |
| Uppföljning | E-post + SMS (med samtycke) + Meta-retargeting mot produktsidan |
| Differentiering | Enkel uppsägning + schysst säljkodex — transparens som säljargument |

### Partneravtalet — ÖVERENSKOMMET
| Punkt | Utfall |
|---|---|
| Ersättning | **400 kr per bekräftat avtal** (engångsbelopp) |
| Utbetalning | **Vid bekräftat avtal** — inte efter ångerfrist eller betald faktura ✅ |
| Juridiskt säljansvar | Partnern |
| Kundservice, ångerrätt, returer | Partnern |
| Fakturering & betalrisk | Partnern |
| Leads & leadregister | **Vi äger** — vår enda men viktigaste tillgång |

> Utbetalning vid bekräftat avtal = bästa möjliga kassaflöde: pengarna kommer innan
> annonsfakturan förfaller, så vinnande kampanjer kan skalas direkt utan att binda kapital.

**Kvar att klargöra med partnern:**
1. Clawback — dras ersättningen tillbaka vid ånger/obetald faktura? (Om nej: bekräftat avtal = säkrade
   400 kr. Om ja: håll buffert och följ ånger-statusen i admin-portalen)
2. Orderformat (API/fil/e-post) + hur uppsägningar rapporteras tillbaka så vi inte ringer avslutade kunder
3. Får vi använda leadsen för framtida egna/andra erbjudanden? (Vi äger dem — säkra det skriftligt)
4. **Pris per lead för leadlistan** — sätts efter vår självkostnadskalkyl, se nedan

## Intäktsström 2: Leadlistan (betalt per lead)

Utöver 400 kr/avtal säljer vi leadlistan till partnern **per lead**. Prissättningen görs i
admin-portalens flik **🧮 Leadkalkyl** — mata in verkliga siffror så räknar den åt oss.

**Formeln:**
```
Självkostnad per säljbart lead = (annonskostnad + verktyg + egen tid)
                                 ÷ (antal leads × andel med telefonsamtycke)
```
- Bara leads med **telefonsamtycke** är säljbara till telemarketing — vid 60 % samtyckesandel är
  självkostnaden per säljbart lead ~67 % högre än rå CPL. Räkna aldrig på rå CPL!
- Räkneexempel: 3 000 kr annons + 500 kr verktyg + 5 h à 300 kr = 5 000 kr → 200 leads varav
  120 säljbara → **självkostnad ~42 kr/säljbart lead** → pris till partnern 80–100 kr (+100 %)
- Vid bättre CPL (10–15 kr rå) landar självkostnaden på 20–30 kr → pris 40–60 kr
- **Riktmärke Sverige:** färska, exklusiva hälso-leads med telefonsamtycke säljs för 25–75 kr/st
- Ta betalt för **exklusivitet** (endast partnern får ringa) och **färskhet** (< 72 h — äldre leads
  är värda hälften). Golv: aldrig under självkostnad + 50 %.

**GDPR — överlåtelse-modellen:** leadsen ÖVERLÅTS till det bolag som gör telefonmarknadsföringen
i eget namn. Telefonrutan på Hälsoklubben samtycker uttryckligen till den överlåtelsen, och
mottagaren blir självständigt personuppgiftsansvarig.

**🔴 Mottagaren är ROJDIX TELEMARKETING — inte Medvital.** Ändrat 2026-07-16. Samtyckestexten
hade felaktigt fyllts i med "Medvital Sverige AB"; den är nu omskriven till Rojdix på svenska
och spanska (kampanj.html, tavlingsvillkor.html, integritetspolicy.html + es-motsvarigheterna).
Medvital är fortfarande juridisk säljare och sköter leverans/fakturering/kundservice — men de
ringer inte.

**⚠️ BLOCKERANDE före lansering:** platshållaren **[org.nr XXXXXX-XXXX]** för Rojdix (sex
ställen, SV + ES) MÅSTE ersättas med deras juridiska bolagsnamn och organisationsnummer —
samtycke till överlåtelse är bara giltigt om mottagaren namnges. Leads insamlade FÖRE
namnbytet får inte överlåtas. *(Kontrollerat 2026-07-16: Supabase innehåller 0 leads och
0 ordrar — inget är insamlat under fel bolagsnamn, så inget behöver kasseras.)*
Detaljer och öppna frågor: [[rojdix-leadmottagare]].

### Enhetsekonomi — kalkylen med 400 kr/avtal (VIKTIG!)
Intäkten är fast: 400 kr per bekräftat avtal. Då MÅSTE kostnaden per avtal under 400 kr:

**Telemarketing-vägen (per bekräftat avtal):**
- Kedjan: kontaktgrad ~55 % × avslut ~10 % × skriftlig bekräftelse ~75 % ≈ **4 % av leads blir avtal** → ~24 leads per avtal
- Leadkostnad: 24 × 15 kr CPL ≈ 360 kr … plus ~1,5–2 h säljartid ≈ 300–400 kr → **totalt 650–750 kr = FÖRLUST**
- Kalkylen går ihop först vid: CPL ≤ 10 kr OCH avslut ≥ 12 % OCH billig säljartid (egen tid i starten)
  → då ~180 kr leads + ~200 kr tid ≈ 380 kr per avtal = knapp vinst

**Direktorder via sajten (per bekräftat avtal):**
- Ingen säljartid. Meta-annons direkt mot bestall.html: CAC 200–350 kr i denna nisch → **marginal 50–200 kr/avtal**

**Slutsatser (styr hela strategin):**
1. **Direktordrar via sajten är den mest lönsamma kanalen** — prioritera retargeting och köp-kampanjer
2. Telemarketing funkar som volymkanal bara med topptrimmad funnel — mät kostnad per avtal varje vecka i admin-portalen
3. **Förhandla mer med partnern så fort vi visar volym:** revshare på månad 2+ eller höjning till
   500–600 kr/avtal. 400 kr engångs är lågt när kundens LTV för partnern är 900+ kr
4. Ring alltid färska leads (< 72 h) — varje procentenhet i avslutsgrad är skillnaden mellan vinst och förlust

---

## Varumärke

### Namnet är BESLUTAT: Vivanord ✅ (2026-07-14)
Historik: första arbetsnamnet var *NordVital*, men nordvital.com visade sig upptaget. Kunden
valde **Vivanord** — "viva" = liv, fungerar på både svenska och spanska (bonus för ES-målgruppen)
— och **vivanord.se är bekräftat ledigt**. Allt material är omdöpt.

**Status domän:**
1. ✅ **vivanord.se KÖPT** (2026-07-14) — sajten kan kopplas, se `DEPLOY.md`
2. ☐ Sök "vivanord" i PRV:s varumärkesdatabas + EUIPO eSearch — juridisk slutkoll före lansering
3. ☐ Överväg varumärkesregistrering hos PRV (~2 000 kr, klass 5 kosttillskott) — billig försäkring
4. ☐ Ev. vivanord.nu som skydd (~200 kr/år)

**Varumärkeslöfte:** "Kosttillskott utan krångel — och utan fula trick."

**Visuell identitet (används på hemsidan):**
- Färger: djupgrön (#1d5c4d) + krämvit (#faf7f2) + accent salviagrön (#7fb069)
- Typografi: ren sans-serif, mycket luft, stora trygghetsbadges
- Ton: varm, rak, svensk. Inga superlativ, inga mirakel. "Vi säger bara det forskningen tillåter."

## Produktlinje (EFSA-säkra påståenden)

| Produkt | Innehåll | Godkänt påstående (exempel) |
|---|---|---|
| **Immun+** | Betaglukaner, C, D, zink, selen | "Vitamin C, D, zink och selen bidrar till immunsystemets normala funktion" |
| **Beauty+** | Hyaluronsyra, biotin, CoQ10, zink | "Biotin bidrar till att bibehålla normalt hår och normal hud" |
| **Flex+** | Kollagen, vitamin C, mangan | "Vitamin C bidrar till normal kollagenbildning som har betydelse för broskets normala funktion" |
| **Absorb+** | Mjölksyrabakterier, fruktenzymer, magnesium, kalcium | "Magnesium bidrar till att minska trötthet och utmattning" |

> Obs: hyaluronsyra, kollagen och Q10 har INGA godkända EFSA-påståenden — påståenden kopplas
> alltid till vitaminet/mineralet i produkten, aldrig till dessa ingredienser direkt.

## Nästa steg
1. Kunden godkänner varumärkesnamn + kollar domän och register
2. Hitta leverantör av private label-kosttillskott (svensk/EU-tillverkare, brevlådevänlig förpackning)
3. Registrera företaget som livsmedelsföretagare hos kommunen (krav för kosttillskott)
4. Sätt upp Meta Business Manager, pixel, e-postverktyg (t.ex. Klaviyo) och betalning (Klarna/Stripe)
5. Lansera enligt `marketing-plan.md`
