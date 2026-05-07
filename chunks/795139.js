"use strict";
var i,
    r = n(934169),
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
            if (!this.length) return -1;
            for (var t = arguments[1] || 0, n = this.length; t < n; t++) if (this[t] === e) return t;
            return -1;
        },
    _ =
        Object.create ||
        function (e, t) {
            var n;
            function i() {}
            for (var r in ((i.prototype = e), (n = new i()), t)) u.call(t, r) && c(n, r, t[r]);
            return n;
        },
    f = Array.prototype.slice,
    h = Array.prototype.concat,
    p = Array.prototype.push,
    E = Array.prototype.join,
    m = Array.prototype.shift,
    g =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    n = f.call(arguments, 1);
                return 1 === t.length
                    ? function (i) {
                          return t.apply(e, h.call(n, f.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, h.call(n, f.call(arguments)));
                      };
            }),
    A = _(null),
    I = Math.random(),
    T = _(null, { narrow: {}, short: {}, long: {} }),
    S = !1,
    N = !1,
    y = /^[A-Z]{3}$/,
    C = /-u(?:-[0-9a-z]{2,8})+/gi,
    v = {
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
    O = {
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
    b = {
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
    return !(!r.expBCP47Syntax.test(e) || r.expVariantDupes.test(e) || r.expSingletonDupes.test(e));
}
function L(e) {
    if (void 0 === e) return new ee();
    for (var t = new ee(), e = "string" == typeof e ? [e] : e, n = ei(e), i = n.length, s = 0; s < i; ) {
        var a = String(s);
        if (a in n) {
            var o = n[a];
            if (null == o || ("string" != typeof o && "object" != typeof o))
                throw TypeError("String or Object type expected");
            var l = String(o);
            if (!D(l)) throw RangeError("'" + l + "' is not a structurally valid language tag");
            (l = (function (e) {
                var t, n;
                n = (e = e.toLowerCase()).split("-");
                for (var i = 1, s = n.length; i < s; i++)
                    if (2 === n[i].length) n[i] = n[i].toUpperCase();
                    else if (4 === n[i].length) n[i] = n[i].charAt(0).toUpperCase() + n[i].slice(1);
                    else if (1 === n[i].length && "x" !== n[i]) break;
                (t = (e = E.call(n, "-")).match(r.expExtSequences)) &&
                    t.length > 1 &&
                    (t.sort(), (e = e.replace(RegExp("(?:" + r.expExtSequences.source + ")+", "i"), E.call(t, "")))),
                    u.call(v, e) && (e = v[e]),
                    (n = e.split("-"));
                for (var i = 1, s = n.length; i < s; i++)
                    u.call(O, n[i])
                        ? (n[i] = O[n[i]])
                        : u.call(R, n[i]) &&
                          ((n[i] = R[n[i]][0]), 1 === i && R[n[1]][1] === n[0] && ((n = f.call(n, i++)), (s -= 1)));
                return E.call(n, "-");
            })(l)),
                -1 === d.call(t, l) && p.call(t, l);
        }
        s++;
    }
    return t;
}
function w(e, t) {
    for (var n = t; ; ) {
        if (d.call(e, n) > -1) return n;
        var i = n.lastIndexOf("-");
        if (i < 0) return;
        i >= 2 && "-" === n.charAt(i - 2) && (i -= 2), (n = n.substring(0, i));
    }
}
function M(e, t) {
    for (var n, r = 0, s = t.length; r < s && !n; ) {
        var a = t[r],
            o = String(a).replace(C, ""),
            n = w(e, o);
        r++;
    }
    var l = new J();
    if (void 0 !== n) {
        if (((l["[[locale]]"] = n), String(a) !== String(o))) {
            var u = a.match(C)[0],
                c = a.indexOf("-u-");
            (l["[[extension]]"] = u), (l["[[extensionIndex]]"] = c);
        }
    } else l["[[locale]]"] = i;
    return l;
}
function P(e, t, n, i, r) {
    if (0 === e.length) throw ReferenceError("No locale data has been provided for this object yet.");
    if ("lookup" === n["[[localeMatcher]]"]) var s = M(e, t);
    else var s = M(e, t);
    var a = s["[[locale]]"];
    if (u.call(s, "[[extension]]"))
        var o = s["[[extension]]"],
            l = s["[[extensionIndex]]"],
            c = String.prototype.split,
            _ = c.call(o, "-"),
            f = _.length;
    var h = new J();
    h["[[dataLocale]]"] = a;
    for (var p = "-u", E = 0, m = i.length; E < m; ) {
        var g = i[E],
            A = r[a][g],
            I = A["0"],
            T = "";
        if (void 0 !== _) {
            var S = d.call(_, g);
            if (-1 !== S)
                if (S + 1 < f && _[S + 1].length > 2) {
                    var N = _[S + 1],
                        y = d.call(A, N);
                    if (-1 !== y)
                        var I = N,
                            T = "-" + g + "-" + I;
                } else {
                    var y = d(A, "true");
                    if (-1 !== y) var I = "true";
                }
        }
        if (u.call(n, "[[" + g + "]]")) {
            var C = n["[[" + g + "]]"];
            -1 !== d.call(A, C) && C !== I && ((I = C), (T = ""));
        }
        (h["[[" + g + "]]"] = I), (p += T), E++;
    }
    if (p.length > 2)
        var v = a.substring(0, l),
            O = a.substring(l),
            a = v + p + O;
    return (h["[[locale]]"] = a), h;
}
function x(e, t) {
    for (var n = t.length, i = new ee(), r = 0; r < n; ) {
        var s = t[r];
        void 0 !== w(e, String(s).replace(C, "")) && p.call(i, s), r++;
    }
    return f.call(i);
}
function U(e, t, n, i, r) {
    var s = e[t];
    if (void 0 !== s) {
        if (((s = "boolean" === n ? !!s : "string" === n ? String(s) : s), void 0 !== i && -1 === d.call(i, s)))
            throw RangeError("'" + s + "' is not an allowed value for `" + t + "`");
        return s;
    }
    return r;
}
function k(e, t, n, i, r) {
    var s = e[t];
    if (void 0 !== s) {
        if (isNaN((s = Number(s))) || s < n || s > i)
            throw RangeError("Value is not a number or outside accepted range");
        return Math.floor(s);
    }
    return r;
}
function G() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? F(ei(this), e, t) : new a.NumberFormat(e, t);
}
function F(e, t, n) {
    var i,
        r = er(e),
        s = et();
    if (!0 === r["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    c(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === I) return r;
        },
    }),
        (r["[[initializedIntlObject]]"] = !0);
    var a = L(t);
    n = void 0 === n ? {} : ei(n);
    var o = new J(),
        u = U(n, "localeMatcher", "string", new ee("lookup", "best fit"), "best fit");
    o["[[localeMatcher]]"] = u;
    var d = A.NumberFormat["[[localeData]]"],
        _ = P(A.NumberFormat["[[availableLocales]]"], a, o, A.NumberFormat["[[relevantExtensionKeys]]"], d);
    (r["[[locale]]"] = _["[[locale]]"]),
        (r["[[numberingSystem]]"] = _["[[nu]]"]),
        (r["[[dataLocale]]"] = _["[[dataLocale]]"]);
    var f = _["[[dataLocale]]"],
        h = U(n, "style", "string", new ee("decimal", "percent", "currency"), "decimal");
    r["[[style]]"] = h;
    var p = U(n, "currency", "string");
    if (void 0 !== p && ((i = en(String(p))), !1 === y.test(i) || 0))
        throw RangeError("'" + p + "' is not a valid currency code");
    if ("currency" === h && void 0 === p) throw TypeError("Currency code is required when style is currency");
    if ("currency" === h) {
        (p = p.toUpperCase()), (r["[[currency]]"] = p);
        var E,
            m = void 0 !== b[(E = p)] ? b[E] : 2;
    }
    var g = U(n, "currencyDisplay", "string", new ee("code", "symbol", "name"), "symbol");
    "currency" === h && (r["[[currencyDisplay]]"] = g);
    var T = k(n, "minimumIntegerDigits", 1, 21, 1);
    r["[[minimumIntegerDigits]]"] = T;
    var S = k(n, "minimumFractionDigits", 0, 20, "currency" === h ? m : 0);
    r["[[minimumFractionDigits]]"] = S;
    var N = "currency" === h ? Math.max(S, m) : "percent" === h ? Math.max(S, 0) : Math.max(S, 3),
        C = k(n, "maximumFractionDigits", S, 20, N);
    r["[[maximumFractionDigits]]"] = C;
    var v = n.minimumSignificantDigits,
        O = n.maximumSignificantDigits;
    (void 0 !== v || void 0 !== O) &&
        ((v = k(n, "minimumSignificantDigits", 1, 21, 1)),
        (O = k(n, "maximumSignificantDigits", v, 21, 21)),
        (r["[[minimumSignificantDigits]]"] = v),
        (r["[[maximumSignificantDigits]]"] = O));
    var R = U(n, "useGrouping", "boolean", void 0, !0);
    r["[[useGrouping]]"] = R;
    var D = d[f].patterns[h];
    return (
        (r["[[positivePattern]]"] = D.positivePattern),
        (r["[[negativePattern]]"] = D.negativePattern),
        (r["[[boundFormat]]"] = void 0),
        (r["[[initializedNumberFormat]]"] = !0),
        l && (e.format = V.call(e)),
        s.exp.test(s.input),
        e
    );
}
function V() {
    var e = this != null && "object" == typeof this && er(this);
    if (!e || !e["[[initializedNumberFormat]]"])
        throw TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
    if (void 0 === e["[[boundFormat]]"]) {
        var t = g.call(function (e) {
            return B(this, Number(e));
        }, this);
        e["[[boundFormat]]"] = t;
    }
    return e["[[boundFormat]]"];
}
function B(e, t) {
    var n,
        i = et(),
        r = er(e),
        s = r["[[dataLocale]]"],
        a = r["[[numberingSystem]]"],
        o = A.NumberFormat["[[localeData]]"][s],
        l = o.symbols[a] || o.symbols.latn,
        c = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (n = l.nan) : ((n = l.infinity), t < 0 && (c = !0));
    else {
        if (
            (t < 0 && ((c = !0), (t = -t)),
            "percent" === r["[[style]]"] && (t *= 100),
            (n =
                u.call(r, "[[minimumSignificantDigits]]") && u.call(r, "[[maximumSignificantDigits]]")
                    ? (function (e, t, n) {
                          if (0 === e)
                              var i = E.call(Array(n + 1), "0"),
                                  r = 0;
                          else
                              var r = (function (e) {
                                      if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
                                      var t = Math.round(Math.log(e) * Math.LOG10E);
                                      return t - (Number("1e" + t) > e);
                                  })(Math.abs(e)),
                                  s = Math.round(Math.exp(Math.abs(r - n + 1) * Math.LN10)),
                                  i = String(Math.round(r - n + 1 < 0 ? e * s : e / s));
                          if (r >= n) return i + E.call(Array(r - n + 1 + 1), "0");
                          if (r === n - 1) return i;
                          if (
                              (r >= 0
                                  ? (i = i.slice(0, r + 1) + "." + i.slice(r + 1))
                                  : r < 0 && (i = "0." + E.call(Array(-(r + 1) + 1), "0") + i),
                              i.indexOf(".") >= 0 && n > t)
                          ) {
                              for (var a = n - t; a > 0 && "0" === i.charAt(i.length - 1); ) (i = i.slice(0, -1)), a--;
                              "." === i.charAt(i.length - 1) && (i = i.slice(0, -1));
                          }
                          return i;
                      })(t, r["[[minimumSignificantDigits]]"], r["[[maximumSignificantDigits]]"])
                    : (function (e, t, n, i) {
                          var r,
                              s = Number.prototype.toFixed.call(e, i),
                              a = s.split(".")[0].length,
                              o = i - n,
                              l = (r = s.indexOf("e")) > -1 ? s.slice(r + 1) : 0;
                          for (
                              l &&
                              ((s = s.slice(0, r).replace(".", "")),
                              (s += E.call(Array(l - (s.length - 1) + 1), "0") + "." + E.call(Array(i + 1), "0")),
                              (a = s.length));
                              o > 0 && "0" === s.slice(-1);
                          )
                              (s = s.slice(0, -1)), o--;
                          if (("." === s.slice(-1) && (s = s.slice(0, -1)), a < t))
                              var u = E.call(Array(t - a + 1), "0");
                          return (u || "") + s;
                      })(
                          t,
                          r["[[minimumIntegerDigits]]"],
                          r["[[minimumFractionDigits]]"],
                          r["[[maximumFractionDigits]]"],
                      )),
            H[a])
        ) {
            var d = H[r["[[numberingSystem]]"]];
            n = String(n).replace(/\d/g, function (e) {
                return d[e];
            });
        } else n = String(n);
        if (((n = n.replace(/\./g, l.decimal)), !0 === r["[[useGrouping]]"])) {
            var _ = n.split(l.decimal),
                f = _[0],
                h = o.patterns.primaryGroupSize || 3,
                m = o.patterns.secondaryGroupSize || h;
            if (f.length > h) {
                var g = new ee(),
                    I = f.length - h,
                    T = I % m,
                    S = f.slice(0, T);
                for (S.length && p.call(g, S); T < I; ) p.call(g, f.slice(T, T + m)), (T += m);
                p.call(g, f.slice(I)), (_[0] = E.call(g, l.group));
            }
            n = E.call(_, l.decimal);
        }
    }
    var N = r[!0 === c ? "[[negativePattern]]" : "[[positivePattern]]"];
    if (((N = N.replace("{number}", n)), "currency" === r["[[style]]"])) {
        var y,
            C = r["[[currency]]"],
            v = o.currencies[C];
        (y = ("symbol" === r["[[currencyDisplay]]"] && v) || C), (N = N.replace("{currency}", y));
    }
    return i.exp.test(i.input), N;
}
c(a, "NumberFormat", { configurable: !0, writable: !0, value: G }),
    c(a.NumberFormat, "prototype", { writable: !1 }),
    (A.NumberFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} }),
    c(a.NumberFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: g.call(X, A.NumberFormat) }),
    c(a.NumberFormat.prototype, "format", { configurable: !0, get: V });
