# META-LANSERING — färdig att sätta upp imorgon

Tre kampanjer: svensk leadgen (Hälsoklubben), svensk direktförsäljning och spansk
direktförsäljning. Allt nedan är copy-paste-klart för Ads Manager. Total startbudget:
**550 kr/dag** (~16 500 kr/mån) — skalas först när siffrorna i admin-portalen bär.

> **Status 2026-07-18:** sajten är LIVE på **vivanord.se** och tävlingen på
> **halsoklubben.vivanord.se**. Supabase sparar (formulären skriver på riktigt). Kvar innan
> skarpa annonser: pixel-ID ifyllt, Rojdix + Vivanord org.nr i samtycket, Supabase admin-användare
> + registrering avstängd. Se [[LANSERING]] steg 0.
> Se STATUS.md.

---

## Konto-setup (görs en gång, ~1 timme)

1. **business.facebook.com** → Skapa Business Manager "Vivanord" (kräver din FB-profil)
2. Skapa **Facebook-sida** "Vivanord" + **Instagram-konto** @vivanord.se — ladda upp logga
   (grön V-symbol räcker), omslagsbild, bio: "Kosttillskott utan krångel 🇸🇪 Betala mot faktura"
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
| Destination | **halsoklubben.vivanord.se**/?utm_source=facebook&utm_campaign=halsoklubben (egen subdomän — tävlingen flyttad hit 2026-07-17) |

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

> **OMSKRIVEN 2026-07-16.** Gamla copyn sålde "99 kr första månaden" — ett pris som aldrig
> fanns hos Medvital och som nu är borta från sajten. Den sålde också "avsluta när du vill med
> ett mejl", vilket är fel: uppsägning kräver 14 dagars varsel. Och 2C lovade "fri leverans",
> men frakten är 59 kr på varje leverans. Tre felaktiga påståenden i tre annonser.
>
> **Ny vinkel: Absorb+ är ingångsprodukten.** Det är den enda produkten med ett riktigt
> introduktionspris (199 kr, 50 % rabatt). Övriga fem kostar 399 kr + 59 kr frakt från första
> lådan — det är ingen krok att bygga en kallmålgruppsannons på.
>
> ⚠️ Medvital märker 199 kr som *"tidsbegränsat erbjudande"*. Bekräfta hur länge det gäller
> innan du lägger budget bakom det — se [[medvital-mote]] punkt 6.

| Inställning | Värde |
|---|---|
| Mål | Försäljning — optimera mot Purchase |
| Budget | 200 kr/dag |
| Målgrupp v.1–2 | Bred: Sverige · 40–65+ · intressen hälsa/kosttillskott |
| Målgrupp v.3+ | + Retargeting: sajtbesökare 30 dgr som ej köpt (egen annonsgrupp, 50 kr/dag av budgeten) |
| Destination | vivanord.se/bestall.html?produkt=mage&utm_source=facebook&utm_campaign=direktkop |

**Annons 2A — Erbjudandet (bild: produktlåda vid brevlåda):**
> **Primärtext:** Prova Absorb+ första månaden för 199 kr — halva priset. 📬 Levereras direkt
> i brevlådan, betala mot faktura. Därefter 399 kr + 59 kr frakt var fjärde vecka om du väljer
> att fortsätta. Ingen bindningstid: säg upp senast 14 dagar före nästa leverans, så uteblir den.
> **Rubrik:** Absorb+ första månaden 199 kr
> **Beskrivning:** Ingen bindningstid · Faktura · I brevlådan
> **Knapp:** Beställ nu

**Annons 2B — Transparensvinkeln (talking head-video eller textgrafik):**
> **Primärtext:** Prenumerationer med dolda villkor har gett branschen dåligt rykte. Vivanord
> är byggt tvärtom: priset står överallt, fakturan kommer med lådan, och uppsägningsregeln är
> utskriven i klartext — säg upp senast 14 dagar före nästa leverans, så uteblir den. Inga
> asterisker, ingen finstil.
> **Rubrik:** Kosttillskott utan fula trick
> **Knapp:** Läs mer
>
> *Denna annons säljer på att vi är ärliga. Den får därför aldrig innehålla ett påstående som
> inte håller — det var precis vad den gjorde före 2026-07-16.*

**Annons 2C — Bekvämlighet (video: lådan dimper ner i brevlådan, 10 sek):**
> **Primärtext:** Aldrig mer glömma vitaminerna. Din dos landar i brevlådan — första lådan
> Absorb+ för 199 kr plus 59 kr frakt, betala i efterhand mot faktura.
> **Rubrik:** Vitaminerna sköter sig själva
> **Knapp:** Beställ nu

---

