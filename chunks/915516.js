n.d(t, { Fu: () => E, GZ: () => _, __: () => u, rn: () => d });
var i = n(496431),
    l = n(773669),
    r = n(975571),
    a = n(927578),
    s = n(788868),
    o = n(652215),
    c = n(985018);
function _(e, t, n, i) {
    switch (e) {
        case s.pe.TIER_0:
            return t.days > 0
                ? c.intl.formatToPlainString(c.t.sP5OqC, { days: t.days })
                : t.hours > 0
                  ? c.intl.formatToPlainString(c.t["7Lhfu7"], { hours: t.hours })
                  : c.intl.formatToPlainString(c.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case s.pe.TIER_2:
            return t.days > 0
                ? c.intl.formatToPlainString(c.t.GPqVWT, { days: t.days, trialPeriod: n, termsUrl: i })
                : t.hours > 0
                  ? c.intl.formatToPlainString(c.t.WFMtg1, { hours: t.hours, trialPeriod: n, termsUrl: i })
                  : c.intl.formatToPlainString(c.t.SxXB42, {
                        minutes: Math.max(t.minutes, 1),
                        trialPeriod: n,
                        termsUrl: i,
                    });
        default:
            throw Error(`Unsupported subscription tier: ${e}`);
    }
}
let E = (e) => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3),
        l = e?.subscription_trial?.sku_id;
    return null == t || null == l
        ? null
        : _(
              l,
              n,
              (0, a.re)({
                  intervalType: e.subscription_trial?.interval,
                  intervalCount: e.subscription_trial?.interval_count,
              }),
              r.A.getArticleURL(e.trial_id === s.yo ? o.MVz.NITRO_TRIAL_FOR_ALL : o.MVz.PREMIUM_TRIAL),
          );
};
function d(e, t) {
    let n = new Intl.NumberFormat(l.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? c.intl.formatToPlainString(c.t["7mw8CZ"], { days: e.days, discountPercentage: n })
        : e.hours > 0
          ? c.intl.formatToPlainString(c.t["0hYT6o"], { hours: e.hours, discountPercentage: n })
          : c.intl.formatToPlainString(c.t["2rh7rw"], { minutes: Math.max(e.minutes, 1), discountPercentage: n });
}
let u = (e) => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3);
    return null == t ? null : d(n, Number(e.discount.amount));
};
