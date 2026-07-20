/* Meta-pixel — Vinnarklubben
 *
 * SÅ HÄR AKTIVERAR DU (2 minuter):
 *   1. Events Manager → skapa pixel "Vinnarklubben" → kopiera pixel-ID:t (15–16 siffror).
 *   2. Sök-och-ersätt '__PIXEL_ID__' med ID:t i denna fil.
 *   3. Domänverifiering: lägg meta-taggen från Business Manager i <head> på index.html.
 *
 * Ligger ID:t kvar som '__PIXEL_ID__' gör filen ingenting — sajten kan deployas utan pixel.
 *
 * GDPR: pixeln laddas ALDRIG före samtycke. cookies.js sätter window.vkConsent och
 * skickar 'vk:consent'. Tar man bort den gaten laddar vi en spårningspixel utan rättslig grund.
 */
(function () {
  'use strict';
  var PIXEL_ID = '__PIXEL_ID__';
  var loaded = false;
  var queue = [];

  function ready() {
    return PIXEL_ID && PIXEL_ID.indexOf('__') !== 0 && /^\d{10,20}$/.test(PIXEL_ID);
  }

  function load() {
    if (loaded || !ready()) return;
    loaded = true;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
    (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    queue.forEach(function (a) { window.fbq.apply(null, ['track'].concat(a)); });
    queue.length = 0;
  }

  // Anropas från main.js: vkTrack('Lead', { content_category: 'Solceller' })
  window.vkTrack = function (name, params) {
    var args = params ? [name, params] : [name];
    if (loaded && window.fbq) { window.fbq.apply(null, ['track'].concat(args)); return; }
    queue.push(args);
    if (window.vkConsent && window.vkConsent.marketing) load();
  };

  if (window.vkConsent && window.vkConsent.marketing) load();
  window.addEventListener('vk:consent', function (e) { if (e.detail && e.detail.marketing) load(); });
})();
