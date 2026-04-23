r.d(t, { A: () => o });
var n = r(989479),
    s = r(374372),
    a = r(355418);
let i = `(?:(?:около|примерно)\\s*(?:~\\s*)?)?(${n.Pl})${n.pW.rightBoundary}`;
class o extends a.c {
    patternLeftBoundary() {
        return n.pW.leftBoundary;
    }
    innerPattern(e) {
        return e.option.forwardDate ? new RegExp(i, n.pW.flags) : RegExp(`(?:в течение|в течении)\\s*${i}`, n.pW.flags);
    }
    innerExtract(e, t) {
        let r = (0, n.E9)(t[1]);
        return s.BP.createRelativeFromReference(e.reference, r);
    }
}
