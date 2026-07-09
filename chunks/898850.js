"use strict";
n.d(t, { q: () => m });
var i,
    r = n(64700),
    a = n(989349),
    s = n.n(a),
    l = n(465323),
    o = n(17928),
    d = n(773669),
    c = n(97352),
    u = n(252424),
    _ = n(428262),
    E = n(580630),
    A = n(945810),
    h =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.OPPORTUNITY = 1)] = "OPPORTUNITY"),
        (i[(i.CONVENIENCE = 2)] = "CONVENIENCE"),
        (i[(i.LOYALTY = 3)] = "LOYALTY"),
        i);
let I = (0, A.mj)({
    name: "2026-07-monthly-to-yearly-upsell-copy",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
var f = n(202541),
    p = n(652215),
    T = n(375708);
function m(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, o.bG)([d.default], () => d.default.locale),
        i = (function (e) {
            let { location: t } = e;
            return I.useConfig({ location: t });
        })({ location: "useMonthlyToYearlyUpsellContent" }),
        a = (0, o.bG)([c.A], () => {
            if (!t || null == e || !(e.status === p.Dmq.ACTIVE && !e.isPurchasedExternally && !(0, _.Nc)(e)))
                return null;
            let n = (function (e) {
                let t = (0, _.EL)(e);
                if (null == t || !f.BL.has(t.planId)) return null;
                let n = f.hd[t.planId]?.skuId;
                return null == n ? null : (f.zE[n] ?? null);
            })(e);
            return null == n ? null : (c.A.get(n) ?? null);
        }, [t, e]);
    return (0, r.useMemo)(() => {
        if (null == a || null == e) return null;
        let t = { paymentSourceId: e.paymentSourceId ?? void 0 },
            r = (0, _.z_)(a, !1, t);
        if (null == r) return null;
        let o = (0, l.LQ)(r.amount, r.currency);
        if (null == o || o <= 0) return null;
        let d = (0, E.$g)(o, r.currency, { maximumFractionDigits: 0 }),
            c = (0, _.L_)({ planId: a.id, priceOptions: t, subscriptionPlan: a }),
            A = null != c ? (0, u.l9)(n, c / 100) : null,
            I = null != A ? T.intl.formatToPlainString(T.t.IAybsG, { discount: A }) : void 0,
            f = (function (e, t, n) {
                switch (e) {
                    case h.CONTROL:
                        return {
                            title: T.intl.formatToPlainString(T.t.cZPXK6, { amount: t }),
                            body: T.intl.string(T.t.KD6MH5),
                        };
                    case h.OPPORTUNITY:
                        return {
                            title: T.intl.formatToPlainString(T.t.aKa3qR, { amount: t }),
                            body: T.intl.string(T.t.NE8WXI),
                        };
                    case h.CONVENIENCE:
                        return {
                            title: T.intl.formatToPlainString(T.t["/JpB6y"], { amount: t }),
                            body: T.intl.string(T.t.deiBu8),
                        };
                    case h.LOYALTY: {
                        let e = (function (e) {
                            let t = e.premiumSince;
                            if (null == t) return null;
                            let n = s()().diff(s()(t).add(1, "day"), "months");
                            return n > 0 ? n : null;
                        })(n);
                        return {
                            title:
                                null != e
                                    ? T.intl.formatToPlainString(T.t.n0NjuD, { amount: t, months: e })
                                    : T.intl.formatToPlainString(T.t.WBEYyz, { amount: t }),
                            body: T.intl.string(T.t.UZWxcy),
                        };
                    }
                    default:
                        return null;
                }
            })(i, d, e);
        if (null == f) return null;
        let { title: p, body: m } = f;
        return { title: p, body: m, cta: T.intl.string(T.t.xmQfYw), badge: I, yearlyPlanId: a.id };
    }, [n, i, e, a]);
}
