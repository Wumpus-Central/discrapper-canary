n.d(t, { Z: () => f });
var r = n(140081),
    i = n(53851),
    a = n(800911),
    o = n(727916);
let s = RegExp(
        `(${(0, a.q3)(i._$)})(?:-|/|\\s*,?\\s*)(${i.aK})(?!\\s*(?:am|pm))\\s*(?:(?:al|\\-|\\alle|\\del|\\s)\\s*(${i.aK})\\s*)?(?:(?:-|/|\\s*,?\\s*)(${i.H6}))?(?=\\W|$)(?!\\:\\d)`,
        "i",
    ),
    l = 1,
    c = 2,
    u = 3,
    d = 4;
class f extends o.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = i._$[t[l].toLowerCase()],
            a = (0, i.JF)(t[c]);
        if (a > 31) return null;
        let o = e.createParsingComponents({
            day: a,
            month: n,
        });
        if (t[d]) {
            let e = (0, i.SH)(t[d]);
            o.assign("year", e);
        } else {
            let t = (0, r.r)(e.refDate, a, n);
            o.imply("year", t);
        }
        if (!t[u]) return o;
        let s = (0, i.JF)(t[u]),
            f = e.createParsingResult(t.index, t[0]);
        return (f.start = o), (f.end = o.clone()), f.end.assign("day", s), f;
    }
}
