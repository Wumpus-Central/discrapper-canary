let r, n;
t.d(a, { Sw: () => d, Yk: () => s, ZN: () => D });
var i = t(99478);
function l(e, a, t, r) {
    return r + Math.ceil(29.5 * (t - 1)) + (a - 1) * 354 + Math.floor((3 + 11 * a) / 30) + e - 1;
}
function o(e, a, t) {
    let r = Math.floor((30 * (t - a) + 10646) / 10631),
        n = Math.min(12, Math.ceil((t - (29 + l(a, r, 1, 1))) / 29.5) + 1),
        o = t - l(a, r, n, 1) + 1;
    return new (0, i.ng)(e, r, n, o);
}
function u(e) {
    return (14 + 11 * e) % 30 < 11;
}
class s {
    fromJulianDay(e) {
        return o(this, 1948440, e);
    }
    toJulianDay(e) {
        return l(1948440, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let a = 29 + (e.month % 2);
        return 12 === e.month && u(e.year) && a++, a;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return u(e.year) ? 355 : 354;
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
class d extends s {
    fromJulianDay(e) {
        return o(this, 1948439, e);
    }
    toJulianDay(e) {
        return l(1948439, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = "islamic-tbla");
    }
}
function c(e) {
    return 460322 + n[e - 1300];
}
function m(e, a) {
    return (r[e - 1300] & (1 << (11 - (a - 1)))) == 0 ? 29 : 30;
}
function h(e, a) {
    let t = c(e);
    for (let r = 1; r < a; r++) t += m(e, r);
    return t;
}
function y(e) {
    return n[e + 1 - 1300] - n[e - 1300];
}
class D extends s {
    fromJulianDay(e) {
        let a = e - 1948440,
            t = c(1300),
            r = c(1600);
        if (a < t || a > r) return super.fromJulianDay(e);
        {
            let e = 1299,
                t = 1,
                r = 1;
            for (; r > 0; ) {
                r = a - c(++e) + 1;
                let n = y(e);
                if (r === n) {
                    t = 12;
                    break;
                }
                if (r < n) {
                    let a = m(e, t);
                    for (t = 1; r > a; ) (r -= a), (a = m(e, ++t));
                    break;
                }
            }
            return new (0, i.ng)(this, e, t, a - h(e, t) + 1);
        }
    }
    toJulianDay(e) {
        return e.year < 1300 || e.year > 1600 ? super.toJulianDay(e) : 1948440 + h(e.year, e.month) + (e.day - 1);
    }
    getDaysInMonth(e) {
        return e.year < 1300 || e.year > 1600 ? super.getDaysInMonth(e) : m(e.year, e.month);
    }
    getDaysInYear(e) {
        return e.year < 1300 || e.year > 1600 ? super.getDaysInYear(e) : y(e.year);
    }
    constructor() {
        if (
            (super(),
            (this.identifier = "islamic-umalqura"),
            r ||
                (r = new Uint16Array(
                    Uint8Array.from(
                        atob(
                            "qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=",
                        ),
                        (e) => e.charCodeAt(0),
                    ).buffer,
                )),
            !n)
        ) {
            n = new Uint32Array(301);
            let e = 0;
            for (let a = 1300; a <= 1600; a++) {
                n[a - 1300] = e;
                for (let t = 1; t <= 12; t++) e += m(a, t);
            }
        }
    }
}
