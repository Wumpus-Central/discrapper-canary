a.d(t, { A: () => r });
var i = a(981737);
let r = {
    ordinalNumber: function (e, t) {
        return Number(e) + ".";
    },
    era: (0, i.A)({
        values: {
            narrow: ["ie.", "isz."],
            abbreviated: ["i. e.", "i. sz."],
            wide: ["Krisztus előtt", "idősz\xe1m\xedt\xe1sunk szerint"],
        },
        defaultWidth: "wide",
    }),
    quarter: (0, i.A)({
        values: {
            narrow: ["1.", "2.", "3.", "4."],
            abbreviated: ["1. n.\xe9v", "2. n.\xe9v", "3. n.\xe9v", "4. n.\xe9v"],
            wide: ["1. negyed\xe9v", "2. negyed\xe9v", "3. negyed\xe9v", "4. negyed\xe9v"],
        },
        defaultWidth: "wide",
        argumentCallback: function (e) {
            return e - 1;
        },
        formattingValues: {
            narrow: ["I.", "II.", "III.", "IV."],
            abbreviated: ["I. n.\xe9v", "II. n.\xe9v", "III. n.\xe9v", "IV. n.\xe9v"],
            wide: ["I. negyed\xe9v", "II. negyed\xe9v", "III. negyed\xe9v", "IV. negyed\xe9v"],
        },
        defaultFormattingWidth: "wide",
    }),
    month: (0, i.A)({
        values: {
            narrow: ["J", "F", "M", "\xc1", "M", "J", "J", "A", "Sz", "O", "N", "D"],
            abbreviated: [
                "jan.",
                "febr.",
                "m\xe1rc.",
                "\xe1pr.",
                "m\xe1j.",
                "j\xfan.",
                "j\xfal.",
                "aug.",
                "szept.",
                "okt.",
                "nov.",
                "dec.",
            ],
            wide: [
                "janu\xe1r",
                "febru\xe1r",
                "m\xe1rcius",
                "\xe1prilis",
                "m\xe1jus",
                "j\xfanius",
                "j\xfalius",
                "augusztus",
                "szeptember",
                "okt\xf3ber",
                "november",
                "december",
            ],
        },
        defaultWidth: "wide",
    }),
    day: (0, i.A)({
        values: {
            narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
            short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
            abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
            wide: ["vas\xe1rnap", "h\xe9tfő", "kedd", "szerda", "cs\xfct\xf6rt\xf6k", "p\xe9ntek", "szombat"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, i.A)({
        values: {
            narrow: {
                am: "de.",
                pm: "du.",
                midnight: "\xe9jf\xe9l",
                noon: "d\xe9l",
                morning: "reggel",
                afternoon: "du.",
                evening: "este",
                night: "\xe9jjel",
            },
            abbreviated: {
                am: "de.",
                pm: "du.",
                midnight: "\xe9jf\xe9l",
                noon: "d\xe9l",
                morning: "reggel",
                afternoon: "du.",
                evening: "este",
                night: "\xe9jjel",
            },
            wide: {
                am: "de.",
                pm: "du.",
                midnight: "\xe9jf\xe9l",
                noon: "d\xe9l",
                morning: "reggel",
                afternoon: "d\xe9lut\xe1n",
                evening: "este",
                night: "\xe9jjel",
            },
        },
        defaultWidth: "wide",
    }),
};
