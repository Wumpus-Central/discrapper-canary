Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(115004),
    a = r(167385),
    i = r(767130);
class s extends a.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            a = e.createParsingComponents();
        switch (
            ("deze" === t[1] &&
                (a.assign("day", e.refDate.getDate()),
                a.assign("month", e.refDate.getMonth() + 1),
                a.assign("year", e.refDate.getFullYear())),
            t[2].toLowerCase())
        ) {
            case "namiddag":
            case "'s namiddags":
                a.imply("meridiem", n.Meridiem.PM), a.imply("hour", 15);
                break;
            case "avond":
            case "'s avonds'":
                a.imply("meridiem", n.Meridiem.PM), a.imply("hour", 20);
                break;
            case "middernacht":
                let s = new Date(r.getTime());
                s.setDate(s.getDate() + 1),
                    (0, i.assignSimilarDate)(a, s),
                    (0, i.implySimilarTime)(a, s),
                    a.imply("hour", 0),
                    a.imply("minute", 0),
                    a.imply("second", 0);
                break;
            case "ochtend":
            case "'s ochtends":
                a.imply("meridiem", n.Meridiem.AM), a.imply("hour", 6);
                break;
            case "middag":
            case "'s middags":
                a.imply("meridiem", n.Meridiem.AM), a.imply("hour", 12);
        }
        return a;
    }
}
t.default = s;
