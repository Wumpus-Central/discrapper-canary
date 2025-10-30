n.d(t, { Z: () => f });
var r = n(140081),
    i = n(781308),
    a = n(800911),
    o = n(727916);
let s = RegExp(
        `(?:den\\s*?)?([0-9]{1,2})(?:\\s*(?:till|\\-|\\–|\\s)\\s*([0-9]{1,2}))?\\s*(${(0, a.q3)(i._$)})(?:(?:-|/|,?\\s*)([0-9]{4}(?![^\\s]\\d)))?(?=\\W|$)`,
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
        let n = e.createParsingResult(t.index, t[0]),
            a = i._$[t[u].toLowerCase()],
            o = parseInt(t[l]);
        if (o > 31) return (t.index = t.index + t[l].length), null;
        if ((n.start.assign("month", a), n.start.assign("day", o), t[d])) {
            let e = (0, i.SH)(t[d]);
            n.start.assign("year", e);
        } else {
            let t = (0, r.r)(e.refDate, o, a);
            n.start.imply("year", t);
        }
        if (t[c]) {
            let e = parseInt(t[c]);
            (n.end = n.start.clone()), n.end.assign("day", e);
        }
        return n;
    }
}
