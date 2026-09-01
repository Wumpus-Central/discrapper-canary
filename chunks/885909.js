Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(579782),
    a = r(115835),
    i = r(414533),
    s = r(628403);
class o extends i.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return `(\u{44D}\u{442}\u{438}|\u{43F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{438}\u{435}|\u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{44B}\u{435}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{438}\u{435}|\u{43F}\u{43E}\u{441}\u{43B}\u{435}|\u{441}\u{43F}\u{443}\u{441}\u{442}\u{44F}|\u{447}\u{435}\u{440}\u{435}\u{437}|\\+|-)\\s*(${n.TIME_UNITS_PATTERN})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            i = (0, n.parseDuration)(t[2]);
        switch (r) {
            case "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435":
            case "\u043F\u0440\u043E\u0448\u043B\u044B\u0435":
            case "-":
                i = (0, s.reverseDuration)(i);
        }
        return a.ParsingComponents.createRelativeFromReference(e.reference, i);
    }
}
t.default = o;
