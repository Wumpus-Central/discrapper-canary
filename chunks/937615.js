n.d(t, {
    T3: () => d,
    T4: () => c,
    og: () => u,
    xg: () => f
}),
    n(415506);
var r = n(221513),
    i = n(706454),
    a = n(74538),
    o = n(474936),
    s = n(388032);
let l = Object.freeze(['en-CA', 'en-AU', 'en-NZ']);
function c(e, t, n) {
    var a;
    let o = null != n ? n : {},
        s = null != (a = null == n ? void 0 : n.localeOverride) ? a : i.default.locale;
    return 'en-US' === s && l.includes(i.default.systemLocale) && (o.currencyDisplay = 'code'), (0, r.T4)(e, t, s, o);
}
function u(e, t, n) {
    if (t === o.rV.YEAR) return s.intl.formatToPlainString(s.t.rS8FAw, { price: e });
    if (t === o.rV.MONTH && 1 === n) return s.intl.formatToPlainString(s.t.AbOLNj, { price: e });
    if (t === o.rV.MONTH && n > 1)
        return s.intl.formatToPlainString(s.t['Qc+9w8'], {
            price: e,
            intervalCount: n
        });
    throw Error('Unsupported interval type: '.concat(t, ', and interval count: ').concat(n));
}
function d(e, t) {
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0
    }).format(t);
}
function f(e) {
    let t = 'interval_count' in e ? e.interval_count : e.intervalCount,
        n = (0, a.aS)(e.id);
    return u(c(n.amount, n.currency), e.interval, t);
}
