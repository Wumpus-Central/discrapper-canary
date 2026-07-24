n.d(t, { q: () => N });
var i,
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(465323),
    o = n(17928),
    d = n(803496),
    c = n(773669),
    u = n(252424),
    h = n(428262),
    A = n(580630),
    E = n(615396),
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
    p = n(375708);
function S(e) {
    let t = e.premiumSince;
    return null == t ? null : s()().diff(s()(t).add(1, "day"), "months");
}
function N(e) {
    var t;
    let n,
        i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = (0, o.bG)([c.default], () => c.default.locale),
        s = (function (e) {
            let { location: t } = e;
            return _.useConfig({ location: t });
        })({ location: "useMonthlyToYearlyUpsellContent" }),
        C =
            i &&
            null != e &&
            (t = e).status === T.Dmq.ACTIVE &&
            !t.isPurchasedExternally &&
            !(0, h.Nc)(t) &&
            null != (n = S(t)) &&
            n <= 4
                ? (function (e) {
                      let t = (0, h.EL)(e);
                      if (null == t || !I.BL.has(t.planId)) return null;
                      let n = I.hd[t.planId]?.skuId;
                      if (null == n) return null;
                      let i = I.zE[n];
                      return null == i ? null : { yearlyPlanId: i, skuId: (0, h.mH)(n) };
                  })(e)
                : null,
        N = (0, E.zz)(C?.yearlyPlanId ?? null),
        m = e?.paymentSourceId ?? void 0,
        { priceOptions: L } = (0, d.A)({
            activeSubscription: e ?? null,
            skuIDs: null != C ? [C.skuId] : [],
            paymentSourceId: m,
            isGift: !1,
        });
    return (0, l.useMemo)(() => {
        if (null == N || null == e || !L.loaded || L.paymentSourceId !== m) return null;
        let t = (0, h.z_)(N, !1, L);
        if (null == t) return null;
        let n = (0, a.LQ)(t.amount, t.currency);
        if (null == n || n <= 0) return null;
        let i = (0, A.$g)(n, t.currency, { maximumFractionDigits: 0 }),
            l = (0, h.L_)({ planId: N.id, priceOptions: L, subscriptionPlan: N }),
            o = null != l ? (0, u.l9)(r, l / 100) : null,
            d = null != o ? p.intl.formatToPlainString(p.t.IAybsG, { discount: o }) : void 0,
            c = (function (e, t, n) {
                switch (e) {
                    case g.CONTROL:
                        return {
                            title: p.intl.formatToPlainString(p.t.cZPXK6, { amount: t }),
                            body: p.intl.string(p.t.KD6MH5),
                        };
                    case g.OPPORTUNITY:
                        return {
                            title: p.intl.formatToPlainString(p.t.aKa3qR, { amount: t }),
                            body: p.intl.string(p.t.NE8WXI),
                        };
                    case g.CONVENIENCE:
                        return {
                            title: p.intl.formatToPlainString(p.t["/JpB6y"], { amount: t }),
                            body: p.intl.string(p.t.deiBu8),
                        };
                    case g.LOYALTY: {
                        let e = S(n) ?? 0;
                        return {
                            title:
                                e > 0
                                    ? p.intl.formatToPlainString(p.t.n0NjuD, { amount: t, months: e })
                                    : p.intl.formatToPlainString(p.t.WBEYyz, { amount: t }),
                            body: p.intl.string(p.t.UZWxcy),
                        };
                    }
                    default:
                        return null;
                }
            })(s, i, e);
        if (null == c) return null;
        let { title: E, body: C } = c;
        return { title: E, body: C, cta: p.intl.string(p.t.xmQfYw), badge: d, yearlyPlanId: N.id };
    }, [r, s, e, N, L, m]);
}
