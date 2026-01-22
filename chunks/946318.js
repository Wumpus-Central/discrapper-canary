n.d(t, {
    A: () => s,
});
var r = n(355418),
    i = n(11947);
let a = RegExp("(?<prefix>上|下|这)(?:个)?(?:星期|礼拜|周)(?<weekday>" + Object.keys(i.tS).join("|") + ")");
class s extends r.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            r = t.groups.weekday,
            a = i.tS[r];
        if (void 0 === a) return null;
        let s = null,
            o = t.groups.prefix;
        "上" == o ? (s = "last") : "下" == o ? (s = "next") : "这" == o && (s = "this");
        let l = new Date(e.refDate.getTime()),
            c = !1,
            u = l.getDay();
        if ("last" == s || "past" == s) l.setDate(l.getDate() + (a - 7 - u)), (c = !0);
        else if ("next" == s) l.setDate(l.getDate() + (a + 7 - u)), (c = !0);
        else if ("this" == s) l.setDate(l.getDate() + (a - u));
        else {
            let e = a - u;
            Math.abs(e - 7) < Math.abs(e) && (e -= 7),
                Math.abs(e + 7) < Math.abs(e) && (e += 7),
                l.setDate(l.getDate() + e);
        }
        return (
            n.start.assign("weekday", a),
            c
                ? (n.start.assign("day", l.getDate()),
                  n.start.assign("month", l.getMonth() + 1),
                  n.start.assign("year", l.getFullYear()))
                : (n.start.imply("day", l.getDate()),
                  n.start.imply("month", l.getMonth() + 1),
                  n.start.imply("year", l.getFullYear())),
            n
        );
    }
}
