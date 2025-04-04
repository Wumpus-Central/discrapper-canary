n.d(t, {
    T3: () => u,
    T4: () => l,
    og: () => c,
    xg: () => d
}),
    n(411104);
var r = n(221513),
    i = n(706454),
    o = n(74538),
    a = n(474936),
    s = n(388032);
function l(e, t, n) {
    var o;
    let a = null != (o = null == n ? void 0 : n.localeOverride) ? o : i.default.locale;
    return (0, r.T4)(e, t, a, n);
}
function c(e, t, n) {
    if (t === a.rV.YEAR) return s.NW.formatToPlainString(s.t.rS8FAw, { price: e });
    if (t === a.rV.MONTH && 1 === n) return s.NW.formatToPlainString(s.t.AbOLNj, { price: e });
    if (t === a.rV.MONTH && n > 1)
        return s.NW.formatToPlainString(s.t['Qc+9w8'], {
            price: e,
            intervalCount: n
        });
    throw Error('Unsupported interval type: '.concat(t, ', and interval count: ').concat(n));
}
function u(e, t) {
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0
    }).format(t);
}
function d(e) {
    let t = 'interval_count' in e ? e.interval_count : e.intervalCount,
        n = (0, o.aS)(e.id);
    return c(l(n.amount, n.currency), e.interval, t);
}
