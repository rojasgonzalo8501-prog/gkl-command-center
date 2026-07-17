# 🚀 LANSERING — vägen till första annonskronan

> **Uppdaterad 2026-07-17.** Avtalen med Medvital och Rojdix är klara. Det som återstår är att
> få ut uppgifterna ur avtalen och in i koden, plus fyra konton som kräver dig.
>
> Ordningen spelar roll. Vissa steg tar dagar av väntan (DNS, Meta-granskning) — starta dem
> först. Andra tar 30 sekunder men blockerar allt (Rojdix org.nr).

---

## 🔴 STEG 0 — det som stoppar allt (gör idag)

| # | Vad | Tid | Varför det blockerar |
|---|---|---|---|
| 1 | **Rojdix org.nr + juridiskt bolagsnamn** | 2 min | Samtyckesrutan säger `[org.nr XXXXXX-XXXX]` på 8 ställen. Ett överlåtelsesamtycke är bara giltigt om mottagaren namnges (GDPR art. 4.11 + 7). Utan det får Rojdix **inte ringa ett enda lead** — oavsett vad avtalet säger. |
| 2 | **Vivanord AB org.nr** (eller besked om bolagsformen) | 2 min | Villkoren påstår redan att bolaget finns, på 6 ställen. Stämmer det inte är villkorstexten felaktig innan första ordern. |
| 3 | **Supabase admin-användare** | 30 sek | `auth.users` är tom (kontrollerat 2026-07-17). Admin-portalen går inte att logga in i. Authentication → Users → Add user, kryssa **Auto Confirm**. |

⚠️ Jag hittade `rojdix.se` men bara ett **estniskt** ROJDIX INC OÜ (14200872) i register. Gissa
inte — ta numret från avtalet. Är motparten estnisk behöver integritetspolicyns EU/EES-stycke
ses över också.

> [!warning] Org.nr-platshållarna borttagna för förhandsvisningen (2026-07-17)
> `[org.nr XXXXXX-XXXX]` togs bort från alla sidor så förhandsvisningen läser rent — men numren
> är **fortfarande rättsligt nödvändiga före riktig trafik**. Samtyckesrutan namnger nu Rojdix
> utan org.nr; det duger för att **visa** sajten, men **inte** för att samla in skarpa leads
> (ett överlåtelsesamtycke måste identifiera mottagaren fullständigt). Fyll i numren + koppla
> samtycket innan en enda annons pekar hit. HTML-kommentaren i `kampanj.html` påminner om det.

**Så fort 1 och 2 landar:** jag fyller i alla 14 ställena, SV + ES, på några minuter.

---

## STEG 1 — starta klockan på det som tar tid (idag)

| # | Vad | Tid | Not |
|---|---|---|---|
| 4 | **Vercel-deploy, projekt 1** (dropship-sajten) | 15 min | **Vänta inte på domänen.** Du får `vivanord-xxxx.vercel.app` direkt och kan testa hela funneln på riktigt. Domänen kopplas sen — det är bara en DNS-post. Se [[DEPLOY]]. |
| 5 | **Vercel-deploy, projekt 2** (Hälsoklubben) | 10 min | Annan Root Directory, egen subdomän. Se [[halsoklubben-subdoman]]. |
| 6 | **Meta Business Manager** + FB-sida + IG + annonskonto | 1 h | **Längsta stången.** Nya konton får trust-restriktioner och sidor mår bra av att åldras. Starta idag även om annonserna dröjer. |
| 7 | **PRV/EUIPO-slutkoll** på "vivanord" | 5 min | Gratis. Gör det innan varumärket syns publikt. |
| 8 | **Juristgranskning** av villkor + integritetspolicy + tävlingsvillkor | — | Skicka idag, svaret dröjer. Sidorna är utkast och märkta som sådana. |
| 9 | **Brevo-konto** | 15 min | Copyn är klar i [[email-flode]]. |

