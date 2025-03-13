// ==UserScript==
// @name         Kamyki
// @namespace    hello
// @version      0.23
// @description  try to take over the world!
// @author       Slatya - edit by Mateoo, Pan Doritos
// @match        *.margonem.pl/
// @match        *.margonem.com/
// @icon         https://micc.garmory-cdn.cloud/obrazki/itemy/neu/kamien3.gif
// @grant        none
// ==/UserScript==

(function() {
const script = document.createElement('script');
script.src = 'https://addons2.margonem.pl/get/153/153486dev.js';
script.onload = () => console.log('Skrypt załadowany!');
script.onerror = () => console.error('Błąd ładowania skryptu!');
document.head.appendChild(script);
})();