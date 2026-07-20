# Annonsmaterial — Hälsoklubben (Kampanj 1, leadgen)

Färdiga bildkreativ för **Kampanj 1 🇸🇪 Hälsoklubben Leads** — kampanjen som startar först
(dag 1–4 ensam enligt uppvärmningsregeln). Copyn är hämtad ordagrant från
[`clients/vivanord/meta-lansering.md`](../../../clients/vivanord/meta-lansering.md) och är redan
policygranskad mot Metas annonsstandarder.

**Producerat 2026-07-20.** Tre statiska kreativ (1A, 1B, 1C) × tre format. Ingen produktbild krävs
för någon av dem. Videokreativ 1D (UGC) filmas separat — manus finns i
[`clients/vivanord/ugc-videomanus.md`](../../../clients/vivanord/ugc-videomanus.md).

---

## Formaten (varje kreativ finns i alla tre)

| Fil-suffix | Mått | Placering |
|---|---|---|
| `_1x1` | 1080 × 1080 | Feed (kvadrat) |
| `_4x5` | 1080 × 1350 | Feed vertikal (störst yta i mobilflödet) |
| `_9x16` | 1080 × 1920 | Stories / Reels |

Ladda upp alla tre per annons så Meta väljer rätt format per placering (Advantage+).

---

## Så sätter du upp annonsgruppen

- **Kampanj:** Hälsoklubben Leads · Mål **Leads**, optimera mot **Lead**-eventet · 250 kr/dag (CBO)
- **Målgrupp:** Sverige · 35–65+ · alla kön · intressen: hälsa & välbefinnande, kosttillskott, vitaminer, matlagning, promenader
- **Placeringar:** Advantage+ (auto)
- **Destination (alla annonser):** `https://halsoklubben.vivanord.se/?utm_source=facebook&utm_campaign=halsoklubben`

Lägg **1A, 1B och 1C som separata annonser i samma annonsgrupp** och låt Meta fördela budgeten.
Rör ingenting de första 3–4 dagarna (inlärningsfasen).

---

## Annons 1A — Tävlingen
**Filer:** `vivanord_1a_1x1.png` · `vivanord_1a_4x5.png` · `vivanord_1a_9x16.png`

- **Primärtext:** Svara rätt på 4 enkla hälsofrågor — så är du med och tävlar om ett presentkort på 10 000 kr till valfri matbutik. 🛒 Gratis att delta, tar under en minut. Ny vinnare varje månad!
- **Rubrik:** Tävla om 10 000 kr till matkassen
- **Beskrivning:** 4 frågor · 1 minut · Gratis
- **Knapp:** Läs mer

## Annons 1B — Quizvinkeln
**Filer:** `vivanord_1b_1x1.png` · `vivanord_1b_4x5.png` · `vivanord_1b_9x16.png`

- **Primärtext:** Vilket vitamin bildar kroppen av solljus? ☀️ Om du kan svaret har du chans på månadens presentkort på 10 000 kr. Fyra frågor — sen är du med i dragningen.
- **Rubrik:** Kan du svaren? Tävla nu
- **Knapp:** Läs mer

## Annons 1C — Ren grafik
**Filer:** `vivanord_1c_1x1.png` · `vivanord_1c_4x5.png` · `vivanord_1c_9x16.png`

- **Primärtext:** Hälsoklubbens månadsutlottning är öppen. Svara på fyra korta frågor om hälsa och delta i dragningen om ett presentkort på 10 000 kr. Kostnadsfritt — alltid.
- **Rubrik:** Månadens dragning är öppen
- **Knapp:** Registrera dig

> Enligt annonsmaterial-briefen är **1C** ofta den som ger bäst avkastning — prioritera den om du
> bara orkar lansera en. 1A och 1B är resten av Hälsoklubben-uppsättningen.

---

## Compliance (redan inbyggt i kreativen)
- ✅ Inga hälsopåståenden — bara pris, tävling och villkor
- ✅ Inget om mottagaren (ingen ålder/hälsa/egenskap)
- ✅ Ingen Meta/Facebook/Instagram-logga, inget som antyder att Meta står bakom tävlingen
- ✅ Inga versaler-utrop, ingen falsk brådska, ingen clickbait
- ✅ Landningssidan (`halsoklubben.vivanord.se`) matchar annonsen och har tävlingsvillkoren länkade

Fullständig policygenomgång: [`meta-lansering.md`](../../../clients/vivanord/meta-lansering.md).

---

## Videokreativ (animerad, ingen avatar)
**Fil:** [`video/halsoklubben_reel_9x16.mp4`](video/) — 1080×1920, 12 sek, textad, ljudlös.
Animerad motion-graphics (hook → quiz-demo → "kvalificerat dig" → CTA), renderad från kod.
Lägg som egen annons i samma annonsgrupp. Detaljer + varför det inte är en AI-avatar: [`video/README.md`](video/README.md).

## Fortfarande kvar (inte kreativ)
- **1D UGC-video med riktig person** — filmas på telefon i matbutik. Fyra manus i `ugc-videomanus.md`.
  (Den animerade videon ovan täcker video-behovet tills du spelar in en äkta person.)
- **Kampanj 2 (2A, 2C)** — väntar på riktiga produktbilder från Medvital.
- Innan skarp trafik: se checklistan i `clients/vivanord/LANSERING.md` (Meta-konto, pixel, Supabase).

---

## Regenerera / redigera kreativen
Källfilerna ligger i `source/`. Kräver Node + Chromium (Playwright).

```bash
cd source
bash fetch-fonts.sh                       # skapar inter-embed.css (inbäddad Inter)
node render.mjs                            # renderar alla 9 PNG till source/out/
```

Redigera texten direkt i `creative-1a.html` / `-1b.html` / `-1c.html` och kör om.
Varje fil läser formatet från `?fmt=1x1|4x5|9x16`. Varumärkesfärger/typografi i `shared.css`.
