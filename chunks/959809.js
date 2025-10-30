n.d(t, { Z: () => c });
var r = n(150816),
    i = n(86465),
    a = n(800911),
    o = n(522677);
let s = 1,
    l = 2;
class c extends o.F {
    innerPatternString(e) {
        return `(в прошлом|на прошлой|на следующей|в следующем|на этой|в этом)\\s*(${(0, a.q3)(r.pS)})`;
    }
    innerExtract(e, t) {
        let n = t[s].toLowerCase(),
            a = t[l].toLowerCase(),
            o = r.pS[a];
        if ("на следующей" == n || "в следующем" == n) {
            let t = {};
            return (t[o] = 1), i.L.createRelativeFromReference(e.reference, t);
        }
        if ("в прошлом" == n || "на прошлой" == n) {
            let t = {};
            return (t[o] = -1), i.L.createRelativeFromReference(e.reference, t);
        }
        let c = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return (
            o.match(/week/i)
                ? (u.setDate(u.getDate() - u.getDay()),
                  c.imply("day", u.getDate()),
                  c.imply("month", u.getMonth() + 1),
                  c.imply("year", u.getFullYear()))
                : o.match(/month/i)
                  ? (u.setDate(1),
                    c.imply("day", u.getDate()),
                    c.assign("year", u.getFullYear()),
                    c.assign("month", u.getMonth() + 1))
                  : o.match(/year/i) &&
                    (u.setDate(1),
                    u.setMonth(0),
                    c.imply("day", u.getDate()),
                    c.imply("month", u.getMonth() + 1),
                    c.assign("year", u.getFullYear())),
            c
        );
    }
}
