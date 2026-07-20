# CLAUDE.md — Vinnarklubben

> **Viktigt:** Svenskt projekt — allt innehåll skrivs på **svenska** om inget annat sägs.

## Vad är detta?
**Vinnarklubben** är GKL Agencys egna **leadplattform** — en leadfabrik i sparklubben.nu-stil.
Till skillnad från en enskild kundfunnel (jfr Vivanord/Hälsoklubben, som matar *en* köpare) är
Vinnarklubben en **bred, multi-vertikal broker**: flera tävlingar i flera branscher, som samlar
in leads vi säljer vidare till **många** bolag. Målet: bli den leadkälla bolag köper ifrån —
i stället för att våra kunder köper leads av sparklubben/NordicLeads.

- **Modell:** Konsument tävlar gratis (quiz + kunskapsmoment) → lämnar lead med GDPR-samtycke →
  vi taggar, prissätter och säljer/överlåter leadet till köpare i rätt bransch.
- **Vertikaler v1:** Dagligvaror, Hälsa, Solceller & energi, Telefoni & bredband, Försäkring.
- **Köparmodell:** intern broker-admin (vi kontaktar och säljer till bolag manuellt). Ingen
  publik self-serve-köparportal ännu.
- **Stack:** statisk sajt + Supabase (samma projekt som Vivanord, egen tabell `vk_leads`).

## Arkitektur (config-driven)
En quiz-/tävlingsmotor driver alla vertikaler:
- `kampanjer.js` — SANNINGSKÄLLA: alla tävlingar/vertikaler. Lägg till en vertikal = ett objekt.
- `tavling.html?k=<slug>` — återanvändbar funnel; renderar valfri kampanj från katalogen.
- `index.html` — publik hubb som listar alla aktiva tävlingar.
- `admin/index.html` — intern broker-portal: leads, filter, statusflöde, köpare+pris, CSV-export, leadkalkyl.

## Regelefterlevnad — LÄS INNAN INNEHÅLL SKAPAS
1. **Kunskapsmoment:** varje tävling måste ha minst en kunskapsfråga (`kunskap: true`) — det gör
   tävlingen till skicklighetsspel och laglig utan lotterilicens.
2. **GDPR-samtycke:** separata, aldrig förkryssade rutor för e-post resp. partneröverlåtelse.
   **Överlåtelsesamtycke kräver att mottagaren namnges** (GDPR art. 4.11 + 7). `partner.namn` i
   kampanjer.js får ALDRIG stå kvar som `[KÖPARE ...]` när betald trafik körs — fyll i det
   faktiska köparbolaget. Detta är samma fälla som sänkte sparklubbens vaga "sponsorer"-samtycke.
3. **Telefonförsäljning:** köparen som ringer ansvarar för skriftlighetskravet (distansavtalslagen),
   NIX och inspelningsupplysning. Reglera i avtal med köparen.
4. **Hälsovertikalen:** endast EFSA-godkända påståenden; inga påståenden om personliga egenskaper i annonser.
5. **Meta-koppling:** alla sidor måste ange att tävlingen inte har koppling till Meta/Facebook/Instagram.

## Filer i denna mapp
- `README.md` — full guide: affärsmodell, arkitektur, aktivera Supabase, lägga till vertikal, lanseringschecklista, sparklubben-mappning.

## Leverans
- Sajt + admin: `deliverables/websites/vinnarklubben/`
