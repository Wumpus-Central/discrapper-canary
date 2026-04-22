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
    d = o
        ? Object.defineProperty
        : function (e, t, n) {
              "get" in n && e.__defineGetter__
                  ? e.__defineGetter__(t, n.get)
                  : (!u.call(e, t) || "value" in n) && (e[t] = n.value);
          },
    c =
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
            function r() {}
            for (var i in ((r.prototype = e), (n = new r()), t)) u.call(t, i) && d(n, i, t[i]);
            return n;
        },
    f = Array.prototype.slice,
    E = Array.prototype.concat,
    h = Array.prototype.push,
    p = Array.prototype.join,
    m = Array.prototype.shift,
    g =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    n = f.call(arguments, 1);
                return 1 === t.length
                    ? function (r) {
                          return t.apply(e, E.call(n, f.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, E.call(n, f.call(arguments)));
                      };
            }),
    A = _(null),
    I = Math.random(),
    T = _(null, { narrow: {}, short: {}, long: {} }),
    S = !1,
    y = !1,
    N = /^[A-Z]{3}$/,
    O = /-u(?:-[0-9a-z]{2,8})+/gi,
    R = {
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
    v = {
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
    C = {
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
    return !(!i.expBCP47Syntax.test(e) || i.expVariantDupes.test(e) || i.expSingletonDupes.test(e));
}
function L(e) {
    if (void 0 === e) return new ee();
    for (var t = new ee(), e = "string" == typeof e ? [e] : e, n = er(e), r = n.length, s = 0; s < r; ) {
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
                for (var r = 1, s = n.length; r < s; r++)
                    if (2 === n[r].length) n[r] = n[r].toUpperCase();
                    else if (4 === n[r].length) n[r] = n[r].charAt(0).toUpperCase() + n[r].slice(1);
                    else if (1 === n[r].length && "x" !== n[r]) break;
                (t = (e = p.call(n, "-")).match(i.expExtSequences)) &&
                    t.length > 1 &&
                    (t.sort(), (e = e.replace(RegExp("(?:" + i.expExtSequences.source + ")+", "i"), p.call(t, "")))),
                    u.call(R, e) && (e = R[e]),
                    (n = e.split("-"));
                for (var r = 1, s = n.length; r < s; r++)
                    u.call(v, n[r])
                        ? (n[r] = v[n[r]])
                        : u.call(C, n[r]) &&
                          ((n[r] = C[n[r]][0]), 1 === r && C[n[1]][1] === n[0] && ((n = f.call(n, r++)), (s -= 1)));
                return p.call(n, "-");
            })(l)),
                -1 === c.call(t, l) && h.call(t, l);
        }
        s++;
    }
    return t;
}
function w(e, t) {
    for (var n = t; ; ) {
        if (c.call(e, n) > -1) return n;
        var r = n.lastIndexOf("-");
        if (r < 0) return;
        r >= 2 && "-" === n.charAt(r - 2) && (r -= 2), (n = n.substring(0, r));
    }
}
function M(e, t) {
    for (var n, i = 0, s = t.length; i < s && !n; ) {
        var a = t[i],
            o = String(a).replace(O, ""),
            n = w(e, o);
        i++;
    }
    var l = new Z();
    if (void 0 !== n) {
        if (((l["[[locale]]"] = n), String(a) !== String(o))) {
            var u = a.match(O)[0],
                d = a.indexOf("-u-");
            (l["[[extension]]"] = u), (l["[[extensionIndex]]"] = d);
        }
    } else l["[[locale]]"] = r;
    return l;
}
function P(e, t, n, r, i) {
    if (0 === e.length) throw ReferenceError("No locale data has been provided for this object yet.");
    if ("lookup" === n["[[localeMatcher]]"]) var s = M(e, t);
    else var s = M(e, t);
    var a = s["[[locale]]"];
    if (u.call(s, "[[extension]]"))
        var o = s["[[extension]]"],
            l = s["[[extensionIndex]]"],
            d = String.prototype.split,
            _ = d.call(o, "-"),
            f = _.length;
    var E = new Z();
    E["[[dataLocale]]"] = a;
    for (var h = "-u", p = 0, m = r.length; p < m; ) {
        var g = r[p],
            A = i[a][g],
            I = A["0"],
            T = "";
        if (void 0 !== _) {
            var S = c.call(_, g);
            if (-1 !== S)
                if (S + 1 < f && _[S + 1].length > 2) {
                    var y = _[S + 1],
                        N = c.call(A, y);
                    if (-1 !== N)
                        var I = y,
                            T = "-" + g + "-" + I;
                } else {
                    var N = c(A, "true");
                    if (-1 !== N) var I = "true";
                }
        }
        if (u.call(n, "[[" + g + "]]")) {
            var O = n["[[" + g + "]]"];
            -1 !== c.call(A, O) && O !== I && ((I = O), (T = ""));
        }
        (E["[[" + g + "]]"] = I), (h += T), p++;
    }
    if (h.length > 2)
        var R = a.substring(0, l),
            v = a.substring(l),
            a = R + h + v;
    return (E["[[locale]]"] = a), E;
}
function U(e, t) {
    for (var n = t.length, r = new ee(), i = 0; i < n; ) {
        var s = t[i];
        void 0 !== w(e, String(s).replace(O, "")) && h.call(r, s), i++;
    }
    return f.call(r);
}
function k(e, t, n, r, i) {
    var s = e[t];
    if (void 0 !== s) {
        if (((s = "boolean" === n ? !!s : "string" === n ? String(s) : s), void 0 !== r && -1 === c.call(r, s)))
            throw RangeError("'" + s + "' is not an allowed value for `" + t + "`");
        return s;
    }
    return i;
}
function x(e, t, n, r, i) {
    var s = e[t];
    if (void 0 !== s) {
        if (isNaN((s = Number(s))) || s < n || s > r)
            throw RangeError("Value is not a number or outside accepted range");
        return Math.floor(s);
    }
    return i;
}
function G() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? V(er(this), e, t) : new a.NumberFormat(e, t);
}
function V(e, t, n) {
    var r,
        i = ei(e),
        s = et();
    if (!0 === i["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    d(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === I) return i;
        },
    }),
        (i["[[initializedIntlObject]]"] = !0);
    var a = L(t);
    n = void 0 === n ? {} : er(n);
    var o = new Z(),
        u = k(n, "localeMatcher", "string", new ee("lookup", "best fit"), "best fit");
    o["[[localeMatcher]]"] = u;
    var c = A.NumberFormat["[[localeData]]"],
        _ = P(A.NumberFormat["[[availableLocales]]"], a, o, A.NumberFormat["[[relevantExtensionKeys]]"], c);
    (i["[[locale]]"] = _["[[locale]]"]),
        (i["[[numberingSystem]]"] = _["[[nu]]"]),
        (i["[[dataLocale]]"] = _["[[dataLocale]]"]);
    var f = _["[[dataLocale]]"],
        E = k(n, "style", "string", new ee("decimal", "percent", "currency"), "decimal");
    i["[[style]]"] = E;
    var h = k(n, "currency", "string");
    if (void 0 !== h && ((r = en(String(h))), !1 === N.test(r) || 0))
        throw RangeError("'" + h + "' is not a valid currency code");
    if ("currency" === E && void 0 === h) throw TypeError("Currency code is required when style is currency");
    if ("currency" === E) {
        (h = h.toUpperCase()), (i["[[currency]]"] = h);
        var p,
            m = void 0 !== b[(p = h)] ? b[p] : 2;
    }
    var g = k(n, "currencyDisplay", "string", new ee("code", "symbol", "name"), "symbol");
    "currency" === E && (i["[[currencyDisplay]]"] = g);
    var T = x(n, "minimumIntegerDigits", 1, 21, 1);
    i["[[minimumIntegerDigits]]"] = T;
    var S = x(n, "minimumFractionDigits", 0, 20, "currency" === E ? m : 0);
    i["[[minimumFractionDigits]]"] = S;
    var y = "currency" === E ? Math.max(S, m) : "percent" === E ? Math.max(S, 0) : Math.max(S, 3),
        O = x(n, "maximumFractionDigits", S, 20, y);
    i["[[maximumFractionDigits]]"] = O;
    var R = n.minimumSignificantDigits,
        v = n.maximumSignificantDigits;
    (void 0 !== R || void 0 !== v) &&
        ((R = x(n, "minimumSignificantDigits", 1, 21, 1)),
        (v = x(n, "maximumSignificantDigits", R, 21, 21)),
        (i["[[minimumSignificantDigits]]"] = R),
        (i["[[maximumSignificantDigits]]"] = v));
    var C = k(n, "useGrouping", "boolean", void 0, !0);
    i["[[useGrouping]]"] = C;
    var D = c[f].patterns[E];
    return (
        (i["[[positivePattern]]"] = D.positivePattern),
        (i["[[negativePattern]]"] = D.negativePattern),
        (i["[[boundFormat]]"] = void 0),
        (i["[[initializedNumberFormat]]"] = !0),
        l && (e.format = F.call(e)),
        s.exp.test(s.input),
        e
    );
}
function F() {
    var e = this != null && "object" == typeof this && ei(this);
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
        r = et(),
        i = ei(e),
        s = i["[[dataLocale]]"],
        a = i["[[numberingSystem]]"],
        o = A.NumberFormat["[[localeData]]"][s],
        l = o.symbols[a] || o.symbols.latn,
        d = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (n = l.nan) : ((n = l.infinity), t < 0 && (d = !0));
    else {
        if (
            (t < 0 && ((d = !0), (t = -t)),
            "percent" === i["[[style]]"] && (t *= 100),
            (n =
                u.call(i, "[[minimumSignificantDigits]]") && u.call(i, "[[maximumSignificantDigits]]")
                    ? (function (e, t, n) {
                          if (0 === e)
                              var r = p.call(Array(n + 1), "0"),
                                  i = 0;
                          else
                              var i = (function (e) {
                                      if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
                                      var t = Math.round(Math.log(e) * Math.LOG10E);
                                      return t - (Number("1e" + t) > e);
                                  })(Math.abs(e)),
                                  s = Math.round(Math.exp(Math.abs(i - n + 1) * Math.LN10)),
                                  r = String(Math.round(i - n + 1 < 0 ? e * s : e / s));
                          if (i >= n) return r + p.call(Array(i - n + 1 + 1), "0");
                          if (i === n - 1) return r;
                          if (
                              (i >= 0
                                  ? (r = r.slice(0, i + 1) + "." + r.slice(i + 1))
                                  : i < 0 && (r = "0." + p.call(Array(-(i + 1) + 1), "0") + r),
                              r.indexOf(".") >= 0 && n > t)
                          ) {
                              for (var a = n - t; a > 0 && "0" === r.charAt(r.length - 1); ) (r = r.slice(0, -1)), a--;
                              "." === r.charAt(r.length - 1) && (r = r.slice(0, -1));
                          }
                          return r;
                      })(t, i["[[minimumSignificantDigits]]"], i["[[maximumSignificantDigits]]"])
                    : (function (e, t, n, r) {
                          var i,
                              s = Number.prototype.toFixed.call(e, r),
                              a = s.split(".")[0].length,
                              o = r - n,
                              l = (i = s.indexOf("e")) > -1 ? s.slice(i + 1) : 0;
                          for (
                              l &&
                              ((s = s.slice(0, i).replace(".", "")),
                              (s += p.call(Array(l - (s.length - 1) + 1), "0") + "." + p.call(Array(r + 1), "0")),
                              (a = s.length));
                              o > 0 && "0" === s.slice(-1);
                          )
                              (s = s.slice(0, -1)), o--;
                          if (("." === s.slice(-1) && (s = s.slice(0, -1)), a < t))
                              var u = p.call(Array(t - a + 1), "0");
                          return (u || "") + s;
                      })(
                          t,
                          i["[[minimumIntegerDigits]]"],
                          i["[[minimumFractionDigits]]"],
                          i["[[maximumFractionDigits]]"],
                      )),
            H[a])
        ) {
            var c = H[i["[[numberingSystem]]"]];
            n = String(n).replace(/\d/g, function (e) {
                return c[e];
            });
        } else n = String(n);
        if (((n = n.replace(/\./g, l.decimal)), !0 === i["[[useGrouping]]"])) {
            var _ = n.split(l.decimal),
                f = _[0],
                E = o.patterns.primaryGroupSize || 3,
                m = o.patterns.secondaryGroupSize || E;
            if (f.length > E) {
                var g = new ee(),
                    I = f.length - E,
                    T = I % m,
                    S = f.slice(0, T);
                for (S.length && h.call(g, S); T < I; ) h.call(g, f.slice(T, T + m)), (T += m);
                h.call(g, f.slice(I)), (_[0] = p.call(g, l.group));
            }
            n = p.call(_, l.decimal);
        }
    }
    var y = i[!0 === d ? "[[negativePattern]]" : "[[positivePattern]]"];
    if (((y = y.replace("{number}", n)), "currency" === i["[[style]]"])) {
        var N,
            O = i["[[currency]]"],
            R = o.currencies[O];
        (N = ("symbol" === i["[[currencyDisplay]]"] && R) || O), (y = y.replace("{currency}", N));
    }
    return r.exp.test(r.input), y;
}
d(a, "NumberFormat", { configurable: !0, writable: !0, value: G }),
    d(a.NumberFormat, "prototype", { writable: !1 }),
    (A.NumberFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} }),
    d(a.NumberFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: g.call(Q, A.NumberFormat) }),
    d(a.NumberFormat.prototype, "format", { configurable: !0, get: F });
