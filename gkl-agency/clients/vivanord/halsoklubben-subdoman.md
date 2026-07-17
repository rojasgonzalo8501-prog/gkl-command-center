# Hälsoklubben — egen subdomän, avlänkad från dropship-sajten

> **Beslut 2026-07-16:** tävlingen ska **inte synas på vivanord.se**. Den är en ren
> leadgen-funnel som bara nås via direktlänk i annonser. Ingen "Tävling"-flik, ingen
> footer-länk, ingen CTA. Sajten och Hälsoklubben är två skilda saker som råkar dela varumärke.

## Varför

Dropship-sajten säljer Medvitals produkter. Hälsoklubben samlar leads åt Rojdix. Olika syften,
olika mottagare, olika juridik — och en besökare som kom för att köpa ska inte lockas in i en
tävling. Det håller också annonskontona isär: `meta-lansering.md` kör Hälsoklubben som egen
kampanj mot kall trafik, medan sajten tar retargeting och direktköp.

## Vad som är gjort

**Alla länkar från dropship-sajten till tävlingen är borta:**

| Fil | Vad som togs bort |
|---|---|
| `index.html` | Nav-flik "Tävling 🎁" + footer-länk |
| `produkter.html` | Nav-flik + footer-länk + hela CTA-bannern "Till tävlingen 🎁" (ersatt med en beställ-CTA) |
| `bestall.html` | Nav-flik |
| `villkor.html` | Nav-flik |
| `integritetspolicy.html` | Nav-flik |

ES-navigationen hade aldrig någon tävlingslänk — den var redan avlänkad.

**Tävlingssidorna är fristående:**
- `kampanj.html` hade redan ingen nav.
- `tavlingsvillkor.html` och `es/condiciones-sorteo.html` hade full huvudsajts-nav — nu ersatt
  med enbart Hälsoklubben-logga + "Till tävlingen".
- **Alla länkar tillbaka till dropship-sajten är absoluta** (`https://vivanord.se/...`) i stället
  för relativa. Det är nödvändigt: på en subdomän skulle `produkter.html` peka på
  `halsoklubben.vivanord.se/produkter.html`, som inte finns.
- Alla fyra tävlingssidor har `noindex` sedan tidigare — de dyker inte upp i Google.

## Funneln (fyra filer)

```
kampanj.html            → tavlingsvillkor.html        (SV)
es/campana.html         → es/condiciones-sorteo.html  (ES, pausad tills ES-säljare finns)
```
Delade resurser: `styles.css`, `main.js`, `cookies.js`.

## ⚠️ Kvar: subdomänen är inte uppsatt

Filerna ligger fortfarande i samma mapp som sajten och deployas i samma Vercel-projekt. De är
**avlänkade men inte flyttade** — går man direkt till `vivanord.se/kampanj.html` finns den kvar.
För en riktig subdomän behöver du välja väg:

**Alternativ A — eget Vercel-projekt (renast).**
Flytta de fyra filerna + kopior av `styles.css`/`main.js`/`cookies.js` till en egen mapp, t.ex.
`gkl-agency/deliverables/websites/vivanord-halsoklubben/`, och skapa ett andra Vercel-projekt med
den mappen som Root Directory. Peka `halsoklubben.vivanord.se` dit. Helt separerat: egen deploy,
egen pixel om man vill, ingen risk att sajten läcker tävlingen.
*Kostnad: `main.js` innehåller både orderformulärs- och leadformulärslogik, så den dupliceras.*

**Alternativ B — samma projekt, rewrite på host.**
Lägg `vercel.json` i sajtmappen som mappar `halsoklubben.vivanord.se/*` → `/kampanj.html` m.fl.
Mindre jobb, men filerna ligger kvar under `vivanord.se/kampanj.html` också om man inte
uttryckligen blockerar dem.

**Rekommendation: A.** Det matchar hur ni faktiskt tänker på dem — två separata saker — och gör
det omöjligt att av misstag länka ihop dem igen. Gör det när Vercel-deployen sätts upp, så slipper
du flytta ett live-projekt.

⚠️ Om du väljer A: `DEPLOY.md` beskriver bara ett projekt idag. Den behöver uppdateras med det
andra projektet + DNS-posten för subdomänen.

## Regler framåt

- **Lägg aldrig tillbaka en tävlingslänk i sajtens nav eller footer.** Det är hela poängen.
- Hälsoklubben nås bara via annonslänk: `halsoklubben.vivanord.se/?utm_source=facebook&utm_campaign=halsoklubben`
- Kampanj 1 i [[meta-lansering]] ska peka på subdomänen, inte på `vivanord.se/kampanj.html`.
  Uppdatera destinations-URL:en när subdomänen är uppe.
- Integritetspolicyn på sajten **ska** fortsätta beskriva tävlingsdata — den är personuppgifts-
  ansvarigs samlade information och måste täcka all behandling, även den som sker på subdomänen.

*Relaterat: [[rojdix-leadmottagare]] · [[meta-lansering]] · [[DEPLOY]] · [[marketing-plan]]*
