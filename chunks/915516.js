n.d(t, {
    Fu: () => c,
    GZ: () => l,
    __: () => d,
    rn: () => u,
}),
    n(65821);
var r = n(496431),
    i = n(773669),
    a = n(788868),
    s = n(985018);
let o = 1000;
function l(e, t) {
    switch (e) {
        case a.pe.TIER_0:
            return t.days > 0
                ? s.intl.formatToPlainString(s.t.sP5OqC, { days: t.days })
                : t.hours > 0
                  ? s.intl.formatToPlainString(s.t["7Lhfu7"], { hours: t.hours })
                  : s.intl.formatToPlainString(s.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case a.pe.TIER_2:
            return t.days > 0
                ? s.intl.formatToPlainString(s.t["4prs5b"], { days: t.days })
                : t.hours > 0
                  ? s.intl.formatToPlainString(s.t.OD5nIR, { hours: t.hours })
                  : s.intl.formatToPlainString(s.t.rvyXjD, { minutes: Math.max(t.minutes, 1) });
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let c = (e) => {
    var t;
    let n = e.expires_at,
        i = (0, r.A)(null != n ? Date.parse(n) : 0, o),
        a = null == e || null == (t = e.subscription_trial) ? void 0 : t.sku_id;
    return null == n || null == a ? null : l(a, i);
};
function u(e, t) {
    let n = new Intl.NumberFormat(i.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? s.intl.formatToPlainString(s.t["7mw8CZ"], {
              days: e.days,
              discountPercentage: n,
          })
        : e.hours > 0
          ? s.intl.formatToPlainString(s.t["0hYT6o"], {
                hours: e.hours,
                discountPercentage: n,
            })
          : s.intl.formatToPlainString(s.t["2rh7rw"], {
                minutes: Math.max(e.minutes, 1),
                discountPercentage: n,
            });
}
let d = (e) => {
    let t = e.expires_at,
        n = (0, r.A)(null != t ? Date.parse(t) : 0, o);
    return null == t ? null : u(n, Number(e.discount.amount));
};
