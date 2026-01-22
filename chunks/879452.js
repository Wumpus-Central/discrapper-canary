let r, i;
n.d(t, {
    Sw: () => h,
    Yk: () => _,
    ZN: () => O,
});
var a = n(99478);
let s = 1948440,
    o = 1948439,
    l = 1300,
    c = 1600,
    u = 460322;
function d(e, t, n, r) {
    return r + Math.ceil(29.5 * (n - 1)) + (t - 1) * 354 + Math.floor((3 + 11 * t) / 30) + e - 1;
}
function f(e, t, n) {
    let r = Math.floor((30 * (n - t) + 10646) / 10631),
        i = Math.min(12, Math.ceil((n - (29 + d(t, r, 1, 1))) / 29.5) + 1),
        s = n - d(t, r, i, 1) + 1;
    return new (0, a.ng)(e, r, i, s);
}
function p(e) {
    return (14 + 11 * e) % 30 < 11;
}
class _ {
    fromJulianDay(e) {
        return f(this, s, e);
    }
    toJulianDay(e) {
        return d(s, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let t = 29 + (e.month % 2);
        return 12 === e.month && p(e.year) && t++, t;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return p(e.year) ? 355 : 354;
    }
    getYearsInEra() {
        return 9665;
    }
    getEras() {
        return ["AH"];
    }
    constructor() {
        this.identifier = "islamic-civil";
    }
}
class h extends _ {
    fromJulianDay(e) {
        return f(this, o, e);
    }
    toJulianDay(e) {
        return d(o, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = "islamic-tbla");
    }
}
let m =
    "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=";
function g(e) {
    return u + i[e - l];
}
function E(e, t) {
    let n = 1 << (11 - (t - 1));
    return (r[e - l] & n) == 0 ? 29 : 30;
}
function b(e, t) {
    let n = g(e);
    for (let r = 1; r < t; r++) n += E(e, r);
    return n;
}
function y(e) {
    return i[e + 1 - l] - i[e - l];
}
class O extends _ {
    fromJulianDay(e) {
        let t = e - s,
            n = g(l),
            r = g(c);
        if (t < n || t > r) return super.fromJulianDay(e);
        {
            let e = l - 1,
                n = 1,
                r = 1;
            for (; r > 0; ) {
                r = t - g(++e) + 1;
                let i = y(e);
                if (r === i) {
                    n = 12;
                    break;
                }
                if (r < i) {
                    let t = E(e, n);
                    for (n = 1; r > t; ) (r -= t), (t = E(e, ++n));
                    break;
                }
            }
            return new (0, a.ng)(this, e, n, t - b(e, n) + 1);
        }
    }
    toJulianDay(e) {
        return e.year < l || e.year > c ? super.toJulianDay(e) : s + b(e.year, e.month) + (e.day - 1);
    }
    getDaysInMonth(e) {
        return e.year < l || e.year > c ? super.getDaysInMonth(e) : E(e.year, e.month);
    }
    getDaysInYear(e) {
        return e.year < l || e.year > c ? super.getDaysInYear(e) : y(e.year);
    }
    constructor() {
        if (
            (super(),
            (this.identifier = "islamic-umalqura"),
            r || (r = new Uint16Array(Uint8Array.from(atob(m), (e) => e.charCodeAt(0)).buffer)),
            !i)
        ) {
            i = new Uint32Array(c - l + 1);
            let e = 0;
            for (let t = l; t <= c; t++) {
                i[t - l] = e;
                for (let n = 1; n <= 12; n++) e += E(t, n);
            }
        }
    }
}
