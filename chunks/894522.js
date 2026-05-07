!(function (e) {
    "use strict";
    var t = {
            1: "\u09E7",
            2: "\u09E8",
            3: "\u09E9",
            4: "\u09EA",
            5: "\u09EB",
            6: "\u09EC",
            7: "\u09ED",
            8: "\u09EE",
            9: "\u09EF",
            0: "\u09E6",
        },
        n = {
            "\u09E7": "1",
            "\u09E8": "2",
            "\u09E9": "3",
            "\u09EA": "4",
            "\u09EB": "5",
            "\u09EC": "6",
            "\u09ED": "7",
            "\u09EE": "8",
            "\u09EF": "9",
            "\u09E6": "0",
        };
    e.defineLocale("bn", {
        months: "\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09C0_\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF_\u09AE\u09BE\u09B0\u09CD\u099A_\u098F\u09AA\u09CD\u09B0\u09BF\u09B2_\u09AE\u09C7_\u099C\u09C1\u09A8_\u099C\u09C1\u09B2\u09BE\u0987_\u0986\u0997\u09B8\u09CD\u099F_\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0_\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0_\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0_\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0".split(
            "_",
        ),
        monthsShort:
            "\u099C\u09BE\u09A8\u09C1_\u09AB\u09C7\u09AC_\u09AE\u09BE\u09B0\u09CD\u099A_\u098F\u09AA\u09CD\u09B0_\u09AE\u09C7_\u099C\u09C1\u09A8_\u099C\u09C1\u09B2_\u0986\u0997_\u09B8\u09C7\u09AA\u09CD\u099F_\u0985\u0995\u09CD\u099F\u09CB_\u09A8\u09AD\u09C7_\u09A1\u09BF\u09B8\u09C7".split(
                "_",
            ),
        weekdays:
            "\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0_\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0_\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0_\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0_\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0_\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0_\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0".split(
                "_",
            ),
        weekdaysShort:
            "\u09B0\u09AC\u09BF_\u09B8\u09CB\u09AE_\u09AE\u0999\u09CD\u0997\u09B2_\u09AC\u09C1\u09A7_\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF_\u09B6\u09C1\u0995\u09CD\u09B0_\u09B6\u09A8\u09BF".split(
                "_",
            ),
        weekdaysMin:
            "\u09B0\u09AC\u09BF_\u09B8\u09CB\u09AE_\u09AE\u0999\u09CD\u0997_\u09AC\u09C1\u09A7_\u09AC\u09C3\u09B9\u0983_\u09B6\u09C1\u0995\u09CD\u09B0_\u09B6\u09A8\u09BF".split(
                "_",
            ),
        longDateFormat: {
            LT: "A h:mm \u09B8\u09AE\u09DF",
            LTS: "A h:mm:ss \u09B8\u09AE\u09DF",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u09B8\u09AE\u09DF",
        },
        calendar: {
            sameDay: "[\u0986\u099C] LT",
            nextDay: "[\u0986\u0997\u09BE\u09AE\u09C0\u0995\u09BE\u09B2] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0997\u09A4\u0995\u09BE\u09B2] LT",
            lastWeek: "[\u0997\u09A4] dddd, LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s \u09AA\u09B0\u09C7",
            past: "%s \u0986\u0997\u09C7",
            s: "\u0995\u09DF\u09C7\u0995 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
            ss: "%d \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
            m: "\u098F\u0995 \u09AE\u09BF\u09A8\u09BF\u099F",
            mm: "%d \u09AE\u09BF\u09A8\u09BF\u099F",
            h: "\u098F\u0995 \u0998\u09A8\u09CD\u099F\u09BE",
            hh: "%d \u0998\u09A8\u09CD\u099F\u09BE",
            d: "\u098F\u0995 \u09A6\u09BF\u09A8",
            dd: "%d \u09A6\u09BF\u09A8",
            M: "\u098F\u0995 \u09AE\u09BE\u09B8",
            MM: "%d \u09AE\u09BE\u09B8",
            y: "\u098F\u0995 \u09AC\u099B\u09B0",
            yy: "%d \u09AC\u099B\u09B0",
        },
        preparse: function (e) {
            return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, function (e) {
                return n[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return t[e];
            });
        },
        meridiemParse:
            /\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,
        meridiemHour: function (e, t) {
            return (12 === e && (e = 0),
            ("\u09B0\u09BE\u09A4" === t && e >= 4) ||
                ("\u09A6\u09C1\u09AA\u09C1\u09B0" === t && e < 5) ||
                "\u09AC\u09BF\u0995\u09BE\u09B2" === t)
                ? e + 12
                : e;
        },
        meridiem: function (e, t, n) {
            return e < 4
                ? "\u09B0\u09BE\u09A4"
                : e < 10
                  ? "\u09B8\u0995\u09BE\u09B2"
                  : e < 17
                    ? "\u09A6\u09C1\u09AA\u09C1\u09B0"
                    : e < 20
                      ? "\u09AC\u09BF\u0995\u09BE\u09B2"
                      : "\u09B0\u09BE\u09A4";
        },
        week: { dow: 0, doy: 6 },
    });
})(n(989349));
