"use strict";
n.d(t, { A: () => u });
var r = n(147426),
    i = n(374372),
    a = n(476858),
    s = n(972409);
let o = 1,
    l = 2;
class u extends s.w {
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
        let u = e.createParsingComponents(),
            c = new Date(e.reference.instant.getTime());
        return (
            s.match(/week/i)
                ? (c.setDate(c.getDate() - c.getDay()),
                  u.imply("day", c.getDate()),
                  u.imply("month", c.getMonth() + 1),
                  u.imply("year", c.getFullYear()))
                : s.match(/month/i)
                  ? (c.setDate(1),
                    u.imply("day", c.getDate()),
                    u.assign("year", c.getFullYear()),
                    u.assign("month", c.getMonth() + 1))
                  : s.match(/year/i) &&
                    (c.setDate(1),
                    c.setMonth(0),
                    u.imply("day", c.getDate()),
                    u.imply("month", c.getMonth() + 1),
                    u.assign("year", c.getFullYear())),
            u
        );
    }
}
