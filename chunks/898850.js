n.d(t, { q: () => N });
var i,
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(465323),
    o = n(17928),
    d = n(773669),
    c = n(97352),
    u = n(252424),
    A = n(428262),
    E = n(580630),
    h = n(945810),
    C =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.OPPORTUNITY = 1)] = "OPPORTUNITY"),
        (i[(i.CONVENIENCE = 2)] = "CONVENIENCE"),
        (i[(i.LOYALTY = 3)] = "LOYALTY"),
        i);
let g = (0, h.mj)({
    name: "2026-07-monthly-to-yearly-upsell-copy",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
var _ = n(202541),
    I = n(652215),
    T = n(375708);
function N(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, o.bG)([d.default], () => d.default.locale),
        i = (function (e) {
            let { location: t } = e;
            return g.useConfig({ location: t });
        })({ location: "useMonthlyToYearlyUpsellContent" }),
        r = (0, o.bG)([c.A], () => {
            if (!t || null == e || !(e.status === I.Dmq.ACTIVE && !e.isPurchasedExternally && !(0, A.Nc)(e)))
                return null;
            let n = (function (e) {
                let t = (0, A.EL)(e);
                if (null == t || !_.BL.has(t.planId)) return null;
                let n = _.hd[t.planId]?.skuId;
                return null == n ? null : (_.zE[n] ?? null);
            })(e);
            return null == n ? null : (c.A.get(n) ?? null);
        }, [t, e]);
    return (0, l.useMemo)(() => {
        if (null == r || null == e) return null;
        let t = { paymentSourceId: e.paymentSourceId ?? void 0 },
            l = (0, A.z_)(r, !1, t);
        if (null == l) return null;
        let o = (0, a.LQ)(l.amount, l.currency);
        if (null == o || o <= 0) return null;
        let d = (0, E.$g)(o, l.currency, { maximumFractionDigits: 0 }),
            c = (0, A.L_)({ planId: r.id, priceOptions: t, subscriptionPlan: r }),
            h = null != c ? (0, u.l9)(n, c / 100) : null,
            g = null != h ? T.intl.formatToPlainString(T.t.IAybsG, { discount: h }) : void 0,
            _ = (function (e, t, n) {
                switch (e) {
                    case C.CONTROL:
                        return {
                            title: T.intl.formatToPlainString(T.t.cZPXK6, { amount: t }),
                            body: T.intl.string(T.t.KD6MH5),
                        };
                    case C.OPPORTUNITY:
                        return {
                            title: T.intl.formatToPlainString(T.t.aKa3qR, { amount: t }),
                            body: T.intl.string(T.t.NE8WXI),
                        };
                    case C.CONVENIENCE:
                        return {
                            title: T.intl.formatToPlainString(T.t["/JpB6y"], { amount: t }),
                            body: T.intl.string(T.t.deiBu8),
                        };
                    case C.LOYALTY: {
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
        if (null == _) return null;
        let { title: I, body: N } = _;
        return { title: I, body: N, cta: T.intl.string(T.t.xmQfYw), badge: g, yearlyPlanId: r.id };
    }, [n, i, e, r]);
}
