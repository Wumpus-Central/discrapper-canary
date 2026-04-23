r.r(t),
    r.d(t, {
        parseDate: () => k,
        casual: () => E,
        ReferenceWithTimezone: () => i.b5,
        strict: () => b,
        ParsingResult: () => i.s4,
        createCasualConfiguration: () => j,
        Weekday: () => o.Bw,
        hant: () => R,
        Chrono: () => a.u,
        Meridiem: () => o.FF,
        ParsingComponents: () => i.BP,
        createConfiguration: () => B,
        parse: () => A,
    });
var n = r(321287),
    s = r(132588),
    a = r(880683),
    i = r(374372),
    o = r(322811),
    l = r(355418);
class u extends l.c {
    innerPattern(e) {
        return RegExp(
            "(而家|立(?:刻|即)|即刻)|(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s|,|，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?",
            "i",
        );
    }
    innerExtract(e, t) {
        let r = t.index,
            n = e.createParsingResult(r, t[0]),
            s = e.refDate,
            a = new Date(s.getTime());
        if (t[1])
            n.start.imply("hour", s.getHours()),
                n.start.imply("minute", s.getMinutes()),
                n.start.imply("second", s.getSeconds()),
                n.start.imply("millisecond", s.getMilliseconds());
        else if (t[2]) {
            let e = t[2],
                r = t[3];
            "明" == e || "聽" == e
                ? s.getHours() > 1 && a.setDate(a.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? a.setDate(a.getDate() - 1)
                  : "前" == e
                    ? a.setDate(a.getDate() - 2)
                    : "大前" == e
                      ? a.setDate(a.getDate() - 3)
                      : "後" == e
                        ? a.setDate(a.getDate() + 2)
                        : "大後" == e && a.setDate(a.getDate() + 3),
                "早" == r || "朝" == r
                    ? n.start.imply("hour", 6)
                    : "晚" == r && (n.start.imply("hour", 22), n.start.imply("meridiem", 1));
        } else if (t[4]) {
            let e = t[4][0];
            "早" == e || "朝" == e || "上" == e
                ? n.start.imply("hour", 6)
                : "下" == e || "晏" == e
                  ? (n.start.imply("hour", 15), n.start.imply("meridiem", 1))
                  : "中" == e
                    ? (n.start.imply("hour", 12), n.start.imply("meridiem", 1))
                    : "夜" == e || "晚" == e
                      ? (n.start.imply("hour", 22), n.start.imply("meridiem", 1))
                      : "凌" == e && n.start.imply("hour", 0);
        } else if (t[5]) {
            let e = t[5];
            "明" == e || "聽" == e
                ? s.getHours() > 1 && a.setDate(a.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? a.setDate(a.getDate() - 1)
                  : "前" == e
                    ? a.setDate(a.getDate() - 2)
                    : "大前" == e
                      ? a.setDate(a.getDate() - 3)
                      : "後" == e
                        ? a.setDate(a.getDate() + 2)
                        : "大後" == e && a.setDate(a.getDate() + 3);
            let r = t[6];
            if (r) {
                let e = r[0];
                "早" == e || "朝" == e || "上" == e
                    ? n.start.imply("hour", 6)
                    : "下" == e || "晏" == e
                      ? (n.start.imply("hour", 15), n.start.imply("meridiem", 1))
                      : "中" == e
                        ? (n.start.imply("hour", 12), n.start.imply("meridiem", 1))
                        : "夜" == e || "晚" == e
                          ? (n.start.imply("hour", 22), n.start.imply("meridiem", 1))
                          : "凌" == e && n.start.imply("hour", 0);
            }
        }
        return (
            n.start.assign("day", a.getDate()),
            n.start.assign("month", a.getMonth() + 1),
            n.start.assign("year", a.getFullYear()),
            n
        );
    }
}
let m = { 零: 0, 一: 1, 二: 2, 兩: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10, 廿: 20, 卅: 30 },
    d = { 天: 0, 日: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };
function c(e) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
        let n = e[r];
        "十" === n ? (t = 0 === t ? m[n] : t * m[n]) : (t += m[n]);
    }
    return t;
}
class g extends l.c {
    innerPattern() {
        return RegExp(
            "(\\d{2,4}|[" +
                Object.keys(m).join("") +
                "]{4}|[" +
                Object.keys(m).join("") +
                "]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[" +
                Object.keys(m).join("") +
                "]{1,2})(?:\\s*)(?:月)(?:\\s*)(\\d{1,2}|[" +
                Object.keys(m).join("") +
                "]{1,2})?(?:\\s*)(?:日|號)?",
        );
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = parseInt(t[2]);
        if ((isNaN(n) && (n = c(t[2])), r.start.assign("month", n), t[3])) {
            let e = parseInt(t[3]);
            isNaN(e) && (e = c(t[3])), r.start.assign("day", e);
        } else r.start.imply("day", e.refDate.getDate());
        if (t[1]) {
            let e = parseInt(t[1]);
            isNaN(e) &&
                (e = (function (e) {
                    let t = "";
                    for (let r = 0; r < e.length; r++) t += m[e[r]];
                    return parseInt(t);
                })(t[1])),
                r.start.assign("year", e);
        } else r.start.imply("year", e.refDate.getFullYear());
        return r;
    }
}
var h = r(632434);
let f = RegExp(
    "(\\d+|[" +
        Object.keys(m).join("") +
        "]+|半|幾)(?:\\s*)(?:個)?(秒(?:鐘)?|分鐘|小時|鐘|日|天|星期|禮拜|月|年)(?:(?:之|過)?後|(?:之)?內)",
    "i",
);
class p extends l.c {
    innerPattern() {
        return f;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = parseInt(t[1]);
        if ((isNaN(n) && (n = c(t[1])), isNaN(n))) {
            let e = t[1];
            if ("幾" === e) n = 3;
            else {
                if ("半" !== e) return null;
                n = 0.5;
            }
        }
        let s = {},
            a = t[2][0];
        if (a.match(/[日天星禮月年]/)) {
            "日" == a || "天" == a
                ? (s.day = n)
                : "星" == a || "禮" == a
                  ? (s.week = n)
                  : "月" == a
                    ? (s.month = n)
                    : "年" == a && (s.year = n);
            let t = (0, h.Gw)(e.refDate, s);
            return (
                r.start.assign("year", t.getFullYear()),
                r.start.assign("month", t.getMonth() + 1),
                r.start.assign("day", t.getDate()),
                r
            );
        }
        "秒" == a ? (s.second = n) : "分" == a ? (s.minute = n) : ("小" == a || "鐘" == a) && (s.hour = n);
        let i = (0, h.Gw)(e.refDate, s);
        return (
            r.start.imply("year", i.getFullYear()),
            r.start.imply("month", i.getMonth() + 1),
            r.start.imply("day", i.getDate()),
            r.start.assign("hour", i.getHours()),
            r.start.assign("minute", i.getMinutes()),
            r.start.assign("second", i.getSeconds()),
            r
        );
    }
}
let y = RegExp("(?<prefix>上|今|下|這|呢)(?:個)?(?:星期|禮拜|週)(?<weekday>" + Object.keys(d).join("|") + ")");
class x extends l.c {
    innerPattern() {
        return y;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = d[t.groups.weekday];
        if (void 0 === n) return null;
        let s = null,
            a = t.groups.prefix;
        "上" == a ? (s = "last") : "下" == a ? (s = "next") : ("今" == a || "這" == a || "呢" == a) && (s = "this");
        let i = new Date(e.refDate.getTime()),
            o = !1,
            l = i.getDay();
        if ("last" == s || "past" == s) i.setDate(i.getDate() + (n - 7 - l)), (o = !0);
        else if ("next" == s) i.setDate(i.getDate() + (n + 7 - l)), (o = !0);
        else if ("this" == s) i.setDate(i.getDate() + (n - l));
        else {
            let e = n - l;
            Math.abs(e - 7) < Math.abs(e) && (e -= 7),
                Math.abs(e + 7) < Math.abs(e) && (e += 7),
                i.setDate(i.getDate() + e);
        }
        return (
            r.start.assign("weekday", n),
            o
                ? (r.start.assign("day", i.getDate()),
                  r.start.assign("month", i.getMonth() + 1),
                  r.start.assign("year", i.getFullYear()))
                : (r.start.imply("day", i.getDate()),
                  r.start.imply("month", i.getMonth() + 1),
                  r.start.imply("year", i.getFullYear())),
            r
        );
    }
}
let w = RegExp(
        "(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(m).join("") +
            "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(m).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" +
            Object.keys(m).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    D = RegExp(
        "(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" +
            Object.keys(m).join("") +
            "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(m).join("") +
            "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" +
            Object.keys(m).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    );
class P extends l.c {
    innerPattern() {
        return w;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let r = e.createParsingResult(t.index, t[0]),
            n = new Date(e.refDate.getTime());
        if (t[1]) {
            let s = t[1];
            "明" == s || "聽" == s
                ? e.refDate.getHours() > 1 && n.setDate(n.getDate() + 1)
                : "昨" == s || "尋" == s || "琴" == s
                  ? n.setDate(n.getDate() - 1)
                  : "前" == s
                    ? n.setDate(n.getDate() - 2)
                    : "大前" == s
                      ? n.setDate(n.getDate() - 3)
                      : "後" == s
                        ? n.setDate(n.getDate() + 2)
                        : "大後" == s && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else if (t[4]) {
            let e = t[4];
            "明" == e || "聽" == e
                ? n.setDate(n.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? n.setDate(n.getDate() - 1)
                  : "前" == e
                    ? n.setDate(n.getDate() - 2)
                    : "大前" == e
                      ? n.setDate(n.getDate() - 3)
                      : "後" == e
                        ? n.setDate(n.getDate() + 2)
                        : "大後" == e && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else
            r.start.imply("day", n.getDate()),
                r.start.imply("month", n.getMonth() + 1),
                r.start.imply("year", n.getFullYear());
        let s = 0,
            a = 0,
            i = -1;
        if (t[8]) {
            var o = parseInt(t[8]);
            if ((isNaN(o) && (o = c(t[8])), o >= 60)) return null;
            r.start.assign("second", o);
        }
        if (
            (isNaN((s = parseInt(t[6]))) && (s = c(t[6])),
            t[7]
                ? "半" == t[7]
                    ? (a = 30)
                    : "正" == t[7] || "整" == t[7]
                      ? (a = 0)
                      : isNaN((a = parseInt(t[7]))) && (a = c(t[7]))
                : s > 100 && ((a = s % 100), (s = Math.floor(s / 100))),
            a >= 60 || s > 24)
        )
            return null;
        if ((s >= 12 && (i = 1), t[9])) {
            if (s > 12) return null;
            var l = t[9][0].toLowerCase();
            "a" == l && ((i = 0), 12 == s && (s = 0)), "p" == l && ((i = 1), 12 != s && (s += 12));
        } else if (t[2]) {
            var u = t[2][0];
            "朝" == u || "早" == u ? ((i = 0), 12 == s && (s = 0)) : "晚" == u && ((i = 1), 12 != s && (s += 12));
        } else if (t[3]) {
            var m = t[3][0];
            "上" == m || "朝" == m || "早" == m || "凌" == m
                ? ((i = 0), 12 == s && (s = 0))
                : ("下" == m || "晏" == m || "晚" == m) && ((i = 1), 12 != s && (s += 12));
        } else if (t[5]) {
            var d = t[5][0];
            "上" == d || "朝" == d || "早" == d || "凌" == d
                ? ((i = 0), 12 == s && (s = 0))
                : ("下" == d || "晏" == d || "晚" == d) && ((i = 1), 12 != s && (s += 12));
        }
        r.start.assign("hour", s),
            r.start.assign("minute", a),
            i >= 0
                ? r.start.assign("meridiem", i)
                : s < 12
                  ? r.start.imply("meridiem", 0)
                  : r.start.imply("meridiem", 1);
        let g = D.exec(e.text.substring(r.index + r.text.length));
        if (!g) return r.text.match(/^\d+$/) ? null : r;
        let h = new Date(n.getTime());
        if (((r.end = e.createParsingComponents()), g[1])) {
            let t = g[1];
            "明" == t || "聽" == t
                ? e.refDate.getHours() > 1 && h.setDate(h.getDate() + 1)
                : "昨" == t || "尋" == t || "琴" == t
                  ? h.setDate(h.getDate() - 1)
                  : "前" == t
                    ? h.setDate(h.getDate() - 2)
                    : "大前" == t
                      ? h.setDate(h.getDate() - 3)
                      : "後" == t
                        ? h.setDate(h.getDate() + 2)
                        : "大後" == t && h.setDate(h.getDate() + 3),
                r.end.assign("day", h.getDate()),
                r.end.assign("month", h.getMonth() + 1),
                r.end.assign("year", h.getFullYear());
        } else if (g[4]) {
            let e = g[4];
            "明" == e || "聽" == e
                ? h.setDate(h.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? h.setDate(h.getDate() - 1)
                  : "前" == e
                    ? h.setDate(h.getDate() - 2)
                    : "大前" == e
                      ? h.setDate(h.getDate() - 3)
                      : "後" == e
                        ? h.setDate(h.getDate() + 2)
                        : "大後" == e && h.setDate(h.getDate() + 3),
                r.end.assign("day", h.getDate()),
                r.end.assign("month", h.getMonth() + 1),
                r.end.assign("year", h.getFullYear());
        } else
            r.end.imply("day", h.getDate()),
                r.end.imply("month", h.getMonth() + 1),
                r.end.imply("year", h.getFullYear());
        if (((s = 0), (a = 0), (i = -1), g[8])) {
            let e = parseInt(g[8]);
            if ((isNaN(e) && (e = c(g[8])), e >= 60)) return null;
            r.end.assign("second", e);
        }
        if (
            (isNaN((s = parseInt(g[6]))) && (s = c(g[6])),
            g[7]
                ? "半" == g[7]
                    ? (a = 30)
                    : "正" == g[7] || "整" == g[7]
                      ? (a = 0)
                      : isNaN((a = parseInt(g[7]))) && (a = c(g[7]))
                : s > 100 && ((a = s % 100), (s = Math.floor(s / 100))),
            a >= 60 || s > 24)
        )
            return null;
        if ((s >= 12 && (i = 1), g[9])) {
            if (s > 12) return null;
            var l = g[9][0].toLowerCase();
            "a" == l && ((i = 0), 12 == s && (s = 0)),
                "p" == l && ((i = 1), 12 != s && (s += 12)),
                r.start.isCertain("meridiem") ||
                    (0 == i
                        ? (r.start.imply("meridiem", 0), 12 == r.start.get("hour") && r.start.assign("hour", 0))
                        : (r.start.imply("meridiem", 1),
                          12 != r.start.get("hour") && r.start.assign("hour", r.start.get("hour") + 12)));
        } else if (g[2]) {
            var u = g[2][0];
            "朝" == u || "早" == u ? ((i = 0), 12 == s && (s = 0)) : "晚" == u && ((i = 1), 12 != s && (s += 12));
        } else if (g[3]) {
            var m = g[3][0];
            "上" == m || "朝" == m || "早" == m || "凌" == m
                ? ((i = 0), 12 == s && (s = 0))
                : ("下" == m || "晏" == m || "晚" == m) && ((i = 1), 12 != s && (s += 12));
        } else if (g[5]) {
            var d = g[5][0];
            "上" == d || "朝" == d || "早" == d || "凌" == d
                ? ((i = 0), 12 == s && (s = 0))
                : ("下" == d || "晏" == d || "晚" == d) && ((i = 1), 12 != s && (s += 12));
        }
        return (
            (r.text = r.text + g[0]),
            r.end.assign("hour", s),
            r.end.assign("minute", a),
            i >= 0
                ? r.end.assign("meridiem", i)
                : r.start.isCertain("meridiem") && 1 == r.start.get("meridiem") && r.start.get("hour") > s
                  ? r.end.imply("meridiem", 0)
                  : s > 12 && r.end.imply("meridiem", 1),
            r.end.date().getTime() < r.start.date().getTime() && r.end.imply("day", r.end.get("day") + 1),
            r
        );
    }
}
let F = RegExp("(?:星期|禮拜|週)(?<weekday>" + Object.keys(d).join("|") + ")");
class C extends l.c {
    innerPattern() {
        return F;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = d[t.groups.weekday];
        if (void 0 === n) return null;
        let s = new Date(e.refDate.getTime()),
            a = n - s.getDay();
        return (
            Math.abs(a - 7) < Math.abs(a) && (a -= 7),
            Math.abs(a + 7) < Math.abs(a) && (a += 7),
            s.setDate(s.getDate() + a),
            r.start.assign("weekday", n),
            r.start.imply("day", s.getDate()),
            r.start.imply("month", s.getMonth() + 1),
            r.start.imply("year", s.getFullYear()),
            r
        );
    }
}
var T = r(172609);
class v extends T.A {
    patternBetween() {
        return /^\s*(至|到|\-|\~|～|－|ー)\s*$/i;
    }
}
var M = r(230205);
class $ extends M.A {
    patternBetween() {
        return /^\s*$/i;
    }
}
let R = new a.u(j()),
    E = new a.u(j()),
    b = new a.u(B());
function A(e, t, r) {
    return E.parse(e, t, r);
}
function k(e, t, r) {
    return E.parseDate(e, t, r);
}
function j() {
    let e = B();
    return e.parsers.unshift(new u()), e;
}
function B() {
    let e = (0, s.i)({ parsers: [new g(), new x(), new C(), new P(), new p()], refiners: [new v(), new $()] });
    return (e.refiners = e.refiners.filter((e) => !(e instanceof n.A))), e;
}
