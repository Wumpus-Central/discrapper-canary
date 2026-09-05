Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(273071),
    a = r(115835),
    i = r(389766);
class s extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return RegExp(`(?:en|por|durante|de|dentro de)\\s*(${n.TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return a.ParsingComponents.createRelativeFromReference(e.reference, r);
    }
}
t.default = s;
