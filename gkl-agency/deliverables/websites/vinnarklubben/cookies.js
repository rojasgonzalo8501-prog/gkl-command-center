// Vinnarklubben — cookie-samtycke (GDPR).
// Nödvändiga cookies är alltid på. Marknadsförings-/analyscookies (Metas pixel) sätts
// ENDAST efter aktivt samtycke. Pixeln (pixel.js) lyssnar på 'vk:consent'.
(function () {
  'use strict';
  var KEY = 'vk_cookie_consent';
  var T = {
    text: 'Vi använder cookies för att sidan ska fungera och — med ditt samtycke — för att mäta trafik och visa relevanta annonser. Läs mer i vår ',
    policy: 'integritetspolicy', policyHref: 'integritetspolicy.html',
    accept: 'Acceptera alla', necessary: 'Endast nödvändiga', settings: 'Cookie-inställningar',
  };

  function save(marketing) {
    try { localStorage.setItem(KEY, JSON.stringify({ marketing: marketing, ts: Date.now(), v: 1 })); } catch (e) {}
    apply(marketing);
  }
  function stored() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }
  function apply(marketing) {
    window.vkConsent = { marketing: !!marketing };
    window.dispatchEvent(new CustomEvent('vk:consent', { detail: { marketing: !!marketing } }));
  }

  function styles() {
    if (document.getElementById('vk-cookie-css')) return;
    var css = document.createElement('style');
    css.id = 'vk-cookie-css';
    css.textContent =
      '#vk-cookie{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:760px;margin:0 auto;' +
      'background:#fff;color:#15213c;border:1px solid #e7ecf5;border-radius:14px;box-shadow:0 10px 40px rgba(16,28,52,.18);' +
      'padding:18px 20px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;line-height:1.6;' +
      'display:flex;gap:16px;align-items:center;flex-wrap:wrap}' +
      '#vk-cookie p{margin:0;flex:1;min-width:220px}' +
      '#vk-cookie a{color:#17264a;font-weight:600}' +
      '#vk-cookie .vk-ck-btns{display:flex;gap:8px;flex-wrap:wrap}' +
      '#vk-cookie button{font-family:inherit;font-size:13px;font-weight:700;border-radius:40px;padding:10px 18px;cursor:pointer;border:2px solid #17264a}' +
      '#vk-cookie .vk-ck-acc{background:#17264a;color:#fff}' +
      '#vk-cookie .vk-ck-nec{background:#fff;color:#17264a}' +
      '#vk-cookie button:hover{opacity:.9}' +
      '.vk-ck-reopen{position:fixed;left:16px;bottom:16px;z-index:9998;background:#fff;border:1px solid #e7ecf5;border-radius:40px;' +
      'padding:8px 14px;font-size:12px;font-weight:600;color:#5c6b86;cursor:pointer;box-shadow:0 4px 14px rgba(16,28,52,.12);font-family:inherit}' +
      '@media(max-width:560px){#vk-cookie{flex-direction:column;align-items:stretch}#vk-cookie .vk-ck-btns{justify-content:stretch}#vk-cookie button{flex:1}}';
    document.head.appendChild(css);
  }

  function banner() {
    styles();
    var el = document.createElement('div');
    el.id = 'vk-cookie';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Cookies');
    el.innerHTML =
      '<p>' + T.text + '<a href="' + T.policyHref + '">' + T.policy + '</a>.</p>' +
      '<div class="vk-ck-btns">' +
      '<button class="vk-ck-nec" type="button">' + T.necessary + '</button>' +
      '<button class="vk-ck-acc" type="button">' + T.accept + '</button>' +
      '</div>';
    document.body.appendChild(el);
    el.querySelector('.vk-ck-acc').addEventListener('click', function () { save(true); el.remove(); reopenBtn(); });
    el.querySelector('.vk-ck-nec').addEventListener('click', function () { save(false); el.remove(); reopenBtn(); });
  }

  function reopenBtn() {
    if (document.querySelector('.vk-ck-reopen')) return;
    var b = document.createElement('button');
    b.className = 'vk-ck-reopen';
    b.type = 'button';
    b.textContent = '🍪 ' + T.settings;
    b.addEventListener('click', function () { b.remove(); banner(); });
    document.body.appendChild(b);
  }

  function init() {
    var s = stored();
    if (s && typeof s.marketing === 'boolean') { apply(s.marketing); reopenBtn(); }
    else { apply(false); banner(); }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
