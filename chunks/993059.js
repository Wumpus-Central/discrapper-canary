r.d(t, { A: () => l });
var n = r(998493),
    s = r(374372),
    a = r(355418),
    i = r(476858),
    o = r(632434);
class l extends a.c {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(
            `(?:\\s*((?:n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${n.nj})?(?:\\s*(n\xe4chste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${(0, i.uJ)(n.EB)})`,
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t[2] ? (0, n.zp)(t[2]) : 1,
            a = n.EB[t[4].toLowerCase()],
            i = {};
        i[a] = r;
        let l = t[1] || t[3] || "";
        if ((l = l.toLowerCase()))
            return (
                (/vor/.test(l) || /letzte/.test(l) || /vergangen/.test(l)) && (i = (0, o.x4)(i)),
                s.BP.createRelativeFromReference(e.reference, i)
            );
    }
}
