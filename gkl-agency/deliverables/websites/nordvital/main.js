// NordVital — delad JS: mobilmeny, FAQ-accordion, tävlingsquiz

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

  // Nästa debiteringsdatum = idag + 30 dagar (visas före köp — krav på tydlighet)
  const next = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' });
  document.getElementById('sum-next').textContent = next;
  document.getElementById('c-next').textContent = next;

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO före lansering: ersätt med riktig checkout (Klarna/Stripe) + prenumerationssystem,
    // och trigga Meta-pixelns köp-event: fbq('track', 'Purchase', {value: 99, currency: 'SEK'});
    document.getElementById('orderView').style.display = 'none';
    document.getElementById('confirmView').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
