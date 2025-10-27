n.d(t, { r: () => s });
var r = n(720479),
    i = n(745597);
let a = 1948320,
    o = [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336];
class s {
    fromJulianDay(e) {
        let t = e - a,
            n = 1 + Math.floor((33 * t + 3) / 12053),
            i = t - (365 * (n - 1) + Math.floor((8 * n + 21) / 33)),
            s = i < 216 ? Math.floor(i / 31) : Math.floor((i - 6) / 30),
            l = i - o[s] + 1;
        return new (0, r.aw)(this, n, s + 1, l);
    }
    toJulianDay(e) {
        let t = a - 1 + 365 * (e.year - 1) + Math.floor((8 * e.year + 21) / 33);
        return (t += o[e.month - 1]), (t += e.day);
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInMonth(e) {
        return e.month <= 6 ? 31 : e.month <= 11 || 8 > (0, i.w)(25 * e.year + 11, 33) ? 30 : 29;
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
