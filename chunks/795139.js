"use strict";
var r,
    i = n(934169),
    s = n(386221),
    a = {},
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
    p = Array.prototype.concat,
    h = Array.prototype.push,
    m = Array.prototype.join,
    E = Array.prototype.shift,
    g =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    n = f.call(arguments, 1);
                return 1 === t.length
                    ? function (r) {
                          return t.apply(e, p.call(n, f.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, p.call(n, f.call(arguments)));
                      };
            }),
    A = _(null),
    I = Math.random(),
    T = _(null, { narrow: {}, short: {}, long: {} }),
    S = !1,
    y = !1,
    v = /^[A-Z]{3}$/,
    N = /-u(?:-[0-9a-z]{2,8})+/gi,
    C = {
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
    b = {
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
    R = {
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
    O = {
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
function D(e) {
    return !(!i.expBCP47Syntax.test(e) || i.expVariantDupes.test(e) || i.expSingletonDupes.test(e));
}
function L(e) {
    var t, n;
    n = (e = e.toLowerCase()).split("-");
    for (var r = 1, s = n.length; r < s; r++)
        if (2 === n[r].length) n[r] = n[r].toUpperCase();
        else if (4 === n[r].length) n[r] = n[r].charAt(0).toUpperCase() + n[r].slice(1);
        else if (1 === n[r].length && "x" !== n[r]) break;
    (t = (e = m.call(n, "-")).match(i.expExtSequences)) &&
        t.length > 1 &&
        (t.sort(), (e = e.replace(RegExp("(?:" + i.expExtSequences.source + ")+", "i"), m.call(t, "")))),
        u.call(C, e) && (e = C[e]),
        (n = e.split("-"));
    for (var r = 1, s = n.length; r < s; r++)
        u.call(b, n[r])
            ? (n[r] = b[n[r]])
            : u.call(R, n[r]) &&
              ((n[r] = R[n[r]][0]), 1 === r && R[n[1]][1] === n[0] && ((n = f.call(n, r++)), (s -= 1)));
    return m.call(n, "-");
}
function w() {
    return r;
}
function x(e) {
    var t = eE(String(e));
    return !1 !== v.test(t);
}
function M(e) {
    if (void 0 === e) return new eh();
    for (var t = new eh(), e = "string" == typeof e ? [e] : e, n = eg(e), r = n.length, i = 0; i < r; ) {
        var s = String(i);
        if (s in n) {
            var a = n[s];
            if (null == a || ("string" != typeof a && "object" != typeof a))
                throw TypeError("String or Object type expected");
            var o = String(a);
            if (!D(o)) throw RangeError("'" + o + "' is not a structurally valid language tag");
            (o = L(o)), -1 === d.call(t, o) && h.call(t, o);
        }
        i++;
    }
    return t;
}
function P(e, t) {
    for (var n = t; ; ) {
        if (d.call(e, n) > -1) return n;
        var r = n.lastIndexOf("-");
        if (r < 0) return;
        r >= 2 && "-" === n.charAt(r - 2) && (r -= 2), (n = n.substring(0, r));
    }
}
function k(e, t) {
    for (var n, r = 0, i = t.length; r < i && !n; ) {
        var s = t[r],
            a = String(s).replace(N, ""),
            n = P(e, a);
        r++;
    }
    var o = new ep();
    if (void 0 !== n) {
        if (((o["[[locale]]"] = n), String(s) !== String(a))) {
            var l = s.match(N)[0],
                u = s.indexOf("-u-");
            (o["[[extension]]"] = l), (o["[[extensionIndex]]"] = u);
        }
    } else o["[[locale]]"] = w();
    return o;
}
function U(e, t) {
    return k(e, t);
}
function G(e, t, n, r, i) {
    if (0 === e.length) throw ReferenceError("No locale data has been provided for this object yet.");
    if ("lookup" === n["[[localeMatcher]]"]) var s = k(e, t);
    else var s = U(e, t);
    var a = s["[[locale]]"];
    if (u.call(s, "[[extension]]"))
        var o = s["[[extension]]"],
            l = s["[[extensionIndex]]"],
            c = String.prototype.split,
            _ = c.call(o, "-"),
            f = _.length;
    var p = new ep();
    p["[[dataLocale]]"] = a;
    for (var h = "-u", m = 0, E = r.length; m < E; ) {
        var g = r[m],
            A = i[a][g],
            I = A["0"],
            T = "",
            S = d;
        if (void 0 !== _) {
            var y = S.call(_, g);
            if (-1 !== y)
                if (y + 1 < f && _[y + 1].length > 2) {
                    var v = _[y + 1],
                        N = S.call(A, v);
                    if (-1 !== N)
                        var I = v,
                            T = "-" + g + "-" + I;
                } else {
                    var N = S(A, "true");
                    if (-1 !== N) var I = "true";
                }
        }
        if (u.call(n, "[[" + g + "]]")) {
            var C = n["[[" + g + "]]"];
            -1 !== S.call(A, C) && C !== I && ((I = C), (T = ""));
        }
        (p["[[" + g + "]]"] = I), (h += T), m++;
    }
    if (h.length > 2)
        var b = a.substring(0, l),
            R = a.substring(l),
            a = b + h + R;
    return (p["[[locale]]"] = a), p;
}
function F(e, t) {
    for (var n = t.length, r = new eh(), i = 0; i < n; ) {
        var s = t[i];
        void 0 !== P(e, String(s).replace(N, "")) && h.call(r, s), i++;
    }
    return f.call(r);
}
function V(e, t) {
    return F(e, t);
}
function B(e, t, n) {
    if (void 0 !== n) {
        var n = new ep(eg(n)),
            r = n.localeMatcher;
        if (void 0 !== r && "lookup" !== (r = String(r)) && "best fit" !== r)
            throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === r || "best fit" === r) var i = V(e, t);
    else var i = F(e, t);
    for (var s in i) u.call(i, s) && c(i, s, { writable: !1, configurable: !1, value: i[s] });
    return c(i, "length", { writable: !1 }), i;
}
function H(e, t, n, r, i) {
    var s = e[t];
    if (void 0 !== s) {
        if (((s = "boolean" === n ? !!s : "string" === n ? String(s) : s), void 0 !== r && -1 === d.call(r, s)))
            throw RangeError("'" + s + "' is not an allowed value for `" + t + "`");
        return s;
    }
    return i;
}
function j(e, t, n, r, i) {
    var s = e[t];
    if (void 0 !== s) {
        if (isNaN((s = Number(s))) || s < n || s > r)
            throw RangeError("Value is not a number or outside accepted range");
        return Math.floor(s);
    }
    return i;
}
function Y() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? W(eg(this), e, t) : new a.NumberFormat(e, t);
}
function W(e, t, n) {
    var r = eA(e),
        i = em();
    if (!0 === r["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    c(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === I) return r;
        },
    }),
        (r["[[initializedIntlObject]]"] = !0);
    var s = M(t);
    n = void 0 === n ? {} : eg(n);
    var a = new ep(),
        o = H(n, "localeMatcher", "string", new eh("lookup", "best fit"), "best fit");
    a["[[localeMatcher]]"] = o;
    var u = A.NumberFormat["[[localeData]]"],
        d = G(A.NumberFormat["[[availableLocales]]"], s, a, A.NumberFormat["[[relevantExtensionKeys]]"], u);
    (r["[[locale]]"] = d["[[locale]]"]),
        (r["[[numberingSystem]]"] = d["[[nu]]"]),
        (r["[[dataLocale]]"] = d["[[dataLocale]]"]);
    var _ = d["[[dataLocale]]"],
        f = H(n, "style", "string", new eh("decimal", "percent", "currency"), "decimal");
    r["[[style]]"] = f;
    var p = H(n, "currency", "string");
    if (void 0 !== p && !x(p)) throw RangeError("'" + p + "' is not a valid currency code");
    if ("currency" === f && void 0 === p) throw TypeError("Currency code is required when style is currency");
    if ("currency" === f) {
        (p = p.toUpperCase()), (r["[[currency]]"] = p);
        var h = K(p);
    }
    var m = H(n, "currencyDisplay", "string", new eh("code", "symbol", "name"), "symbol");
    "currency" === f && (r["[[currencyDisplay]]"] = m);
    var E = j(n, "minimumIntegerDigits", 1, 21, 1);
    r["[[minimumIntegerDigits]]"] = E;
    var g = j(n, "minimumFractionDigits", 0, 20, "currency" === f ? h : 0);
    r["[[minimumFractionDigits]]"] = g;
    var T = "currency" === f ? Math.max(g, h) : "percent" === f ? Math.max(g, 0) : Math.max(g, 3),
        S = j(n, "maximumFractionDigits", g, 20, T);
    r["[[maximumFractionDigits]]"] = S;
    var y = n.minimumSignificantDigits,
        v = n.maximumSignificantDigits;
    (void 0 !== y || void 0 !== v) &&
        ((y = j(n, "minimumSignificantDigits", 1, 21, 1)),
        (v = j(n, "maximumSignificantDigits", y, 21, 21)),
        (r["[[minimumSignificantDigits]]"] = y),
        (r["[[maximumSignificantDigits]]"] = v));
    var N = H(n, "useGrouping", "boolean", void 0, !0);
    r["[[useGrouping]]"] = N;
    var C = u[_].patterns[f];
    return (
        (r["[[positivePattern]]"] = C.positivePattern),
        (r["[[negativePattern]]"] = C.negativePattern),
        (r["[[boundFormat]]"] = void 0),
        (r["[[initializedNumberFormat]]"] = !0),
        l && (e.format = z.call(e)),
        i.exp.test(i.input),
        e
    );
}
function K(e) {
    return void 0 !== O[e] ? O[e] : 2;
}
function z() {
    var e = this != null && "object" == typeof this && eA(this);
    if (!e || !e["[[initializedNumberFormat]]"])
        throw TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
    if (void 0 === e["[[boundFormat]]"]) {
        var t = function (e) {
                return $(this, Number(e));
            },
            n = g.call(t, this);
        e["[[boundFormat]]"] = n;
    }
    return e["[[boundFormat]]"];
}
function $(e, t) {
    var n,
        r = em(),
        i = eA(e),
        s = i["[[dataLocale]]"],
        a = i["[[numberingSystem]]"],
        o = A.NumberFormat["[[localeData]]"][s],
        l = o.symbols[a] || o.symbols.latn,
        c = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (n = l.nan) : ((n = l.infinity), t < 0 && (c = !0));
    else {
        if (
            (t < 0 && ((c = !0), (t = -t)),
            "percent" === i["[[style]]"] && (t *= 100),
            (n =
                u.call(i, "[[minimumSignificantDigits]]") && u.call(i, "[[maximumSignificantDigits]]")
                    ? q(t, i["[[minimumSignificantDigits]]"], i["[[maximumSignificantDigits]]"])
                    : Z(
                          t,
                          i["[[minimumIntegerDigits]]"],
                          i["[[minimumFractionDigits]]"],
                          i["[[maximumFractionDigits]]"],
                      )),
            X[a])
        ) {
            var d = X[i["[[numberingSystem]]"]];
            n = String(n).replace(/\d/g, function (e) {
                return d[e];
            });
        } else n = String(n);
        if (((n = n.replace(/\./g, l.decimal)), !0 === i["[[useGrouping]]"])) {
            var _ = n.split(l.decimal),
                f = _[0],
                p = o.patterns.primaryGroupSize || 3,
                E = o.patterns.secondaryGroupSize || p;
            if (f.length > p) {
                var g = new eh(),
                    I = f.length - p,
                    T = I % E,
                    S = f.slice(0, T);
                for (S.length && h.call(g, S); T < I; ) h.call(g, f.slice(T, T + E)), (T += E);
                h.call(g, f.slice(I)), (_[0] = m.call(g, l.group));
            }
            n = m.call(_, l.decimal);
        }
    }
    var y = i[!0 === c ? "[[negativePattern]]" : "[[positivePattern]]"];
    if (((y = y.replace("{number}", n)), "currency" === i["[[style]]"])) {
        var v,
            N = i["[[currency]]"],
            C = o.currencies[N];
        (v = ("symbol" === i["[[currencyDisplay]]"] && C) || N), (y = y.replace("{currency}", v));
    }
    return r.exp.test(r.input), y;
}
function q(e, t, n) {
    var r = n;
    if (0 === e)
        var i = m.call(Array(r + 1), "0"),
            s = 0;
    else
        var s = ed(Math.abs(e)),
            a = Math.round(Math.exp(Math.abs(s - r + 1) * Math.LN10)),
            i = String(Math.round(s - r + 1 < 0 ? e * a : e / a));
    if (s >= r) return i + m.call(Array(s - r + 1 + 1), "0");
    if (s === r - 1) return i;
    if (
        (s >= 0
            ? (i = i.slice(0, s + 1) + "." + i.slice(s + 1))
            : s < 0 && (i = "0." + m.call(Array(-(s + 1) + 1), "0") + i),
        i.indexOf(".") >= 0 && n > t)
    ) {
        for (var o = n - t; o > 0 && "0" === i.charAt(i.length - 1); ) (i = i.slice(0, -1)), o--;
        "." === i.charAt(i.length - 1) && (i = i.slice(0, -1));
    }
    return i;
}
function Z(e, t, n, r) {
    var i,
        s = Number.prototype.toFixed.call(e, r),
        a = s.split(".")[0].length,
        o = r - n,
        l = (i = s.indexOf("e")) > -1 ? s.slice(i + 1) : 0;
    for (
        l &&
        ((s = s.slice(0, i).replace(".", "")),
        (s += m.call(Array(l - (s.length - 1) + 1), "0") + "." + m.call(Array(r + 1), "0")),
        (a = s.length));
        o > 0 && "0" === s.slice(-1);
    )
        (s = s.slice(0, -1)), o--;
    if (("." === s.slice(-1) && (s = s.slice(0, -1)), a < t)) var u = m.call(Array(t - a + 1), "0");
    return (u || "") + s;
}
c(a, "NumberFormat", { configurable: !0, writable: !0, value: Y }),
    c(a.NumberFormat, "prototype", { writable: !1 }),
    (A.NumberFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} }),
    c(a.NumberFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: g.call(e_, A.NumberFormat) }),
    c(a.NumberFormat.prototype, "format", { configurable: !0, get: z });
