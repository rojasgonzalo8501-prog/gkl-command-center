# Automation — så hands-off kan Vivanord bli

> **Din fråga:** hur automatiserar vi så mycket det bara går? **Ärligt svar:** efter en
> engångssetup (~1 dag av ditt jobb) kan ~90 % av den löpande driften gå av sig själv. De
> sista 10 % går inte att automatisera bort — och det är ärligare att säga det än att lova en
> knapp som sköter allt. Nedan: hela kedjan, vad som redan är automatiskt, vad jag kan bygga,
> och vad som alltid kräver dig.

## Hela kedjan — steg för steg

| # | Steg | Status | Vem/vad |
|---|---|---|---|
| 1 | **Annonser optimeras** | 🟢 auto efter start | Meta fördelar budget mot vinnaren själv |
| 2 | **Content postas** (organiskt) | 🟢 byggt | `vivanord-daily-poster.json` — kö → IG+FB, compliance-grind |
| 3 | **Lead fångas** | 🟢 auto | Sajt → Supabase, redan live |
| 4 | **Profildata på leadet** | 🟢 auto | Quizet sparar ålder + hälsoområde (byggt idag) |
| 5 | **Lead → Rojdix** (ringlistan) | 🔴 MANUELLT | *Kan byggas — väntar på Rojdix leveransformat* |
| 6 | **Lead-nurture** (e-post/SMS) | 🟡 copy klar | Brevo kör flödet automatiskt när det är inlagt |
| 7 | **Order → Medvital** (dropship) | 🔴 MANUELLT | *Kan byggas — väntar på Medvitals orderformat* |
| 8 | **Leverans + faktura** | 🟢 auto (deras) | Medvital sköter allt — noll jobb för dig |
| 9 | **Rojdix ringer + stänger** | 🟢 auto (deras) | Deras säljare |
| 10 | **Statusuppdatering i CRM** | 🟡 halvauto | *Kan byggas — Rojdix rapporterar tillbaka → auto-status* |
| 11 | **Månadens dragning** | 🔴 manuellt | *Kan byggas — slumpa kvalificerad lead, mejla vinnaren* |
| 12 | **Daglig puls** (hur går det?) | 🔴 finns ej | *Bygger nu — Telegram varje morgon, du loggar aldrig in* |

## 🟢 Går redan av sig själv (byggt)
- **Annonsoptimering** — när annonserna väl är uppe justerar Meta budgeten mot bäst presterande.
  Du sätter dagsbudget en gång; algoritmen sköter fördelningen.
- **Leadfångst + profilering** — sajt → Supabase, quizet taggar varje lead med ålder + intresse.
- **Content-postning** — n8n-postern tar innehåll ur ett Google Sheet och postar till IG+FB på
  schema, med compliance-grind. Aktiveras när kontona finns.
- **Leverans, fakturering, kundservice** — Medvital gör allt. Det är hela poängen med dropship:
  den tyngsta delen är redan "automatiserad" genom att någon annan gör den.

## 🟡 Kan gå av sig själv efter en engångsinställning (du)
- **Lead-nurture:** copyn finns färdig ([[email-flode]]). Skapa Brevo-konto, klistra in flödet en
  gång → varje nytt lead får hela välkomst- och retention-sekvensen automatiskt. **~30 min setup, sen aldrig igen.**
- **Content-kön:** fyll Google Sheet med inläggen ([[organiskt-innehall]]) en gång → postern går själv.

## 🔴 Kan byggas nu — jag bygger så fort en sak är på plats
- **Daglig puls till Telegram** (bygger nu, inga blockerare): varje morgon får du en rad —
  nya leads, källor, ordrar, uppskattad intäkt. **Du behöver aldrig logga in och kolla.**
- **Lead → Rojdix auto-handoff** (den viktigaste — det är pengarröret): nytt lead med
  telefonsamtycke → skickas automatiskt till Rojdix + loggas. **Blockeras av:** vilket format
  Rojdix vill ta emot i (API? CSV-mejl? portal?). Öppen fråga i [[rojdix-leadmottagare]] — så
  fort du får svaret bygger jag workflowen (mall finns redan i huvudet, ~1 h).
- **Order → Medvital auto-forward:** ny order → skickas i Medvitals format. **Blockeras av:**
  deras orderformat (öppen fråga i [[medvital-mote]]). Samma sak — svar → jag bygger.
- **Månadens dragning:** n8n slumpar en kvalificerad lead, mejlar vinnaren, loggar. Kan byggas nu
  (behöver bara Brevo/Telegram). Låg prioritet tills första månaden närmar sig.
- **Auto-status i CRM:** när Rojdix rapporterar utfall (bekräftad/nej) → uppdatera leadets status
  automatiskt. Beror på hur Rojdix återrapporterar — bygg när det är känt.

## 🚫 Går INTE att automatisera — kräver alltid dig

**Engångs (setup):**
- Rojdix + Vivanord org.nr (juridik)
- Meta Business Manager + FB/IG + pixel (Meta blockerar automatiserad kontoskapning avsiktligt)
- Brevo-konto, Supabase admin-användare
- Filma UGC-videon (kan läggas ut på frilansare — men någon måste göra den)
- Juristgranskning

**Löpande (sällan, men mänskligt):**
- **Beslut:** höja budget när siffrorna bär, godkänna ny annonscopy, byta produktfokus
- **Ny kreativ ibland:** annonser "bränns ut" — var 3–4:e vecka behövs nytt material
- **Meta-avvisningar:** då och då fälls en annons; någon måste begära granskning
- **Partnerrelationen:** Medvital/Rojdix-möten, avtalsjusteringar

## Den realistiska bilden

Efter setup-dagen ser din **vecka** ut så här:
- **Varje morgon:** en Telegram-rad med pulsen. 10 sekunder. Inget att göra om det ser bra ut.
- **Leads** flödar in, taggas, skickas till Rojdix, får nurture-mejl — utan att du rör något.
- **Ordrar** går till Medvital, som levererar och fakturerar — du ser bara 400 kr trilla in.
- **En gång i veckan:** ~10 min i admin-portalen + besluta om du ska skala budget.
- **Var 3–4:e vecka:** spela in/beställa en ny UGC-video (annonsrotation).

Det är inte "noll jobb" — men det är en verksamhet som **mår bra utan daglig tillsyn**, där
din tid går till beslut och skalning, inte till drift.

## Ordning att bygga (mest hands-off först)
1. ✅ Daglig puls (Telegram) — *bygger nu*
2. Brevo-nurture — *du: 30 min setup, sen auto*
3. Lead → Rojdix — *jag bygger när formatet är klart (viktigast — pengarröret)*
4. Order → Medvital — *jag bygger när formatet är klart*
5. Månadsdragning + auto-status — *när volymen finns*

*Relaterat: [[LANSERING]] · [[Social Content Engine - n8n]] (i vaulten) · [[rojdix-leadmottagare]] ·
[[medvital-mote]] · [[email-flode]] · [[organiskt-innehall]]*
