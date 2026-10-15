Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(474726),
    a = r(115835),
    i = r(389766),
    s = r(628403),
    o = RegExp(
        `(questo|ultimo|passato|prossimo|dopo|questa|ultima|passata|prossima|\\+|-)\\s*(${n.TIME_UNITS_PATTERN})(?=\\W|$)`,
        "i",
    );
class u extends i.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return o;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            i = (0, n.parseDuration)(t[2]);
        switch (r) {
            case "last":
            case "past":
            case "-":
                i = (0, s.reverseDuration)(i);
        }
        return a.ParsingComponents.createRelativeFromReference(e.reference, i);
    }
}
t.default = u;
