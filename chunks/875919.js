n.d(t, {
    A: () => c,
});
var r = n(355418),
    i = n(632434),
    a = n(11947);
let s = RegExp(
        "(\\d+|[" +
            Object.keys(a.uk).join("") +
            "]+|半|几)(?:\\s*)(?:个)?(秒(?:钟)?|分钟|小时|钟|日|天|星期|礼拜|月|年)(?:(?:之|过)?后|(?:之)?内)",
        "i",
    ),
    o = 1,
    l = 2;
class c extends r.c {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            r = parseInt(t[o]);
        if ((isNaN(r) && (r = (0, a.CT)(t[o])), isNaN(r))) {
            let e = t[o];
            if ("几" === e) r = 3;
            else {
                if ("半" !== e) return null;
                r = 0.5;
            }
        }
        let s = {},
            c = t[l][0];
        if (c.match(/[日天星礼月年]/)) {
            "日" == c || "天" == c
                ? (s.day = r)
                : "星" == c || "礼" == c
                  ? (s.week = r)
                  : "月" == c
                    ? (s.month = r)
                    : "年" == c && (s.year = r);
            let t = (0, i.Gw)(e.refDate, s);
            return (
                n.start.assign("year", t.getFullYear()),
                n.start.assign("month", t.getMonth() + 1),
                n.start.assign("day", t.getDate()),
                n
            );
        }
        "秒" == c ? (s.second = r) : "分" == c ? (s.minute = r) : ("小" == c || "钟" == c) && (s.hour = r);
        let u = (0, i.Gw)(e.refDate, s);
        return (
            n.start.imply("year", u.getFullYear()),
            n.start.imply("month", u.getMonth() + 1),
            n.start.imply("day", u.getDate()),
            n.start.assign("hour", u.getHours()),
            n.start.assign("minute", u.getMinutes()),
            n.start.assign("second", u.getSeconds()),
            n
        );
    }
}
