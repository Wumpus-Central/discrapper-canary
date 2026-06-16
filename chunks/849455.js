r.r(t),
    r.d(t, {
        parseDate: () => ee,
        casual: () => _,
        ReferenceWithTimezone: () => C.b5,
        ParsingResult: () => C.s4,
        createCasualConfiguration: () => et,
        Weekday: () => A.Bw,
        strict: () => X,
        Chrono: () => G.u,
        Meridiem: () => A.FF,
        ParsingComponents: () => C.BP,
        createConfiguration: () => er,
        parse: () => Q,
    });
var n = r(476858),
    s = r(364242);
let a = "([^\\p{L}\\p{N}_]|^)",
    i = "(?=[^\\p{L}\\p{N}_]|$)",
    o = {
        \u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435: 0,
        \u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u044F: 0,
        \u0432\u0441\u043A: 0,
        "\u0432\u0441\u043A.": 0,
        \u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A: 1,
        \u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A\u0430: 1,
        \u043F\u043D: 1,
        "\u043F\u043D.": 1,
        \u0432\u0442\u043E\u0440\u043D\u0438\u043A: 2,
        \u0432\u0442\u043E\u0440\u043D\u0438\u043A\u0430: 2,
        \u0432\u0442: 2,
        "\u0432\u0442.": 2,
        \u0441\u0440\u0435\u0434\u0430: 3,
        \u0441\u0440\u0435\u0434\u044B: 3,
        \u0441\u0440\u0435\u0434\u0443: 3,
        \u0441\u0440: 3,
        "\u0441\u0440.": 3,
        \u0447\u0435\u0442\u0432\u0435\u0440\u0433: 4,
        \u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430: 4,
        \u0447\u0442: 4,
        "\u0447\u0442.": 4,
        \u043F\u044F\u0442\u043D\u0438\u0446\u0430: 5,
        \u043F\u044F\u0442\u043D\u0438\u0446\u0443: 5,
        \u043F\u044F\u0442\u043D\u0438\u0446\u044B: 5,
        \u043F\u0442: 5,
        "\u043F\u0442.": 5,
        \u0441\u0443\u0431\u0431\u043E\u0442\u0430: 6,
        \u0441\u0443\u0431\u0431\u043E\u0442\u0443: 6,
        \u0441\u0443\u0431\u0431\u043E\u0442\u044B: 6,
        \u0441\u0431: 6,
        "\u0441\u0431.": 6,
    },
    l = {
        \u044F\u043D\u0432\u0430\u0440\u044C: 1,
        \u044F\u043D\u0432\u0430\u0440\u044F: 1,
        \u044F\u043D\u0432\u0430\u0440\u0435: 1,
        \u0444\u0435\u0432\u0440\u0430\u043B\u044C: 2,
        \u0444\u0435\u0432\u0440\u0430\u043B\u044F: 2,
        \u0444\u0435\u0432\u0440\u0430\u043B\u0435: 2,
        \u043C\u0430\u0440\u0442: 3,
        \u043C\u0430\u0440\u0442\u0430: 3,
        \u043C\u0430\u0440\u0442\u0435: 3,
        \u0430\u043F\u0440\u0435\u043B\u044C: 4,
        \u0430\u043F\u0440\u0435\u043B\u044F: 4,
        \u0430\u043F\u0440\u0435\u043B\u0435: 4,
        \u043C\u0430\u0439: 5,
        \u043C\u0430\u044F: 5,
        \u043C\u0430\u0435: 5,
        \u0438\u044E\u043D\u044C: 6,
        \u0438\u044E\u043D\u044F: 6,
        \u0438\u044E\u043D\u0435: 6,
        \u0438\u044E\u043B\u044C: 7,
        \u0438\u044E\u043B\u044F: 7,
        \u0438\u044E\u043B\u0435: 7,
        \u0430\u0432\u0433\u0443\u0441\u0442: 8,
        \u0430\u0432\u0433\u0443\u0441\u0442\u0430: 8,
        \u0430\u0432\u0433\u0443\u0441\u0442\u0435: 8,
        \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C: 9,
        \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F: 9,
        \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u0435: 9,
        \u043E\u043A\u0442\u044F\u0431\u0440\u044C: 10,
        \u043E\u043A\u0442\u044F\u0431\u0440\u044F: 10,
        \u043E\u043A\u0442\u044F\u0431\u0440\u0435: 10,
        \u043D\u043E\u044F\u0431\u0440\u044C: 11,
        \u043D\u043E\u044F\u0431\u0440\u044F: 11,
        \u043D\u043E\u044F\u0431\u0440\u0435: 11,
        \u0434\u0435\u043A\u0430\u0431\u0440\u044C: 12,
        \u0434\u0435\u043A\u0430\u0431\u0440\u044F: 12,
        \u0434\u0435\u043A\u0430\u0431\u0440\u0435: 12,
    },
    u = {
        ...l,
        \u044F\u043D\u0432: 1,
        "\u044F\u043D\u0432.": 1,
        \u0444\u0435\u0432: 2,
        "\u0444\u0435\u0432.": 2,
        \u043C\u0430\u0440: 3,
        "\u043C\u0430\u0440.": 3,
        \u0430\u043F\u0440: 4,
        "\u0430\u043F\u0440.": 4,
        \u0430\u0432\u0433: 8,
        "\u0430\u0432\u0433.": 8,
        \u0441\u0435\u043D: 9,
        "\u0441\u0435\u043D.": 9,
        \u043E\u043A\u0442: 10,
        "\u043E\u043A\u0442.": 10,
        \u043D\u043E\u044F: 11,
        "\u043D\u043E\u044F.": 11,
        \u0434\u0435\u043A: 12,
        "\u0434\u0435\u043A.": 12,
    },
    m = {
        \u043E\u0434\u0438\u043D: 1,
        \u043E\u0434\u043D\u0430: 1,
        \u043E\u0434\u043D\u043E\u0439: 1,
        \u043E\u0434\u043D\u0443: 1,
        \u0434\u0432\u0435: 2,
        \u0434\u0432\u0430: 2,
        \u0434\u0432\u0443\u0445: 2,
        \u0442\u0440\u0438: 3,
        \u0442\u0440\u0435\u0445: 3,
        \u0442\u0440\u0451\u0445: 3,
        \u0447\u0435\u0442\u044B\u0440\u0435: 4,
        \u0447\u0435\u0442\u044B\u0440\u0435\u0445: 4,
        \u0447\u0435\u0442\u044B\u0440\u0451\u0445: 4,
        \u043F\u044F\u0442\u044C: 5,
        \u043F\u044F\u0442\u0438: 5,
        \u0448\u0435\u0441\u0442\u044C: 6,
        \u0448\u0435\u0441\u0442\u0438: 6,
        \u0441\u0435\u043C\u044C: 7,
        \u0441\u0435\u043C\u0438: 7,
        \u0432\u043E\u0441\u0435\u043C\u044C: 8,
        \u0432\u043E\u0441\u044C\u043C\u0438: 8,
        \u0434\u0435\u0432\u044F\u0442\u044C: 9,
        \u0434\u0435\u0432\u044F\u0442\u0438: 9,
        \u0434\u0435\u0441\u044F\u0442\u044C: 10,
        \u0434\u0435\u0441\u044F\u0442\u0438: 10,
        \u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u044C: 11,
        \u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u0438: 11,
        \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u044C: 12,
        \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u0438: 12,
    },
    d = {
        \u043F\u0435\u0440\u0432\u043E\u0435: 1,
        \u043F\u0435\u0440\u0432\u043E\u0433\u043E: 1,
        \u0432\u0442\u043E\u0440\u043E\u0435: 2,
        \u0432\u0442\u043E\u0440\u043E\u0433\u043E: 2,
        \u0442\u0440\u0435\u0442\u044C\u0435: 3,
        \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E: 3,
        \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0435: 4,
        \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0433\u043E: 4,
        \u043F\u044F\u0442\u043E\u0435: 5,
        \u043F\u044F\u0442\u043E\u0433\u043E: 5,
        \u0448\u0435\u0441\u0442\u043E\u0435: 6,
        \u0448\u0435\u0441\u0442\u043E\u0433\u043E: 6,
        \u0441\u0435\u0434\u044C\u043C\u043E\u0435: 7,
        \u0441\u0435\u0434\u044C\u043C\u043E\u0433\u043E: 7,
        \u0432\u043E\u0441\u044C\u043C\u043E\u0435: 8,
        \u0432\u043E\u0441\u044C\u043C\u043E\u0433\u043E: 8,
        \u0434\u0435\u0432\u044F\u0442\u043E\u0435: 9,
        \u0434\u0435\u0432\u044F\u0442\u043E\u0433\u043E: 9,
        \u0434\u0435\u0441\u044F\u0442\u043E\u0435: 10,
        \u0434\u0435\u0441\u044F\u0442\u043E\u0433\u043E: 10,
        \u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 11,
        \u043E\u0434\u0438\u043D\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 11,
        \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 12,
        \u0434\u0432\u0435\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 12,
        \u0442\u0440\u0438\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 13,
        \u0442\u0440\u0438\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 13,
        \u0447\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 14,
        \u0447\u0435\u0442\u044B\u0440\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 14,
        \u043F\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 15,
        \u043F\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 15,
        \u0448\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 16,
        \u0448\u0435\u0441\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 16,
        \u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 17,
        \u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 17,
        \u0432\u043E\u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 18,
        \u0432\u043E\u0441\u0435\u043C\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 18,
        \u0434\u0435\u0432\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 19,
        \u0434\u0435\u0432\u044F\u0442\u043D\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 19,
        \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u043E\u0435: 20,
        \u0434\u0432\u0430\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 20,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0435": 21,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0433\u043E": 21,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0432\u0442\u043E\u0440\u043E\u0435": 22,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0432\u0442\u043E\u0440\u043E\u0433\u043E": 22,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0442\u0440\u0435\u0442\u044C\u0435": 23,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0442\u0440\u0435\u0442\u044C\u0435\u0433\u043E": 23,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0435": 24,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0433\u043E": 24,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u043F\u044F\u0442\u043E\u0435": 25,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u043F\u044F\u0442\u043E\u0433\u043E": 25,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0448\u0435\u0441\u0442\u043E\u0435": 26,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0448\u0435\u0441\u0442\u043E\u0433\u043E": 26,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0441\u0435\u0434\u044C\u043C\u043E\u0435": 27,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0441\u0435\u0434\u044C\u043C\u043E\u0433\u043E": 27,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0432\u043E\u0441\u044C\u043C\u043E\u0435": 28,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0432\u043E\u0441\u044C\u043C\u043E\u0433\u043E": 28,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0434\u0435\u0432\u044F\u0442\u043E\u0435": 29,
        "\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044C \u0434\u0435\u0432\u044F\u0442\u043E\u0433\u043E": 29,
        \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u043E\u0435: 30,
        \u0442\u0440\u0438\u0434\u0446\u0430\u0442\u043E\u0433\u043E: 30,
        "\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0435": 31,
        "\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u043E\u0433\u043E": 31,
    },
    c = {
        \u0441\u0435\u043A: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u0430: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u044B: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u0443: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u043E\u0447\u043A\u0430: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u043E\u0447\u043A\u0438: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u043E\u0447\u0435\u043A: "second",
        \u0441\u0435\u043A\u0443\u043D\u0434\u043E\u0447\u043A\u0443: "second",
        \u043C\u0438\u043D: "minute",
        \u043C\u0438\u043D\u0443\u0442\u0430: "minute",
        \u043C\u0438\u043D\u0443\u0442: "minute",
        \u043C\u0438\u043D\u0443\u0442\u044B: "minute",
        \u043C\u0438\u043D\u0443\u0442\u0443: "minute",
        \u043C\u0438\u043D\u0443\u0442\u043E\u043A: "minute",
        \u043C\u0438\u043D\u0443\u0442\u043A\u0438: "minute",
        \u043C\u0438\u043D\u0443\u0442\u043A\u0443: "minute",
        \u043C\u0438\u043D\u0443\u0442\u043E\u0447\u0435\u043A: "minute",
        \u043C\u0438\u043D\u0443\u0442\u043E\u0447\u043A\u0438: "minute",
        \u043C\u0438\u043D\u0443\u0442\u043E\u0447\u043A\u0443: "minute",
        \u0447\u0430\u0441: "hour",
        \u0447\u0430\u0441\u043E\u0432: "hour",
        \u0447\u0430\u0441\u0430: "hour",
        \u0447\u0430\u0441\u0443: "hour",
        \u0447\u0430\u0441\u0438\u043A\u043E\u0432: "hour",
        \u0447\u0430\u0441\u0438\u043A\u0430: "hour",
        \u0447\u0430\u0441\u0438\u043A\u0435: "hour",
        \u0447\u0430\u0441\u0438\u043A: "hour",
        \u0434\u0435\u043D\u044C: "day",
        \u0434\u043D\u044F: "day",
        \u0434\u043D\u0435\u0439: "day",
        \u0441\u0443\u0442\u043E\u043A: "day",
        \u0441\u0443\u0442\u043A\u0438: "day",
        \u043D\u0435\u0434\u0435\u043B\u044F: "week",
        \u043D\u0435\u0434\u0435\u043B\u0435: "week",
        \u043D\u0435\u0434\u0435\u043B\u0438: "week",
        \u043D\u0435\u0434\u0435\u043B\u044E: "week",
        \u043D\u0435\u0434\u0435\u043B\u044C: "week",
        \u043D\u0435\u0434\u0435\u043B\u044C\u043A\u0435: "week",
        \u043D\u0435\u0434\u0435\u043B\u044C\u043A\u0438: "week",
        \u043D\u0435\u0434\u0435\u043B\u0435\u043A: "week",
        \u043C\u0435\u0441\u044F\u0446: "month",
        \u043C\u0435\u0441\u044F\u0446\u0435: "month",
        \u043C\u0435\u0441\u044F\u0446\u0435\u0432: "month",
        \u043C\u0435\u0441\u044F\u0446\u0430: "month",
        \u043A\u0432\u0430\u0440\u0442\u0430\u043B: "quarter",
        \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u0435: "quarter",
        \u043A\u0432\u0430\u0440\u0442\u0430\u043B\u043E\u0432: "quarter",
        \u0433\u043E\u0434: "year",
        \u0433\u043E\u0434\u0430: "year",
        \u0433\u043E\u0434\u0443: "year",
        \u0433\u043E\u0434\u043E\u0432: "year",
        \u043B\u0435\u0442: "year",
        \u0433\u043E\u0434\u0438\u043A: "year",
        \u0433\u043E\u0434\u0438\u043A\u0430: "year",
        \u0433\u043E\u0434\u0438\u043A\u043E\u0432: "year",
    },
    g = `(?:${(0, n.uJ)(m)}|[0-9]+|[0-9]+\\.[0-9]+|\u{43F}\u{43E}\u{43B}|\u{43D}\u{435}\u{441}\u{43A}\u{43E}\u{43B}\u{44C}\u{43A}\u{43E}|\u{43F}\u{430}\u{440}(?:\u{44B}|\u{443})|\\s{0,3})`,
    h = `(?:${(0, n.uJ)(d)}|[0-9]{1,2}(?:\u{433}\u{43E}|\u{43E}\u{433}\u{43E}|\u{435}|\u{43E}\u{435})?)`;
