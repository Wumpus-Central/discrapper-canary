a.r(t), a.d(t, { default: () => y });
var r = {
        lessThanXSeconds: {
            one: "\u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
            other: "\u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
        },
        xSeconds: {
            one: "1 \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
            other: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
        },
        halfAMinute: "\u043F\u043E\u043B\u043E\u0432\u0438\u043D \u043C\u0438\u043D\u0443\u0442\u0430",
        lessThanXMinutes: {
            one: "\u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 \u043C\u0438\u043D\u0443\u0442\u0430",
            other: "\u043F\u043E-\u043C\u0430\u043B\u043A\u043E \u043E\u0442 {{count}} \u043C\u0438\u043D\u0443\u0442\u0438",
        },
        xMinutes: {
            one: "1 \u043C\u0438\u043D\u0443\u0442\u0430",
            other: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0438",
        },
        aboutXHours: {
            one: "\u043E\u043A\u043E\u043B\u043E \u0447\u0430\u0441",
            other: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0447\u0430\u0441\u0430",
        },
        xHours: { one: "1 \u0447\u0430\u0441", other: "{{count}} \u0447\u0430\u0441\u0430" },
        xDays: { one: "1 \u0434\u0435\u043D", other: "{{count}} \u0434\u043D\u0438" },
        aboutXWeeks: {
            one: "\u043E\u043A\u043E\u043B\u043E \u0441\u0435\u0434\u043C\u0438\u0446\u0430",
            other: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0441\u0435\u0434\u043C\u0438\u0446\u0438",
        },
        xWeeks: {
            one: "1 \u0441\u0435\u0434\u043C\u0438\u0446\u0430",
            other: "{{count}} \u0441\u0435\u0434\u043C\u0438\u0446\u0438",
        },
        aboutXMonths: {
            one: "\u043E\u043A\u043E\u043B\u043E \u043C\u0435\u0441\u0435\u0446",
            other: "\u043E\u043A\u043E\u043B\u043E {{count}} \u043C\u0435\u0441\u0435\u0446\u0430",
        },
        xMonths: { one: "1 \u043C\u0435\u0441\u0435\u0446", other: "{{count}} \u043C\u0435\u0441\u0435\u0446\u0430" },
        aboutXYears: {
            one: "\u043E\u043A\u043E\u043B\u043E \u0433\u043E\u0434\u0438\u043D\u0430",
            other: "\u043E\u043A\u043E\u043B\u043E {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
        },
        xYears: {
            one: "1 \u0433\u043E\u0434\u0438\u043D\u0430",
            other: "{{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
        },
        overXYears: {
            one: "\u043D\u0430\u0434 \u0433\u043E\u0434\u0438\u043D\u0430",
            other: "\u043D\u0430\u0434 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
        },
        almostXYears: {
            one: "\u043F\u043E\u0447\u0442\u0438 \u0433\u043E\u0434\u0438\u043D\u0430",
            other: "\u043F\u043E\u0447\u0442\u0438 {{count}} \u0433\u043E\u0434\u0438\u043D\u0438",
        },
    },
    n = a(385987),
    i = {
        date: (0, n.A)({
            formats: { full: "EEEE, dd MMMM yyyy", long: "dd MMMM yyyy", medium: "dd MMM yyyy", short: "dd/MM/yyyy" },
            defaultWidth: "full",
        }),
        time: (0, n.A)({
            formats: { full: "HH:mm:ss zzzz", long: "HH:mm:ss z", medium: "HH:mm:ss", short: "H:mm" },
            defaultWidth: "full",
        }),
        dateTime: (0, n.A)({ formats: { any: "{{date}} {{time}}" }, defaultWidth: "any" }),
    },
    o = a(29583),
    u = a(204801),
    d = [
        "\u043D\u0435\u0434\u0435\u043B\u044F",
        "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A",
        "\u0432\u0442\u043E\u0440\u043D\u0438\u043A",
        "\u0441\u0440\u044F\u0434\u0430",
        "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A",
        "\u043F\u0435\u0442\u044A\u043A",
        "\u0441\u044A\u0431\u043E\u0442\u0430",
    ];
