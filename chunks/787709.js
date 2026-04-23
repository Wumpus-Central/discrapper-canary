t.d(a, { lf: () => s, pG: () => d, yB: () => u });
var r = t(99478);
function n(e, a, t, r) {
    return e + 365 * a + Math.floor(a / 4) + 30 * (t - 1) + r - 1;
}
function i(e, a) {
    let t = Math.floor((4 * (a - e)) / 1461),
        r = 1 + Math.floor((a - n(e, t, 1, 1)) / 30),
        i = a + 1 - n(e, t, r, 1);
    return [t, r, i];
}
function l(e) {
    return Math.floor((e % 4) / 3);
}
function o(e, a) {
    return a % 13 != 0 ? 30 : l(e) + 5;
}
class u {
    fromJulianDay(e) {
        let [a, t, n] = i(1723856, e),
            l = "AM";
        return a <= 0 && ((l = "AA"), (a += 5500)), new (0, r.ng)(this, l, a, t, n);
    }
    toJulianDay(e) {
        let a = e.year;
        return "AA" === e.era && (a -= 5500), n(1723856, a, e.month, e.day);
    }
    getDaysInMonth(e) {
        return o(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + l(e.year);
    }
    getYearsInEra(e) {
        return "AA" === e.era ? 9999 : 9991;
    }
    getEras() {
        return ["AA", "AM"];
    }
    constructor() {
        this.identifier = "ethiopic";
    }
}
class s extends u {
    fromJulianDay(e) {
        let [a, t, n] = i(1723856, e);
        return (a += 5500), new (0, r.ng)(this, "AA", a, t, n);
    }
    getEras() {
        return ["AA"];
    }
    getYearsInEra() {
        return 9999;
    }
    constructor(...e) {
        super(...e), (this.identifier = "ethioaa");
    }
}
class d extends u {
    fromJulianDay(e) {
        let [a, t, n] = i(1824665, e),
            l = "CE";
        return a <= 0 && ((l = "BCE"), (a = 1 - a)), new (0, r.ng)(this, l, a, t, n);
    }
    toJulianDay(e) {
        let a = e.year;
        return "BCE" === e.era && (a = 1 - a), n(1824665, a, e.month, e.day);
    }
    getDaysInMonth(e) {
        let a = e.year;
        return "BCE" === e.era && (a = 1 - a), o(a, e.month);
    }
    isInverseEra(e) {
        return "BCE" === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = "BCE" === e.era ? "CE" : "BCE"), (e.year = 1 - e.year));
    }
    getEras() {
        return ["BCE", "CE"];
    }
    getYearsInEra(e) {
        return "BCE" === e.era ? 9999 : 9715;
    }
    constructor(...e) {
        super(...e), (this.identifier = "coptic");
    }
}
