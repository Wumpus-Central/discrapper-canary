n.d(t, {
    A: () => c,
});
var r = n(147426),
    i = n(374372),
    a = n(476858),
    s = n(972409);
let o = 1,
    l = 2;
class c extends s.w {
    innerPatternString(e) {
        return `(в минулому|у минулому|на минулому|минулого|на наступному|в наступному|у наступному|наступного|на цьому|в цьому|у цьому|цього)\\s*(${(0, a.uJ)(r.EB)})(?=\\s*)`;
    }
    innerExtract(e, t) {
        let n = t[o].toLowerCase(),
            a = t[l].toLowerCase(),
            s = r.EB[a];
        if ("на наступному" == n || "в наступному" == n || "у наступному" == n || "наступного" == n) {
            let t = {};
            return (t[s] = 1), i.BP.createRelativeFromReference(e.reference, t);
        }
        if ("на минулому" == n || "в минулому" == n || "у минулому" == n || "минулого" == n) {
            let t = {};
            return (t[s] = -1), i.BP.createRelativeFromReference(e.reference, t);
        }
        let c = e.createParsingComponents(),
            u = new Date(e.reference.instant.getTime());
        return (
            s.match(/week/i)
                ? (u.setDate(u.getDate() - u.getDay()),
                  c.imply("day", u.getDate()),
                  c.imply("month", u.getMonth() + 1),
                  c.imply("year", u.getFullYear()))
                : s.match(/month/i)
                  ? (u.setDate(1),
                    c.imply("day", u.getDate()),
                    c.assign("year", u.getFullYear()),
                    c.assign("month", u.getMonth() + 1))
                  : s.match(/year/i) &&
                    (u.setDate(1),
                    u.setMonth(0),
                    c.imply("day", u.getDate()),
                    c.imply("month", u.getMonth() + 1),
                    c.assign("year", u.getFullYear())),
            c
        );
    }
}
