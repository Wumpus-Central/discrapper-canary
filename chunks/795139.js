"use strict";
var r,
    i = n(934169),
    a = n(386221),
    s = {},
    o = (function () {
        var e = {};
        try {
            return Object.defineProperty(e, "a", {}), "a" in e;
        } catch (e) {
            return !1;
        }
    })(),
    l = !o && !Object.prototype.__defineGetter__,
    u = Object.prototype.hasOwnProperty,
    c = o
        ? Object.defineProperty
        : function (e, t, n) {
              "get" in n && e.__defineGetter__
                  ? e.__defineGetter__(t, n.get)
                  : (!u.call(e, t) || "value" in n) && (e[t] = n.value);
          },
    d =
        Array.prototype.indexOf ||
        function (e) {
            var t = this;
            if (!t.length) return -1;
            for (var n = arguments[1] || 0, r = t.length; n < r; n++) if (t[n] === e) return n;
            return -1;
        },
    _ =
        Object.create ||
        function (e, t) {
            var n;
            function r() {}
            for (var i in ((r.prototype = e), (n = new r()), t)) u.call(t, i) && c(n, i, t[i]);
            return n;
        },
    f = Array.prototype.slice,
    h = Array.prototype.concat,
    p = Array.prototype.push,
    g = Array.prototype.join,
    E = Array.prototype.shift,
    A =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    n = f.call(arguments, 1);
                return 1 === t.length
                    ? function (r) {
                          return t.apply(e, h.call(n, f.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, h.call(n, f.call(arguments)));
                      };
            }),
    I = _(null),
    T = Math.random(),
    y = _(null, { narrow: {}, short: {}, long: {} }),
    S = !1,
    v = !1,
    C = /^[A-Z]{3}$/,
    b = /-u(?:-[0-9a-z]{2,8})+/gi,
    N = {
        "art-lojban": "jbo",
        "i-ami": "ami",
        "i-bnn": "bnn",
        "i-hak": "hak",
        "i-klingon": "tlh",
        "i-lux": "lb",
        "i-navajo": "nv",
        "i-pwn": "pwn",
        "i-tao": "tao",
        "i-tay": "tay",
        "i-tsu": "tsu",
        "no-bok": "nb",
        "no-nyn": "nn",
        "sgn-BE-FR": "sfb",
        "sgn-BE-NL": "vgt",
        "sgn-CH-DE": "sgg",
        "zh-guoyu": "cmn",
        "zh-hakka": "hak",
        "zh-min-nan": "nan",
        "zh-xiang": "hsn",
        "sgn-BR": "bzs",
        "sgn-CO": "csn",
        "sgn-DE": "gsg",
        "sgn-DK": "dsl",
        "sgn-ES": "ssp",
        "sgn-FR": "fsl",
        "sgn-GB": "bfi",
        "sgn-GR": "gss",
        "sgn-IE": "isg",
        "sgn-IT": "ise",
        "sgn-JP": "jsl",
        "sgn-MX": "mfs",
        "sgn-NI": "ncs",
        "sgn-NL": "dse",
        "sgn-NO": "nsl",
        "sgn-PT": "psr",
        "sgn-SE": "swl",
        "sgn-US": "ase",
        "sgn-ZA": "sfs",
        "zh-cmn": "cmn",
        "zh-cmn-Hans": "cmn-Hans",
        "zh-cmn-Hant": "cmn-Hant",
        "zh-gan": "gan",
        "zh-wuu": "wuu",
        "zh-yue": "yue",
    },
    R = {
        BU: "MM",
        DD: "DE",
        FX: "FR",
        TP: "TL",
        YD: "YE",
        ZR: "CD",
        heploc: "alalc97",
        in: "id",
        iw: "he",
        ji: "yi",
        jw: "jv",
        mo: "ro",
        ayx: "nun",
        bjd: "drl",
        ccq: "rki",
        cjr: "mom",
        cka: "cmr",
        cmk: "xch",
        drh: "khk",
        drw: "prs",
        gav: "dev",
        hrr: "jal",
        ibi: "opa",
        kgh: "kml",
        lcq: "ppr",
        mst: "mry",
        myt: "mry",
        sca: "hle",
        tie: "ras",
        tkk: "twm",
        tlw: "weo",
        tnf: "prs",
        ybd: "rki",
        yma: "lrr",
    },
    O = {
        aao: ["aao", "ar"],
        abh: ["abh", "ar"],
        abv: ["abv", "ar"],
        acm: ["acm", "ar"],
        acq: ["acq", "ar"],
        acw: ["acw", "ar"],
        acx: ["acx", "ar"],
        acy: ["acy", "ar"],
        adf: ["adf", "ar"],
        ads: ["ads", "sgn"],
        aeb: ["aeb", "ar"],
        aec: ["aec", "ar"],
        aed: ["aed", "sgn"],
        aen: ["aen", "sgn"],
        afb: ["afb", "ar"],
        afg: ["afg", "sgn"],
        ajp: ["ajp", "ar"],
        apc: ["apc", "ar"],
        apd: ["apd", "ar"],
        arb: ["arb", "ar"],
        arq: ["arq", "ar"],
        ars: ["ars", "ar"],
        ary: ["ary", "ar"],
        arz: ["arz", "ar"],
        ase: ["ase", "sgn"],
        asf: ["asf", "sgn"],
        asp: ["asp", "sgn"],
        asq: ["asq", "sgn"],
        asw: ["asw", "sgn"],
        auz: ["auz", "ar"],
        avl: ["avl", "ar"],
        ayh: ["ayh", "ar"],
        ayl: ["ayl", "ar"],
        ayn: ["ayn", "ar"],
        ayp: ["ayp", "ar"],
        bbz: ["bbz", "ar"],
        bfi: ["bfi", "sgn"],
        bfk: ["bfk", "sgn"],
        bjn: ["bjn", "ms"],
        bog: ["bog", "sgn"],
        bqn: ["bqn", "sgn"],
        bqy: ["bqy", "sgn"],
        btj: ["btj", "ms"],
        bve: ["bve", "ms"],
        bvl: ["bvl", "sgn"],
        bvu: ["bvu", "ms"],
        bzs: ["bzs", "sgn"],
        cdo: ["cdo", "zh"],
        cds: ["cds", "sgn"],
        cjy: ["cjy", "zh"],
        cmn: ["cmn", "zh"],
        coa: ["coa", "ms"],
        cpx: ["cpx", "zh"],
        csc: ["csc", "sgn"],
        csd: ["csd", "sgn"],
        cse: ["cse", "sgn"],
        csf: ["csf", "sgn"],
        csg: ["csg", "sgn"],
        csl: ["csl", "sgn"],
        csn: ["csn", "sgn"],
        csq: ["csq", "sgn"],
        csr: ["csr", "sgn"],
        czh: ["czh", "zh"],
        czo: ["czo", "zh"],
        doq: ["doq", "sgn"],
        dse: ["dse", "sgn"],
        dsl: ["dsl", "sgn"],
        dup: ["dup", "ms"],
        ecs: ["ecs", "sgn"],
        esl: ["esl", "sgn"],
        esn: ["esn", "sgn"],
        eso: ["eso", "sgn"],
        eth: ["eth", "sgn"],
        fcs: ["fcs", "sgn"],
        fse: ["fse", "sgn"],
        fsl: ["fsl", "sgn"],
        fss: ["fss", "sgn"],
        gan: ["gan", "zh"],
        gds: ["gds", "sgn"],
        gom: ["gom", "kok"],
        gse: ["gse", "sgn"],
        gsg: ["gsg", "sgn"],
        gsm: ["gsm", "sgn"],
        gss: ["gss", "sgn"],
        gus: ["gus", "sgn"],
        hab: ["hab", "sgn"],
        haf: ["haf", "sgn"],
        hak: ["hak", "zh"],
        hds: ["hds", "sgn"],
        hji: ["hji", "ms"],
        hks: ["hks", "sgn"],
        hos: ["hos", "sgn"],
        hps: ["hps", "sgn"],
        hsh: ["hsh", "sgn"],
        hsl: ["hsl", "sgn"],
        hsn: ["hsn", "zh"],
        icl: ["icl", "sgn"],
        ils: ["ils", "sgn"],
        inl: ["inl", "sgn"],
        ins: ["ins", "sgn"],
        ise: ["ise", "sgn"],
        isg: ["isg", "sgn"],
        isr: ["isr", "sgn"],
        jak: ["jak", "ms"],
        jax: ["jax", "ms"],
        jcs: ["jcs", "sgn"],
        jhs: ["jhs", "sgn"],
        jls: ["jls", "sgn"],
        jos: ["jos", "sgn"],
        jsl: ["jsl", "sgn"],
        jus: ["jus", "sgn"],
        kgi: ["kgi", "sgn"],
        knn: ["knn", "kok"],
        kvb: ["kvb", "ms"],
        kvk: ["kvk", "sgn"],
        kvr: ["kvr", "ms"],
        kxd: ["kxd", "ms"],
        lbs: ["lbs", "sgn"],
        lce: ["lce", "ms"],
        lcf: ["lcf", "ms"],
        liw: ["liw", "ms"],
        lls: ["lls", "sgn"],
        lsg: ["lsg", "sgn"],
        lsl: ["lsl", "sgn"],
        lso: ["lso", "sgn"],
        lsp: ["lsp", "sgn"],
        lst: ["lst", "sgn"],
        lsy: ["lsy", "sgn"],
        ltg: ["ltg", "lv"],
        lvs: ["lvs", "lv"],
        lzh: ["lzh", "zh"],
        max: ["max", "ms"],
        mdl: ["mdl", "sgn"],
        meo: ["meo", "ms"],
        mfa: ["mfa", "ms"],
        mfb: ["mfb", "ms"],
        mfs: ["mfs", "sgn"],
        min: ["min", "ms"],
        mnp: ["mnp", "zh"],
        mqg: ["mqg", "ms"],
        mre: ["mre", "sgn"],
        msd: ["msd", "sgn"],
        msi: ["msi", "ms"],
        msr: ["msr", "sgn"],
        mui: ["mui", "ms"],
        mzc: ["mzc", "sgn"],
        mzg: ["mzg", "sgn"],
        mzy: ["mzy", "sgn"],
        nan: ["nan", "zh"],
        nbs: ["nbs", "sgn"],
        ncs: ["ncs", "sgn"],
        nsi: ["nsi", "sgn"],
        nsl: ["nsl", "sgn"],
        nsp: ["nsp", "sgn"],
        nsr: ["nsr", "sgn"],
        nzs: ["nzs", "sgn"],
        okl: ["okl", "sgn"],
        orn: ["orn", "ms"],
        ors: ["ors", "ms"],
        pel: ["pel", "ms"],
        pga: ["pga", "ar"],
        pks: ["pks", "sgn"],
        prl: ["prl", "sgn"],
        prz: ["prz", "sgn"],
        psc: ["psc", "sgn"],
        psd: ["psd", "sgn"],
        pse: ["pse", "ms"],
        psg: ["psg", "sgn"],
        psl: ["psl", "sgn"],
        pso: ["pso", "sgn"],
        psp: ["psp", "sgn"],
        psr: ["psr", "sgn"],
        pys: ["pys", "sgn"],
        rms: ["rms", "sgn"],
        rsi: ["rsi", "sgn"],
        rsl: ["rsl", "sgn"],
        sdl: ["sdl", "sgn"],
        sfb: ["sfb", "sgn"],
        sfs: ["sfs", "sgn"],
        sgg: ["sgg", "sgn"],
        sgx: ["sgx", "sgn"],
        shu: ["shu", "ar"],
        slf: ["slf", "sgn"],
        sls: ["sls", "sgn"],
        sqk: ["sqk", "sgn"],
        sqs: ["sqs", "sgn"],
        ssh: ["ssh", "ar"],
        ssp: ["ssp", "sgn"],
        ssr: ["ssr", "sgn"],
        svk: ["svk", "sgn"],
        swc: ["swc", "sw"],
        swh: ["swh", "sw"],
        swl: ["swl", "sgn"],
        syy: ["syy", "sgn"],
        tmw: ["tmw", "ms"],
        tse: ["tse", "sgn"],
        tsm: ["tsm", "sgn"],
        tsq: ["tsq", "sgn"],
        tss: ["tss", "sgn"],
        tsy: ["tsy", "sgn"],
        tza: ["tza", "sgn"],
        ugn: ["ugn", "sgn"],
        ugy: ["ugy", "sgn"],
        ukl: ["ukl", "sgn"],
        uks: ["uks", "sgn"],
        urk: ["urk", "ms"],
        uzn: ["uzn", "uz"],
        uzs: ["uzs", "uz"],
        vgt: ["vgt", "sgn"],
        vkk: ["vkk", "ms"],
        vkt: ["vkt", "ms"],
        vsi: ["vsi", "sgn"],
        vsl: ["vsl", "sgn"],
        vsv: ["vsv", "sgn"],
        wuu: ["wuu", "zh"],
        xki: ["xki", "sgn"],
        xml: ["xml", "sgn"],
        xmm: ["xmm", "ms"],
        xms: ["xms", "sgn"],
        yds: ["yds", "sgn"],
        ysl: ["ysl", "sgn"],
        yue: ["yue", "zh"],
        zib: ["zib", "sgn"],
        zlm: ["zlm", "ms"],
        zmi: ["zmi", "ms"],
        zsl: ["zsl", "sgn"],
        zsm: ["zsm", "ms"],
    },
    D = {
        BHD: 3,
        BYR: 0,
        XOF: 0,
        BIF: 0,
        XAF: 0,
        CLF: 4,
        CLP: 0,
        KMF: 0,
        DJF: 0,
        XPF: 0,
        GNF: 0,
        ISK: 0,
        IQD: 3,
        JPY: 0,
        JOD: 3,
        KRW: 0,
        KWD: 3,
        LYD: 3,
        OMR: 3,
        PYG: 0,
        RWF: 0,
        TND: 3,
        UGX: 0,
        UYI: 0,
        VUV: 0,
        VND: 0,
    };
