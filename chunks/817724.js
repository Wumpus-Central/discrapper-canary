t.d(a, { cQ: () => er, J3: () => eo, Eu: () => ed });
var n = t(825913),
    r = t(521767),
    i = t(564004),
    l = t(967158),
    o = t(498430),
    u = t(318473),
    s = t(64700);
let d = (0, s.createContext)({}),
    c = (0, i.U7)(function (e, a) {
        [e, a] = (0, n.JT)(e, a, d);
        let { hoverProps: t, isHovered: r } = (0, l.M)(e),
            { isFocused: i, isFocusVisible: c, focusProps: m } = (0, o.o)({ isTextInput: !0, autoFocus: e.autoFocus }),
            h = !!e["aria-invalid"] && "false" !== e["aria-invalid"],
            D = (0, n.Sl)({
                ...e,
                values: { isHovered: r, isFocused: i, isFocusVisible: c, isDisabled: e.disabled || !1, isInvalid: h },
                defaultClassName: "react-aria-Input",
            });
        return s.createElement("input", {
            ...(0, u.v)(
                ((e) => {
                    let { onHoverStart: a, onHoverChange: t, onHoverEnd: n, ...r } = e;
                    return r;
                })(e),
                m,
                t,
            ),
            ...D,
            ref: a,
            "data-focused": i || void 0,
            "data-disabled": e.disabled || void 0,
            "data-hovered": r || void 0,
            "data-focus-visible": c || void 0,
            "data-invalid": h || void 0,
        });
    });
var m = t(402112),
    h = t(974111),
    D = t(938291),
    y = t(47276);
class g {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, a) {
        (this.locale = e), (this.dictionary = a);
    }
}
var p = t(376472),
    f = t(99478),
    v = t(408713),
    b = t(518665),
    $ = t(150047),
    R = t(248215),
    w = t(3388),
    P = t(985620),
    C = t(48284),
    k = t(685369);
let x = RegExp("^.*\\(.*\\).*$"),
    E = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class S {
    parse(e) {
        return F(this.locale, this.options, e).parse(e);
    }
    isValidPartialNumber(e, a, t) {
        return F(this.locale, this.options, e).isValidPartialNumber(e, a, t);
    }
    getNumberingSystem(e) {
        return F(this.locale, this.options, e).options.numberingSystem;
    }
    constructor(e, a = {}) {
        (this.locale = e), (this.options = a);
    }
}
let V = new Map();
function F(e, a, t) {
    let n = B(e, a);
    if (!e.includes("-nu-") && !n.isValidPartialNumber(t)) {
        for (let r of E)
            if (r !== n.options.numberingSystem) {
                let n = B(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + r, a);
                if (n.isValidPartialNumber(t)) return n;
            }
    }
    return n;
}
function B(e, a) {
    let t =
            e +
            (a
                ? Object.entries(a)
                      .sort((e, a) => (e[0] < a[0] ? -1 : 1))
                      .join()
                : ""),
        n = V.get(t);
    return n || ((n = new M(e, a)), V.set(t, n)), n;
}
class M {
    parse(e) {
        let a = this.sanitize(e);
        if (
            (this.symbols.group && (a = T(a, this.symbols.group, "")),
            this.symbols.decimal && (a = a.replace(this.symbols.decimal, ".")),
            this.symbols.minusSign && (a = a.replace(this.symbols.minusSign, "-")),
            (a = a.replace(this.symbols.numeral, this.symbols.index)),
            "percent" === this.options.style)
        ) {
            let e = a.indexOf("-"),
                t = (a = (a = a.replace("-", "")).replace("+", "")).indexOf(".");
            -1 === t && (t = a.length),
                (a = a.replace(".", "")),
                (a =
                    t - 2 == 0
                        ? `0.${a}`
                        : t - 2 == -1
                          ? `0.0${a}`
                          : t - 2 == -2
                            ? "0.00"
                            : `${a.slice(0, t - 2)}.${a.slice(t - 2)}`),
                e > -1 && (a = `-${a}`);
        }
        let t = a ? +a : NaN;
        if (isNaN(t)) return NaN;
        if ("percent" === this.options.style) {
            var n, r;
            let e = {
                ...this.options,
                style: "decimal",
                minimumFractionDigits: Math.min((null != (n = this.options.minimumFractionDigits) ? n : 0) + 2, 20),
                maximumFractionDigits: Math.min((null != (r = this.options.maximumFractionDigits) ? r : 0) + 2, 20),
            };
            return new S(this.locale, e).parse(new (0, k.K)(this.locale, e).format(t));
        }
        return "accounting" === this.options.currencySign && x.test(e) && (t *= -1), t;
    }
    sanitize(e) {
        return (
            (e = e.replace(this.symbols.literals, "")),
            this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign)),
            "arab" === this.options.numberingSystem &&
                (this.symbols.decimal &&
                    (e = (e = e.replace(",", this.symbols.decimal)).replace(
                        String.fromCharCode(1548),
                        this.symbols.decimal,
                    )),
                this.symbols.group && (e = T(e, ".", this.symbols.group))),
            "\u2019" === this.symbols.group && e.includes("'") && (e = T(e, "'", this.symbols.group)),
            "fr-FR" === this.options.locale &&
                this.symbols.group &&
                ((e = T(e, " ", this.symbols.group)), (e = T(e, /\u00A0/g, this.symbols.group))),
            e
        );
    }
    isValidPartialNumber(e, a = -1 / 0, t = 1 / 0) {
        return (
            (e = this.sanitize(e)),
            this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && a < 0
                ? (e = e.slice(this.symbols.minusSign.length))
                : this.symbols.plusSign &&
                  e.startsWith(this.symbols.plusSign) &&
                  t > 0 &&
                  (e = e.slice(this.symbols.plusSign.length)),
            !(
                (this.symbols.group && e.startsWith(this.symbols.group)) ||
                (this.symbols.decimal &&
                    e.indexOf(this.symbols.decimal) > -1 &&
                    0 === this.options.maximumFractionDigits)
            ) &&
                (this.symbols.group && (e = T(e, this.symbols.group, "")),
                (e = e.replace(this.symbols.numeral, "")),
                this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")),
                0 === e.length)
        );
    }
    constructor(e, a = {}) {
        var t, n;
        (this.locale = e),
            1 !== a.roundingIncrement &&
                null != a.roundingIncrement &&
                (null == a.maximumFractionDigits && null == a.minimumFractionDigits
                    ? ((a.maximumFractionDigits = 0), (a.minimumFractionDigits = 0))
                    : null == a.maximumFractionDigits
                      ? (a.maximumFractionDigits = a.minimumFractionDigits)
                      : null == a.minimumFractionDigits && (a.minimumFractionDigits = a.maximumFractionDigits)),
            (this.formatter = new Intl.NumberFormat(e, a)),
            (this.options = this.formatter.resolvedOptions()),
            (this.symbols = (function (e, a, t, n) {
                var r, i, l, o, u;
                let s = new Intl.NumberFormat(e, {
                        ...t,
                        minimumSignificantDigits: 1,
                        maximumSignificantDigits: 21,
                        roundingIncrement: 1,
                        roundingPriority: "auto",
                        roundingMode: "halfExpand",
                    }),
                    d = s.formatToParts(-10000.111),
                    c = s.formatToParts(10000.111),
                    m = A.map((e) => s.formatToParts(e)),
                    h = null != (u = null == (r = d.find((e) => "minusSign" === e.type)) ? void 0 : r.value) ? u : "-",
                    D = null == (i = c.find((e) => "plusSign" === e.type)) ? void 0 : i.value;
                D ||
                    ((null == n ? void 0 : n.signDisplay) !== "exceptZero" &&
                        (null == n ? void 0 : n.signDisplay) !== "always") ||
                    (D = "+");
                let y =
                        null ==
                        (l = new Intl.NumberFormat(e, { ...t, minimumFractionDigits: 2, maximumFractionDigits: 2 })
                            .formatToParts(0.001)
                            .find((e) => "decimal" === e.type))
                            ? void 0
                            : l.value,
                    g = null == (o = d.find((e) => "group" === e.type)) ? void 0 : o.value,
                    p = [
                        ...new Set([
                            ...d.filter((e) => !I.has(e.type)).map((e) => O(e.value)),
                            ...m.flatMap((e) => e.filter((e) => !I.has(e.type)).map((e) => O(e.value))),
                        ]),
                    ].sort((e, a) => a.length - e.length),
                    f =
                        0 === p.length
                            ? RegExp("[\\p{White_Space}]", "gu")
                            : RegExp(`${p.join("|")}|[\\p{White_Space}]`, "gu"),
                    v = [...new Intl.NumberFormat(t.locale, { useGrouping: !1 }).format(0x24cb016ea)].reverse(),
                    b = new Map(v.map((e, a) => [e, a]));
                return {
                    minusSign: h,
                    plusSign: D,
                    decimal: y,
                    group: g,
                    literals: f,
                    numeral: RegExp(`[${v.join("")}]`, "g"),
                    index: (e) => String(b.get(e)),
                };
            })(e, this.formatter, this.options, a)),
            "percent" === this.options.style &&
                ((null != (t = this.options.minimumFractionDigits) ? t : 0) > 18 ||
                    (null != (n = this.options.maximumFractionDigits) ? n : 0) > 18) &&
                console.warn(
                    "NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.",
                );
    }
}
let I = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]),
    A = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, 0.1, 1.1];
