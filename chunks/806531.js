Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(40840),
    a = r(115835),
    i = r(167385),
    s = RegExp(
        `(?:(?:within|in|for)\\s*)?(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${n.TIME_UNITS_PATTERN})(?=\\W|$)`,
        "i",
    ),
    o = RegExp(
        `(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${n.TIME_UNITS_PATTERN})(?=\\W|$)`,
        "i",
    ),
    u = RegExp(
        `(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${n.TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`,
        "i",
    );
class l extends i.AbstractParserWithWordBoundaryChecking {
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern(e) {
        return this.strictMode ? u : e.option.forwardDate ? s : o;
    }
    innerExtract(e, t) {
        if (t[0].match(/^for\s*the\s*\w+/)) return null;
        let r = (0, n.parseDuration)(t[1]);
        return r ? a.ParsingComponents.createRelativeFromReference(e.reference, r) : null;
    }
}
t.default = l;
