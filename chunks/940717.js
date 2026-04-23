r.d(t, { A: () => l });
var n = r(615339),
    s = r(374372),
    a = r(355418);
let i = RegExp(`(${n.Pl})\\s{0,5}(?:dopo|pi\xf9 tardi|da adesso|avanti|oltre|a seguire)(?=(?:\\W|$))`, "i"),
    o = RegExp("(" + n.Pl + ")(dopo|pi\xf9 tardi)(?=(?:\\W|$))", "i");
class l extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? o : i;
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]);
        return s.BP.createRelativeFromReference(e.reference, r);
    }
}
