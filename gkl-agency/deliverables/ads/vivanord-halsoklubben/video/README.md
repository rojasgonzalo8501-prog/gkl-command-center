# Videokreativ — Hälsoklubben Reel (9:16)

`halsoklubben_reel_9x16.mp4` — 1080 × 1920 · 12 sek · H.264/MP4 · ljudlös (textad för muted
autoplay) · ~1,5 MB. Klar att ladda upp som Reels-/Stories-annons i Kampanj 1.

`poster.png` — thumbnail (hook-bilden) om du vill sätta en egen omslagsbild.

## Vad det är — och varför ingen avatar
Detta är en **animerad motion-graphics-video** (kinetisk typografi + en simulerad quiz-genomgång
i en telefon), renderad från kod. Det är **ingen digital människa/avatar**, och det är ett medvetet val:

- En **AI-genererad "person"** som ger UGC-liknande vittnesmål för en hälso-leadgentävling måste
  enligt Metas policy **märkas som AI**, och en omärkt syntetisk person som intygar en riktig
  pengatävling i en reglerad bransch är precis den *vilseledande*-kategori som stänger annonskonton.
- UGC-vinkelns hela värde är **äkthet** (se `sparklubben-teardown.md`). En fejkad person underminerar
  det. En ärlig animerad video har inget att dölja och inget att deklarera.

Vill du ändå ha en **riktig UGC-video med en människa**, är det rätta spåret att spela in en av de
fyra manusen i [`../../../clients/vivanord/ugc-videomanus.md`](../../../clients/vivanord/ugc-videomanus.md)
med en verklig person (telefon, matbutik) — det slår fortfarande allt annat i den här kanalen.
Om du väljer ett AI-avatarverktyg (HeyGen, Synthesia, Arcads, Creatify): kör samma manus, men
**slå på AI-märkningen** i Meta och undvik formuleringar som påstår personlig erfarenhet av en produkt.

## Storyboard (12 sek)
| Tid | Scen | På skärmen |
|---|---|---|
| 0–3 s | Hook | "Vinn **10 000 kr** till matkassen" |
| 3–7,5 s | Quiz | Telefon visar frågan "Vilket vitamin bildar kroppen av solljus?", svaret Vitamin D tappas, 4 frågor betas av |
| 7,5–9,5 s | Kvalificering | "Du har kvalificerat dig!" + konfetti |
| 9,5–12 s | CTA | "4 frågor · 1 minut · Gratis" + halsoklubben.vivanord.se |

Textremsa i botten hela tiden (majoriteten ser utan ljud).

## Så använder du den
- **Placering:** Reels + Stories (Advantage+ tar 9:16 automatiskt)
- **Destination:** `https://halsoklubben.vivanord.se/?utm_source=facebook&utm_campaign=halsoklubben`
- **Annonstext:** återanvänd 1B (quizvinkeln) eller 1A från
  [`../README.md`](../README.md) — videon matchar quiz-/tävlingsvinkeln.
- Lägg den som **egen annons i samma annonsgrupp** som de statiska 1A/1B/1C och låt Meta testa.

## Compliance (inbyggt)
Inga hälsopåståenden · inget om mottagaren · ingen Meta-logga · ingen falsk brådska · inget syntetiskt
vittnesmål. Quizfrågan är allmänbildning (godkänd vinkel 1B). Landningssidan matchar videon.

## Regenerera / redigera
Kräver Node + Chromium (Playwright) + ffmpeg med libx264.
```bash
cd source
cp ../../source/inter-embed.css .          # eller kör ../../source/fetch-fonts.sh
node render-video.mjs                        # renderar 360 PNG-frames till source/frames/
ffmpeg -y -framerate 30 -i frames/f%04d.png \
  -c:v libx264 -preset slow -crf 19 -pix_fmt yuv420p -movflags +faststart \
  ../halsoklubben_reel_9x16.mp4
```
All text, timing och färg ligger i `scene.html` (tidslinjen är funktionen `render(t)`).
