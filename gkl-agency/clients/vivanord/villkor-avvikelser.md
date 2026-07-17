# 🔴 Villkorsavvikelser — vår sajt vs Medvitals faktiska villkor

> **Hittat 2026-07-16** när hela medvital.se hämtades och jämfördes mot vår sajt.
> **Ingenting av detta får gå live som det står.** Sajten är inte publicerad än, så ingen
> kund är drabbad — men varje rad nedan är ett löfte vi inte kan hålla.

## Avvikelsen

| | |
|---|---|
| **Vår sajt lovar** | Uppsägning "gäller direkt", "ett mejl räcker", "senast dagen före nästa leverans" |
| **Medvitals köpvillkor kräver** | *"uppsägning ske **senast 14 dagar innan** nästa planerade leveransdatum"* |
| **Skillnad** | 13 dagar — och en faktura på **1 197 kr** för kunden som tror på oss |

Medvitals två formuleringar är inte motstridiga: uppsägningen *gäller* omedelbart från nästa
leverans, **men måste göras minst 14 dagar i förväg**. Vi har läst den första meningen och
missat den andra.

## 🔴 Värst: kassasidan

`bestall.html:154–155` — exakt där kunden binder sig:

> "**Ingen bindningstid.** Avsluta när som helst via e-post eller telefon **senast dagen före
> nästa leverans**. Uppsägningen gäller direkt."

Vi instruerar kunden att säga upp "dagen före". Gör de precis det får de nej av Medvitals
kundtjänst och nästa låda skickas — 1 197 kr + 59 kr. Kunden följde **våra** instruktioner.

Samma fel i spanska `es/pedido.html:147–148`: *"a más tardar el día antes del próximo envío"*.

## Alla träffar (~24 st)

### Svenska
| Fil | Rad | Text |
|---|---|---|
| `bestall.html` | 154–155 | 🔴 "senast dagen före nästa leverans. Uppsägningen gäller direkt" |
| `bestall.html` | 196 | "Avsluta när som helst… det tar under en minut" |
| `index.html` | 41 | "ett mejl räcker, och det gäller direkt" |
| `index.html` | 55 | Trust-item: "Avsluta när du vill" |
| `index.html` | 126–127 | "Ändra dig när du vill… uppsägningen gäller direkt" |
| `index.html` | 145 | "Uppsägningen är lika enkel som köpet… det gäller direkt" |
| `index.html` | 176 | FAQ: "under en minut och gäller direkt från nästa leverans" |
| `index.html` | 180 | "Du kan pausa eller avsluta när du vill" |
| `index.html` | 206 | "Avsluta när du vill" |
| `produkter.html` | 56 | Trust-item: "Avsluta när du vill" |
| `produkter.html` | 152 | "Pausa eller avsluta när du vill" |
| `villkor.html` | 96 | "säga upp prenumerationen när som helst, utan bindningstid" |

### Spanska (speglar exakt)
`es/index.html` 40, 54, 125–126, 144, 175, 179, 205 · `es/pedido.html` 147–148, 189 ·
`es/productos.html` 53, 150

### Annonser i [[meta-lansering]]
| Annons | Påstående |
|---|---|
| **2A** | "avsluta när du vill med ett mejl" |
| **2B** | "uppsägningen tar en minut via mejl" |
| **3A** | "puedes cancelar cuando quieras con un simple correo" |
| **3B** | "con cancelación en un minuto por correo" |

## Varför detta är allvarligare än en textmiss

1. **Meta stänger konton för precis detta.** [[meta-lansering]]s egen policygenomgång slår fast
   att prenumerationsupplägg (negative option) kräver att villkoren anges korrekt, och att
   *"landningssidan måste matcha annonsen"*. Här matchar varken annons eller landningssida
   verkligheten. Det är inte en gråzon — det är kategorin som fäller konton.
2. **Annons 2B är transparensannonsen.** Den säljer på att vi är ärliga: *"Prenumerationer med
   dolda villkor har gett branschen dåligt rykte. Vivanord är byggt tvärtom."* Att ha det
   felaktiga påståendet i just den annonsen är den sämsta tänkbara placeringen.
3. **Konsumenträttsligt.** Vi är inte juridisk säljare — Medvital är. Men det är **vår** sajt
   som lämnar uppgiften, och vilseledande uppgift om ångerrätt/uppsägning i marknadsföring
   ligger på den som marknadsför.
4. **Det underminerar hela positioneringen.** "Ingen bindningstid" är ärligt och sant.
   "Gäller direkt" är det inte. Vi behöver inte det andra för att sälja det första.

## Fixen

**"Ingen bindningstid" är fortfarande sant och får stå kvar.** Det är bara uppsägnings*fönstret*
som måste bli korrekt. Förslag på ny standardformulering:

> **Ingen bindningstid.** Säg upp när du vill via kundtjänst — senast 14 dagar före nästa
> leverans, så uteblir den.

Och i FAQ:

> **Hur avslutar jag?** Mejla eller ring Medvitals kundtjänst. Säg upp senast 14 dagar före
> nästa planerade leverans, så stoppas den. Du behöver inte ange någon anledning, och det
> finns ingen bindningstid.

Annonserna 2A/2B/3A/3B behöver skrivas om på samma sätt — "avsluta när du vill med ett mejl"
byts mot något i stil med "ingen bindningstid — säg upp senast 14 dagar före nästa leverans".

## Innan vi rättar

⚠️ **Bekräfta 14-dagarsregeln direkt med Medvital.** Detta är läst från deras publicerade
köpvillkor, men det är deras regel och de äger kundservicen. Fråga:

> "Era köpvillkor anger att uppsägning ska ske senast 14 dagar före nästa planerade leverans.
> Stämmer det, och gäller det även för kunder som kommer via oss? Vi behöver ange det korrekt
> på vår sajt."

Punkt 8 i [[medvital-mote]] är uppdaterad med den frågan.

*Relaterat: [[medvital-katalog]] · [[medvital-mote]] · [[meta-lansering]] · [[STATUS]]*
