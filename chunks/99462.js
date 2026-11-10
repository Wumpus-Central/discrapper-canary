var r = i(496431),
    n = i(773669),
    o = i(975571),
    l = i(448645),
    a = i(511484),
    s = i(682901),
    u = i(652215),
    d = i(792996);
function c(t, e, i, r) {
    switch (t) {
        case s.pe.TIER_0:
            return e.days > 0
                ? d.intl.formatToPlainString(d.t.sP5OqC, { days: e.days })
                : e.hours > 0
                  ? d.intl.formatToPlainString(d.t["7Lhfu7"], { hours: e.hours })
                  : d.intl.formatToPlainString(d.t.coDiS0, { minutes: Math.max(e.minutes, 1) });
        case s.pe.TIER_2:
            return e.days > 0
                ? d.intl.formatToPlainString(d.t.GPqVWT, { days: e.days, trialPeriod: i, termsUrl: r })
                : e.hours > 0
                  ? d.intl.formatToPlainString(d.t.WFMtg1, { hours: e.hours, trialPeriod: i, termsUrl: r })
                  : d.intl.formatToPlainString(d.t.SxXB42, {
                        minutes: Math.max(e.minutes, 1),
                        trialPeriod: i,
                        termsUrl: r,
                    });
        default:
            throw Error(`Unsupported subscription tier: ${t}`);
    }
}
function p(t, e, i) {
    let r = new Intl.NumberFormat(n.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(e / 100);
    return t.days > 0
        ? d.intl.formatToPlainString(i ? d.t["3tVpo8"] : d.t["7mw8CZ"], { days: t.days, discountPercentage: r })
        : t.hours > 0
          ? d.intl.formatToPlainString(i ? d.t.TXUGPd : d.t["0hYT6o"], { hours: t.hours, discountPercentage: r })
          : d.intl.formatToPlainString(i ? d.t.CAxpzK : d.t["2rh7rw"], {
                minutes: Math.max(t.minutes, 1),
                discountPercentage: r,
            });
}
i.d(
    e,
    {},
    {
        Fu: function (t) {
            let e = t.expiresAt,
                i = (0, r.A)(null != e ? e.getTime() : 0, 1e3),
                n = t?.subscriptionTrial?.skuId;
            return null == e || null == n
                ? null
                : c(
                      n,
                      i,
                      (0, l.re)({
                          intervalType: t.subscriptionTrial?.interval,
                          intervalCount: t.subscriptionTrial?.intervalCount,
                      }),
                      o.A.getArticleURL(t.trialId === s.yo ? u.MVz.NITRO_TRIAL_FOR_ALL : u.MVz.PREMIUM_TRIAL),
                  );
        },
        GZ: c,
        __: function (t) {
            let e = t.expiresAt,
                i = (0, r.A)(null != e ? e.getTime() : 0, 1e3);
            return null == e ? null : p(i, Number(t.discount.amount), (0, a.hm)(t));
        },
        rn: p,
    },
);
