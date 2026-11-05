/* Harmbringer: deliberately hand-drawn vector sigils. No external image service. */
(function () {
  'use strict';
  const actions = {
    home: '<path d="M9 31 32 11 55 31 M14 29V51h36V29 M23 51V36q9-13 18 0v15 M27 18V8h10v10" /><path class="soul" d="M29 44q3-9 6 0v7h-6z"/>',
    recruit: '<path d="M18 19q3-11 14-11t14 11l4 13-6 9v11H20V41l-6-9z"/><path d="M20 26q5-5 10 3l-5 5-7-3m26-5q-5-5-10 3l5 5 7-3M29 39h6l-3-5zM24 45v7m8-7v7m8-7v7"/><path class="soul" d="m11 16 5 8m37-8-5 8"/>',
    build: '<path d="m14 50 25-29m-4-6 7-7 14 14-7 7zM21 43l-8 8-3-3 8-8M21 14l29 37M10 10l8 1 7 8-7 7-8-7z" /><path class="soul" d="M29 19 40 8" />',
    rest: '<path d="M43 10A21 21 0 1 0 52 42 19 19 0 0 1 43 10z"/><path d="M18 52V40q0-11 10-11t10 11v12m-25 0h32M28 34v12m-5-7h10m17-26 2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path class="soul" d="M12 25l3 3m33 9 3 3"/>',
    inventory: '<path d="M9 27 14 16h36l5 11v27H9z M9 27h46 M15 27v27m34-27v27M22 16v38m20-38v38 M29 27h6v13h-6z"/><path class="soul" d="M30 31h4v6h-4z M11 51h42"/>',
    menu: '<path d="M17 13h30l7 8v32H10V21z M17 13v8h30v-8 M18 31h28 M18 40h28 M18 49h20 M25 8v5m14-5v5" /><path class="soul" d="M24 26h16"/>'
  };
  const buildings = {
    phylactery: '<path d="M25 15q7-9 14 0l-3 7 8 15-5 15H25l-5-15 8-15zM28 22h8m-15 15h22M27 51h10"/><path class="soul" d="M32 27 24 37l8 12 8-12z"/>',
    boneWorkshop: '<path d="M10 47h44m-40-9h36v9H14zM21 38l4-16m-4 0-8-6m12 6 7-8m9 24 5-15m0 0-4-7m4 7 7-4"/><path class="soul" d="M15 28h39"/>',
    corpsePit: '<path d="M5 45q27 16 54 0M11 39l6 12m35-12-6 12M22 40l-4-18q-1-5 3-5l3 12-1-19q4-4 6 0l1 16 2-20q5-2 6 3l-1 18 4-10q5-2 5 3l-6 20"/><path class="soul" d="M8 52q24 9 48 0"/>',
    soulKennel: '<path d="M11 52V19l7-8h28l7 8v33M18 52V21h28v31M24 11v9m16-9v9M18 35h28M25 22v30m14-30v30"/><path class="soul" d="M32 23q-14 10-2 19-2-9 6-12 5 8-4 16 15-4 11-17z"/>',
    deadHall: '<path d="M10 54V26l8-7V10h10v8l4-8 4 8V10h10v9l8 7v28zM17 29h30M22 54V41q10-13 20 0v13 M14 38h7m22 0h7"/><path class="soul" d="M29 19h6v9h-6z"/>',
    knowledgeAltar: '<path d="m8 30 24-5 24 5v22l-24-4-24 4zM32 25v23m-18-12 13-3m10 0 13 3M26 22h12M32 10v12M25 12l7-8 7 8"/><path class="soul" d="M20 42l7-2m10 0 7 2"/>',
    boneForge: '<path d="M7 33h50v9H43l-5 12H26l-5-12H7zM16 27h34M31 8q-13 10-4 17 0-7 7-13 3 8-1 13 13-8 4-17"/><path class="soul" d="m14 45 8-3m20 0 8 3"/>',
    heathAltar: '<path d="M10 53V22l11-11 10 13v29M35 53V21l10-13 9 15v30M6 53h52M20 37l-6 7m30-8 6 7"/><path class="soul" d="M31 40q-6-10 1-19 7 9 1 19"/>'
  };
  const stats = {
    hp: '<path class="solid" d="M12 21S2 14 2 8c0-5 6-7 10-2 4-5 10-3 10 2 0 6-10 13-10 13z"/>',
    initiative: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle class="dot" cx="7" cy="7" r="1.5"/><circle class="dot" cx="17" cy="7" r="1.5"/><circle class="dot" cx="12" cy="12" r="1.5"/><circle class="dot" cx="7" cy="17" r="1.5"/><circle class="dot" cx="17" cy="17" r="1.5"/>',
    move: '<path d="M6 12q-4 1-3 5 2 5 6 3 3-1 3-4L9 9q-2-3-4-2M15 9q-2 3 0 6l5 4q3 1 4-3 1-4-4-6l-1-6q-2-3-4 0z"/><circle class="dot" cx="2.5" cy="8" r="1"/><circle class="dot" cx="6" cy="4.5" r="1"/><circle class="dot" cx="20" cy="3" r="1"/>',
    damage: '<path d="m5 20 11-12 3-6 3 3-6 5L7 22zM4 17l5 5M7 13l5 5"/>',
    bow: '<path d="M5 3Q21 12 5 21M5 3v18M3 12h18l-4-3m4 3-4 3"/>',
    range: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle class="dot" cx="12" cy="12" r="2"/>',
    armor: '<path d="M12 2 21 6v6q0 6-9 10Q3 18 3 12V6zM12 5v14M6 10h12"/>',
    command: '<path d="M3 18h18l-2-11-5 5-2-9-3 9-5-5zM4 21h16"/>'
  };
  const wrap = (body, kind, view) => '<svg class="' + kind + '" viewBox="0 0 ' + view + ' ' + view + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">' + body + '</svg>';
  const action = key => wrap(actions[key] || actions.menu, 'sigilSvg', 64);
  const building = key => wrap('<path class="etch" d="M6 8h52v48H6zM10 12h44v40H10z"/>' + (buildings[key] || buildings.knowledgeAltar), 'buildingSvg', 64);
  const stat = key => wrap(stats[key] || stats.command, 'statSvg', 24);
  const paint = () => document.querySelectorAll('.sigilIcon[data-sigil]').forEach(el => {
    el.innerHTML = action(el.dataset.sigil);
  });
  window.HARMBRINGER_UI_ART = Object.freeze({ action, building, stat, paint });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', paint, { once: true });
  else paint();
})();
