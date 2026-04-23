r.d(t, { A: () => l });
var n = r(528352),
    s = r(374372),
    a = r(355418),
    i = r(476858);
let o = RegExp(`(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(${(0, i.uJ)(n.EB)})(?=\\s*)(?=\\W|$)`, "i");
class l extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            a = t[2].toLowerCase(),
            i = n.EB[a];
        if ("volgend" == r || "komend" == r || "aankomend" == r) {
            let t = {};
            return (t[i] = 1), s.BP.createRelativeFromReference(e.reference, t);
        }
        if ("afgelopen" == r || "vorig" == r) {
            let t = {};
            return (t[i] = -1), s.BP.createRelativeFromReference(e.reference, t);
        }
        let o = e.createParsingComponents(),
            l = new Date(e.reference.instant.getTime());
        return (
            a.match(/week/i)
                ? (l.setDate(l.getDate() - l.getDay()),
                  o.imply("day", l.getDate()),
                  o.imply("month", l.getMonth() + 1),
                  o.imply("year", l.getFullYear()))
                : a.match(/maand/i)
                  ? (l.setDate(1),
                    o.imply("day", l.getDate()),
                    o.assign("year", l.getFullYear()),
                    o.assign("month", l.getMonth() + 1))
                  : a.match(/jaar/i) &&
                    (l.setDate(1),
                    l.setMonth(0),
                    o.imply("day", l.getDate()),
                    o.imply("month", l.getMonth() + 1),
                    o.assign("year", l.getFullYear())),
            o
        );
    }
}