function L(e) {
    return !(!i.expBCP47Syntax.test(e) || i.expVariantDupes.test(e) || i.expSingletonDupes.test(e));
}
function w(e) {
    var t, n;
    n = (e = e.toLowerCase()).split("-");
    for (var r = 1, a = n.length; r < a; r++)
        if (2 === n[r].length) n[r] = n[r].toUpperCase();
        else if (4 === n[r].length) n[r] = n[r].charAt(0).toUpperCase() + n[r].slice(1);
        else if (1 === n[r].length && "x" !== n[r]) break;
    (t = (e = g.call(n, "-")).match(i.expExtSequences)) &&
        t.length > 1 &&
        (t.sort(), (e = e.replace(RegExp("(?:" + i.expExtSequences.source + ")+", "i"), g.call(t, "")))),
        u.call(N, e) && (e = N[e]),
        (n = e.split("-"));
    for (var r = 1, a = n.length; r < a; r++)
        u.call(R, n[r])
            ? (n[r] = R[n[r]])
            : u.call(O, n[r]) &&
              ((n[r] = O[n[r]][0]), 1 === r && O[n[1]][1] === n[0] && ((n = f.call(n, r++)), (a -= 1)));
    return g.call(n, "-");
}
function x() {
    return r;
}
function P(e) {
    var t = eE(String(e));
    return !1 !== C.test(t);
}
function M(e) {
    if (void 0 === e) return new em();
    for (var t = new em(), e = "string" == typeof e ? [e] : e, n = eA(e), r = n.length, i = 0; i < r; ) {
        var a = String(i);
        if (a in n) {
            var s = n[a];
            if (null == s || ("string" != typeof s && "object" != typeof s))
                throw TypeError("String or Object type expected");
            var o = String(s);
            if (!L(o)) throw RangeError("'" + o + "' is not a structurally valid language tag");
            (o = w(o)), -1 === d.call(t, o) && p.call(t, o);
        }
        i++;
    }
    return t;
}
function k(e, t) {
    for (var n = t; ; ) {
        if (d.call(e, n) > -1) return n;
        var r = n.lastIndexOf("-");
        if (r < 0) return;
        r >= 2 && "-" === n.charAt(r - 2) && (r -= 2), (n = n.substring(0, r));
    }
}
function U(e, t) {
    for (var n, r = 0, i = t.length; r < i && !n; ) {
        var a = t[r],
            s = String(a).replace(b, ""),
            n = k(e, s);
        r++;
    }
    var o = new ep();
    if (void 0 !== n) {
        if (((o["[[locale]]"] = n), String(a) !== String(s))) {
            var l = a.match(b)[0],
                u = a.indexOf("-u-");
            (o["[[extension]]"] = l), (o["[[extensionIndex]]"] = u);
        }
    } else o["[[locale]]"] = x();
    return o;
}
function G(e, t) {
    return U(e, t);
}
function F(e, t, n, r, i) {
    if (0 === e.length) throw ReferenceError("No locale data has been provided for this object yet.");
    if ("lookup" === n["[[localeMatcher]]"]) var a = U(e, t);
    else var a = G(e, t);
    var s = a["[[locale]]"];
    if (u.call(a, "[[extension]]"))
        var o = a["[[extension]]"],
            l = a["[[extensionIndex]]"],
            c = String.prototype.split,
            _ = c.call(o, "-"),
            f = _.length;
    var h = new ep();
    h["[[dataLocale]]"] = s;
    for (var p = "-u", g = 0, E = r.length; g < E; ) {
        var A = r[g],
            I = i[s][A],
            T = I["0"],
            y = "",
            S = d;
        if (void 0 !== _) {
            var v = S.call(_, A);
            if (-1 !== v)
                if (v + 1 < f && _[v + 1].length > 2) {
                    var C = _[v + 1],
                        b = S.call(I, C);
                    if (-1 !== b)
                        var T = C,
                            y = "-" + A + "-" + T;
                } else {
                    var b = S(I, "true");
                    if (-1 !== b) var T = "true";
                }
        }
        if (u.call(n, "[[" + A + "]]")) {
            var N = n["[[" + A + "]]"];
            -1 !== S.call(I, N) && N !== T && ((T = N), (y = ""));
        }
        (h["[[" + A + "]]"] = T), (p += y), g++;
    }
    if (p.length > 2)
        var R = s.substring(0, l),
            O = s.substring(l),
            s = R + p + O;
    return (h["[[locale]]"] = s), h;
}
function V(e, t) {
    for (var n = t.length, r = new em(), i = 0; i < n; ) {
        var a = t[i];
        void 0 !== k(e, String(a).replace(b, "")) && p.call(r, a), i++;
    }
    return f.call(r);
}
function B(e, t) {
    return V(e, t);
}
function j(e, t, n) {
    if (void 0 !== n) {
        var n = new ep(eA(n)),
            r = n.localeMatcher;
        if (void 0 !== r && "lookup" !== (r = String(r)) && "best fit" !== r)
            throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === r || "best fit" === r) var i = B(e, t);
    else var i = V(e, t);
    for (var a in i) u.call(i, a) && c(i, a, { writable: !1, configurable: !1, value: i[a] });
    return c(i, "length", { writable: !1 }), i;
}
function H(e, t, n, r, i) {
    var a = e[t];
    if (void 0 !== a) {
        if (((a = "boolean" === n ? !!a : "string" === n ? String(a) : a), void 0 !== r && -1 === d.call(r, a)))
            throw RangeError("'" + a + "' is not an allowed value for `" + t + "`");
        return a;
    }
    return i;
}
function Y(e, t, n, r, i) {
    var a = e[t];
    if (void 0 !== a) {
        if (isNaN((a = Number(a))) || a < n || a > r)
            throw RangeError("Value is not a number or outside accepted range");
        return Math.floor(a);
    }
    return i;
}
function W() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== s ? K(eA(this), e, t) : new s.NumberFormat(e, t);
}
function K(e, t, n) {
    var r = eI(e),
        i = eg();
    if (!0 === r["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    c(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === T) return r;
        },
    }),
        (r["[[initializedIntlObject]]"] = !0);
    var a = M(t);
    n = void 0 === n ? {} : eA(n);
    var s = new ep(),
        o = H(n, "localeMatcher", "string", new em("lookup", "best fit"), "best fit");
    s["[[localeMatcher]]"] = o;
    var u = I.NumberFormat["[[localeData]]"],
        d = F(I.NumberFormat["[[availableLocales]]"], a, s, I.NumberFormat["[[relevantExtensionKeys]]"], u);
    (r["[[locale]]"] = d["[[locale]]"]),
        (r["[[numberingSystem]]"] = d["[[nu]]"]),
        (r["[[dataLocale]]"] = d["[[dataLocale]]"]);
    var _ = d["[[dataLocale]]"],
        f = H(n, "style", "string", new em("decimal", "percent", "currency"), "decimal");
    r["[[style]]"] = f;
    var h = H(n, "currency", "string");
    if (void 0 !== h && !P(h)) throw RangeError("'" + h + "' is not a valid currency code");
    if ("currency" === f && void 0 === h) throw TypeError("Currency code is required when style is currency");
    if ("currency" === f) {
        (h = h.toUpperCase()), (r["[[currency]]"] = h);
        var p = $(h);
    }
    var g = H(n, "currencyDisplay", "string", new em("code", "symbol", "name"), "symbol");
    "currency" === f && (r["[[currencyDisplay]]"] = g);
    var E = Y(n, "minimumIntegerDigits", 1, 21, 1);
    r["[[minimumIntegerDigits]]"] = E;
    var A = Y(n, "minimumFractionDigits", 0, 20, "currency" === f ? p : 0);
    r["[[minimumFractionDigits]]"] = A;
    var y = "currency" === f ? Math.max(A, p) : "percent" === f ? Math.max(A, 0) : Math.max(A, 3),
        S = Y(n, "maximumFractionDigits", A, 20, y);
    r["[[maximumFractionDigits]]"] = S;
    var v = n.minimumSignificantDigits,
        C = n.maximumSignificantDigits;
    (void 0 !== v || void 0 !== C) &&
        ((v = Y(n, "minimumSignificantDigits", 1, 21, 1)),
        (C = Y(n, "maximumSignificantDigits", v, 21, 21)),
        (r["[[minimumSignificantDigits]]"] = v),
        (r["[[maximumSignificantDigits]]"] = C));
    var b = H(n, "useGrouping", "boolean", void 0, !0);
    r["[[useGrouping]]"] = b;
    var N = u[_].patterns[f];
    return (
        (r["[[positivePattern]]"] = N.positivePattern),
        (r["[[negativePattern]]"] = N.negativePattern),
        (r["[[boundFormat]]"] = void 0),
        (r["[[initializedNumberFormat]]"] = !0),
        l && (e.format = z.call(e)),
        i.exp.test(i.input),
        e
    );
}
function $(e) {
    return void 0 !== D[e] ? D[e] : 2;
}
function z() {
    var e = this != null && "object" == typeof this && eI(this);
    if (!e || !e["[[initializedNumberFormat]]"])
        throw TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
    if (void 0 === e["[[boundFormat]]"]) {
        var t = function (e) {
                return q(this, Number(e));
            },
            n = A.call(t, this);
        e["[[boundFormat]]"] = n;
    }
    return e["[[boundFormat]]"];
}
function q(e, t) {
    var n,
        r = eg(),
        i = eI(e),
        a = i["[[dataLocale]]"],
        s = i["[[numberingSystem]]"],
        o = I.NumberFormat["[[localeData]]"][a],
        l = o.symbols[s] || o.symbols.latn,
        c = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (n = l.nan) : ((n = l.infinity), t < 0 && (c = !0));
    else {
        if (
            (t < 0 && ((c = !0), (t = -t)),
            "percent" === i["[[style]]"] && (t *= 100),
            (n =
                u.call(i, "[[minimumSignificantDigits]]") && u.call(i, "[[maximumSignificantDigits]]")
                    ? X(t, i["[[minimumSignificantDigits]]"], i["[[maximumSignificantDigits]]"])
                    : Z(
                          t,
                          i["[[minimumIntegerDigits]]"],
                          i["[[minimumFractionDigits]]"],
                          i["[[maximumFractionDigits]]"],
                      )),
            Q[s])
        ) {
            var d = Q[i["[[numberingSystem]]"]];
            n = String(n).replace(/\d/g, function (e) {
                return d[e];
            });
        } else n = String(n);
        if (((n = n.replace(/\./g, l.decimal)), !0 === i["[[useGrouping]]"])) {
            var _ = n.split(l.decimal),
                f = _[0],
                h = o.patterns.primaryGroupSize || 3,
                E = o.patterns.secondaryGroupSize || h;
            if (f.length > h) {
                var A = new em(),
                    T = f.length - h,
                    y = T % E,
                    S = f.slice(0, y);
                for (S.length && p.call(A, S); y < T; ) p.call(A, f.slice(y, y + E)), (y += E);
                p.call(A, f.slice(T)), (_[0] = g.call(A, l.group));
            }
            n = g.call(_, l.decimal);
        }
    }
    var v = i[!0 === c ? "[[negativePattern]]" : "[[positivePattern]]"];
    if (((v = v.replace("{number}", n)), "currency" === i["[[style]]"])) {
        var C,
            b = i["[[currency]]"],
            N = o.currencies[b];
        (C = ("symbol" === i["[[currencyDisplay]]"] && N) || b), (v = v.replace("{currency}", C));
    }
    return r.exp.test(r.input), v;
}
function X(e, t, n) {
    var r = n;
    if (0 === e)
        var i = g.call(Array(r + 1), "0"),
            a = 0;
    else
        var a = e_(Math.abs(e)),
            s = Math.round(Math.exp(Math.abs(a - r + 1) * Math.LN10)),
            i = String(Math.round(a - r + 1 < 0 ? e * s : e / s));
    if (a >= r) return i + g.call(Array(a - r + 1 + 1), "0");
    if (a === r - 1) return i;
    if (
        (a >= 0
            ? (i = i.slice(0, a + 1) + "." + i.slice(a + 1))
            : a < 0 && (i = "0." + g.call(Array(-(a + 1) + 1), "0") + i),
        i.indexOf(".") >= 0 && n > t)
    ) {
        for (var o = n - t; o > 0 && "0" === i.charAt(i.length - 1); ) (i = i.slice(0, -1)), o--;
        "." === i.charAt(i.length - 1) && (i = i.slice(0, -1));
    }
    return i;
}
function Z(e, t, n, r) {
    var i,
        a = Number.prototype.toFixed.call(e, r),
        s = a.split(".")[0].length,
        o = r - n,
        l = (i = a.indexOf("e")) > -1 ? a.slice(i + 1) : 0;
    for (
        l &&
        ((a = a.slice(0, i).replace(".", "")),
        (a += g.call(Array(l - (a.length - 1) + 1), "0") + "." + g.call(Array(r + 1), "0")),
        (s = a.length));
        o > 0 && "0" === a.slice(-1);
    )
        (a = a.slice(0, -1)), o--;
    if (("." === a.slice(-1) && (a = a.slice(0, -1)), s < t)) var u = g.call(Array(t - s + 1), "0");
    return (u || "") + a;
}
c(s, "NumberFormat", { configurable: !0, writable: !0, value: W }),
    c(s.NumberFormat, "prototype", { writable: !1 }),
    (I.NumberFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} }),
    c(s.NumberFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: A.call(ef, I.NumberFormat) }),
    c(s.NumberFormat.prototype, "format", { configurable: !0, get: z });