var H = {
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
function Y() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? W(er(this), e, t) : new a.DateTimeFormat(e, t);
}
function W(e, t, n) {
    var r = ei(e),
        i = et();
    if (!0 === r["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    d(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === I) return r;
        },
    }),
        (r["[[initializedIntlObject]]"] = !0);
    var a = L(t),
        n = K(n, "any", "date"),
        o = new Z();
    (N = k(n, "localeMatcher", "string", new ee("lookup", "best fit"), "best fit")), (o["[[localeMatcher]]"] = N);
    var c = A.DateTimeFormat,
        _ = c["[[localeData]]"],
        f = P(c["[[availableLocales]]"], a, o, c["[[relevantExtensionKeys]]"], _);
    (r["[[locale]]"] = f["[[locale]]"]),
        (r["[[calendar]]"] = f["[[ca]]"]),
        (r["[[numberingSystem]]"] = f["[[nu]]"]),
        (r["[[dataLocale]]"] = f["[[dataLocale]]"]);
    var E = f["[[dataLocale]]"],
        h = n.timeZone;
    if (void 0 !== h && "UTC" !== (h = en(h))) throw RangeError("timeZone is not supported.");
    for (var p in ((r["[[timeZone]]"] = h), (o = new Z()), j))
        if (u.call(j, p)) {
            var m = k(n, p, "string", j[p]);
            o["[[" + p + "]]"] = m;
        }
    var g,
        T,
        S = _[E],
        y = ((g = S.formats), "[object Array]" === Object.prototype.toString.call(g) ? g : s.createDateTimeFormats(g)),
        N = k(n, "formatMatcher", "string", new ee("basic", "best fit"), "best fit");
    for (var p in ((S.formats = y), (T = "basic" === N ? $(o, y) : $(o, y, !0)), j))
        if (u.call(j, p) && u.call(T, p)) {
            var O = T[p];
            r["[[" + p + "]]"] = O;
        }
    var R,
        v = k(n, "hour12", "boolean");
    if (r["[[hour]]"])
        if (((v = void 0 === v ? S.hour12 : v), (r["[[hour12]]"] = v), !0 === v)) {
            var C = S.hourNo0;
            (r["[[hourNo0]]"] = C), (R = T.pattern12);
        } else R = T.pattern;
    else R = T.pattern;
    return (
        (r["[[pattern]]"] = R),
        (r["[[boundFormat]]"] = void 0),
        (r["[[initializedDateTimeFormat]]"] = !0),
        l && (e.format = z.call(e)),
        i.exp.test(i.input),
        e
    );
}
d(a.NumberFormat.prototype, "resolvedOptions", {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            t = new Z(),
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
            r = this != null && "object" == typeof this && ei(this);
        if (!r || !r["[[initializedNumberFormat]]"])
            throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
        for (var i = 0, s = n.length; i < s; i++)
            u.call(r, (e = "[[" + n[i] + "]]")) &&
                (t[n[i]] = { value: r[e], writable: !0, configurable: !0, enumerable: !0 });
        return _({}, t);
    },
}),
    d(a, "DateTimeFormat", { configurable: !0, writable: !0, value: Y }),
    d(Y, "prototype", { writable: !1 });
