// NordVital — delad JS: mobilmeny, FAQ-accordion, tävlingsquiz, kassa

// Prototyplagring för admin-portalen (/admin). I produktion ersätts detta av en
// riktig backend/databas — localStorage delas bara inom samma webbläsare.
function nvSave(key, record) {
  const list = JSON.parse(localStorage.getItem(key) || '[]');
  list.unshift(Object.assign({
    id: 'NV-' + Date.now().toString(36).toUpperCase(),
    tid: new Date().toISOString(),
    kalla: new URLSearchParams(location.search).get('utm_source') || 'direkt',
    status: 'ny',
  }, record));
  localStorage.setItem(key, JSON.stringify(list));
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

// Tävlingsquiz (kampanj.html)
const steps = document.querySelectorAll('.quiz-step');
const progressBar = document.getElementById('progressBar');
const TOTAL_STEPS = 6;

function goToStep(n) {
  steps.forEach((s) => s.classList.toggle('active', Number(s.dataset.step) === n));
  if (progressBar) progressBar.style.width = `${Math.min((n / TOTAL_STEPS) * 100, 100)}%`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.quiz-option[data-next]').forEach((opt) => {
  opt.addEventListener('click', () => {
    opt.classList.add('selected');
    const current = Number(opt.closest('.quiz-step').dataset.step);
    setTimeout(() => goToStep(current + 1), 250);
  });
});

const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO före lansering: skicka leadet till backend/e-postverktyg (t.ex. Klaviyo/Mailchimp API)
    // och trigga Meta-pixelns Lead-event: fbq('track', 'Lead');
    nvSave('nv_leads', {
      namn: document.getElementById('name').value,
      epost: document.getElementById('email').value,
      telefon: document.getElementById('phone').value,
      samtyckeEpost: leadForm.querySelector('input[name="consent_email"]').checked,
      samtyckeTelefon: leadForm.querySelector('input[name="consent_phone"]').checked,
    });
    goToStep(6);
  });
}

// Kassa (bestall.html)
const orderForm = document.getElementById('orderForm');
if (orderForm) {
  const picks = document.querySelectorAll('.pick');
  const sumProduct = document.getElementById('sum-product');
  const confirmProduct = document.getElementById('c-product');

  function selectProduct(pick) {
    picks.forEach((p) => p.classList.remove('selected'));
    pick.classList.add('selected');
    sumProduct.textContent = `${pick.dataset.name} — första lådan (30 dagar)`;
    confirmProduct.textContent = pick.dataset.name;
  }

  picks.forEach((pick) => {
    pick.type = 'button';
    pick.addEventListener('click', () => selectProduct(pick));
  });

  // Förval via ?produkt=immun|skonhet|leder|energi (länkas från produktsidan)
  const param = new URLSearchParams(location.search).get('produkt');
  const preselected = document.querySelector(`.pick[data-product="${param}"]`) || picks[0];
  selectProduct(preselected);

  // Nästa leveransdatum = idag + 30 dagar (visas före köp — krav på tydlighet)
  const next = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('sum-next').textContent = next;
  document.getElementById('c-next').textContent = next;

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO före lansering: skicka ordern till leverantörspartnern (API eller e-post) som
    // packar, skickar och fakturerar (dropship). Ingen betalning sker på sajten.
    // Trigga Meta-pixelns köp-event: fbq('track', 'Purchase', {value: 99, currency: 'SEK'});
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
