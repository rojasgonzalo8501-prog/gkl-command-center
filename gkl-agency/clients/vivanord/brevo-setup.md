# Brevo — klistra-in-klart nurture-flöde

> All copy från [[email-flode]], nu som **färdig HTML** att klistra rakt in i Brevo. Ärlig not:
> Brevo har ingen JSON-import för automationer — men mejlmallarna importeras med "Paste your
> code", och automationens steg byggs en gång i deras editor (config nedan). Efter det går
> flödet självt vid varje nytt lead.
>
> **Personalisering:** `{{ contact.FIRSTNAME }}` fylls automatiskt av Brevo. Byt `#` i knappar
> mot riktiga länkar. Brevo lägger till avregistreringslänk automatiskt (GDPR-krav).

## Setup i rätt ordning (~30 min, en gång)
1. Skapa Brevo-konto → verifiera avsändardomän **vivanord.se** (SPF/DKIM — domänen är live nu).
2. Skapa en **lista**: `Hälsoklubben-leads`. Lägg till kontaktattribut: `FIRSTNAME`, `ALDER`,
   `INTRESSE`, `TEL_SAMTYCKE` (ja/nej).
3. Slå på **Double Opt-In (DOI)** på listan → använd HTML för Mejl 0 som DOI-bekräftelsemall.
4. Skapa mallar (Campaigns → Templates → "Paste your code") för Mejl 1, 2, 3 med HTML nedan.
5. Bygg automationen (config sist i detta dok).
6. **Entry:** hur leadet hamnar i listan → se "Koppla leadflödet" sist.

---

## Mejl 0 — DOI-bekräftelse (Brevos double opt-in-mall)
**Ämne:** Bekräfta din e-post — så är du med i dragningen 🎁
**Förhandstext:** Ett klick kvar till tävlingen om 10 000 kr.

```html
<div style="max-width:600px;margin:0 auto;font-family:-apple-system,Segoe UI,sans-serif;background:#faf7f2;padding:0">
  <div style="background:#1d5c4d;padding:22px 28px">
    <span style="color:#fff;font-size:20px;font-weight:800">Viva<span style="color:#7fb069">nord</span></span>
  </div>
  <div style="padding:28px;color:#22302c;font-size:16px;line-height:1.6">
    <p>Hej {{ contact.FIRSTNAME }}!</p>
    <p>Tack för att du gick med i Hälsoklubben. Klicka nedan för att bekräfta din e-post — då är du med i månadens dragning om ett presentkort på <strong>10 000 kr</strong>.</p>
    <p style="text-align:center;margin:28px 0">
      <a href="{{ doubleoptin }}" style="background:#7fb069;color:#0f1614;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:8px;display:inline-block">Bekräfta min e-post</a>
    </p>
    <p style="font-size:14px;color:#5a6b65">Bekräftar du inte kan vi tyvärr inte ta med dig i dragningen.</p>
  </div>
  <div style="padding:16px 28px;font-size:12px;color:#8a978f;border-top:1px solid #e5ddd0">© 2026 Vivanord · Kosttillskott ersätter inte en varierad kost.</div>
</div>
```
*Brevo ersätter `{{ doubleoptin }}` med bekräftelselänken automatiskt i DOI-läge.*

## Mejl 1 — Dag 1: Varför vi finns
**Ämne:** Därför startade vi Vivanord · **Förhandstext:** Kosttillskott utan krångel — och utan fula trick.

```html
<div style="max-width:600px;margin:0 auto;font-family:-apple-system,Segoe UI,sans-serif;background:#faf7f2">
  <div style="background:#1d5c4d;padding:22px 28px"><span style="color:#fff;font-size:20px;font-weight:800">Viva<span style="color:#7fb069">nord</span></span></div>
  <div style="padding:28px;color:#22302c;font-size:16px;line-height:1.6">
    <p>Kosttillskott på prenumeration har fått dåligt rykte: dolda villkor och avtal som är omöjliga att ta sig ur. Vi tyckte det var dags att göra tvärtom.</p>
    <p>Hos oss står priset alltid tydligt, fakturan kommer med lådan, och uppsägningsregeln är utskriven i klartext: säg upp senast 14 dagar före nästa leverans, så uteblir den. Inga asterisker.</p>
    <p>Vill du prova är <strong>Absorb+ nere på 199 kr första månaden</strong> — halva priset.</p>
    <p style="text-align:center;margin:28px 0"><a href="https://vivanord.se/produkter.html" style="background:#7fb069;color:#0f1614;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:8px;display:inline-block">Se produkterna</a></p>
  </div>
  <div style="padding:16px 28px;font-size:12px;color:#8a978f;border-top:1px solid #e5ddd0">© 2026 Vivanord</div>
</div>
```

## Mejl 2 — Dag 3: Utbildande (bygger förtroende)
**Ämne:** 5 sätt att se om ett kosttillskott är seriöst · **Förhandstext:** En liten checklista innan du köper — oavsett märke.

