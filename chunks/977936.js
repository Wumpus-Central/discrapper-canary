r.r(t),
    r.d(t, {
        parseDate: () => el,
        casual: () => ea,
        ReferenceWithTimezone: () => a.b5,
        ParsingResult: () => a.s4,
        createCasualConfiguration: () => eu,
        Weekday: () => i.Bw,
        strict: () => ei,
        Chrono: () => s.u,
        Meridiem: () => i.FF,
        ParsingComponents: () => a.BP,
        createConfiguration: () => em,
        parse: () => eo,
    });
var n = r(132588),
    s = r(880683),
    a = r(374372),
    i = r(322811),
    o = r(172609);
class l extends o.A {
    patternBetween() {
        return /^\s*(tot|-)\s*$/i;
    }
}
var u = r(230205);
class m extends u.A {
    patternBetween() {
        return RegExp("^\\s*(om|na|voor|in de|,|-)?\\s*$");
    }
}
var d = r(355418),
    c = r(996483);
class g extends d.c {
    innerPattern(e) {
        return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[0].toLowerCase(),
            n = e.createParsingComponents();
        switch (r) {
            case "nu":
                return c.tB(e.reference);
            case "vandaag":
                return c.Ec(e.reference);
            case "morgen":
            case "morgend":
                return c.uf(e.reference);
            case "gisteren":
                return c.jI(e.reference);
        }
        return n;
    }
}
var h = r(881190);
class f extends d.c {
    innerPattern() {
        return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = e.refDate,
            n = e.createParsingComponents();
        switch (
            ("deze" === t[1] &&
                (n.assign("day", e.refDate.getDate()),
                n.assign("month", e.refDate.getMonth() + 1),
                n.assign("year", e.refDate.getFullYear())),
            t[2].toLowerCase())
        ) {
            case "namiddag":
            case "'s namiddags":
                n.imply("meridiem", i.FF.PM), n.imply("hour", 15);
                break;
            case "avond":
            case "'s avonds'":
                n.imply("meridiem", i.FF.PM), n.imply("hour", 20);
                break;
            case "middernacht":
                let s = new Date(r.getTime());
                s.setDate(s.getDate() + 1),
                    (0, h.Pl)(n, s),
                    (0, h.A4)(n, s),
                    n.imply("hour", 0),
                    n.imply("minute", 0),
                    n.imply("second", 0);
                break;
            case "ochtend":
            case "'s ochtends":
                n.imply("meridiem", i.FF.AM), n.imply("hour", 6);
                break;
            case "middag":
            case "'s middags":
                n.imply("meridiem", i.FF.AM), n.imply("hour", 12);
        }
        return n;
    }
}
var p = r(774188),
    y = r(476858),
    x = r(364242);
let w = {
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
    },
    D = {
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
    },
    P = {
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
    },
    F = {
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
    },
    C = {
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
    },
    T = `(?:${(0, y.uJ)(P)}|[0-9]+|[0-9]+[\\.,][0-9]+|halve?|half|paar)`,
    v = `(?:${(0, y.uJ)(F)}|[0-9]{1,2}(?:ste|de)?)`;
function M(e) {
    let t = e.toLowerCase();
    return void 0 !== F[t] ? F[t] : parseInt((t = t.replace(/(?:ste|de)$/i, "")));
}
let $ = "(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])";
function R(e) {
    if (/voor Christus/i.test(e)) return -parseInt((e = e.replace(/voor Christus/i, "")));
    if (/na Christus/i.test(e)) return parseInt((e = e.replace(/na Christus/i, "")));
    let t = parseInt(e);
    return (0, x.D)(t);
}
let E = `(${T})\\s{0,5}(${(0, y.uJ)(C)})\\s{0,5}`,
    b = RegExp(E, "i"),
    A = (0, y.mb)("(?:(?:binnen|in)\\s*)?", E);
