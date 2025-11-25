n.d(t, {
    T3: () => f,
    T4: () => u,
    og: () => d,
    qr: () => h,
    xg: () => _,
}),
    n(415506),
    n(704826),
    n(35282);
var r = n(221513),
    i = n(706454),
    a = n(358085),
    o = n(74538),
    s = n(474936),
    l = n(388032);
let c = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
function u(e, t, n) {
    var o;
    let s = null != n ? n : {},
        l = null != (o = null == n ? void 0 : n.localeOverride) ? o : i.default.locale;
    "en-US" === l && c.includes(i.default.systemLocale) && (s.currencyDisplay = "code"),
        "en-US" === l && (0, a.isWindows)() && "en-GB" === i.default.systemLocale && (s.currencyDisplay = "code");
    let { maximumFractionDigits: u, minimumFractionDigits: d } = s;
    return 0 === u && null == d && (s.minimumFractionDigits = 0), (0, r.T4)(e, t, l, s);
}
function d(e, t, n) {
    if (t === s.rV.YEAR) return l.intl.formatToPlainString(l.t["rS8FA+"], { price: e });
    if (t === s.rV.MONTH && 1 === n) return l.intl.formatToPlainString(l.t.AbOLNu, { price: e });
    if (t === s.rV.MONTH && n > 1)
        return l.intl.formatToPlainString(l.t["Qc+9ww"], {
            price: e,
            intervalCount: n,
        });
    throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n));
}
function f(e, t) {
    return Intl.NumberFormat(e, {
        style: "percent",
        minimumFractionDigits: 0,
    }).format(t);
}
function _(e) {
    let t = "interval_count" in e ? e.interval_count : e.intervalCount,
        n = (0, o.aS)(e.id);
    return d(u(n.amount, n.currency), e.interval, t);
}
function p(e) {
    return e.length > 5 ? e.replace(/\.00$/, "") : e;
}
function h(e, t, n) {
    return p(u(e, t, n));
}
