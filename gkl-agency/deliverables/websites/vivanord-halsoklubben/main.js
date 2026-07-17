// Vivanord — delad JS: mobilmeny, FAQ-accordion, tävlingsquiz, kassa

// Lagring av leads/ordrar. Med Supabase konfigurerat (supabase-config.js) skickas
// posten till databasen — annars prototypläge med enbart localStorage.
// En lokal kopia sparas alltid som offline-skydd.
function nvSave(key, record) {
  const kalla = new URLSearchParams(location.search).get('utm_source') || 'direkt';
  // Spanska sidor märker sina leads/ordrar med "· ES" så telefonteamet ringer på rätt språk
  const sprak = document.documentElement.lang === 'es' ? ' · ES' : '';
  const rec = Object.assign({
    id: 'VN-' + Date.now().toString(36).toUpperCase(),
    tid: new Date().toISOString(),
    kalla: kalla + sprak,
    status: key === 'nv_ordrar' ? 'skickad till partner' : 'ny',
  }, record);

  const list = JSON.parse(localStorage.getItem(key) || '[]');
  list.unshift(rec);
  localStorage.setItem(key, JSON.stringify(list));

  const cfg = window.NV_SUPABASE;
  if (cfg && cfg.url && cfg.anonKey) {
    // RLS tillåter anon-nyckeln att ENBART lägga till rader — aldrig läsa/ändra
    fetch(`${cfg.url}/rest/v1/${key === 'nv_leads' ? 'leads' : 'ordrar'}`, {
      method: 'POST',
      headers: {
        apikey: cfg.anonKey,
        Authorization: `Bearer ${cfg.anonKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(rec),
    }).catch((err) => console.error('Kunde inte spara till Supabase (lokal kopia finns):', err));
  }
}

// Mobilmeny
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// FAQ-accordion
document.querySelectorAll('.faq__q').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.faq__item').classList.toggle('open');
  });
});

// Tävlingsquiz (index.html) — detta är huvudlogiken i detta projekt.
const steps = document.querySelectorAll('.quiz-step');
const progressBar = document.getElementById('progressBar');
const TOTAL_STEPS = 6;

function goToStep(n) {
  steps.forEach((s) => s.classList.toggle('active', Number(s.dataset.step) === n));
  if (progressBar) progressBar.style.width = `${Math.min((n / TOTAL_STEPS) * 100, 100)}%`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Profilsvar från quizet (ålder, hälsointresse) fångas och sparas på leadet — höjer
// leadvärdet. Kunskapsfrågorna saknar data-field och registreras inte, bara profilfrågorna.
const quizAnswers = {};
document.querySelectorAll('.quiz-option[data-next]').forEach((opt) => {
  opt.addEventListener('click', () => {
    opt.classList.add('selected');
    if (opt.dataset.field) quizAnswers[opt.dataset.field] = opt.dataset.value || opt.textContent.trim();
    const current = Number(opt.closest('.quiz-step').dataset.step);
    setTimeout(() => goToStep(current + 1), 250);
  });
});

const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO före lansering: skicka leadet till backend/e-postverktyg (Brevo — se email-flode.md)
    nvSave('nv_leads', {
      namn: document.getElementById('name').value,
      epost: document.getElementById('email').value,
      telefon: document.getElementById('phone').value,
      alder: quizAnswers.alder || '',
      intresse: quizAnswers.intresse || '',
      samtyckeEpost: leadForm.querySelector('input[name="consent_email"]').checked,
      samtyckeTelefon: leadForm.querySelector('input[name="consent_phone"]').checked,
    });
    // Meta-pixel: Lead. No-op tills pixel-ID är ifyllt i pixel.js, och köas tills
    // besökaren samtyckt till marknadsföringscookies.
    if (window.vivanordTrack) window.vivanordTrack('Lead');
    goToStep(6);
  });
}

// Kassa — DÖD KOD i denna mapp. Kassan bor på dropship-sajten (vivanord/bestall.html).
// No-oppar via if (orderForm). Kvar för att main.js hålls identisk i båda mapparna.
const orderForm = document.getElementById('orderForm');
if (orderForm) {
  const picks = document.querySelectorAll('.pick');
  const sumProduct = document.getElementById('sum-product');
  const confirmProduct = document.getElementById('c-product');

  const es = document.documentElement.lang === 'es';
  const locale = es ? 'es-ES' : 'sv-SE';
  const FRAKT = 59;

  // Priserna speglar medvital.se exakt — vi är återförsäljare och beloppen måste matcha
  // Medvitals faktura. Absorb+ avviker: 199 kr första månaden, sedan 399 kr var 4:e vecka.
  // Övriga: 399 kr + frakt första leveransen, sedan 1 197 kr + frakt var 3:e månad.
  function selectProduct(pick) {
    picks.forEach((p) => p.classList.remove('selected'));
    pick.classList.add('selected');

    const first = Number(pick.dataset.first);
    const caps = pick.dataset.caps;
    const kvartal = pick.dataset.cadence === 'kvartal';

    sumProduct.textContent = es
      ? `${pick.dataset.name} — primer envío (${caps} cápsulas)`
      : `${pick.dataset.name} — första leveransen (${caps} kapslar)`;
    confirmProduct.textContent = pick.dataset.name;

    document.getElementById('sum-first').textContent = `${first} kr`;
    document.getElementById('sum-total').textContent = `${first + FRAKT} kr`;

    const recurring = kvartal
      ? (es
        ? 'Después 1 197 kr (399 kr/mes) + 59 kr de envío cada tres meses hasta que canceles.'
        : 'Därefter 1 197 kr (399 kr/mån) + 59 kr frakt var tredje månad tills du avslutar.')
      : (es
        ? 'Después 399 kr + 59 kr de envío por entrega cada 4 semanas hasta que canceles.'
        : 'Därefter 399 kr + 59 kr frakt per leverans var 4:e vecka tills du avslutar.');
    document.getElementById('sum-recurring').textContent = recurring;

    const termsEl = document.getElementById('terms-recurring');
    if (termsEl) {
      termsEl.innerHTML = kvartal
        ? (es
          ? '<strong>1 197 kr (399 kr/mes) + 59 kr de envío cada tres meses</strong>'
          : '<strong>1 197 kr (399 kr/mån) + 59 kr frakt var tredje månad</strong>')
        : (es
          ? '<strong>399 kr + 59 kr de envío cada 4 semanas</strong>'
          : '<strong>399 kr + 59 kr frakt var 4:e vecka</strong>');
    }

    // Absorb+ levereras var 4:e vecka (28 dgr), övriga har en månads första låda.
    const days = kvartal ? 30 : 28;
    const next = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
      .toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('sum-next').textContent = next;
    document.getElementById('c-next').textContent = next;
  }

  picks.forEach((pick) => {
    pick.type = 'button';
    pick.addEventListener('click', () => selectProduct(pick));
  });

  // Förval via ?produkt=leder|immun|beauty|mage|man|woman (länkas från produktsidan)
  const param = new URLSearchParams(location.search).get('produkt');
  const preselected = document.querySelector(`.pick[data-product="${param}"]`) || picks[0];
  selectProduct(preselected);

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO före lansering: skicka ordern till Medvital (API eller e-post) som packar,
    // skickar och fakturerar (dropship). Ingen betalning sker på sajten.
    const valdProdukt = document.querySelector('.pick.selected');
    // Meta-pixel: Purchase med produktens FAKTISKA förstapris (399, eller 199 för Absorb+).
    // Hårdkoda aldrig beloppet — då blir ROAS fel och du skalar fel kampanj.
    if (window.vivanordTrack) {
      window.vivanordTrack('Purchase', {
        value: Number(valdProdukt.dataset.first),
        currency: 'SEK',
        content_name: valdProdukt.dataset.name,
      });
    }
    nvSave('nv_ordrar', {
      produkt: document.querySelector('.pick.selected').dataset.name,
      namn: document.getElementById('o-name').value,
      epost: document.getElementById('o-email').value,
      telefon: document.getElementById('o-phone').value,
      adress: `${document.getElementById('o-street').value}, ${document.getElementById('o-zip').value} ${document.getElementById('o-city').value}`,
      status: 'skickad till partner',
    });
    document.getElementById('orderView').style.display = 'none';
    document.getElementById('confirmView').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
