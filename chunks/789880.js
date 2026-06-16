!(function (e) {
    "use strict";
    var t = {
            1: "\u1041",
            2: "\u1042",
            3: "\u1043",
            4: "\u1044",
            5: "\u1045",
            6: "\u1046",
            7: "\u1047",
            8: "\u1048",
            9: "\u1049",
            0: "\u1040",
        },
        n = {
            "\u1041": "1",
            "\u1042": "2",
            "\u1043": "3",
            "\u1044": "4",
            "\u1045": "5",
            "\u1046": "6",
            "\u1047": "7",
            "\u1048": "8",
            "\u1049": "9",
            "\u1040": "0",
        };
    e.defineLocale("my", {
        months: "\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E_\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E_\u1019\u1010\u103A_\u1027\u1015\u103C\u102E_\u1019\u1031_\u1007\u103D\u1014\u103A_\u1007\u1030\u101C\u102D\u102F\u1004\u103A_\u101E\u103C\u1002\u102F\u1010\u103A_\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C_\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C_\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C_\u1012\u102E\u1007\u1004\u103A\u1018\u102C".split(
            "_",
        ),
        monthsShort:
            "\u1007\u1014\u103A_\u1016\u1031_\u1019\u1010\u103A_\u1015\u103C\u102E_\u1019\u1031_\u1007\u103D\u1014\u103A_\u101C\u102D\u102F\u1004\u103A_\u101E\u103C_\u1005\u1000\u103A_\u1021\u1031\u102C\u1000\u103A_\u1014\u102D\u102F_\u1012\u102E".split(
                "_",
            ),
        weekdays:
            "\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031_\u1010\u1014\u1004\u103A\u1039\u101C\u102C_\u1021\u1004\u103A\u1039\u1002\u102B_\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038_\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038_\u101E\u1031\u102C\u1000\u103C\u102C_\u1005\u1014\u1031".split(
                "_",
            ),
        weekdaysShort:
            "\u1014\u103D\u1031_\u101C\u102C_\u1002\u102B_\u101F\u1030\u1038_\u1000\u103C\u102C_\u101E\u1031\u102C_\u1014\u1031".split(
                "_",
            ),
        weekdaysMin:
            "\u1014\u103D\u1031_\u101C\u102C_\u1002\u102B_\u101F\u1030\u1038_\u1000\u103C\u102C_\u101E\u1031\u102C_\u1014\u1031".split(
                "_",
            ),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm",
        },
        calendar: {
            sameDay: "[\u101A\u1014\u1031.] LT [\u1019\u103E\u102C]",
            nextDay: "[\u1019\u1014\u1000\u103A\u1016\u103C\u1014\u103A] LT [\u1019\u103E\u102C]",
            nextWeek: "dddd LT [\u1019\u103E\u102C]",
            lastDay: "[\u1019\u1014\u1031.\u1000] LT [\u1019\u103E\u102C]",
            lastWeek: "[\u1015\u103C\u102E\u1038\u1001\u1032\u1037\u101E\u1031\u102C] dddd LT [\u1019\u103E\u102C]",
            sameElse: "L",
        },
        relativeTime: {
            future: "\u101C\u102C\u1019\u100A\u103A\u1037 %s \u1019\u103E\u102C",
            past: "\u101C\u103D\u1014\u103A\u1001\u1032\u1037\u101E\u1031\u102C %s \u1000",
            s: "\u1005\u1000\u1039\u1000\u1014\u103A.\u1021\u1014\u100A\u103A\u1038\u1004\u101A\u103A",
            ss: "%d \u1005\u1000\u1039\u1000\u1014\u1037\u103A",
            m: "\u1010\u1005\u103A\u1019\u102D\u1014\u1005\u103A",
            mm: "%d \u1019\u102D\u1014\u1005\u103A",
            h: "\u1010\u1005\u103A\u1014\u102C\u101B\u102E",
            hh: "%d \u1014\u102C\u101B\u102E",
            d: "\u1010\u1005\u103A\u101B\u1000\u103A",
            dd: "%d \u101B\u1000\u103A",
            M: "\u1010\u1005\u103A\u101C",
            MM: "%d \u101C",
            y: "\u1010\u1005\u103A\u1014\u103E\u1005\u103A",
            yy: "%d \u1014\u103E\u1005\u103A",
        },
        preparse: function (e) {
            return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g, function (e) {
                return n[e];
            });
        },
        postformat: function (e) {
            return e.replace(/\d/g, function (e) {
                return t[e];
            });
        },
        week: { dow: 1, doy: 4 },
    });
})(n(989349));