var Q = {
    arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
    arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
    bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
    beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
    deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
    fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
    gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
    guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
    hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
    khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
    knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
    laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
    latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
    mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
    mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
    mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
    orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
    tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
    telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
    thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
    tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"],
};
function J() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== s ? ee(eA(this), e, t) : new s.DateTimeFormat(e, t);
}
function ee(e, t, n) {
    var r = eI(e),
        i = eg();
    if (!0 === r["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    c(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === T) return r;
        },
    }),
        (r["[[initializedIntlObject]]"] = !0);
    var a = M(t),
        n = er(n, "any", "date"),
        s = new ep();
    (S = H(n, "localeMatcher", "string", new em("lookup", "best fit"), "best fit")), (s["[[localeMatcher]]"] = S);
    var o = I.DateTimeFormat,
        d = o["[[localeData]]"],
        _ = F(o["[[availableLocales]]"], a, s, o["[[relevantExtensionKeys]]"], d);
    (r["[[locale]]"] = _["[[locale]]"]),
        (r["[[calendar]]"] = _["[[ca]]"]),
        (r["[[numberingSystem]]"] = _["[[nu]]"]),
        (r["[[dataLocale]]"] = _["[[dataLocale]]"]);
    var f = _["[[dataLocale]]"],
        h = n.timeZone;
    if (void 0 !== h && "UTC" !== (h = eE(h))) throw RangeError("timeZone is not supported.");
    for (var p in ((r["[[timeZone]]"] = h), (s = new ep()), et))
        if (u.call(et, p)) {
            var g = H(n, p, "string", et[p]);
            s["[[" + p + "]]"] = g;
        }
    var E,
        A = d[f],
        y = en(A.formats),
        S = H(n, "formatMatcher", "string", new em("basic", "best fit"), "best fit");
    for (var p in ((A.formats = y), (E = "basic" === S ? ei(s, y) : es(s, y)), et))
        if (u.call(et, p) && u.call(E, p)) {
            var v = E[p];
            r["[[" + p + "]]"] = v;
        }
    var C,
        b = H(n, "hour12", "boolean");
    if (r["[[hour]]"])
        if (((b = void 0 === b ? A.hour12 : b), (r["[[hour12]]"] = b), !0 === b)) {
            var N = A.hourNo0;
            (r["[[hourNo0]]"] = N), (C = E.pattern12);
        } else C = E.pattern;
    else C = E.pattern;
    return (
        (r["[[pattern]]"] = C),
        (r["[[boundFormat]]"] = void 0),
        (r["[[initializedDateTimeFormat]]"] = !0),
        l && (e.format = eo.call(e)),
        i.exp.test(i.input),
        e
    );
}
c(s.NumberFormat.prototype, "resolvedOptions", {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            t = new ep(),
            n = [
                "locale",
                "numberingSystem",
                "style",
                "currency",
                "currencyDisplay",
                "minimumIntegerDigits",
                "minimumFractionDigits",
                "maximumFractionDigits",
                "minimumSignificantDigits",
                "maximumSignificantDigits",
                "useGrouping",
            ],
            r = this != null && "object" == typeof this && eI(this);
        if (!r || !r["[[initializedNumberFormat]]"])
            throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
        for (var i = 0, a = n.length; i < a; i++)
            u.call(r, (e = "[[" + n[i] + "]]")) &&
                (t[n[i]] = { value: r[e], writable: !0, configurable: !0, enumerable: !0 });
        return _({}, t);
    },
}),
    c(s, "DateTimeFormat", { configurable: !0, writable: !0, value: J }),
    c(J, "prototype", { writable: !1 });
