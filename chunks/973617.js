"use strict";
n.d(t, { A: () => u });
var r = n(355418),
    i = n(632434),
    a = n(725198);
let s = RegExp(
        "(\\d+|[" +
            Object.keys(a.uk).join("") +
            "]+|半|幾)(?:\\s*)(?:個)?(秒(?:鐘)?|分鐘|小時|鐘|日|天|星期|禮拜|月|年)(?:(?:之|過)?後|(?:之)?內)",
        "i",
    ),
    o = 1,
    l = 2;
class u extends r.c {
    innerPattern() {
        return s;
    }
    innerExtract(e, t) {
        let n = e.createParsingResult(t.index, t[0]),
            r = parseInt(t[o]);
        if ((isNaN(r) && (r = (0, a.CT)(t[o])), isNaN(r))) {
            let e = t[o];
            if ("幾" === e) r = 3;
            else {
                if ("半" !== e) return null;
                r = 0.5;
            }
        }
        let s = {},
            u = t[l][0];
        if (u.match(/[日天星禮月年]/)) {
            "日" == u || "天" == u
                ? (s.day = r)
                : "星" == u || "禮" == u
                  ? (s.week = r)
                  : "月" == u
                    ? (s.month = r)
                    : "年" == u && (s.year = r);
            let t = (0, i.Gw)(e.refDate, s);
            return (
                n.start.assign("year", t.getFullYear()),
                n.start.assign("month", t.getMonth() + 1),
                n.start.assign("day", t.getDate()),
                n
            );
        }
        "秒" == u ? (s.second = r) : "分" == u ? (s.minute = r) : ("小" == u || "鐘" == u) && (s.hour = r);
        let c = (0, i.Gw)(e.refDate, s);
        return (
            n.start.imply("year", c.getFullYear()),
            n.start.imply("month", c.getMonth() + 1),
            n.start.imply("day", c.getDate()),
            n.start.assign("hour", c.getHours()),
            n.start.assign("minute", c.getMinutes()),
            n.start.assign("second", c.getSeconds()),
            n
        );
    }
}
