s.d(e, { lu: () => n, zf: () => r });
var i = s(978862);
function n() {
    return Date.now() / 1e3;
}
let r = (function () {
    let { performance: t } = i.O;
    if (!t || !t.now) return n;
    let e = Date.now() - t.now(),
        s = void 0 == t.timeOrigin ? e : t.timeOrigin;
    return () => (s + t.now()) / 1e3;
})();
(() => {
    let { performance: t } = i.O;
    if (!t || !t.now) return;
    let e = t.now(),
        s = Date.now(),
        n = t.timeOrigin ? Math.abs(t.timeOrigin + e - s) : 36e5,
        r = t.timing && t.timing.navigationStart,
        o = "number" == typeof r ? Math.abs(r + e - s) : 36e5;
    if ((n < 36e5 || o < 36e5) && n <= o) return t.timeOrigin;
})();
