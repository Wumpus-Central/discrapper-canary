n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(407045),
    l = n(397927),
    o = n(793574),
    c = n(688810),
    d = n(927578),
    u = n(473702),
    _ = n(985018),
    m = n(98812),
    p = n(67423);
let g = function (e) {
    let { isVisible: t, premiumSubscription: r, churnDiscountOffer: g, discountedPrice: A } = e,
        { analyticsLocations: f } = (0, c.Ay)(o.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        h = (0, l.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(s.animated.div, {
        className: a()(m.iE, { [m.q4]: !t }),
        style: h,
        children: (0, i.jsxs)("div", {
            className: m.iJ,
            children: [
                (0, i.jsx)("img", { alt: "", src: p, className: m.oU }),
                (0, i.jsxs)("div", {
                    className: m.iQ,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: _.intl.format(_.t["3yZP0G"], { percent: g.discount.amount }),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: _.intl.format(_.t["3Q4wCy"], {
                                numMonths: g.discount.user_usage_limit,
                                discountedPrice: A,
                                billingPeriod: (0, d.Ke)(g.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(l.Button, {
                    variant: "expressive",
                    icon: l.tvc,
                    size: "md",
                    text: _.intl.string(_.t.zrCzVB),
                    onClick: () =>
                        void (0, l.mMO)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("41353"),
                                n.e("35432"),
                                n.e("72946"),
                            ]).then(n.bind(n, 281439));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    premiumSubscription: r,
                                    analyticsLocations: f,
                                    initialStep: u.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
