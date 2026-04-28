n.d(t, { A: () => b });
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(487514),
    l = n(717421),
    c = n(192308),
    o = n(534514),
    d = n(834730),
    u = n(821609),
    _ = n(403581),
    m = n(793574),
    p = n(688810),
    A = n(927578),
    f = n(473702),
    g = n(985018),
    h = n(98812),
    x = n(67423);
let b = function (e) {
    let { isVisible: t, premiumSubscription: r, churnDiscountOffer: b, discountedPrice: C } = e,
        { analyticsLocations: N } = (0, p.Ay)(m.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        E = (0, l.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, a.jsx)(s.animated.div, {
        className: i()(h.iE, { [h.q4]: !t }),
        style: E,
        children: (0, a.jsxs)("div", {
            className: h.iJ,
            children: [
                (0, a.jsx)("img", { alt: "", src: x, className: h.oU }),
                (0, a.jsxs)("div", {
                    className: h.iQ,
                    children: [
                        (0, a.jsx)(o.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: g.intl.format(g.t["3yZP0G"], { percent: b.discount.amount }),
                        }),
                        (0, a.jsx)(d.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: g.intl.format(g.t["3Q4wCy"], {
                                numMonths: b.discount.user_usage_limit,
                                discountedPrice: C,
                                billingPeriod: (0, A.Ke)(b.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(u.$, {
                    variant: "expressive",
                    icon: _.t,
                    size: "md",
                    text: g.intl.string(g.t.zrCzVB),
                    onClick: () =>
                        void (0, c.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("32292"),
                                n.e("57036"),
                                n.e("88394"),
                                n.e("28367"),
                                n.e("45174"),
                                n.e("85519"),
                                n.e("11871"),
                                n.e("37266"),
                                n.e("63229"),
                                n.e("21909"),
                                n.e("31825"),
                                n.e("23353"),
                                n.e("96123"),
                                n.e("7175"),
                                n.e("37249"),
                                n.e("14138"),
                                n.e("8971"),
                                n.e("88017"),
                                n.e("77404"),
                                n.e("1040"),
                                n.e("64615"),
                                n.e("17239"),
                                n.e("7454"),
                                n.e("64492"),
                                n.e("20861"),
                                n.e("36682"),
                                n.e("45723"),
                                n.e("69601"),
                                n.e("63191"),
                                n.e("51444"),
                                n.e("62290"),
                                n.e("80973"),
                                n.e("20735"),
                                n.e("10567"),
                                n.e("12542"),
                                n.e("6159"),
                                n.e("98083"),
                                n.e("55008"),
                            ]).then(n.bind(n, 293061));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    premiumSubscription: r,
                                    analyticsLocations: N,
                                    initialStep: f.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
