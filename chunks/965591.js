n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(880013),
    r = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(927578),
    u = n(473702),
    m = n(985018),
    _ = n(73785),
    g = n(67423);
let x = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: x, discountedPrice: A } = e,
        { analyticsLocations: h } = (0, d.Ay)(o.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        p = (0, r.zhh)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, i.jsx)(a.animated.div, {
        className: l()(_.iE, { [_.q4]: !t }),
        style: p,
        children: (0, i.jsxs)("div", {
            className: _.iJ,
            children: [
                (0, i.jsx)("img", { alt: "", src: g, className: _.oU }),
                (0, i.jsxs)("div", {
                    className: _.iQ,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: m.intl.format(m.t["3yZP0G"], { percent: x.discount.amount }),
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: m.intl.format(m.t["3Q4wCy"], {
                                numMonths: x.discount.user_usage_limit,
                                discountedPrice: A,
                                billingPeriod: (0, c.Ke)(x.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(r.Button, {
                    variant: "expressive",
                    icon: r.tvc,
                    size: "md",
                    text: m.intl.string(m.t.zrCzVB),
                    onClick: () =>
                        void (0, r.mMO)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("41353"),
                                n.e("35432"),
                                n.e("62843"),
                            ]).then(n.bind(n, 281439));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: h,
                                    initialStep: u.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
