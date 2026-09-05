Object.defineProperty(t, "__esModule", { value: !0 });
let n = r(389766),
    a = r(801092),
    i = RegExp(
        "(?:\u4ECE|\u81EA)?(?:(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(\u65E9|\u671D|\u665A)|(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(?:\u65E5|\u5929)(?:[\\s,\uFF0C]*)(?:(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)(?:\\s*)(?:\u70B9|\u65F6|:|\uFF1A)(?:\\s*)(\\d+|\u534A|\u6B63|\u6574|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u5206|:|\uFF1A)?(?:\\s*)(\\d+|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)?(?:\\s*)(?:\u79D2)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?",
        "i",
    ),
    s = RegExp(
        "(?:^\\s*(?:\u5230|\u81F3|\\-|\\\u2013|\\~|\\\u301C)\\s*)(?:(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(\u65E9|\u671D|\u665A)|(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668))|(\u4ECA|\u660E|\u524D|\u5927\u524D|\u540E|\u5927\u540E|\u6628)(?:\u65E5|\u5929)(?:[\\s,\uFF0C]*)(?:(\u4E0A(?:\u5348)|\u65E9(?:\u4E0A)|\u4E0B(?:\u5348)|\u665A(?:\u4E0A)|\u591C(?:\u665A)?|\u4E2D(?:\u5348)|\u51CC(?:\u6668)))?)?(?:[\\s,\uFF0C]*)(?:(\\d+|[" +
            Object.keys(a.NUMBER).join("") +
            "]+)(?:\\s*)(?:\u70B9|\u65F6|:|\uFF1A)(?:\\s*)(\\d+|\u534A|\u6B63|\u6574|[" +
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
            "\u660E" == a
                ? e.refDate.getHours() > 1 && n.setDate(n.getDate() + 1)
                : "\u6628" == a
                  ? n.setDate(n.getDate() - 1)
                  : "\u524D" == a
                    ? n.setDate(n.getDate() - 2)
                    : "\u5927\u524D" == a
                      ? n.setDate(n.getDate() - 3)
                      : "\u540E" == a
                        ? n.setDate(n.getDate() + 2)
                        : "\u5927\u540E" == a && n.setDate(n.getDate() + 3),
                r.start.assign("day", n.getDate()),
                r.start.assign("month", n.getMonth() + 1),
                r.start.assign("year", n.getFullYear());
        } else if (t[4]) {
            let e = t[4];
            "\u660E" == e
                ? n.setDate(n.getDate() + 1)
                : "\u6628" == e
                  ? n.setDate(n.getDate() - 1)
                  : "\u524D" == e
                    ? n.setDate(n.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? n.setDate(n.getDate() - 3)
                      : "\u540E" == e
                        ? n.setDate(n.getDate() + 2)
                        : "\u5927\u540E" == e && n.setDate(n.getDate() + 3),
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
            let e = parseInt(t[8]);
            if ((isNaN(e) && (e = (0, a.zhStringToNumber)(t[8])), e >= 60)) return null;
            r.start.assign("second", e);
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
            let e = t[9][0].toLowerCase();
            "a" == e && ((u = 0), 12 == i && (i = 0)), "p" == e && ((u = 1), 12 != i && (i += 12));
        } else if (t[2]) {
            let e = t[2][0];
            "\u65E9" == e ? ((u = 0), 12 == i && (i = 0)) : "\u665A" == e && ((u = 1), 12 != i && (i += 12));
        } else if (t[3]) {
            let e = t[3][0];
            "\u4E0A" == e || "\u65E9" == e || "\u51CC" == e
                ? ((u = 0), 12 == i && (i = 0))
                : ("\u4E0B" == e || "\u665A" == e) && ((u = 1), 12 != i && (i += 12));
        } else if (t[5]) {
            let e = t[5][0];
            "\u4E0A" == e || "\u65E9" == e || "\u51CC" == e
                ? ((u = 0), 12 == i && (i = 0))
                : ("\u4E0B" == e || "\u665A" == e) && ((u = 1), 12 != i && (i += 12));
        }
        r.start.assign("hour", i),
            r.start.assign("minute", o),
            u >= 0
                ? r.start.assign("meridiem", u)
                : i < 12
                  ? r.start.imply("meridiem", 0)
                  : r.start.imply("meridiem", 1);
        let l = s.exec(e.text.substring(r.index + r.text.length));
        if (!l) return r.text.match(/^\d+$/) ? null : r;
        let d = new Date(n.getTime());
        if (((r.end = e.createParsingComponents()), l[1])) {
            let t = l[1];
            "\u660E" == t
                ? e.refDate.getHours() > 1 && d.setDate(d.getDate() + 1)
                : "\u6628" == t
                  ? d.setDate(d.getDate() - 1)
                  : "\u524D" == t
                    ? d.setDate(d.getDate() - 2)
                    : "\u5927\u524D" == t
                      ? d.setDate(d.getDate() - 3)
                      : "\u540E" == t
                        ? d.setDate(d.getDate() + 2)
                        : "\u5927\u540E" == t && d.setDate(d.getDate() + 3),
                r.end.assign("day", d.getDate()),
                r.end.assign("month", d.getMonth() + 1),
                r.end.assign("year", d.getFullYear());
        } else if (l[4]) {
            let e = l[4];
            "\u660E" == e
                ? d.setDate(d.getDate() + 1)
                : "\u6628" == e
                  ? d.setDate(d.getDate() - 1)
                  : "\u524D" == e
                    ? d.setDate(d.getDate() - 2)
                    : "\u5927\u524D" == e
                      ? d.setDate(d.getDate() - 3)
                      : "\u540E" == e
                        ? d.setDate(d.getDate() + 2)
                        : "\u5927\u540E" == e && d.setDate(d.getDate() + 3),
                r.end.assign("day", d.getDate()),
                r.end.assign("month", d.getMonth() + 1),
                r.end.assign("year", d.getFullYear());
        } else
            r.end.imply("day", d.getDate()),
                r.end.imply("month", d.getMonth() + 1),
                r.end.imply("year", d.getFullYear());
        if (((i = 0), (o = 0), (u = -1), l[8])) {
            let e = parseInt(l[8]);
            if ((isNaN(e) && (e = (0, a.zhStringToNumber)(l[8])), e >= 60)) return null;
            r.end.assign("second", e);
        }
        if (
            (isNaN((i = parseInt(l[6]))) && (i = (0, a.zhStringToNumber)(l[6])),
            l[7]
                ? "\u534A" == l[7]
                    ? (o = 30)
                    : "\u6B63" == l[7] || "\u6574" == l[7]
                      ? (o = 0)
                      : isNaN((o = parseInt(l[7]))) && (o = (0, a.zhStringToNumber)(l[7]))
                : i > 100 && ((o = i % 100), (i = Math.floor(i / 100))),
            o >= 60 || i > 24)
        )
            return null;
        if ((i >= 12 && (u = 1), l[9])) {
            if (i > 12) return null;
            let e = l[9][0].toLowerCase();
            "a" == e && ((u = 0), 12 == i && (i = 0)),
                "p" == e && ((u = 1), 12 != i && (i += 12)),
                r.start.isCertain("meridiem") ||
                    (0 == u
                        ? (r.start.imply("meridiem", 0), 12 == r.start.get("hour") && r.start.assign("hour", 0))
                        : (r.start.imply("meridiem", 1),
                          12 != r.start.get("hour") && r.start.assign("hour", r.start.get("hour") + 12)));
        } else if (l[2]) {
            let e = l[2][0];
            "\u65E9" == e ? ((u = 0), 12 == i && (i = 0)) : "\u665A" == e && ((u = 1), 12 != i && (i += 12));
        } else if (l[3]) {
            let e = l[3][0];
            "\u4E0A" == e || "\u65E9" == e || "\u51CC" == e
                ? ((u = 0), 12 == i && (i = 0))
                : ("\u4E0B" == e || "\u665A" == e) && ((u = 1), 12 != i && (i += 12));
        } else if (l[5]) {
            let e = l[5][0];
            "\u4E0A" == e || "\u65E9" == e || "\u51CC" == e
                ? ((u = 0), 12 == i && (i = 0))
                : ("\u4E0B" == e || "\u665A" == e) && ((u = 1), 12 != i && (i += 12));
        }
        return (
            (r.text = r.text + l[0]),
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
