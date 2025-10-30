n.d(t, { Z: () => c });
var r = n(727916),
    i = n(424046),
    a = n(715870);
let o = RegExp(
        `(nu|idag|imorgon|\xf6vermorgon|ig\xe5r|f\xf6rrg\xe5r|i\\s*f\xf6rrg\xe5r)(?:\\s*(?:p\xe5\\s*)?(morgonen?|f\xf6rmiddagen?|middagen?|eftermiddagen?|kv\xe4llen?|natten?|midnatt))?(?=\\W|$)`,
        "i",
    ),
    s = 1,
    l = 2;
class c extends r.Z {
    innerPattern(e) {
        return o;
    }
    innerExtract(e, t) {
        let n = e.refDate,
            r = (t[s] || "").toLowerCase(),
            o = (t[l] || "").toLowerCase(),
            c = e.createParsingComponents();
        switch (r) {
            case "nu":
                c = a.zO(e.reference);
                break;
            case "idag":
                c = a.Lg(e.reference);
                break;
            case "imorgon":
            case "imorn":
                let u = new Date(n.getTime());
                u.setDate(u.getDate() + 1), (0, i.cz)(c, u), (0, i.hO)(c, u);
                break;
            case "igår":
                let d = new Date(n.getTime());
                d.setDate(d.getDate() - 1), (0, i.cz)(c, d), (0, i.hO)(c, d);
                break;
            case "förrgår":
            case "i förrgår":
                let f = new Date(n.getTime());
                f.setDate(f.getDate() - 2), (0, i.cz)(c, f), (0, i.hO)(c, f);
        }
        switch (o) {
            case "morgon":
            case "morgonen":
                c.imply("hour", 6), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "förmiddag":
            case "förmiddagen":
                c.imply("hour", 9), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "middag":
            case "middagen":
                c.imply("hour", 12), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "eftermiddag":
            case "eftermiddagen":
                c.imply("hour", 15), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "kväll":
            case "kvällen":
                c.imply("hour", 20), c.imply("minute", 0), c.imply("second", 0), c.imply("millisecond", 0);
                break;
            case "natt":
            case "natten":
            case "midnatt":
                "midnatt" === o ? c.imply("hour", 0) : c.imply("hour", 2),
                    c.imply("minute", 0),
                    c.imply("second", 0),
                    c.imply("millisecond", 0);
        }
        return c;
    }
}
