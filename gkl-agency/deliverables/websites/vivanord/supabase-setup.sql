-- Vivanord — databas-setup för Supabase
-- Kör hela filen i Supabase: SQL Editor → New query → klistra in → Run.
-- Guide: clients/vivanord/SUPABASE.md

-- ============ TABELLER ============
-- Kolumnnamnen citeras för att behålla camelCase — de matchar exakt vad
-- sajtens formulär (main.js) skickar.

create table if not exists leads (
  id text primary key,
  tid timestamptz not null default now(),
  namn text not null,
  epost text not null,
  telefon text,
  alder text,        -- åldersspann från Hälsoklubben-quizet (profildata, höjer leadvärdet)
  intresse text,     -- hälsoområde kunden vill ha stöd med (mappar mot produkt)
  "samtyckeEpost" boolean not null default false,
  "samtyckeTelefon" boolean not null default false,
  kalla text not null default 'direkt',
  status text not null default 'ny'
    check (status in ('ny', 'ringd', 'bekräftad', 'nej', 'ånger'))
);

create table if not exists ordrar (
  id text primary key,
  tid timestamptz not null default now(),
  produkt text not null,
  namn text not null,
  epost text not null,
  telefon text,
  adress text not null,
  kalla text not null default 'direkt',
  status text not null default 'skickad till partner'
    check (status in ('skickad till partner', 'bekräftad', 'ånger', 'makulerad'))
);

create index if not exists leads_tid_idx on leads (tid desc);
create index if not exists ordrar_tid_idx on ordrar (tid desc);

-- ============ SÄKERHET (RLS) ============
-- Besökare (anon-nyckeln i sajtens formulär) får ENDAST lägga till rader —
-- aldrig läsa, ändra eller radera. Admin-portalen kräver inloggad användare.

alter table leads enable row level security;
alter table ordrar enable row level security;

-- Anon får bara skapa rader med STARTSTATUS — hindrar att någon POST:ar ett
-- lead/order med status 'bekräftad' och blåser upp intäktsräkningen.
create policy "besokare_far_skapa_leads" on leads
  for insert to anon with check (status = 'ny');
create policy "besokare_far_skapa_ordrar" on ordrar
  for insert to anon with check (status = 'skickad till partner');

create policy "inloggade_laser_leads" on leads
  for select to authenticated using (true);
create policy "inloggade_laser_ordrar" on ordrar
  for select to authenticated using (true);

create policy "inloggade_uppdaterar_leads" on leads
  for update to authenticated using (true) with check (true);
create policy "inloggade_uppdaterar_ordrar" on ordrar
  for update to authenticated using (true) with check (true);

-- Ingen delete-policy alls = ingen kan radera via API:t (GDPR-radering görs
-- manuellt i Supabase-panelen tills en rutin med audit-logg finns).
