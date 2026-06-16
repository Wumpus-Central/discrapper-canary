function t(i, n) {
    if (void 0 !== i.one && 1 === n) return i.one;
    var e = n % 10,
        t = n % 100;
    return 1 === e && 11 !== t
        ? i.singularNominative.replace("{{count}}", String(n))
        : e >= 2 && e <= 4 && (t < 10 || t > 20)
          ? i.singularGenitive.replace("{{count}}", String(n))
          : i.pluralGenitive.replace("{{count}}", String(n));
}
function a(i) {
    return function (n, e) {
        if (null == e || !e.addSuffix) return t(i.regular, n);
        if (e.comparison && e.comparison > 0)
            if (i.future) return t(i.future, n);
            else return "\u0447\u0435\u0440\u0435\u0437 " + t(i.regular, n);
        return i.past ? t(i.past, n) : t(i.regular, n) + " \u043D\u0430\u0437\u0430\u0434";
    };
}
e.r(n), e.d(n, { default: () => f });
var r = {
        lessThanXSeconds: a({
            regular: {
                one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
                singularNominative:
                    "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
                singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
                pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            },
            future: {
                one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
                singularNominative:
                    "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
                singularGenitive:
                    "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
                pluralGenitive:
                    "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            },
        }),
        xSeconds: a({
            regular: {
                singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
                singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
                pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            },
            past: {
                singularNominative:
                    "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434",
                singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434",
                pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434",
            },
            future: {
                singularNominative:
                    "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
                singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
                pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
            },
        }),
        halfAMinute: function (i, n) {
            if (null != n && n.addSuffix)
                if (n.comparison && n.comparison > 0)
                    return "\u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
                else return "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434";
            return "\u043F\u043E\u043B\u043C\u0438\u043D\u0443\u0442\u044B";
        },
        lessThanXMinutes: a({
            regular: {
                one: "\u043C\u0435\u043D\u044C\u0448\u0435 \u043C\u0438\u043D\u0443\u0442\u044B",
                singularNominative:
                    "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
                singularGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442",
                pluralGenitive: "\u043C\u0435\u043D\u044C\u0448\u0435 {{count}} \u043C\u0438\u043D\u0443\u0442",
            },
            future: {
                one: "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 \u043C\u0438\u043D\u0443\u0442\u0443",
                singularNominative:
                    "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443",
                singularGenitive:
                    "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
                pluralGenitive:
                    "\u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442",
            },
        }),
        xMinutes: a({
            regular: {
                singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0430",
                singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
                pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442",
            },
            past: {
                singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434",
                singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434",
                pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434",
            },
            future: {
                singularNominative: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u0443",
                singularGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442\u044B",
                pluralGenitive: "\u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0438\u043D\u0443\u0442",
            },
        }),
        aboutXHours: a({
            regular: {
                singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430",
                singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432",
                pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u043E\u0432",
            },
            future: {
                singularNominative:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441",
                singularGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u0430",
                pluralGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0447\u0430\u0441\u043E\u0432",
            },
        }),
        xHours: a({
            regular: {
                singularNominative: "{{count}} \u0447\u0430\u0441",
                singularGenitive: "{{count}} \u0447\u0430\u0441\u0430",
                pluralGenitive: "{{count}} \u0447\u0430\u0441\u043E\u0432",
            },
        }),
        xDays: a({
            regular: {
                singularNominative: "{{count}} \u0434\u0435\u043D\u044C",
                singularGenitive: "{{count}} \u0434\u043D\u044F",
                pluralGenitive: "{{count}} \u0434\u043D\u0435\u0439",
            },
        }),
        aboutXWeeks: a({
            regular: {
                singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
                singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C",
                pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043D\u0435\u0434\u0435\u043B\u044C",
            },
            future: {
                singularNominative:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044E",
                singularGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
                pluralGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043D\u0435\u0434\u0435\u043B\u044C",
            },
        }),
        xWeeks: a({
            regular: {
                singularNominative: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044F",
                singularGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u0438",
                pluralGenitive: "{{count}} \u043D\u0435\u0434\u0435\u043B\u044C",
            },
        }),
        aboutXMonths: a({
            regular: {
                singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
                singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
                pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
            },
            future: {
                singularNominative:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446",
                singularGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
                pluralGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
            },
        }),
        xMonths: a({
            regular: {
                singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446",
                singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
                pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",
            },
        }),
        aboutXYears: a({
            regular: {
                singularNominative: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0430",
                singularGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442",
                pluralGenitive: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043B\u0435\u0442",
            },
            future: {
                singularNominative:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
                singularGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
                pluralGenitive:
                    "\u043F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442",
            },
        }),
        xYears: a({
            regular: {
                singularNominative: "{{count}} \u0433\u043E\u0434",
                singularGenitive: "{{count}} \u0433\u043E\u0434\u0430",
                pluralGenitive: "{{count}} \u043B\u0435\u0442",
            },
        }),
        overXYears: a({
            regular: {
                singularNominative: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u0433\u043E\u0434\u0430",
                singularGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442",
                pluralGenitive: "\u0431\u043E\u043B\u044C\u0448\u0435 {{count}} \u043B\u0435\u0442",
            },
            future: {
                singularNominative:
                    "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
                singularGenitive:
                    "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
                pluralGenitive:
                    "\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442",
            },
        }),
        almostXYears: a({
            regular: {
                singularNominative: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434",
                singularGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0430",
                pluralGenitive: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u043B\u0435\u0442",
            },
            future: {
                singularNominative:
                    "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434",
                singularGenitive:
                    "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u0433\u043E\u0434\u0430",
                pluralGenitive:
                    "\u043F\u043E\u0447\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 {{count}} \u043B\u0435\u0442",
            },
        }),
    },
    u = e(385987),
    o = {
        date: (0, u.A)({
            formats: {
                full: "EEEE, d MMMM y '\u0433.'",
                long: "d MMMM y '\u0433.'",
                medium: "d MMM y '\u0433.'",
                short: "dd.MM.y",
            },
            defaultWidth: "full",
        }),
        time: (0, u.A)({
            formats: { full: "H:mm:ss zzzz", long: "H:mm:ss z", medium: "H:mm:ss", short: "H:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, u.A)({ formats: { any: "{{date}}, {{time}}" }, defaultWidth: "any" }),
    },
    l = e(204801),
    s = [
        "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
        "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
        "\u0432\u0442\u043E\u0440\u043D\u0438\u043A",
        "\u0441\u0440\u0435\u0434\u0443",
        "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
        "\u043F\u044F\u0442\u043D\u0438\u0446\u0443",
        "\u0441\u0443\u0431\u0431\u043E\u0442\u0443",
    ];
function c(i) {
    var n = s[i];
    return 2 === i ? "'\u0432\u043E " + n + " \u0432' p" : "'\u0432 " + n + " \u0432' p";
}
var v = {
        lastWeek: function (i, n, e) {
            var t = i.getUTCDay();
            if ((0, l.A)(i, n, e)) return c(t);
            var a = s[t];
            switch (t) {
                case 0:
                    return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 " + a + " \u0432' p";
                case 1:
                case 2:
                case 4:
                    return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 " + a + " \u0432' p";
                case 3:
                case 5:
                case 6:
                    return "'\u0432 \u043F\u0440\u043E\u0448\u043B\u0443\u044E " + a + " \u0432' p";
            }
        },
        yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
        today: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p",
        tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",
        nextWeek: function (i, n, e) {
            var t = i.getUTCDay();
            if ((0, l.A)(i, n, e)) return c(t);
            var a = s[t];
            switch (t) {
                case 0:
                    return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 " + a + " \u0432' p";
                case 1:
                case 2:
                case 4:
                    return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 " + a + " \u0432' p";
                case 3:
                case 5:
                case 6:
                    return "'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E " + a + " \u0432' p";
            }
        },
        other: "P",
    },
    d = e(981737),
    g = {
        ordinalNumber: function (i, n) {
            var e = Number(i),
                t = null == n ? void 0 : n.unit;
            return (
                e +
                ("date" === t ? "-\u0435" : "week" === t || "minute" === t || "second" === t ? "-\u044F" : "-\u0439")
            );
        },
        era: (0, d.A)({
            values: {
                narrow: ["\u0434\u043E \u043D.\u044D.", "\u043D.\u044D."],
                abbreviated: ["\u0434\u043E \u043D. \u044D.", "\u043D. \u044D."],
                wide: [
                    "\u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B",
                    "\u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B",
                ],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, d.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: [
                    "1-\u0439 \u043A\u0432.",
                    "2-\u0439 \u043A\u0432.",
                    "3-\u0439 \u043A\u0432.",
                    "4-\u0439 \u043A\u0432.",
                ],
                wide: [
                    "1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
                    "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
                    "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
                    "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B",
                ],
            },
            defaultWidth: "wide",
            argumentCallback: function (i) {
                return i - 1;
            },
        }),
        month: (0, d.A)({
            values: {
                narrow: [
                    "\u042F",
                    "\u0424",
                    "\u041C",
                    "\u0410",
                    "\u041C",
                    "\u0418",
                    "\u0418",
                    "\u0410",
                    "\u0421",
                    "\u041E",
                    "\u041D",
                    "\u0414",
                ],
                abbreviated: [
                    "\u044F\u043D\u0432.",
                    "\u0444\u0435\u0432.",
                    "\u043C\u0430\u0440\u0442",
                    "\u0430\u043F\u0440.",
                    "\u043C\u0430\u0439",
                    "\u0438\u044E\u043D\u044C",
                    "\u0438\u044E\u043B\u044C",
                    "\u0430\u0432\u0433.",
                    "\u0441\u0435\u043D\u0442.",
                    "\u043E\u043A\u0442.",
                    "\u043D\u043E\u044F\u0431.",
                    "\u0434\u0435\u043A.",
                ],
                wide: [
                    "\u044F\u043D\u0432\u0430\u0440\u044C",
                    "\u0444\u0435\u0432\u0440\u0430\u043B\u044C",
                    "\u043C\u0430\u0440\u0442",
                    "\u0430\u043F\u0440\u0435\u043B\u044C",
                    "\u043C\u0430\u0439",
                    "\u0438\u044E\u043D\u044C",
                    "\u0438\u044E\u043B\u044C",
                    "\u0430\u0432\u0433\u0443\u0441\u0442",
                    "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
                    "\u043E\u043A\u0442\u044F\u0431\u0440\u044C",
                    "\u043D\u043E\u044F\u0431\u0440\u044C",
                    "\u0434\u0435\u043A\u0430\u0431\u0440\u044C",
                ],
            },
            defaultWidth: "wide",
            formattingValues: {
                narrow: [
                    "\u042F",
                    "\u0424",
                    "\u041C",
                    "\u0410",
                    "\u041C",
                    "\u0418",
                    "\u0418",
                    "\u0410",
                    "\u0421",
                    "\u041E",
                    "\u041D",
                    "\u0414",
                ],
                abbreviated: [
                    "\u044F\u043D\u0432.",
                    "\u0444\u0435\u0432.",
                    "\u043C\u0430\u0440.",
                    "\u0430\u043F\u0440.",
                    "\u043C\u0430\u044F",
                    "\u0438\u044E\u043D.",
                    "\u0438\u044E\u043B.",
                    "\u0430\u0432\u0433.",
                    "\u0441\u0435\u043D\u0442.",
                    "\u043E\u043A\u0442.",
                    "\u043D\u043E\u044F\u0431.",
                    "\u0434\u0435\u043A.",
                ],
                wide: [
                    "\u044F\u043D\u0432\u0430\u0440\u044F",
                    "\u0444\u0435\u0432\u0440\u0430\u043B\u044F",
                    "\u043C\u0430\u0440\u0442\u0430",
                    "\u0430\u043F\u0440\u0435\u043B\u044F",
                    "\u043C\u0430\u044F",
                    "\u0438\u044E\u043D\u044F",
                    "\u0438\u044E\u043B\u044F",
                    "\u0430\u0432\u0433\u0443\u0441\u0442\u0430",
                    "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
                    "\u043E\u043A\u0442\u044F\u0431\u0440\u044F",
                    "\u043D\u043E\u044F\u0431\u0440\u044F",
                    "\u0434\u0435\u043A\u0430\u0431\u0440\u044F",
                ],
            },
            defaultFormattingWidth: "wide",
        }),
        day: (0, d.A)({
            values: {
                narrow: ["\u0412", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"],
                short: [
                    "\u0432\u0441",
                    "\u043F\u043D",
                    "\u0432\u0442",
                    "\u0441\u0440",
                    "\u0447\u0442",
                    "\u043F\u0442",
                    "\u0441\u0431",
                ],
                abbreviated: [
                    "\u0432\u0441\u043A",
                    "\u043F\u043D\u0434",
                    "\u0432\u0442\u0440",
                    "\u0441\u0440\u0434",
                    "\u0447\u0442\u0432",
                    "\u043F\u0442\u043D",
                    "\u0441\u0443\u0431",
                ],
                wide: [
                    "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
                    "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
                    "\u0432\u0442\u043E\u0440\u043D\u0438\u043A",
                    "\u0441\u0440\u0435\u0434\u0430",
                    "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
                    "\u043F\u044F\u0442\u043D\u0438\u0446\u0430",
                    "\u0441\u0443\u0431\u0431\u043E\u0442\u0430",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, d.A)({
            values: {
                narrow: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u043E\u043B\u043D.",
                    noon: "\u043F\u043E\u043B\u0434.",
                    morning: "\u0443\u0442\u0440\u043E",
                    afternoon: "\u0434\u0435\u043D\u044C",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u043E\u0447\u044C",
                },
                abbreviated: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u043E\u043B\u043D.",
                    noon: "\u043F\u043E\u043B\u0434.",
                    morning: "\u0443\u0442\u0440\u043E",
                    afternoon: "\u0434\u0435\u043D\u044C",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u043E\u0447\u044C",
                },
                wide: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C",
                    noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C",
                    morning: "\u0443\u0442\u0440\u043E",
                    afternoon: "\u0434\u0435\u043D\u044C",
                    evening: "\u0432\u0435\u0447\u0435\u0440",
                    night: "\u043D\u043E\u0447\u044C",
                },
            },
            defaultWidth: "any",
            formattingValues: {
                narrow: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u043E\u043B\u043D.",
                    noon: "\u043F\u043E\u043B\u0434.",
                    morning: "\u0443\u0442\u0440\u0430",
                    afternoon: "\u0434\u043D\u044F",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u043E\u0447\u0438",
                },
                abbreviated: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u043E\u043B\u043D.",
                    noon: "\u043F\u043E\u043B\u0434.",
                    morning: "\u0443\u0442\u0440\u0430",
                    afternoon: "\u0434\u043D\u044F",
                    evening: "\u0432\u0435\u0447.",
                    night: "\u043D\u043E\u0447\u0438",
                },
                wide: {
                    am: "\u0414\u041F",
                    pm: "\u041F\u041F",
                    midnight: "\u043F\u043E\u043B\u043D\u043E\u0447\u044C",
                    noon: "\u043F\u043E\u043B\u0434\u0435\u043D\u044C",
                    morning: "\u0443\u0442\u0440\u0430",
                    afternoon: "\u0434\u043D\u044F",
                    evening: "\u0432\u0435\u0447\u0435\u0440\u0430",
                    night: "\u043D\u043E\u0447\u0438",
                },
            },
            defaultFormattingWidth: "wide",
        }),
    },
    m = e(303527);
let f = {
    code: "ru",
    formatDistance: function (i, n, e) {
        return r[i](n, e);
    },
    formatLong: o,
    formatRelative: function (i, n, e, t) {
        var a = v[i];
        return "function" == typeof a ? a(n, e, t) : a;
    },
    localize: g,
    match: {
        ordinalNumber: (0, e(722023).A)({
            matchPattern:
                /^(\d+)(-?(\u0435|\u044f|\u0439|\u043e\u0435|\u044c\u0435|\u0430\u044f|\u044c\u044f|\u044b\u0439|\u043e\u0439|\u0438\u0439|\u044b\u0439))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (i) {
                return parseInt(i, 10);
            },
        }),
        era: (0, m.A)({
            matchPatterns: {
                narrow: /^((\u0434\u043e )?\u043d\.?\s?\u044d\.?)/i,
                abbreviated: /^((\u0434\u043e )?\u043d\.?\s?\u044d\.?)/i,
                wide: /^(\u0434\u043e \u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b|\u043d\u0430\u0448\u0430 \u044d\u0440\u0430)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^\u0434/i, /^\u043d/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, m.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^[1234](-?[\u044b\u043e\u0438]?\u0439?)? \u043a\u0432.?/i,
                wide: /^[1234](-?[\u044b\u043e\u0438]?\u0439?)? \u043a\u0432\u0430\u0440\u0442\u0430\u043b/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (i) {
                return i + 1;
            },
        }),
        month: (0, m.A)({
            matchPatterns: {
                narrow: /^[\u044f\u0444\u043c\u0430\u0438\u0441\u043e\u043d\u0434]/i,
                abbreviated:
                    /^(\u044f\u043d\u0432|\u0444\u0435\u0432|\u043c\u0430\u0440\u0442?|\u0430\u043f\u0440|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]?|\u0438\u044e\u043b[\u044c\u044f]?|\u0430\u0432\u0433|\u0441\u0435\u043d\u0442?|\u043e\u043a\u0442|\u043d\u043e\u044f\u0431?|\u0434\u0435\u043a)\.?/i,
                wide: /^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043b[\u044c\u044f]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [
                    /^\u044f/i,
                    /^\u0444/i,
                    /^\u043c/i,
                    /^\u0430/i,
                    /^\u043c/i,
                    /^\u0438/i,
                    /^\u0438/i,
                    /^\u0430/i,
                    /^\u0441/i,
                    /^\u043e/i,
                    /^\u043d/i,
                    /^\u044f/i,
                ],
                any: [
                    /^\u044f/i,
                    /^\u0444/i,
                    /^\u043c\u0430\u0440/i,
                    /^\u0430\u043f/i,
                    /^\u043c\u0430[\u0439\u044f]/i,
                    /^\u0438\u044e\u043d/i,
                    /^\u0438\u044e\u043b/i,
                    /^\u0430\u0432/i,
                    /^\u0441/i,
                    /^\u043e/i,
                    /^\u043d/i,
                    /^\u0434/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, m.A)({
            matchPatterns: {
                narrow: /^[\u0432\u043f\u0441\u0447]/i,
                short: /^(\u0432\u0441|\u0432\u043e|\u043f\u043d|\u043f\u043e|\u0432\u0442|\u0441\u0440|\u0447\u0442|\u0447\u0435|\u043f\u0442|\u043f\u044f|\u0441\u0431|\u0441\u0443)\.?/i,
                abbreviated:
                    /^(\u0432\u0441\u043a|\u0432\u043e\u0441|\u043f\u043d\u0434|\u043f\u043e\u043d|\u0432\u0442\u0440|\u0432\u0442\u043e|\u0441\u0440\u0434|\u0441\u0440\u0435|\u0447\u0442\u0432|\u0447\u0435\u0442|\u043f\u0442\u043d|\u043f\u044f\u0442|\u0441\u0443\u0431).?/i,
                wide: /^(\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c[\u0435\u044f]|\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u0430?|\u0432\u0442\u043e\u0440\u043d\u0438\u043a\u0430?|\u0441\u0440\u0435\u0434[\u0430\u044b]|\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430?|\u043f\u044f\u0442\u043d\u0438\u0446[\u0430\u044b]|\u0441\u0443\u0431\u0431\u043e\u0442[\u0430\u044b])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^\u0432/i, /^\u043f/i, /^\u0432/i, /^\u0441/i, /^\u0447/i, /^\u043f/i, /^\u0441/i],
                any: [
                    /^\u0432[\u043e\u0441]/i,
                    /^\u043f[\u043e\u043d]/i,
                    /^\u0432/i,
                    /^\u0441\u0440/i,
                    /^\u0447/i,
                    /^\u043f[\u044f\u0442]/i,
                    /^\u0441[\u0443\u0431]/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, m.A)({
            matchPatterns: {
                narrow: /^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\.?|\u043f\u043e\u043b\u0434\.?|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447[\u044c\u0438])/i,
                abbreviated:
                    /^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\.?|\u043f\u043e\u043b\u0434\.?|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\.?|\u043d\u043e\u0447[\u044c\u0438])/i,
                wide: /^([\u0434\u043f]\u043f|\u043f\u043e\u043b\u043d\u043e\u0447\u044c|\u043f\u043e\u043b\u0434\u0435\u043d\u044c|\u0443\u0442\u0440[\u043e\u0430]|\u0434\u0435\u043d\u044c|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430?|\u043d\u043e\u0447[\u044c\u0438])/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: {
                    am: /^\u0434\u043f/i,
                    pm: /^\u043f\u043f/i,
                    midnight: /^\u043f\u043e\u043b\u043d/i,
                    noon: /^\u043f\u043e\u043b\u0434/i,
                    morning: /^\u0443/i,
                    afternoon: /^\u0434[\u0435\u043d]/i,
                    evening: /^\u0432/i,
                    night: /^\u043d/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
