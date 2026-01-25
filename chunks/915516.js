n.d(t, {
    Fu: () => f,
    GZ: () => d,
    __: () => _,
    rn: () => p,
}),
    n(65821);
var r = n(496431),
    i = n(773669),
    a = n(975571),
    s = n(927578),
    o = n(788868),
    l = n(652215),
    c = n(985018);
let u = 1e3;

function d(e, t, n, r) {
    switch (e) {
        case o.pe.TIER_0:
            return t.days > 0
                ? c.intl.formatToPlainString(c.t.sP5OqC, {
                      days: t.days,
                  })
                : t.hours > 0
                  ? c.intl.formatToPlainString(c.t["7Lhfu7"], {
                        hours: t.hours,
                    })
                  : c.intl.formatToPlainString(c.t.coDiS0, {
                        minutes: Math.max(t.minutes, 1),
                    });
        case o.pe.TIER_2:
            return t.days > 0
                ? c.intl.formatToPlainString(c.t.GPqVWT, {
                      days: t.days,
                      trialPeriod: n,
                      termsUrl: r,
                  })
                : t.hours > 0
                  ? c.intl.formatToPlainString(c.t.WFMtg1, {
                        hours: t.hours,
                        trialPeriod: n,
                        termsUrl: r,
                    })
                  : c.intl.formatToPlainString(c.t.SxXB42, {
                        minutes: Math.max(t.minutes, 1),
                        trialPeriod: n,
                        termsUrl: r,
                    });
        default:
            throw Error("Unsupported subscription tier: ".concat(e));
    }
}
let f = (e) => {
    var t, n, i;
    let c = e.expires_at,
        f = (0, r.A)(null != c ? Date.parse(c) : 0, u),
        p = null == e || null == (t = e.subscription_trial) ? void 0 : t.sku_id;
    return null == c || null == p
        ? null
        : d(
              p,
              f,
              (0, s.re)({
                  intervalType: null == (n = e.subscription_trial) ? void 0 : n.interval,
                  intervalCount: null == (i = e.subscription_trial) ? void 0 : i.interval_count,
              }),
              a.A.getArticleURL(e.trial_id === o.yo ? l.MVz.NITRO_TRIAL_FOR_ALL : l.MVz.PREMIUM_TRIAL),
          );
};

function p(e, t) {
    let n = new Intl.NumberFormat(i.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? c.intl.formatToPlainString(c.t["7mw8CZ"], {
              days: e.days,
              discountPercentage: n,
          })
        : e.hours > 0
          ? c.intl.formatToPlainString(c.t["0hYT6o"], {
                hours: e.hours,
                discountPercentage: n,
            })
          : c.intl.formatToPlainString(c.t["2rh7rw"], {
                minutes: Math.max(e.minutes, 1),
                discountPercentage: n,
            });
}
let _ = (e) => {
    let t = e.expires_at,
        n = (0, r.A)(null != t ? Date.parse(t) : 0, u);
    return null == t ? null : p(n, Number(e.discount.amount));
};
