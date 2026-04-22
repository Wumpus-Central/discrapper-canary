r.d(t, { A: () => i });
var n = r(528352),
    s = r(374372),
    a = r(355418);
class i extends a.c {
    innerPattern() {
        return RegExp("(?:binnen|in|binnen de|voor)\\s*(" + n.Pl + ")(?=\\W|$)", "i");
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]);
        return s.BP.createRelativeFromReference(e.reference, r);
    }
}