var j = {
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
        var r = er(e);
        for (var i in ((e = new Z()), r)) e[i] = r[i];
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
function $(e, t, n) {
    for (var r, i = -1 / 0, s = 0, a = t.length; s < a; ) {
        var o = t[s],
            l = 0;
        for (var d in j)
            if (u.call(j, d)) {
                var _ = e["[[" + d + "]]"],
                    f = u.call(o, d) ? o[d] : void 0;
                if (void 0 === _ && void 0 !== f) l -= 20;
                else if (void 0 !== _ && void 0 === f) l -= 120;
                else {
                    var E = ["2-digit", "numeric", "narrow", "short", "long"],
                        h = c.call(E, _),
                        p = Math.max(Math.min(c.call(E, f) - h, 2), -2);
                    n &&
                        ((("numeric" === _ || "2-digit" === _) && "numeric" !== f && "2-digit" !== f) ||
                            ("numeric" !== _ && "2-digit" !== _ && ("2-digit" === f || "numeric" === f))) &&
                        (l -= 8),
                        2 === p ? (l -= 6) : 1 === p ? (l -= 3) : -1 === p ? (l -= 6) : -2 === p && (l -= 8);
                }
            }
        l > i && ((i = l), (r = o)), s++;
    }
    return r;
}
function z() {
    var e = this != null && "object" == typeof this && ei(this);
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
        r = et(),
        i = n["[[locale]]"],
        s = new a.NumberFormat([i], { useGrouping: !1 }),
        o = new a.NumberFormat([i], { minimumIntegerDigits: 2, useGrouping: !1 }),
        l =
            ((h = t),
            (p = n["[[calendar]]"]),
            (m = n["[[timeZone]]"]),
            (g = new Date(h)),
            new Z({
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
        d = n["[[pattern]]"],
        c = n["[[dataLocale]]"],
        _ = A.DateTimeFormat["[[localeData]]"][c].calendars,
        f = n["[[calendar]]"];
    for (var E in j)
        if (u.call(n, "[[" + E + "]]")) {
            var h,
                p,
                m,
                g,
                S,
                y,
                N,
                O = n["[[" + E + "]]"],
                R = l["[[" + E + "]]"];
            if (
                ("year" === E && R <= 0
                    ? (R = 1 - R)
                    : "month" === E
                      ? R++
                      : "hour" === E &&
                        !0 === n["[[hour12]]"] &&
                        ((R %= 12), (y = R !== l["[[" + E + "]]"]), 0 === R && !0 === n["[[hourNo0]]"] && (R = 12)),
                "numeric" === O)
            )
                N = B(s, R);
            else if ("2-digit" === O) (N = B(o, R)).length > 2 && (N = N.slice(-2));
            else if (O in T)
                switch (E) {
                    case "month":
                        N = J(_, f, "months", O, l["[[" + E + "]]"]);
                        break;
                    case "weekday":
                        try {
                            N = J(_, f, "days", O, l["[[" + E + "]]"]);
                        } catch (e) {
                            throw Error("Could not find weekday data for locale " + i);
                        }
                        break;
                    case "timeZoneName":
                        N = "";
                        break;
                    default:
                        N = l["[[" + E + "]]"];
                }
            d = d.replace("{" + E + "}", N);
        }
    return (
        !0 === n["[[hour12]]"] && ((N = J(_, f, "dayPeriods", y ? "pm" : "am")), (d = d.replace("{ampm}", N))),
        r.exp.test(r.input),
        d
    );
}
(A.DateTimeFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["ca", "nu"], "[[localeData]]": {} }),
    d(a.DateTimeFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: g.call(Q, A.DateTimeFormat) }),
    d(a.DateTimeFormat.prototype, "format", { configurable: !0, get: z }),
    d(a.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0,
        configurable: !0,
        value: function () {
            var e,
                t = new Z(),
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
                r = this != null && "object" == typeof this && ei(this);
            if (!r || !r["[[initializedDateTimeFormat]]"])
                throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var i = 0, s = n.length; i < s; i++)
                u.call(r, (e = "[[" + n[i] + "]]")) &&
                    (t[n[i]] = { value: r[e], writable: !0, configurable: !0, enumerable: !0 });
            return _({}, t);
        },
    });
