# E-post & SMS-flöde — Vivanord (färdigt att lägga in i Brevo)

Svenska först (lanseringsmarknad). All copy följer samma regler som annonserna:
inga hälsopåståenden utöver EFSA, transparent pris, dubbel opt-in för GDPR.
Ersätt [hakparenteser] och knapplänkar innan aktivering.

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
  > Hos oss står priset alltid tydligt (99 kr första månaden, sedan 399 kr/mån),
  > fakturan kommer med lådan, och du säger upp med ett mejl — det gäller direkt.
  >
  > Som tack för att du är med: **prova din första låda för 99 kr.**
  >
  > **[ Se produkterna ]**
- **Knapp:** Se produkterna → [bestall.html]

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
  > Vi byggde Vivanord för att klara alla fem. Din provmånad kostar 99 kr.
  >
  > **[ Prova för 99 kr ]**
- **Knapp:** Prova för 99 kr → [bestall.html]

### 📱 SMS — Dag 5 (endast om telefonsamtycke finns)
- **Text:** Hej [FÖRNAMN]! Din välkomstgåva från Vivanord — prova första lådan för
  99 kr — gäller i 48 timmar till. [kort-länk] Avreg: svara STOPP.

### ✉️ Mejl 3 — Dag 7: Sista chansen + socialt bevis
- **Ämne:** Sista chansen: 99 kr-erbjudandet går ut ikväll
- **Förhandstext:** Ingen bindningstid. Avsluta när du vill.
- **Brödtext:**
  > Hej [FÖRNAMN], din välkomstgåva går ut ikväll.
  >
  > Prova valfri Vivanord-produkt för 99 kr första månaden. Levereras i brevlådan,
  > betala mot faktura, ingen bindningstid — avsluta med ett mejl när du vill.
  >
  > *"Äntligen en prenumeration jag faktiskt kunde säga upp när jag ville."* — [kund, ort]
  >
  > **[ Hämta mitt erbjudande ]**
  >
  > P.S. Även om du inte handlar är du kvar i månadens dragning om 10 000 kr. 🎁
- **Knapp:** Hämta mitt erbjudande → [bestall.html]

---

## FLÖDE B — Kunder (retention — churn är hela affären)

### ✉️ Orderbekräftelse (direkt vid beställning)
- **Ämne:** Tack för din beställning, [FÖRNAMN]! 📬
- Innehåll: vad de beställt, att fakturan (99 kr) kommer med lådan, leverans 1–3
  vardagar, att prenumerationen sedan är 399 kr/mån + frakt var 3:e månad, och
  hur man avslutar. Länk till [Mina villkor / kundtjänst].

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