function s(e) {
    var t = d[e];
    return 2 === e ? "'\u0432\u044A\u0432 " + t + " \u0432' p" : "'\u0432 " + t + " \u0432' p";
}
var c = {
        lastWeek: function (e, t, a) {
            var r = (0, o.default)(e),
                n = r.getUTCDay();
            if ((0, u.A)(r, t, a)) return s(n);
            var i = d[n];
            switch (n) {
                case 0:
                case 3:
                case 6:
                    return "'\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430 " + i + " \u0432' p";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "'\u043C\u0438\u043D\u0430\u043B\u0438\u044F " + i + " \u0432' p";
            }
        },
        yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
        today: "'\u0434\u043D\u0435\u0441 \u0432' p",
        tomorrow: "'\u0443\u0442\u0440\u0435 \u0432' p",
        nextWeek: function (e, t, a) {
            var r = (0, o.default)(e),
                n = r.getUTCDay();
            if ((0, u.A)(r, t, a)) return s(n);
            var i = d[n];
            switch (n) {
                case 0:
                case 3:
                case 6:
                    return "'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0430\u0442\u0430 " + i + " \u0432' p";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0438\u044F " + i + " \u0432' p";
            }
        },
        other: "P",
    },
    h = a(981737);
function l(e, t, a, r, n) {
    return e + "-" + ("quarter" === t ? n : "year" === t || "week" === t || "minute" === t || "second" === t ? r : a);
}
var f = {
        ordinalNumber: function (e, t) {
            var a = Number(e),
                r = null == t ? void 0 : t.unit;
            if (0 === a) return l(0, r, "\u0435\u0432", "\u0435\u0432\u0430", "\u0435\u0432\u043E");
            if (a % 1e3 == 0) return l(a, r, "\u0435\u043D", "\u043D\u0430", "\u043D\u043E");
            if (a % 100 == 0) return l(a, r, "\u0442\u0435\u043D", "\u0442\u043D\u0430", "\u0442\u043D\u043E");
            var n = a % 100;
            if (n > 20 || n < 10)
                switch (n % 10) {
                    case 1:
                        return l(a, r, "\u0432\u0438", "\u0432\u0430", "\u0432\u043E");
                    case 2:
                        return l(a, r, "\u0440\u0438", "\u0440\u0430", "\u0440\u043E");
                    case 7:
                    case 8:
                        return l(a, r, "\u043C\u0438", "\u043C\u0430", "\u043C\u043E");
                }
            return l(a, r, "\u0442\u0438", "\u0442\u0430", "\u0442\u043E");
        },
        era: (0, h.A)({
            values: {
                narrow: ["\u043F\u0440.\u043D.\u0435.", "\u043D.\u0435."],
                abbreviated: ["\u043F\u0440\u0435\u0434\u0438 \u043D. \u0435.", "\u043D. \u0435."],
                wide: [
                    "\u043F\u0440\u0435\u0434\u0438 \u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430",
                    "\u043D\u043E\u0432\u0430\u0442\u0430 \u0435\u0440\u0430",
                ],
            },
            defaultWidth: "wide",
        }),
        quarter: (0, h.A)({
            values: {
                narrow: ["1", "2", "3", "4"],
                abbreviated: [
                    "1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441.",
                    "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441.",
                    "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.",
                    "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441.",
                ],
                wide: [
                    "1-\u0432\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435",
                    "2-\u0440\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435",
                    "3-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435",
                    "4-\u0442\u043E \u0442\u0440\u0438\u043C\u0435\u0441\u0435\u0447\u0438\u0435",
                ],
            },
            defaultWidth: "wide",
            argumentCallback: function (e) {
                return e - 1;
            },
        }),
        month: (0, h.A)({
            values: {
                abbreviated: [
                    "\u044F\u043D\u0443",
                    "\u0444\u0435\u0432",
                    "\u043C\u0430\u0440",
                    "\u0430\u043F\u0440",
                    "\u043C\u0430\u0439",
                    "\u044E\u043D\u0438",
                    "\u044E\u043B\u0438",
                    "\u0430\u0432\u0433",
                    "\u0441\u0435\u043F",
                    "\u043E\u043A\u0442",
                    "\u043D\u043E\u0435",
                    "\u0434\u0435\u043A",
                ],
                wide: [
                    "\u044F\u043D\u0443\u0430\u0440\u0438",
                    "\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
                    "\u043C\u0430\u0440\u0442",
                    "\u0430\u043F\u0440\u0438\u043B",
                    "\u043C\u0430\u0439",
                    "\u044E\u043D\u0438",
                    "\u044E\u043B\u0438",
                    "\u0430\u0432\u0433\u0443\u0441\u0442",
                    "\u0441\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438",
                    "\u043E\u043A\u0442\u043E\u043C\u0432\u0440\u0438",
                    "\u043D\u043E\u0435\u043C\u0432\u0440\u0438",
                    "\u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438",
                ],
            },
            defaultWidth: "wide",
        }),
        day: (0, h.A)({
            values: {
                narrow: ["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"],
                short: [
                    "\u043D\u0434",
                    "\u043F\u043D",
                    "\u0432\u0442",
                    "\u0441\u0440",
                    "\u0447\u0442",
                    "\u043F\u0442",
                    "\u0441\u0431",
                ],
                abbreviated: [
                    "\u043D\u0435\u0434",
                    "\u043F\u043E\u043D",
                    "\u0432\u0442\u043E",
                    "\u0441\u0440\u044F",
                    "\u0447\u0435\u0442",
                    "\u043F\u0435\u0442",
                    "\u0441\u044A\u0431",
                ],
                wide: [
                    "\u043D\u0435\u0434\u0435\u043B\u044F",
                    "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A",
                    "\u0432\u0442\u043E\u0440\u043D\u0438\u043A",
                    "\u0441\u0440\u044F\u0434\u0430",
                    "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A",
                    "\u043F\u0435\u0442\u044A\u043A",
                    "\u0441\u044A\u0431\u043E\u0442\u0430",
                ],
            },
            defaultWidth: "wide",
        }),
        dayPeriod: (0, h.A)({
            values: {
                wide: {
                    am: "\u043F\u0440\u0435\u0434\u0438 \u043E\u0431\u044F\u0434",
                    pm: "\u0441\u043B\u0435\u0434 \u043E\u0431\u044F\u0434",
                    midnight: "\u0432 \u043F\u043E\u043B\u0443\u043D\u043E\u0449",
                    noon: "\u043D\u0430 \u043E\u0431\u044F\u0434",
                    morning: "\u0441\u0443\u0442\u0440\u0438\u043D\u0442\u0430",
                    afternoon: "\u0441\u043B\u0435\u0434\u043E\u0431\u0435\u0434",
                    evening: "\u0432\u0435\u0447\u0435\u0440\u0442\u0430",
                    night: "\u043F\u0440\u0435\u0437 \u043D\u043E\u0449\u0442\u0430",
                },
            },
            defaultWidth: "wide",
        }),
    },
    m = a(303527);
