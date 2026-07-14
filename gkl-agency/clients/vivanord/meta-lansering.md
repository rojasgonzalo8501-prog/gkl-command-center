# META-LANSERING — färdig att sätta upp imorgon

Tre kampanjer: svensk leadgen (Hälsoklubben), svensk direktförsäljning och spansk
direktförsäljning. Allt nedan är copy-paste-klart för Ads Manager. Total startbudget:
**550 kr/dag** (~16 500 kr/mån) — skalas först när siffrorna i admin-portalen bär.

> **Blockerare innan någon annons går live:** sajten publicerad på vivanord.se,
> Supabase aktiverat (annars försvinner leads!), pixel installerad, villkorssidor uppe.
> Se STATUS.md.

---

## Konto-setup (görs en gång, ~1 timme)

1. **business.facebook.com** → Skapa Business Manager "Vivanord" (kräver din FB-profil)
2. Skapa **Facebook-sida** "Vivanord" + **Instagram-konto** @vivanord.se — ladda upp logga
   (grön V-symbol räcker), omslagsbild, bio: "Kosttillskott utan krångel 🇸🇪 Prova för 99 kr"
3. **Events Manager** → skapa Pixel "Vivanord" → jag installerar pixelkoden på sajten
   när du ger mig pixel-ID:t (16 siffror)
4. Annons­konto i SEK, betalkort kopplat
5. **Verifiera domänen** vivanord.se i Business Manager (Brand Safety → Domains) — jag lägger
   in meta-taggen när du fått den
6. Events att konfigurera (jag kodar dem): `Lead` (tävlingsformulär), `Purchase` (beställning)

---

## KAMPANJ 1 🇸🇪 — "Hälsoklubben Leads" (250 kr/dag)

| Inställning | Värde |
|---|---|
| Mål | Leads (webbplats) — optimera mot Lead-eventet |
| Budget | 250 kr/dag, kampanjnivå (CBO) |
| Målgrupp | Sverige · 35–65+ · Alla kön · intressen: hälsa & välbefinnande, kosttillskott, vitaminer, matlagning, promenader |
| Placeringar | Advantage+ (auto) |
| Destination | vivanord.se/kampanj.html?utm_source=facebook&utm_campaign=halsoklubben |

**Annons 1A — Tävlingen (bild: matkasse/presentkort, gul badge "5 000 kr"):**
> **Primärtext:** Svara rätt på 4 enkla hälsofrågor — så är du med och tävlar om ett
> presentkort på 5 000 kr till valfri matbutik. 🛒 Gratis att delta, tar under en minut.
> Ny vinnare varje månad!
> **Rubrik:** Tävla om 5 000 kr till matkassen
> **Beskrivning:** 4 frågor · 1 minut · Gratis
> **Knapp:** Läs mer

**Annons 1B — Quizvinkeln (video/reel: person som svarar på frågorna i mobilen):**
> **Primärtext:** Vilket vitamin bildar kroppen av solljus? ☀️ Om du kan svaret har du
> chans på månadens presentkort på 5 000 kr. Fyra frågor — sen är du med i dragningen.
> **Rubrik:** Kan du svaren? Tävla nu
> **Knapp:** Läs mer

**Annons 1C — Enkel bildannons (ren grafik i varumärkesgrönt, texten "4 frågor. 5 000 kr."):**
> **Primärtext:** Hälsoklubbens månadsutlottning är öppen. Svara på fyra korta frågor om
> hälsa och delta i dragningen om ett presentkort på 5 000 kr. Kostnadsfritt — alltid.
> **Rubrik:** Månadens dragning är öppen
> **Knapp:** Registrera dig

---

## KAMPANJ 2 🇸🇪 — "Direktköp Sverige" (200 kr/dag)

| Inställning | Värde |
|---|---|
| Mål | Försäljning — optimera mot Purchase |
| Budget | 200 kr/dag |
| Målgrupp v.1–2 | Bred: Sverige · 40–65+ · intressen hälsa/kosttillskott |
| Målgrupp v.3+ | + Retargeting: sajtbesökare 30 dgr som ej köpt (egen annonsgrupp, 50 kr/dag av budgeten) |
| Destination | vivanord.se/bestall.html?utm_source=facebook&utm_campaign=direktkop |

