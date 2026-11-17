var r = n(978862);
function i() {
    return Date.now() / 1e3;
}
let o = (function () {
        let { performance: e } = r.O;
        if (!e || !e.now) return i;
        let t = Date.now() - e.now(),
            n = void 0 == e.timeOrigin ? t : e.timeOrigin;
        return () => (n + e.now()) / 1e3;
    })(),
    a = (() => {
        let { performance: e } = r.O;
        if (!e || !e.now) return;
        let t = e.now(),
            n = Date.now(),
            i = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
            o = e.timing && e.timing.navigationStart,
            a = "number" == typeof o ? Math.abs(o + t - n) : 36e5;
        if (i < 36e5 || a < 36e5)
            if (i <= a) return e.timeOrigin;
            else return o;
        return n;
    })();
n.d(t, {}, { k3: a, lu: i, zf: o });
