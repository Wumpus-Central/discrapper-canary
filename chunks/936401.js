r.d(t, { A: () => l });
var n = r(6678),
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
            `(?:les?|la|l'|du|des?)\\s*(${n.nj})?(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?\\s*(${(0, i.uJ)(n.EB)})(?:\\s*(prochaine?s?|derni[e\xe8]re?s?|pass[\xe9e]e?s?|pr[\xe9e]c[\xe9e]dents?|suivante?s?))?`,
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t[1] ? (0, n.zp)(t[1]) : 1,
            a = n.EB[t[3].toLowerCase()],
            i = {};
        i[a] = r;
        let l = t[2] || t[4] || "";
        if ((l = l.toLowerCase()))
            return (
                (/derni[eè]re?s?/.test(l) || /pass[ée]e?s?/.test(l) || /pr[ée]c[ée]dents?/.test(l)) &&
                    (i = (0, o.x4)(i)),
                s.BP.createRelativeFromReference(e.reference, i)
            );
    }
}
