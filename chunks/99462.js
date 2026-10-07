e.d(i, { Fu: () => m, GZ: () => d, __: () => g, rn: () => p });
var r = e(496431),
    n = e(773669),
    o = e(975571),
    l = e(158045),
    a = e(511484),
    s = e(202541),
    u = e(652215),
    c = e(375708);
function d(t, i, e, r) {
    switch (t) {
        case s.pe.TIER_0:
            return i.days > 0
                ? c.intl.formatToPlainString(c.t.sP5OqC, { days: i.days })
                : i.hours > 0
                  ? c.intl.formatToPlainString(c.t["7Lhfu7"], { hours: i.hours })
                  : c.intl.formatToPlainString(c.t.coDiS0, { minutes: Math.max(i.minutes, 1) });
        case s.pe.TIER_2:
            return i.days > 0
                ? c.intl.formatToPlainString(c.t.GPqVWT, { days: i.days, trialPeriod: e, termsUrl: r })
                : i.hours > 0
                  ? c.intl.formatToPlainString(c.t.WFMtg1, { hours: i.hours, trialPeriod: e, termsUrl: r })
                  : c.intl.formatToPlainString(c.t.SxXB42, {
                        minutes: Math.max(i.minutes, 1),
                        trialPeriod: e,
                        termsUrl: r,
                    });
        default:
            throw Error(`Unsupported subscription tier: ${t}`);
    }
}
function m(t) {
    let i = t.expiresAt,
        e = (0, r.A)(null != i ? i.getTime() : 0, 1e3),
        n = t?.subscriptionTrial?.skuId;
    return null == i || null == n
        ? null
        : d(
              n,
              e,
              (0, l.re)({
                  intervalType: t.subscriptionTrial?.interval,
                  intervalCount: t.subscriptionTrial?.intervalCount,
              }),
              o.A.getArticleURL(t.trialId === s.yo ? u.MVz.NITRO_TRIAL_FOR_ALL : u.MVz.PREMIUM_TRIAL),
          );
}
function p(t, i, e) {
    let r = new Intl.NumberFormat(n.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(i / 100);
    return t.days > 0
        ? c.intl.formatToPlainString(e ? c.t["3tVpo8"] : c.t["7mw8CZ"], { days: t.days, discountPercentage: r })
        : t.hours > 0
          ? c.intl.formatToPlainString(e ? c.t.TXUGPd : c.t["0hYT6o"], { hours: t.hours, discountPercentage: r })
          : c.intl.formatToPlainString(e ? c.t.CAxpzK : c.t["2rh7rw"], {
                minutes: Math.max(t.minutes, 1),
                discountPercentage: r,
            });
}
function g(t) {
    let i = t.expiresAt,
        e = (0, r.A)(null != i ? i.getTime() : 0, 1e3);
    return null == i ? null : p(e, Number(t.discount.amount), (0, a.hm)(t));
}
