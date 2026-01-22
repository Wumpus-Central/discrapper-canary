n.d(t, {
    A: () => l,
});
var r = n(615339),
    i = n(374372),
    a = n(355418),
    s = n(632434);
let o = RegExp(`(questo|ultimo|passato|prossimo|dopo|questa|ultima|passata|prossima|\\+|-)\\s*(${r.Pl})(?=\\W|$)`, "i");
class l extends a.c {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let n = t[1].toLowerCase(),
            a = (0, r.E9)(t[2]);
        switch (n) {
            case "last":
            case "past":
            case "-":
                a = (0, s.x4)(a);
        }
        return i.BP.createRelativeFromReference(e.reference, a);
    }
}
