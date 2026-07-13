"use strict";
n.d(t, { q: () => S });
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
    let t = e.premiumSince;
    return null == t ? null : s()().diff(s()(t).add(1, "day"), "months");
}
function S(e) {
    var t;
    let n,
        i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = (0, o.bG)([c.default], () => c.default.locale),
        s = (function (e) {
            let { location: t } = e;
            return f.useConfig({ location: t });
        })({ location: "useMonthlyToYearlyUpsellContent" }),
        h =
            i &&
            null != e &&
            (t = e).status === T.Dmq.ACTIVE &&
            !t.isPurchasedExternally &&
            !(0, _.Nc)(t) &&
            null != (n = g(t)) &&
            n <= 4
                ? (function (e) {
                      let t = (0, _.EL)(e);
                      if (null == t || !p.BL.has(t.planId)) return null;
                      let n = p.hd[t.planId]?.skuId;
                      if (null == n) return null;
                      let i = p.zE[n];
                      return null == i ? null : { yearlyPlanId: i, skuId: (0, _.mH)(n) };
                  })(e)
                : null,
        S = (0, A.zz)(h?.yearlyPlanId ?? null),
        N = e?.paymentSourceId ?? void 0,
        { priceOptions: C } = (0, d.A)({
            activeSubscription: e ?? null,
            skuIDs: null != h ? [h.skuId] : [],
            paymentSourceId: N,
            isGift: !1,
        });
    return (0, r.useMemo)(() => {
        if (null == S || null == e || !C.loaded || C.paymentSourceId !== N) return null;
        let t = (0, _.z_)(S, !1, C);
        if (null == t) return null;
        let n = (0, l.LQ)(t.amount, t.currency);
        if (null == n || n <= 0) return null;
        let i = (0, E.$g)(n, t.currency, { maximumFractionDigits: 0 }),
            r = (0, _.L_)({ planId: S.id, priceOptions: C, subscriptionPlan: S }),
            o = null != r ? (0, u.l9)(a, r / 100) : null,
            d = null != o ? m.intl.formatToPlainString(m.t.IAybsG, { discount: o }) : void 0,
            c = (function (e, t, n) {
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
                        let e = g(n) ?? 0;
                        return {
                            title:
                                e > 0
                                    ? m.intl.formatToPlainString(m.t.n0NjuD, { amount: t, months: e })
                                    : m.intl.formatToPlainString(m.t.WBEYyz, { amount: t }),
                            body: m.intl.string(m.t.UZWxcy),
                        };
                    }
                    default:
                        return null;
                }
            })(s, i, e);
        if (null == c) return null;
        let { title: A, body: h } = c;
        return { title: A, body: h, cta: m.intl.string(m.t.xmQfYw), badge: d, yearlyPlanId: S.id };
    }, [a, s, e, S, C, N]);
}