let y = {
    code: "bg",
    formatDistance: function (e, t, a) {
        var n,
            i = r[e];
        if (
            ((n = "string" == typeof i ? i : 1 === t ? i.one : i.other.replace("{{count}}", String(t))),
            null != a && a.addSuffix)
        )
            if (a.comparison && a.comparison > 0) return "\u0441\u043B\u0435\u0434 " + n;
            else return "\u043F\u0440\u0435\u0434\u0438 " + n;
        return n;
    },
    formatLong: i,
    formatRelative: function (e, t, a, r) {
        var n = c[e];
        return "function" == typeof n ? n(t, a, r) : n;
    },
    localize: f,
    match: {
        ordinalNumber: (0, a(722023).A)({
            matchPattern:
                /^(\d+)(-?[\u0432\u0440\u043c\u0442][\u0430\u0438]|-?\u0442?(\u0435\u043d|\u043d\u0430)|-?(\u0435\u0432|\u0435\u0432\u0430))?/i,
            parsePattern: /\d+/i,
            valueCallback: function (e) {
                return parseInt(e, 10);
            },
        }),
        era: (0, m.A)({
            matchPatterns: {
                narrow: /^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,
                abbreviated: /^((\u043f\u0440)?\u043d\.?\s?\u0435\.?)/i,
                wide: /^(\u043f\u0440\u0435\u0434\u0438 \u043d\u043e\u0432\u0430\u0442\u0430 \u0435\u0440\u0430|\u043d\u043e\u0432\u0430\u0442\u0430 \u0435\u0440\u0430|\u043d\u043e\u0432\u0430 \u0435\u0440\u0430)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/^\u043f/i, /^\u043d/i] },
            defaultParseWidth: "any",
        }),
        quarter: (0, m.A)({
            matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^[1234](-?[\u0432\u0440\u0442]?o?)? \u0442\u0440\u0438\u043c\u0435\u0441.?/i,
                wide: /^[1234](-?[\u0432\u0440\u0442]?\u043e?)? \u0442\u0440\u0438\u043c\u0435\u0441\u0435\u0447\u0438\u0435/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
            defaultParseWidth: "any",
            valueCallback: function (e) {
                return e + 1;
            },
        }),
        month: (0, m.A)({
            matchPatterns: {
                abbreviated:
                    /^(\u044f\u043d\u0443|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0439|\u044e\u043d\u0438|\u044e\u043b\u0438|\u0430\u0432\u0433|\u0441\u0435\u043f|\u043e\u043a\u0442|\u043d\u043e\u0435|\u0434\u0435\u043a)/i,
                wide: /^(\u044f\u043d\u0443\u0430\u0440\u0438|\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0438\u043b|\u043c\u0430\u0439|\u044e\u043d\u0438|\u044e\u043b\u0438|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438|\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438|\u043d\u043e\u0435\u043c\u0432\u0440\u0438|\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                any: [
                    /^\u044f/i,
                    /^\u0444/i,
                    /^\u043c\u0430\u0440/i,
                    /^\u0430\u043f/i,
                    /^\u043c\u0430\u0439/i,
                    /^\u044e\u043d/i,
                    /^\u044e\u043b/i,
                    /^\u0430\u0432/i,
                    /^\u0441\u0435/i,
                    /^\u043e\u043a\u0442/i,
                    /^\u043d\u043e/i,
                    /^\u0434\u0435/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        day: (0, m.A)({
            matchPatterns: {
                narrow: /^[\u043d\u043f\u0432\u0441\u0447]/i,
                short: /^(\u043d\u0434|\u043f\u043d|\u0432\u0442|\u0441\u0440|\u0447\u0442|\u043f\u0442|\u0441\u0431)/i,
                abbreviated:
                    /^(\u043d\u0435\u0434|\u043f\u043e\u043d|\u0432\u0442\u043e|\u0441\u0440\u044f|\u0447\u0435\u0442|\u043f\u0435\u0442|\u0441\u044a\u0431)/i,
                wide: /^(\u043d\u0435\u0434\u0435\u043b\u044f|\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a|\u0432\u0442\u043e\u0440\u043d\u0438\u043a|\u0441\u0440\u044f\u0434\u0430|\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a|\u043f\u0435\u0442\u044a\u043a|\u0441\u044a\u0431\u043e\u0442\u0430)/i,
            },
            defaultMatchWidth: "wide",
            parsePatterns: {
                narrow: [/^\u043d/i, /^\u043f/i, /^\u0432/i, /^\u0441/i, /^\u0447/i, /^\u043f/i, /^\u0441/i],
                any: [
                    /^\u043d[\u0435\u0434]/i,
                    /^\u043f[\u043e\u043d]/i,
                    /^\u0432\u0442/i,
                    /^\u0441\u0440/i,
                    /^\u0447[\u0435\u0442]/i,
                    /^\u043f[\u0435\u0442]/i,
                    /^\u0441[\u044a\u0431]/i,
                ],
            },
            defaultParseWidth: "any",
        }),
        dayPeriod: (0, m.A)({
            matchPatterns: {
                any: /^(\u043f\u0440\u0435\u0434\u0438 \u043e|\u0441\u043b\u0435\u0434 \u043e|\u0432 \u043f\u043e|\u043d\u0430 \u043e|\u043f\u0440\u0435\u0437|\u0432\u0435\u0447|\u0441\u0443\u0442|\u0441\u043b\u0435\u0434\u043e)/i,
            },
            defaultMatchWidth: "any",
            parsePatterns: {
                any: {
                    am: /^\u043f\u0440\u0435\u0434\u0438 \u043e/i,
                    pm: /^\u0441\u043b\u0435\u0434 \u043e/i,
                    midnight: /^\u0432 \u043f\u043e\u043b/i,
                    noon: /^\u043d\u0430 \u043e\u0431/i,
                    morning: /^\u0441\u0443\u0442/i,
                    afternoon: /^\u0441\u043b\u0435\u0434\u043e/i,
                    evening: /^\u0432\u0435\u0447/i,
                    night: /^\u043f\u0440\u0435\u0437 \u043d/i,
                },
            },
            defaultParseWidth: "any",
        }),
    },
    options: { weekStartsOn: 1, firstWeekContainsDate: 1 },
};
