// ExhalePLR — Main JS

// ── NAV BURGER ──
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ── NAV SCROLL SHADOW ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav) nav.style.borderBottomColor = window.scrollY > 20 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)';
});

// ── PRODUCT FILTER (homepage) ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#productsGrid .product-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
    });
  });
});

// ── SCROLL ANIMATIONS ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── FREE KIT FORM ──
function claimFreeKit() {
  const emailInput = document.getElementById('freeKitEmail');
  if (!emailInput) return;
  const email = emailInput.value.trim();
  if (!email || !email.includes('@')) {
    emailInput.style.borderColor = '#EF4444';
    emailInput.placeholder = 'Please enter a valid email';
    return;
  }
  // Replace this with your email platform integration (Mailchimp, ConvertKit, etc.)
  emailInput.style.borderColor = '#10B981';
  emailInput.value = '';
  emailInput.placeholder = '✓ Check your inbox!';
  const btn = emailInput.nextElementSibling;
  if (btn) { btn.textContent = 'Sent! ✓'; btn.style.background = '#10B981'; }
  // TODO: POST to email platform API
  console.log('Free kit signup:', email);
}

// ── SMOOTH SCROLL FOR ANCHOR LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