var et = {
    weekday: ["narrow", "short", "long"],
    era: ["narrow", "short", "long"],
    year: ["2-digit", "numeric"],
    month: ["2-digit", "numeric", "narrow", "short", "long"],
    day: ["2-digit", "numeric"],
    hour: ["2-digit", "numeric"],
    minute: ["2-digit", "numeric"],
    second: ["2-digit", "numeric"],
    timeZoneName: ["short", "long"],
};
function en(e) {
    return "[object Array]" === Object.prototype.toString.call(e) ? e : a.createDateTimeFormats(e);
}
function er(e, t, n) {
    if (void 0 === e) e = null;
    else {
        var r = eA(e);
        for (var i in ((e = new ep()), r)) e[i] = r[i];
    }
    var e = _(e),
        a = !0;
    return (
        ("date" === t || "any" === t) &&
            (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) &&
            (a = !1),
        ("time" === t || "any" === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (a = !1),
        a && ("date" === n || "all" === n) && (e.year = e.month = e.day = "numeric"),
        a && ("time" === n || "all" === n) && (e.hour = e.minute = e.second = "numeric"),
        e
    );
}
function ei(e, t) {
    return ea(e, t);
}
function ea(e, t, n) {
    for (var r, i = 8, a = 120, s = 20, o = 8, l = 6, c = 6, _ = 3, f = -1 / 0, h = 0, p = t.length; h < p; ) {
        var g = t[h],
            E = 0;
        for (var A in et)
            if (u.call(et, A)) {
                var I = e["[[" + A + "]]"],
                    T = u.call(g, A) ? g[A] : void 0;
                if (void 0 === I && void 0 !== T) E -= s;
                else if (void 0 !== I && void 0 === T) E -= a;
                else {
                    var y = ["2-digit", "numeric", "narrow", "short", "long"],
                        S = d.call(y, I),
                        v = Math.max(Math.min(d.call(y, T) - S, 2), -2);
                    n &&
                        ((("numeric" === I || "2-digit" === I) && "numeric" !== T && "2-digit" !== T) ||
                            ("numeric" !== I && "2-digit" !== I && ("2-digit" === T || "numeric" === T))) &&
                        (E -= i),
                        2 === v ? (E -= l) : 1 === v ? (E -= _) : -1 === v ? (E -= c) : -2 === v && (E -= o);
                }
            }
        E > f && ((f = E), (r = g)), h++;
    }
    return r;
}
function es(e, t) {
    return ea(e, t, !0);
}
function eo() {
    var e = this != null && "object" == typeof this && eI(this);
    if (!e || !e["[[initializedDateTimeFormat]]"])
        throw TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
    if (void 0 === e["[[boundFormat]]"]) {
        var t = function () {
                var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
                return el(this, e);
            },
            n = A.call(t, this);
        e["[[boundFormat]]"] = n;
    }
    return e["[[boundFormat]]"];
}
function el(e, t) {
    if (!isFinite(t)) throw RangeError("Invalid valid date passed to format");
    var n = e.__getInternalProperties(T),
        r = eg(),
        i = n["[[locale]]"],
        a = new s.NumberFormat([i], { useGrouping: !1 }),
        o = new s.NumberFormat([i], { minimumIntegerDigits: 2, useGrouping: !1 }),
        l = eu(t, n["[[calendar]]"], n["[[timeZone]]"]),
        c = n["[[pattern]]"],
        d = n["[[dataLocale]]"],
        _ = I.DateTimeFormat["[[localeData]]"][d].calendars,
        f = n["[[calendar]]"];
    for (var h in et)
        if (u.call(n, "[[" + h + "]]")) {
            var p,
                g,
                E = n["[[" + h + "]]"],
                A = l["[[" + h + "]]"];
            if (
                ("year" === h && A <= 0
                    ? (A = 1 - A)
                    : "month" === h
                      ? A++
                      : "hour" === h &&
                        !0 === n["[[hour12]]"] &&
                        ((A %= 12), (p = A !== l["[[" + h + "]]"]), 0 === A && !0 === n["[[hourNo0]]"] && (A = 12)),
                "numeric" === E)
            )
                g = q(a, A);
            else if ("2-digit" === E) (g = q(o, A)).length > 2 && (g = g.slice(-2));
            else if (E in y)
                switch (h) {
                    case "month":
                        g = eh(_, f, "months", E, l["[[" + h + "]]"]);
                        break;
                    case "weekday":
                        try {
                            g = eh(_, f, "days", E, l["[[" + h + "]]"]);
                        } catch (e) {
                            throw Error("Could not find weekday data for locale " + i);
                        }
                        break;
                    case "timeZoneName":
                        g = "";
                        break;
                    default:
                        g = l["[[" + h + "]]"];
                }
            c = c.replace("{" + h + "}", g);
        }
    return (
        !0 === n["[[hour12]]"] && ((g = eh(_, f, "dayPeriods", p ? "pm" : "am")), (c = c.replace("{ampm}", g))),
        r.exp.test(r.input),
        c
    );
}
function eu(e, t, n) {
    var r = new Date(e),
        i = "get" + (n || "");
    return new ep({
        "[[weekday]]": r[i + "Day"](),
        "[[era]]": +(r[i + "FullYear"]() >= 0),
        "[[year]]": r[i + "FullYear"](),
        "[[month]]": r[i + "Month"](),
        "[[day]]": r[i + "Date"](),
        "[[hour]]": r[i + "Hours"](),
        "[[minute]]": r[i + "Minutes"](),
        "[[second]]": r[i + "Seconds"](),
        "[[inDST]]": !1,
    });
}
(I.DateTimeFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["ca", "nu"], "[[localeData]]": {} }),
    c(s.DateTimeFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: A.call(ef, I.DateTimeFormat) }),
    c(s.DateTimeFormat.prototype, "format", { configurable: !0, get: eo }),
    c(s.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0,
        configurable: !0,
        value: function () {
            var e,
                t = new ep(),
                n = [
                    "locale",
                    "calendar",
                    "numberingSystem",
                    "timeZone",
                    "hour12",
                    "weekday",
                    "era",
                    "year",
                    "month",
                    "day",
                    "hour",
                    "minute",
                    "second",
                    "timeZoneName",
                ],
                r = this != null && "object" == typeof this && eI(this);
            if (!r || !r["[[initializedDateTimeFormat]]"])
                throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var i = 0, a = n.length; i < a; i++)
                u.call(r, (e = "[[" + n[i] + "]]")) &&
                    (t[n[i]] = { value: r[e], writable: !0, configurable: !0, enumerable: !0 });
            return _({}, t);
        },
    });
