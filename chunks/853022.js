"use strict";
n.d(t, { b9: () => a, bH: () => r, jA: () => s });
let i = "discord7937464",
    r = "www.xbox.com";
function s(e) {
    let t = encodeURIComponent(e);
    return `https://${r}/games/store/title/${t}?ocid=${i}`;
}
function a(e) {
    let t = encodeURIComponent(e);
    return `msxbox://game/?productid=${t}&ocid=${i}`;
}
