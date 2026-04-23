r.d(t, { A: () => o });
var n = r(355418),
    s = r(632434),
    a = r(11947);
let i = RegExp(
    "(\\d+|[" +
        Object.keys(a.uk).join("") +
        "]+|半|几)(?:\\s*)(?:个)?(秒(?:钟)?|分钟|小时|钟|日|天|星期|礼拜|月|年)(?:(?:之|过)?后|(?:之)?内)",
    "i",
);
class o extends n.c {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = parseInt(t[1]);
        if ((isNaN(n) && (n = (0, a.CT)(t[1])), isNaN(n))) {
            let e = t[1];
            if ("几" === e) n = 3;
            else {
                if ("半" !== e) return null;
                n = 0.5;
            }
        }
        let i = {},
            o = t[2][0];
        if (o.match(/[日天星礼月年]/)) {
            "日" == o || "天" == o
                ? (i.day = n)
                : "星" == o || "礼" == o
                  ? (i.week = n)
                  : "月" == o
                    ? (i.month = n)
                    : "年" == o && (i.year = n);
            let t = (0, s.Gw)(e.refDate, i);
            return (
                r.start.assign("year", t.getFullYear()),
                r.start.assign("month", t.getMonth() + 1),
                r.start.assign("day", t.getDate()),
                r
            );
        }
        "秒" == o ? (i.second = n) : "分" == o ? (i.minute = n) : ("小" == o || "钟" == o) && (i.hour = n);
        let l = (0, s.Gw)(e.refDate, i);
        return (
            r.start.imply("year", l.getFullYear()),
            r.start.imply("month", l.getMonth() + 1),
            r.start.imply("day", l.getDate()),
            r.start.assign("hour", l.getHours()),
            r.start.assign("minute", l.getMinutes()),
            r.start.assign("second", l.getSeconds()),
            r
        );
    }
}