var X = {
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
function Q() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? J(eg(this), e, t) : new a.DateTimeFormat(e, t);
}
function J(e, t, n) {
    var r = eA(e),
        i = em();
    if (!0 === r["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    c(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === I) return r;
        },
    }),
        (r["[[initializedIntlObject]]"] = !0);
    var s = M(t),
        n = en(n, "any", "date"),
        a = new ep();
    (S = H(n, "localeMatcher", "string", new eh("lookup", "best fit"), "best fit")), (a["[[localeMatcher]]"] = S);
    var o = A.DateTimeFormat,
        d = o["[[localeData]]"],
        _ = G(o["[[availableLocales]]"], s, a, o["[[relevantExtensionKeys]]"], d);
    (r["[[locale]]"] = _["[[locale]]"]),
        (r["[[calendar]]"] = _["[[ca]]"]),
        (r["[[numberingSystem]]"] = _["[[nu]]"]),
        (r["[[dataLocale]]"] = _["[[dataLocale]]"]);
    var f = _["[[dataLocale]]"],
        p = n.timeZone;
    if (void 0 !== p && "UTC" !== (p = eE(p))) throw RangeError("timeZone is not supported.");
    for (var h in ((r["[[timeZone]]"] = p), (a = new ep()), ee))
        if (u.call(ee, h)) {
            var m = H(n, h, "string", ee[h]);
            a["[[" + h + "]]"] = m;
        }
    var E,
        g = d[f],
        T = et(g.formats),
        S = H(n, "formatMatcher", "string", new eh("basic", "best fit"), "best fit");
    for (var h in ((g.formats = T), (E = "basic" === S ? er(a, T) : es(a, T)), ee))
        if (u.call(ee, h) && u.call(E, h)) {
            var y = E[h];
            r["[[" + h + "]]"] = y;
        }
    var v,
        N = H(n, "hour12", "boolean");
    if (r["[[hour]]"])
        if (((N = void 0 === N ? g.hour12 : N), (r["[[hour12]]"] = N), !0 === N)) {
            var C = g.hourNo0;
            (r["[[hourNo0]]"] = C), (v = E.pattern12);
        } else v = E.pattern;
    else v = E.pattern;
    return (
        (r["[[pattern]]"] = v),
        (r["[[boundFormat]]"] = void 0),
        (r["[[initializedDateTimeFormat]]"] = !0),
        l && (e.format = ea.call(e)),
        i.exp.test(i.input),
        e
    );
}
c(a.NumberFormat.prototype, "resolvedOptions", {
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
            r = this != null && "object" == typeof this && eA(this);
        if (!r || !r["[[initializedNumberFormat]]"])
            throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
        for (var i = 0, s = n.length; i < s; i++)
            u.call(r, (e = "[[" + n[i] + "]]")) &&
                (t[n[i]] = { value: r[e], writable: !0, configurable: !0, enumerable: !0 });
        return _({}, t);
    },
}),
    c(a, "DateTimeFormat", { configurable: !0, writable: !0, value: Q }),
    c(Q, "prototype", { writable: !1 });
