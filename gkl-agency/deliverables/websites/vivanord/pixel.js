/* Meta-pixel — Vivanord
 *
 * SÅ HÄR AKTIVERAR DU (2 minuter):
 *   1. Events Manager → skapa pixel "Vivanord" → kopiera pixel-ID:t (15–16 siffror)
 *   2. Sök-och-ersätt '__PIXEL_ID__' med ID:t i denna fil — i BÅDA mapparna:
 *        deliverables/websites/vivanord/pixel.js
 *        deliverables/websites/vivanord-halsoklubben/pixel.js
 *      (Hälsoklubben är ett eget Vercel-projekt på egen subdomän — se
 *       clients/vivanord/halsoklubben-subdoman.md. Använd SAMMA pixel-ID på båda,
 *       annars kan du inte retargeta tävlingsbesökare med säljannonser.)
 *   3. Domänverifiering: lägg meta-taggen från Business Manager i <head> på
 *      index.html i båda mapparna. Meta ger dig den under Brand Safety → Domains.
 *
 * Ligger ID:t kvar som '__PIXEL_ID__' gör filen ingenting alls — sajten kan alltså
 * deployas innan du har pixeln, utan att något går sönder.
 *
 * GDPR: pixeln laddas ALDRIG före samtycke. cookies.js sätter window.vivanordConsent
 * och skickar 'vivanord:consent'. Tar man bort den gaten laddar vi en spårningspixel
 * utan rättslig grund — det är precis vad cookiebannern finns för att förhindra.
 */
(function () {
  'use strict';

  var PIXEL_ID = '__PIXEL_ID__';
  var loaded = false;

  function ready() {
    return PIXEL_ID && PIXEL_ID.indexOf('__') !== 0 && /^\d{10,20}$/.test(PIXEL_ID);
  }

  // Metas standard-snippet, men först efter samtycke.
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

    // Events som köades innan samtycket kom
    queue.forEach(function (a) { window.fbq.apply(null, ['track'].concat(a)); });
    queue.length = 0;
  }

  var queue = [];

  /**
   * Spåra ett event. Köas om samtycke saknas ännu, skickas om det kommer.
   * Anropas från main.js:
   *   vivanordTrack('Lead')                                        — tävlingsformuläret
   *   vivanordTrack('Purchase', { value: 399, currency: 'SEK' })   — kassan
   *
   * OBS: skicka ALLTID produktens faktiska förstapris som value (399, eller 199 för
   * Absorb+). Hårdkodas ett belopp blir ROAS-siffrorna fel och du skalar fel kampanj.
   */
  window.vivanordTrack = function (name, params) {
    var args = params ? [name, params] : [name];
    if (loaded && window.fbq) { window.fbq.apply(null, ['track'].concat(args)); return; }
    queue.push(args);
    if (window.vivanordConsent && window.vivanordConsent.marketing) load();
  };

  if (window.vivanordConsent && window.vivanordConsent.marketing) load();
  window.addEventListener('vivanord:consent', function (e) {
    if (e.detail && e.detail.marketing) load();
  });
})();
