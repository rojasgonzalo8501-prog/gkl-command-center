# CLAUDE.md — NordVital (arbetsnamn)

> **Viktigt:** Svensk kund — allt innehåll skrivs på **svenska** om inget annat sägs.

## Vad är detta?
**NordVital** är arbetsnamnet för en ny D2C-kund som säljer **kosttillskott på prenumeration** i Sverige.
Samma produkttyp och affärsmodell som **medvital.se** (referens 1), med kundanskaffning via
tävlings-/leadgenereringssidor i stil med **sparklubben.nu/ICA** (referens 2) — men under eget varumärke.

- **Status:** Uppstart — varumärke, hemsida och marknadsföringsplan byggs
- **Språk:** Svenska
- **Kanaler:** Facebook + Instagram (Meta Ads) → landningssidor → e-post/SMS
- **Varumärkesnamn:** "NordVital" är ETT ARBETSNAMN. Kolla domän (.se), Bolagsverket/PRV och
  varumärkesregister innan lansering. Alternativ finns i `brief.md`.

## Affärsmodell (kort)
**Dropship-samarbete:** vi processar INGA betalningar och håller inget lager. Beställningar
från sajten och telemarketingen skickas till leverantörspartnern som packar, levererar och
fakturerar kunden (faktura medföljer lådan). Vår roll: varumärke, trafik, leads, försäljning.
Skriv aldrig in kortbetalning/Klarna i sajt eller copy — betalning sker alltid mot faktura via partnern.

Två varumärken, ett system:
- **Hälsoklubben** (kampanj.html) — fristående leadgen-sida: tävling/quiz som samlar leads
  med separata samtycken för e-post respektive telefon/SMS
- **NordVital** (nordvital.se) — huvudvarumärket: produkter, villkor, FAQ, Mina sidor

Flödet: FB/IG-annonser → Hälsoklubben → leads med telefonsamtycke → **telemarketing säljer
provmånaden (huvudsäljkanal)** → prenumeration utan bindningstid, leverans i brevlådan var 30:e dag.
Leads utan köp går till e-post/SMS-flöden och Meta-retargeting mot produktsidan.

## Positionering — VIKTIGT
Medvital har återkommande Trustpilot-klagomål om aggressiv telefonförsäljning och svåravslutade
prenumerationer. **NordVital säljer via telefon MEN gör det schysst — det är differentieringen:**
- "Avsluta med ett klick" — ingen bindningstid, uppsägning via självservice
- Skriftlighetskravet som löfte: inget avtal förrän kunden bekräftat skriftligt efter samtalet
- Schysst säljkodex: nej respekteras direkt, priset efter provmånaden sägs alltid oombett,
  max 3 kontaktförsök, ingen press på osäkra/förvirrade personer
- Full transparens om pris och villkor redan i annonsen
- Skriv ALDRIG "vi ringer aldrig upp dig" i copy — telemarketing är en huvudkanal

## Regelefterlevnad — LÄS INNAN ALLT INNEHÅLL SKAPAS
Detta är en **reglerad bransch** (hälsa). Innan något publiceras:
1. **Hälsopåståenden:** Endast EFSA-godkända påståenden enligt EU-förordning 1924/2006.
   Formatet är alltid "[näringsämne] bidrar till [godkänd funktion]" — t.ex. "Vitamin C bidrar till
   immunsystemets normala funktion". ALDRIG påståenden om att bota, behandla eller förebygga sjukdom.
2. **Meta Ads-policy:** Inga före/efter-bilder, inga påståenden om personliga egenskaper
   ("Har du ont i lederna?" är förbjudet — skriv "För dig som vill stötta lederna"), inga mirakelresultat.
3. **GDPR:** Uttryckligt samtycke för marknadsföring i alla formulär (separata rutor för e-post
   och telefon, aldrig förkryssade), dubbel opt-in för e-post, tidsstämpla varje samtycke.
4. **Telefonförsäljning:** Skriftlighetskravet (distansavtalslagen) — muntligt ja är INTE bindande,
   kunden måste bekräfta skriftligt efter samtalet. NIX-kontroll för leads utan aktivt samtycke.
   Inspelningsupplysning. Endast 18+.
5. **Konsumentskydd:** 14 dagars ångerrätt, tydliga prenumerationsvillkor FÖRE köp,
   uppsägning ska vara lika enkel som tecknande (Konsumentverkets krav).
6. **Tävlingar:** Gratis deltagande + kunskapsmoment (frågor) = OK utan lotterilicens.
   Tävlingsvillkor måste finnas länkade på kampanjsidan, med NordVital AB angiven som arrangör.

## Filer i denna mapp
- `brief.md` — analys av de två referenssidorna + affärsmodell + namnförslag
- `marketing-plan.md` — komplett Facebook/Instagram-plan med funnel, budget och innehållskalender

## Partneravtal (överenskommet)
- **Ersättning: 400 kr per bekräftat avtal** (engångs), **utbetalas vid bekräftat avtal**.
  Partnern har allt juridiskt säljansvar, kundservice, ångerrätt, fakturering. **Vi äger leadsen.**
- **Intäktsström 2: leadlistan säljs per lead** och **ÖVERLÅTS** till partnerbolaget som ringer
  i eget namn. Endast leads med telefonsamtycke är säljbara. Pris = självkostnad + minst 50 % —
  räknas i admin-portalens Leadkalkyl-flik. Samtyckestexten på kampanj.html är skriven för
  överlåtelse — **platshållaren [PARTNERBOLAGET AB] måste ersättas med partnerns juridiska namn
  före lansering**, annars är överlåtelsen ogiltig enligt GDPR.
- Kvar att klargöra: ev. clawback vid ånger, orderformat, pris per lead — se brief.md

## Leveranser
- Hemsida: `deliverables/websites/nordvital/` — index.html (hem), produkter.html,
  kampanj.html (Hälsoklubben leadgen), bestall.html (direktorder mot faktura)
- Admin-portal: `deliverables/websites/nordvital/admin/` — back office för leads/ordrar/ersättning.
  Prototyp på localStorage (formulären på sajten skriver till den); byts mot riktig databas
  (Supabase/Airtable) före lansering. PIN 1234 — endast demo, kräver riktig auth i produktion.
