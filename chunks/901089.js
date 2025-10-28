t.d(a, { t: () => r });
var u = t(720479),
    n = t(274738);
class r extends n.IQ {
    fromJulianDay(e) {
        let a,
            t,
            r,
            i = super.fromJulianDay(e),
            o = i.year - 78,
            l = e - (0, n.g_)(i.era, i.year, 1, 1);
        if (
            (l < 80
                ? (o--, (l += (a = (0, n.Eg)(i.year - 1) ? 31 : 30) + 155 + 90 + 10))
                : ((a = (0, n.Eg)(i.year) ? 31 : 30), (l -= 80)),
            l < a)
        )
            (t = 1), (r = l + 1);
        else {
            let e = l - a;
            e < 155
                ? ((t = Math.floor(e / 31) + 2), (r = (e % 31) + 1))
                : ((e -= 155), (t = Math.floor(e / 30) + 7), (r = (e % 30) + 1));
        }
        return new (0, u.aw)(this, o, t, r);
    }
    toJulianDay(e) {
        let a,
            t,
            u = e.year + 78,
            [r, i] = (0, n.JD)(u);
        return ((0, n.Eg)(i) ? ((a = 31), (t = (0, n.g_)(r, i, 3, 21))) : ((a = 30), (t = (0, n.g_)(r, i, 3, 22))),
        1 === e.month)
            ? t + e.day - 1
            : ((t += a + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (t += (e.month - 7) * 30), (t += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && (0, n.Eg)(e.year + 78)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
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