**Annons 2A — Erbjudandet (bild: produktlåda vid brevlåda):**
> **Primärtext:** Prova Vivanord i en hel månad för 99 kr. 📬 Levereras direkt i brevlådan,
> betala mot faktura — ingen bindningstid, avsluta när du vill med ett mejl.
> Därefter 399 kr/mån om du väljer att fortsätta. Inga dolda villkor, det lovar vi.
> **Rubrik:** Första månaden 99 kr
> **Beskrivning:** Ingen bindningstid · Faktura · I brevlådan
> **Knapp:** Beställ nu

**Annons 2B — Transparensvinkeln (talking head-video eller textgrafik):**
> **Primärtext:** Trött på prenumerationer som är omöjliga att avsluta? Vi med. Därför
> byggde vi Vivanord tvärtom: priset står överallt (99 kr första månaden, sen 399 kr/mån),
> fakturan kommer med lådan, och uppsägningen tar en minut. Testa själv.
> **Rubrik:** Kosttillskott utan fula trick
> **Knapp:** Läs mer

**Annons 2C — Bekvämlighet (video: lådan dimper ner i brevlådan, 10 sek):**
> **Primärtext:** Aldrig mer glömma vitaminerna. Din månadsdos landar i brevlådan —
> första lådan 99 kr, fri leverans hem, betala i efterhand mot faktura.
> **Rubrik:** Vitaminerna sköter sig själva
> **Knapp:** Beställ nu

---

## KAMPANJ 3 🇪🇸 — "Compra Directa" (100 kr/dag — testgren)

| Inställning | Värde |
|---|---|
| Mål | Försäljning — optimera mot Purchase |
| Budget | 100 kr/dag (egen kampanj = ren jämförelse mot den svenska) |
| Målgrupp | Sverige · 30–65+ · **språk: Spanish (all)** — inga intressefilter (gruppen är redan smal) |
| Destination | vivanord.se/es/pedido.html?utm_source=facebook&utm_campaign=compra_es |

**Annons 3A — Erbjudandet:**
> **Primärtext:** Suplementos suecos de calidad — ahora con atención en español. 🇸🇪
> Prueba tu primer mes por 99 kr: llega a tu buzón, pagas contra factura y puedes
> cancelar cuando quieras con un simple correo. Sin permanencia, sin letra pequeña.
> **Rubrik:** Primer mes por 99 kr
> **Beskrivning:** Sin permanencia · Factura · En tu buzón
> **Knapp:** Pedir ahora

**Annons 3B — Förtroendevinkeln:**
> **Primärtext:** ¿Vitaminas de confianza en Suecia, explicadas en tu idioma? Vivanord es
> una marca sueca con página, pedido y atención al cliente en español. Primer mes 99 kr,
> después 399 kr/mes — y lo cancelas cuando quieras.
> **Rubrik:** Calidad sueca, atención en español
> **Knapp:** Más información

---

## Regler för ALLT annonsmaterial (Meta avvisar/stänger konton annars)
- ❌ Aldrig personliga attribut: inte "Har du ont i lederna?" / "¿Te duelen las articulaciones?"
- ❌ Inga före/efter-bilder, inga sjukdomspåståenden, inga "botar/hjälper mot"
- ✅ Priset 99 kr → 399 kr/mån synligt i annonstexten (skyddar mot klagomål OCH höjer leadkvaliteten)
- ✅ Endast EFSA-fraser om produkterna nämns specifikt (se säljarutbildningen i marketing-plan.md §7)

## Vecka 1: så läser du av det (i Ads Manager + admin-portalen)
| Signal | Grönt | Rött → åtgärd |
|---|---|---|
| CPL Kampanj 1 | < 15 kr | > 25 kr → byt bild/rubrik, behåll målgrupp |
| CTR alla kampanjer | > 1,2 % | < 0,8 % → annonsen är fel, inte målgruppen |
| Kostnad per köp K2/K3 | < 300 kr | > 400 kr → förlust; pausa och analysera var folk faller av |
| Telefonsamtycke-andel | > 60 % | < 50 % → justera formulärets ordning/text |

**Rytm:** rör ingenting de första 4 dagarna (inlärningsfasen). Dag 5–7: stäng av sämsta
annonsen per kampanj. Vecka 2: dubbla budgeten ENDAST på det som är grönt.
