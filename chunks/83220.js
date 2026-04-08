s.d(e, { lu: () => i, zf: () => n });
var r = s(978862);
function i() {
    return Date.now() / 1e3;
}
let n = (function () {
    let { performance: t } = r.O;
    if (!t || !t.now) return i;
    let e = Date.now() - t.now(),
        s = void 0 == t.timeOrigin ? e : t.timeOrigin;
    return () => (s + t.now()) / 1e3;
})();
(() => {
    let { performance: t } = r.O;
    if (!t || !t.now) return;
    let e = t.now(),
        s = Date.now(),
        i = t.timeOrigin ? Math.abs(t.timeOrigin + e - s) : 36e5,
        n = t.timing && t.timing.navigationStart,
        o = "number" == typeof n ? Math.abs(n + e - s) : 36e5;
    if ((i < 36e5 || o < 36e5) && i <= o) return t.timeOrigin;
})();
