"use strict";
n.d(t, { A: () => l });
var r = n(998493),
    i = n(374372),
    a = n(355418),
    s = n(476858),
    o = n(632434);
class l extends a.c {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(
            `(?:\\s*((?:n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${r.nj})?(?:\\s*(n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${(0, s.uJ)(r.EB)})`,
            "i",
        );
    }
    innerExtract(e, t) {
        let n = t[2] ? (0, r.zp)(t[2]) : 1,
            a = r.EB[t[4].toLowerCase()],
            s = {};
        s[a] = n;
        let l = t[1] || t[3] || "";
        if ((l = l.toLowerCase()))
            return (
                (/vor/.test(l) || /letzte/.test(l) || /vergangen/.test(l)) && (s = (0, o.x4)(s)),
                i.BP.createRelativeFromReference(e.reference, s)
            );
    }
}
