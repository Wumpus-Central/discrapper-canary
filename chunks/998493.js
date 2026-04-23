r.d(t, {
    CV: () => a,
    E9: () => p,
    EB: () => l,
    Pl: () => f,
    eB: () => i,
    fp: () => m,
    nj: () => u,
    zL: () => c,
    zp: () => d,
});
var n = r(476858),
    s = r(364242);
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
    i = {
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
        "m\xe4r.": 3,
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
    o = {
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
    u = `(?:${(0, n.uJ)(o)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function d(e) {
    let t = e.toLowerCase();
    if (void 0 !== o[t]) return o[t];
    if ("ein" === t || "einer" === t || "einem" === t || "einen" === t || "eine" === t) return 1;
    if (t.match(/wenigen/)) return 2;
    if (t.match(/halb/) || t.match(/halben/)) return 0.5;
    if (t.match(/einigen/)) return 3;
    else if (t.match(/mehreren/)) return 7;
    return parseFloat(t);
}
let m =
    "(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)";
function c(e) {
    if (/v/i.test(e)) return -parseInt(e.replace(/[^0-9]+/gi, ""));
    if (/n/i.test(e) || /z/i.test(e)) return parseInt(e.replace(/[^0-9]+/gi, ""));
    let t = parseInt(e);
    return (0, s.D)(t);
}
let g = `(${u})\\s{0,5}(${(0, n.uJ)(l)})\\s{0,5}`,
    h = RegExp(g, "i"),
    f = (0, n.mb)("", g);
function p(e) {
    let t = {},
        r = e,
        n = h.exec(r);
    for (; n; )
        (function (e, t) {
            let r = d(t[1]);
            e[l[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length)),
            (n = h.exec(r));
    return t;
}
