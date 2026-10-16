r.d(e, { Fu: () => p, GZ: () => c, __: () => g, rn: () => m });
var i = r(496431),
    n = r(773669),
    o = r(975571),
    l = r(158045),
    a = r(511484),
    s = r(202541),
    u = r(652215),
    d = r(105292);
function c(t, e, r, i) {
    switch (t) {
        case s.pe.TIER_0:
            return e.days > 0
                ? d.intl.formatToPlainString(d.t.sP5OqC, { days: e.days })
                : e.hours > 0
                  ? d.intl.formatToPlainString(d.t["7Lhfu7"], { hours: e.hours })
                  : d.intl.formatToPlainString(d.t.coDiS0, { minutes: Math.max(e.minutes, 1) });
        case s.pe.TIER_2:
            return e.days > 0
                ? d.intl.formatToPlainString(d.t.GPqVWT, { days: e.days, trialPeriod: r, termsUrl: i })
                : e.hours > 0
                  ? d.intl.formatToPlainString(d.t.WFMtg1, { hours: e.hours, trialPeriod: r, termsUrl: i })
                  : d.intl.formatToPlainString(d.t.SxXB42, {
                        minutes: Math.max(e.minutes, 1),
                        trialPeriod: r,
                        termsUrl: i,
                    });
        default:
            throw Error(`Unsupported subscription tier: ${t}`);
    }
}
function p(t) {
    let e = t.expiresAt,
        r = (0, i.A)(null != e ? e.getTime() : 0, 1e3),
        n = t?.subscriptionTrial?.skuId;
    return null == e || null == n
        ? null
        : c(
              n,
              r,
              (0, l.re)({
                  intervalType: t.subscriptionTrial?.interval,
                  intervalCount: t.subscriptionTrial?.intervalCount,
              }),
              o.A.getArticleURL(t.trialId === s.yo ? u.MVz.NITRO_TRIAL_FOR_ALL : u.MVz.PREMIUM_TRIAL),
          );
}
function m(t, e, r) {
    let i = new Intl.NumberFormat(n.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(e / 100);
    return t.days > 0
        ? d.intl.formatToPlainString(r ? d.t["3tVpo8"] : d.t["7mw8CZ"], { days: t.days, discountPercentage: i })
        : t.hours > 0
          ? d.intl.formatToPlainString(r ? d.t.TXUGPd : d.t["0hYT6o"], { hours: t.hours, discountPercentage: i })
          : d.intl.formatToPlainString(r ? d.t.CAxpzK : d.t["2rh7rw"], {
                minutes: Math.max(t.minutes, 1),
                discountPercentage: i,
            });
}
function g(t) {
    let e = t.expiresAt,
        r = (0, i.A)(null != e ? e.getTime() : 0, 1e3);
    return null == e ? null : m(r, Number(t.discount.amount), (0, a.hm)(t));
}
