"use strict";
n.d(t, { Fu: () => d, GZ: () => c, __: () => f, rn: () => _ });
var i = n(496431),
    r = n(773669),
    s = n(975571),
    a = n(927578),
    o = n(788868),
    l = n(652215),
    u = n(375708);
function c(e, t, n, i) {
    switch (e) {
        case o.pe.TIER_0:
            return t.days > 0
                ? u.intl.formatToPlainString(u.t.sP5OqC, { days: t.days })
                : t.hours > 0
                  ? u.intl.formatToPlainString(u.t["7Lhfu7"], { hours: t.hours })
                  : u.intl.formatToPlainString(u.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case o.pe.TIER_2:
            return t.days > 0
                ? u.intl.formatToPlainString(u.t.GPqVWT, { days: t.days, trialPeriod: n, termsUrl: i })
                : t.hours > 0
                  ? u.intl.formatToPlainString(u.t.WFMtg1, { hours: t.hours, trialPeriod: n, termsUrl: i })
                  : u.intl.formatToPlainString(u.t.SxXB42, {
                        minutes: Math.max(t.minutes, 1),
                        trialPeriod: n,
                        termsUrl: i,
                    });
        default:
            throw Error(`Unsupported subscription tier: ${e}`);
    }
}
let d = (e) => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3),
        r = e?.subscription_trial?.sku_id;
    return null == t || null == r
        ? null
        : c(
              r,
              n,
              (0, a.re)({
                  intervalType: e.subscription_trial?.interval,
                  intervalCount: e.subscription_trial?.interval_count,
              }),
              s.A.getArticleURL(e.trial_id === o.yo ? l.MVz.NITRO_TRIAL_FOR_ALL : l.MVz.PREMIUM_TRIAL),
          );
};
function _(e, t) {
    let n = new Intl.NumberFormat(r.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? u.intl.formatToPlainString(u.t["7mw8CZ"], { days: e.days, discountPercentage: n })
        : e.hours > 0
          ? u.intl.formatToPlainString(u.t["0hYT6o"], { hours: e.hours, discountPercentage: n })
          : u.intl.formatToPlainString(u.t["2rh7rw"], { minutes: Math.max(e.minutes, 1), discountPercentage: n });
}
let f = (e) => {
    let t = e.expiresAt,
        n = (0, i.A)(null != t ? t.getTime() : 0, 1e3);
    return null == t ? null : _(n, Number(e.discount.amount));
};
