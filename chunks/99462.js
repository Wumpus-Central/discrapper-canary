n.d(t, { Fu: () => u, GZ: () => d, __: () => A, rn: () => E });
var i = n(496431),
    l = n(773669),
    r = n(975571),
    s = n(428262),
    a = n(788868),
    c = n(652215),
    o = n(375708);
function d(e, t, n, i) {
    switch (e) {
        case a.pe.TIER_0:
            return t.days > 0
                ? o.intl.formatToPlainString(o.t.sP5OqC, { days: t.days })
                : t.hours > 0
                  ? o.intl.formatToPlainString(o.t["7Lhfu7"], { hours: t.hours })
                  : o.intl.formatToPlainString(o.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case a.pe.TIER_2:
            return t.days > 0
                ? o.intl.formatToPlainString(o.t.GPqVWT, { days: t.days, trialPeriod: n, termsUrl: i })
                : t.hours > 0
                  ? o.intl.formatToPlainString(o.t.WFMtg1, { hours: t.hours, trialPeriod: n, termsUrl: i })
                  : o.intl.formatToPlainString(o.t.SxXB42, {
                        minutes: Math.max(t.minutes, 1),
                        trialPeriod: n,
                        termsUrl: i,
                    });
        default:
            throw Error(`Unsupported subscription tier: ${e}`);
    }
}
let u = (e) => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3),
        l = e?.subscription_trial?.sku_id;
    return null == t || null == l
        ? null
        : d(
              l,
              n,
              (0, s.re)({
                  intervalType: e.subscription_trial?.interval,
                  intervalCount: e.subscription_trial?.interval_count,
              }),
              r.A.getArticleURL(e.trial_id === a.yo ? c.MVz.NITRO_TRIAL_FOR_ALL : c.MVz.PREMIUM_TRIAL),
          );
};
function E(e, t) {
    let n = new Intl.NumberFormat(l.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? o.intl.formatToPlainString(o.t["7mw8CZ"], { days: e.days, discountPercentage: n })
        : e.hours > 0
          ? o.intl.formatToPlainString(o.t["0hYT6o"], { hours: e.hours, discountPercentage: n })
          : o.intl.formatToPlainString(o.t["2rh7rw"], { minutes: Math.max(e.minutes, 1), discountPercentage: n });
}
let A = (e) => {
    let t = e.expiresAt,
        n = (0, i.A)(null != t ? t.getTime() : 0, 1e3);
    return null == t ? null : E(n, Number(e.discount.amount));
};
