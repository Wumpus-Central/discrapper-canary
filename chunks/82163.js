t.d(a, { t: () => o });
var u = t(720479),
    n = t(274738);
function r(e) {
    return "minguo" === e.era ? e.year + 1911 : 1 - e.year + 1911;
}
function i(e) {
    let a = e - 1911;
    return a > 0 ? ["minguo", a] : ["before_minguo", 1 - a];
}
class o extends n.IQ {
    fromJulianDay(e) {
        let a = super.fromJulianDay(e),
            [t, r] = i((0, n.J4)(a.era, a.year));
        return new (0, u.aw)(this, t, r, a.month, a.day);
    }
    toJulianDay(e) {
        return super.toJulianDay(l(e));
    }
    getEras() {
        return ["before_minguo", "minguo"];
    }
    balanceDate(e) {
        let [a, t] = i(r(e));
        (e.era = a), (e.year = t);
    }
    isInverseEra(e) {
        return "before_minguo" === e.era;
    }
    getDaysInMonth(e) {
        return super.getDaysInMonth(l(e));
    }
    getYearsInEra(e) {
        return "before_minguo" === e.era ? 9999 : 8088;
    }
    constructor(...e) {
        super(...e), (this.identifier = "roc");
    }
}
function l(e) {
    let [a, t] = (0, n.JD)(r(e));
    return new (0, u.aw)(a, t, e.month, e.day);
}
