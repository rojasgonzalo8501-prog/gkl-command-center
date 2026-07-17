// Vivanord — cookie-samtycke (GDPR). Tvåspråkig (sv/es via <html lang>).
// Nödvändiga cookies är alltid på. Marknadsförings-/analyscookies (Metas pixel)
// sätts ENDAST efter aktivt samtycke.
//
// Så här använder pixeln samtycket (läggs till när pixel-ID finns):
//   if (window.vivanordConsent && window.vivanordConsent.marketing) { /* fbq(...) */ }
//   window.addEventListener('vivanord:consent', e => { if (e.detail.marketing) initPixel(); });
(function () {
  'use strict';
  var KEY = 'nv_cookie_consent';
  var lang = (document.documentElement.lang === 'es') ? 'es' : 'sv';

  var T = {
    sv: {
      text: 'Vi använder cookies för att sidan ska fungera och — med ditt samtycke — för att mäta trafik och visa relevanta annonser. Läs mer i vår ',
      policy: 'integritetspolicy', policyHref: 'integritetspolicy.html',
      accept: 'Acceptera alla', necessary: 'Endast nödvändiga', settings: 'Cookie-inställningar',
    },
    es: {
      text: 'Usamos cookies para que la página funcione y —con tu consentimiento— para medir el tráfico y mostrar anuncios relevantes. Más información en nuestra ',
      policy: 'política de privacidad', policyHref: 'privacidad.html',
      accept: 'Aceptar todas', necessary: 'Solo necesarias', settings: 'Configuración de cookies',
    },
  }[lang];

  // ES-sidorna ligger i /es/; SV-policyn ligger i roten. Justera href relativt.
  var policyHref = T.policyHref;

  function save(marketing) {
    try { localStorage.setItem(KEY, JSON.stringify({ marketing: marketing, ts: Date.now(), v: 1 })); } catch (e) {}
    apply(marketing);
  }

  function stored() {
    try { return JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { return null; }
  }

  function apply(marketing) {
    window.vivanordConsent = { marketing: !!marketing };
    window.dispatchEvent(new CustomEvent('vivanord:consent', { detail: { marketing: !!marketing } }));
  }

  function styles() {
    if (document.getElementById('nv-cookie-css')) return;
    var css = document.createElement('style');
    css.id = 'nv-cookie-css';
    css.textContent =
      '#nv-cookie{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:760px;margin:0 auto;' +
      'background:#ffffff;color:#22302c;border:1px solid #e8e1d4;border-radius:14px;box-shadow:0 10px 40px rgba(20,40,30,.18);' +
      'padding:18px 20px;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;line-height:1.6;' +
      'display:flex;gap:16px;align-items:center;flex-wrap:wrap}' +
      '#nv-cookie p{margin:0;flex:1;min-width:220px}' +
      '#nv-cookie a{color:#1d5c4d;font-weight:600}' +
      '#nv-cookie .nv-ck-btns{display:flex;gap:8px;flex-wrap:wrap}' +
      '#nv-cookie button{font-family:inherit;font-size:13px;font-weight:700;border-radius:40px;padding:10px 18px;cursor:pointer;border:2px solid #1d5c4d}' +
      '#nv-cookie .nv-ck-acc{background:#1d5c4d;color:#fff}' +
      '#nv-cookie .nv-ck-nec{background:#fff;color:#1d5c4d}' +
      '#nv-cookie button:hover{opacity:.9}' +
      '.nv-ck-reopen{position:fixed;left:16px;bottom:16px;z-index:9998;background:#fff;border:1px solid #e8e1d4;border-radius:40px;' +
      'padding:8px 14px;font-size:12px;font-weight:600;color:#5a6b65;cursor:pointer;box-shadow:0 4px 14px rgba(20,40,30,.12);font-family:inherit}' +
      '@media(max-width:560px){#nv-cookie{flex-direction:column;align-items:stretch}#nv-cookie .nv-ck-btns{justify-content:stretch}#nv-cookie button{flex:1}}' +
      '@media(prefers-color-scheme:dark){}';
    document.head.appendChild(css);
  }

  function banner() {
    styles();
    var el = document.createElement('div');
    el.id = 'nv-cookie';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Cookies');
    el.innerHTML =
      '<p>' + T.text + '<a href="' + policyHref + '">' + T.policy + '</a>.</p>' +
      '<div class="nv-ck-btns">' +
      '<button class="nv-ck-nec" type="button">' + T.necessary + '</button>' +
      '<button class="nv-ck-acc" type="button">' + T.accept + '</button>' +
      '</div>';
    document.body.appendChild(el);
    el.querySelector('.nv-ck-acc').addEventListener('click', function () { save(true); el.remove(); reopenBtn(); });
    el.querySelector('.nv-ck-nec').addEventListener('click', function () { save(false); el.remove(); reopenBtn(); });
  }

  function reopenBtn() {
    if (document.querySelector('.nv-ck-reopen')) return;
    var b = document.createElement('button');
    b.className = 'nv-ck-reopen';
    b.type = 'button';
    b.textContent = '🍪 ' + T.settings;
    b.addEventListener('click', function () { b.remove(); banner(); });
    document.body.appendChild(b);
  }

  function init() {
    var s = stored();
    if (s && typeof s.marketing === 'boolean') {
      apply(s.marketing);   // tidigare val — sätt state, visa liten återöppningsknapp
      reopenBtn();
    } else {
      apply(false);         // default: inget marknadsföringssamtycke förrän aktivt val
      banner();
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