var ec = (s.__localeSensitiveProtos = { Number: {}, Date: {} });
function ed(e, t) {
    if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
    var n,
        i = [t],
        a = t.split("-");
    for (a.length > 2 && 4 === a[1].length && p.call(i, a[0] + "-" + a[2]); (n = E.call(i)); )
        p.call(I.NumberFormat["[[availableLocales]]"], n),
            (I.NumberFormat["[[localeData]]"][n] = e.number),
            e.date &&
                ((e.date.nu = e.number.nu),
                p.call(I.DateTimeFormat["[[availableLocales]]"], n),
                (I.DateTimeFormat["[[localeData]]"][n] = e.date));
    void 0 === r && (r = t),
        S || (K(s.NumberFormat.prototype), (S = !0)),
        e.date && !v && (ee(s.DateTimeFormat.prototype), (v = !0));
}
function e_(e) {
    if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
    var t = Math.round(Math.log(e) * Math.LOG10E);
    return t - (Number("1e" + t) > e);
}
function ef(e) {
    if (!u.call(this, "[[availableLocales]]")) throw TypeError("supportedLocalesOf() is not a constructor");
    var t = eg(),
        n = arguments[1],
        r = this["[[availableLocales]]"],
        i = M(e);
    return t.exp.test(t.input), j(r, i, n);
}
function eh(e, t, n, r, i) {
    var a = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
        s = { narrow: ["short", "long"], short: ["long", "narrow"], long: ["short", "narrow"] },
        o = u.call(a, r) ? a[r] : u.call(a, s[r][0]) ? a[s[r][0]] : a[s[r][1]];
    return null != i ? o[i] : o;
}
function ep(e) {
    for (var t in e)
        (e instanceof ep || u.call(e, t)) &&
            c(this, t, { value: e[t], enumerable: !0, writable: !0, configurable: !0 });
}
function em() {
    c(this, "length", { writable: !0, value: 0 }), arguments.length && p.apply(this, f.call(arguments));
}
function eg() {
    for (
        var e = /[.?*+^$[\]\\(){}|-]/g,
            t = RegExp.lastMatch || "",
            n = RegExp.multiline ? "m" : "",
            r = { input: RegExp.input },
            i = new em(),
            a = !1,
            s = {},
            o = 1;
        o <= 9;
        o++
    )
        a = (s["$" + o] = RegExp["$" + o]) || a;
    if (((t = t.replace(e, "\\$&")), a))
        for (var o = 1; o <= 9; o++) {
            var l = s["$" + o];
            l ? ((l = l.replace(e, "\\$&")), (t = t.replace(l, "(" + l + ")"))) : (t = "()" + t),
                p.call(i, t.slice(0, t.indexOf("(") + 1)),
                (t = t.slice(t.indexOf("(") + 1));
        }
    return (r.exp = new RegExp(g.call(i, "") + t, n)), r;
}
function eE(e) {
    for (var t = e.length; t--; ) {
        var n = e.charAt(t);
        n >= "a" && n <= "z" && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1));
    }
    return e;
}
function eA(e) {
    if (null == e) throw TypeError("Cannot convert null or undefined to object");
    return Object(e);
}
function eI(e) {
    return u.call(e, "__getInternalProperties") ? e.__getInternalProperties(T) : _(null);
}
(ec.Number.toLocaleString = function () {
    if ("[object Number]" !== Object.prototype.toString.call(this))
        throw TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
    return q(new W(arguments[0], arguments[1]), this);
}),
    (ec.Date.toLocaleString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = er(n, "any", "all");
        return el(new J(t, n), e);
    }),
    (ec.Date.toLocaleDateString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = er(n, "date", "date");
        return el(new J(t, n), e);
    }),
    (ec.Date.toLocaleTimeString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = er(n, "time", "time");
        return el(new J(t, n), e);
    }),
    c(s, "__applyLocaleSensitivePrototypes", {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (c(Number.prototype, "toLocaleString", {
                writable: !0,
                configurable: !0,
                value: ec.Number.toLocaleString,
            }),
            c(Date.prototype, "toLocaleString", { writable: !0, configurable: !0, value: ec.Date.toLocaleString }),
            ec.Date))
                u.call(ec.Date, e) && c(Date.prototype, e, { writable: !0, configurable: !0, value: ec.Date[e] });
        },
    }),
    c(s, "__addLocaleData", {
        value: function (e) {
            if (!L(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            ed(e, e.locale);
        },
    }),
    (ep.prototype = _(null)),
    (em.prototype = _(null)),
    (t.default = s);
