r.d(t, { A: () => o });
var n = r(989479),
    s = r(374372),
    a = r(241738),
    i = r(632434);
class o extends a.d {
    innerPatternString(e) {
        return `(${n.Pl})\\s{0,5}назад(?=(?:\\W|$))`;
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]),
            a = (0, i.x4)(r);
        return s.BP.createRelativeFromReference(e.reference, a);
    }
}