var H = {
    arab: ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"],
    arabext: ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"],
    bali: ["\u1B50", "\u1B51", "\u1B52", "\u1B53", "\u1B54", "\u1B55", "\u1B56", "\u1B57", "\u1B58", "\u1B59"],
    beng: ["\u09E6", "\u09E7", "\u09E8", "\u09E9", "\u09EA", "\u09EB", "\u09EC", "\u09ED", "\u09EE", "\u09EF"],
    deva: ["\u0966", "\u0967", "\u0968", "\u0969", "\u096A", "\u096B", "\u096C", "\u096D", "\u096E", "\u096F"],
    fullwide: ["\uFF10", "\uFF11", "\uFF12", "\uFF13", "\uFF14", "\uFF15", "\uFF16", "\uFF17", "\uFF18", "\uFF19"],
    gujr: ["\u0AE6", "\u0AE7", "\u0AE8", "\u0AE9", "\u0AEA", "\u0AEB", "\u0AEC", "\u0AED", "\u0AEE", "\u0AEF"],
    guru: ["\u0A66", "\u0A67", "\u0A68", "\u0A69", "\u0A6A", "\u0A6B", "\u0A6C", "\u0A6D", "\u0A6E", "\u0A6F"],
    hanidec: ["\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"],
    khmr: ["\u17E0", "\u17E1", "\u17E2", "\u17E3", "\u17E4", "\u17E5", "\u17E6", "\u17E7", "\u17E8", "\u17E9"],
    knda: ["\u0CE6", "\u0CE7", "\u0CE8", "\u0CE9", "\u0CEA", "\u0CEB", "\u0CEC", "\u0CED", "\u0CEE", "\u0CEF"],
    laoo: ["\u0ED0", "\u0ED1", "\u0ED2", "\u0ED3", "\u0ED4", "\u0ED5", "\u0ED6", "\u0ED7", "\u0ED8", "\u0ED9"],
    latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    limb: ["\u1946", "\u1947", "\u1948", "\u1949", "\u194A", "\u194B", "\u194C", "\u194D", "\u194E", "\u194F"],
    mlym: ["\u0D66", "\u0D67", "\u0D68", "\u0D69", "\u0D6A", "\u0D6B", "\u0D6C", "\u0D6D", "\u0D6E", "\u0D6F"],
    mong: ["\u1810", "\u1811", "\u1812", "\u1813", "\u1814", "\u1815", "\u1816", "\u1817", "\u1818", "\u1819"],
    mymr: ["\u1040", "\u1041", "\u1042", "\u1043", "\u1044", "\u1045", "\u1046", "\u1047", "\u1048", "\u1049"],
    orya: ["\u0B66", "\u0B67", "\u0B68", "\u0B69", "\u0B6A", "\u0B6B", "\u0B6C", "\u0B6D", "\u0B6E", "\u0B6F"],
    tamldec: ["\u0BE6", "\u0BE7", "\u0BE8", "\u0BE9", "\u0BEA", "\u0BEB", "\u0BEC", "\u0BED", "\u0BEE", "\u0BEF"],
    telu: ["\u0C66", "\u0C67", "\u0C68", "\u0C69", "\u0C6A", "\u0C6B", "\u0C6C", "\u0C6D", "\u0C6E", "\u0C6F"],
    thai: ["\u0E50", "\u0E51", "\u0E52", "\u0E53", "\u0E54", "\u0E55", "\u0E56", "\u0E57", "\u0E58", "\u0E59"],
    tibt: ["\u0F20", "\u0F21", "\u0F22", "\u0F23", "\u0F24", "\u0F25", "\u0F26", "\u0F27", "\u0F28", "\u0F29"],
};
function j() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? Y(ei(this), e, t) : new a.DateTimeFormat(e, t);
}
function Y(e, t, n) {
    var i = er(e),
        r = et();
    if (!0 === i["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    c(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === I) return i;
        },
    }),
        (i["[[initializedIntlObject]]"] = !0);
    var a = L(t),
        n = K(n, "any", "date"),
        o = new J();
    (y = U(n, "localeMatcher", "string", new ee("lookup", "best fit"), "best fit")), (o["[[localeMatcher]]"] = y);
    var d = A.DateTimeFormat,
        _ = d["[[localeData]]"],
        f = P(d["[[availableLocales]]"], a, o, d["[[relevantExtensionKeys]]"], _);
    (i["[[locale]]"] = f["[[locale]]"]),
        (i["[[calendar]]"] = f["[[ca]]"]),
        (i["[[numberingSystem]]"] = f["[[nu]]"]),
        (i["[[dataLocale]]"] = f["[[dataLocale]]"]);
    var h = f["[[dataLocale]]"],
        p = n.timeZone;
    if (void 0 !== p && "UTC" !== (p = en(p))) throw RangeError("timeZone is not supported.");
    for (var E in ((i["[[timeZone]]"] = p), (o = new J()), W))
        if (u.call(W, E)) {
            var m = U(n, E, "string", W[E]);
            o["[[" + E + "]]"] = m;
        }
    var g,
        T,
        S = _[h],
        N = ((g = S.formats), "[object Array]" === Object.prototype.toString.call(g) ? g : s.createDateTimeFormats(g)),
        y = U(n, "formatMatcher", "string", new ee("basic", "best fit"), "best fit");
    for (var E in ((S.formats = N), (T = "basic" === y ? z(o, N) : z(o, N, !0)), W))
        if (u.call(W, E) && u.call(T, E)) {
            var C = T[E];
            i["[[" + E + "]]"] = C;
        }
    var v,
        O = U(n, "hour12", "boolean");
    if (i["[[hour]]"])
        if (((O = void 0 === O ? S.hour12 : O), (i["[[hour12]]"] = O), !0 === O)) {
            var R = S.hourNo0;
            (i["[[hourNo0]]"] = R), (v = T.pattern12);
        } else v = T.pattern;
    else v = T.pattern;
    return (
        (i["[[pattern]]"] = v),
        (i["[[boundFormat]]"] = void 0),
        (i["[[initializedDateTimeFormat]]"] = !0),
        l && (e.format = $.call(e)),
        r.exp.test(r.input),
        e
    );
}
c(a.NumberFormat.prototype, "resolvedOptions", {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            t = new J(),
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
            i = this != null && "object" == typeof this && er(this);
        if (!i || !i["[[initializedNumberFormat]]"])
            throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
        for (var r = 0, s = n.length; r < s; r++)
            u.call(i, (e = "[[" + n[r] + "]]")) &&
                (t[n[r]] = { value: i[e], writable: !0, configurable: !0, enumerable: !0 });
        return _({}, t);
    },
}),
    c(a, "DateTimeFormat", { configurable: !0, writable: !0, value: j }),
    c(j, "prototype", { writable: !1 });
