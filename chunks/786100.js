Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(167385),
    a = r(249869),
    i = RegExp(
        "(?:\u7531|\u5F9E|\u81EA)?(?:(\u4ECA|\u660E|\u524D|\u5927\u524D|\u5F8C|\u5927\u5F8C|\u807D|\u6628|\u5C0B|\u7434)(\u65E9|\u671D|\u665A)|(\u4E0A(?:\u5348|\u665D)|\u671D(?:\u65E9)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348|\u665D)|\u664F(?:\u665D)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u5F8C|\u5927\u5F8C|\u807D|\u6628|\u5C0B|\u7434)(?:\u65E5|\u5929)(?:[\\s,\uFF0C]*)(?:(\u4E0A(?:\u5348|\u665D)|\u671D(?:\u65E9)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348|\u665D)|\u664F(?:\u665D)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)(?:\\s*)(?:\u9EDE|\u6642|:|\uFF1A)(?:\\s*)(\\d+|\u534A|\u6B63|\u6574|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    s = RegExp(
        "(?:^\\s*(?:\u5230|\u81F3|\\-|\\\u2013|\\~|\\\u301C)\\s*)(?:(\u4ECA|\u660E|\u524D|\u5927\u524D|\u5F8C|\u5927\u5F8C|\u807D|\u6628|\u5C0B|\u7434)(\u65E9|\u671D|\u665A)|(\u4E0A(?:\u5348|\u665D)|\u671D(?:\u65E9)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348|\u665D)|\u664F(?:\u665D)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u5F8C|\u5927\u5F8C|\u807D|\u6628|\u5C0B|\u7434)(?:\u65E5|\u5929)(?:[\\s,\uFF0C]*)(?:(\u4E0A(?:\u5348|\u665D)|\u671D(?:\u65E9)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348|\u665D)|\u664F(?:\u665D)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)(?:\\s*)(?:\u9EDE|\u6642|:|\uFF1A)(?:\\s*)(\\d+|\u534A|\u6B63|\u6574|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    );
class o extends n.AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return i;
    }
    innerExtract(e, t) {
        if (t.index > 0 && e.text[t.index - 1].match(/\w/)) return null;
        let r = e.createParsingResult(t.index, t[0]),
            n = new Date(e.refDate.getTime());
        if (t[1]) {
            let a = t[1];
            "\u660E" == a || "\u807D" == a
                ? e.refDate.getHours() > 1 && n.setDate(n.getDate() + 1)
                : "\u6628" == a || "\u5C0B" == a || "\u7434" == a
                  ? n.setDate(n.getDate() - 1)
                  : "\u524D" == a
                    ? n.setDate(n.getDate() - 2)
                    : "\u5927\u524D" == a
                      ? n.setDate(n.getDate() - 3)
                      : "\u5F8C" == a
                        ? n.setDate(n.getDate() + 2)
                        : "\u5927\u5F8C" == a && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else if (t[4]) {
            let e = t[4];
            "\u660E" == e || "\u807D" == e
                ? n.setDate(n.getDate() + 1)
                : "\u6628" == e || "\u5C0B" == e || "\u7434" == e
                  ? n.setDate(n.getDate() - 1)
                  : "\u524D" == e
                    ? n.setDate(n.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? n.setDate(n.getDate() - 3)
                      : "\u5F8C" == e
                        ? n.setDate(n.getDate() + 2)
                        : "\u5927\u5F8C" == e && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else
            r.start.imply("day", n.getDate()),
                r.start.imply("month", n.getMonth() + 1),
                r.start.imply("year", n.getFullYear());
        let i = 0,
            o = 0,
            u = -1;
        if (t[8]) {
            var l = parseInt(t[8]);
            if ((isNaN(l) && (l = (0, a.zhStringToNumber)(t[8])), l >= 60)) return null;
            r.start.assign("second", l);
        }
        if (
            (isNaN((i = parseInt(t[6]))) && (i = (0, a.zhStringToNumber)(t[6])),
            t[7]
                ? "\u534A" == t[7]
                    ? (o = 30)
                    : "\u6B63" == t[7] || "\u6574" == t[7]
                      ? (o = 0)
                      : isNaN((o = parseInt(t[7]))) && (o = (0, a.zhStringToNumber)(t[7]))
                : i > 100 && ((o = i % 100), (i = Math.floor(i / 100))),
            o >= 60 || i > 24)
        )
            return null;
        if ((i >= 12 && (u = 1), t[9])) {
            if (i > 12) return null;
            var d = t[9][0].toLowerCase();
            "a" == d && ((u = 0), 12 == i && (i = 0)), "p" == d && ((u = 1), 12 != i && (i += 12));
        } else if (t[2]) {
            var c = t[2][0];
            "\u671D" == c || "\u65E9" == c
                ? ((u = 0), 12 == i && (i = 0))
                : "\u665A" == c && ((u = 1), 12 != i && (i += 12));
        } else if (t[3]) {
            var m = t[3][0];
            "\u4E0A" == m || "\u671D" == m || "\u65E9" == m || "\u51CC" == m
                ? ((u = 0), 12 == i && (i = 0))
                : ("\u4E0B" == m || "\u664F" == m || "\u665A" == m) && ((u = 1), 12 != i && (i += 12));
        } else if (t[5]) {
            var f = t[5][0];
            "\u4E0A" == f || "\u671D" == f || "\u65E9" == f || "\u51CC" == f
                ? ((u = 0), 12 == i && (i = 0))
                : ("\u4E0B" == f || "\u664F" == f || "\u665A" == f) && ((u = 1), 12 != i && (i += 12));
        }
        r.start.assign("hour", i),
            r.start.assign("minute", o),
            u >= 0
                ? r.start.assign("meridiem", u)
                : i < 12
                  ? r.start.imply("meridiem", 0)
                  : r.start.imply("meridiem", 1);
        let g = s.exec(e.text.substring(r.index + r.text.length));
        if (!g) return r.text.match(/^\d+$/) ? null : r;
        let h = new Date(n.getTime());
        if (((r.end = e.createParsingComponents()), g[1])) {
            let t = g[1];
            "\u660E" == t || "\u807D" == t
                ? e.refDate.getHours() > 1 && h.setDate(h.getDate() + 1)
                : "\u6628" == t || "\u5C0B" == t || "\u7434" == t
                  ? h.setDate(h.getDate() - 1)
                  : "\u524D" == t
                    ? h.setDate(h.getDate() - 2)
                    : "\u5927\u524D" == t
                      ? h.setDate(h.getDate() - 3)
                      : "\u5F8C" == t
                        ? h.setDate(h.getDate() + 2)
                        : "\u5927\u5F8C" == t && h.setDate(h.getDate() + 3),
                r.end.assign("day", h.getDate()),
                r.end.assign("month", h.getMonth() + 1),
                r.end.assign("year", h.getFullYear());
        } else if (g[4]) {
            let e = g[4];
            "\u660E" == e || "\u807D" == e
                ? h.setDate(h.getDate() + 1)
                : "\u6628" == e || "\u5C0B" == e || "\u7434" == e
                  ? h.setDate(h.getDate() - 1)
                  : "\u524D" == e
                    ? h.setDate(h.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? h.setDate(h.getDate() - 3)
                      : "\u5F8C" == e
                        ? h.setDate(h.getDate() + 2)
                        : "\u5927\u5F8C" == e && h.setDate(h.getDate() + 3),
                r.end.assign("day", h.getDate()),
                r.end.assign("month", h.getMonth() + 1),
                r.end.assign("year", h.getFullYear());
        } else
            r.end.imply("day", h.getDate()),
                r.end.imply("month", h.getMonth() + 1),
                r.end.imply("year", h.getFullYear());
        if (((i = 0), (o = 0), (u = -1), g[8])) {
            let e = parseInt(g[8]);
            if ((isNaN(e) && (e = (0, a.zhStringToNumber)(g[8])), e >= 60)) return null;
            r.end.assign("second", e);
        }
        if (
            (isNaN((i = parseInt(g[6]))) && (i = (0, a.zhStringToNumber)(g[6])),
            g[7]
                ? "\u534A" == g[7]
                    ? (o = 30)
                    : "\u6B63" == g[7] || "\u6574" == g[7]
                      ? (o = 0)
                      : isNaN((o = parseInt(g[7]))) && (o = (0, a.zhStringToNumber)(g[7]))
                : i > 100 && ((o = i % 100), (i = Math.floor(i / 100))),
            o >= 60 || i > 24)
        )
            return null;
        if ((i >= 12 && (u = 1), g[9])) {
            if (i > 12) return null;
            var d = g[9][0].toLowerCase();
            "a" == d && ((u = 0), 12 == i && (i = 0)),
                "p" == d && ((u = 1), 12 != i && (i += 12)),
                r.start.isCertain("meridiem") ||
                    (0 == u
                        ? (r.start.imply("meridiem", 0), 12 == r.start.get("hour") && r.start.assign("hour", 0))
                        : (r.start.imply("meridiem", 1),
                          12 != r.start.get("hour") && r.start.assign("hour", r.start.get("hour") + 12)));
        } else if (g[2]) {
            var c = g[2][0];
            "\u671D" == c || "\u65E9" == c
                ? ((u = 0), 12 == i && (i = 0))
                : "\u665A" == c && ((u = 1), 12 != i && (i += 12));
        } else if (g[3]) {
            var m = g[3][0];
            "\u4E0A" == m || "\u671D" == m || "\u65E9" == m || "\u51CC" == m
                ? ((u = 0), 12 == i && (i = 0))
                : ("\u4E0B" == m || "\u664F" == m || "\u665A" == m) && ((u = 1), 12 != i && (i += 12));
        } else if (g[5]) {
            var f = g[5][0];
            "\u4E0A" == f || "\u671D" == f || "\u65E9" == f || "\u51CC" == f
                ? ((u = 0), 12 == i && (i = 0))
                : ("\u4E0B" == f || "\u664F" == f || "\u665A" == f) && ((u = 1), 12 != i && (i += 12));
        }
        return (
            (r.text = r.text + g[0]),
            r.end.assign("hour", i),
            r.end.assign("minute", o),
            u >= 0
                ? r.end.assign("meridiem", u)
                : r.start.isCertain("meridiem") && 1 == r.start.get("meridiem") && r.start.get("hour") > i
                  ? r.end.imply("meridiem", 0)
                  : i > 12 && r.end.imply("meridiem", 1),
            r.end.date().getTime() < r.start.date().getTime() && r.end.imply("day", r.end.get("day") + 1),
            r
        );
    }
}
t.default = o;
