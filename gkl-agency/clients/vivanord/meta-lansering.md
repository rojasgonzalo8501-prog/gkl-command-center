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

**Annons 1A — Tävlingen (bild: matkasse/presentkort, gul badge "10 000 kr"):**
> **Primärtext:** Svara rätt på 4 enkla hälsofrågor — så är du med och tävlar om ett
> presentkort på 10 000 kr till valfri matbutik. 🛒 Gratis att delta, tar under en minut.
> Ny vinnare varje månad!
> **Rubrik:** Tävla om 10 000 kr till matkassen
> **Beskrivning:** 4 frågor · 1 minut · Gratis
> **Knapp:** Läs mer

**Annons 1B — Quizvinkeln (video/reel: person som svarar på frågorna i mobilen):**
> **Primärtext:** Vilket vitamin bildar kroppen av solljus? ☀️ Om du kan svaret har du
> chans på månadens presentkort på 10 000 kr. Fyra frågor — sen är du med i dragningen.
> **Rubrik:** Kan du svaren? Tävla nu
> **Knapp:** Läs mer

**Annons 1C — Enkel bildannons (ren grafik i varumärkesgrönt, texten "4 frågor. 10 000 kr."):**
> **Primärtext:** Hälsoklubbens månadsutlottning är öppen. Svara på fyra korta frågor om
> hälsa och delta i dragningen om ett presentkort på 10 000 kr. Kostnadsfritt — alltid.
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
> **Primärtext:** Prenumerationer med dolda villkor har gett branschen dåligt rykte.
> Vivanord är byggt tvärtom: priset står överallt (99 kr första månaden, sen 399 kr/mån),
> fakturan kommer med lådan, och uppsägningen tar en minut via mejl. Enkelt att testa —
> och lika enkelt att avsluta.
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
> **Primärtext:** Vivanord es una marca sueca de suplementos con página web, proceso de
> pedido y atención al cliente disponibles en español. Primer mes 99 kr, después
> 399 kr/mes — sin permanencia, con cancelación en un minuto por correo.
> **Rubrik:** Calidad sueca, atención en español
> **Knapp:** Más información

---

## POLICY-GENOMGÅNG — så skyddar vi Business Manager-kontot

All copy ovan är granskad mot Metas annonsstandarder (2026). Varje annons och regeln
den prövats mot:

| Annons | Riskpunkt prövad | Utfall |
|---|---|---|
| 1A, 1C | Tävlingsannonser: får inte antyda Meta-koppling, villkor måste finnas på landningssidan | ✅ Villkor + Meta-friskrivning finns på kampanjsidan; ingen Meta-logga i kreativen |
| 1B | "Om du kan svaret" — kunskapsfråga, inte personligt attribut | ✅ OK (quiz om allmänbildning, inget om personen) |
| 2A, 2C | Prenumerationsupplägg (negative option): villkoren måste anges tydligt | ✅ Både 99 kr OCH 399 kr/mån står i själva annonstexten |
| 2B | Omskriven: "Trött på...? Vi med." (du-fråga om upplevelse) → neutral konstaterande-form | ✅ Åtgärdad |
| 3A | "tu buzón" = leveransbeskrivning, inte attribut | ✅ OK |
| 3B | Omskriven: "¿...en tu idioma?" antydde kännedom om språklig/etnisk identitet (förbjudet personligt attribut) → beskriver nu bara vår tjänst | ✅ Åtgärdad |
| Alla | Hälsopåståenden | ✅ Ingen annons påstår någon hälsoeffekt alls — bara pris, leverans, villkor och tävling |

### Absoluta regler när ny copy skrivs (bryts någon = annonsen avvisas, upprepat = kontot stängs)
- ❌ **Personliga attribut:** aldrig påstå/antyda något om mottagarens hälsa, ålder, ekonomi,
  etnicitet eller språk. Inte "Har du ont i lederna?", inte "För dig som är över 50",
  inte "en tu idioma". Skriv om PRODUKTEN och TJÄNSTEN, aldrig om PERSONEN.
- ❌ Inga före/efter-bilder, inga kroppsnärbilder med negativ vinkel, inga sjukdomsord
  ("botar", "behandlar", "mot värk/oro/sömnproblem")
- ❌ Inga orealistiska löften eller resultatgarantier; inga "GRATIS!!!"-versaler, clickbait
  eller falsk brådska ("bara idag!") — triggar låg kvalitet-klassning
- ❌ Ingen Meta/Facebook/Instagram-logga eller formulering som antyder att Meta står bakom tävlingen
- ✅ Prenumerationsvillkoren (99 kr → 399 kr/mån) i varje sälj-annons — Metas krav för
  negative option-erbjudanden och vårt bästa skydd mot anmälningar
- ✅ Landningssidan måste matcha annonsen (samma erbjudande, samma pris) — mismatch är
  en vanlig avvisningsorsak

### Kontoskydd (gör detta i Business Manager)
1. **Tvåfaktorsautentisering** på alla admin-profiler + lägg till en reservadmin
2. **Värm upp kontot:** starta dag 1 med ENBART Kampanj 1 på 250 kr/dag i 3–4 dagar innan
   resten slås på — nya konton som direkt kör flera kampanjer flaggas oftare
3. Redigera aldrig en annons medan den är "Under granskning" — det nollställer kön
4. Betala första fakturorna manuellt i förtid (bygger betalningsförtroende)
5. Om en annons avvisas: begär granskning EN gång via knappen — skapa aldrig om samma
   annons flera gånger (det mönstret stänger konton)
6. Håll Trustpilot/kommentarsfält under uppsikt — negativ feedback-score på annonserna
   väger tyngre än det mesta; svara på arga kommentarer, dölj aldrig

## Vecka 1: så läser du av det (i Ads Manager + admin-portalen)
| Signal | Grönt | Rött → åtgärd |
|---|---|---|
| CPL Kampanj 1 | < 15 kr | > 25 kr → byt bild/rubrik, behåll målgrupp |
| CTR alla kampanjer | > 1,2 % | < 0,8 % → annonsen är fel, inte målgruppen |
| Kostnad per köp K2/K3 | < 300 kr | > 400 kr → förlust; pausa och analysera var folk faller av |
| Telefonsamtycke-andel | > 60 % | < 50 % → justera formulärets ordning/text |

**Rytm:** rör ingenting de första 4 dagarna (inlärningsfasen). Dag 5–7: stäng av sämsta
annonsen per kampanj. Vecka 2: dubbla budgeten ENDAST på det som är grönt.
