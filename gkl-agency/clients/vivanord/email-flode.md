# E-post & SMS-flöde — Vivanord (färdigt att lägga in i Brevo)

Svenska först (lanseringsmarknad). All copy följer samma regler som annonserna:
inga hälsopåståenden utöver EFSA, transparent pris, dubbel opt-in för GDPR.
Ersätt [hakparenteser] och knapplänkar innan aktivering.

> **Omskriven 2026-07-16.** Flödet sålde "99 kr första månaden" (ett pris som aldrig funnits
> hos Medvital) och "du säger upp med ett mejl — det gäller direkt" (verkligheten: 14 dagars
> varsel). Tre saker till togs bort:
> - **Falsk brådska.** "Gäller i 48 timmar till" och "går ut ikväll" om ett erbjudande som
>   inte gick ut. Projektets egna annonsregler i [[meta-lansering]] förbjuder uttryckligen
>   falsk brådska — flödet bröt mot vår egen policy.
> - **Påhittad kundrecension.** *"Äntligen en prenumeration jag faktiskt kunde säga upp när
>   jag ville."* — [kund, ort]. En platshållare för ett citat ingen sagt. Skriv aldrig
>   recensioner åt kunder; använd riktiga när ni har dem.
> - **"Välkomstgåva"-inramningen.** Vi ger ingen gåva — vi vidarebefordrar Medvitals
>   ordinarie introduktionspris på Absorb+.
>
> ⚠️ Absorb+ 199 kr är märkt *"tidsbegränsat erbjudande"* hos Medvital. Bekräfta hur länge
> det gäller innan flödet aktiveras — se [[medvital-mote]] punkt 6.

**Avsändarnamn:** Vivanord · **Från:** [hej@vivanord.se] · **Svara till:** samma
**Verktyg:** Brevo (gratis 300 mejl/dag). Skapa en automation "Välkomstflöde – leads".

---

## FLÖDE A — Nya tävlingsleads (7 dagar, utlöses vid formulärskick)

### ✉️ Mejl 0 — Dag 0, direkt: Bekräfta din e-post (DUBBEL OPT-IN — obligatoriskt)
- **Ämne:** Bekräfta din e-post — så är du med i dragningen 🎁
- **Förhandstext:** Ett klick kvar till tävlingen om 10 000 kr.
- **Brödtext:**
  > Hej [FÖRNAMN]!
  >
  > Tack för att du gick med i Hälsoklubben. Klicka på knappen nedan för att
  > bekräfta din e-post — då är du med i månadens dragning om ett presentkort
  > på 10 000 kr.
  >
  > **[ Bekräfta min e-post ]**
  >
  > Bekräftar du inte kan vi tyvärr inte ta med dig i dragningen eller skicka
  > din välkomstgåva.
- **Knapp:** Bekräfta min e-post → [dubbel-opt-in-länk]
- *Obs: leads som inte bekräftar inom 3 dagar får ETT påminnelsemejl, sedan inget mer (GDPR).*

### ✉️ Mejl 1 — Dag 1: Varför vi finns
- **Ämne:** Därför startade vi Vivanord
- **Förhandstext:** Kosttillskott utan krångel — och utan fula trick.
- **Brödtext:**
  > Kosttillskott på prenumeration har fått dåligt rykte: dolda villkor och avtal
  > som är omöjliga att ta sig ur. Vi tyckte det var dags att göra tvärtom.
  >
  > Hos oss står priset alltid tydligt, fakturan kommer med lådan, och uppsägningsregeln
  > är utskriven i klartext: säg upp senast 14 dagar före nästa leverans, så uteblir den.
  > Inga asterisker.
  >
  > Vill du prova är **Absorb+ nere på 199 kr första månaden** — halva priset.
  >
  > **[ Se produkterna ]**
- **Knapp:** Se produkterna → [produkter.html]

### ✉️ Mejl 2 — Dag 3: Utbildande (bygger förtroende, säljer mjukt)
- **Ämne:** 5 sätt att se om ett kosttillskott är seriöst
- **Förhandstext:** En liten checklista innan du köper — oavsett märke.
- **Brödtext:**
  > Innan du köper kosttillskott, kolla det här — det gäller oss och alla andra:
  >
  > 1. **Tydligt innehåll** — står varje ingrediens och mängd på förpackningen?
  > 2. **Godkända påståenden** — seriösa märken lovar aldrig mirakel, bara det EU:s
  >    regler tillåter (t.ex. "vitamin C bidrar till immunförsvarets normala funktion").
  > 3. **Tillverkat inom EU** — under kontrollerade regler.
  > 4. **Enkel uppsägning** — du ska kunna avsluta utan att tjata dig ur ett avtal.
  > 5. **Öppet pris** — du ska veta exakt vad det kostar innan du beställer.
  >
  > Vi byggde Vivanord för att klara alla fem. Vill du testa oss kostar Absorb+
  > 199 kr första månaden.
  >
  > **[ Prova Absorb+ för 199 kr ]**
