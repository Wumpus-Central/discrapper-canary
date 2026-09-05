Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(474726),
    a = r(574253),
    i = r(798401),
    s = r(474726),
    o = r(389766),
    u = RegExp(
        `((?:in)\\s*)?(${(0, i.matchAnyPattern)(n.MONTH_DICTIONARY)})\\s*(?:[,-]?\\s*(${s.YEAR_PATTERN})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`,
        "i",
    );
class l extends o.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return u;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !n.FULL_MONTH_NAME_DICTIONARY[r]) return null;
        let i = e.createParsingResult(t.index + (t[1] || "").length, t.index + t[0].length);
        i.start.imply("day", 1);
        let o = n.MONTH_DICTIONARY[r];
        if ((i.start.assign("month", o), t[3])) {
            let e = (0, s.parseYear)(t[3]);
            i.start.assign("year", e);
        } else {
            let t = (0, a.findYearClosestToRef)(e.refDate, 1, o);
            i.start.imply("year", t);
        }
        return i;
    }
}
t.default = l;
