# SUPABASE.md — admin-inloggning + säkerhet före skarp trafik

> [!success] Var vi står (verifierat 2026-07-18)
> Projektet **lever** (`itwayrczvhzzfvsoxhcc`, region eu-west-2). Schemat är deployat, RLS
> är på och korrekt, och anon-nyckeln är inlagd i `supabase-config.js` — **formulären sparar
> på riktigt**. Steg 1, 2 och 4 i den gamla guiden är alltså redan gjorda.
>
> **Två saker kvar innan skarp trafik — båda i Supabase-panelen, ~2 min totalt.**

## Vad jag verifierade åt dig

| Kontroll | Resultat |
|---|---|
| Tabeller `leads` + `ordrar` med RLS på | ✅ |
| Anon får bara **INSERT** (besökare skickar formulär, kan inte läsa) | ✅ |
| Inloggad (`authenticated`) får **SELECT + UPDATE** → admin läser + hanterar status | ✅ |
| Ingen DELETE-policy (data kan inte raderas via API) | ✅ |
| Admin-användare finns | ❌ **`auth.users` är tom — måste skapas (nedan)** |

Portalen fungerar alltså direkt när användaren finns. Men läs säkerhetssteget — det är
lika viktigt som själva inloggningen.

---

## 🔴 Steg A — skapa admin-användaren (30 sek)

1. Supabase → **Authentication → Users → Add user → Create new user**
2. Din e-post + ett **starkt** lösenord · bocka i **Auto Confirm User**
3. Fler i teamet? En användare per person. **Dela aldrig konton** — spårbarheten försvinner.

## 🔴 Steg B — STÄNG AV publik registrering (30 sek) — säkerhetskritiskt

**Authentication → Sign In / Providers → Email →** slå av **"Allow new users to sign up"**
(Enable Signups = OFF).

**Varför detta är lika viktigt som steg A:** admin-portalen låter *vilken inloggad användare
som helst* läsa alla leads och ordrar — det är meningen, inloggad = admin. Men om publik
registrering är **på** kan vem som helst skapa ett konto, bli "inloggad", och då läsa alla dina
kunders namn, e-post, telefon och adress. Det vore ett GDPR-läckage. Med registrering avstängd
betyder "inloggad" bara de användare *du* lagt till i steg A — och då är modellen tät.

> [!warning] Säkerhetsadvisorn flaggade två WARN (permissiva UPDATE-policyer)
> `inloggade_uppdaterar_leads` och `..._ordrar` använder `USING (true)` — vilken inloggad
> användare som helst kan uppdatera vilken rad som helst. **Det är acceptabelt för det här
> interna verktyget** (admins ändrar status på alla ordrar — det är hela jobbet) **förutsatt
> att steg B är gjort.** Är registreringen öppen blir samma policy en läcka. Gör steg B, så är
> varningen ofarlig. [Om du vill härda mer](https://supabase.com/docs/guides/database/database-linter?lint=0024_permissive_rls_policy).

---

## Verifiera (2 min)

1. Öppna sajten (https://vivanord.vercel.app) → skicka en testbeställning
2. Öppna `/admin/` → du möts nu av **e-post + lösenord** i stället för PIN → logga in
3. Taggen uppe till vänster ska visa **"Live · Supabase"** och testordern ska synas
4. Dubbelkolla i Supabase: **Table Editor → ordrar** — raden ska ligga där
5. Testa säkerheten: logga ut, försök nå `/admin/`-datan utan inloggning → ska nekas

## Kvar att bygga senare (säg till)
- [ ] E-postnotis vid varje ny order (Edge Function → Resend, ~1 h)
- [ ] Automatisk leadexport till Medvital / Rojdix (format enligt avtalet — se [[rojdix-leadmottagare]])
- [ ] Radera-rutin med audit-logg för GDPR-begäranden

*Relaterat: [[LANSERING]] · [[DEPLOY]] · [[rojdix-leadmottagare]]*
