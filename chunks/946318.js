r.d(t, { A: () => i });
var n = r(355418),
    s = r(11947);
let a = RegExp("(?<prefix>上|下|这)(?:个)?(?:星期|礼拜|周)(?<weekday>" + Object.keys(s.tS).join("|") + ")");
class i extends n.c {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = t.groups.weekday,
            a = s.tS[n];
        if (void 0 === a) return null;
        let i = null,
            o = t.groups.prefix;
        "上" == o ? (i = "last") : "下" == o ? (i = "next") : "这" == o && (i = "this");
        let l = new Date(e.refDate.getTime()),
            u = !1,
            d = l.getDay();
        if ("last" == i || "past" == i) l.setDate(l.getDate() + (a - 7 - d)), (u = !0);
        else if ("next" == i) l.setDate(l.getDate() + (a + 7 - d)), (u = !0);
        else if ("this" == i) l.setDate(l.getDate() + (a - d));
        else {
            let e = a - d;
            Math.abs(e - 7) < Math.abs(e) && (e -= 7),
                Math.abs(e + 7) < Math.abs(e) && (e += 7),
                l.setDate(l.getDate() + e);
        }
        return (
            r.start.assign("weekday", a),
            u
                ? (r.start.assign("day", l.getDate()),
                  r.start.assign("month", l.getMonth() + 1),
                  r.start.assign("year", l.getFullYear()))
                : (r.start.imply("day", l.getDate()),
                  r.start.imply("month", l.getMonth() + 1),
                  r.start.imply("year", l.getFullYear())),
            r
        );
    }
}
