Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(41943),
    a = r(115835),
    i = r(167385),
    s = `(?:(?:\u{43F}\u{440}\u{438}\u{431}\u{43B}\u{438}\u{437}\u{43D}\u{43E}|\u{43E}\u{440}\u{456}\u{454}\u{43D}\u{442}\u{43E}\u{432}\u{43D}\u{43E})\\s*(?:~\\s*)?)?(${n.TIME_UNITS_PATTERN})${n.REGEX_PARTS.rightBoundary}`;
class o extends i.AbstractParserWithWordBoundaryChecking {
    patternLeftBoundary() {
        return n.REGEX_PARTS.leftBoundary;
    }
    innerPattern(e) {
        return e.option.forwardDate
            ? RegExp(s, "i")
            : RegExp(
                  `(?:\u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{433}\u{43E}\u{43C}|\u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{437}\u{456}|\u{43F}\u{440}\u{43E}\u{442}\u{44F}\u{433}\u{43E}\u{43C}|\u{443}\u{43F}\u{440}\u{43E}\u{434}\u{43E}\u{432}\u{436}|\u{432}\u{43F}\u{440}\u{43E}\u{434}\u{43E}\u{432}\u{436})\\s*${s}`,
                  n.REGEX_PARTS.flags,
              );
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return a.ParsingComponents.createRelativeFromReference(e.reference, r);
    }
}
t.default = o;