var ee = {
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
function et(e) {
    return "[object Array]" === Object.prototype.toString.call(e) ? e : s.createDateTimeFormats(e);
}
function en(e, t, n) {
    if (void 0 === e) e = null;
    else {
        var r = eg(e);
        for (var i in ((e = new ep()), r)) e[i] = r[i];
    }
    var e = _(e),
        s = !0;
    return (
        ("date" === t || "any" === t) &&
            (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) &&
            (s = !1),
        ("time" === t || "any" === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (s = !1),
        s && ("date" === n || "all" === n) && (e.year = e.month = e.day = "numeric"),
        s && ("time" === n || "all" === n) && (e.hour = e.minute = e.second = "numeric"),
        e
    );
}
function er(e, t) {
    return ei(e, t);
}
function ei(e, t, n) {
    for (var r, i = 8, s = 120, a = 20, o = 8, l = 6, c = 6, _ = 3, f = -1 / 0, p = 0, h = t.length; p < h; ) {
        var m = t[p],
            E = 0;
        for (var g in ee)
            if (u.call(ee, g)) {
                var A = e["[[" + g + "]]"],
                    I = u.call(m, g) ? m[g] : void 0;
                if (void 0 === A && void 0 !== I) E -= a;
                else if (void 0 !== A && void 0 === I) E -= s;
                else {
                    var T = ["2-digit", "numeric", "narrow", "short", "long"],
                        S = d.call(T, A),
                        y = Math.max(Math.min(d.call(T, I) - S, 2), -2);
                    n &&
                        ((("numeric" === A || "2-digit" === A) && "numeric" !== I && "2-digit" !== I) ||
                            ("numeric" !== A && "2-digit" !== A && ("2-digit" === I || "numeric" === I))) &&
                        (E -= i),
                        2 === y ? (E -= l) : 1 === y ? (E -= _) : -1 === y ? (E -= c) : -2 === y && (E -= o);
                }
            }
        E > f && ((f = E), (r = m)), p++;
    }
    return r;
}
function es(e, t) {
    return ei(e, t, !0);
}
function ea() {
    var e = this != null && "object" == typeof this && eA(this);
    if (!e || !e["[[initializedDateTimeFormat]]"])
        throw TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
    if (void 0 === e["[[boundFormat]]"]) {
        var t = function () {
                var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
                return eo(this, e);
            },
            n = g.call(t, this);
        e["[[boundFormat]]"] = n;
    }
    return e["[[boundFormat]]"];
}
function eo(e, t) {
    if (!isFinite(t)) throw RangeError("Invalid valid date passed to format");
    var n = e.__getInternalProperties(I),
        r = em(),
        i = n["[[locale]]"],
        s = new a.NumberFormat([i], { useGrouping: !1 }),
        o = new a.NumberFormat([i], { minimumIntegerDigits: 2, useGrouping: !1 }),
        l = el(t, n["[[calendar]]"], n["[[timeZone]]"]),
        c = n["[[pattern]]"],
        d = n["[[dataLocale]]"],
        _ = A.DateTimeFormat["[[localeData]]"][d].calendars,
        f = n["[[calendar]]"];
    for (var p in ee)
        if (u.call(n, "[[" + p + "]]")) {
            var h,
                m,
                E = n["[[" + p + "]]"],
                g = l["[[" + p + "]]"];
            if (
                ("year" === p && g <= 0
                    ? (g = 1 - g)
                    : "month" === p
                      ? g++
                      : "hour" === p &&
                        !0 === n["[[hour12]]"] &&
                        ((g %= 12), (h = g !== l["[[" + p + "]]"]), 0 === g && !0 === n["[[hourNo0]]"] && (g = 12)),
                "numeric" === E)
            )
                m = $(s, g);
            else if ("2-digit" === E) (m = $(o, g)).length > 2 && (m = m.slice(-2));
            else if (E in T)
                switch (p) {
                    case "month":
                        m = ef(_, f, "months", E, l["[[" + p + "]]"]);
                        break;
                    case "weekday":
                        try {
                            m = ef(_, f, "days", E, l["[[" + p + "]]"]);
                        } catch (e) {
                            throw Error("Could not find weekday data for locale " + i);
                        }
                        break;
                    case "timeZoneName":
                        m = "";
                        break;
                    default:
                        m = l["[[" + p + "]]"];
                }
            c = c.replace("{" + p + "}", m);
        }
    return (
        !0 === n["[[hour12]]"] && ((m = ef(_, f, "dayPeriods", h ? "pm" : "am")), (c = c.replace("{ampm}", m))),
        r.exp.test(r.input),
        c
    );
}
function el(e, t, n) {
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
(A.DateTimeFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["ca", "nu"], "[[localeData]]": {} }),
    c(a.DateTimeFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: g.call(e_, A.DateTimeFormat) }),
    c(a.DateTimeFormat.prototype, "format", { configurable: !0, get: ea }),
    c(a.DateTimeFormat.prototype, "resolvedOptions", {
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
                r = this != null && "object" == typeof this && eA(this);
            if (!r || !r["[[initializedDateTimeFormat]]"])
                throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var i = 0, s = n.length; i < s; i++)
                u.call(r, (e = "[[" + n[i] + "]]")) &&
                    (t[n[i]] = { value: r[e], writable: !0, configurable: !0, enumerable: !0 });
            return _({}, t);
        },
    });
