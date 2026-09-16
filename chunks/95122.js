!(function (_) {
    function e(_, e, t) {
        var s, a, i;
        return "m" === t
            ? e
                ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430"
                : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443"
            : "h" === t
              ? e
                  ? "\u0433\u043E\u0434\u0438\u043D\u0430"
                  : "\u0433\u043E\u0434\u0438\u043D\u0443"
              : _ +
                " " +
                ((s = {
                    ss: e
                        ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434"
                        : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434",
                    mm: e
                        ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D"
                        : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D",
                    hh: e
                        ? "\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D"
                        : "\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D",
                    dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432",
                    MM: "\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432",
                    yy: "\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432",
                }[t]),
                (a = +_),
                (i = s.split("_")),
                a % 10 == 1 && a % 100 != 11
                    ? i[0]
                    : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)
                      ? i[1]
                      : i[2]);
    }
    function t(_) {
        return function () {
            return _ + "\u043E" + (11 === this.hours() ? "\u0431" : "") + "] LT";
        };
    }
    _.defineLocale("uk", {
        months: {
            format: "\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split(
                "_",
            ),
            standalone:
                "\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split(
                    "_",
                ),
        },
        monthsShort:
            "\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split(
                "_",
            ),
        weekdays: function (_, e) {
            var t = {
                nominative:
                    "\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split(
                        "_",
                    ),
                accusative:
                    "\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split(
                        "_",
                    ),
                genitive:
                    "\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split(
                        "_",
                    ),
            };
            return !0 === _
                ? t.nominative.slice(1, 7).concat(t.nominative.slice(0, 1))
                : _
                  ? t[
                        /(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(e)
                            ? "accusative"
                            : /\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(
                                    e,
                                )
                              ? "genitive"
                              : "nominative"
                    ][_.day()]
                  : t.nominative;
        },
        weekdaysShort:
            "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split(
            "_",
        ),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY \u0440.",
            LLL: "D MMMM YYYY \u0440., HH:mm",
            LLLL: "dddd, D MMMM YYYY \u0440., HH:mm",
        },
        calendar: {
            sameDay: t("[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 "),
            nextDay: t("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
            lastDay: t("[\u0412\u0447\u043E\u0440\u0430 "),
            nextWeek: t("[\u0423] dddd ["),
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return t("[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [").call(this);
                    case 1:
                    case 2:
                    case 4:
                        return t("[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [").call(this);
                }
            },
            sameElse: "L",
        },
        relativeTime: {
            future: "\u0437\u0430 %s",
            past: "%s \u0442\u043E\u043C\u0443",
            s: "\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434",
            ss: e,
            m: e,
            mm: e,
            h: "\u0433\u043E\u0434\u0438\u043D\u0443",
            hh: e,
            d: "\u0434\u0435\u043D\u044C",
            dd: e,
            M: "\u043C\u0456\u0441\u044F\u0446\u044C",
            MM: e,
            y: "\u0440\u0456\u043A",
            yy: e,
        },
        meridiemParse:
            /\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,
        isPM: function (_) {
            return /^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(_);
        },
        meridiem: function (_, e, t) {
            return _ < 4
                ? "\u043D\u043E\u0447\u0456"
                : _ < 12
                  ? "\u0440\u0430\u043D\u043A\u0443"
                  : _ < 17
                    ? "\u0434\u043D\u044F"
                    : "\u0432\u0435\u0447\u043E\u0440\u0430";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(\u0439|\u0433\u043e)/,
        ordinal: function (_, e) {
            switch (e) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                    return _ + "-\u0439";
                case "D":
                    return _ + "-\u0433\u043E";
                default:
                    return _;
            }
        },
        week: { dow: 1, doy: 7 },
    });
})(t(536637));
