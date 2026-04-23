r.d(t, { A: () => l });
var n = r(364242),
    s = r(528352),
    a = r(476858),
    i = r(355418);
let o = RegExp(
    `(?:on\\s*?)?(${s.lT})(?:\\s*(?:tot|\\-|\\–|until|through|till|\\s)\\s*(${s.lT}))?(?:-|/|\\s*(?:of)?\\s*)(` +
        (0, a.uJ)(s.eB) +
        ")(?:(?:-|/|,?\\s*)" +
        `(${s.fp}(?![^\\s]\\d))` +
        ")?(?=\\W|$)",
    "i",
);
class l extends i.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = s.eB[t[3].toLowerCase()],
            a = (0, s.k8)(t[1]);
        if (a > 31) return (t.index = t.index + t[1].length), null;
        let i = e.createParsingComponents({ day: a, month: r });
        if (t[4]) {
            let e = (0, s.zL)(t[4]);
            i.assign("year", e);
        } else {
            let t = (0, n.Y)(e.refDate, a, r);
            i.imply("year", t);
        }
        if (!t[2]) return i;
        let o = (0, s.k8)(t[2]),
            l = e.createParsingResult(t.index, t[0]);
        return (l.start = i), (l.end = i.clone()), l.end.assign("day", o), l;
    }
}
