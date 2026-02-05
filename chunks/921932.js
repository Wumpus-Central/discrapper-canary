"use strict";
n.d(t, { A: () => _ });
var r = n(364242),
    i = n(528352),
    a = n(476858),
    s = n(355418);
let o = RegExp(
        `(?:on\\s*?)?(${i.lT})(?:\\s*(?:tot|\\-|\\–|until|through|till|\\s)\\s*(${i.lT}))?(?:-|/|\\s*(?:of)?\\s*)(` +
            (0, a.uJ)(i.eB) +
            ")(?:(?:-|/|,?\\s*)" +
            `(${i.fp}(?![^\\s]\\d))` +
            ")?(?=\\W|$)",
        "i",
    ),
    l = 3,
    u = 1,
    c = 2,
    d = 4;
class _ extends s.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = i.eB[t[l].toLowerCase()],
            a = (0, i.k8)(t[u]);
        if (a > 31) return (t.index = t.index + t[u].length), null;
        let s = e.createParsingComponents({ day: a, month: n });
        if (t[d]) {
            let e = (0, i.zL)(t[d]);
            s.assign("year", e);
        } else {
            let t = (0, r.Y)(e.refDate, a, n);
            s.imply("year", t);
        }
        if (!t[c]) return s;
        let o = (0, i.k8)(t[c]),
            _ = e.createParsingResult(t.index, t[0]);
        return (_.start = s), (_.end = s.clone()), _.end.assign("day", o), _;
    }
}
