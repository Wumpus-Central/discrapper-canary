"use strict";
n.d(t, { j: () => s });
var l = n(723702);
let i = "discord7937464";
function s(e) {
    let t = encodeURIComponent(e);
    return (0, l.isWindows)()
        ? `msxbox://game/?productid=${t}&ocid=${i}`
        : `https://www.xbox.com/games/store/title/${t}?ocid=${i}`;
}
