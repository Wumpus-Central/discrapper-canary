Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(579782),
    a = r(798401),
    i = r(855616),
    s = r(414533);
class o extends s.AbstractParserWithLeftRightBoundaryChecking {
    innerPatternString(e) {
        return `(?:(?:,|\\(|\u{FF08})\\s*)?(?:\u{432}\\s*?)?(?:(\u{44D}\u{442}\u{443}|\u{44D}\u{442}\u{43E}\u{442}|\u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{44B}\u{439}|\u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{443}\u{44E}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{438}\u{439}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{443}\u{44E}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{435}\u{433}\u{43E})\\s*)?(${(0, a.matchAnyPattern)(n.WEEKDAY_DICTIONARY)})(?:\\s*(?:,|\\)|\u{FF09}))?(?:\\s*\u{43D}\u{430}\\s*(\u{44D}\u{442}\u{43E}\u{439}|\u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{43E}\u{439}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{435}\u{439})\\s*\u{43D}\u{435}\u{434}\u{435}\u{43B}\u{435})?`;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase(),
            a = n.WEEKDAY_DICTIONARY[r],
            s = t[1],
            o = t[3],
            u = s || o;
        u = (u = u || "").toLowerCase();
        let l = null;
        return (
            "\u043F\u0440\u043E\u0448\u043B\u044B\u0439" == u ||
            "\u043F\u0440\u043E\u0448\u043B\u0443\u044E" == u ||
            "\u043F\u0440\u043E\u0448\u043B\u043E\u0439" == u
                ? (l = "last")
                : "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439" == u ||
                    "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E" == u ||
                    "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439" == u ||
                    "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E" == u
                  ? (l = "next")
                  : ("\u044D\u0442\u043E\u0442" == u || "\u044D\u0442\u0443" == u || "\u044D\u0442\u043E\u0439" == u) &&
                    (l = "this"),
            (0, i.createParsingComponentsAtWeekday)(e.reference, a, l)
        );
    }
}
t.default = o;