function k(e) {
    let t = {},
        r = e,
        n = b.exec(r);
    for (; n; )
        (function (e, t) {
            let r = (function (e) {
                let t = e.toLowerCase();
                return void 0 !== P[t]
                    ? P[t]
                    : "paar" === t
                      ? 2
                      : "half" === t || t.match(/halve?/)
                        ? 0.5
                        : parseFloat(t.replace(",", "."));
            })(t[1]);
            e[C[t[2].toLowerCase()]] = r;
        })(t, n),
            (r = r.substring(n[0].length)),
            (n = b.exec(r));
    return t;
}
class j extends d.c {
    innerPattern() {
        return RegExp("(?:binnen|in|binnen de|voor)\\s*(" + A + ")(?=\\W|$)", "i");
    }
    innerExtract(e, t) {
        let r = k(t[1]);
        return a.BP.createRelativeFromReference(e.reference, r);
    }
}
var B = r(1673);
let W = RegExp(
    `(?:(?:\\,|\\(|\\\u{FF08})\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(${(0, y.uJ)(w)})(?=\\W|$)`,
    "i",
);
class S extends d.c {
    innerPattern() {
        return W;
    }
    innerExtract(e, t) {
        let r = w[t[2].toLowerCase()],
            n = t[1],
            s = t[3],
            a = n || s;
        a = (a = a || "").toLowerCase();
        let i = null;
        return (
            "vorige" == a ? (i = "last") : "volgende" == a ? (i = "next") : "deze" == a && (i = "this"),
            (0, B.Y5)(e.reference, r, i)
        );
    }
}
let I = RegExp(
    `(?:on\\s*?)?(${v})(?:\\s*(?:tot|\\-|\\\u{2013}|until|through|till|\\s)\\s*(${v}))?(?:-|/|\\s*(?:of)?\\s*)(` +
        (0, y.uJ)(D) +
        ")(?:(?:-|/|,?\\s*)" +
        `(${$}(?![^\\s]\\d))` +
        ")?(?=\\W|$)",
    "i",
);
class Y extends d.c {
    innerPattern() {
        return I;
    }
    innerExtract(e, t) {
        let r = D[t[3].toLowerCase()],
            n = M(t[1]);
        if (n > 31) return (t.index = t.index + t[1].length), null;
        let s = e.createParsingComponents({ day: n, month: r });
        if (t[4]) {
            let e = R(t[4]);
            s.assign("year", e);
        } else {
            let t = (0, x.Y)(e.refDate, n, r);
            s.imply("year", t);
        }
        if (!t[2]) return s;
        let a = M(t[2]),
            i = e.createParsingResult(t.index, t[0]);
        return (i.start = s), (i.end = s.clone()), i.end.assign("day", a), i;
    }
}
let z = RegExp(`(${(0, y.uJ)(D)})\\s*(?:[,-]?\\s*(${$})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
class L extends d.c {
    innerPattern() {
        return z;
    }
    innerExtract(e, t) {
        let r = e.createParsingComponents();
        r.imply("day", 1);
        let n = D[t[1].toLowerCase()];
        if ((r.assign("month", n), t[2])) {
            let e = R(t[2]);
            r.assign("year", e);
        } else {
            let t = (0, x.Y)(e.refDate, 1, n);
            r.imply("year", t);
        }
        return r;
    }
}
let N = RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
class O extends d.c {
    innerPattern() {
        return N;
    }
    innerExtract(e, t) {
        let r = parseInt(t[2]),
            n = parseInt(t[1]);
        return e.createParsingComponents().imply("day", 1).assign("month", n).assign("year", r);
    }
}
var J = r(985971);
class q extends J.B {
    primaryPrefix() {
        return "(?:(?:om)\\s*)?";
    }
    followingPhase() {
        return "\\s*(?:\\-|\\\u2013|\\~|\\\u301C|om|\\?)\\s*";
    }
    primarySuffix() {
        return "(?:\\s*(?:uur))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(e, t) {
        return t[0].match(/^\s*\d{4}\s*$/) ? null : super.extractPrimaryTimeComponents(e, t);
    }
}
let H = RegExp(`([0-9]{4})[\\.\\/\\s](?:(${(0, y.uJ)(D)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
class V extends d.c {
    innerPattern() {
        return H;
    }
    innerExtract(e, t) {
        let r = t[3] ? parseInt(t[3]) : D[t[2].toLowerCase()];
        if (r < 1 || r > 12) return null;
        let n = parseInt(t[1]);
        return { day: parseInt(t[4]), month: r, year: n };
    }
}
class U extends d.c {
    innerPattern(e) {
        return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = t[2].toLowerCase(),
            s = e.createParsingComponents(),
            a = e.refDate;
        switch (r) {
            case "gisteren":
                let o = new Date(a.getTime());
                o.setDate(o.getDate() - 1), (0, h.Pl)(s, o);
                break;
            case "van":
                (0, h.Pl)(s, a);
                break;
            case "morgen":
                let l = new Date(a.getTime());
                l.setDate(l.getDate() + 1), (0, h.Pl)(s, l), (0, h.A4)(s, l);
        }
        switch (n) {
            case "ochtend":
                s.imply("meridiem", i.FF.AM), s.imply("hour", 6);
                break;
            case "middag":
                s.imply("meridiem", i.FF.AM), s.imply("hour", 12);
                break;
            case "namiddag":
                s.imply("meridiem", i.FF.PM), s.imply("hour", 15);
                break;
            case "avond":
                s.imply("meridiem", i.FF.PM), s.imply("hour", 20);
        }
        return s;
    }
}
var G = r(632434);
let Z = RegExp(`(dit|deze|vorig|afgelopen|(?:aan)?komend|over|\\+|-)e?\\s*(${A})(?=\\W|$)`, "i");
class K extends d.c {
    innerPattern() {
        return Z;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = k(t[2]);
        switch (r) {
            case "vorig":
            case "afgelopen":
            case "-":
                n = (0, G.x4)(n);
        }
        return a.BP.createRelativeFromReference(e.reference, n);
    }
}
let _ = RegExp(`(dit|deze|(?:aan)?komend|volgend|afgelopen|vorig)e?\\s*(${(0, y.uJ)(C)})(?=\\s*)(?=\\W|$)`, "i");
class X extends d.c {
    innerPattern() {
        return _;
    }
    innerExtract(e, t) {
        let r = t[1].toLowerCase(),
            n = t[2].toLowerCase(),
            s = C[n];
        if ("volgend" == r || "komend" == r || "aankomend" == r) {
            let t = {};
            return (t[s] = 1), a.BP.createRelativeFromReference(e.reference, t);
        }
        if ("afgelopen" == r || "vorig" == r) {
            let t = {};
            return (t[s] = -1), a.BP.createRelativeFromReference(e.reference, t);
        }
        let i = e.createParsingComponents(),
            o = new Date(e.reference.instant.getTime());
        return (
            n.match(/week/i)
                ? (o.setDate(o.getDate() - o.getDay()),
                  i.imply("day", o.getDate()),
                  i.imply("month", o.getMonth() + 1),
                  i.imply("year", o.getFullYear()))
                : n.match(/maand/i)
                  ? (o.setDate(1),
                    i.imply("day", o.getDate()),
                    i.assign("year", o.getFullYear()),
                    i.assign("month", o.getMonth() + 1))
                  : n.match(/jaar/i) &&
                    (o.setDate(1),
                    o.setMonth(0),
                    i.imply("day", o.getDate()),
                    i.imply("month", o.getMonth() + 1),
                    i.assign("year", o.getFullYear())),
            i
        );
    }
}
let Q = RegExp("(" + A + ")(?:geleden|voor|eerder)(?=(?:\\W|$))", "i"),
    ee = RegExp("(" + A + ")geleden(?=(?:\\W|$))", "i");
class et extends d.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? ee : Q;
    }
    innerExtract(e, t) {
        let r = k(t[1]),
            n = (0, G.x4)(r);
        return a.BP.createRelativeFromReference(e.reference, n);
    }
}
let er = RegExp("(" + A + ")(later|na|vanaf nu|voortaan|vooruit|uit)(?=(?:\\W|$))", "i"),
    en = RegExp("(" + A + ")(later|vanaf nu)(?=(?:\\W|$))", "i");
class es extends d.c {
    strictMode;
    constructor(e) {
        super(), (this.strictMode = e);
    }
    innerPattern() {
        return this.strictMode ? en : er;
    }
    innerExtract(e, t) {
        let r = k(t[1]);
        return a.BP.createRelativeFromReference(e.reference, r);
    }
}
let ea = new s.u(eu()),
    ei = new s.u(em(!0));
function eo(e, t, r) {
    return ea.parse(e, t, r);
}
function el(e, t, r) {
    return ea.parseDate(e, t, r);
}
function eu(e = !0) {
    let t = em(!1, e);
    return (
        t.parsers.unshift(new g()),
        t.parsers.unshift(new f()),
        t.parsers.unshift(new U()),
        t.parsers.unshift(new L()),
        t.parsers.unshift(new X()),
        t.parsers.unshift(new K()),
        t
    );
}
function em(e = !0, t = !0) {
    return (0, n.i)(
        {
            parsers: [new p.A(t), new j(), new Y(), new L(), new S(), new V(), new O(), new q(e), new et(e), new es(e)],
            refiners: [new m(), new l()],
        },
        e,
    );
}
