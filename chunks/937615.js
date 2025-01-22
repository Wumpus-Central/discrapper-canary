r.d(n, {
    T3: function () {
        return f;
    },
    T4: function () {
        return c;
    },
    og: function () {
        return d;
    },
    xg: function () {
        return p;
    }
});
var i = r(411104);
var a = r(221513),
    o = r(706454),
    s = r(74538),
    l = r(474936),
    u = r(388032);
function c(e, n, r) {
    var i;
    let s = null !== (i = null == r ? void 0 : r.localeOverride) && void 0 !== i ? i : o.default.locale;
    return (0, a.T4)(e, n, s, r);
}
function d(e, n, r) {
    if (n === l.rV.YEAR) return u.intl.formatToPlainString(u.t.rS8FAw, { price: e });
    if (n === l.rV.MONTH && 1 === r) return u.intl.formatToPlainString(u.t.AbOLNj, { price: e });
    if (n === l.rV.MONTH && r > 1)
        return u.intl.formatToPlainString(u.t['Qc+9w8'], {
            price: e,
            intervalCount: r
        });
    throw Error('Unsupported interval type: '.concat(n, ', and interval count: ').concat(r));
}
function f(e, n) {
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0
    }).format(n);
}
function p(e) {
    let n = 'interval_count' in e ? e.interval_count : e.intervalCount,
        r = (0, s.aS)(e.id);
    return d(c(r.amount, r.currency), e.interval, n);
}
