n.d(t, { Z: () => h });
var r = n(727916),
    i = n(151742);
let a = RegExp(
        "(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,\uFF0C]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(i.Wu).join("") +
            "]+)(?:\\s*)(?:點|時|:|\uFF1A)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(i.Wu).join("") +
            "]+)?(?:\\s*)(?:分|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(i.Wu).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    o = RegExp(
        "(?:^\\s*(?:到|至|\\-|\\\u2013|\\~|\\\u301C)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,\uFF0C]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(i.Wu).join("") +
            "]+)(?:\\s*)(?:點|時|:|\uFF1A)(?:\\s*)(\\d+|半|正|整|[" +
            Object.keys(i.Wu).join("") +
            "]+)?(?:\\s*)(?:分|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(i.Wu).join("") +
            "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    s = 1,
    l = 2,
    c = 3,
    u = 4,
    d = 5,
    f = 6,
    p = 7,
    _ = 8,
    m = 9;
class h extends r.Z {
    innerPattern() {
        return a;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let n = e.createParsingResult(t.index, t[0]),
            r = new Date(e.refDate.getTime());
        if (t[s]) {
            let i = t[s];
            "明" == i || "聽" == i
                ? e.refDate.getHours() > 1 && r.setDate(r.getDate() + 1)
                : "昨" == i || "尋" == i || "琴" == i
                  ? r.setDate(r.getDate() - 1)
                  : "前" == i
                    ? r.setDate(r.getDate() - 2)
                    : "大前" == i
                      ? r.setDate(r.getDate() - 3)
                      : "後" == i
                        ? r.setDate(r.getDate() + 2)
                        : "大後" == i && r.setDate(r.getDate() + 3),
                n.start.assign("day", r.getDate()),
                n.start.assign("month", r.getMonth() + 1),
                n.start.assign("year", r.getFullYear());
        } else if (t[u]) {
            let e = t[u];
            "明" == e || "聽" == e
                ? r.setDate(r.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? r.setDate(r.getDate() - 1)
                  : "前" == e
                    ? r.setDate(r.getDate() - 2)
                    : "大前" == e
                      ? r.setDate(r.getDate() - 3)
                      : "後" == e
                        ? r.setDate(r.getDate() + 2)
                        : "大後" == e && r.setDate(r.getDate() + 3),
                n.start.assign("day", r.getDate()),
                n.start.assign("month", r.getMonth() + 1),
                n.start.assign("year", r.getFullYear());
        } else
            n.start.imply("day", r.getDate()),
                n.start.imply("month", r.getMonth() + 1),
                n.start.imply("year", r.getFullYear());
        let a = 0,
            h = 0,
            g = -1;
        if (t[_]) {
            var E = parseInt(t[_]);
            if ((isNaN(E) && (E = (0, i.zU)(t[_])), E >= 60)) return null;
            n.start.assign("second", E);
        }
        if (
            (isNaN((a = parseInt(t[f]))) && (a = (0, i.zU)(t[f])),
            t[p]
                ? "半" == t[p]
                    ? (h = 30)
                    : "正" == t[p] || "整" == t[p]
                      ? (h = 0)
                      : isNaN((h = parseInt(t[p]))) && (h = (0, i.zU)(t[p]))
                : a > 100 && ((h = a % 100), (a = Math.floor(a / 100))),
            h >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), t[m])) {
            if (a > 12) return null;
            var b = t[m][0].toLowerCase();
            "a" == b && ((g = 0), 12 == a && (a = 0)), "p" == b && ((g = 1), 12 != a && (a += 12));
        } else if (t[l]) {
            var y = t[l][0];
            "朝" == y || "早" == y ? ((g = 0), 12 == a && (a = 0)) : "晚" == y && ((g = 1), 12 != a && (a += 12));
        } else if (t[c]) {
            var O = t[c][0];
            "上" == O || "朝" == O || "早" == O || "凌" == O
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == O || "晏" == O || "晚" == O) && ((g = 1), 12 != a && (a += 12));
        } else if (t[d]) {
            var v = t[d][0];
            "上" == v || "朝" == v || "早" == v || "凌" == v
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == v || "晏" == v || "晚" == v) && ((g = 1), 12 != a && (a += 12));
        }
        n.start.assign("hour", a),
            n.start.assign("minute", h),
            g >= 0
                ? n.start.assign("meridiem", g)
                : a < 12
                  ? n.start.imply("meridiem", 0)
                  : n.start.imply("meridiem", 1);
        let S = o.exec(e.text.substring(n.index + n.text.length));
        if (!S) return n.text.match(/^\d+$/) ? null : n;
        let I = new Date(r.getTime());
        if (((n.end = e.createParsingComponents()), S[s])) {
            let t = S[s];
            "明" == t || "聽" == t
                ? e.refDate.getHours() > 1 && I.setDate(I.getDate() + 1)
                : "昨" == t || "尋" == t || "琴" == t
                  ? I.setDate(I.getDate() - 1)
                  : "前" == t
                    ? I.setDate(I.getDate() - 2)
                    : "大前" == t
                      ? I.setDate(I.getDate() - 3)
                      : "後" == t
                        ? I.setDate(I.getDate() + 2)
                        : "大後" == t && I.setDate(I.getDate() + 3),
                n.end.assign("day", I.getDate()),
                n.end.assign("month", I.getMonth() + 1),
                n.end.assign("year", I.getFullYear());
        } else if (S[u]) {
            let e = S[u];
            "明" == e || "聽" == e
                ? I.setDate(I.getDate() + 1)
                : "昨" == e || "尋" == e || "琴" == e
                  ? I.setDate(I.getDate() - 1)
                  : "前" == e
                    ? I.setDate(I.getDate() - 2)
                    : "大前" == e
                      ? I.setDate(I.getDate() - 3)
                      : "後" == e
                        ? I.setDate(I.getDate() + 2)
                        : "大後" == e && I.setDate(I.getDate() + 3),
                n.end.assign("day", I.getDate()),
                n.end.assign("month", I.getMonth() + 1),
                n.end.assign("year", I.getFullYear());
        } else
            n.end.imply("day", I.getDate()),
                n.end.imply("month", I.getMonth() + 1),
                n.end.imply("year", I.getFullYear());
        if (((a = 0), (h = 0), (g = -1), S[_])) {
            let e = parseInt(S[_]);
            if ((isNaN(e) && (e = (0, i.zU)(S[_])), e >= 60)) return null;
            n.end.assign("second", e);
        }
        if (
            (isNaN((a = parseInt(S[f]))) && (a = (0, i.zU)(S[f])),
            S[p]
                ? "半" == S[p]
                    ? (h = 30)
                    : "正" == S[p] || "整" == S[p]
                      ? (h = 0)
                      : isNaN((h = parseInt(S[p]))) && (h = (0, i.zU)(S[p]))
                : a > 100 && ((h = a % 100), (a = Math.floor(a / 100))),
            h >= 60 || a > 24)
        )
            return null;
        if ((a >= 12 && (g = 1), S[m])) {
            if (a > 12) return null;
            var b = S[m][0].toLowerCase();
            "a" == b && ((g = 0), 12 == a && (a = 0)),
                "p" == b && ((g = 1), 12 != a && (a += 12)),
                n.start.isCertain("meridiem") ||
                    (0 == g
                        ? (n.start.imply("meridiem", 0), 12 == n.start.get("hour") && n.start.assign("hour", 0))
                        : (n.start.imply("meridiem", 1),
                          12 != n.start.get("hour") && n.start.assign("hour", n.start.get("hour") + 12)));
        } else if (S[l]) {
            var y = S[l][0];
            "朝" == y || "早" == y ? ((g = 0), 12 == a && (a = 0)) : "晚" == y && ((g = 1), 12 != a && (a += 12));
        } else if (S[c]) {
            var O = S[c][0];
            "上" == O || "朝" == O || "早" == O || "凌" == O
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == O || "晏" == O || "晚" == O) && ((g = 1), 12 != a && (a += 12));
        } else if (S[d]) {
            var v = S[d][0];
            "上" == v || "朝" == v || "早" == v || "凌" == v
                ? ((g = 0), 12 == a && (a = 0))
                : ("下" == v || "晏" == v || "晚" == v) && ((g = 1), 12 != a && (a += 12));
        }
        return (
            (n.text = n.text + S[0]),
            n.end.assign("hour", a),
            n.end.assign("minute", h),
            g >= 0
                ? n.end.assign("meridiem", g)
                : n.start.isCertain("meridiem") && 1 == n.start.get("meridiem") && n.start.get("hour") > a
                  ? n.end.imply("meridiem", 0)
                  : a > 12 && n.end.imply("meridiem", 1),
            n.end.date().getTime() < n.start.date().getTime() && n.end.imply("day", n.end.get("day") + 1),
            n
        );
    }
}
