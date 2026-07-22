# Broker-modellen vs. den rena modellen — beslutsunderlag

> Skiss på begäran (2026-07-22). Syfte: visa hur en sparklubben-liknande **broker-modell** (sälj
> samma lead till flera köpare via ett vagt samtycke) skulle se ut för Hälsoklubben, bredvid den
> **rena modellen** vi byggt idag (namngiven mottagare, en köpare). Detta är ett *val* — båda kan
> köras, men de har olika ekonomi och olika risk. Ingen ändring är gjord på sajten; detta är underlag.
>
> ⚠️ Jag är inte jurist. Broker-varianten nedan är den *mest försvarbara* versionen av upplägget —
> inte sparklubbens råaste "sponsorer"-text. Låt en jurist läsa vald modell före skarp drift.

---

## 1. De två modellerna i en mening

- **Ren modell (idag):** Vivanord samlar leads → överlåter telefonsamtyckta leads till **EN namngiven
  mottagare (Rojdix)** → betalt per lead + 400 kr/avtal. Tryggt, men varje lead säljs en gång.
- **Broker-modell (sparklubben/NordicLeads):** Vivanord samlar leads → säljer **samma lead till FLERA
  köpare** via ett bredare samtycke till "samarbetspartners" → betalt per lead × antal köpare. Mer
  intäkt per lead, högre juridisk risk.

**Gemensamt för båda:** det krävs ett **org.nr / bolag** som är avsändare och personuppgiftsansvarig.
Även NordicLeads (sparklubbens operatör) har det. Broker-modellen tar dig inte runt den frågan.

---

## 2. Broker-varianten konkret

### 2a. Bolagsstruktur
- Operatör/PUA: **Vivanord** (enskild firma eller AB — samma krav som idag).
- Vivanord blir en **leadförmedlare**: du är inte längre bara återförsäljare åt Medvital, du är en
  leadkälla som säljer till flera köpare (Medvital/Rojdix + andra hälso-/kosttillskottsbolag).
- Konsekvens: **relationen till Medvital ändras.** Idag är du deras "rena" premiumkälla. Som broker
  säljer du samma lead till deras konkurrenter också — förhandla det öppet, annars bränner du avtalet.

### 2b. Samtyckestexten (defensibel broker-version)
Sparklubbens råa version ("våra sponsorer kan kontakta dig") namnger ingen — juridiskt svagast.
Den mer försvarbara broker-texten namnger **mottagarkategori + länkar till en aktuell partnerlista**:

> ☐ Ja, mina kontaktuppgifter får överlåtas till Vivanords samarbetspartners inom hälsa och
> kosttillskott, som får kontakta mig per telefon, SMS och e-post med erbjudanden. En aktuell lista
> över mottagande partners finns på **vivanord.se/partners** och hålls uppdaterad. Jag kan när som
> helst återkalla samtycket, hos Vivanord eller direkt hos respektive partner.

Nyckeln: en **publicerad, länkad partnerlista** gör mottagarna *identifierbara* utan att rutan måste
räkna upp varje bolag. Det är skillnaden mellan "försvarbar broker" och "sparklubbens svaga variant".

### 2c. Tekniska/admin-ändringar som krävs
| Vad | Varför |
|---|---|
| `partners.html` — publik, uppdaterad lista över köpare | Gör samtycket giltigt (mottagarna identifierbara) |
| Distributionslogg per lead (`sald_till: [Rojdix, X, Y]`, tidsstämpel) | Bevis på vem leadet delats med — krävs vid IMY-förfrågan/återkallelse |
| Samtyckesversionering (vilken partnerlista gällde vid samtycket) | Om listan ändras måste du visa vad personen faktiskt sa ja till |
| Återkallelse-/spärrhantering över ALLA partners | Säger nej hos en → måste stoppa hos alla; annars fortsätter samtal = klagomål |
| Admin-portalen: filtrera/exportera per köpare | Fakturera varje köpare för deras andel |

### 2d. Ekonomi (det som lockar)
- **Ren modell:** 1 telefonlead → säljs 1 gång. Säg X kr/lead.
- **Broker:** 1 telefonlead → säljs till 2–3 köpare → 2–3 × X kr/lead (icke-exklusivt, lägre pris styck,
  men mer totalt). Plus fortsatt 400 kr/avtal om du behåller Medvital-avtalet.
- Baksida: icke-exklusiva leads är **mindre värda per styck** (köparen vet att andra också ringer), och
  personen blir uppringd av flera → fler arga samtal → högre avhopp och klagofrekvens.

---

## 3. Riskregister — broker vs. ren

| Risk | Ren modell | Broker-modell |
|---|---|---|
| **IMY (GDPR)** | Låg — mottagaren namngiven | **Hög** — vagt "partners"-samtycke är exakt det IMY synar; kräver partnerlista + loggar för att hålla |
| **Konsumentverket / telemarketing** | Låg–medel | **Hög** — fler samtal per person = fler anmälningar |
| **Meta-kontot** | Låg | **Medel–hög** — spammade personer klagar/anmäler annonserna → negativ feedback stänger konton (se meta-lansering.md) |
| **Rykte / Trustpilot** | Skyddat | **Utsatt** — "jag fyllde i en tävling och blev uppringd av fem bolag" är klassisk 1-stjärna |
| **Medvital-relationen** | Du är premiumkällan | **Ansträngd** — du säljer till deras konkurrenter; måste omförhandlas |
| **Intäkt per lead** | Lägre | **Högre** |
| **Org.nr krävs** | Ja | Ja (ingen skillnad) |

---

## 4. Rekommendation

- **Starta rent, med option att bli broker.** Bygg funneln på den namngivna Rojdix-modellen (redan klar),
  få igång volym och en ren Trustpilot. Den är trygg och skyddar Meta-kontot medan det är nytt och känsligt.
- **Väx till broker medvetet** om/när ekonomin motiverar det: lägg då till `partners.html`,
  distributionsloggen och den bredare samtyckestexten ovan — och omförhandla med Medvital först.
- **Kör aldrig sparklubbens råa "sponsorer"-text.** Om du vill åt broker-intäkten, gör det med
  partnerlistan — det är skillnaden mellan en försvarbar affär och en IMY-anmälan som väntar.

Ekonomin lockar i broker, men den bygger på att inte bli anmäld. Vinsten från att sälja samma lead 3×
äts snabbt upp av ett stängt Meta-konto eller en IMY-granskning. Rent först, broker sen och ordentligt.

---

## 5. Om du väljer broker — då gör jag detta (säg till)
1. Skriver `partners.html` (mall + första köparen) och länkar den från samtycket.
2. Byter samtyckestexten på `index.html` + `resa.html` (SV) till broker-versionen i 2b.
3. Lägger `sald_till`-fält + distributionslogg i lead-schemat och admin-portalen.
4. Uppdaterar integritetspolicyn + tävlingsvillkoren till flera mottagare.
5. Lägger en not i `LANSERING.md` om att partnerlistan + jurist måste vara klara före skarp trafik.

*Relaterat: [[sparklubben-teardown]] · [[rojdix-leadmottagare]] · [[meta-lansering]] · [[LANSERING]] · [[STATUS]]*
