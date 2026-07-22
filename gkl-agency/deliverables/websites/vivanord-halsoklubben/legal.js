/* Hälsoklubben — juridisk avsändare (arrangör + personuppgiftsansvarig)
 *
 * ⚠️ DETTA ÄR ENDA STÄLLET du sätter den juridiska avsändaren före skarp lansering.
 * Ändra raden nedan så uppdateras ALLA sidor (tävlingsvillkor, samtycke, footer, SV + ES).
 *
 * Så här sätter du den när firman/bolaget finns:
 *   entity: 'Vivanord'                         → bara varumärket (påstår INGET bolag) — nuläge
 *   entity: 'Ditt Namn',           orgnr: ''   → du som privatperson (enskild firma ej klar)
 *   entity: 'Vivanord',            orgnr: 'XXXXXX-XXXX'   → enskild firma (org.nr = ditt personnr-baserade)
 *   entity: 'Vivanord AB',         orgnr: 'XXXXXX-XXXX'   → först NÄR bolaget faktiskt är registrerat
 *
 * Så länge orgnr är tomt påstår sajten inget bolag som inte finns. Fyll i orgnr FÖRST när
 * det är sant — annars är det ett felaktigt påstående (se clients/vivanord/STATUS.md, bolagsfrågan).
 */
window.NV_LEGAL = { entity: 'Vivanord', orgnr: '' };

(function () {
  'use strict';
  function render() {
    var L = window.NV_LEGAL || {};
    var name = L.entity || 'Vivanord';
    var text = L.orgnr ? name + ' (org.nr ' + L.orgnr + ')' : name;
    var nodes = document.querySelectorAll('[data-legal-entity]');
    for (var i = 0; i < nodes.length; i++) nodes[i].textContent = text;
  }
  if (document.readyState !== 'loading') render();
  else document.addEventListener('DOMContentLoaded', render);
})();
