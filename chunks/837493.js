"use strict";
n.d(t, { A: () => _ });
var r = n(364242),
    i = n(683958),
    a = n(476858),
    s = n(355418);
let o = RegExp(
        `([0-9]{1,2})(?:\xba|\xaa|\xb0)?(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:\xba|\xaa|\xb0)?)?\\s*(?:de)?\\s*(?:-|/|\\s*(?:de|,)?\\s*)(${(0, a.uJ)(i.eB)})(?:\\s*(?:de|,)?\\s*(${i.fp}))?(?=\\W|$)`,
        "i",
    ),
    l = 1,
    u = 2,
    c = 3,
    d = 4;
class _ extends s.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            a = i.eB[t[c].toLowerCase()],
            s = parseInt(t[l]);
        if (s > 31) return (t.index = t.index + t[l].length), null;
        if ((n.start.assign("month", a), n.start.assign("day", s), t[d])) {
            let e = (0, i.zL)(t[d]);
            n.start.assign("year", e);
        } else {
            let t = (0, r.Y)(e.refDate, s, a);
            n.start.imply("year", t);
        }
        if (t[u]) {
            let e = parseInt(t[u]);
            (n.end = n.start.clone()), n.end.assign("day", e);
        }
        return n;
    }
}
