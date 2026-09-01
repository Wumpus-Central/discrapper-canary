Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(579782),
    a = r(115835),
    i = r(414533),
    s = r(628403);
class o extends i.AbstractParserWithLeftBoundaryChecking {
    innerPatternString(e) {
        return `(${n.TIME_UNITS_PATTERN})\\s{0,5}\u{43D}\u{430}\u{437}\u{430}\u{434}(?=(?:\\W|$))`;
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]),
            i = (0, s.reverseDuration)(r);
        return a.ParsingComponents.createRelativeFromReference(e.reference, i);
    }
}
t.default = o;
