"use strict";
n.d(t, { q: () => g });
var i,
    r = n(64700),
    a = n(989349),
    s = n.n(a),
    l = n(465323),
    o = n(17928),
    d = n(803496),
    c = n(773669),
    u = n(252424),
    _ = n(428262),
    E = n(580630),
    A = n(615396),
    h = n(945810),
    I =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.OPPORTUNITY = 1)] = "OPPORTUNITY"),
        (i[(i.CONVENIENCE = 2)] = "CONVENIENCE"),
        (i[(i.LOYALTY = 3)] = "LOYALTY"),
        i);
let f = (0, h.mj)({
    name: "2026-07-monthly-to-yearly-upsell-copy",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
var p = n(202541),
    T = n(652215),
    m = n(375708);
function g(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        i = (0, o.bG)([c.default], () => c.default.locale),
        a = (function (e) {
            let { location: t } = e;
            return f.useConfig({ location: t });
        })({ location: "useMonthlyToYearlyUpsellContent" }),
        h =
            !n || null == e || (t = e).status !== T.Dmq.ACTIVE || t.isPurchasedExternally || (0, _.Nc)(t)
                ? null
                : (function (e) {
                      let t = (0, _.EL)(e);
                      if (null == t || !p.BL.has(t.planId)) return null;
                      let n = p.hd[t.planId]?.skuId;
                      if (null == n) return null;
                      let i = p.zE[n];
                      return null == i ? null : { yearlyPlanId: i, skuId: (0, _.mH)(n) };
                  })(e),
        g = (0, A.zz)(h?.yearlyPlanId ?? null),
        S = e?.paymentSourceId ?? void 0,
        { priceOptions: N } = (0, d.A)({
            activeSubscription: e ?? null,
            skuIDs: null != h ? [h.skuId] : [],
            paymentSourceId: S,
            isGift: !1,
        });
    return (0, r.useMemo)(() => {
        if (null == g || null == e || !N.loaded || N.paymentSourceId !== S) return null;
        let t = (0, _.z_)(g, !1, N);
        if (null == t) return null;
        let n = (0, l.LQ)(t.amount, t.currency);
        if (null == n || n <= 0) return null;
        let r = (0, E.$g)(n, t.currency, { maximumFractionDigits: 0 }),
            o = (0, _.L_)({ planId: g.id, priceOptions: N, subscriptionPlan: g }),
            d = null != o ? (0, u.l9)(i, o / 100) : null,
            c = null != d ? m.intl.formatToPlainString(m.t.IAybsG, { discount: d }) : void 0,
            A = (function (e, t, n) {
                switch (e) {
                    case I.CONTROL:
                        return {
                            title: m.intl.formatToPlainString(m.t.cZPXK6, { amount: t }),
                            body: m.intl.string(m.t.KD6MH5),
                        };
                    case I.OPPORTUNITY:
                        return {
                            title: m.intl.formatToPlainString(m.t.aKa3qR, { amount: t }),
                            body: m.intl.string(m.t.NE8WXI),
                        };
                    case I.CONVENIENCE:
                        return {
                            title: m.intl.formatToPlainString(m.t["/JpB6y"], { amount: t }),
                            body: m.intl.string(m.t.deiBu8),
                        };
                    case I.LOYALTY: {
                        let e = (function (e) {
                            let t = e.premiumSince;
                            if (null == t) return null;
                            let n = s()().diff(s()(t).add(1, "day"), "months");
                            return n > 0 ? n : null;
                        })(n);
                        return {
                            title:
                                null != e
                                    ? m.intl.formatToPlainString(m.t.n0NjuD, { amount: t, months: e })
                                    : m.intl.formatToPlainString(m.t.WBEYyz, { amount: t }),
                            body: m.intl.string(m.t.UZWxcy),
                        };
                    }
                    default:
                        return null;
                }
            })(a, r, e);
        if (null == A) return null;
        let { title: h, body: f } = A;
        return { title: h, body: f, cta: m.intl.string(m.t.xmQfYw), badge: c, yearlyPlanId: g.id };
    }, [i, a, e, g, N, S]);
}
