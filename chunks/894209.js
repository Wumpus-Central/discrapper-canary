n.d(t, {
    H6: () => d,
    IX: () => u,
    LN: () => a,
    RA: () => h,
    SH: () => f,
    _$: () => o,
    km: () => m,
    pS: () => l,
    zC: () => c,
});
var r = n(800911),
    i = n(140081);
let a = {
        sonntag: 0,
        so: 0,
        montag: 1,
        mo: 1,
        dienstag: 2,
        di: 2,
        mittwoch: 3,
        mi: 3,
        donnerstag: 4,
        do: 4,
        freitag: 5,
        fr: 5,
        samstag: 6,
        sa: 6,
    },
    o = {
        januar: 1,
        jänner: 1,
        janner: 1,
        jan: 1,
        "jan.": 1,
        februar: 2,
        feber: 2,
        feb: 2,
        "feb.": 2,
        märz: 3,
        maerz: 3,
        mär: 3,
        "mär.": 3,
        mrz: 3,
        "mrz.": 3,
        april: 4,
        apr: 4,
        "apr.": 4,
        mai: 5,
        juni: 6,
        jun: 6,
        "jun.": 6,
        juli: 7,
        jul: 7,
        "jul.": 7,
        august: 8,
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
        dezember: 12,
        dez: 12,
        "dez.": 12,
    },
    s = {
        eins: 1,
        eine: 1,
        einem: 1,
        einen: 1,
        einer: 1,
        zwei: 2,
        drei: 3,
        vier: 4,
        fünf: 5,
        fuenf: 5,
        sechs: 6,
        sieben: 7,
        acht: 8,
        neun: 9,
        zehn: 10,
        elf: 11,
        zwölf: 12,
        zwoelf: 12,
    },
    l = {
        sek: "second",
        sekunde: "second",
        sekunden: "second",
        min: "minute",
        minute: "minute",
        minuten: "minute",
        h: "hour",
        std: "hour",
        stunde: "hour",
        stunden: "hour",
        tag: "day",
        tage: "day",
        tagen: "day",
        woche: "week",
        wochen: "week",
        monat: "month",
        monate: "month",
        monaten: "month",
        monats: "month",
        quartal: "quarter",
        quartals: "quarter",
        quartale: "quarter",
        quartalen: "quarter",
        a: "year",
        j: "year",
        jr: "year",
        jahr: "year",
        jahre: "year",
        jahren: "year",
        jahres: "year",
    },
    c = `(?:${(0, r.q3)(s)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function u(e) {
    let t = e.toLowerCase();
    if (void 0 !== s[t]) return s[t];
    if ("ein" === t || "einer" === t || "einem" === t || "einen" === t || "eine" === t) return 1;
    if (t.match(/wenigen/)) return 2;
    if (t.match(/halb/) || t.match(/halben/)) return 0.5;
    if (t.match(/einigen/)) return 3;
    else if (t.match(/mehreren/)) return 7;
    return parseFloat(t);
}
let d =
    "(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)";
function f(e) {
    if (/v/i.test(e)) return -parseInt(e.replace(/[^0-9]+/gi, ""));
    if (/n/i.test(e) || /z/i.test(e)) return parseInt(e.replace(/[^0-9]+/gi, ""));
    let t = parseInt(e);
    return (0, i.y)(t);
}
let p = `(${c})\\s{0,5}(${(0, r.q3)(l)})\\s{0,5}`,
    _ = RegExp(p, "i"),
    m = (0, r.Xf)("", p);
function h(e) {
    let t = {},
        n = e,
        r = _.exec(n);
    for (; r; ) g(t, r), (n = n.substring(r[0].length)), (r = _.exec(n));
    return t;
}
function g(e, t) {
    let n = u(t[1]);
    e[l[t[2].toLowerCase()]] = n;
}
