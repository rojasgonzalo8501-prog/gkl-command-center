# DEPLOY.md — Publicera vivanord.se

Domänen är köpt (2026-07-14). Så här får du upp sajten på den — och så här undviker du
de två misstag som skulle läcka intern information.

## ⚠️ Två saker att ALDRIG göra
1. **Peka aldrig vivanord.se på hela command center-repot.** Repot innehåller konfidentiellt
   material: kundbriefer, marknadsplaner, partnervillkor (400 kr/avtal!), leadkalkyler.
   Endast mappen `gkl-agency/deliverables/websites/vivanord/` får bli publik.
2. **Lansera inte admin-mappen mot riktiga kunder som den är.** `admin/` är en prototyp
   (PIN 1234 är kosmetisk, data ligger i webbläsarens localStorage). Innan riktig trafik:
   koppla sajt + admin till en riktig databas (Supabase/Airtable) med riktig inloggning,
   eller exkludera `admin/` från den publika deployen.

## Rekommenderad väg: Netlify (gratis, ~15 minuter)

1. Skapa konto på netlify.com → "Add new site" → "Import an existing project" → koppla GitHub
   och välj `gkl-command-center`
2. Inställningar vid import:
   - **Branch:** `main` (merga branchen först) eller arbetsbranchen
   - **Base directory:** *(lämna tom)*
   - **Publish directory:** `gkl-agency/deliverables/websites/vivanord`
   - **Build command:** *(lämna tom — ren statisk HTML)*
3. Deploya — du får en tillfällig adress typ `slumpord.netlify.app`. Kontrollera att allt ser rätt ut.
4. **Koppla domänen:** Site settings → Domain management → Add custom domain → `vivanord.se`
5. **Hos din domänregistrar** (där du köpte domänen), sätt DNS:
   - `vivanord.se` → A-post till `75.2.60.5` (Netlifys load balancer) *eller* ALIAS/ANAME
     till din netlify-adress om registraren stödjer det
   - `www.vivanord.se` → CNAME till din `slumpord.netlify.app`
6. Netlify ordnar HTTPS-certifikat automatiskt (Let's Encrypt) — klart inom en timme
   när DNS slagit igenom (kan ta upp till 24 h).

Varje push till repot deployar sedan sajten automatiskt.

## Alternativ
- **GitHub Pages:** funkar men publicerar hela repot som standard — kräver separat repo för
  bara sajtmappen. Netlify:s publish directory-inställning är enklare.
- **one.com/Loopia webbhotell:** ladda upp mappen via FTP — funkar men ingen auto-deploy.

## Checklista före riktig trafik (annonser)
- [ ] Sajten live på https://vivanord.se med grönt hänglås
- [ ] `admin/` skyddad eller exkluderad (se varning ovan)
- [ ] Formulären kopplade till riktig backend (leads/ordrar får inte bara ligga i besökarens webbläsare!)
- [ ] Meta-pixel + cookiebanner installerade
- [ ] Riktiga sidor för köpvillkor + integritetspolicy (länkarna är platshållare)
- [ ] Medvitals produktdata ifylld (se medvital-katalog.md)
