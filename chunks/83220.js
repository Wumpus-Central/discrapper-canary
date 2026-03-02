"use strict";
let r;
n.d(t, { lu: () => a, zf: () => o });
var i = n(978862);
let s = 1e3;
function a() {
    return Date.now() / s;
}
let o = (function () {
    let { performance: e } = i.O;
    if (!e || !e.now) return a;
    let t = Date.now() - e.now(),
        n = void 0 == e.timeOrigin ? t : e.timeOrigin;
    return () => (n + e.now()) / s;
})();
(() => {
    let { performance: e } = i.O;
    if (!e || !e.now) {
        r = "none";
        return;
    }
    let t = 36e5,
        n = e.now(),
        s = Date.now(),
        a = e.timeOrigin ? Math.abs(e.timeOrigin + n - s) : t,
        o = a < t,
        l = e.timing && e.timing.navigationStart,
        u = "number" == typeof l ? Math.abs(l + n - s) : t,
        c = u < t;
    if (o || c)
        if (a <= u) return (r = "timeOrigin"), e.timeOrigin;
        else return (r = "navigationStart");
    return (r = "dateNow");
})();