- **Knapp:** Prova Absorb+ för 199 kr → [bestall.html?produkt=mage]

### 📱 SMS — Dag 5 (endast om telefonsamtycke finns)
- **Text:** Hej [FÖRNAMN]! Vivanord här — Absorb+ kostar 199 kr första månaden, halva
  priset. [kort-länk] Avreg: svara STOPP.

### ✉️ Mejl 3 — Dag 7: Påminnelse
- **Ämne:** Absorb+ första månaden — 199 kr i stället för 399 kr
- **Förhandstext:** Ingen bindningstid. Betala mot faktura.
- **Brödtext:**
  > Hej [FÖRNAMN], vi hörde inte av dig — så här är erbjudandet igen.
  >
  > Absorb+ kostar 199 kr första månaden i stället för 399 kr. Levereras i brevlådan,
  > du betalar mot faktura när den kommit. Därefter 399 kr + 59 kr frakt var fjärde vecka.
  > Ingen bindningstid — säg upp senast 14 dagar före nästa leverans, så uteblir den.
  >
  > **[ Se erbjudandet ]**
  >
  > P.S. Oavsett om du handlar är du kvar i månadens dragning om 10 000 kr. 🎁
- **Knapp:** Se erbjudandet → [bestall.html?produkt=mage]

---

## FLÖDE B — Kunder (retention — churn är hela affären)

### ✉️ Orderbekräftelse (direkt vid beställning)
- **Ämne:** Tack för din beställning, [FÖRNAMN]! 📬
- Innehåll: vad de beställt, att fakturan kommer med lådan (399 kr + 59 kr frakt, eller
  199 kr + 59 kr för Absorb+), leverans 1–3 vardagar, att prenumerationen sedan är
  1 197 kr + 59 kr frakt var 3:e månad (Absorb+: 399 kr + 59 kr var 4:e vecka), och
  hur man säger upp — **senast 14 dagar före nästa leverans**. Länk till [Mina villkor / kundtjänst].
  ⚠️ Beloppet måste följa den beställda produkten — hårdkoda inte ett pris i mallen.

### ✉️ Påminnelse före debitering (t.ex. 5 dagar före varje ny leverans)
- **Ämne:** Din nästa Vivanord-låda är på väg
- Innehåll: nästa leveransdatum + belopp, tydligt. Länk för att pausa/avsluta.
  *(Detta minskar kortbestridanden och Konsumentverket-anmälningar rejält.)*

### ✉️ Dag 10 efter första leverans: användartips + mjuk upsell
- **Ämne:** Så får du ut mest av [PRODUKT]
- Innehåll: hur/när man tar produkten (EFSA-säkra formuleringar), + "många
  kombinerar med [annan produkt]".

### ✉️ Vinn-tillbaka (utlöses vid uppsägning)
- **Ämne:** Innan du går — får vi fråga en sak?
- Innehåll: kort enkät (varför avslutar du?) + erbjudande att pausa istället, eller
  50 % på en månad. Ingen press.

### ✉️ Månadsbrev (1×/månad till hela listan)
- Hälsotips (EFSA-säkra), produktnyheter, **månadens tävlingsvinnare** (knyter ihop
  Hälsoklubben-loopen och håller listan varm).

---

## Att göra i Brevo före aktivering
- [ ] Skapa konto + verifiera avsändardomän (SPF/DKIM för [vivanord.se] — görs när domänen är live)
- [ ] Lägg in de fyra välkomstmejlen + SMS:et som en automation utlöst av formulärskick
- [ ] Koppla formulären till Brevo (via API eller Zapier/Make) ELLER exportera leads från
      admin-portalen och importera — bäst är direktkoppling när backend finns
- [ ] Sätt dubbel opt-in så bara bekräftade e-postadresser får flöde B
- [ ] Fyll i [hakparenteser], knapplänkar och en riktig kundrecension
