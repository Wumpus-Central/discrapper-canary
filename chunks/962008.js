n.d(t, { q: () => p });
var i,
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(465323),
    o = n(17928),
    d = n(803496),
    c = n(773669),
    u = n(252424),
    A = n(428262),
    E = n(580630),
    h = n(615396),
    C = n(945810),
    g =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.OPPORTUNITY = 1)] = "OPPORTUNITY"),
        (i[(i.CONVENIENCE = 2)] = "CONVENIENCE"),
        (i[(i.LOYALTY = 3)] = "LOYALTY"),
        i);
let _ = (0, C.mj)({
    name: "2026-07-monthly-to-yearly-upsell-copy",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
var I = n(202541),
    T = n(652215),
    N = n(375708);
function p(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = (0, o.bG)([c.default], () => c.default.locale),
        r = (function (e) {
            let { location: t } = e;
            return _.useConfig({ location: t });
        })({ location: "useMonthlyToYearlyUpsellContent" }),
        C =
            !n || null == e || (t = e).status !== T.Dmq.ACTIVE || t.isPurchasedExternally || (0, A.Nc)(t)
                ? null
                : (function (e) {
                      let t = (0, A.EL)(e);
                      if (null == t || !I.BL.has(t.planId)) return null;
                      let n = I.hd[t.planId]?.skuId;
                      if (null == n) return null;
                      let i = I.zE[n];
                      return null == i ? null : { yearlyPlanId: i, skuId: (0, A.mH)(n) };
                  })(e),
        p = (0, h.zz)(C?.yearlyPlanId ?? null),
        S = e?.paymentSourceId ?? void 0,
        { priceOptions: L } = (0, d.A)({
            activeSubscription: e ?? null,
            skuIDs: null != C ? [C.skuId] : [],
            paymentSourceId: S,
            isGift: !1,
        });
    return (0, l.useMemo)(() => {
        if (null == p || null == e || !L.loaded || L.paymentSourceId !== S) return null;
        let t = (0, A.z_)(p, !1, L);
        if (null == t) return null;
        let n = (0, a.LQ)(t.amount, t.currency);
        if (null == n || n <= 0) return null;
        let l = (0, E.$g)(n, t.currency, { maximumFractionDigits: 0 }),
            o = (0, A.L_)({ planId: p.id, priceOptions: L, subscriptionPlan: p }),
            d = null != o ? (0, u.l9)(i, o / 100) : null,
            c = null != d ? N.intl.formatToPlainString(N.t.IAybsG, { discount: d }) : void 0,
            h = (function (e, t, n) {
                switch (e) {
                    case g.CONTROL:
                        return {
                            title: N.intl.formatToPlainString(N.t.cZPXK6, { amount: t }),
                            body: N.intl.string(N.t.KD6MH5),
                        };
                    case g.OPPORTUNITY:
                        return {
                            title: N.intl.formatToPlainString(N.t.aKa3qR, { amount: t }),
                            body: N.intl.string(N.t.NE8WXI),
                        };
                    case g.CONVENIENCE:
                        return {
                            title: N.intl.formatToPlainString(N.t["/JpB6y"], { amount: t }),
                            body: N.intl.string(N.t.deiBu8),
                        };
                    case g.LOYALTY: {
                        let e = (function (e) {
                            let t = e.premiumSince;
                            if (null == t) return null;
                            let n = s()().diff(s()(t).add(1, "day"), "months");
                            return n > 0 ? n : null;
                        })(n);
                        return {
                            title:
                                null != e
                                    ? N.intl.formatToPlainString(N.t.n0NjuD, { amount: t, months: e })
                                    : N.intl.formatToPlainString(N.t.WBEYyz, { amount: t }),
                            body: N.intl.string(N.t.UZWxcy),
                        };
                    }
                    default:
                        return null;
                }
            })(r, l, e);
        if (null == h) return null;
        let { title: C, body: _ } = h;
        return { title: C, body: _, cta: N.intl.string(N.t.xmQfYw), badge: c, yearlyPlanId: p.id };
    }, [i, r, e, p, L, S]);
}
