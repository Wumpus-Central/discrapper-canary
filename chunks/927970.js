t.d(e, { A: () => n });
var i = t(981737);
let n = {
    ordinalNumber: function (a, e) {
        return Number(a) + ".";
    },
    era: (0, i.A)({
        values: { narrow: ["M\xd6", "MS"], abbreviated: ["M\xd6", "MS"], wide: ["Milattan \xd6nce", "Milattan Sonra"] },
        defaultWidth: "wide",
    }),
    quarter: (0, i.A)({
        values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["1\xc7", "2\xc7", "3\xc7", "4\xc7"],
            wide: ["İlk \xe7eyrek", "İkinci \xc7eyrek", "\xdc\xe7\xfcnc\xfc \xe7eyrek", "Son \xe7eyrek"],
        },
        defaultWidth: "wide",
        argumentCallback: function (a) {
            return Number(a) - 1;
        },
    }),
    month: (0, i.A)({
        values: {
            narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
            abbreviated: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            wide: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eyl\xfcl",
                "Ekim",
                "Kasım",
                "Aralık",
            ],
        },
        defaultWidth: "wide",
    }),
    day: (0, i.A)({
        values: {
            narrow: ["P", "P", "S", "\xc7", "P", "C", "C"],
            short: ["Pz", "Pt", "Sa", "\xc7a", "Pe", "Cu", "Ct"],
            abbreviated: ["Paz", "Pzt", "Sal", "\xc7ar", "Per", "Cum", "Cts"],
            wide: ["Pazar", "Pazartesi", "Salı", "\xc7arşamba", "Perşembe", "Cuma", "Cumartesi"],
        },
        defaultWidth: "wide",
    }),
    dayPeriod: (0, i.A)({
        values: {
            narrow: {
                am: "\xf6\xf6",
                pm: "\xf6s",
                midnight: "gy",
                noon: "\xf6",
                morning: "sa",
                afternoon: "\xf6s",
                evening: "ak",
                night: "ge",
            },
            abbreviated: {
                am: "\xd6\xd6",
                pm: "\xd6S",
                midnight: "gece yarısı",
                noon: "\xf6ğle",
                morning: "sabah",
                afternoon: "\xf6ğleden sonra",
                evening: "akşam",
                night: "gece",
            },
            wide: {
                am: "\xd6.\xd6.",
                pm: "\xd6.S.",
                midnight: "gece yarısı",
                noon: "\xf6ğle",
                morning: "sabah",
                afternoon: "\xf6ğleden sonra",
                evening: "akşam",
                night: "gece",
            },
        },
        defaultWidth: "wide",
        formattingValues: {
            narrow: {
                am: "\xf6\xf6",
                pm: "\xf6s",
                midnight: "gy",
                noon: "\xf6",
                morning: "sa",
                afternoon: "\xf6s",
                evening: "ak",
                night: "ge",
            },
            abbreviated: {
                am: "\xd6\xd6",
                pm: "\xd6S",
                midnight: "gece yarısı",
                noon: "\xf6ğlen",
                morning: "sabahleyin",
                afternoon: "\xf6ğleden sonra",
                evening: "akşamleyin",
                night: "geceleyin",
            },
            wide: {
                am: "\xf6.\xf6.",
                pm: "\xf6.s.",
                midnight: "gece yarısı",
                noon: "\xf6ğlen",
                morning: "sabahleyin",
                afternoon: "\xf6ğleden sonra",
                evening: "akşamleyin",
                night: "geceleyin",
            },
        },
        defaultFormattingWidth: "wide",
    }),
};
