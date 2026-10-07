Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(687204),
    a = r(115835),
    i = r(389766);
class s extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return RegExp(`(?:in|f\xfcr|w\xe4hrend)\\s*(${n.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return a.ParsingComponents.createRelativeFromReference(e.reference, r);
    }
}
t.default = s;
