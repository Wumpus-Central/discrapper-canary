n.d(t, {
    T3: () => c,
    T4: () => l,
    og: () => u,
    xg: () => d
}),
    n(411104);
var i = n(221513),
    r = n(706454),
    a = n(74538),
    s = n(474936),
    o = n(388032);
function l(e, t, n) {
    var a;
    let s = null !== (a = null == n ? void 0 : n.localeOverride) && void 0 !== a ? a : r.default.locale;
    return (0, i.T4)(e, t, s, n);
}
function u(e, t, n) {
    if (t === s.rV.YEAR) return o.intl.formatToPlainString(o.t.rS8FAw, { price: e });
    if (t === s.rV.MONTH && 1 === n) return o.intl.formatToPlainString(o.t.AbOLNj, { price: e });
    if (t === s.rV.MONTH && n > 1)
        return o.intl.formatToPlainString(o.t['Qc+9w8'], {
            price: e,
            intervalCount: n
        });
    throw Error('Unsupported interval type: '.concat(t, ', and interval count: ').concat(n));
}
function c(e, t) {
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0
    }).format(t);
}
function d(e) {
    let t = 'interval_count' in e ? e.interval_count : e.intervalCount,
        n = (0, a.aS)(e.id);
    return u(l(n.amount, n.currency), e.interval, t);
}
