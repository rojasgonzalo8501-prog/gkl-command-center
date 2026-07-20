-- Vinnarklubben — databas-setup för Supabase
-- Kör hela filen i Supabase: SQL Editor → New query → klistra in → Run.
-- Tabellen vk_leads är helt separat från Vivanords leads/ordrar — inget krockar.
-- Guide: clients/vinnarklubben/README.md

-- ============ TABELL ============
-- Kolumnnamn med camelCase citeras så de matchar exakt vad funnelns formulär skickar.
-- svar (jsonb) = alla profilsvar från quizet, flexibelt per kampanj — det gör att en
-- och samma tabell rymmer alla vertikaler utan schemaändring när en ny tävling läggs till.

create table if not exists vk_leads (
  id text primary key,
  tid timestamptz not null default now(),
  kampanj text not null,                 -- kampanj-slug, t.ex. 'matkasse-10000'
  vertikal text not null,                -- bransch: Dagligvaror, Hälsa, Solceller, Telefoni, Försäkring ...
  namn text not null,
  epost text not null,
  telefon text,
  postnr text,                           -- säljbart profilattribut (region) för många vertikaler
  svar jsonb not null default '{}'::jsonb,-- profilsvar från quizet (ålder, intresse, ägande m.m.)
  "samtyckeEpost" boolean not null default false,
  "samtyckePartner" boolean not null default false, -- överlåtelse till köpare/partner i vertikalen
  kalla text not null default 'direkt',  -- utm_source / annonskälla
  status text not null default 'ny'
    check (status in ('ny', 'reserverad', 'sald', 'levererad', 'ogiltig')),
  kopare text,                           -- vilket bolag leadet sålts till (sätts i admin)
  pris numeric                           -- pris leadet sålts för, kr (sätts i admin)
);

create index if not exists vk_leads_tid_idx on vk_leads (tid desc);
create index if not exists vk_leads_vertikal_idx on vk_leads (vertikal);
create index if not exists vk_leads_status_idx on vk_leads (status);

-- ============ SÄKERHET (RLS) ============
-- Besökare (anon-nyckeln i funnelns formulär) får ENDAST lägga till leads med
-- startstatus 'ny' och utan köpare/pris — så ingen kan POST:a ett "sålt" lead och
-- blåsa upp intäktsräkningen. Admin-portalen kräver inloggad (authenticated) användare.

alter table vk_leads enable row level security;

create policy "besokare_far_skapa_leads" on vk_leads
  for insert to anon
  with check (status = 'ny' and kopare is null and pris is null);

create policy "inloggade_laser_leads" on vk_leads
  for select to authenticated using (true);

create policy "inloggade_uppdaterar_leads" on vk_leads
  for update to authenticated using (true) with check (true);

-- Ingen delete-policy = ingen kan radera via API:t. GDPR-radering görs manuellt i
-- Supabase-panelen tills en rutin med audit-logg finns.
