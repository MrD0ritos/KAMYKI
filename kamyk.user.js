// ==UserScript==
// @name         Kamyki
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Slatya
// @edit         Mateoo, Pan Doritos
// @match        *.margonem.pl/
// @icon         https://micc.garmory-cdn.cloud/obrazki/itemy/neu/kamien3.gif
// @grant        none
// @updateURL  https://raw.githubusercontent.com/MrD0ritos/KAMYKI/main/kamyk.user.js
// @downloadURL https://raw.githubusercontent.com/MrD0ritos/KAMYKI/main/kamyk.user.js
// ==/UserScript==

// tpStoneOverlay - pokazywanie obrazków na teleportach do wybranych map

!function() {
    const config = {
      //Tytani
        
//orla
"189":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/dziewicza_orlica.gif",
//kic
"1746":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/zabojczy_krolik.gif",
//rene
"6949":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/renegat_baulus.gif",
//arcy
"7060":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/archdemon.gif",
//zoons
"6478":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/titangoblin.gif",
//łowka
"6477":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/lowcz-wspo-driady.gif",
//przyzy
"6476":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/przyz_demon_sekta.gif",
//magua
"2024":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/maddok-tytan.gif",
//teza
"5709":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/tezcatlipoca.gif",
//barba
"3312":"https://micc.garmory-cdn.cloud/obrazki/npc/tyt/hebrehoth_smokoludzie.gif",
//th
"2355": "https://micc.garmory-cdn.cloud/obrazki/npc/tyt/ice_king.gif",


//kolosy
//lambo
"3361":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/mamlambo_final2.gif",
//regulus
"3883":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/bazyliszek.gif",
//regulus2
"202":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/bazyliszek.gif",
//umibozu
"7353":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wodnik.gif",
//umibozu2
"1739":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wodnik.gif",
//amion
"4046":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/soploreki.gif",
//amion2
"1387":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/soploreki.gif",
//hydra
"4066":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif",
//hydra2
"3535":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/hydrokora.gif",
//waszka
"4161":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wazka.gif",
//waszka2
"349":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-wazka.gif",
//lulukav
"4196":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolkrucz.gif",
//lulukav2
"6052":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolkrucz.gif",
//arachin
"4206":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-pajak.gif",
//arachin2
"1131":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-pajak.gif",
//rauzen
"4266":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-dendro.gif",
//rauzen2
"3596":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-dendro.gif",
//drako
"4268":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-drakolisz.gif",
//drako2
"3037":"https://micc.garmory-cdn.cloud/obrazki/npc/kol/kolos-drakolisz.gif",

//E2 300-200
// Artek
"2353":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu03.gif",
// Zorin
"2354":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu01.gif",
// Furion
"2356":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wl-mrozu02.gif",
// Monia
"6064":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/nymphemonia.gif",
// Terro urwisko
"3327":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/terrorzaur_pus.gif",
// Terro jaskinia
"3335":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/terrorzaur_pus.gif",
// Świątynia przedsionek
"3339":"https://i.imgur.com/hudMHxo.gif",
// chaegd
"3341":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smokoszef.gif",
// Vera
"3340":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/bar_smoczyca.gif",
// Set
"3039":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/szkiel_set.gif",
// Chopesz
"3035":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/chopesh2.gif",
//quezal
"5684":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/quetzalcoatl.gif",
//yaotl
"5694":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mahoplowca.gif",
// Sybilia
"4056":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri2_witch_e2.gif",
// Niecka (Ciut)
"1901":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/maho-cuaitl.gif",
//Tolypeutes
"5657":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/bolita.gif",
//Dendroculus
"3597":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dendroculus.gif",
//Silvanasus
"3627":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/silvanasus.gif",
//Pancerny
"1462":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok_roz.gif",
//pajak
"1142":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/regina-e2.gif",
//Mocny
"1481":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/maddok5.gif",
//Marloth
"2766":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/marlloth.gif",
//Marloth2
"2768":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/marlloth.gif",
//ZUF
"5943": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-zufulus.gif",
//Sataniel
"5942":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sataniel.gif",
//Tajemnicza Siedziba
"5941":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-gothardus.gif",
//Bergamona
"5945": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-bergermona.gif",


//E2 199-100
//Sadolia
"5940":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/sekta-sadolia.gif",
//Myświór
"972":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolszczur.gif",
//Breh
"2063":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/draki-breheret-1b.gif",
//Torka
"6053":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/thuz-patr1.gif",
//furb
"1912": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/forbol03.gif",
//Cera
"6057": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/drzewoe2.gif",
//Chryz
"6054": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/chryzoprenia.gif",
//Królowa
"7345": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/krolowa-sniegu.gif",
//SK
"5862":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/prakrolowa.gif",
//Ogr
"2526": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/ogr_drapak.gif",
//dwk
"5872":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/duch_wladcy_kl.gif",
//adariel
"1322":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tri_adariel.gif",
//goons
"359":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mechgoblin4.gif",
//worundiel
"1276":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/worundriel02.gif",
//stworek
"7375":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/stworzyciel.gif",
//eol
"7352":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/piaskowy_potwor-6a.gif",
//morski potwór
"7357":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/osmiornica-1b.gif",
//byk
"7368":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/ingotia_minotaur-7a.gif",
//amuno
"1712":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif",
//amuno2
"3265":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/amuno.gif",
//gruber
"6955":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/grubber-ochlaj.gif",
//burek
"5856":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/orkczd.gif",
//piracie2
"1525":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat01.gif",
//henry
"1526":"https://micc.garmory-cdn.cloud/obrazki/npc/e1/pirat5b.gif",
//helga
"1527":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat-2b.gif",
//jack
"3409":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/pirat01.gif",
//Ifryt
"7057":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/magradit_ifryt.gif",
//Tesciowa
"351":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-tesciowa-rumcajsa.gif",

//Krab
"1741":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krab_big3.gif",
//Krab2
"7369":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/krab_big3.gif",
//Wójt
"7339":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goral-e2-wojt-fistula.gif",
//ozirus
"7069":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/mumia-ozirus.gif",
//czacha
"7066":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/alghul-czaszka-1a.gif",
//miłek mag
"6946":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_magii.gif",
//Miłek łowców
 "6945": "https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_lowcow.gif",
//Miłek rycerzy
"6944":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/blotniaki_milosnik_rycerzy.gif",
//jertek
"6938":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/moloch-jertek.gif",
//Kambion
"229":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kambion.gif",

//E2 99-23
//Centaur
"3765":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/cent-zyfryd.gif",
//Figlid
"6781":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnom_figlid.gif",
//Gopa
"1150":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/goplana.gif",
//Leszy
"1324":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/lesne_widmo.gif",
//ochyda
"3466":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/ugrape2.gif",
//nadzorczyni
"6772":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/nadzorczyni_krasnoludow.gif",
//czołker
"6636":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dlawiciel5.gif",
//czołker2
"6634":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dlawiciel5.gif",
//Stopa
"1204":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/wlochacze_wielka_stopa.gif",
//zbrojek
"6615":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/magaz_zbrojmistrz.gif",
//grabarz
"6623":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/nieu_mnich_grabarz.gif",
//Lisz
"6625":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/lisz_demilisze.gif",
//tolloki
"6632":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_jask_atamatu.gif",
//Jotun2
"6537":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kam_olbrzym-b.gif",
//Jotun
"6535":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kam_olbrzym-b.gif",
//Kozug
"3436":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll12.gif",
//gnoll vari
"333":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gnoll11.gif",
//owadzia
"5395":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/zadlak-e2-owadzia-matka.gif",
//kobold
"2729":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/kobold07.gif",
//agar
"177":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/glut_agar.gif",
//razuglag
"125":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/razuglag.gif",
//tollok
"5293":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/tollok_shimger.gif",
//szczęt
"2308":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-szczet.gif",
//dzik
"4156":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/dzik.gif",
//władek gobos
"727":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/gobmag2.gif",
//zorg
"2532":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/zbir-e2-zorg.gif",
//shea
"5738":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/demonszef.gif",
//shea2
"5740":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/demonszef.gif",
//kotołak
"632":"https://micc.garmory-cdn.cloud/obrazki/npc/e1/kotolak_lowca.gif",
//muszita
"1060":"https://micc.garmory-cdn.cloud/obrazki/npc/e2/st-puma.gif",

//Dodatkowa konfiguracja użytkownia

    }

    const NI = typeof window.Engine != "undefined";

    function loadItemImage(url) {
        const $newImg = document.createElement("img");
        $newImg.src = url;
        $newImg.classList.add("priw8-item-overlay");
        return new Promise(resolve => {
            $newImg.addEventListener("load", () => {
                let w = $newImg.width, h = $newImg.height;
                if (h > 32) {
                    w = w * (32 / h);
                    h = 32;
                }
                if (w > 32) {
                    h = h * (32 / w);
                    w = 32;
                }
                const offset = (32 - w) / 2;
                $newImg.width = w;
                $newImg.height = h;
                $newImg.style.left = `${offset}px`;
                $newImg.style.display = "block";

                resolve($newImg);
            });
        });
    }

    async function appendItemOverlay(id, url) {
        if (NI) {
            const $it = document.querySelector(`.item-id-${id}`);
            if ($it) {
                $it.classList.add("priw8-item-small-icon");
                const $newImg = await loadItemImage(url);
                $newImg.style.position = "absolute";
                $newImg.zIndex = 1;
                const $canv = $it.querySelector("canvas");
                $canv.parentElement.appendChild($newImg);
                console.log($it);
            }
        } else {
            g.loadQueue.push({
                fun: async () => {
                    const $it = document.querySelector(`#item${id}`);
                    if ($it) {
                        $it.classList.add("priw8-item-small-icon");
                        const $newImg = await loadItemImage(url);

                        const $img = $it.querySelector("img");
                        if ($img) {
                            $img.parentElement.appendChild($newImg);
                        }
                    }
                }
            });
        }
    }

    function onItem(items) {
        for (const id in items) {
            const it = items[id];
            const tp = getItemTp(it);
            const tpMap = getTpMap(tp);
            const entry = config[tp] ?? config[tpMap];
            if (entry) {
                appendItemOverlay(id, entry);
            }
        }
    }

    function init() {
        const org = NI ? window.Engine.communication.parseJSON : window.parseInput;
        const override = function(data) {
            const res = org.apply(this, arguments);
            if (data.item) {
                onItem(data.item);
            }
            return res;
        }
        if (NI)
            window.Engine.communication.parseJSON = override;
        else
            window.parseInput = override;

        const css = `
            /* SI */
            .priw8-item-small-icon img:not(.priw8-item-overlay) {
                width: 20px;
                height: 20px;
                top: 12px;
                z-index: 1;
            }

            /* NI */
            .priw8-item-small-icon canvas.canvas-icon {
                width: 20px;
                height: 20px;
                top: 12px;
                z-index: 1;
            }
            .priw8-item-small-icon .amount, .priw8-item-small-icon .cooldown {
                z-index: 2;
            }
        `;

        const $style = document.createElement("style");
        $style.innerHTML = css;
        document.head.appendChild($style);
    }

    function parseStats(stats) {
        if (!stats)
            return {};

        const spl = stats.split(";");
        const res = {};
        for (const entry of spl) {
            const pair = entry.split("=");
            res[pair[0]] = pair[1] ?? "true";
        }
        return res;
    }

    function getItemStats(it) {
        return it._cachedStats ?? parseStats(it.stat);
    }

    function getItemTp(it) {
        const stats = getItemStats(it);
        if (stats.teleport || stats.custom_teleport && stats.custom_teleport != "true") {
            return stats.teleport ?? stats.custom_teleport;
        }
        return "";
    }

    function getTpMap(tp) {
        return tp.split(",")[0];
    }

    function getLocationItems(loc) {
        return NI ? Engine.items.fetchLocationItems(loc).map(it => it) : Object.values(g.item).filter(it => it.loc == loc);
    }

    window.listStones = function() {
        getLocationItems("g").forEach(it => {
            const stats = getItemStats(it);

            const tp = getItemTp(it);

            if (tp != "") {
                const tpMap = getTpMap(tp);
                window.log(`${it.name} (${stats.opis}): ${tpMap} (${tp})`);
            }
        });
    }

    init();
}();
