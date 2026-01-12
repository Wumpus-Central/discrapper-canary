n.d(t, {
    HR: () => E,
    T3: () => O,
    T4: () => b,
    og: () => y,
    qr: () => I,
    xg: () => v,
    yH: () => h,
}),
    n(415506),
    n(704826),
    n(35282);
var r = n(221513),
    i = n(389053),
    a = n(706454),
    o = n(351402),
    s = n(358085),
    l = n(74538),
    c = n(474936),
    u = n(231338),
    d = n(388032);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
let _ = Object.freeze(["en-CA", "en-AU", "en-NZ"]),
    m = 1.95583;
function h(e, t, n) {
    var i;
    let o = p({}, null != n ? n : {}),
        l = null != (i = null == n ? void 0 : n.localeOverride) ? i : a.default.locale;
    "en-US" === l && _.includes(a.default.systemLocale) && (o.currencyDisplay = "code"),
        "en-US" === l && (0, s.isWindows)() && "en-GB" === a.default.systemLocale && (o.currencyDisplay = "code");
    let { maximumFractionDigits: c, minimumFractionDigits: u } = o;
    return 0 === c && null == u && (o.minimumFractionDigits = 0), (0, r.T4)(e, t, l, o);
}
function g(e) {
    if (Date.now() >= new Date("2026-08-05T22:00:00Z").getTime()) return !1;
    let t = null;
    switch ((0, s.getPlatformName)()) {
        case "android":
            t = n(332983).Z.getUserCountry();
            break;
        case "ios":
            var r;
            t = null == (r = i.Z.getStoreFront()) ? void 0 : r.country;
            break;
        default:
            t = o.Z.ipCountryCode;
    }
    return "BG" === t && (null == e ? void 0 : e.toLowerCase()) === u.pK.EUR;
}
function E(e, t) {
    let n = h(e, u.pK.EUR, t),
        r = h(e * m, u.pK.BGN, t);
    return "".concat(n, " (").concat(r, ")");
}
function b(e, t, n) {
    return g(t) ? E(e, n) : h(e, t, n);
}
function y(e, t, n) {
    if (t === c.rV.YEAR) return d.intl.formatToPlainString(d.t["rS8FA+"], { price: e });
    if (t === c.rV.MONTH && 1 === n) return d.intl.formatToPlainString(d.t.AbOLNu, { price: e });
    if (t === c.rV.MONTH && n > 1)
        return d.intl.formatToPlainString(d.t["Qc+9ww"], {
            price: e,
            intervalCount: n,
        });
    throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n));
}
function O(e, t) {
    return Intl.NumberFormat(e, {
        style: "percent",
        minimumFractionDigits: 0,
    }).format(t);
}
function v(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, l.aS)(e.id);
    return y(b(n.amount, n.currency), e.interval, t);
}
function S(e) {
    return e.length > 5 ? e.replace(/\.00(?=[\s)]|$)/g, "") : e;
}
function I(e, t, n) {
    return S(b(e, t, n));
}
