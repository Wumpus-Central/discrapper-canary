r.d(t, { A: () => u });
var n = r(360345),
    s = r(374372),
    a = r(355418);
let i = RegExp(
        `(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${n.Pl})(?=\\W|$)`,
        "i",
    ),
    o = RegExp(
        `(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${n.Pl})(?=\\W|$)`,
        "i",
    ),
    l = RegExp(
        `(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${n.d2})(?=\\W|$)`,
        "i",
    );
class u extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern(e) {
        return this.strictMode ? l : e.option.forwardDate ? i : o;
    }
    innerExtract(e, t) {
        if (t[0].match(/^for\s*the\s*\w+/)) return null;
        let r = (0, n.E9)(t[1]);
        return r ? s.BP.createRelativeFromReference(e.reference, r) : null;
    }
}
