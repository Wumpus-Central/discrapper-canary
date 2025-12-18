n.d(t, {
    T3: () => b,
    T4: () => g,
    og: () => E,
    qr: () => v,
    xg: () => y,
}),
    n(415506),
    n(704826),
    n(35282);
var r = n(221513),
    i = n(706454),
    a = n(351402),
    o = n(358085),
    s = n(74538),
    l = n(474936),
    c = n(231338),
    u = n(388032);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = Object.freeze(["en-CA", "en-AU", "en-NZ"]),
    _ = 1.95583;
function m(e, t, n) {
    var a;
    let s = f({}, null != n ? n : {}),
        l = null != (a = null == n ? void 0 : n.localeOverride) ? a : i.default.locale;
    "en-US" === l && p.includes(i.default.systemLocale) && (s.currencyDisplay = "code"),
        "en-US" === l && (0, o.isWindows)() && "en-GB" === i.default.systemLocale && (s.currencyDisplay = "code");
    let { maximumFractionDigits: c, minimumFractionDigits: u } = s;
    return 0 === c && null == u && (s.minimumFractionDigits = 0), (0, r.T4)(e, t, l, s);
}
function h(e) {
    return (
        (!!(0, o.isDesktop)() || !!(0, o.isWeb)()) &&
        "BG" === a.Z.ipCountryCode &&
        (null == e ? void 0 : e.toLowerCase()) === c.pK.EUR
    );
}
function g(e, t, n) {
    if (h(t)) {
        let r = m(e, t, n),
            i = m(e * _, c.pK.BGN, n);
        return "".concat(r, " (").concat(i, ")");
    }
    return m(e, t, n);
}
function E(e, t, n) {
    if (t === l.rV.YEAR) return u.intl.formatToPlainString(u.t["rS8FA+"], { price: e });
    if (t === l.rV.MONTH && 1 === n) return u.intl.formatToPlainString(u.t.AbOLNu, { price: e });
    if (t === l.rV.MONTH && n > 1)
        return u.intl.formatToPlainString(u.t["Qc+9ww"], {
            price: e,
            intervalCount: n,
        });
    throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n));
}
function b(e, t) {
    return Intl.NumberFormat(e, {
        style: "percent",
        minimumFractionDigits: 0,
    }).format(t);
}
function y(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, s.aS)(e.id);
    return E(g(n.amount, n.currency), e.interval, t);
}
function O(e) {
    return e.length > 5 ? e.replace(/\.00(?=[\s)]|$)/g, "") : e;
}
function v(e, t, n) {
    return O(g(e, t, n));
}
