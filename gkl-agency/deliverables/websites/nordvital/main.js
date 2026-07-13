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