function f(e) {
    let t = e.toLowerCase();
    return void 0 !== d[t] ? d[t] : parseInt(t);
}
let p = "(?:\\s+(?:\u0433\u043E\u0434\u0443|\u0433\u043E\u0434\u0430|\u0433\u043E\u0434|\u0433|\u0433.))?",
    y = `(?:[1-9][0-9]{0,3}${p}\\s*(?:\u{43D}.\u{44D}.|\u{434}\u{43E} \u{43D}.\u{44D}.|\u{43D}. \u{44D}.|\u{434}\u{43E} \u{43D}. \u{44D}.)|[1-2][0-9]{3}${p}|[5-9][0-9]${p})`;
function x(e) {
    if (
        (/(\u0433\u043e\u0434|\u0433\u043e\u0434\u0430|\u0433|\u0433.)/i.test(e) &&
            (e = e.replace(/(\u0433\u043e\u0434|\u0433\u043e\u0434\u0430|\u0433|\u0433.)/i, "")),
        /(\u0434\u043e \u043d.\u044d.|\u0434\u043e \u043d. \u044d.)/i.test(e))
    )
        return -parseInt((e = e.replace(/(\u0434\u043e \u043d.\u044d.|\u0434\u043e \u043d. \u044d.)/i, "")));
    if (/(\u043d. \u044d.|\u043d.\u044d.)/i.test(e))
        return parseInt((e = e.replace(/(\u043d. \u044d.|\u043d.\u044d.)/i, "")));
    let t = parseInt(e);
    return (0, s.D)(t);
}
let w = `(${g})\\s{0,3}(${(0, n.uJ)(c)})`,
    D = RegExp(w, "i"),
    P = (0, n.mb)(
        "(?:(?:\u043E\u043A\u043E\u043B\u043E|\u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E)\\s{0,3})?",
        w,
    );
