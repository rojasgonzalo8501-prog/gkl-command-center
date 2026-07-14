# SUPABASE.md — Aktivera riktig lagring (~20 minuter)

Koden är redan byggd och testad. Sajten och admin-portalen körs i **prototypläge**
(localStorage) tills du fyller i två rader i en konfigfil — sedan sparas allt på riktigt:
formulären skriver till databasen, admin-portalen läser från den, och hela teamet ser
samma data oavsett enhet.

## Det DU måste göra (kräver dina konton — jag kan inte göra detta åt dig)

### 1. Skapa projektet (5 min)
1. Gå till **supabase.com** → Sign up (GitHub-kontot funkar) → **New project**
2. Namn: `vivanord` · Region: **eu-north-1 (Stockholm)** · välj ett starkt databas-lösenord
3. Vänta ~2 min medan projektet startas

### 2. Skapa databasen (2 min)
1. I projektet: **SQL Editor** → New query
2. Klistra in HELA innehållet i `deliverables/websites/vivanord/supabase-setup.sql` → **Run**
3. Klart — tabellerna `leads` och `ordrar` finns nu, med säkerhetsregler:
   besökare kan bara LÄGGA TILL, aldrig läsa; admin kräver inloggning

### 3. Skapa admin-kontot (1 min)
1. **Authentication → Users → Add user → Create new user**
2. Din e-post + ett starkt lösenord · bocka i **Auto Confirm User**
3. (Lägg till fler användare senare för teamet — en per person, dela aldrig konton)

### 4. Klistra in nycklarna (2 min)
1. **Project Settings → API**: kopiera **Project URL** och **anon public**-nyckeln
2. Öppna `deliverables/websites/vivanord/supabase-config.js` och fyll i:
   ```js
   window.NV_SUPABASE = {
     url: 'https://DITTPROJEKT.supabase.co',
     anonKey: 'eyJhbGciOi...',
   };
   ```
3. Committa och pusha (eller be mig göra det) — deployen uppdateras automatiskt

### 5. Verifiera (2 min)
1. Öppna sajten → skicka en testbeställning
2. Öppna `/admin/` → nu möts du av **e-post + lösenord** istället för PIN → logga in
3. Taggen uppe till vänster ska visa **"Live · Supabase"** och din testorder ska synas
4. Kolla även Supabase-panelen: **Table Editor → ordrar** — raden ska ligga där

## Vad som händer tekniskt (redan byggt ✅)
- Formulären POST:ar varje lead/order till databasen (och behåller en lokal kopia som offline-skydd)
- Admin-portalen loggar in via Supabase Auth, läser båda tabellerna, uppdaterar status
  med optimistisk låsning (återställs + felmeddelande om nätverket sviker) och
  auto-uppdaterar varje minut
- Demodata/Rensa-knapparna stängs av automatiskt i live-läge — riktig data hanteras i databasen
- anon-nyckeln är designad att vara publik: säkerheten ligger i databasens RLS-policys

## Kvar att bygga senare (säg till när det behövs)
- [ ] E-postnotis till dig vid varje ny order (Supabase Edge Function → Resend, ~1 h jobb)
- [ ] Automatisk leadexport till Medvital (schemalagd CSV eller API-push)
- [ ] Radera-rutin med audit-logg för GDPR-begäranden
