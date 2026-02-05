"use strict";
n.d(t, { A: () => u });
var r = n(615339),
    i = n(374372),
    a = n(355418);
let s = RegExp(`(${r.Pl})\\s{0,5}(?:dopo|pi\xf9 tardi|da adesso|avanti|oltre|a seguire)(?=(?:\\W|$))`, "i"),
    o = RegExp("(" + r.Pl + ")(dopo|pi\xf9 tardi)(?=(?:\\W|$))", "i"),
    l = 1;
class u extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? o : s;
    }
    innerExtract(e, t) {
        let n = (0, r.E9)(t[l]);
        return i.BP.createRelativeFromReference(e.reference, n);
    }
}
