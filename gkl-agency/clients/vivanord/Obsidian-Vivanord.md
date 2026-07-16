---
titel: Vivanord — Projektöversikt
typ: projekt-moc
kund: Vivanord
status: pre-launch
uppdaterad: 2026-07-16
taggar: [vivanord, klient, kosttillskott, meta-ads, medvital, d2c]
---

# 💊 Vivanord — Projektöversikt (MOC)

> [!info] Snabbfakta
> **Vad:** D2C-kosttillskott på prenumeration, återförsäljare åt Medvital.
> **Marknad:** Sverige (svenska först) + spansktalande i Sverige (spansk sajt).
> **Status:** Byggt & klart — väntar på att domänen `vivanord.se` godkänns, sedan lansering.
> **Domän köpt:** ja · **Sajt live:** nej (väntar domän) · **Databas:** live (Supabase)

## 🤝 Affären med Medvital
- Vi är **återförsäljare** åt **Medvital Sverige AB** (org.nr 559421-2093).
- **Intäkt 1:** 400 kr per bekräftat avtal, **utbetalas vid bekräftelse**.
- **Intäkt 2:** leadlistan säljs **per lead** (endast leads med telefonsamtycke). Pris
  räknas i admin-portalens Leadkalkyl-flik (golv: självkostnad + 50 %; riktmärke 25–75 kr/lead).
- Medvital sköter **allt** juridiskt säljansvar, leverans, fakturering, kundservice, ångerrätt.
- **Vi äger leadsen.** Leads med telefonsamtycke **överlåts** till Medvital (GDPR-korrekt samtycke).
- Kritisera **aldrig** Medvital i något material — de är uppdragsgivaren.

## 💰 Priser (mot kund)
- Första månaden **99 kr** → därefter **399 kr/mån**, en låda med tre månadsdoser **var 3:e månad**
  (faktureras ~1 197 kr + 59 kr frakt/leverans). Ingen bindningstid. Betalning **mot faktura**.
- ⚠️ Kvartalsfakturans exakta belopp + de tre obekräftade produkterna bekräftas på Medvital-mötet.

## 🎁 Hälsoklubben (leadmotorn)
- Fristående tävlingssida: 4 kunskapsfrågor → formulär med separata samtycken.
- Vinst: **presentkort 10 000 kr/mån**, **betalas av Medvital**. Meta-friskrivning i villkoren.

## 🔗 Länkar
- **Kundpresentation (delbar):** https://rojasgonzalo8501-prog.github.io/gkl-command-center/gkl-agency/clients/vivanord/presentation.html
- **GitHub-branch:** `claude/new-customer-website-marketing-mn8fl9` i repot `gkl-command-center`
- **Supabase-projekt:** `itwayrczvhzzfvsoxhcc` (URL: https://itwayrczvhzzfvsoxhcc.supabase.co)
- **Command Center (lokalt):** http://localhost:3737 → fliken 💊 Vivanord
- **Framtida sajt:** https://vivanord.se (ej live än)

## 📦 Vad som är byggt (allt i GitHub)
- **Sajt SV:** hem, produkter, kassa (mot faktura), Hälsoklubben-tävling
- **Sajt ES:** inicio, productos, pedido (+ sorteo byggd men pausad tills Medvital har ES-säljare)
- **Juridik:** köpvillkor, integritetspolicy, tävlingsvillkor (SV + ES) — utkast, kräver juristgranskning
- **Cookiebanner:** tvåspråkig, gatear Meta-pixeln (GDPR)
- **Admin-portal (back office):** översikt m. graf, leads/ordrar m. SV/ES-filter, leadkalkyl
- **Databas:** Supabase live — tabeller + RLS (härdade), sajten sparar på riktigt
- **Marknadsplan:** full strategi + copy-paste-färdiga Meta-annonser (SV+ES), policygranskade
- **E-post/SMS-flöde:** färdig copy (se [[email-flode]])
- **Deployguide:** Vercel (se [[DEPLOY]])

## ✅ Klart · 🔶 Din åtgärd · ☐ Kvar

> [!success] Klart
> Affärsmodell · varumärke (namn + domän köpt) · hela sajten SV+ES · juridiska sidor ·
> cookiebanner · admin-portal · **Supabase live (schema + RLS deployat)** · marknadsplan ·
> Meta-annonstexter · e-postflöde · kundpresentation

> [!warning] Du måste göra (kräver dina konton/beslut)
> - [ ] **Supabase admin-login** (30 sek): Authentication → Users → Add user (Auto Confirm)
> - [ ] **Vercel-deploy** när domänen godkänts (Root Directory = sajtmappen) — se [[DEPLOY]]
> - [ ] **Meta Business Manager** + FB/IG + pixel + annonskonto → skicka pixel-ID
> - [ ] **Medvital-mötet:** produktblad/priser, pris per lead, skriftligt om 10 000 kr-vinsten, ES-säljare?
> - [ ] **PRV/EUIPO-slutkoll** på namnet "Vivanord"
> - [ ] **Juristgranskning** av villkorssidorna + fyll i [hakparenteser]
> - [ ] **Brevo-konto** för e-postflödet

> [!todo] Jag gör (när du levererat ovan)
> - [ ] Meta-pixel + Lead/Purchase-events på alla sidor (väntar pixel-ID)
> - [ ] Domänverifierings-tagg (väntar tagg)
> - [ ] Uppdatera produktsidorna med Medvitals riktiga katalog (väntar mötet)
> - [ ] Orderexport till Medvital (väntar format)
> - [ ] Aktivera ES-sorteo (väntar ES-säljare)

## ❓ Öppna frågor
- **Bolaget:** finns "Vivanord AB" registrerat? (Enskild firma / nytt AB / bifirma?) Påverkar villkoren.
- **Kundservice-kanal:** vilken e-post/telefon står på sajten? (Medvital äger kundservicen.)
- **Produktbilder:** riktiga foton från Medvital (emoji-platshållare nu).

## 🗺️ Relaterade noter
[[STATUS]] · [[brief]] · [[marketing-plan]] · [[meta-lansering]] · [[medvital-katalog]] ·
[[email-flode]] · [[SUPABASE]] · [[DEPLOY]] · [[CLAUDE]]
