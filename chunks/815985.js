n.d(t, { Z: () => d });
var r = n(684758),
    i = n(140081),
    a = n(800911),
    o = n(727916);
let s = RegExp(
        `((?:in)\\s*)?(${(0, a.q3)(r._$)})\\s*(?:(?:,|-|of)?\\s*(${r.H6})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3;
class d extends o.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[c].toLowerCase();
        if (t[0].length <= 3 && !r.Ge[n]) return null;
        let a = e.createParsingResult(t.index + (t[l] || "").length, t.index + t[0].length);
        a.start.imply("day", 1), a.start.addTag("parser/ENMonthNameParser");
        let o = r._$[n];
        if ((a.start.assign("month", o), t[u])) {
            let e = (0, r.SH)(t[u]);
            a.start.assign("year", e);
        } else {
            let t = (0, i.r)(e.refDate, 1, o);
            a.start.imply("year", t);
        }
        return a;
    }
}
