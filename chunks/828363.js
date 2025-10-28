t.d(a, { r: () => i });
var u = t(720479),
    n = t(745597);
let r = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class i {
    fromJulianDay(e) {
        let a = e - 1948320,
            t = 1 + Math.floor((33 * a + 3) / 12053),
            n = a - (365 * (t - 1) + Math.floor((8 * t + 21) / 33)),
            i = n < 216 ? Math.floor(n / 31) : Math.floor((n - 6) / 30),
            o = n - r[i] + 1;
        return new (0, u.aw)(this, t, i + 1, o);
    }
    toJulianDay(e) {
        let a = 1948319 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
        return (a += r[e.month - 1]), (a += e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 || 8 > (0, n.w)(25 * e.year + 11, 33) ? 30 : 29;
    }
    getEras() {
        return ["AP"];
    }
    getYearsInEra() {
        return 9377;
    }
    constructor() {
        this.identifier = "persian";
    }
}
