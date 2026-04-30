r.d(t, { lu: () => i, zf: () => o });
var n = r(978862);
function i() {
    return Date.now() / 1e3;
}
let o = (function () {
    let { performance: e } = n.O;
    if (!e || !e.now) return i;
    let t = Date.now() - e.now(),
        r = void 0 == e.timeOrigin ? t : e.timeOrigin;
    return () => (r + e.now()) / 1e3;
})();
(() => {
    let { performance: e } = n.O;
    if (!e || !e.now) return;
    let t = e.now(),
        r = Date.now(),
        i = e.timeOrigin ? Math.abs(e.timeOrigin + t - r) : 36e5,
        o = e.timing && e.timing.navigationStart,
        a = "number" == typeof o ? Math.abs(o + t - r) : 36e5;
    if ((i < 36e5 || a < 36e5) && i <= a) return e.timeOrigin;
})();
