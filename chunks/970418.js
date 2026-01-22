n.d(t, {
    A: () => u,
});
var r = n(528352),
    i = n(374372),
    a = n(355418),
    s = n(476858);
let o = RegExp(`(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(${(0, s.uJ)(r.EB)})(?=\\s*)(?=\\W|$)`, "i"),
    l = 1,
    c = 2;
class u extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[l].toLowerCase(),
            a = t[c].toLowerCase(),
            s = r.EB[a];
        if ("volgend" == n || "komend" == n || "aankomend" == n) {
            let t = {};
            return (t[s] = 1), i.BP.createRelativeFromReference(e.reference, t);
        }
        if ("afgelopen" == n || "vorig" == n) {
            let t = {};
            return (t[s] = -1), i.BP.createRelativeFromReference(e.reference, t);
        }
        let o = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return (
            a.match(/week/i)
                ? (u.setDate(u.getDate() - u.getDay()),
                  o.imply("day", u.getDate()),
                  o.imply("month", u.getMonth() + 1),
                  o.imply("year", u.getFullYear()))
                : a.match(/maand/i)
                  ? (u.setDate(1),
                    o.imply("day", u.getDate()),
                    o.assign("year", u.getFullYear()),
                    o.assign("month", u.getMonth() + 1))
                  : a.match(/jaar/i) &&
                    (u.setDate(1),
                    u.setMonth(0),
                    o.imply("day", u.getDate()),
                    o.imply("month", u.getMonth() + 1),
                    o.assign("year", u.getFullYear())),
            o
        );
    }
}
