Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(474726),
    a = r(115835),
    i = r(167385),
    s = RegExp(
        `(${n.TIME_UNITS_PATTERN})\\s{0,5}(?:dopo|pi\xf9 tardi|da adesso|avanti|oltre|a seguire)(?=(?:\\W|$))`,
        "i",
    ),
    o = RegExp("(" + n.TIME_UNITS_PATTERN + ")(dopo|pi\xf9 tardi)(?=(?:\\W|$))", "i");
class u extends i.AbstractParserWithWordBoundaryChecking {
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? o : s;
    }
    innerExtract(e, t) {
        let r = (0, n.parseDuration)(t[1]);
        return a.ParsingComponents.createRelativeFromReference(e.reference, r);
    }
}
t.default = u;
