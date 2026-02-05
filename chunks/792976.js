"use strict";
n.d(t, { A: () => u });
var r = n(360345),
    i = n(374372),
    a = n(355418);
let s = RegExp(
        `(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${r.Pl})(?=\\W|$)`,
        "i",
    ),
    o = RegExp(
        `(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${r.Pl})(?=\\W|$)`,
        "i",
    ),
    l = RegExp(
        `(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${r.d2})(?=\\W|$)`,
        "i",
    );
class u extends a.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern(e) {
        return this.strictMode ? l : e.option.forwardDate ? s : o;
    }
    innerExtract(e, t) {
        if (t[0].match(/^for\s*the\s*\w+/)) return null;
        let n = (0, r.E9)(t[1]);
        return n ? i.BP.createRelativeFromReference(e.reference, n) : null;
    }
}