var eu = (a.__localeSensitiveProtos = { Number: {}, Date: {} });
function ec(e, t) {
    if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
    var n,
        i = [t],
        s = t.split("-");
    for (s.length > 2 && 4 === s[1].length && h.call(i, s[0] + "-" + s[2]); (n = E.call(i)); )
        h.call(A.NumberFormat["[[availableLocales]]"], n),
            (A.NumberFormat["[[localeData]]"][n] = e.number),
            e.date &&
                ((e.date.nu = e.number.nu),
                h.call(A.DateTimeFormat["[[availableLocales]]"], n),
                (A.DateTimeFormat["[[localeData]]"][n] = e.date));
    void 0 === r && (r = t),
        S || (W(a.NumberFormat.prototype), (S = !0)),
        e.date && !y && (J(a.DateTimeFormat.prototype), (y = !0));
}
function ed(e) {
    if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
    var t = Math.round(Math.log(e) * Math.LOG10E);
    return t - (Number("1e" + t) > e);
}
function e_(e) {
    if (!u.call(this, "[[availableLocales]]")) throw TypeError("supportedLocalesOf() is not a constructor");
    var t = em(),
        n = arguments[1],
        r = this["[[availableLocales]]"],
        i = M(e);
    return t.exp.test(t.input), B(r, i, n);
}
function ef(e, t, n, r, i) {
    var s = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
        a = { narrow: ["short", "long"], short: ["long", "narrow"], long: ["short", "narrow"] },
        o = u.call(s, r) ? s[r] : u.call(s, a[r][0]) ? s[a[r][0]] : s[a[r][1]];
    return null != i ? o[i] : o;
}
function ep(e) {
    for (var t in e)
        (e instanceof ep || u.call(e, t)) &&
            c(this, t, { value: e[t], enumerable: !0, writable: !0, configurable: !0 });
}
function eh() {
    c(this, "length", { writable: !0, value: 0 }), arguments.length && h.apply(this, f.call(arguments));
}
function em() {
    for (
        var e = /[.?*+^$[\]\\(){}|-]/g,
            t = RegExp.lastMatch || "",
            n = RegExp.multiline ? "m" : "",
            r = { input: RegExp.input },
            i = new eh(),
            s = !1,
            a = {},
            o = 1;
        o <= 9;
        o++
    )
        s = (a["$" + o] = RegExp["$" + o]) || s;
    if (((t = t.replace(e, "\\$&")), s))
        for (var o = 1; o <= 9; o++) {
            var l = a["$" + o];
            l ? ((l = l.replace(e, "\\$&")), (t = t.replace(l, "(" + l + ")"))) : (t = "()" + t),
                h.call(i, t.slice(0, t.indexOf("(") + 1)),
                (t = t.slice(t.indexOf("(") + 1));
        }
    return (r.exp = new RegExp(m.call(i, "") + t, n)), r;
}
function eE(e) {
    for (var t = e.length; t--; ) {
        var n = e.charAt(t);
        n >= "a" && n <= "z" && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1));
    }
    return e;
}
function eg(e) {
    if (null == e) throw TypeError("Cannot convert null or undefined to object");
    return Object(e);
}
function eA(e) {
    return u.call(e, "__getInternalProperties") ? e.__getInternalProperties(I) : _(null);
}
(eu.Number.toLocaleString = function () {
    if ("[object Number]" !== Object.prototype.toString.call(this))
        throw TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
    return $(new Y(arguments[0], arguments[1]), this);
}),
    (eu.Date.toLocaleString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = en(n, "any", "all");
        return eo(new Q(t, n), e);
    }),
    (eu.Date.toLocaleDateString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = en(n, "date", "date");
        return eo(new Q(t, n), e);
    }),
    (eu.Date.toLocaleTimeString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = en(n, "time", "time");
        return eo(new Q(t, n), e);
    }),
    c(a, "__applyLocaleSensitivePrototypes", {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (c(Number.prototype, "toLocaleString", {
                writable: !0,
                configurable: !0,
                value: eu.Number.toLocaleString,
            }),
            c(Date.prototype, "toLocaleString", { writable: !0, configurable: !0, value: eu.Date.toLocaleString }),
            eu.Date))
                u.call(eu.Date, e) && c(Date.prototype, e, { writable: !0, configurable: !0, value: eu.Date[e] });
        },
    }),
    c(a, "__addLocaleData", {
        value: function (e) {
            if (!D(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            ec(e, e.locale);
        },
    }),
    (ep.prototype = _(null)),
    (eh.prototype = _(null)),
    (t.default = a);
