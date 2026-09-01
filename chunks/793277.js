Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.TIME_UNITS_PATTERN =
        t.YEAR_PATTERN =
        t.ORDINAL_NUMBER_PATTERN =
        t.NUMBER_PATTERN =
        t.TIME_UNIT_DICTIONARY =
        t.ORDINAL_WORD_DICTIONARY =
        t.INTEGER_WORD_DICTIONARY =
        t.MONTH_DICTIONARY =
        t.WEEKDAY_DICTIONARY =
            void 0),
    (t.parseNumberPattern = i),
    (t.parseOrdinalNumberPattern = function (e) {
        let r = e.toLowerCase();
        return void 0 !== t.ORDINAL_WORD_DICTIONARY[r]
            ? t.ORDINAL_WORD_DICTIONARY[r]
            : parseInt((r = r.replace(/(?:ste|de)$/i, "")));
    }),
    (t.parseYear = function (e) {
        if (/voor Christus/i.test(e)) return -parseInt((e = e.replace(/voor Christus/i, "")));
        if (/na Christus/i.test(e)) return parseInt((e = e.replace(/na Christus/i, "")));
        let t = parseInt(e);
        return (0, a.findMostLikelyADYear)(t);
    }),
    (t.parseDuration = function (e) {
        let r = {},
            n = e,
            a = o.exec(n);
        for (; a; )
            (function (e, r) {
                let n = i(r[1]);
                e[t.TIME_UNIT_DICTIONARY[r[2].toLowerCase()]] = n;
            })(r, a),
                (n = n.substring(a[0].length)),
                (a = o.exec(n));
        return r;
    });
let n = r(798401),
    a = r(574253);
function i(e) {
    let r = e.toLowerCase();
    return void 0 !== t.INTEGER_WORD_DICTIONARY[r]
        ? t.INTEGER_WORD_DICTIONARY[r]
        : "paar" === r
          ? 2
          : "half" === r || r.match(/halve?/)
            ? 0.5
            : parseFloat(r.replace(",", "."));
}
(t.WEEKDAY_DICTIONARY = {
    zondag: 0,
    zon: 0,
    "zon.": 0,
    zo: 0,
    "zo.": 0,
    maandag: 1,
    ma: 1,
    "ma.": 1,
    dinsdag: 2,
    din: 2,
    "din.": 2,
    di: 2,
    "di.": 2,
    woensdag: 3,
    woe: 3,
    "woe.": 3,
    wo: 3,
    "wo.": 3,
    donderdag: 4,
    dond: 4,
    "dond.": 4,
    do: 4,
    "do.": 4,
    vrijdag: 5,
    vrij: 5,
    "vrij.": 5,
    vr: 5,
    "vr.": 5,
    zaterdag: 6,
    zat: 6,
    "zat.": 6,
    za: 6,
    "za.": 6,
}),
    (t.MONTH_DICTIONARY = {
        januari: 1,
        jan: 1,
        "jan.": 1,
        februari: 2,
        feb: 2,
        "feb.": 2,
        maart: 3,
        mar: 3,
        "mar.": 3,
        mrt: 3,
        "mrt.": 3,
        april: 4,
        apr: 4,
        "apr.": 4,
        mei: 5,
        juni: 6,
        jun: 6,
        "jun.": 6,
        juli: 7,
        jul: 7,
        "jul.": 7,
        augustus: 8,
        aug: 8,
        "aug.": 8,
        september: 9,
        sep: 9,
        "sep.": 9,
        sept: 9,
        "sept.": 9,
        oktober: 10,
        okt: 10,
        "okt.": 10,
        november: 11,
        nov: 11,
        "nov.": 11,
        december: 12,
        dec: 12,
        "dec.": 12,
    }),
    (t.INTEGER_WORD_DICTIONARY = {
        een: 1,
        twee: 2,
        drie: 3,
        vier: 4,
        vijf: 5,
        zes: 6,
        zeven: 7,
        acht: 8,
        negen: 9,
        tien: 10,
        elf: 11,
        twaalf: 12,
    }),
    (t.ORDINAL_WORD_DICTIONARY = {
        eerste: 1,
        tweede: 2,
        derde: 3,
        vierde: 4,
        vijfde: 5,
        zesde: 6,
        zevende: 7,
        achtste: 8,
        negende: 9,
        tiende: 10,
        elfde: 11,
        twaalfde: 12,
        dertiende: 13,
        veertiende: 14,
        vijftiende: 15,
        zestiende: 16,
        zeventiende: 17,
        achttiende: 18,
        negentiende: 19,
        twintigste: 20,
        eenentwintigste: 21,
        "twee\xebntwintigste": 22,
        drieentwintigste: 23,
        vierentwintigste: 24,
        vijfentwintigste: 25,
        zesentwintigste: 26,
        zevenentwintigste: 27,
        achtentwintig: 28,
        negenentwintig: 29,
        dertigste: 30,
        eenendertigste: 31,
    }),
    (t.TIME_UNIT_DICTIONARY = {
        sec: "second",
        second: "second",
        seconden: "second",
        min: "minute",
        mins: "minute",
        minute: "minute",
        minuut: "minute",
        minuten: "minute",
        minuutje: "minute",
        h: "hour",
        hr: "hour",
        hrs: "hour",
        uur: "hour",
        u: "hour",
        uren: "hour",
        dag: "day",
        dagen: "day",
        week: "week",
        weken: "week",
        maand: "month",
        maanden: "month",
        jaar: "year",
        jr: "year",
        jaren: "year",
    }),
    (t.NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+[\\.,][0-9]+|halve?|half|paar)`),
    (t.ORDINAL_NUMBER_PATTERN = `(?:${(0, n.matchAnyPattern)(t.ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:ste|de)?)`),
    (t.YEAR_PATTERN = "(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])");
let s = `(${t.NUMBER_PATTERN})\\s{0,5}(${(0, n.matchAnyPattern)(t.TIME_UNIT_DICTIONARY)})\\s{0,5}`,
    o = RegExp(s, "i");
t.TIME_UNITS_PATTERN = (0, n.repeatedTimeunitPattern)("(?:(?:binnen|in)\\s*)?", s);
