"use strict";
var n,
    i = r(934169),
    o = r(386221),
    a = {},
    s = (function () {
        var e = {};
        try {
            return Object.defineProperty(e, "a", {}), "a" in e;
        } catch (e) {
            return !1;
        }
    })(),
    l = !s && !Object.prototype.__defineGetter__,
    u = Object.prototype.hasOwnProperty,
    c = s
        ? Object.defineProperty
        : function (e, t, r) {
              "get" in r && e.__defineGetter__
                  ? e.__defineGetter__(t, r.get)
                  : (!u.call(e, t) || "value" in r) && (e[t] = r.value);
          },
    f =
        Array.prototype.indexOf ||
        function (e) {
            if (!this.length) return -1;
            for (var t = arguments[1] || 0, r = this.length; t < r; t++) if (this[t] === e) return t;
            return -1;
        },
    d =
        Object.create ||
        function (e, t) {
            var r;
            function n() {}
            for (var i in ((n.prototype = e), (r = new n()), t)) u.call(t, i) && c(r, i, t[i]);
            return r;
        },
    p = Array.prototype.slice,
    h = Array.prototype.concat,
    m = Array.prototype.push,
    v = Array.prototype.join,
    y = Array.prototype.shift,
    g =
        (Array.prototype.unshift,
        Function.prototype.bind ||
            function (e) {
                var t = this,
                    r = p.call(arguments, 1);
                return 1 === t.length
                    ? function (n) {
                          return t.apply(e, h.call(r, p.call(arguments)));
                      }
                    : function () {
                          return t.apply(e, h.call(r, p.call(arguments)));
                      };
            }),
    b = d(null),
    w = Math.random(),
    _ = d(null, { narrow: {}, short: {}, long: {} }),
    S = !1,
    x = !1,
    E = /^[A-Z]{3}$/,
    k = /-u(?:-[0-9a-z]{2,8})+/gi,
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
    T = {
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
    M = {
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
    P = {
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
function A(e) {
    return !(!i.expBCP47Syntax.test(e) || i.expVariantDupes.test(e) || i.expSingletonDupes.test(e));
}
function I(e) {
    if (void 0 === e) return new ee();
    for (var t = new ee(), e = "string" == typeof e ? [e] : e, r = en(e), n = r.length, o = 0; o < n; ) {
        var a = String(o);
        if (a in r) {
            var s = r[a];
            if (null == s || ("string" != typeof s && "object" != typeof s))
                throw TypeError("String or Object type expected");
            var l = String(s);
            if (!A(l)) throw RangeError("'" + l + "' is not a structurally valid language tag");
            (l = (function (e) {
                var t, r;
                r = (e = e.toLowerCase()).split("-");
                for (var n = 1, o = r.length; n < o; n++)
                    if (2 === r[n].length) r[n] = r[n].toUpperCase();
                    else if (4 === r[n].length) r[n] = r[n].charAt(0).toUpperCase() + r[n].slice(1);
                    else if (1 === r[n].length && "x" !== r[n]) break;
                (t = (e = v.call(r, "-")).match(i.expExtSequences)) &&
                    t.length > 1 &&
                    (t.sort(), (e = e.replace(RegExp("(?:" + i.expExtSequences.source + ")+", "i"), v.call(t, "")))),
                    u.call(C, e) && (e = C[e]),
                    (r = e.split("-"));
                for (var n = 1, o = r.length; n < o; n++)
                    u.call(T, r[n])
                        ? (r[n] = T[r[n]])
                        : u.call(M, r[n]) &&
                          ((r[n] = M[r[n]][0]), 1 === n && M[r[1]][1] === r[0] && ((r = p.call(r, n++)), (o -= 1)));
                return v.call(r, "-");
            })(l)),
                -1 === f.call(t, l) && m.call(t, l);
        }
        o++;
    }
    return t;
}
function O(e, t) {
    for (var r = t; ; ) {
        if (f.call(e, r) > -1) return r;
        var n = r.lastIndexOf("-");
        if (n < 0) return;
        n >= 2 && "-" === r.charAt(n - 2) && (n -= 2), (r = r.substring(0, n));
    }
}
function D(e, t) {
    for (var r, i = 0, o = t.length; i < o && !r; ) {
        var a = t[i],
            s = String(a).replace(k, ""),
            r = O(e, s);
        i++;
    }
    var l = new Z();
    if (void 0 !== r) {
        if (((l["[[locale]]"] = r), String(a) !== String(s))) {
            var u = a.match(k)[0],
                c = a.indexOf("-u-");
            (l["[[extension]]"] = u), (l["[[extensionIndex]]"] = c);
        }
    } else l["[[locale]]"] = n;
    return l;
}
function R(e, t, r, n, i) {
    if (0 === e.length) throw ReferenceError("No locale data has been provided for this object yet.");
    if ("lookup" === r["[[localeMatcher]]"]) var o = D(e, t);
    else var o = D(e, t);
    var a = o["[[locale]]"];
    if (u.call(o, "[[extension]]"))
        var s = o["[[extension]]"],
            l = o["[[extensionIndex]]"],
            c = String.prototype.split,
            d = c.call(s, "-"),
            p = d.length;
    var h = new Z();
    h["[[dataLocale]]"] = a;
    for (var m = "-u", v = 0, y = n.length; v < y; ) {
        var g = n[v],
            b = i[a][g],
            w = b["0"],
            _ = "";
        if (void 0 !== d) {
            var S = f.call(d, g);
            if (-1 !== S)
                if (S + 1 < p && d[S + 1].length > 2) {
                    var x = d[S + 1],
                        E = f.call(b, x);
                    if (-1 !== E)
                        var w = x,
                            _ = "-" + g + "-" + w;
                } else {
                    var E = f(b, "true");
                    if (-1 !== E) var w = "true";
                }
        }
        if (u.call(r, "[[" + g + "]]")) {
            var k = r["[[" + g + "]]"];
            -1 !== f.call(b, k) && k !== w && ((w = k), (_ = ""));
        }
        (h["[[" + g + "]]"] = w), (m += _), v++;
    }
    if (m.length > 2)
        var C = a.substring(0, l),
            T = a.substring(l),
            a = C + m + T;
    return (h["[[locale]]"] = a), h;
}
function L(e, t) {
    for (var r = t.length, n = new ee(), i = 0; i < r; ) {
        var o = t[i];
        void 0 !== O(e, String(o).replace(k, "")) && m.call(n, o), i++;
    }
    return p.call(n);
}
function F(e, t, r, n, i) {
    var o = e[t];
    if (void 0 !== o) {
        if (((o = "boolean" === r ? !!o : "string" === r ? String(o) : o), void 0 !== n && -1 === f.call(n, o)))
            throw RangeError("'" + o + "' is not an allowed value for `" + t + "`");
        return o;
    }
    return i;
}
function N(e, t, r, n, i) {
    var o = e[t];
    if (void 0 !== o) {
        if (isNaN((o = Number(o))) || o < r || o > n)
            throw RangeError("Value is not a number or outside accepted range");
        return Math.floor(o);
    }
    return i;
}
function j() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? B(en(this), e, t) : new a.NumberFormat(e, t);
}
function B(e, t, r) {
    var n,
        i = ei(e),
        o = et();
    if (!0 === i["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    c(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === w) return i;
        },
    }),
        (i["[[initializedIntlObject]]"] = !0);
    var a = I(t);
    r = void 0 === r ? {} : en(r);
    var s = new Z(),
        u = F(r, "localeMatcher", "string", new ee("lookup", "best fit"), "best fit");
    s["[[localeMatcher]]"] = u;
    var f = b.NumberFormat["[[localeData]]"],
        d = R(b.NumberFormat["[[availableLocales]]"], a, s, b.NumberFormat["[[relevantExtensionKeys]]"], f);
    (i["[[locale]]"] = d["[[locale]]"]),
        (i["[[numberingSystem]]"] = d["[[nu]]"]),
        (i["[[dataLocale]]"] = d["[[dataLocale]]"]);
    var p = d["[[dataLocale]]"],
        h = F(r, "style", "string", new ee("decimal", "percent", "currency"), "decimal");
    i["[[style]]"] = h;
    var m = F(r, "currency", "string");
    if (void 0 !== m && ((n = er(String(m))), !1 === E.test(n) || 0))
        throw RangeError("'" + m + "' is not a valid currency code");
    if ("currency" === h && void 0 === m) throw TypeError("Currency code is required when style is currency");
    if ("currency" === h) {
        (m = m.toUpperCase()), (i["[[currency]]"] = m);
        var v,
            y = void 0 !== P[(v = m)] ? P[v] : 2;
    }
    var g = F(r, "currencyDisplay", "string", new ee("code", "symbol", "name"), "symbol");
    "currency" === h && (i["[[currencyDisplay]]"] = g);
    var _ = N(r, "minimumIntegerDigits", 1, 21, 1);
    i["[[minimumIntegerDigits]]"] = _;
    var S = N(r, "minimumFractionDigits", 0, 20, "currency" === h ? y : 0);
    i["[[minimumFractionDigits]]"] = S;
    var x = "currency" === h ? Math.max(S, y) : "percent" === h ? Math.max(S, 0) : Math.max(S, 3),
        k = N(r, "maximumFractionDigits", S, 20, x);
    i["[[maximumFractionDigits]]"] = k;
    var C = r.minimumSignificantDigits,
        T = r.maximumSignificantDigits;
    (void 0 !== C || void 0 !== T) &&
        ((C = N(r, "minimumSignificantDigits", 1, 21, 1)),
        (T = N(r, "maximumSignificantDigits", C, 21, 21)),
        (i["[[minimumSignificantDigits]]"] = C),
        (i["[[maximumSignificantDigits]]"] = T));
    var M = F(r, "useGrouping", "boolean", void 0, !0);
    i["[[useGrouping]]"] = M;
    var A = f[p].patterns[h];
    return (
        (i["[[positivePattern]]"] = A.positivePattern),
        (i["[[negativePattern]]"] = A.negativePattern),
        (i["[[boundFormat]]"] = void 0),
        (i["[[initializedNumberFormat]]"] = !0),
        l && (e.format = K.call(e)),
        o.exp.test(o.input),
        e
    );
}
function K() {
    var e = this != null && "object" == typeof this && ei(this);
    if (!e || !e["[[initializedNumberFormat]]"])
        throw TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.");
    if (void 0 === e["[[boundFormat]]"]) {
        var t = g.call(function (e) {
            return $(this, Number(e));
        }, this);
        e["[[boundFormat]]"] = t;
    }
    return e["[[boundFormat]]"];
}
function $(e, t) {
    var r,
        n = et(),
        i = ei(e),
        o = i["[[dataLocale]]"],
        a = i["[[numberingSystem]]"],
        s = b.NumberFormat["[[localeData]]"][o],
        l = s.symbols[a] || s.symbols.latn,
        c = !1;
    if (!1 === isFinite(t)) isNaN(t) ? (r = l.nan) : ((r = l.infinity), t < 0 && (c = !0));
    else {
        if (
            (t < 0 && ((c = !0), (t = -t)),
            "percent" === i["[[style]]"] && (t *= 100),
            (r =
                u.call(i, "[[minimumSignificantDigits]]") && u.call(i, "[[maximumSignificantDigits]]")
                    ? (function (e, t, r) {
                          if (0 === e)
                              var n = v.call(Array(r + 1), "0"),
                                  i = 0;
                          else
                              var i = (function (e) {
                                      if ("function" == typeof Math.log10) return Math.floor(Math.log10(e));
                                      var t = Math.round(Math.log(e) * Math.LOG10E);
                                      return t - (Number("1e" + t) > e);
                                  })(Math.abs(e)),
                                  o = Math.round(Math.exp(Math.abs(i - r + 1) * Math.LN10)),
                                  n = String(Math.round(i - r + 1 < 0 ? e * o : e / o));
                          if (i >= r) return n + v.call(Array(i - r + 1 + 1), "0");
                          if (i === r - 1) return n;
                          if (
                              (i >= 0
                                  ? (n = n.slice(0, i + 1) + "." + n.slice(i + 1))
                                  : i < 0 && (n = "0." + v.call(Array(-(i + 1) + 1), "0") + n),
                              n.indexOf(".") >= 0 && r > t)
                          ) {
                              for (var a = r - t; a > 0 && "0" === n.charAt(n.length - 1); ) (n = n.slice(0, -1)), a--;
                              "." === n.charAt(n.length - 1) && (n = n.slice(0, -1));
                          }
                          return n;
                      })(t, i["[[minimumSignificantDigits]]"], i["[[maximumSignificantDigits]]"])
                    : (function (e, t, r, n) {
                          var i,
                              o = Number.prototype.toFixed.call(e, n),
                              a = o.split(".")[0].length,
                              s = n - r,
                              l = (i = o.indexOf("e")) > -1 ? o.slice(i + 1) : 0;
                          for (
                              l &&
                              ((o = o.slice(0, i).replace(".", "")),
                              (o += v.call(Array(l - (o.length - 1) + 1), "0") + "." + v.call(Array(n + 1), "0")),
                              (a = o.length));
                              s > 0 && "0" === o.slice(-1);
                          )
                              (o = o.slice(0, -1)), s--;
                          if (("." === o.slice(-1) && (o = o.slice(0, -1)), a < t))
                              var u = v.call(Array(t - a + 1), "0");
                          return (u || "") + o;
                      })(
                          t,
                          i["[[minimumIntegerDigits]]"],
                          i["[[minimumFractionDigits]]"],
                          i["[[maximumFractionDigits]]"],
                      )),
            V[a])
        ) {
            var f = V[i["[[numberingSystem]]"]];
            r = String(r).replace(/\d/g, function (e) {
                return f[e];
            });
        } else r = String(r);
        if (((r = r.replace(/\./g, l.decimal)), !0 === i["[[useGrouping]]"])) {
            var d = r.split(l.decimal),
                p = d[0],
                h = s.patterns.primaryGroupSize || 3,
                y = s.patterns.secondaryGroupSize || h;
            if (p.length > h) {
                var g = new ee(),
                    w = p.length - h,
                    _ = w % y,
                    S = p.slice(0, _);
                for (S.length && m.call(g, S); _ < w; ) m.call(g, p.slice(_, _ + y)), (_ += y);
                m.call(g, p.slice(w)), (d[0] = v.call(g, l.group));
            }
            r = v.call(d, l.decimal);
        }
    }
    var x = i[!0 === c ? "[[negativePattern]]" : "[[positivePattern]]"];
    if (((x = x.replace("{number}", r)), "currency" === i["[[style]]"])) {
        var E,
            k = i["[[currency]]"],
            C = s.currencies[k];
        (E = ("symbol" === i["[[currencyDisplay]]"] && C) || k), (x = x.replace("{currency}", E));
    }
    return n.exp.test(n.input), x;
}
c(a, "NumberFormat", { configurable: !0, writable: !0, value: j }),
    c(a.NumberFormat, "prototype", { writable: !1 }),
    (b.NumberFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["nu"], "[[localeData]]": {} }),
    c(a.NumberFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: g.call(J, b.NumberFormat) }),
    c(a.NumberFormat.prototype, "format", { configurable: !0, get: K });
