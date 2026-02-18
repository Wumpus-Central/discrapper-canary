t.d(a, { a: () => i });
var r = t(99478),
    n = t(142922);
class i extends n.FG {
    fromJulianDay(e) {
        let a,
            t,
            i,
            o = super.fromJulianDay(e),
            u = o.year - 78,
            l = e - (0, n.rG)(o.era, o.year, 1, 1);
        if (
            (l < 80
                ? (u--, (l += (a = (0, n.U_)(o.year - 1) ? 31 : 30) + 155 + 90 + 10))
                : ((a = (0, n.U_)(o.year) ? 31 : 30), (l -= 80)),
            l < a)
        )
            (t = 1), (i = l + 1);
        else {
            let e = l - a;
            e < 155
                ? ((t = Math.floor(e / 31) + 2), (i = (e % 31) + 1))
                : ((e -= 155), (t = Math.floor(e / 30) + 7), (i = (e % 30) + 1));
        }
        return new (0, r.ng)(this, u, t, i);
    }
    toJulianDay(e) {
        let a,
            t,
            r = e.year + 78,
            [i, o] = (0, n.f5)(r);
        return ((0, n.U_)(o) ? ((a = 31), (t = (0, n.rG)(i, o, 3, 21))) : ((a = 30), (t = (0, n.rG)(i, o, 3, 22))),
        1 === e.month)
            ? t + e.day - 1
            : ((t += a + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (t += (e.month - 7) * 30), (t += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && (0, n.U_)(e.year + 78)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
    }
    getYearsInEra() {
        return 9919;
    }
    getEras() {
        return ["saka"];
    }
    balanceDate() {}
    constructor(...e) {
        super(...e), (this.identifier = "indian");
    }
}