function F(e) {
    let t = {},
        r = e,
        n = D.exec(r);
    for (; n; )
        (function (e, t) {
            let r = (function (e) {
                let t = e.toLowerCase();
                return void 0 !== m[t]
                    ? m[t]
                    : t.match(/\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e/)
                      ? 3
                      : t.match(/\u043f\u043e\u043b/)
                        ? 0.5
                        : t.match(/\u043f\u0430\u0440/)
                          ? 2
                          : "" === t
                            ? 1
                            : parseFloat(t);
            })(t[1]);
            e[c[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length).trim()),
            (n = D.exec(r));
    return t;
}
var C = r(374372),
    T = r(355418);
let v = `(?:(?:\u{43E}\u{43A}\u{43E}\u{43B}\u{43E}|\u{43F}\u{440}\u{438}\u{43C}\u{435}\u{440}\u{43D}\u{43E})\\s*(?:~\\s*)?)?(${P})${i}`;
class M extends T.c {
    patternLeftBoundary() {
        return a;
    }
    innerPattern(e) {
        return e.option.forwardDate
            ? RegExp(v, "iu")
            : RegExp(
                  `(?:\u{432} \u{442}\u{435}\u{447}\u{435}\u{43D}\u{438}\u{435}|\u{432} \u{442}\u{435}\u{447}\u{435}\u{43D}\u{438}\u{438})\\s*${v}`,
                  "iu",
              );
    }
    innerExtract(e, t) {
        let r = F(t[1]);
        return C.BP.createRelativeFromReference(e.reference, r);
    }
}
class $ extends T.c {
    patternLeftBoundary() {
        return a;
    }
    innerPattern(e) {
        return RegExp(this.innerPatternString(e), "iu");
    }
    innerPatternHasChange(e, t) {
        return !1;
    }
}
class R extends $ {
    innerPattern(e) {
        return RegExp(`${this.innerPatternString(e)}${i}`, "iu");
    }
}
class E extends R {
    innerPatternString(e) {
        return `(?:\u{441})?\\s*(${h})(?:\\s{0,3}(?:\u{43F}\u{43E}|-|\u{2013}|\u{434}\u{43E})?\\s{0,3}(${h}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${(0, n.uJ)(u)})(?:(?:-|\\/|,?\\s{0,3})(${y}(?![^\\s]\\d)))?`;
    }
    innerExtract(e, t) {
        let r = e.createParsingResult(t.index, t[0]),
            n = u[t[3].toLowerCase()],
            a = f(t[1]);
        if (a > 31) return (t.index = t.index + t[1].length), null;
        if ((r.start.assign("month", n), r.start.assign("day", a), t[4])) {
            let e = x(t[4]);
            r.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, a, n);
            r.start.imply("year", t);
        }
        if (t[2]) {
            let e = f(t[2]);
            (r.end = r.start.clone()), r.end.assign("day", e);
        }
        return r;
    }
}
class b extends $ {
    innerPatternString(e) {
        return `((?:\u{432})\\s*)?(${(0, n.uJ)(u)})\\s*(?:[,-]?\\s*(${y})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`;
    }
    innerExtract(e, t) {
        let r = t[2].toLowerCase();
        if (t[0].length <= 3 && !l[r]) return null;
        let n = e.createParsingResult(t.index, t.index + t[0].length);
        n.start.imply("day", 1);
        let a = u[r];
        if ((n.start.assign("month", a), t[3])) {
            let e = x(t[3]);
            n.start.assign("year", e);
        } else {
            let t = (0, s.Y)(e.refDate, 1, a);
            n.start.imply("year", t);
        }
        return n;
    }
}
var A = r(322811),
    k = r(985971);
class j extends k.B {
    constructor(e) {
        super(e);
    }
    patternFlags() {
        return "iu";
    }
    primaryPatternLeftBoundary() {
        return "(^|\\s|T|(?:[^\\p{L}\\p{N}_]))";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|\u0434\u043E|\u0438|\u043F\u043E|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:\u0432|\u0441)\\s*)??";
    }
    primarySuffix() {
        return `(?:\\s*(?:\u{443}\u{442}\u{440}\u{430}|\u{432}\u{435}\u{447}\u{435}\u{440}\u{430}|\u{43F}\u{43E}\u{441}\u{43B}\u{435} \u{43F}\u{43E}\u{43B}\u{443}\u{434}\u{43D}\u{44F}))?(?!\\/)${i}`;
    }
    extractPrimaryTimeComponents(e, t) {
        let r = super.extractPrimaryTimeComponents(e, t);
        if (r) {
            if (t[0].endsWith("\u0432\u0435\u0447\u0435\u0440\u0430")) {
                let e = r.get("hour");
                e >= 6 && e < 12
                    ? (r.assign("hour", r.get("hour") + 12), r.assign("meridiem", A.FF.PM))
                    : e < 6 && r.assign("meridiem", A.FF.AM);
            }
            if (t[0].endsWith("\u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0434\u043D\u044F")) {
                r.assign("meridiem", A.FF.PM);
                let e = r.get("hour");
                e >= 0 && e <= 6 && r.assign("hour", r.get("hour") + 12);
            }
            t[0].endsWith("\u0443\u0442\u0440\u0430") &&
                (r.assign("meridiem", A.FF.AM), 12 > r.get("hour") && r.assign("hour", r.get("hour")));
        }
        return r;
    }
}
var B = r(632434);
class W extends $ {
    innerPatternString(e) {
        return `(${P})\\s{0,5}\u{43D}\u{430}\u{437}\u{430}\u{434}(?=(?:\\W|$))`;
    }
    innerExtract(e, t) {
        let r = F(t[1]),
            n = (0, B.x4)(r);
        return C.BP.createRelativeFromReference(e.reference, n);
    }
}
var S = r(172609);
class I extends S.A {
    patternBetween() {
        return /^\s*(\u0438 \u0434\u043e|\u0438 \u043f\u043e|\u0434\u043e|\u043f\u043e|-)\s*$/i;
    }
}
var Y = r(230205);
class z extends Y.A {
    patternBetween() {
        return RegExp("^\\s*(T|\u0432|,|-)?\\s*$");
    }
}
var L = r(132588),
    N = r(996483);
