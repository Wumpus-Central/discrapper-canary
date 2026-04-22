"use strict";
n.d(t, { Fu: () => d, GZ: () => u, __: () => E, rn: () => _ });
var i = n(496431),
    r = n(773669),
    l = n(975571),
    s = n(927578),
    a = n(788868),
    o = n(652215),
    c = n(985018);
function u(e, t, n, i) {
    switch (e) {
        case a.pe.TIER_0:
            return t.days > 0
                ? c.intl.formatToPlainString(c.t.sP5OqC, { days: t.days })
                : t.hours > 0
                  ? c.intl.formatToPlainString(c.t["7Lhfu7"], { hours: t.hours })
                  : c.intl.formatToPlainString(c.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case a.pe.TIER_2:
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
let d = (e) => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3),
        r = e?.subscription_trial?.sku_id;
    return null == t || null == r
        ? null
        : u(
              r,
              n,
              (0, s.re)({
                  intervalType: e.subscription_trial?.interval,
                  intervalCount: e.subscription_trial?.interval_count,
              }),
              l.A.getArticleURL(e.trial_id === a.yo ? o.MVz.NITRO_TRIAL_FOR_ALL : o.MVz.PREMIUM_TRIAL),
          );
};
function _(e, t) {
    let n = new Intl.NumberFormat(r.default.locale, {
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
let E = (e) => {
    let t = e.expires_at,
        n = (0, i.A)(null != t ? Date.parse(t) : 0, 1e3);
    return null == t ? null : _(n, Number(e.discount.amount));
};