function T(e, a, t) {
    return e.replaceAll ? e.replaceAll(a, t) : e.split(a).join(t);
}
function O(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var N = t(849352),
    z = t(74172),
    Z = {};
Z = {
    "ar-AE": { Empty: "\u0641\u0627\u0631\u063A" },
    "bg-BG": { Empty: "\u0418\u0437\u043F\u0440\u0430\u0437\u043D\u0438" },
    "cs-CZ": { Empty: "Pr\xe1zdn\xe9" },
    "da-DK": { Empty: "Tom" },
    "de-DE": { Empty: "Leer" },
    "el-GR": { Empty: "\u0386\u03B4\u03B5\u03B9\u03BF" },
    "en-US": { Empty: "Empty" },
    "es-ES": { Empty: "Vac\xedo" },
    "et-EE": { Empty: "T\xfchjenda" },
    "fi-FI": { Empty: "Tyhj\xe4" },
    "fr-FR": { Empty: "Vide" },
    "he-IL": { Empty: "\u05E8\u05D9\u05E7" },
    "hr-HR": { Empty: "Prazno" },
    "hu-HU": { Empty: "\xdcres" },
    "it-IT": { Empty: "Vuoto" },
    "ja-JP": { Empty: "\u7A7A" },
    "ko-KR": { Empty: "\uBE44\uC5B4 \uC788\uC74C" },
    "lt-LT": { Empty: "Tu\u0161\u010Dias" },
    "lv-LV": { Empty: "Tuk\u0161s" },
    "nb-NO": { Empty: "Tom" },
    "nl-NL": { Empty: "Leeg" },
    "pl-PL": { Empty: "Pusty" },
    "pt-BR": { Empty: "Vazio" },
    "pt-PT": { Empty: "Vazio" },
    "ro-RO": { Empty: "Gol" },
    "ru-RU": { Empty: "\u041D\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E" },
    "sk-SK": { Empty: "Pr\xe1zdne" },
    "sl-SI": { Empty: "Prazen" },
    "sr-SP": { Empty: "Prazno" },
    "sv-SE": { Empty: "Tomt" },
    "tr-TR": { Empty: "Bo\u015F" },
    "uk-UA": { Empty: "\u041F\u0443\u0441\u0442\u043E" },
    "zh-CN": { Empty: "\u7A7A" },
    "zh-TW": { Empty: "\u7A7A\u767D" },
};
var U = t(217512),
    j = t(959462),
    K = t(114099),
    L = t(485720),
    J = t(300511);
let W = new (0, t(731692).B)(
    {
        ach: { year: "mwaka", month: "dwe", day: "nino" },
        af: { year: "jjjj", month: "mm", day: "dd" },
        am: { year: "\u12D3\u12D3\u12D3\u12D3", month: "\u121A\u121C", day: "\u1240\u1240" },
        an: { year: "aaaa", month: "mm", day: "dd" },
        ar: { year: "\u0633\u0646\u0629", month: "\u0634\u0647\u0631", day: "\u064A\u0648\u0645" },
        ast: { year: "aaaa", month: "mm", day: "dd" },
        az: { year: "iiii", month: "aa", day: "gg" },
        be: { year: "\u0433\u0433\u0433\u0433", month: "\u043C\u043C", day: "\u0434\u0434" },
        bg: { year: "\u0433\u0433\u0433\u0433", month: "\u043C\u043C", day: "\u0434\u0434" },
        bn: { year: "yyyy", month: "\u09AE\u09BF\u09AE\u09BF", day: "dd" },
        br: { year: "bbbb", month: "mm", day: "dd" },
        bs: { year: "gggg", month: "mm", day: "dd" },
        ca: { year: "aaaa", month: "mm", day: "dd" },
        cak: { year: "jjjj", month: "ii", day: "q'q'" },
        ckb: { year: "\u0633\u0627\u06B5", month: "\u0645\u0627\u0646\u06AF", day: "\u0695\u06C6\u0698" },
        cs: { year: "rrrr", month: "mm", day: "dd" },
        cy: { year: "bbbb", month: "mm", day: "dd" },
        da: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        de: { year: "jjjj", month: "mm", day: "tt" },
        dsb: { year: "llll", month: "mm", day: "\u017A\u017A" },
        el: { year: "\u03B5\u03B5\u03B5\u03B5", month: "\u03BC\u03BC", day: "\u03B7\u03B7" },
        en: { year: "yyyy", month: "mm", day: "dd" },
        eo: { year: "jjjj", month: "mm", day: "tt" },
        es: { year: "aaaa", month: "mm", day: "dd" },
        et: { year: "aaaa", month: "kk", day: "pp" },
        eu: { year: "uuuu", month: "hh", day: "ee" },
        fa: { year: "\u0633\u0627\u0644", month: "\u0645\u0627\u0647", day: "\u0631\u0648\u0632" },
        ff: { year: "hhhh", month: "ll", day: "\xf1\xf1" },
        fi: { year: "vvvv", month: "kk", day: "pp" },
        fr: { year: "aaaa", month: "mm", day: "jj" },
        fy: { year: "jjjj", month: "mm", day: "dd" },
        ga: { year: "bbbb", month: "mm", day: "ll" },
        gd: { year: "bbbb", month: "mm", day: "ll" },
        gl: { year: "aaaa", month: "mm", day: "dd" },
        he: { year: "\u05E9\u05E0\u05D4", month: "\u05D7\u05D5\u05D3\u05E9", day: "\u05D9\u05D5\u05DD" },
        hr: { year: "gggg", month: "mm", day: "dd" },
        hsb: { year: "llll", month: "mm", day: "dd" },
        hu: { year: "\xe9\xe9\xe9\xe9", month: "hh", day: "nn" },
        ia: { year: "aaaa", month: "mm", day: "dd" },
        id: { year: "tttt", month: "bb", day: "hh" },
        it: { year: "aaaa", month: "mm", day: "gg" },
        ja: { year: "\u5E74", month: "\u6708", day: "\u65E5" },
        ka: { year: "\u10EC\u10EC\u10EC\u10EC", month: "\u10D7\u10D7", day: "\u10E0\u10E0" },
        kk: { year: "\u0436\u0436\u0436\u0436", month: "\u0430\u0430", day: "\u043A\u043A" },
        kn: { year: "\u0CB5\u0CB5\u0CB5\u0CB5", month: "\u0CAE\u0CBF\u0CAE\u0CC0", day: "\u0CA6\u0CBF\u0CA6\u0CBF" },
        ko: { year: "\uC5F0\uB3C4", month: "\uC6D4", day: "\uC77C" },
        lb: { year: "jjjj", month: "mm", day: "dd" },
        lo: { year: "\u0E9B\u0E9B\u0E9B\u0E9B", month: "\u0E94\u0E94", day: "\u0EA7\u0EA7" },
        lt: { year: "mmmm", month: "mm", day: "dd" },
        lv: { year: "gggg", month: "mm", day: "dd" },
        meh: { year: "aaaa", month: "mm", day: "dd" },
        ml: {
            year: "\u0D35\u0D7C\u0D37\u0D02",
            month: "\u0D2E\u0D3E\u0D38\u0D02",
            day: "\u0D24\u0D40\u0D2F\u0D24\u0D3F",
        },
        ms: { year: "tttt", month: "mm", day: "hh" },
        nb: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        nl: { year: "jjjj", month: "mm", day: "dd" },
        nn: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        no: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        oc: { year: "aaaa", month: "mm", day: "jj" },
        pl: { year: "rrrr", month: "mm", day: "dd" },
        pt: { year: "aaaa", month: "mm", day: "dd" },
        rm: { year: "oooo", month: "mm", day: "dd" },
        ro: { year: "aaaa", month: "ll", day: "zz" },
        ru: { year: "\u0433\u0433\u0433\u0433", month: "\u043C\u043C", day: "\u0434\u0434" },
        sc: { year: "aaaa", month: "mm", day: "dd" },
        scn: { year: "aaaa", month: "mm", day: "jj" },
        sk: { year: "rrrr", month: "mm", day: "dd" },
        sl: { year: "llll", month: "mm", day: "dd" },
        sr: { year: "\u0433\u0433\u0433\u0433", month: "\u043C\u043C", day: "\u0434\u0434" },
        sv: { year: "\xe5\xe5\xe5\xe5", month: "mm", day: "dd" },
        szl: { year: "rrrr", month: "mm", day: "dd" },
        tg: { year: "\u0441\u0441\u0441\u0441", month: "\u043C\u043C", day: "\u0440\u0440" },
        th: { year: "\u0E1B\u0E1B\u0E1B\u0E1B", month: "\u0E14\u0E14", day: "\u0E27\u0E27" },
        tr: { year: "yyyy", month: "aa", day: "gg" },
        uk: { year: "\u0440\u0440\u0440\u0440", month: "\u043C\u043C", day: "\u0434\u0434" },
        "zh-CN": { year: "\u5E74", month: "\u6708", day: "\u65E5" },
        "zh-TW": { year: "\u5E74", month: "\u6708", day: "\u65E5" },
    },
    "en",
);
var Y = t(515702),
    G = t(939546),
    H = t(142922),
    _ = t(339241),
    q = t(492313);
let Q = { year: !0, month: !0, day: !0, hour: !0, minute: !0, second: !0, dayPeriod: !0, era: !0 },
    X = { year: 5, month: 2, day: 7, hour: 2, minute: 15, second: 15 },
    ee = { dayperiod: "dayPeriod", relatedYear: "year", yearName: "literal", unknown: "literal" };
function ea(e, a, t) {
    switch (a) {
        case "era": {
            let a = e.calendar.getEras();
            return { value: a.indexOf(e.era), minValue: 0, maxValue: a.length - 1 };
        }
        case "year":
            return { value: e.year, minValue: 1, maxValue: e.calendar.getYearsInEra(e) };
        case "month":
            return { value: e.month, minValue: (0, G.xz)(e), maxValue: e.calendar.getMonthsInYear(e) };
        case "day":
            return { value: e.day, minValue: (0, G.oT)(e), maxValue: e.calendar.getDaysInMonth(e) };
    }
    if ("hour" in e)
        switch (a) {
            case "dayPeriod":
                return { value: 12 * (e.hour >= 12), minValue: 0, maxValue: 12 };
            case "hour":
                if (t.hour12) {
                    let a = e.hour >= 12;
                    return { value: e.hour, minValue: 12 * !!a, maxValue: a ? 23 : 11 };
                }
                return { value: e.hour, minValue: 0, maxValue: 23 };
            case "minute":
                return { value: e.minute, minValue: 0, maxValue: 59 };
            case "second":
                return { value: e.second, minValue: 0, maxValue: 59 };
        }
    return {};
}
var et = t(533715),
    en = t(290424);
let er = (0, s.createContext)(null),
    ei = (0, s.createContext)(null),
    el = (0, s.createContext)(null),
    eo = (0, s.forwardRef)(function (e, a) {
        let t = (0, s.useContext)(ei),
            n = (0, s.useContext)(el);
        return t || n ? s.createElement(es, { ...e, ref: a }) : s.createElement(eu, { ...e, ref: a });
    }),
    eu = (0, s.forwardRef)((e, a) => {
        let [t, i] = (0, n.JT)({ slot: e.slot }, a, er),
            { locale: l } = (0, m.Y)(),
            o = (function (e) {
                var a, t, n;
                let {
                        locale: r,
                        createCalendar: i,
                        hideTimeZone: l,
                        isDisabled: o = !1,
                        isReadOnly: u = !1,
                        isRequired: d = !1,
                        minValue: c,
                        maxValue: m,
                        isDateUnavailable: h,
                    } = e,
                    D = e.value || e.defaultValue || e.placeholderValue || null,
                    [y, g] = (0, J.bf)(D, e.granularity),
                    f = g || "UTC";
                if (D && !(y in D)) throw Error("Invalid granularity " + y + " for value " + D.toString());
                let v = (0, s.useMemo)(() => new (0, Y.p)(r), [r]),
                    b = (0, s.useMemo)(() => i(v.resolvedOptions().calendar), [i, v]),
                    [$, R] = (0, q.P)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
                    [w] = (0, s.useState)($),
                    P = (0, s.useMemo)(() => {
                        var e;
                        return null != (e = (0, J.nf)($, b)) ? e : null;
                    }, [$, b]),
                    [C, k] = (0, s.useState)(() => (0, J.o_)(e.placeholderValue, y, b, g)),
                    x = "gregory" === b.identifier && "BC" === (P || C).era,
                    E = (0, s.useMemo)(() => {
                        var a;
                        return {
                            granularity: y,
                            maxGranularity: null != (a = e.maxGranularity) ? a : "year",
                            timeZone: g,
                            hideTimeZone: l,
                            hourCycle: e.hourCycle,
                            showEra: x,
                            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                        };
                    }, [e.maxGranularity, y, e.hourCycle, e.shouldForceLeadingZeros, g, l, x]),
                    S = (0, s.useMemo)(() => (0, J.id)({}, E), [E]),
                    V = (0, s.useMemo)(() => new (0, Y.p)(r, S), [r, S]),
                    F = (0, s.useMemo)(() => V.resolvedOptions(), [V]),
                    B = (0, s.useMemo)(
                        () =>
                            V.formatToParts(new Date())
                                .filter((e) => Q[e.type])
                                .reduce((e, a) => ((e[ee[a.type] || a.type] = !0), e), {}),
                        [V],
                    ),
                    [M, I] = (0, s.useState)(() => (e.value || e.defaultValue ? { ...B } : {})),
                    A = (0, s.useRef)(null),
                    T = (0, s.useRef)(b);
                (0, s.useEffect)(() => {
                    (0, G.Jg)(b, T.current) ||
                        ((T.current = b),
                        k((a) =>
                            Object.keys(M).length > 0 ? (0, p.yP)(a, b) : (0, J.o_)(e.placeholderValue, y, b, g),
                        ));
                }, [b, y, M, g, e.placeholderValue]),
                    $ && Object.keys(M).length < Object.keys(B).length && I((M = { ...B })),
                    null == $ &&
                        Object.keys(M).length === Object.keys(B).length &&
                        (I((M = {})), k((0, J.o_)(e.placeholderValue, y, b, g)));
                let O = P && Object.keys(M).length >= Object.keys(B).length ? P : C,
                    N = (a) => {
                        if (e.isDisabled || e.isReadOnly) return;
                        let t = Object.keys(M),
                            n = Object.keys(B);
                        null == a
                            ? (R(null), k((0, J.o_)(e.placeholderValue, y, b, g)), I({}))
                            : (0 === t.length && null == A.current) ||
                                t.length >= n.length ||
                                (t.length === n.length - 1 && B.dayPeriod && !M.dayPeriod && "dayPeriod" !== A.current)
                              ? (0 === t.length && I((M = { ...B })),
                                R((a = (0, p.yP)(a, (null == D ? void 0 : D.calendar) || new (0, H.FG)()))))
                              : k(a),
                            (A.current = null);
                    },
                    z = (0, s.useMemo)(() => O.toDate(f), [O, f]),
                    Z = (0, s.useMemo)(
                        () =>
                            (function (e, a, t, n, r, i, l, o) {
                                let u = ["hour", "minute", "second"],
                                    s = t.formatToParts(e),
                                    d = [];
                                for (let e of s) {
                                    var c;
                                    let t = ee[e.type] || e.type,
                                        s = Q[t];
                                    "era" === t && 1 === i.getEras().length && (s = !1);
                                    let m = Q[t] && !a[t],
                                        h = Q[t]
                                            ? ((c = e.value),
                                              "era" === t || "dayPeriod" === t
                                                  ? c
                                                  : "year" === t || "month" === t || "day" === t
                                                    ? W.getStringForLocale(t, l)
                                                    : "\u2013\u2013")
                                            : null,
                                        D = {
                                            type: t,
                                            text: m ? h : e.value,
                                            ...ea(r, t, n),
                                            isPlaceholder: m,
                                            placeholder: h,
                                            isEditable: s,
                                        };
                                    "hour" === t
                                        ? (d.push({
                                              type: "literal",
                                              text: "\u2066",
                                              ...ea(r, "literal", n),
                                              isPlaceholder: !1,
                                              placeholder: "",
                                              isEditable: !1,
                                          }),
                                          d.push(D),
                                          t === o &&
                                              d.push({
                                                  type: "literal",
                                                  text: "\u2069",
                                                  ...ea(r, "literal", n),
                                                  isPlaceholder: !1,
                                                  placeholder: "",
                                                  isEditable: !1,
                                              }))
                                        : u.includes(t) && t === o
                                          ? (d.push(D),
                                            d.push({
                                                type: "literal",
                                                text: "\u2069",
                                                ...ea(r, "literal", n),
                                                isPlaceholder: !1,
                                                placeholder: "",
                                                isEditable: !1,
                                            }))
                                          : d.push(D);
                                }
                                return d;
                            })(z, M, V, F, O, b, r, y),
                        [z, M, V, F, O, b, r, y],
                    );
                B.era && M.year && !M.era
                    ? ((M.era = !0), I({ ...M }))
                    : !B.era && M.era && (delete M.era, I({ ...M }));
                let U = (e) => {
                        (M[e] = !0), "year" === e && B.era && (M.era = !0), I({ ...M });
                    },
                    j = (e, a) => {
                        if (M[e])
                            N(
                                (function (e, a, t, n) {
                                    switch (a) {
                                        case "era":
                                        case "year":
                                        case "month":
                                        case "day":
                                            return e.cycle(a, t, { round: "year" === a });
                                    }
                                    if ("hour" in e)
                                        switch (a) {
                                            case "dayPeriod": {
                                                let a = e.hour;
                                                return e.set({ hour: a >= 12 ? a - 12 : a + 12 });
                                            }
                                            case "hour":
                                            case "minute":
                                            case "second":
                                                return e.cycle(a, t, {
                                                    round: "hour" !== a,
                                                    hourCycle: n.hour12 ? 12 : 24,
                                                });
                                        }
                                    throw Error("Unknown segment: " + a);
                                })(O, e, a, F),
                            );
                        else {
                            U(e);
                            let a = Object.keys(M),
                                t = Object.keys(B);
                            (a.length >= t.length || (a.length === t.length - 1 && B.dayPeriod && !M.dayPeriod)) &&
                                N(O);
                        }
                    },
                    K = (0, s.useMemo)(() => (0, J.nz)($, c, m, h, E), [$, c, m, h, E]),
                    L = (0, _.KZ)({ ...e, value: $, builtinValidation: K }),
                    et = L.displayValidation.isInvalid,
                    en = e.validationState || (et ? "invalid" : null);
                return {
                    ...L,
                    value: P,
                    defaultValue: null != (t = e.defaultValue) ? t : w,
                    dateValue: z,
                    calendar: b,
                    setValue: N,
                    segments: Z,
                    dateFormatter: V,
                    validationState: en,
                    isInvalid: et,
                    granularity: y,
                    maxGranularity: null != (n = e.maxGranularity) ? n : "year",
                    isDisabled: o,
                    isReadOnly: u,
                    isRequired: d,
                    increment(e) {
                        j(e, 1);
                    },
                    decrement(e) {
                        j(e, -1);
                    },
                    incrementPage(e) {
                        j(e, X[e] || 1);
                    },
                    decrementPage(e) {
                        j(e, -(X[e] || 1));
                    },
                    setSegment(e, a) {
                        U(e),
                            N(
                                (function (e, a, t, n) {
                                    switch (a) {
                                        case "day":
                                        case "month":
                                        case "year":
                                        case "era":
                                            return e.set({ [a]: t });
                                    }
                                    if ("hour" in e && "number" == typeof t)
                                        switch (a) {
                                            case "dayPeriod": {
                                                let a = e.hour,
                                                    n = a >= 12;
                                                if (t >= 12 === n) return e;
                                                return e.set({ hour: n ? a - 12 : a + 12 });
                                            }
                                            case "hour":
                                                if (n.hour12) {
                                                    let a = e.hour >= 12;
                                                    a || 12 !== t || (t = 0), a && t < 12 && (t += 12);
                                                }
                                            case "minute":
                                            case "second":
                                                return e.set({ [a]: t });
                                        }
                                    throw Error("Unknown segment: " + a);
                                })(O, e, a, F),
                            );
                    },
                    confirmPlaceholder() {
                        if (e.isDisabled || e.isReadOnly) return;
                        let a = Object.keys(M),
                            t = Object.keys(B);
                        a.length === t.length - 1 && B.dayPeriod && !M.dayPeriod && (I((M = { ...B })), N(O.copy()));
                    },
                    clearSegment(a) {
                        delete M[a], (A.current = a), I({ ...M });
                        let t = (0, J.o_)(e.placeholderValue, y, b, g),
                            n = O;
                        if ("dayPeriod" === a && "hour" in O && "hour" in t) {
                            let e = O.hour >= 12,
                                a = t.hour >= 12;
                            e && !a
                                ? (n = O.set({ hour: O.hour - 12 }))
                                : !e && a && (n = O.set({ hour: O.hour + 12 }));
                        } else
                            "hour" === a && "hour" in O && O.hour >= 12 && M.dayPeriod
                                ? (n = O.set({ hour: t.hour + 12 }))
                                : a in O && (n = O.set({ [a]: t[a] }));
                        R(null), N(n);
                    },
                    formatValue(e) {
                        if (!P) return "";
                        let a = (0, J.id)(e, E);
                        return new (0, Y.p)(r, a).format(z);
                    },
                    getDateFormatter(e, a) {
                        let t = { ...E, ...a },
                            n = (0, J.id)({}, t);
                        return new (0, Y.p)(e, n);
                    },
                };
            })({ ...t, locale: l, createCalendar: L.d }),
            u = (0, s.useRef)(null),
            { fieldProps: c, inputProps: D } = (0, h.cJ)({ ...t, inputRef: u }, o, i);
        return s.createElement(
            n.Kq,
            {
                values: [
                    [ei, o],
                    [d, { ...D, ref: u }],
                    [r.t, { ...c, ref: i, isInvalid: o.isInvalid, isDisabled: o.isDisabled }],
                ],
            },
            s.createElement(es, e),
        );
    }),
    es = (0, s.forwardRef)((e, a) => {
        let { className: t, children: n } = e,
            i = (0, s.useContext)(ei),
            l = (0, s.useContext)(el),
            o = null != i ? i : l;
        return s.createElement(
            s.Fragment,
            null,
            s.createElement(
                r.Y,
                {
                    ...e,
                    ref: a,
                    slot: e.slot || void 0,
                    className: null != t ? t : "react-aria-DateInput",
                    isReadOnly: o.isReadOnly,
                    isInvalid: o.isInvalid,
                    isDisabled: o.isDisabled,
                },
                o.segments.map((e, a) => (0, s.cloneElement)(n(e), { key: a })),
            ),
            s.createElement(c, null),
        );
    }),
    ed = (0, s.forwardRef)(function ({ segment: e, ...a }, t) {
        let r = (0, s.useContext)(ei),
            i = (0, s.useContext)(el),
            d = null != r ? r : i,
            c = (0, et.U)(t),
            { segmentProps: k } = (function (e, a, t) {
                var n;
                let r,
                    i,
                    l,
                    o,
                    d = (0, s.useRef)(""),
                    { locale: c, direction: k } = (0, m.Y)(),
                    x = (function () {
                        var e;
                        let { locale: a } = (0, m.Y)(),
                            t = (0, y.e)((e = D.A) && e.__esModule ? e.default : e, "@react-aria/datepicker");
                        return (0, s.useMemo)(() => {
                            try {
                                return new Intl.DisplayNames(a, { type: "dateTimeField" });
                            } catch {
                                return new g(a, t);
                            }
                        }, [a, t]);
                    })(),
                    { ariaLabel: E, ariaLabelledBy: V, ariaDescribedBy: F, focusManager: B } = h.OX.get(a),
                    M = e.isPlaceholder ? "" : e.text,
                    I = (0, s.useMemo)(() => a.dateFormatter.resolvedOptions(), [a.dateFormatter]),
                    A = (0, N.i)({ month: "long", timeZone: I.timeZone }),
                    T = (0, N.i)({ hour: "numeric", hour12: I.hour12, timeZone: I.timeZone });
                if ("month" !== e.type || e.isPlaceholder)
                    "hour" !== e.type || e.isPlaceholder || (M = T.format(a.dateValue));
                else {
                    let e = A.format(a.dateValue);
                    M = e !== M ? `${M} \u{2013} ${e}` : e;
                }
                let { spinButtonProps: O } = (function (e) {
                        var a;
                        let t = (0, s.useRef)(void 0),
                            {
                                value: n,
                                textValue: r,
                                minValue: i,
                                maxValue: l,
                                isDisabled: o,
                                isReadOnly: u,
                                isRequired: d,
                                onIncrement: c,
                                onIncrementPage: m,
                                onDecrement: h,
                                onDecrementPage: D,
                                onDecrementToMin: g,
                                onIncrementToMax: p,
                            } = e,
                            f = (0, y.o)((a = Z) && a.__esModule ? a.default : a, "@react-aria/spinbutton");
                        (0, s.useEffect)(() => () => clearTimeout(t.current), []);
                        let v = (0, s.useRef)(!1),
                            b = () => {
                                v.current = !0;
                            },
                            $ = () => {
                                v.current = !1;
                            },
                            R = "" === r ? f.format("Empty") : (r || `${n}`).replace("-", "\u2212");
                        (0, s.useEffect)(() => {
                            v.current && ((0, U.pA)("assertive"), (0, U.iP)(R, "assertive"));
                        }, [R]);
                        let w = (0, j.J)((e) => {
                                clearTimeout(t.current),
                                    null == c || c(),
                                    (t.current = window.setTimeout(() => {
                                        (void 0 === l || isNaN(l) || void 0 === n || isNaN(n) || n < l) && w(60);
                                    }, e));
                            }),
                            P = (0, j.J)((e) => {
                                clearTimeout(t.current),
                                    null == h || h(),
                                    (t.current = window.setTimeout(() => {
                                        (void 0 === i || isNaN(i) || void 0 === n || isNaN(n) || n > i) && P(60);
                                    }, e));
                            }),
                            C = (e) => {
                                e.preventDefault();
                            },
                            { addGlobalListener: k, removeAllGlobalListeners: x } = (0, K.A)();
                        return {
                            spinButtonProps: {
                                role: "spinbutton",
                                "aria-valuenow": void 0 === n || isNaN(n) ? void 0 : n,
                                "aria-valuetext": R,
                                "aria-valuemin": i,
                                "aria-valuemax": l,
                                "aria-disabled": o || void 0,
                                "aria-readonly": u || void 0,
                                "aria-required": d || void 0,
                                onKeyDown: (e) => {
                                    if (
                                        !e.ctrlKey &&
                                        !e.metaKey &&
                                        !e.shiftKey &&
                                        !e.altKey &&
                                        !u &&
                                        !e.nativeEvent.isComposing
                                    )
                                        switch (e.key) {
                                            case "PageUp":
                                                if (m) {
                                                    e.preventDefault(), null == m || m();
                                                    break;
                                                }
                                            case "ArrowUp":
                                            case "Up":
                                                c && (e.preventDefault(), null == c || c());
                                                break;
                                            case "PageDown":
                                                if (D) {
                                                    e.preventDefault(), null == D || D();
                                                    break;
                                                }
                                            case "ArrowDown":
                                            case "Down":
                                                h && (e.preventDefault(), null == h || h());
                                                break;
                                            case "Home":
                                                g && (e.preventDefault(), null == g || g());
                                                break;
                                            case "End":
                                                p && (e.preventDefault(), null == p || p());
                                        }
                                },
                                onFocus: b,
                                onBlur: $,
                            },
                            incrementButtonProps: {
                                onPressStart: () => {
                                    w(400), k(window, "contextmenu", C);
                                },
                                onPressEnd: () => {
                                    clearTimeout(t.current), x();
                                },
                                onFocus: b,
                                onBlur: $,
                            },
                            decrementButtonProps: {
                                onPressStart: () => {
                                    P(400), k(window, "contextmenu", C);
                                },
                                onPressEnd: () => {
                                    clearTimeout(t.current), x();
                                },
                                onFocus: b,
                                onBlur: $,
                            },
                        };
                    })({
                        value: e.value,
                        textValue: M,
                        minValue: e.minValue,
                        maxValue: e.maxValue,
                        isDisabled: a.isDisabled,
                        isReadOnly: a.isReadOnly || !e.isEditable,
                        isRequired: a.isRequired,
                        onIncrement: () => {
                            (d.current = ""), a.increment(e.type);
                        },
                        onDecrement: () => {
                            (d.current = ""), a.decrement(e.type);
                        },
                        onIncrementPage: () => {
                            (d.current = ""), a.incrementPage(e.type);
                        },
                        onDecrementPage: () => {
                            (d.current = ""), a.decrementPage(e.type);
                        },
                        onIncrementToMax: () => {
                            (d.current = ""), void 0 !== e.maxValue && a.setSegment(e.type, e.maxValue);
                        },
                        onDecrementToMin: () => {
                            (d.current = ""), void 0 !== e.minValue && a.setSegment(e.type, e.minValue);
                        },
                    }),
                    L = (0, s.useMemo)(() => new S(c, { maximumFractionDigits: 0 }), [c]),
                    J = () => {
                        if (
                            (e.text === e.placeholder && B.focusPrevious(),
                            !L.isValidPartialNumber(e.text) || a.isReadOnly || e.isPlaceholder)
                        )
                            "dayPeriod" === e.type && a.clearSegment(e.type);
                        else {
                            let t = e.text.slice(0, -1),
                                n = L.parse(t);
                            0 === (t = 0 === n ? "" : t).length || 0 === n
                                ? a.clearSegment(e.type)
                                : a.setSegment(e.type, n),
                                (d.current = t);
                        }
                    },
                    { startsWith: W } =
                        ((n = { sensitivity: "base" }),
                        (r = (0, z.Q)({ usage: "search", ...n })),
                        (i = (0, s.useCallback)(
                            (e, a) =>
                                0 === a.length ||
                                ((e = e.normalize("NFC")),
                                (a = a.normalize("NFC")),
                                0 === r.compare(e.slice(0, a.length), a)),
                            [r],
                        )),
                        (l = (0, s.useCallback)(
                            (e, a) =>
                                0 === a.length ||
                                ((e = e.normalize("NFC")),
                                (a = a.normalize("NFC")),
                                0 === r.compare(e.slice(-a.length), a)),
                            [r],
                        )),
                        (o = (0, s.useCallback)(
                            (e, a) => {
                                if (0 === a.length) return !0;
                                e = e.normalize("NFC");
                                let t = 0,
                                    n = (a = a.normalize("NFC")).length;
                                for (; t + n <= e.length; t++) {
                                    let i = e.slice(t, t + n);
                                    if (0 === r.compare(a, i)) return !0;
                                }
                                return !1;
                            },
                            [r],
                        )),
                        (0, s.useMemo)(() => ({ startsWith: i, endsWith: l, contains: o }), [i, l, o])),
                    Y = (0, N.i)({ hour: "numeric", hour12: !0 }),
                    G = (0, s.useMemo)(() => {
                        let e = new Date();
                        return e.setHours(0), Y.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
                    }, [Y]),
                    H = (0, s.useMemo)(() => {
                        let e = new Date();
                        return e.setHours(12), Y.formatToParts(e).find((e) => "dayPeriod" === e.type).value;
                    }, [Y]),
                    _ = (0, N.i)({ year: "numeric", era: "narrow", timeZone: "UTC" }),
                    q = (0, s.useMemo)(() => {
                        if ("era" !== e.type) return [];
                        let t = (0, p.yP)(new (0, f.ng)(1, 1, 1), a.calendar),
                            n = a.calendar.getEras().map((e) => {
                                let a = t.set({ year: 1, month: 1, day: 1, era: e }).toDate("UTC");
                                return { era: e, formatted: _.formatToParts(a).find((e) => "era" === e.type).value };
                            }),
                            r = (function (e) {
                                e.sort();
                                let a = e[0],
                                    t = e[e.length - 1];
                                for (let e = 0; e < a.length; e++) if (a[e] !== t[e]) return e;
                                return 0;
                            })(n.map((e) => e.formatted));
                        if (r) for (let e of n) e.formatted = e.formatted.slice(r);
                        return n;
                    }, [_, a.calendar, e.type]),
                    Q = (t) => {
                        if (a.isDisabled || a.isReadOnly) return;
                        let n = d.current + t;
                        switch (e.type) {
                            case "dayPeriod":
                                if (W(G, t)) a.setSegment("dayPeriod", 0);
                                else if (W(H, t)) a.setSegment("dayPeriod", 12);
                                else break;
                                B.focusNext();
                                break;
                            case "era": {
                                let e = q.find((e) => W(e.formatted, t));
                                e && (a.setSegment("era", e.era), B.focusNext());
                                break;
                            }
                            case "day":
                            case "hour":
                            case "minute":
                            case "second":
                            case "month":
                            case "year": {
                                if (!L.isValidPartialNumber(n)) return;
                                let r = L.parse(n),
                                    i = r,
                                    l = 0 === e.minValue;
                                if ("hour" === e.type && a.dateFormatter.resolvedOptions().hour12) {
                                    switch (a.dateFormatter.resolvedOptions().hourCycle) {
                                        case "h11":
                                            r > 11 && (i = L.parse(t));
                                            break;
                                        case "h12":
                                            (l = !1), r > 12 && (i = L.parse(t));
                                    }
                                    void 0 !== e.value && e.value >= 12 && r > 1 && (r += 12);
                                } else void 0 !== e.maxValue && r > e.maxValue && (i = L.parse(t));
                                if (isNaN(r)) return;
                                let o = 0 !== i || l;
                                o && a.setSegment(e.type, i),
                                    void 0 !== e.maxValue &&
                                    (Number(r + "0") > e.maxValue || n.length >= String(e.maxValue).length)
                                        ? ((d.current = ""), o && B.focusNext())
                                        : (d.current = n);
                            }
                        }
                    },
                    X = (0, s.useRef)("u" > typeof document ? document : null);
                (0, R._)(X, "selectionchange", () => {
                    var e;
                    let a = window.getSelection();
                    (null == a ? void 0 : a.anchorNode) &&
                        (null == (e = t.current) ? void 0 : e.contains(null == a ? void 0 : a.anchorNode)) &&
                        a.collapse(t.current);
                });
                let ee = (0, s.useRef)("");
                (0, R._)(t, "beforeinput", (n) => {
                    if (t.current)
                        switch ((n.preventDefault(), n.inputType)) {
                            case "deleteContentBackward":
                            case "deleteContentForward":
                                L.isValidPartialNumber(e.text) && !a.isReadOnly && J();
                                break;
                            case "insertCompositionText":
                                (ee.current = t.current.textContent), (t.current.textContent = t.current.textContent);
                                break;
                            default:
                                null != n.data && Q(n.data);
                        }
                }),
                    (0, R._)(t, "input", (e) => {
                        let { inputType: a, data: n } = e;
                        "insertCompositionText" === a &&
                            (t.current && (t.current.textContent = ee.current),
                            null != n && (W(G, n) || W(H, n)) && Q(n));
                    }),
                    (0, w.N)(() => {
                        let e = t.current;
                        return () => {
                            document.activeElement === e && (B.focusPrevious() || B.focusNext());
                        };
                    }, [t, B]);
                let ea =
                    (0, v.un)() || "timeZoneName" === e.type
                        ? {
                              role: "textbox",
                              "aria-valuemax": null,
                              "aria-valuemin": null,
                              "aria-valuetext": null,
                              "aria-valuenow": null,
                          }
                        : {};
                e === (0, s.useMemo)(() => a.segments.find((e) => e.isEditable), [a.segments]) ||
                    a.isInvalid ||
                    (F = void 0);
                let et = (0, P.Bi)(),
                    en = !a.isDisabled && !a.isReadOnly && e.isEditable,
                    er = "literal" === e.type ? "" : x.of(e.type),
                    ei = (0, C.b)({ "aria-label": `${er}${E ? `, ${E}` : ""}${V ? ", " : ""}`, "aria-labelledby": V });
                if ("literal" === e.type) return { segmentProps: { "aria-hidden": !0 } };
                let el = { caretColor: "transparent" };
                if ("rtl" === k) {
                    el.unicodeBidi = "embed";
                    let a = I[e.type];
                    ("numeric" === a || "2-digit" === a) && (el.direction = "ltr");
                }
                return {
                    segmentProps: (0, u.v)(O, ei, {
                        id: et,
                        ...ea,
                        "aria-invalid": a.isInvalid ? "true" : void 0,
                        "aria-describedby": F,
                        "aria-readonly": a.isReadOnly || !e.isEditable ? "true" : void 0,
                        "data-placeholder": e.isPlaceholder || void 0,
                        contentEditable: en,
                        suppressContentEditableWarning: en,
                        spellCheck: en ? "false" : void 0,
                        autoCorrect: en ? "off" : void 0,
                        [parseInt(s.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: en ? "next" : void 0,
                        inputMode:
                            a.isDisabled || "dayPeriod" === e.type || "era" === e.type || !en ? void 0 : "numeric",
                        tabIndex: a.isDisabled ? void 0 : 0,
                        onKeyDown: (e) => {
                            if (
                                ("a" === e.key && ((0, v.cX)() ? e.metaKey : e.ctrlKey) && e.preventDefault(),
                                !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey)
                            )
                                switch (e.key) {
                                    case "Backspace":
                                    case "Delete":
                                        e.preventDefault(), e.stopPropagation(), J();
                                }
                        },
                        onFocus: () => {
                            (d.current = ""),
                                t.current && (0, b.o)(t.current, { containingElement: (0, $.m)(t.current) });
                            let e = window.getSelection();
                            null == e || e.collapse(t.current);
                        },
                        style: el,
                        onPointerDown(e) {
                            e.stopPropagation();
                        },
                        onMouseDown(e) {
                            e.stopPropagation();
                        },
                    }),
                };
            })(e, d, c),
            { focusProps: x, isFocused: E, isFocusVisible: V } = (0, o.o)(),
            { hoverProps: F, isHovered: B } = (0, l.M)({ ...a, isDisabled: d.isDisabled || "literal" === e.type }),
            M = (0, n.Sl)({
                ...a,
                values: {
                    ...e,
                    isReadOnly: d.isReadOnly,
                    isInvalid: d.isInvalid,
                    isDisabled: d.isDisabled,
                    isHovered: B,
                    isFocused: E,
                    isFocusVisible: V,
                },
                defaultChildren: e.text,
                defaultClassName: "react-aria-DateSegment",
            });
        return s.createElement("span", {
            ...(0, u.v)((0, en.$)(a, { global: !0 }), k, x, F),
            ...M,
            style: k.style,
            ref: c,
            "data-placeholder": e.isPlaceholder || void 0,
            "data-invalid": d.isInvalid || void 0,
            "data-readonly": d.isReadOnly || void 0,
            "data-disabled": d.isDisabled || void 0,
            "data-type": e.type,
            "data-hovered": B || void 0,
            "data-focused": E || void 0,
            "data-focus-visible": V || void 0,
        });
    });