var X = (a.__localeSensitiveProtos = { Number: {}, Date: {} });
function Q(e) {
    if (!u.call(this, "[[availableLocales]]")) throw TypeError("supportedLocalesOf() is not a constructor");
    var t = et(),
        n = arguments[1],
        r = this["[[availableLocales]]"],
        i = L(e);
    t.exp.test(t.input);
    var s = n;
    if (void 0 !== s) {
        var s = new Z(er(s)),
            a = s.localeMatcher;
        if (void 0 !== a && "lookup" !== (a = String(a)) && "best fit" !== a)
            throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === a || "best fit" === a) var o = U(r, i);
    else var o = U(r, i);
    for (var l in o) u.call(o, l) && d(o, l, { writable: !1, configurable: !1, value: o[l] });
    return d(o, "length", { writable: !1 }), o;
}
function J(e, t, n, r, i) {
    var s = e[t] && e[t][n] ? e[t][n] : e.gregory[n],
        a = { narrow: ["short", "long"], short: ["long", "narrow"], long: ["short", "narrow"] },
        o = u.call(s, r) ? s[r] : u.call(s, a[r][0]) ? s[a[r][0]] : s[a[r][1]];
    return null != i ? o[i] : o;
}
function Z(e) {
    for (var t in e)
        (e instanceof Z || u.call(e, t)) && d(this, t, { value: e[t], enumerable: !0, writable: !0, configurable: !0 });
}
function ee() {
    d(this, "length", { writable: !0, value: 0 }), arguments.length && h.apply(this, f.call(arguments));
}
function et() {
    for (
        var e = /[.?*+^$[\]\\(){}|-]/g,
            t = RegExp.lastMatch || "",
            n = RegExp.multiline ? "m" : "",
            r = { input: RegExp.input },
            i = new ee(),
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
    return (r.exp = new RegExp(p.call(i, "") + t, n)), r;
}
function en(e) {
    for (var t = e.length; t--; ) {
        var n = e.charAt(t);
        n >= "a" && n <= "z" && (e = e.slice(0, t) + n.toUpperCase() + e.slice(t + 1));
    }
    return e;
}
function er(e) {
    if (null == e) throw TypeError("Cannot convert null or undefined to object");
    return Object(e);
}
function ei(e) {
    return u.call(e, "__getInternalProperties") ? e.__getInternalProperties(I) : _(null);
}
(X.Number.toLocaleString = function () {
    if ("[object Number]" !== Object.prototype.toString.call(this))
        throw TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
    return B(new G(arguments[0], arguments[1]), this);
}),
    (X.Date.toLocaleString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = K(n, "any", "all");
        return q(new Y(t, n), e);
    }),
    (X.Date.toLocaleDateString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = K(n, "date", "date");
        return q(new Y(t, n), e);
    }),
    (X.Date.toLocaleTimeString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            n = arguments[1],
            n = K(n, "time", "time");
        return q(new Y(t, n), e);
    }),
    d(a, "__applyLocaleSensitivePrototypes", {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (d(Number.prototype, "toLocaleString", {
                writable: !0,
                configurable: !0,
                value: X.Number.toLocaleString,
            }),
            d(Date.prototype, "toLocaleString", { writable: !0, configurable: !0, value: X.Date.toLocaleString }),
            X.Date))
                u.call(X.Date, e) && d(Date.prototype, e, { writable: !0, configurable: !0, value: X.Date[e] });
        },
    }),
    d(a, "__addLocaleData", {
        value: function (e) {
            if (!D(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            !(function (e, t) {
                if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
                var n,
                    i = [t],
                    s = t.split("-");
                for (s.length > 2 && 4 === s[1].length && h.call(i, s[0] + "-" + s[2]); (n = m.call(i)); )
                    h.call(A.NumberFormat["[[availableLocales]]"], n),
                        (A.NumberFormat["[[localeData]]"][n] = e.number),
                        e.date &&
                            ((e.date.nu = e.number.nu),
                            h.call(A.DateTimeFormat["[[availableLocales]]"], n),
                            (A.DateTimeFormat["[[localeData]]"][n] = e.date));
                void 0 === r && (r = t),
                    S || (V(a.NumberFormat.prototype), (S = !0)),
                    e.date && !y && (W(a.DateTimeFormat.prototype), (y = !0));
            })(e, e.locale);
        },
    }),
    (Z.prototype = _(null)),
    (ee.prototype = _(null)),
    (t.default = a);
