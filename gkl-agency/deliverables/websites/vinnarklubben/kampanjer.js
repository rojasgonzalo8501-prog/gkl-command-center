// Vinnarklubben — kampanjkatalog (SANNINGSKÄLLA för alla vertikaler)
// -----------------------------------------------------------------------------
// Hela poängen med plattformen: EN quiz-/tävlingsmotor (main.js + tavling.html)
// driver alla tävlingar. Lägg till en ny vertikal = lägg till ett objekt här.
// Hubben (index.html) och funneln (tavling.html?k=<slug>) läser båda denna fil.
//
// Legal-modell per kampanj (bygger på clients/vivanord/sparklubben-teardown.md):
//   • kunskap:true på en fråga = skicklighetsmoment → tävlingen är laglig utan lotterilicens.
//   • profilfrågor (field satt) fångas i leadets `svar` → gör leadet säljbart per bransch.
//   • partner.namn = det bolag leadets telefonsamtycke ÖVERLÅTS till. För ett juridiskt rent
//     samtycke ska mottagaren namnges (GDPR art. 4.11 + 7). Står [KÖPARE ...] kvar är det en
//     PLATSHÅLLARE — fyll i det faktiska köparbolaget innan du kör betald trafik. Se README.
// -----------------------------------------------------------------------------

window.VK_ARRANGOR = 'Vinnarklubben (GKL Agency)'; // arrangör i tävlingsvillkoren — org.nr fylls i före lansering

