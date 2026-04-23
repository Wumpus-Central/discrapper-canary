r.d(t, { A: () => i });
var n = r(355418),
    s = r(725198);
let a = RegExp("(?:星期|禮拜|週)(?<weekday>" + Object.keys(s.tS).join("|") + ")");
class i extends n.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = t.groups.weekday,
            a = s.tS[n];
        if (void 0 === a) return null;
        let i = new Date(e.refDate.getTime()),
            o = a - i.getDay();
        return (
            Math.abs(o - 7) < Math.abs(o) && (o -= 7),
            Math.abs(o + 7) < Math.abs(o) && (o += 7),
            i.setDate(i.getDate() + o),
            r.start.assign("weekday", a),
            r.start.imply("day", i.getDate()),
            r.start.imply("month", i.getMonth() + 1),
            r.start.imply("year", i.getFullYear()),
            r
        );
    }
}
