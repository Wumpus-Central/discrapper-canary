Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(722279),
    a = r(115835),
    i = r(389766),
    s = r(628403);
class o extends i.AbstractParserWithWordBoundaryChecking {
    constructor() {
        super();
    }
    innerPattern() {
        return RegExp(`il y a\\s*(${n.TIME_UNITS_PATTERN})(?=(?:\\W|$))`, "i");
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]),
            i = (0, s.reverseDuration)(r);
        return a.ParsingComponents.createRelativeFromReference(e.reference, i);
    }
}
t.default = o;