---

## STEG 2 — när steg 1 landat (jag gör)

| # | Vad | Väntar på |
|---|---|---|
| 10 | Fyll i Rojdix + Vivanord org.nr, 14 ställen SV + ES | Ditt steg 0 |
| 11 | Pixel-ID in i båda `pixel.js` + domänverifiering | Ditt pixel-ID (steg 6) |
| 12 | Verifiera hela funneln live: formulär → Supabase → admin | Ditt steg 3 + 4 |
| 13 | Uppdatera Kampanj 1:s destination till subdomänen | Ditt steg 5 |
| 14 | Leadkalkylen med riktigt pris per lead | Priset ur Rojdix-avtalet |

---

## STEG 3 — annonsstart

**Uppvärmningsregeln:** dag 1–4 kör **enbart Kampanj 1** (Hälsoklubben, 250 kr/dag). Nya konton
som direkt startar flera kampanjer flaggas oftare. Dag 5: slå på resten. Se [[meta-lansering]].

**Kreativen** kan produceras nu — 1C, 1A, 1B och 2B kräver ingen produktbild. Se
[[annonsmaterial-brief]]. 2A och 2C väntar på riktiga förpackningsbilder från Medvital.

**Organiskt** ([[organiskt-innehall]]): lägg ut de första inläggen så fort FB/IG finns, så
sidan inte är tom när annonstrafiken landar och folk klickar på sidnamnet.

**Content-motorn är byggd, inte köpt.** `vivanord-daily-poster.json` (n8n) postar de 8 inläggen
till IG + FB på schema, med en compliance-grind som stoppar hälsopåståenden och gamla faktafel
innan de går ut. Aktiveras när kontona finns — se `Infrastructure/Social Content Engine - n8n.md`
i vaulten. Blotato/Higgsfield behövs inte vid start.

---

## ⚠️ Fortfarande obesvarat — påverkar annonserna

Tre saker som Medvital äger och som `meta-lansering.md` bygger på:

1. **14-dagarsregeln.** Deras produktsidor säger "avsluta när som helst", deras köpvillkor
   säger 14 dagars varsel. Vi har följt köpvillkoren (det bindande dokumentet) och skrivit om
   sajten SV + ES. Få det bekräftat — annars sitter vi med fel uppgift på egen sajt.
2. **Absorb+ 199 kr är "tidsbegränsat".** Det är vår **enda** annonskrok — fem av sex produkter
   har inget intropris alls. Löper det ut mitt i en kampanj står vi utan erbjudande.
3. **Frakt på 199 kr-ordern.** Absorb+-sidan säger "frakt ingår över 399 kr". Vi visar 59 kr
   (försiktiga hållet) — men gissar.

Frågorna ligger färdiga i [[medvital-mote]].

---

## Realistisk tidplan

| Dag | Vad |
|---|---|
| **Idag** | Steg 0 (org.nr + Supabase-admin) → jag fyller i · Vercel × 2 · Meta-konton skapas |
| **Dag 1–2** | DNS slår igenom · jag verifierar funneln live · kreativ produceras · organiskt börjar |
| **Dag 2–3** | Pixel + domänverifiering · juristsvar kommer förhoppningsvis |
| **Dag 3–4** | Kampanj 1 live (Hälsoklubben, 250 kr/dag, ensam) |
| **Dag 7–8** | Kampanj 2 + 3 på, om Medvital bekräftat Absorb+-priset |

**Realistiskt: annonser live om 3–4 dagar** — men bara om Rojdix org.nr kommer idag. Utan det
kan Hälsoklubben inte gå live alls, och Hälsoklubben är kampanjen som ska starta först.

*Relaterat: [[DEPLOY]] · [[rojdix-leadmottagare]] · [[medvital-mote]] · [[meta-lansering]] ·
[[halsoklubben-subdoman]] · [[STATUS]] · [[HANDOFF]]*