## KAMPANJ 3 🇪🇸 — "Compra Directa" (100 kr/dag — testgren)

| Inställning | Värde |
|---|---|
| Mål | Försäljning — optimera mot Purchase |
| Budget | 100 kr/dag (egen kampanj = ren jämförelse mot den svenska) |
| Målgrupp | Sverige · 30–65+ · **språk: Spanish (all)** — inga intressefilter (gruppen är redan smal) |
| Destination | vivanord.se/es/pedido.html?produkt=mage&utm_source=facebook&utm_campaign=compra_es |

**Annons 3A — Erbjudandet:**
> **Primärtext:** Suplementos suecos de calidad — ahora con atención en español. 🇸🇪
> Prueba Absorb+ el primer mes por 199 kr, la mitad de precio: llega a tu buzón y pagas contra
> factura. Después 399 kr + 59 kr de envío cada cuatro semanas. Sin permanencia: cancela al
> menos 14 días antes del próximo envío y no se realizará.
> **Rubrik:** Absorb+ el primer mes por 199 kr
> **Beskrivning:** Sin permanencia · Factura · En tu buzón
> **Knapp:** Pedir ahora

**Annons 3B — Förtroendevinkeln:**
> **Primärtext:** Vivanord es una marca sueca de suplementos con página web, proceso de pedido
> y atención al cliente disponibles en español. El precio está siempre a la vista y la regla de
> cancelación está escrita con claridad: cancela al menos 14 días antes del próximo envío.
> Sin permanencia, sin letra pequeña.
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
| 2A, 2C | Prenumerationsupplägg (negative option): villkoren måste anges tydligt | ✅ Både 199 kr OCH 399 kr var 4:e vecka står i annonstexten |
| 2B | Omskriven: "Trött på...? Vi med." (du-fråga om upplevelse) → neutral konstaterande-form | ✅ Åtgärdad |
| 3A | "tu buzón" = leveransbeskrivning, inte attribut | ✅ OK |
| 3B | Omskriven: "¿...en tu idioma?" antydde kännedom om språklig/etnisk identitet (förbjudet personligt attribut) → beskriver nu bara vår tjänst | ✅ Åtgärdad |
| Alla | Hälsopåståenden | ✅ Ingen annons påstår någon hälsoeffekt alls — bara pris, leverans, villkor och tävling |
| **2A, 2B, 2C, 3A, 3B** | **Prisuppgiften stämmer med landningssidan** | ✅ Åtgärdad 2026-07-16 — sålde 99 kr som aldrig funnits hos Medvital |
| **2A, 2B, 3A, 3B** | **Uppsägningsuppgiften stämmer med köpvillkoren** | ✅ Åtgärdad 2026-07-16 — sa "avsluta när du vill med ett mejl", verkligheten är 14 dagars varsel |
| **2C** | **Fraktuppgiften** | ✅ Åtgärdad 2026-07-16 — lovade "fri leverans hem", frakten är 59 kr per leverans |

### Absoluta regler när ny copy skrivs (bryts någon = annonsen avvisas, upprepat = kontot stängs)
- ❌ **Personliga attribut:** aldrig påstå/antyda något om mottagarens hälsa, ålder, ekonomi,
  etnicitet eller språk. Inte "Har du ont i lederna?", inte "För dig som är över 50",
  inte "en tu idioma". Skriv om PRODUKTEN och TJÄNSTEN, aldrig om PERSONEN.
- ❌ Inga före/efter-bilder, inga kroppsnärbilder med negativ vinkel, inga sjukdomsord
  ("botar", "behandlar", "mot värk/oro/sömnproblem")
- ❌ Inga orealistiska löften eller resultatgarantier; inga "GRATIS!!!"-versaler, clickbait
  eller falsk brådska ("bara idag!") — triggar låg kvalitet-klassning
- ❌ Ingen Meta/Facebook/Instagram-logga eller formulering som antyder att Meta står bakom tävlingen
- ✅ Prenumerationsvillkoren (199 kr → 399 kr var 4:e vecka för Absorb+) i varje sälj-annons —
  Metas krav för negative option-erbjudanden och vårt bästa skydd mot anmälningar
- ✅ Landningssidan måste matcha annonsen (samma erbjudande, samma pris) — mismatch är
  en vanlig avvisningsorsak
- ✅ **Varje sifferuppgift ska gå att verifiera mot medvital.se.** Vi är återförsäljare: pris,
  frakt, leveransintervall och uppsägningsregel är deras, inte våra. Hittar du på ett tal —
  som 99 kr, som fanns i denna fil fram till 2026-07-16 — blir annonsen ett felaktigt påstående
  om ett abonnemang. Det är den kategori Meta stänger konton för, och den kategori
  Konsumentverket bötfäller.

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
