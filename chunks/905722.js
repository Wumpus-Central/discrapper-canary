!(function (e) {
    "use strict";
    var t = {
            1: "\u0AE7",
            2: "\u0AE8",
            3: "\u0AE9",
            4: "\u0AEA",
            5: "\u0AEB",
            6: "\u0AEC",
            7: "\u0AED",
            8: "\u0AEE",
            9: "\u0AEF",
            0: "\u0AE6",
        },
        n = {
            "\u0AE7": "1",
            "\u0AE8": "2",
            "\u0AE9": "3",
            "\u0AEA": "4",
            "\u0AEB": "5",
            "\u0AEC": "6",
            "\u0AED": "7",
            "\u0AEE": "8",
            "\u0AEF": "9",
            "\u0AE6": "0",
        };
    e.defineLocale("gu", {
        months: "\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1\u0A86\u0AB0\u0AC0_\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1\u0A86\u0AB0\u0AC0_\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A_\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2_\u0AAE\u0AC7_\u0A9C\u0AC2\u0AA8_\u0A9C\u0AC1\u0AB2\u0ABE\u0A88_\u0A91\u0A97\u0AB8\u0ACD\u0A9F_\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0_\u0A91\u0A95\u0ACD\u0A9F\u0ACD\u0AAC\u0AB0_\u0AA8\u0AB5\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0_\u0AA1\u0ABF\u0AB8\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0".split(
            "_",
        ),
        monthsShort:
            "\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1._\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1._\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A_\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF._\u0AAE\u0AC7_\u0A9C\u0AC2\u0AA8_\u0A9C\u0AC1\u0AB2\u0ABE._\u0A91\u0A97._\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7._\u0A91\u0A95\u0ACD\u0A9F\u0ACD._\u0AA8\u0AB5\u0AC7._\u0AA1\u0ABF\u0AB8\u0AC7.".split(
                "_",
            ),
        monthsParseExact: !0,
        weekdays:
            "\u0AB0\u0AB5\u0ABF\u0AB5\u0ABE\u0AB0_\u0AB8\u0ACB\u0AAE\u0AB5\u0ABE\u0AB0_\u0AAE\u0A82\u0A97\u0AB3\u0AB5\u0ABE\u0AB0_\u0AAC\u0AC1\u0AA7\u0ACD\u0AB5\u0ABE\u0AB0_\u0A97\u0AC1\u0AB0\u0AC1\u0AB5\u0ABE\u0AB0_\u0AB6\u0AC1\u0A95\u0ACD\u0AB0\u0AB5\u0ABE\u0AB0_\u0AB6\u0AA8\u0ABF\u0AB5\u0ABE\u0AB0".split(
                "_",
            ),
        weekdaysShort:
            "\u0AB0\u0AB5\u0ABF_\u0AB8\u0ACB\u0AAE_\u0AAE\u0A82\u0A97\u0AB3_\u0AAC\u0AC1\u0AA7\u0ACD_\u0A97\u0AC1\u0AB0\u0AC1_\u0AB6\u0AC1\u0A95\u0ACD\u0AB0_\u0AB6\u0AA8\u0ABF".split(
                "_",
            ),
        weekdaysMin: "\u0AB0_\u0AB8\u0ACB_\u0AAE\u0A82_\u0AAC\u0AC1_\u0A97\u0AC1_\u0AB6\u0AC1_\u0AB6".split("_"),
        longDateFormat: {
            LT: "A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
            LTS: "A h:mm:ss \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
            LLLL: "dddd, D MMMM YYYY, A h:mm \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7",
        },
        calendar: {
            sameDay: "[\u0A86\u0A9C] LT",
            nextDay: "[\u0A95\u0ABE\u0AB2\u0AC7] LT",
            nextWeek: "dddd, LT",
            lastDay: "[\u0A97\u0A87\u0A95\u0ABE\u0AB2\u0AC7] LT",
            lastWeek: "[\u0AAA\u0ABE\u0A9B\u0AB2\u0ABE] dddd, LT",
            sameElse: "L",
        },
        relativeTime: {
            future: "%s \u0AAE\u0ABE",
            past: "%s \u0AAA\u0AC7\u0AB9\u0AB2\u0ABE",
            s: "\u0A85\u0AAE\u0AC1\u0A95 \u0AAA\u0AB3\u0ACB",
            ss: "%d \u0AB8\u0AC7\u0A95\u0A82\u0AA1",
            m: "\u0A8F\u0A95 \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
            mm: "%d \u0AAE\u0ABF\u0AA8\u0ABF\u0A9F",
            h: "\u0A8F\u0A95 \u0A95\u0AB2\u0ABE\u0A95",
            hh: "%d \u0A95\u0AB2\u0ABE\u0A95",
            d: "\u0A8F\u0A95 \u0AA6\u0ABF\u0AB5\u0AB8",
            dd: "%d \u0AA6\u0ABF\u0AB5\u0AB8",
            M: "\u0A8F\u0A95 \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB",
            MM: "%d \u0AAE\u0AB9\u0ABF\u0AA8\u0ACB",
            y: "\u0A8F\u0A95 \u0AB5\u0AB0\u0ACD\u0AB7",
            yy: "%d \u0AB5\u0AB0\u0ACD\u0AB7",
        },
        preparse: function (e) {
            return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g, function (e) {
                return n[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return t[e];
            });
        },
        meridiemParse: /\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,
        meridiemHour: function (e, t) {
            return (12 === e && (e = 0), "\u0AB0\u0ABE\u0AA4" === t)
                ? e < 4
                    ? e
                    : e + 12
                : "\u0AB8\u0AB5\u0ABE\u0AB0" === t
                  ? e
                  : "\u0AAC\u0AAA\u0ACB\u0AB0" === t
                    ? e >= 10
                        ? e
                        : e + 12
                    : "\u0AB8\u0ABE\u0A82\u0A9C" === t
                      ? e + 12
                      : void 0;
        },
        meridiem: function (e, t, n) {
            return e < 4
                ? "\u0AB0\u0ABE\u0AA4"
                : e < 10
                  ? "\u0AB8\u0AB5\u0ABE\u0AB0"
                  : e < 17
                    ? "\u0AAC\u0AAA\u0ACB\u0AB0"
                    : e < 20
                      ? "\u0AB8\u0ABE\u0A82\u0A9C"
                      : "\u0AB0\u0ABE\u0AA4";
        },
        week: { dow: 0, doy: 6 },
    });
})(n(989349));
