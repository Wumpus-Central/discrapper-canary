n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(522160),
    r = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(927578),
    u = n(473702),
    _ = n(985018),
    m = n(312275),
    A = n(67423);
let g = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: g, discountedPrice: h } = e,
        { analyticsLocations: x } = (0, c.Ay)(o.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        p = (0, r.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(l.animated.div, {
        className: a()(m.iE, { [m.q4]: !t }),
        style: p,
        children: (0, i.jsxs)("div", {
            className: m.iJ,
            children: [
                (0, i.jsx)("img", { alt: "", src: A, className: m.oU }),
                (0, i.jsxs)("div", {
                    className: m.iQ,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: _.intl.format(_.t["3yZP0G"], { percent: g.discount.amount }),
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: _.intl.format(_.t["3Q4wCy"], {
                                numMonths: g.discount.user_usage_limit,
                                discountedPrice: h,
                                billingPeriod: (0, d.Ke)(g.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(r.Button, {
                    variant: "expressive",
                    icon: r.tvc,
                    size: "md",
                    text: _.intl.string(_.t.zrCzVB),
                    onClick: () =>
                        void (0, r.mMO)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                                .e("72820")
                                .then(n.bind(n, 281439));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: x,
                                    initialStep: u.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
