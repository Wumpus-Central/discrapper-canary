n.d(t, { q: () => S });
var i,
    l = n(582128),
    r = n(989349),
    s = n.n(r),
    a = n(465323),
    o = n(17928),
    d = n(803496),
    c = n(773669),
    u = n(252424),
    h = n(158045),
    A = n(580630),
    E = n(615396),
    g = n(945810),
    C =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.OPPORTUNITY = 1)] = "OPPORTUNITY"),
        (i[(i.CONVENIENCE = 2)] = "CONVENIENCE"),
        (i[(i.LOYALTY = 3)] = "LOYALTY"),
        i);
let _ = (0, g.mj)({
    name: "2026-07-monthly-to-yearly-upsell-copy",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
var I = n(202541),
    T = n(652215),
    p = n(375708);
function N(e) {
    let t = e.premiumSince;
    return null == t ? null : s()().diff(s()(t).add(1, "day"), "months");
}
function S(e) {
    var t;
    let n,
        i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = (0, o.bG)([c.default], () => c.default.locale),
        s = (function (e) {
            let { location: t } = e;
            return _.useConfig({ location: t });
        })({ location: "useMonthlyToYearlyUpsellContent" }),
        g =
            i &&
            null != e &&
            (t = e).status === T.Dmq.ACTIVE &&
            !t.isPurchasedExternally &&
            !(0, h.Nc)(t) &&
            null != (n = N(t)) &&
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
        S = (0, E.zz)(g?.yearlyPlanId ?? null),
        L = e?.paymentSourceId ?? void 0,
        { priceOptions: m } = (0, d.A)({
            activeSubscription: e ?? null,
            skuIDs: null != g ? [g.skuId] : [],
            paymentSourceId: L,
            isGift: !1,
        });
    return (0, l.useMemo)(() => {
        if (null == S || null == e || !m.loaded || m.paymentSourceId !== L) return null;
        let t = (0, h.z_)(S, !1, m);
        if (null == t) return null;
        let n = (0, a.LQ)(t.amount, t.currency);
        if (null == n || n <= 0) return null;
        let i = (0, A.$g)(n, t.currency, { maximumFractionDigits: 0 }),
            l = (0, h.L_)({ planId: S.id, priceOptions: m, subscriptionPlan: S }),
            o = null != l ? (0, u.l9)(r, l / 100) : null,
            d = null != o ? p.intl.formatToPlainString(p.t.IAybsG, { discount: o }) : void 0,
            c = (function (e, t, n) {
                switch (e) {
                    case C.CONTROL:
                        return {
                            title: p.intl.formatToPlainString(p.t.cZPXK6, { amount: t }),
                            body: p.intl.string(p.t.KD6MH5),
                        };
                    case C.OPPORTUNITY:
                        return {
                            title: p.intl.formatToPlainString(p.t.aKa3qR, { amount: t }),
                            body: p.intl.string(p.t.NE8WXI),
                        };
                    case C.CONVENIENCE:
                        return {
                            title: p.intl.formatToPlainString(p.t["/JpB6y"], { amount: t }),
                            body: p.intl.string(p.t.deiBu8),
                        };
                    case C.LOYALTY: {
                        let e = N(n) ?? 0;
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
        let { title: E, body: g } = c;
        return { title: E, body: g, cta: p.intl.string(p.t.xmQfYw), badge: d, yearlyPlanId: S.id };
    }, [r, s, e, S, m, L]);
}
