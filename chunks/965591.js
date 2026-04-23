n.d(t, { A: () => x });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    s = n(419354),
    l = n(717421),
    c = n(192308),
    o = n(534514),
    d = n(834730),
    u = n(821609),
    _ = n(403581),
    m = n(793574),
    p = n(688810),
    f = n(927578),
    A = n(473702),
    g = n(985018),
    h = n(98812),
    b = n(67423);
let x = function (e) {
    let { isVisible: t, premiumSubscription: a, churnDiscountOffer: x, discountedPrice: C } = e,
        { analyticsLocations: v } = (0, p.Ay)(m.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        R = (0, l.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(s.animated.div, {
        className: i()(h.iE, { [h.q4]: !t }),
        style: R,
        children: (0, r.jsxs)("div", {
            className: h.iJ,
            children: [
                (0, r.jsx)("img", { alt: "", src: b, className: h.oU }),
                (0, r.jsxs)("div", {
                    className: h.iQ,
                    children: [
                        (0, r.jsx)(o.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: g.intl.format(g.t["3yZP0G"], { percent: x.discount.amount }),
                        }),
                        (0, r.jsx)(d.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: g.intl.format(g.t["3Q4wCy"], {
                                numMonths: x.discount.user_usage_limit,
                                discountedPrice: C,
                                billingPeriod: (0, f.Ke)(x.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(u.$, {
                    variant: "expressive",
                    icon: _.t,
                    size: "md",
                    text: g.intl.string(g.t.zrCzVB),
                    onClick: () =>
                        void (0, c.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("41353"),
                                n.e("35432"),
                                n.e("74019"),
                            ]).then(n.bind(n, 281439));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    ...t,
                                    premiumSubscription: a,
                                    analyticsLocations: v,
                                    initialStep: A.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
