// Vivanord — Supabase-konfiguration
//
// SÅ AKTIVERAR DU RIKTIG LAGRING (se clients/vivanord/SUPABASE.md för hela guiden):
//   1. Skapa ett gratis projekt på supabase.com
//   2. Kör supabase-setup.sql i projektets SQL Editor
//   3. Klistra in Project URL och anon/publishable-nyckeln nedan
//   4. Skapa en admin-användare (Authentication → Add user) för inloggning i admin-portalen
//
// Tomma värden = prototypläge: allt sparas bara i webbläsarens localStorage,
// och admin-portalen använder PIN 1234.
//
// OBS: anon-nyckeln är gjord för att vara publik (den kan bara göra det som
// databasens RLS-policys tillåter: lägga till leads/ordrar — aldrig läsa dem).
window.NV_SUPABASE = {
  url: 'https://itwayrczvhzzfvsoxhcc.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0d2F5cmN6dmh6emZ2c294aGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxOTMyMzUsImV4cCI6MjA5OTc2OTIzNX0.n46_VysT6xRqqDCOAR1cyXS4dZkzBjkO-RY3IC1ahWM',
};
// LIVE-läge aktivt. anon-nyckeln är publik (RLS skyddar databasen: anon får bara
// skapa rader med startstatus, aldrig läsa/ändra). Admin-portalen kräver inloggning.
