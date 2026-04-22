r.d(t, { A: () => l });
var n = r(615339),
    s = r(374372),
    a = r(355418),
    i = r(632434);
let o = RegExp(`(questo|ultimo|passato|prossimo|dopo|questa|ultima|passata|prossima|\\+|-)\\s*(${n.Pl})(?=\\W|$)`, "i");
class l extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            a = (0, n.E9)(t[2]);
        switch (r) {
            case "last":
            case "past":
            case "-":
                a = (0, i.x4)(a);
        }
        return s.BP.createRelativeFromReference(e.reference, a);
    }
}