var W = {
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
function K(e, t, n) {
    if (void 0 === e) e = null;
    else {
        var i = ei(e);
        for (var r in ((e = new J()), i)) e[r] = i[r];
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
function z(e, t, n) {
    for (var i, r = -1 / 0, s = 0, a = t.length; s < a; ) {
        var o = t[s],
            l = 0;
        for (var c in W)
            if (u.call(W, c)) {
                var _ = e["[[" + c + "]]"],
                    f = u.call(o, c) ? o[c] : void 0;
                if (void 0 === _ && void 0 !== f) l -= 20;
                else if (void 0 !== _ && void 0 === f) l -= 120;
                else {
                    var h = ["2-digit", "numeric", "narrow", "short", "long"],
                        p = d.call(h, _),
                        E = Math.max(Math.min(d.call(h, f) - p, 2), -2);
                    n &&
                        ((("numeric" === _ || "2-digit" === _) && "numeric" !== f && "2-digit" !== f) ||
                            ("numeric" !== _ && "2-digit" !== _ && ("2-digit" === f || "numeric" === f))) &&
                        (l -= 8),
                        2 === E ? (l -= 6) : 1 === E ? (l -= 3) : -1 === E ? (l -= 6) : -2 === E && (l -= 8);
                }
            }
        l > r && ((r = l), (i = o)), s++;
    }
    return i;
}
function $() {
    var e = this != null && "object" == typeof this && er(this);
    if (!e || !e["[[initializedDateTimeFormat]]"])
        throw TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
    if (void 0 === e["[[boundFormat]]"]) {
        var t = g.call(function () {
            var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
            return q(this, e);
        }, this);
        e["[[boundFormat]]"] = t;
    }
    return e["[[boundFormat]]"];
}
function q(e, t) {
    if (!isFinite(t)) throw RangeError("Invalid valid date passed to format");
    var n = e.__getInternalProperties(I),
        i = et(),
        r = n["[[locale]]"],
        s = new a.NumberFormat([r], { useGrouping: !1 }),
        o = new a.NumberFormat([r], { minimumIntegerDigits: 2, useGrouping: !1 }),
        l =
            ((p = t),
            (E = n["[[calendar]]"]),
            (m = n["[[timeZone]]"]),
            (g = new Date(p)),
            new J({
                "[[weekday]]": g[(S = "get" + (m || "")) + "Day"](),
                "[[era]]": +(g[S + "FullYear"]() >= 0),
                "[[year]]": g[S + "FullYear"](),
                "[[month]]": g[S + "Month"](),
                "[[day]]": g[S + "Date"](),
                "[[hour]]": g[S + "Hours"](),
                "[[minute]]": g[S + "Minutes"](),
                "[[second]]": g[S + "Seconds"](),
                "[[inDST]]": !1,
            })),
        c = n["[[pattern]]"],
        d = n["[[dataLocale]]"],
        _ = A.DateTimeFormat["[[localeData]]"][d].calendars,
        f = n["[[calendar]]"];
    for (var h in W)
        if (u.call(n, "[[" + h + "]]")) {
            var p,
                E,
                m,
                g,
                S,
                N,
                y,
                C = n["[[" + h + "]]"],
                v = l["[[" + h + "]]"];
            if (
                ("year" === h && v <= 0
                    ? (v = 1 - v)
                    : "month" === h
                      ? v++
                      : "hour" === h &&
                        !0 === n["[[hour12]]"] &&
                        ((v %= 12), (N = v !== l["[[" + h + "]]"]), 0 === v && !0 === n["[[hourNo0]]"] && (v = 12)),
                "numeric" === C)
            )
                y = B(s, v);
            else if ("2-digit" === C) (y = B(o, v)).length > 2 && (y = y.slice(-2));
            else if (C in T)
                switch (h) {
                    case "month":
                        y = Q(_, f, "months", C, l["[[" + h + "]]"]);
                        break;
                    case "weekday":
                        try {
                            y = Q(_, f, "days", C, l["[[" + h + "]]"]);
                        } catch (e) {
                            throw Error("Could not find weekday data for locale " + r);
                        }
                        break;
                    case "timeZoneName":
                        y = "";
                        break;
                    default:
                        y = l["[[" + h + "]]"];
                }
            c = c.replace("{" + h + "}", y);
        }
    return (
        !0 === n["[[hour12]]"] && ((y = Q(_, f, "dayPeriods", N ? "pm" : "am")), (c = c.replace("{ampm}", y))),
        i.exp.test(i.input),
        c
    );
}
(A.DateTimeFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["ca", "nu"], "[[localeData]]": {} }),
    c(a.DateTimeFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: g.call(X, A.DateTimeFormat) }),
    c(a.DateTimeFormat.prototype, "format", { configurable: !0, get: $ }),
    c(a.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0,
        configurable: !0,
        value: function () {
            var e,
                t = new J(),
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
                i = this != null && "object" == typeof this && er(this);
            if (!i || !i["[[initializedDateTimeFormat]]"])
                throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var r = 0, s = n.length; r < s; r++)
                u.call(i, (e = "[[" + n[r] + "]]")) &&
                    (t[n[r]] = { value: i[e], writable: !0, configurable: !0, enumerable: !0 });
            return _({}, t);
        },
    });