class O extends R {
    innerPatternString(e) {
        return "(?:\u0441|\u0441\u043E)?\\s*(\u0441\u0435\u0433\u043E\u0434\u043D\u044F|\u0432\u0447\u0435\u0440\u0430|\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0441\u043B\u0435\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430|\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430|\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430)";
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "\u0441\u0435\u0433\u043E\u0434\u043D\u044F":
                return N.Ec(e.reference);
            case "\u0432\u0447\u0435\u0440\u0430":
                return N.jI(e.reference);
            case "\u0437\u0430\u0432\u0442\u0440\u0430":
                return N.uf(e.reference);
            case "\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430":
                return N.AV(e.reference, 2);
            case "\u043F\u043E\u0441\u043B\u0435\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430":
                return N.AV(e.reference, 3);
            case "\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430":
                return N.ti(e.reference, 2);
            case "\u043F\u043E\u0437\u0430\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430":
                return N.ti(e.reference, 3);
        }
        return n;
    }
}
var J = r(881190);
class q extends R {
    innerPatternString(e) {
        return "(\u0441\u0435\u0439\u0447\u0430\u0441|\u043F\u0440\u043E\u0448\u043B\u044B\u043C\\s*\u0432\u0435\u0447\u0435\u0440\u043E\u043C|\u043F\u0440\u043E\u0448\u043B\u043E\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u0441\u0435\u0433\u043E\u0434\u043D\u044F\\s*\u043D\u043E\u0447\u044C\u044E|\u044D\u0442\u043E\u0439\\s*\u043D\u043E\u0447\u044C\u044E|\u043D\u043E\u0447\u044C\u044E|\u044D\u0442\u0438\u043C \u0443\u0442\u0440\u043E\u043C|\u0443\u0442\u0440\u043E\u043C|\u0443\u0442\u0440\u0430|\u0432\\s*\u043F\u043E\u043B\u0434\u0435\u043D\u044C|\u0432\u0435\u0447\u0435\u0440\u043E\u043C|\u0432\u0435\u0447\u0435\u0440\u0430|\u0432\\s*\u043F\u043E\u043B\u043D\u043E\u0447\u044C)";
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = t[0].toLowerCase(),
            s = e.createParsingComponents();
        if ("\u0441\u0435\u0439\u0447\u0430\u0441" === n) return N.tB(e.reference);
        if ("\u0432\u0435\u0447\u0435\u0440\u043E\u043C" === n || "\u0432\u0435\u0447\u0435\u0440\u0430" === n)
            return N.Jp(e.reference);
        if (n.endsWith("\u0443\u0442\u0440\u043E\u043C") || n.endsWith("\u0443\u0442\u0440\u0430"))
            return N.F1(e.reference);
        if (n.match(/\u0432\s*\u043f\u043e\u043b\u0434\u0435\u043d\u044c/)) return N.zW(e.reference);
        if (n.match(/\u043f\u0440\u043e\u0448\u043b\u043e\u0439\s*\u043d\u043e\u0447\u044c\u044e/))
            return N.zr(e.reference);
        if (n.match(/\u043f\u0440\u043e\u0448\u043b\u044b\u043c\s*\u0432\u0435\u0447\u0435\u0440\u043e\u043c/))
            return N.Z6(e.reference);
        if (n.match(/\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439\s*\u043d\u043e\u0447\u044c\u044e/)) {
            let e = 22 > r.getHours() ? 1 : 2,
                t = new Date(r.getTime());
            t.setDate(t.getDate() + e), (0, J.Pl)(s, t), s.imply("hour", 0);
        }
        return n.match(/\u0432\s*\u043f\u043e\u043b\u043d\u043e\u0447\u044c/) ||
            n.endsWith("\u043D\u043E\u0447\u044C\u044E")
            ? N.Bm(e.reference)
            : s;
    }
}
var H = r(1673);
class V extends R {
    innerPatternString(e) {
        return `(?:(?:,|\\(|\u{FF08})\\s*)?(?:\u{432}\\s*?)?(?:(\u{44D}\u{442}\u{443}|\u{44D}\u{442}\u{43E}\u{442}|\u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{44B}\u{439}|\u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{443}\u{44E}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{438}\u{439}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{443}\u{44E}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{435}\u{433}\u{43E})\\s*)?(${(0, n.uJ)(o)})(?:\\s*(?:,|\\)|\u{FF09}))?(?:\\s*\u{43D}\u{430}\\s*(\u{44D}\u{442}\u{43E}\u{439}|\u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{43E}\u{439}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{435}\u{439})\\s*\u{43D}\u{435}\u{434}\u{435}\u{43B}\u{435})?`;
    }
    innerExtract(e, t) {
        let r = o[t[2].toLowerCase()],
            n = t[1],
            s = t[3],
            a = n || s;
        a = (a = a || "").toLowerCase();
        let i = null;
        return (
            "\u043F\u0440\u043E\u0448\u043B\u044B\u0439" == a ||
            "\u043F\u0440\u043E\u0448\u043B\u0443\u044E" == a ||
            "\u043F\u0440\u043E\u0448\u043B\u043E\u0439" == a
                ? (i = "last")
                : "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439" == a ||
                    "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E" == a ||
                    "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439" == a ||
                    "\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E" == a
                  ? (i = "next")
                  : ("\u044D\u0442\u043E\u0442" == a || "\u044D\u0442\u0443" == a || "\u044D\u0442\u043E\u0439" == a) &&
                    (i = "this"),
            (0, H.Y5)(e.reference, r, i)
        );
    }
}
class U extends R {
    innerPatternString(e) {
        return `(\u{432} \u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{43E}\u{43C}|\u{43D}\u{430} \u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{43E}\u{439}|\u{43D}\u{430} \u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{435}\u{439}|\u{432} \u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{435}\u{43C}|\u{43D}\u{430} \u{44D}\u{442}\u{43E}\u{439}|\u{432} \u{44D}\u{442}\u{43E}\u{43C})\\s*(${(0, n.uJ)(c)})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = c[t[2].toLowerCase()];
        if (
            "\u043D\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439" == r ||
            "\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C" == r
        ) {
            let t = {};
            return (t[n] = 1), C.BP.createRelativeFromReference(e.reference, t);
        }
        if (
            "\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u043C" == r ||
            "\u043D\u0430 \u043F\u0440\u043E\u0448\u043B\u043E\u0439" == r
        ) {
            let t = {};
            return (t[n] = -1), C.BP.createRelativeFromReference(e.reference, t);
        }
        let s = e.createParsingComponents(),
            a = new Date(e.reference.instant.getTime());
        return (
            n.match(/week/i)
                ? (a.setDate(a.getDate() - a.getDay()),
                  s.imply("day", a.getDate()),
                  s.imply("month", a.getMonth() + 1),
                  s.imply("year", a.getFullYear()))
                : n.match(/month/i)
                  ? (a.setDate(1),
                    s.imply("day", a.getDate()),
                    s.assign("year", a.getFullYear()),
                    s.assign("month", a.getMonth() + 1))
                  : n.match(/year/i) &&
                    (a.setDate(1),
                    a.setMonth(0),
                    s.imply("day", a.getDate()),
                    s.imply("month", a.getMonth() + 1),
                    s.assign("year", a.getFullYear())),
            s
        );
    }
}
var G = r(880683),
    Z = r(774188);
class K extends R {
    innerPatternString(e) {
        return `(\u{44D}\u{442}\u{438}|\u{43F}\u{43E}\u{441}\u{43B}\u{435}\u{434}\u{43D}\u{438}\u{435}|\u{43F}\u{440}\u{43E}\u{448}\u{43B}\u{44B}\u{435}|\u{441}\u{43B}\u{435}\u{434}\u{443}\u{44E}\u{449}\u{438}\u{435}|\u{43F}\u{43E}\u{441}\u{43B}\u{435}|\u{441}\u{43F}\u{443}\u{441}\u{442}\u{44F}|\u{447}\u{435}\u{440}\u{435}\u{437}|\\+|-)\\s*(${P})`;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = F(t[2]);
        switch (r) {
            case "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435":
            case "\u043F\u0440\u043E\u0448\u043B\u044B\u0435":
            case "-":
                n = (0, B.x4)(n);
        }
        return C.BP.createRelativeFromReference(e.reference, n);
    }
}
let _ = new G.u(et()),
    X = new G.u(er(!0));
function Q(e, t, r) {
    return _.parse(e, t, r);
}
function ee(e, t, r) {
    return _.parseDate(e, t, r);
}
function et() {
    let e = er(!1);
    return (
        e.parsers.unshift(new O()),
        e.parsers.unshift(new q()),
        e.parsers.unshift(new b()),
        e.parsers.unshift(new U()),
        e.parsers.unshift(new K()),
        e
    );
}
function er(e = !0) {
    return (0, L.i)(
        { parsers: [new Z.A(!0), new M(), new E(), new V(), new j(e), new W()], refiners: [new z(), new I()] },
        e,
    );
}
