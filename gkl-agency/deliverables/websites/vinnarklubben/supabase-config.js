// Vinnarklubben — Supabase-konfiguration
//
// SÅ AKTIVERAR DU RIKTIG LAGRING (full guide: clients/vinnarklubben/README.md):
//   1. Kör vinnarklubben-setup.sql i projektets SQL Editor (skapar vk_leads + RLS).
//      Detta pekar på SAMMA Supabase-projekt som Vivanord redan använder — leadtabellen
//      vk_leads är helt separat, så inget krockar. Vill du ha ett eget projekt: byt url +
//      anonKey nedan och kör SQL:en där i stället.
//   2. Admin-inloggning: samma Supabase Auth-användare som Vivanord-adminen fungerar
//      (Authentication → Users). Skapa en om ingen finns (Add user, Auto Confirm).
//
// Tomma värden = prototypläge: allt sparas bara i webbläsarens localStorage och
// admin-portalen använder PIN 1234. Fyll i för skarp drift.
//
// OBS: anon-nyckeln är gjord för att vara publik — RLS låter den ENDAST lägga till
// leads med startstatus 'ny', aldrig läsa, ändra eller radera.
window.VK_SUPABASE = {
  url: 'https://itwayrczvhzzfvsoxhcc.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0d2F5cmN6dmh6emZ2c294aGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxOTMyMzUsImV4cCI6MjA5OTc2OTIzNX0.n46_VysT6xRqqDCOAR1cyXS4dZkzBjkO-RY3IC1ahWM',
  table: 'vk_leads',
};
// LIVE-läge aktivt när url + anonKey är ifyllda och vinnarklubben-setup.sql är körd.
