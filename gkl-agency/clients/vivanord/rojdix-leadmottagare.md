# Rojdix — leadmottagaren

> **Ändrat 2026-07-16.** Det är **Rojdix** som ringer våra leads — inte Medvital. Hela samtyckeskedjan
> var byggd runt att Medvital var mottagaren. Den är nu omskriven till Rojdix på svenska och spanska.

> [!success] ✅ Mottagaren bekräftad + ifylld (2026-07-22)
> Register uppslagna (offentliga bolagsregister):
> - **ROJDIX S.R.L.** — Rumänien, reg.nr **J40/6995/2023**, CUI **47979950** (Bukarest, reg. 2023-04-11). ← **VALT**
> - **RojDix InC OÜ** — Estland, **14200872** (Tallinn, 2017). ⚠️ Registret visar obetalda böter +
>   icke-inlämnade årsredovisningar → valdes bort.
> - Inget **spanskt** Rojdix-bolag hittades. rojdix.se = operativ säljverksamhet utan eget svenskt AB.
>
> Beslut (kund, 2026-07-22): **det rumänska SRL:et** namnges i samtycket. Ifyllt på alla sidor
> (index.html, resa.html, tävlingsvillkoren, integritetspolicyn — SV + ES) som
> `ROJDIX S.R.L. (Rumänien · reg.nr J40/6995/2023 · CUI 47979950)`. EU/EES-transparensrad tillagd
> (RO = EU/EES, ingen tredjelandsöverföring, inga SCC krävs).
>
> 🔴 **Kvar:** bekräfta mot Rojdix-avtalet att **SRL:et (RO)** — inte OÜ:t (EE) — faktiskt är avtalspart
> och personuppgiftsansvarig. Är det fel bolag i rutan blir överlåtelsesamtycket ogiltigt. Överväg också
> om du vill binda ditt varumärke vid det estniska bolagets registeranmärkningar om det visar sig vara det.

## Varför detta var allvarligt

Samtyckesrutan på Hälsoklubben är ett **överlåtelsesamtycke**. Koden bar redan kommentaren:

> *"samtycke till överlåtelse kräver att mottagaren namnges (GDPR art. 4.11 + 7)"*

Ett samtycke måste vara **informerat och specifikt**. Personen kryssade i en ruta som sa att
*Medvital* skulle ringa. Om Rojdix ringer har personen aldrig samtyckt till det samtalet —
samtycket är ogiltigt för den behandlingen. Praktiskt: mottagaren får "jag har aldrig godkänt
er" i luren, och det är telefonförsäljarens värsta startläge. Formellt: en anmälan till IMY
skriver sig själv.

## Modellen nu

| Part | Roll | Får vad |
|---|---|---|
| **Vivanord** | Personuppgiftsansvarig för sajt + tävling | Samlar in leads |
| **Rojdix Telemarketing** | **Självständigt personuppgiftsansvarig** | Leads med telefonsamtycke **överlåts** hit. De ringer. |
| **Medvital Sverige AB** (559421-2093) | Juridisk säljare | Order- och leveransuppgifter. Levererar, fakturerar, kundservice. |

Alltså **två separata mottagare med olika ändamål**. Det är korrekt beskrivet i
integritetspolicyn nu (SV + ES), men innebär att du behöver **två avtal**, inte ett.

## ⚠️ Vad som saknas — måste in före lansering

1. **Rojdix juridiska person + organisationsnummer.** Jag hittade `rojdix.se` men inget svenskt
   org.nr. Det enda registernumret som gick att hitta är **ROJDIX INC OÜ (14200872)** — ett
   **estniskt** bolag. Jag har medvetet *inte* skrivit in det, eftersom:
   - Fel bolag i rutan gör samtycket ogiltigt — det är hela rutans syfte.
   - Är mottagaren estnisk är det en annan juridisk person än ett svenskt AB, och
     integritetspolicyns formulering om överföring inom EU/EES behöver ses över.

   Sökvägar: `[org.nr XXXXXX-XXXX]` respektive `[n.º org. XXXXXX-XXXX]`.

2. **Personuppgiftsavtal med Rojdix.** De är självständigt ansvariga, så det är inte ett
   biträdesavtal — men överlåtelsen behöver regleras: vad de får göra, hur länge, hur
   återkallelser hanteras.

3. **Vem betalar per lead?** Affärsmodellen i [[brief]] säger att leadlistan säljs **till
   Medvital**. Om leadsen nu går till Rojdix — vem fakturerar vi? Rojdix? Medvital, som
   vidarebefordrar? Det påverkar Leadkalkylen i admin-portalen.

4. **Hur hänger 400 kr/bekräftat avtal ihop?** Rojdix ringer och stänger, Medvital levererar och
   fakturerar. Vem bekräftar avtalet, och vem betalar ut vår ersättning?

5. **Skriftlighetskravet.** Distansavtalslagen kräver skriftlig bekräftelse efter telefonförsäljning.
   Det är nu **Rojdix** flöde som måste uppfylla det, inte Medvitals. Bekräfta att de gör det —
   annars är avtalen ogiltiga och våra leads brända.

6. **Spansktalande säljare** — frågan gäller nu Rojdix, inte Medvital. Uppdatera fråga 9 i
   [[medvital-mote]] och ställ den till rätt bolag.

## Filer som ändrats (2026-07-16)

| Fil | Vad |
|---|---|
| `kampanj.html` | Samtyckesruta + villkorstext → Rojdix |
| `tavlingsvillkor.html` | Personuppgiftsavsnittet → Rojdix |
| `integritetspolicy.html` | Ändamålstabell + eget stycke: Medvital = säljare, Rojdix = ringer |
| `es/campana.html` | Samma som kampanj.html |
| `es/condiciones-sorteo.html` | Samma som tavlingsvillkor.html |
| `es/privacidad.html` | Samma som integritetspolicy.html |

## Kvar att göra i marknadsföringen

`meta-lansering.md` och `marketing-plan.md` beskriver leadaffären som "leads säljs till Medvital".
Det stämmer inte längre. Uppdatera när punkt 3–4 ovan är besvarade.

*Relaterat: [[medvital-mote]] · [[medvital-katalog]] · [[villkor-avvikelser]] · [[brief]] · [[STATUS]]*
