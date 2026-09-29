n.d(t, { Fu: () => d, GZ: () => u, __: () => A, rn: () => _ });
var i = n(496431),
    l = n(773669),
    r = n(975571),
    s = n(158045),
    a = n(511484),
    o = n(202541),
    c = n(652215),
    E = n(375708);
function u(e, t, n, i) {
    switch (e) {
        case o.pe.TIER_0:
            return t.days > 0
                ? E.intl.formatToPlainString(E.t.sP5OqC, { days: t.days })
                : t.hours > 0
                  ? E.intl.formatToPlainString(E.t["7Lhfu7"], { hours: t.hours })
                  : E.intl.formatToPlainString(E.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
        case o.pe.TIER_2:
            return t.days > 0
                ? E.intl.formatToPlainString(E.t.GPqVWT, { days: t.days, trialPeriod: n, termsUrl: i })
                : t.hours > 0
                  ? E.intl.formatToPlainString(E.t.WFMtg1, { hours: t.hours, trialPeriod: n, termsUrl: i })
                  : E.intl.formatToPlainString(E.t.SxXB42, {
                        minutes: Math.max(t.minutes, 1),
                        trialPeriod: n,
                        termsUrl: i,
                    });
        default:
            throw Error(`Unsupported subscription tier: ${e}`);
    }
}
function d(e) {
    let t = e.expiresAt,
        n = (0, i.A)(null != t ? t.getTime() : 0, 1e3),
        l = e?.subscriptionTrial?.skuId;
    return null == t || null == l
        ? null
        : u(
              l,
              n,
              (0, s.re)({
                  intervalType: e.subscriptionTrial?.interval,
                  intervalCount: e.subscriptionTrial?.intervalCount,
              }),
              r.A.getArticleURL(e.trialId === o.yo ? c.MVz.NITRO_TRIAL_FOR_ALL : c.MVz.PREMIUM_TRIAL),
          );
}
function _(e, t, n) {
    let i = new Intl.NumberFormat(l.default.locale, {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
        ? E.intl.formatToPlainString(n ? E.t["3tVpo8"] : E.t["7mw8CZ"], { days: e.days, discountPercentage: i })
        : e.hours > 0
          ? E.intl.formatToPlainString(n ? E.t.TXUGPd : E.t["0hYT6o"], { hours: e.hours, discountPercentage: i })
          : E.intl.formatToPlainString(n ? E.t.CAxpzK : E.t["2rh7rw"], {
                minutes: Math.max(e.minutes, 1),
                discountPercentage: i,
            });
}
function A(e) {
    let t = e.expiresAt,
        n = (0, i.A)(null != t ? t.getTime() : 0, 1e3);
    return null == t ? null : _(n, Number(e.discount.amount), (0, a.hm)(e));
}
