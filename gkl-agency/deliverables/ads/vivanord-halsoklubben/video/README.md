# Videokreativ — Hälsoklubben (9:16 Reels/Stories)

Animerade motion-graphics-videor (1080 × 1920, H.264/MP4, textade för muted autoplay, ljudlösa),
renderade från kod. **Inga AI-avatarer / inga syntetiska personer** — se avsnittet längst ner om varför.
Alla utom `_UTKAST` är klara att ladda upp i Kampanj 1 (Hälsoklubben).

## Filerna

| Fil | Koncept | Längd | Pris | Status |
|---|---|---|---|---|
| `halsoklubben_reel_9x16.mp4` | Quiz-demo i telefon (hook → quiz → kvalificerad → CTA) | 12 s | 10 000 kr presentkort | ✅ Klar |
| `halsoklubben_skraplott_9x16.mp4` | Digital **skraplott** som skrapas fram och avslöjar vinsten | 10 s | 10 000 kr presentkort | ✅ Klar |
| `halsoklubben_enfraga_9x16.mp4` | **En fråga** fullskärm (magnesium) → rätt → du är med | 9 s | 10 000 kr presentkort | ✅ Klar |
| `halsoklubben_utbetalning_9x16.mp4` | **Trygghet/bevis**: "+10 000 kr utbetalt av Medvital" | 10 s | 10 000 kr presentkort | ✅ Klar |
| `halsoklubben_odometer_9x16.mp4` | **Räkneverk** rullar till 10 000 kr · "varje månad" | 9 s | 10 000 kr presentkort | ✅ Klar |
| `halsoklubben_dromresa_9x16_UTKAST.mp4` | **Drömresa** ✈️ "vinn en resa värd 10 000 kr" | 10 s | **resa** värd 10 000 kr | 🔴 UTKAST |

Varje video har en `poster_*.png` (omslagsbild) om du vill sätta en egen thumbnail.

### 1:1 feed-versioner (för flödesplaceringar)
Tre av koncepten finns även i **1080 × 1080** för feed (kvadrat), där 9:16 beskärs illa:

| Fil | Koncept | Längd |
|---|---|---|
| `halsoklubben_enfraga_1x1.mp4` | En fråga | 9 s |
| `halsoklubben_utbetalning_1x1.mp4` | Utbetalning/trygghet | 10 s |
| `halsoklubben_odometer_1x1.mp4` | Räkneverk | 9 s |

Ladda upp 9:16 **och** 1:1 på samma annons så tar Advantage+ rätt format per placering
(9:16 → Reels/Stories, 1:1 → Feed). Källscenerna renderar 1:1 via `?ar=sq` (se nedan).

## 🔴 Läs innan du rör drömrese-videon (`_UTKAST`)
En annons måste matcha vad landningssidan faktiskt lottar ut — det är regel nr 1 för att inte få kontot
stängt (se `meta-lansering.md`).

✅ **Matchande tävlingssida är nu byggd** (2026-07-21):
`deliverables/websites/vivanord-halsoklubben/resa.html` + `resa-tavlingsvillkor.html` — samma funnel som
presentkort-tävlingen (samma hälsoquiz = samma leadkvalitet), men vinsten är ett **resepresentkort värt
10 000 kr**. Destinationslänk för annonsen:
`https://halsoklubben.vivanord.se/resa.html?utm_source=facebook&utm_campaign=dromresa`

🔴 **Kvar innan den får skarp trafik** (därför fortfarande `_UTKAST`):
1. **Medvital bekräftar SKRIFTLIGT** att de tillhandahåller och betalar ut resepriset (precis som med
   presentkortet). Utan det är vinsten inte täckt — lägg in det i Medvital-avtalet.
2. Samma steg-0-krav som resten av sajten: Rojdix + Vivanord org.nr i samtycket, juristgranskning av
   `resa-tavlingsvillkor.html`, pixel-ID. Se `clients/vivanord/LANSERING.md`.

När 1 + 2 är klara: döp om filen (ta bort `_UTKAST`) och kör den som vilken annons som helst.

## Så A/B-testar du
Lägg de klara videorna som **separata annonser i samma annonsgrupp** (Hälsoklubben, 250 kr/dag) och låt
Meta fördela budgeten. Rör ingenting de första 3–4 dagarna (inlärningsfasen). Läs av CTR (>1,2 %) och
CPL (<15 kr) enligt `meta-lansering.md`; behåll topp-2, spela in fler varianter på vinnarens vinkel.

- **Placering:** Reels + Stories (Advantage+ tar 9:16 automatiskt)
- **Destination:** `https://halsoklubben.vivanord.se/?utm_source=facebook&utm_campaign=halsoklubben`
- **Annonstext:** återanvänd 1A/1B från [`../README.md`](../README.md) — vinkeln matchar tävlingen.

## Compliance (inbyggt i alla)
Inga hälsopåståenden · inget om mottagaren · ingen Meta-logga · ingen falsk brådska · **inga syntetiska
personer/vittnesmål**. Quizfrågorna är allmänbildning. Alla priser utom `_UTKAST` matchar landningssidan.

## Varför ingen digital avatar / AI-person
En AI-genererad "person" som ger UGC-liknande vittnesmål för en hälso-leadgentävling måste enligt Metas
policy **märkas som AI**, och en omärkt syntetisk person som intygar en riktig pengatävling i en reglerad
bransch är precis den *vilseledande*-kategori som stänger annonskonton. UGC-vinkelns värde är dessutom
**äkthet** — en fejkperson underminerar det. Vill du ändå ha en människa i bild: spela in ett av manusen i
[`../../../clients/vivanord/ugc-videomanus.md`](../../../clients/vivanord/ugc-videomanus.md) med en riktig
person. Väljer du ett AI-avatarverktyg (HeyGen/Synthesia/Arcads): kör samma manus men **slå på AI-märkningen**.

## Regenerera / redigera
Kräver Node + Chromium (Playwright) + ffmpeg med libx264.
```bash
cd source
cp ../../source/inter-embed.css .        # eller kör ../../source/fetch-fonts.sh
node render-all.mjs                        # renderar frames för alla 5 scener (scene-a..e), 9:16
bash encode-all.sh                         # encodar varje scen till out/*.mp4
node render-sq.mjs                          # 1:1-frames för scen b/c/d (?ar=sq)
bash encode-sq.sh                           # encodar 1:1-versionerna
```
Tidslinjen för varje scen är funktionen `render(t)` i `scene-a.html` … `scene-e.html`.
Delade helpers i `anim.js`, färg/typografi i `base.css`. Originalvideon: `scene.html` + `render-video.mjs`.
