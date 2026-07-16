# DEPLOY.md — Publicera vivanord.se (Vercel)

Domänen är köpt. Så här får du upp sajten på Vercel — och så här undviker du
de två misstag som skulle läcka intern information.

## ⚠️ Två saker att ALDRIG göra
1. **Peka aldrig vivanord.se på hela command center-repot.** Repot innehåller konfidentiellt
   material: kundbriefer, marknadsplaner, partnervillkor (400 kr/avtal!), leadkalkyler.
   Endast mappen `gkl-agency/deliverables/websites/vivanord/` får bli publik.
2. **Lansera inte admin-mappen mot riktiga kunder som den är.** `admin/` är en prototyp
   (PIN 1234 är kosmetisk, data ligger i webbläsarens localStorage). Innan riktig trafik:
   koppla sajt + admin till Supabase med riktig inloggning (se SUPABASE.md). Admin ligger
   på `/admin` och är `noindex`, men skydda den med Supabase Auth före lansering.

## Vercel — steg för steg (~15 minuter)

Nyckeln är **Root Directory** — den gör att bara sajtmappen publiceras, inte hela repot.

1. Gå till **vercel.com** → logga in med GitHub → **Add New… → Project**
2. Välj repot **`gkl-command-center`** → Import
3. Konfigurera projektet:
   - **Framework Preset:** `Other` (ren statisk HTML)
   - **Root Directory:** klicka **Edit** och välj
     `gkl-agency/deliverables/websites/vivanord` ← *detta är det viktiga steget*
   - **Build Command:** lämna tom
   - **Output Directory:** lämna tom (Vercel serverar filerna direkt)
   - **Install Command:** lämna tom
4. **Deploy** → du får en adress typ `vivanord-xxxx.vercel.app`. Kontrollera att allt ser rätt ut.
5. **Koppla domänen:** Project → **Settings → Domains** → lägg till `vivanord.se`
   (och `www.vivanord.se`). Vercel visar exakt vilka DNS-poster du ska sätta.
6. **Hos din domänregistrar** (där du köpte domänen), sätt DNS enligt det Vercel visar —
   normalt:
   - `vivanord.se` → **A-post** till `76.76.21.21`
   - `www.vivanord.se` → **CNAME** till `cname.vercel-dns.com`
   *(Använd alltid de exakta värden Vercel visar för ditt projekt — de kan skilja sig.)*
7. HTTPS-certifikat ordnas automatiskt när DNS slagit igenom (kan ta upp till 24 h,
   ofta mycket snabbare).

Varje push till branchen deployar sedan sajten automatiskt. Peka Vercel på `main`
(merga branchen först) eller på arbetsbranchen `claude/new-customer-website-marketing-mn8fl9`.

### Bra att veta om Vercel + Root Directory
- Sökvägar på sajten är relativa (`styles.css`, `es/index.html`, `admin/`), så allt
  fungerar direkt när mappen blir sajtens rot — inga ändringar behövs i koden.
- Vill du lägga en `vercel.json` i sajtmappen senare (t.ex. för redirects eller
  security headers) går det bra, men behövs inte för att komma igång.

## Checklista före riktig trafik (annonser)
- [ ] Sajten live på https://vivanord.se med grönt hänglås
- [ ] `admin/` skyddad med Supabase Auth (inte bara PIN) — se SUPABASE.md
- [ ] Formulären kopplade till Supabase (leads/ordrar får inte bara ligga i besökarens webbläsare!)
- [ ] Meta-pixel + cookiebanner installerade
- [x] Köpvillkor, integritetspolicy och tävlingsvillkor publicerade *(sidorna finns — kräver
      juristgranskning + ifyllda [hakparenteser] innan skarp lansering)*
- [ ] Medvitals produktdata ifylld (se medvital-katalog.md)
