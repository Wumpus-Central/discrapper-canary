"use strict";
n.d(t, { lu: () => r, zf: () => s });
var i = n(978862);
function r() {
    return Date.now() / 1e3;
}
let s = (function () {
    let { performance: e } = i.O;
    if (!e || !e.now) return r;
    let t = Date.now() - e.now(),
        n = void 0 == e.timeOrigin ? t : e.timeOrigin;
    return () => (n + e.now()) / 1e3;
})();
(() => {
    let { performance: e } = i.O;
    if (!e || !e.now) return;
    let t = e.now(),
        n = Date.now(),
        r = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
        s = e.timing && e.timing.navigationStart,
        a = "number" == typeof s ? Math.abs(s + t - n) : 36e5;
    if ((r < 36e5 || a < 36e5) && r <= a) return e.timeOrigin;
})();