var V = {
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
function U() {
    var e = arguments[0],
        t = arguments[1];
    return this && this !== a ? z(en(this), e, t) : new a.DateTimeFormat(e, t);
}
function z(e, t, r) {
    var n = ei(e),
        i = et();
    if (!0 === n["[[initializedIntlObject]]"])
        throw TypeError("`this` object has already been initialized as an Intl object");
    c(e, "__getInternalProperties", {
        value: function () {
            if (arguments[0] === w) return n;
        },
    }),
        (n["[[initializedIntlObject]]"] = !0);
    var a = I(t),
        r = H(r, "any", "date"),
        s = new Z();
    (E = F(r, "localeMatcher", "string", new ee("lookup", "best fit"), "best fit")), (s["[[localeMatcher]]"] = E);
    var f = b.DateTimeFormat,
        d = f["[[localeData]]"],
        p = R(f["[[availableLocales]]"], a, s, f["[[relevantExtensionKeys]]"], d);
    (n["[[locale]]"] = p["[[locale]]"]),
        (n["[[calendar]]"] = p["[[ca]]"]),
        (n["[[numberingSystem]]"] = p["[[nu]]"]),
        (n["[[dataLocale]]"] = p["[[dataLocale]]"]);
    var h = p["[[dataLocale]]"],
        m = r.timeZone;
    if (void 0 !== m && "UTC" !== (m = er(m))) throw RangeError("timeZone is not supported.");
    for (var v in ((n["[[timeZone]]"] = m), (s = new Z()), W))
        if (u.call(W, v)) {
            var y = F(r, v, "string", W[v]);
            s["[[" + v + "]]"] = y;
        }
    var g,
        _,
        S = d[h],
        x = ((g = S.formats), "[object Array]" === Object.prototype.toString.call(g) ? g : o.createDateTimeFormats(g)),
        E = F(r, "formatMatcher", "string", new ee("basic", "best fit"), "best fit");
    for (var v in ((S.formats = x), (_ = "basic" === E ? G(s, x) : G(s, x, !0)), W))
        if (u.call(W, v) && u.call(_, v)) {
            var k = _[v];
            n["[[" + v + "]]"] = k;
        }
    var C,
        T = F(r, "hour12", "boolean");
    if (n["[[hour]]"])
        if (((T = void 0 === T ? S.hour12 : T), (n["[[hour12]]"] = T), !0 === T)) {
            var M = S.hourNo0;
            (n["[[hourNo0]]"] = M), (C = _.pattern12);
        } else C = _.pattern;
    else C = _.pattern;
    return (
        (n["[[pattern]]"] = C),
        (n["[[boundFormat]]"] = void 0),
        (n["[[initializedDateTimeFormat]]"] = !0),
        l && (e.format = q.call(e)),
        i.exp.test(i.input),
        e
    );
}
c(a.NumberFormat.prototype, "resolvedOptions", {
    configurable: !0,
    writable: !0,
    value: function () {
        var e,
            t = new Z(),
            r = [
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
            n = this != null && "object" == typeof this && ei(this);
        if (!n || !n["[[initializedNumberFormat]]"])
            throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
        for (var i = 0, o = r.length; i < o; i++)
            u.call(n, (e = "[[" + r[i] + "]]")) &&
                (t[r[i]] = { value: n[e], writable: !0, configurable: !0, enumerable: !0 });
        return d({}, t);
    },
}),
    c(a, "DateTimeFormat", { configurable: !0, writable: !0, value: U }),
    c(U, "prototype", { writable: !1 });
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
function H(e, t, r) {
    if (void 0 === e) e = null;
    else {
        var n = en(e);
        for (var i in ((e = new Z()), n)) e[i] = n[i];
    }
    var e = d(e),
        o = !0;
    return (
        ("date" === t || "any" === t) &&
            (void 0 !== e.weekday || void 0 !== e.year || void 0 !== e.month || void 0 !== e.day) &&
            (o = !1),
        ("time" === t || "any" === t) && (void 0 !== e.hour || void 0 !== e.minute || void 0 !== e.second) && (o = !1),
        o && ("date" === r || "all" === r) && (e.year = e.month = e.day = "numeric"),
        o && ("time" === r || "all" === r) && (e.hour = e.minute = e.second = "numeric"),
        e
    );
}
function G(e, t, r) {
    for (var n, i = -1 / 0, o = 0, a = t.length; o < a; ) {
        var s = t[o],
            l = 0;
        for (var c in W)
            if (u.call(W, c)) {
                var d = e["[[" + c + "]]"],
                    p = u.call(s, c) ? s[c] : void 0;
                if (void 0 === d && void 0 !== p) l -= 20;
                else if (void 0 !== d && void 0 === p) l -= 120;
                else {
                    var h = ["2-digit", "numeric", "narrow", "short", "long"],
                        m = f.call(h, d),
                        v = Math.max(Math.min(f.call(h, p) - m, 2), -2);
                    r &&
                        ((("numeric" === d || "2-digit" === d) && "numeric" !== p && "2-digit" !== p) ||
                            ("numeric" !== d && "2-digit" !== d && ("2-digit" === p || "numeric" === p))) &&
                        (l -= 8),
                        2 === v ? (l -= 6) : 1 === v ? (l -= 3) : -1 === v ? (l -= 6) : -2 === v && (l -= 8);
                }
            }
        l > i && ((i = l), (n = s)), o++;
    }
    return n;
}
function q() {
    var e = this != null && "object" == typeof this && ei(this);
    if (!e || !e["[[initializedDateTimeFormat]]"])
        throw TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.");
    if (void 0 === e["[[boundFormat]]"]) {
        var t = g.call(function () {
            var e = Number(0 == arguments.length ? Date.now() : arguments[0]);
            return Y(this, e);
        }, this);
        e["[[boundFormat]]"] = t;
    }
    return e["[[boundFormat]]"];
}
function Y(e, t) {
    if (!isFinite(t)) throw RangeError("Invalid valid date passed to format");
    var r = e.__getInternalProperties(w),
        n = et(),
        i = r["[[locale]]"],
        o = new a.NumberFormat([i], { useGrouping: !1 }),
        s = new a.NumberFormat([i], { minimumIntegerDigits: 2, useGrouping: !1 }),
        l =
            ((m = t),
            (v = r["[[calendar]]"]),
            (y = r["[[timeZone]]"]),
            (g = new Date(m)),
            new Z({
                "[[weekday]]": g[(S = "get" + (y || "")) + "Day"](),
                "[[era]]": +(g[S + "FullYear"]() >= 0),
                "[[year]]": g[S + "FullYear"](),
                "[[month]]": g[S + "Month"](),
                "[[day]]": g[S + "Date"](),
                "[[hour]]": g[S + "Hours"](),
                "[[minute]]": g[S + "Minutes"](),
                "[[second]]": g[S + "Seconds"](),
                "[[inDST]]": !1,
            })),
        c = r["[[pattern]]"],
        f = r["[[dataLocale]]"],
        d = b.DateTimeFormat["[[localeData]]"][f].calendars,
        p = r["[[calendar]]"];
    for (var h in W)
        if (u.call(r, "[[" + h + "]]")) {
            var m,
                v,
                y,
                g,
                S,
                x,
                E,
                k = r["[[" + h + "]]"],
                C = l["[[" + h + "]]"];
            if (
                ("year" === h && C <= 0
                    ? (C = 1 - C)
                    : "month" === h
                      ? C++
                      : "hour" === h &&
                        !0 === r["[[hour12]]"] &&
                        ((C %= 12), (x = C !== l["[[" + h + "]]"]), 0 === C && !0 === r["[[hourNo0]]"] && (C = 12)),
                "numeric" === k)
            )
                E = $(o, C);
            else if ("2-digit" === k) (E = $(s, C)).length > 2 && (E = E.slice(-2));
            else if (k in _)
                switch (h) {
                    case "month":
                        E = Q(d, p, "months", k, l["[[" + h + "]]"]);
                        break;
                    case "weekday":
                        try {
                            E = Q(d, p, "days", k, l["[[" + h + "]]"]);
                        } catch (e) {
                            throw Error("Could not find weekday data for locale " + i);
                        }
                        break;
                    case "timeZoneName":
                        E = "";
                        break;
                    default:
                        E = l["[[" + h + "]]"];
                }
            c = c.replace("{" + h + "}", E);
        }
    return (
        !0 === r["[[hour12]]"] && ((E = Q(d, p, "dayPeriods", x ? "pm" : "am")), (c = c.replace("{ampm}", E))),
        n.exp.test(n.input),
        c
    );
}
(b.DateTimeFormat = { "[[availableLocales]]": [], "[[relevantExtensionKeys]]": ["ca", "nu"], "[[localeData]]": {} }),
    c(a.DateTimeFormat, "supportedLocalesOf", { configurable: !0, writable: !0, value: g.call(J, b.DateTimeFormat) }),
    c(a.DateTimeFormat.prototype, "format", { configurable: !0, get: q }),
    c(a.DateTimeFormat.prototype, "resolvedOptions", {
        writable: !0,
        configurable: !0,
        value: function () {
            var e,
                t = new Z(),
                r = [
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
                n = this != null && "object" == typeof this && ei(this);
            if (!n || !n["[[initializedDateTimeFormat]]"])
                throw TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var i = 0, o = r.length; i < o; i++)
                u.call(n, (e = "[[" + r[i] + "]]")) &&
                    (t[r[i]] = { value: n[e], writable: !0, configurable: !0, enumerable: !0 });
            return d({}, t);
        },
    });
var X = (a.__localeSensitiveProtos = { Number: {}, Date: {} });
function J(e) {
    if (!u.call(this, "[[availableLocales]]")) throw TypeError("supportedLocalesOf() is not a constructor");
    var t = et(),
        r = arguments[1],
        n = this["[[availableLocales]]"],
        i = I(e);
    t.exp.test(t.input);
    var o = r;
    if (void 0 !== o) {
        var o = new Z(en(o)),
            a = o.localeMatcher;
        if (void 0 !== a && "lookup" !== (a = String(a)) && "best fit" !== a)
            throw RangeError('matcher should be "lookup" or "best fit"');
    }
    if (void 0 === a || "best fit" === a) var s = L(n, i);
    else var s = L(n, i);
    for (var l in s) u.call(s, l) && c(s, l, { writable: !1, configurable: !1, value: s[l] });
    return c(s, "length", { writable: !1 }), s;
}
function Q(e, t, r, n, i) {
    var o = e[t] && e[t][r] ? e[t][r] : e.gregory[r],
        a = { narrow: ["short", "long"], short: ["long", "narrow"], long: ["short", "narrow"] },
        s = u.call(o, n) ? o[n] : u.call(o, a[n][0]) ? o[a[n][0]] : o[a[n][1]];
    return null != i ? s[i] : s;
}
function Z(e) {
    for (var t in e)
        (e instanceof Z || u.call(e, t)) && c(this, t, { value: e[t], enumerable: !0, writable: !0, configurable: !0 });
}
function ee() {
    c(this, "length", { writable: !0, value: 0 }), arguments.length && m.apply(this, p.call(arguments));
}
function et() {
    for (
        var e = /[.?*+^$[\]\\(){}|-]/g,
            t = RegExp.lastMatch || "",
            r = RegExp.multiline ? "m" : "",
            n = { input: RegExp.input },
            i = new ee(),
            o = !1,
            a = {},
            s = 1;
        s <= 9;
        s++
    )
        o = (a["$" + s] = RegExp["$" + s]) || o;
    if (((t = t.replace(e, "\\$&")), o))
        for (var s = 1; s <= 9; s++) {
            var l = a["$" + s];
            l ? ((l = l.replace(e, "\\$&")), (t = t.replace(l, "(" + l + ")"))) : (t = "()" + t),
                m.call(i, t.slice(0, t.indexOf("(") + 1)),
                (t = t.slice(t.indexOf("(") + 1));
        }
    return (n.exp = new RegExp(v.call(i, "") + t, r)), n;
}
function er(e) {
    for (var t = e.length; t--; ) {
        var r = e.charAt(t);
        r >= "a" && r <= "z" && (e = e.slice(0, t) + r.toUpperCase() + e.slice(t + 1));
    }
    return e;
}
function en(e) {
    if (null == e) throw TypeError("Cannot convert null or undefined to object");
    return Object(e);
}
function ei(e) {
    return u.call(e, "__getInternalProperties") ? e.__getInternalProperties(w) : d(null);
}
(X.Number.toLocaleString = function () {
    if ("[object Number]" !== Object.prototype.toString.call(this))
        throw TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
    return $(new j(arguments[0], arguments[1]), this);
}),
    (X.Date.toLocaleString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            r = arguments[1],
            r = H(r, "any", "all");
        return Y(new U(t, r), e);
    }),
    (X.Date.toLocaleDateString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            r = arguments[1],
            r = H(r, "date", "date");
        return Y(new U(t, r), e);
    }),
    (X.Date.toLocaleTimeString = function () {
        if ("[object Date]" !== Object.prototype.toString.call(this))
            throw TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
        var e = +this;
        if (isNaN(e)) return "Invalid Date";
        var t = arguments[0],
            r = arguments[1],
            r = H(r, "time", "time");
        return Y(new U(t, r), e);
    }),
    c(a, "__applyLocaleSensitivePrototypes", {
        writable: !0,
        configurable: !0,
        value: function () {
            for (var e in (c(Number.prototype, "toLocaleString", {
                writable: !0,
                configurable: !0,
                value: X.Number.toLocaleString,
            }),
            c(Date.prototype, "toLocaleString", { writable: !0, configurable: !0, value: X.Date.toLocaleString }),
            X.Date))
                u.call(X.Date, e) && c(Date.prototype, e, { writable: !0, configurable: !0, value: X.Date[e] });
        },
    }),
    c(a, "__addLocaleData", {
        value: function (e) {
            if (!A(e.locale)) throw Error("Object passed doesn't identify itself with a valid language tag");
            !(function (e, t) {
                if (!e.number) throw Error("Object passed doesn't contain locale data for Intl.NumberFormat");
                var r,
                    i = [t],
                    o = t.split("-");
                for (o.length > 2 && 4 === o[1].length && m.call(i, o[0] + "-" + o[2]); (r = y.call(i)); )
                    m.call(b.NumberFormat["[[availableLocales]]"], r),
                        (b.NumberFormat["[[localeData]]"][r] = e.number),
                        e.date &&
                            ((e.date.nu = e.number.nu),
                            m.call(b.DateTimeFormat["[[availableLocales]]"], r),
                            (b.DateTimeFormat["[[localeData]]"][r] = e.date));
                void 0 === n && (n = t),
                    S || (B(a.NumberFormat.prototype), (S = !0)),
                    e.date && !x && (z(a.DateTimeFormat.prototype), (x = !0));
            })(e, e.locale);
        },
    }),
    (Z.prototype = d(null)),
    (ee.prototype = d(null)),
    (t.default = a);
