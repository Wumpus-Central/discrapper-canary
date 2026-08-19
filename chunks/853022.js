"use strict";
n.d(t, { b9: () => r, bH: () => i, jA: () => s });
let l = "discord7937464",
    i = "www.xbox.com";
function s(e) {
    let t = encodeURIComponent(e);
    return `https://${i}/games/store/title/${t}?ocid=${l}`;
}
function r(e) {
    let t = encodeURIComponent(e);
    return `msxbox://game/?productid=${t}&ocid=${l}`;
}
