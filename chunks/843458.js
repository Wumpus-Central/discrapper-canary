n.d(t, { Z: () => u });
var r = n(684758),
    i = n(86465),
    a = n(727916),
    o = n(800911);
let s = RegExp(`(this|last|past|next|after\\s*this)\\s*(${(0, o.q3)(r.pS)})(?=\\s*)(?=\\W|$)`, "i"),
    l = 1,
    c = 2;
class u extends a.Z {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = t[l].toLowerCase(),
            a = t[c].toLowerCase(),
            o = r.pS[a];
        if ("next" == n || n.startsWith("after")) {
            let t = {};
            return (t[o] = 1), i.L.createRelativeFromReference(e.reference, t);
        }
        if ("last" == n || "past" == n) {
            let t = {};
            return (t[o] = -1), i.L.createRelativeFromReference(e.reference, t);
        }
        let s = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return (
            a.match(/week/i)
                ? (u.setDate(u.getDate() - u.getDay()),
                  s.imply("day", u.getDate()),
                  s.imply("month", u.getMonth() + 1),
                  s.imply("year", u.getFullYear()))
                : a.match(/month/i)
                  ? (u.setDate(1),
                    s.imply("day", u.getDate()),
                    s.assign("year", u.getFullYear()),
                    s.assign("month", u.getMonth() + 1))
                  : a.match(/year/i) &&
                    (u.setDate(1),
                    u.setMonth(0),
                    s.imply("day", u.getDate()),
                    s.imply("month", u.getMonth() + 1),
                    s.assign("year", u.getFullYear())),
            s
        );
    }
}
