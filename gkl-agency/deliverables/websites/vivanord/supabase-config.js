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
  url: 'https://itwayrczvhzzfvsoxhcc.supabase.co',  // bekräftad från project_ref
  anonKey: '',  // KVAR: klistra in anon/publishable-nyckeln (Project Settings → API keys → anon public)
};
// Obs: sajten är kvar i prototypläge tills anonKey är ifylld (båda krävs).
