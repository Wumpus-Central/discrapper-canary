"use strict";
n.d(t, { a: () => o });
var r = n(99478),
    i = n(142922);
let a = 78,
    s = 80;
class o extends i.FG {
    fromJulianDay(e) {
        let t,
            n,
            o,
            l = super.fromJulianDay(e),
            u = l.year - a,
            c = e - (0, i.rG)(l.era, l.year, 1, 1);
        if (
            (c < s
                ? (u--, (c += (t = (0, i.U_)(l.year - 1) ? 31 : 30) + 155 + 90 + 10))
                : ((t = (0, i.U_)(l.year) ? 31 : 30), (c -= s)),
            c < t)
        )
            (n = 1), (o = c + 1);
        else {
            let e = c - t;
            e < 155
                ? ((n = Math.floor(e / 31) + 2), (o = (e % 31) + 1))
                : ((e -= 155), (n = Math.floor(e / 30) + 7), (o = (e % 30) + 1));
        }
        return new (0, r.ng)(this, u, n, o);
    }
    toJulianDay(e) {
        let t,
            n,
            r = e.year + a,
            [s, o] = (0, i.f5)(r);
        return ((0, i.U_)(o) ? ((t = 31), (n = (0, i.rG)(s, o, 3, 21))) : ((t = 30), (n = (0, i.rG)(s, o, 3, 22))),
        1 === e.month)
            ? n + e.day - 1
            : ((n += t + 31 * Math.min(e.month - 2, 5)), e.month >= 8 && (n += (e.month - 7) * 30), (n += e.day - 1));
    }
    getDaysInMonth(e) {
        return (1 === e.month && (0, i.U_)(e.year + a)) || (e.month >= 2 && e.month <= 6) ? 31 : 30;
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