window.VK_KAMPANJER = [
  {
    slug: 'matkasse-10000',
    vertikal: 'Dagligvaror',
    emoji: '🛒',
    farg: 'linear-gradient(155deg,#17264a,#101c34)',
    klubb: 'Matkasseklubben',
    vinst: 'Presentkort 10 000 kr till matbutik',
    rubrik: 'Svara på 4 frågor —<br /><em>vinn 10 000 kr</em> till matkassen',
    sub: 'Gratis att delta. Tar under en minut. Ny vinnare dras varje månad.',
    intro: 'Vinn ett presentkort på 10 000 kr till din matbutik. Svara på fyra snabba frågor.',
    quiz: [
      { fraga: 'Fråga 1 av 4', hint: 'Vilken av dessa är en svensk dagligvarukedja?', kunskap: true,
        alternativ: [{ text: 'ICA' }, { text: 'Ford' }, { text: 'Telia' }] },
      { fraga: 'Fråga 2 av 4', hint: 'Hur gammal är du?', field: 'alder',
        alternativ: [{ text: '18–29 år', value: '18–29' }, { text: '30–49 år', value: '30–49' }, { text: '50–64 år', value: '50–64' }, { text: '65+ år', value: '65+' }] },
      { fraga: 'Fråga 3 av 4', hint: 'Hur många är ni i hushållet?', field: 'hushall',
        alternativ: [{ text: '1' }, { text: '2' }, { text: '3–4' }, { text: '5 eller fler', value: '5+' }] },
      { fraga: 'Fråga 4 av 4', hint: 'Vad handlar du helst?', field: 'intresse',
        alternativ: [{ text: 'Ekologiskt' }, { text: 'Lågpris' }, { text: 'Färskvaror' }, { text: 'Storpack' }] },
    ],
    partner: { namn: '[KÖPARE — dagligvaru-/hushållspartner, fyll i före lansering]',
      text: 'erbjudanden om mat, hushåll och dagligvaror' },
    epostText: 'Ja, jag vill få Vinnarklubbens nyhetsbrev med tävlingar och erbjudanden via e-post.',
  },
  {
    slug: 'halsa-halsoklubben',
    vertikal: 'Hälsa & kosttillskott',
    emoji: '💚',
    farg: 'linear-gradient(155deg,#1d5c4d,#123a30)',
    klubb: 'Hälsoklubben',
    vinst: 'Presentkort 10 000 kr',
    rubrik: 'Svara på 4 frågor om hälsa —<br /><em>vinn 10 000 kr</em>',
    sub: 'Gratis att delta. Tar under en minut. Ny vinnare dras varje månad.',
    intro: 'Fyra snabba hälsofrågor — vinn ett presentkort på 10 000 kr.',
    quiz: [
      { fraga: 'Fråga 1 av 4', hint: 'Vilket vitamin bildar kroppen när huden träffas av solljus?', kunskap: true,
        alternativ: [{ text: 'Vitamin D' }, { text: 'Vitamin C' }, { text: 'Vitamin B12' }] },
      { fraga: 'Fråga 2 av 4', hint: 'Hur gammal är du?', field: 'alder',
        alternativ: [{ text: '18–29 år', value: '18–29' }, { text: '30–49 år', value: '30–49' }, { text: '50–64 år', value: '50–64' }, { text: '65+ år', value: '65+' }] },
      { fraga: 'Fråga 3 av 4', hint: 'Vad vill du helst få stöd med?', field: 'intresse',
        alternativ: [{ text: 'Leder & rörlighet' }, { text: 'Immunförsvar' }, { text: 'Energi & sömn' }, { text: 'Skönhet & hud' }, { text: 'Mage & tarm' }] },
      { fraga: 'Fråga 4 av 4', hint: 'Vilket mineral förknippas med att minska trötthet och utmattning?', kunskap: true,
        alternativ: [{ text: 'Magnesium' }, { text: 'Bly' }, { text: 'Kvicksilver' }] },
    ],
    partner: { namn: '[KÖPARE — hälso-/kosttillskottspartner, fyll i före lansering]',
      text: 'erbjudanden om hälsa och kosttillskott' },
    epostText: 'Ja, jag vill få Vinnarklubbens nyhetsbrev om hälsa, tävlingar och erbjudanden via e-post.',
  },
  {
    slug: 'solceller',
    vertikal: 'Solceller & energi',
    emoji: '☀️',
    farg: 'linear-gradient(155deg,#b9701a,#7a4410)',
    klubb: 'Energiklubben',
    vinst: 'Solcellscheck värd 20 000 kr',
    rubrik: 'Svara på 4 frågor —<br /><em>vinn 20 000 kr</em> mot solceller',
    sub: 'Gratis att delta. Vinnaren får 20 000 kr mot en solcellsinstallation.',
    intro: 'Vinn 20 000 kr mot solceller. Svara på fyra frågor om din bostad.',
    quiz: [
      { fraga: 'Fråga 1 av 4', hint: 'Vad omvandlar en solcell till elektricitet?', kunskap: true,
        alternativ: [{ text: 'Solljus' }, { text: 'Vind' }, { text: 'Vatten' }] },
      { fraga: 'Fråga 2 av 4', hint: 'Hur bor du?', field: 'boende',
        alternativ: [{ text: 'Villa eller radhus', value: 'Villa/radhus' }, { text: 'Lägenhet' }, { text: 'Fritidshus' }] },
      { fraga: 'Fråga 3 av 4', hint: 'Äger du din bostad?', field: 'agande',
        alternativ: [{ text: 'Ja' }, { text: 'Nej' }] },
      { fraga: 'Fråga 4 av 4', hint: 'Har du eget tak i bra läge (söder/väster)?', field: 'tak',
        alternativ: [{ text: 'Ja' }, { text: 'Nej' }, { text: 'Vet ej' }] },
    ],
    partner: { namn: '[KÖPARE — solcells-/energibolag, fyll i före lansering]',
      text: 'erbjudanden och offerter om solceller och energi' },
    epostText: 'Ja, jag vill få Vinnarklubbens nyhetsbrev med tävlingar och erbjudanden via e-post.',
  },
  {
    slug: 'telefoni-bredband',
    vertikal: 'Telefoni & bredband',
    emoji: '📱',
    farg: 'linear-gradient(155deg,#1e4bb8,#122a63)',
    klubb: 'Mobilklubben',
    vinst: '1 år gratis mobilabonnemang',
    rubrik: 'Svara på 4 frågor —<br /><em>vinn ett år</em> gratis mobil',
    sub: 'Gratis att delta. Vinnaren får ett års mobilabonnemang utan kostnad.',
    intro: 'Vinn ett års gratis mobilabonnemang. Svara på fyra snabba frågor.',
    quiz: [
      { fraga: 'Fråga 1 av 4', hint: 'Vilken teknik ger normalt snabbast bredband hem?', kunskap: true,
        alternativ: [{ text: 'Fiber' }, { text: 'Kopparledning' }, { text: 'Morsekod' }] },
      { fraga: 'Fråga 2 av 4', hint: 'Vilken operatör har du idag?', field: 'nuvarande',
        alternativ: [{ text: 'Telia' }, { text: 'Tele2 / Comviq' }, { text: 'Tre' }, { text: 'Telenor' }, { text: 'Annan' }] },
      { fraga: 'Fråga 3 av 4', hint: 'Vad är viktigast för dig?', field: 'behov',
        alternativ: [{ text: 'Lägst pris' }, { text: 'Mest surf' }, { text: 'Bäst täckning' }] },
      { fraga: 'Fråga 4 av 4', hint: 'Har du bindningstid kvar?', field: 'bindning',
        alternativ: [{ text: 'Ja' }, { text: 'Nej' }, { text: 'Vet ej' }] },
    ],
    partner: { namn: '[KÖPARE — telekom-/bredbandsbolag, fyll i före lansering]',
      text: 'erbjudanden om mobilabonnemang och bredband' },
    epostText: 'Ja, jag vill få Vinnarklubbens nyhetsbrev med tävlingar och erbjudanden via e-post.',
  },
  {
    slug: 'forsakring',
    vertikal: 'Försäkring',
    emoji: '🛡️',
    farg: 'linear-gradient(155deg,#0f7d6b,#0a4f44)',
    klubb: 'Trygghetsklubben',
    vinst: '1 års försäkringspremie betald (upp till 10 000 kr)',
    rubrik: 'Svara på 4 frågor —<br /><em>vinn ett års</em> försäkring',
    sub: 'Gratis att delta. Vinnaren får ett års försäkringspremie betald, upp till 10 000 kr.',
    intro: 'Vinn ett års försäkringspremie. Svara på fyra snabba frågor.',
    quiz: [
      { fraga: 'Fråga 1 av 4', hint: 'Vad ersätter en hemförsäkring i första hand?', kunskap: true,
        alternativ: [{ text: 'Skador i hemmet' }, { text: 'Bilens motor' }, { text: 'Elräkningen' }] },
      { fraga: 'Fråga 2 av 4', hint: 'Vilken försäkring vill du helst jämföra?', field: 'typ',
        alternativ: [{ text: 'Hemförsäkring', value: 'Hem' }, { text: 'Bilförsäkring', value: 'Bil' }, { text: 'Liv & olycksfall', value: 'Liv/olycksfall' }, { text: 'Djurförsäkring', value: 'Djur' }] },
      { fraga: 'Fråga 3 av 4', hint: 'Hur gammal är du?', field: 'alder',
        alternativ: [{ text: '18–29 år', value: '18–29' }, { text: '30–49 år', value: '30–49' }, { text: '50–64 år', value: '50–64' }, { text: '65+ år', value: '65+' }] },
      { fraga: 'Fråga 4 av 4', hint: 'Hur bor du?', field: 'boende',
        alternativ: [{ text: 'Villa eller radhus', value: 'Villa/radhus' }, { text: 'Bostadsrätt' }, { text: 'Hyresrätt' }] },
    ],
    partner: { namn: '[KÖPARE — försäkringsbolag/-förmedlare, fyll i före lansering]',
      text: 'erbjudanden och jämförelser om försäkring' },
    epostText: 'Ja, jag vill få Vinnarklubbens nyhetsbrev med tävlingar och erbjudanden via e-post.',
  },
];

window.VK_FIND = function (slug) {
  var list = window.VK_KAMPANJER;
  return list.find(function (k) { return k.slug === slug; }) || list[0];
};
