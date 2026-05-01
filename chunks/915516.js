n.d(t, { Fu: () => A, GZ: () => o, __: () => T, rn: () => c });
var i = n(496431),
    l = n(773669),
    r = n(975571),
    s = n(927578),
    a = n(788868),
    E = n(652215),
    _ = n(985018);
function o(e, t, n, i) {
    switch (e) {
        case a.pe.TIER_0:
            return t.days > 0
                ? _.intl.formatToPlainString(_.t.sP5OqC, { days: t.days })
                : t.hours > 0
                  ? _.intl.formatToPlainString(_.t["7Lhfu7"], { hours: t.hours })
                  : _.intl.formatToPlainString(_.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case a.pe.TIER_2:
            return t.days > 0
                ? _.intl.formatToPlainString(_.t.GPqVWT, { days: t.days, trialPeriod: n, termsUrl: i })
                : t.hours > 0
                  ? _.intl.formatToPlainString(_.t.WFMtg1, { hours: t.hours, trialPeriod: n, termsUrl: i })
                  : _.intl.formatToPlainString(_.t.SxXB42, {
                        minutes: Math.max(t.minutes, 1),
                        trialPeriod: n,
                        termsUrl: i,
                    });
        default:
            throw Error(`Unsupported subscription tier: ${e}`);
    }
}
let A = (e) => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3),
        l = e?.subscription_trial?.sku_id;
    return null == t || null == l
        ? null
        : o(
              l,
              n,
              (0, s.re)({
                  intervalType: e.subscription_trial?.interval,
                  intervalCount: e.subscription_trial?.interval_count,
              }),
              r.A.getArticleURL(e.trial_id === a.yo ? E.MVz.NITRO_TRIAL_FOR_ALL : E.MVz.PREMIUM_TRIAL),
          );
};
function c(e, t) {
    let n = new Intl.NumberFormat(l.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? _.intl.formatToPlainString(_.t["7mw8CZ"], { days: e.days, discountPercentage: n })
        : e.hours > 0
          ? _.intl.formatToPlainString(_.t["0hYT6o"], { hours: e.hours, discountPercentage: n })
          : _.intl.formatToPlainString(_.t["2rh7rw"], { minutes: Math.max(e.minutes, 1), discountPercentage: n });
}
let T = (e) => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3);
    return null == t ? null : c(n, Number(e.discount.amount));
};
