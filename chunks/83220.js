"use strict";
r.d(e, { lu: () => s, zf: () => i });
var n = r(978862);
function s() {
    return Date.now() / 1e3;
}
let i = (function () {
    let { performance: t } = n.O;
    if (!t || !t.now) return s;
    let e = Date.now() - t.now(),
        r = void 0 == t.timeOrigin ? e : t.timeOrigin;
    return () => (r + t.now()) / 1e3;
})();
(() => {
    let { performance: t } = n.O;
    if (!t || !t.now) return;
    let e = t.now(),
        r = Date.now(),
        s = t.timeOrigin ? Math.abs(t.timeOrigin + e - r) : 36e5,
        i = t.timing && t.timing.navigationStart,
        o = "number" == typeof i ? Math.abs(i + e - r) : 36e5;
    if ((s < 36e5 || o < 36e5) && s <= o) return t.timeOrigin;
})();
