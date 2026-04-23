r.d(t, { A: () => o });
var n = r(360345),
    s = r(476858),
    a = r(355418);
let i = RegExp(`([0-9]{4})[-\\.\\/\\s](?:(${(0, s.uJ)(n.eB)})|([0-9]{1,2}))[-\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
class o extends a.c {
    strictMonthDateOrder;
    constructor(e) {
        super(), (this.strictMonthDateOrder = e);
    }
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let r = parseInt(t[1]),
            s = parseInt(t[4]),
            a = t[3] ? parseInt(t[3]) : n.eB[t[2].toLowerCase()];
        if (a < 1 || a > 12) {
            if (this.strictMonthDateOrder) return null;
            s >= 1 && s <= 12 && ([a, s] = [s, a]);
        }
        return s < 1 || s > 31 ? null : { day: s, month: a, year: r };
    }
}
