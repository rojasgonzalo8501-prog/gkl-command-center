// Vinnarklubben — delad JS: mobilmeny, FAQ, hubb-rutnät och den config-drivna
// tävlingsfunneln. Samma fil på alla sidor; varje del no-oppar om dess element saknas.

/* ---------- Lagring: Supabase (live) eller localStorage (prototyp) ---------- */
// Med Supabase konfigurerat (supabase-config.js) POST:as leadet till vk_leads. En lokal
// kopia sparas alltid som offline-skydd. RLS låter anon-nyckeln bara skapa rader med
// startstatus 'ny' — aldrig läsa/ändra/sätta köpare.
function vkSaveLead(record) {
  const cfg = window.VK_SUPABASE;
  const kalla = new URLSearchParams(location.search).get('utm_source') || 'direkt';
  const rec = Object.assign({
    id: 'VK-' + Date.now().toString(36).toUpperCase(),
    tid: new Date().toISOString(),
    kalla: kalla,
    status: 'ny',
  }, record);

  const list = JSON.parse(localStorage.getItem('vk_leads') || '[]');
  list.unshift(rec);
  localStorage.setItem('vk_leads', JSON.stringify(list));

  if (cfg && cfg.url && cfg.anonKey) {
    fetch(`${cfg.url}/rest/v1/${cfg.table || 'vk_leads'}`, {
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

/* ---------- Mobilmeny ---------- */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) burger.addEventListener('click', () => navLinks.classList.toggle('open'));

/* ---------- FAQ-accordion ---------- */
document.querySelectorAll('.faq__q').forEach((btn) => {
  btn.addEventListener('click', () => btn.closest('.faq__item').classList.toggle('open'));
});

/* ---------- Hubb: rendera tävlingskorten från kampanjkatalogen ---------- */
const contestGrid = document.getElementById('contestGrid');
if (contestGrid && window.VK_KAMPANJER) {
  contestGrid.innerHTML = window.VK_KAMPANJER.map((k) => `
    <a class="contest-card" href="tavling.html?k=${k.slug}">
      <div class="contest-card__banner" style="background:${k.farg}">
        <span class="contest-card__vertical">${k.vertikal}</span>
        <span class="contest-card__emoji">${k.emoji}</span>
        <span class="contest-card__prize">🎁 ${k.vinst}</span>
      </div>
      <div class="contest-card__body">
        <h3>${k.klubb}</h3>
        <p>${k.intro}</p>
        <span class="contest-card__cta">Delta gratis →</span>
      </div>
    </a>`).join('');
}

/* ---------- Funnel: den config-drivna tävlingsmotorn (tavling.html) ---------- */
const leadForm = document.getElementById('leadForm');
if (leadForm && window.VK_FIND) {
  const k = window.VK_FIND(new URLSearchParams(location.search).get('k'));

  // Hero
  document.title = `Vinnarklubben — ${k.klubb}: ${k.vinst}`;
  document.getElementById('campHero').style.background = k.farg;
  document.getElementById('campKlubb').innerHTML = `${k.emoji} ${k.klubb}`;
  document.getElementById('campPrize').textContent = `🎁 Månadens vinst: ${k.vinst}`;
  document.getElementById('campRubrik').innerHTML = k.rubrik;
  document.getElementById('campSub').textContent = k.sub;

  // Samtyckestexter (per vertikal)
  document.getElementById('epostText').textContent = k.epostText;
  document.getElementById('partnerText').innerHTML =
    `Ja, mina kontaktuppgifter får överlåtas till <strong>${k.partner.namn}</strong>, som får kontakta mig via telefon och SMS med ${k.partner.text}. Jag kan återkalla samtycket när som helst.`;

  // Tävlingsvillkor-sammanfattning
  document.getElementById('legalSummary').innerHTML =
    `Arrangör: ${window.VK_ARRANGOR}. Gratis att delta. En (1) vinnare per kalendermånad utses ` +
    `bland dem som besvarat kunskapsfrågan och lämnat giltiga kontaktuppgifter. Vinst: ${k.vinst}. ` +
    `Deltagare måste vara 18 år och bosatta i Sverige.`;

  // Bygg frågesteg
  const questionsWrap = document.getElementById('quizQuestions');
  questionsWrap.innerHTML = k.quiz.map((q, i) => `
    <div class="quiz-step${i === 0 ? ' active' : ''}" data-step="${i + 1}">
      <h2>${q.fraga}</h2>
      <p class="quiz-hint">${q.hint}</p>
      <div class="quiz-options">
        ${q.alternativ.map((a) => {
          const attrs = q.field
            ? ` data-field="${q.field}" data-value="${(a.value || a.text).replace(/"/g, '&quot;')}"`
            : '';
          return `<button type="button" class="quiz-option" data-next${attrs}>${a.text}</button>`;
        }).join('')}
      </div>
    </div>`).join('');

  // Stegnummer: frågor 1..N, formulär N+1, tack N+2
  const N = k.quiz.length;
  const formStep = document.getElementById('formStep');
  const thanksStep = document.getElementById('thanksStep');
  formStep.dataset.step = N + 1;
  thanksStep.dataset.step = N + 2;
  const LAST_INPUT = N + 1; // formuläret är sista steget som fyller progressbaren

  const steps = document.querySelectorAll('.quiz-step');
  const progressBar = document.getElementById('progressBar');
  function goToStep(n) {
    steps.forEach((s) => s.classList.toggle('active', Number(s.dataset.step) === n));
    if (progressBar) progressBar.style.width = `${Math.min((n / LAST_INPUT) * 100, 100)}%`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  goToStep(1);

  // Profilsvar fångas (data-field) och sparas i leadets svar-objekt → gör leadet säljbart.
  // Kunskapsfrågor saknar field och registreras inte, bara profilfrågorna.
  const svar = {};
  questionsWrap.querySelectorAll('.quiz-option[data-next]').forEach((opt) => {
    opt.addEventListener('click', () => {
      opt.closest('.quiz-options').querySelectorAll('.quiz-option').forEach((o) => o.classList.remove('selected'));
      opt.classList.add('selected');
      if (opt.dataset.field) svar[opt.dataset.field] = opt.dataset.value || opt.textContent.trim();
      const current = Number(opt.closest('.quiz-step').dataset.step);
      setTimeout(() => goToStep(current + 1), 220);
    });
  });

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!document.getElementById('consentVillkor').checked) {
      document.getElementById('consentVillkor').focus();
      return;
    }
    if (!leadForm.checkValidity()) { leadForm.reportValidity(); return; }

    vkSaveLead({
      kampanj: k.slug,
      vertikal: k.vertikal,
      namn: document.getElementById('name').value.trim(),
      epost: document.getElementById('email').value.trim(),
      telefon: document.getElementById('phone').value.trim(),
      postnr: document.getElementById('postnr').value.trim(),
      svar: svar,
      samtyckeEpost: document.getElementById('consentEpost').checked,
      samtyckePartner: document.getElementById('consentPartner').checked,
    });

    // Meta-pixel: Lead. No-op tills pixel-ID är ifyllt och besökaren samtyckt till cookies.
    if (window.vkTrack) window.vkTrack('Lead', { content_category: k.vertikal });

    goToStep(N + 2);
  });
}