var Z = (a.__localeSensitiveProtos = { Number: {}, Date: {} });
function X(e) {
    if (!u.call(this, "[[availableLocales]]")) throw TypeError("supportedLocalesOf() is not a constructor");
    var t = et(),
        n = arguments[1],
        i = this["[[availableLocales]]"],
        r = L(e);
    t.exp.test(t.input);
    var s = n;
    if (void 0 !== s) {
        var s = new J(ei(s)),
            a = s.localeMatcher;
        if (void 0 !== a && "lookup" !== (a = String(a)) && "best fit" !== a)
            throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === a || "best fit" === a) var o = x(i, r);
    else var o = x(i, r);
    for (var l in o) u.call(o, l) && c(o, l, { writable: !1, configurable: !1, value: o[l] });
    return c(o, "length", { writable: !1 }), o;
}
function Q(e, t, n, i, r) {
    var s = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
        a = { narrow: ["short", "long"], short: ["long", "narrow"], long: ["short", "narrow"] },
        o = u.call(s, i) ? s[i] : u.call(s, a[i][0]) ? s[a[i][0]] : s[a[i][1]];
    return null != r ? o[r] : o;
}
function J(e) {
    for (var t in e)
        (e instanceof J || u.call(e, t)) && c(this, t, { value: e[t], enumerable: !0, writable: !0, configurable: !0 });
}
function ee() {
    c(this, "length", { writable: !0, value: 0 }), arguments.length && p.apply(this, f.call(arguments));
}
function et() {
    for (
        var e = /[.?*+^$[\]\\(){}|-]/g,
            t = RegExp.lastMatch || "",
            n = RegExp.multiline ? "m" : "",
            i = { input: RegExp.input },
            r = new ee(),
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
                p.call(r, t.slice(0, t.indexOf("(") + 1)),
                (t = t.slice(t.indexOf("(") + 1));
        }
    return (i.exp = new RegExp(E.call(r, "") + t, n)), i;
}
function en(e) {
    for (var t = e.length; t--; ) {
        var n = e.charAt(t);
        n >= "a" && n <= "z" && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1));
    }
    return e;
}
function ei(e) {
    if (null == e) throw TypeError("Cannot convert null or undefined to object");
    return Object(e);
}
function er(e) {
    return u.call(e, "__getInternalProperties") ? e.__getInternalProperties(I) : _(null);
}
(Z.Number.toLocaleString = function () {
    if ("[object Number]" !== Object.prototype.toString.call(this))
        throw TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
    return B(new G(arguments[0], arguments[1]), this);
}),
    (Z.Date.toLocaleString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = K(n, "any", "all");
        return q(new j(t, n), e);
    }),
    (Z.Date.toLocaleDateString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = K(n, "date", "date");
        return q(new j(t, n), e);
    }),
    (Z.Date.toLocaleTimeString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = K(n, "time", "time");
        return q(new j(t, n), e);
    }),
    c(a, "__applyLocaleSensitivePrototypes", {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (c(Number.prototype, "toLocaleString", {
                writable: !0,
                configurable: !0,
                value: Z.Number.toLocaleString,
            }),
            c(Date.prototype, "toLocaleString", { writable: !0, configurable: !0, value: Z.Date.toLocaleString }),
            Z.Date))
                u.call(Z.Date, e) && c(Date.prototype, e, { writable: !0, configurable: !0, value: Z.Date[e] });
        },
    }),
    c(a, "__addLocaleData", {
        value: function (e) {
            if (!D(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            !(function (e, t) {
                if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
                var n,
                    r = [t],
                    s = t.split("-");
                for (s.length > 2 && 4 === s[1].length && p.call(r, s[0] + "-" + s[2]); (n = m.call(r)); )
                    p.call(A.NumberFormat["[[availableLocales]]"], n),
                        (A.NumberFormat["[[localeData]]"][n] = e.number),
                        e.date &&
                            ((e.date.nu = e.number.nu),
                            p.call(A.DateTimeFormat["[[availableLocales]]"], n),
                            (A.DateTimeFormat["[[localeData]]"][n] = e.date));
                void 0 === i && (i = t),
                    S || (F(a.NumberFormat.prototype), (S = !0)),
                    e.date && !N && (Y(a.DateTimeFormat.prototype), (N = !0));
            })(e, e.locale);
        },
    }),
    (J.prototype = _(null)),
    (ee.prototype = _(null)),
    (t.default = a);