```html
<div style="max-width:600px;margin:0 auto;font-family:-apple-system,Segoe UI,sans-serif;background:#faf7f2">
  <div style="background:#1d5c4d;padding:22px 28px"><span style="color:#fff;font-size:20px;font-weight:800">Viva<span style="color:#7fb069">nord</span></span></div>
  <div style="padding:28px;color:#22302c;font-size:16px;line-height:1.6">
    <p>Innan du köper kosttillskott, kolla det här — det gäller oss och alla andra:</p>
    <ol style="padding-left:20px">
      <li><strong>Tydligt innehåll</strong> — står varje ingrediens och mängd på förpackningen?</li>
      <li><strong>Godkända påståenden</strong> — seriösa märken lovar aldrig mirakel, bara det EU:s regler tillåter.</li>
      <li><strong>Tillverkat inom EU</strong> — under kontrollerade regler.</li>
      <li><strong>Enkel uppsägning</strong> — du ska kunna avsluta utan att tjata dig ur ett avtal.</li>
      <li><strong>Öppet pris</strong> — du ska veta exakt vad det kostar innan du beställer.</li>
    </ol>
    <p>Vi byggde Vivanord för att klara alla fem. Vill du testa oss kostar Absorb+ 199 kr första månaden.</p>
    <p style="text-align:center;margin:28px 0"><a href="https://vivanord.se/bestall.html?produkt=mage" style="background:#7fb069;color:#0f1614;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:8px;display:inline-block">Prova Absorb+ för 199 kr</a></p>
  </div>
  <div style="padding:16px 28px;font-size:12px;color:#8a978f;border-top:1px solid #e5ddd0">© 2026 Vivanord</div>
</div>
```

## SMS — Dag 5 (endast om `TEL_SAMTYCKE = ja`)
> Hej {{ contact.FIRSTNAME }}! Vivanord här — Absorb+ kostar 199 kr första månaden, halva priset. [kort-länk] Avreg: svara STOPP.

*Brevo skickar SMS via samma automation. Villkora steget på attributet `TEL_SAMTYCKE`.*

## Mejl 3 — Dag 7: Påminnelse
**Ämne:** Absorb+ första månaden — 199 kr i stället för 399 kr · **Förhandstext:** Ingen bindningstid. Betala mot faktura.

```html
<div style="max-width:600px;margin:0 auto;font-family:-apple-system,Segoe UI,sans-serif;background:#faf7f2">
  <div style="background:#1d5c4d;padding:22px 28px"><span style="color:#fff;font-size:20px;font-weight:800">Viva<span style="color:#7fb069">nord</span></span></div>
  <div style="padding:28px;color:#22302c;font-size:16px;line-height:1.6">
    <p>Hej {{ contact.FIRSTNAME }}, vi hörde inte av dig — så här är erbjudandet igen.</p>
    <p><strong>Absorb+ kostar 199 kr första månaden</strong> i stället för 399 kr. Levereras i brevlådan, du betalar mot faktura när den kommit. Därefter 399 kr + 59 kr frakt var fjärde vecka. Ingen bindningstid — säg upp senast 14 dagar före nästa leverans, så uteblir den.</p>
    <p style="text-align:center;margin:28px 0"><a href="https://vivanord.se/bestall.html?produkt=mage" style="background:#7fb069;color:#0f1614;text-decoration:none;font-weight:700;padding:14px 28px;border-radius:8px;display:inline-block">Se erbjudandet</a></p>
    <p style="font-size:14px;color:#5a6b65">P.S. Oavsett om du handlar är du kvar i månadens dragning om 10 000 kr. 🎁</p>
  </div>
  <div style="padding:16px 28px;font-size:12px;color:#8a978f;border-top:1px solid #e5ddd0">© 2026 Vivanord</div>
</div>
```

---

## Automationen — bygg så här (Brevo → Automations → Create)

```
TRIGGER: Kontakt läggs till i listan "Hälsoklubben-leads"
  └─ (DOI-bekräftelse sköts av listans double opt-in → Mejl 0)
  ├─ Vänta 1 dag  → skicka Mejl 1
  ├─ Vänta 2 dagar → skicka Mejl 2
  ├─ Vänta 2 dagar → OM TEL_SAMTYCKE = ja → skicka SMS
  ├─ Vänta 2 dagar → skicka Mejl 3
  └─ SLUT
EXIT-VILLKOR (hela flödet): om kontakten gör en beställning → stoppa flödet
  (undvik att peppa någon som redan köpt)
```

## Koppla leadflödet (så leads hamnar i listan automatiskt)

Tre vägar, från enklast till mest hands-off:
1. **Supabase Database Webhook → Brevo** (rekommenderas): Supabase → Database Webhooks → på INSERT
   i `leads` → POST till Brevos kontakt-API. Realtid, ingen polling.
2. **n8n-connector:** jag bygger `vivanord-lead-to-brevo.json` (nytt lead → Brevo-kontakt med
   attribut) när du har Brevo-kontots API-nyckel + list-ID. Passar er n8n-stack.
3. **Manuell CSV-import** från admin-portalen — funkar men inte hands-off. Bara som nödlösning.

⚠️ Mappa `samtyckeTelefon` → `TEL_SAMTYCKE` och quizfälten `alder`/`intresse` → `ALDER`/`INTRESSE`
så SMS-villkoret och framtida segmentering fungerar.

## Flöde B — kunder (retention)
Copyn/strukturen finns i [[email-flode]] (orderbekräftelse, påminnelse före debitering, dag-10-tips,
vinn-tillbaka, månadsbrev). Bygg dessa när första ordrarna kommer — säg till så gör jag HTML även för dem.

*Relaterat: [[email-flode]] · [[automation-blueprint]] · [[leveransformat-fragor]]*
