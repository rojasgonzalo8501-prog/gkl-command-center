# Leveransformat — send-ready frågor till Rojdix + Medvital

> Dessa två svar låser upp de största automationerna: **lead → Rojdix** och **order → Medvital**.
> Utan formatet kan jag inte bygga rören färdiga. Meddelandena nedan är klara att skicka rakt av
> — kopiera och klistra in. Se [[automation-blueprint]] för varför de betyder mest.

---

## Till Rojdix Telemarketing (låser upp lead-automationen)

**Ämne:** Vivanord — hur vill ni ta emot leadsen?

> Hej,
>
> Vi är snart igång med att skicka leads från Hälsoklubben. Jag vill automatisera överföringen
> helt så inget hamnar mellan stolarna. För att bygga det rätt behöver jag veta hur ni vill ta
> emot dem:
>
> 1. **Format:** vill ni ha ett **API** (en URL vi POST:ar varje lead till), en **CSV-fil per
>    mejl** (t.ex. dagligen), eller matar ni in dem i en **egen portal**?
> 2. Om API: vilken URL, och vilka fält/vilket format förväntar ni er? Skicka gärna ett exempel.
> 3. **Frekvens:** direkt vid varje lead (helst, färska leads ringer bäst), eller en batch per dag?
> 4. **Fält vi kan skicka:** namn, telefon, e-post, tidsstämpel för samtycket, samt två profilfält
>    från vårt quiz — **ålder** och **hälsoområde** (t.ex. "leder & rörlighet") som talar om vad
>    kunden vill ha stöd med. Vill ni ha med profilfälten? De gör att er säljare vet vad hen ska
>    pitcha direkt.
> 5. **Återrapportering:** kan ni skicka tillbaka utfallet per lead (bekräftad / nej / ånger) så vi
>    kan uppdatera vår status automatiskt och slippa ringa redan avslutade kunder?
>
> Ju enklare format desto snabbare är vi igång.
>
> Vänliga hälsningar,
> Gonzalo — Vivanord

---

## Till Medvital (låser upp order-automationen)

**Ämne:** Vivanord — orderöverföring: vilket format vill ni ha?

> Hej,
>
> När kunder beställer på vår sajt vill jag skicka ordern till er automatiskt så ni kan packa,
> leverera och fakturera utan manuellt mellansteg. För att bygga det behöver jag veta:
>
> 1. **Format:** **API** (URL vi POST:ar varje order till), **CSV/mejl**, eller **egen portal**?
> 2. Om API: URL + vilka fält och vilket format ni förväntar er (gärna ett exempel).
> 3. **Fält vi skickar:** produkt, namn, e-post, telefon, leveransadress, tidsstämpel, samt vilket
>    pris/upplägg som gäller (399 kr / 199 kr för Absorb+). Saknas något ni behöver?
> 4. **Orderbekräftelse tillbaka:** kan ni bekräfta mottagen order (så vi vet att den gått fram),
>    och meddela när den skickats så vi kan trigga vårt kundmejl?
>
> Vänliga hälsningar,
> Gonzalo — Vivanord

---

## När svaren kommer

| Svar | Vad jag bygger |
|---|---|
| Rojdix API/format | `vivanord-lead-to-rojdix.json` — nytt lead med telefonsamtycke → skickas automatiskt + loggas |
| Rojdix återrapport | Auto-statusuppdatering i admin (bekräftad/nej/ånger) |
| Medvital API/format | `vivanord-order-to-medvital.json` — ny order → skickas i deras format |
| Medvital skickat-notis | Trigga kundens "din låda är på väg"-mejl |

*Relaterat: [[automation-blueprint]] · [[rojdix-leadmottagare]] · [[medvital-mote]]*
