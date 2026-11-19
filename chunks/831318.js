var e = n(477900);
n(582128);
var r = n(403581),
    a = n(772707),
    l = n(448645),
    s = n(423814),
    o = n(77528),
    c = n(783420),
    u = n(511484),
    p = n(682901),
    d = n(792996);
n.d(
    t,
    {},
    {
        A: function (i) {
            let {
                    transitionState: t,
                    title: n,
                    subtitle: b,
                    graphic: k,
                    guildBoostProps: v,
                    onClose: C,
                    onSecondaryClick: h,
                    onSubscribeModalClose: T,
                    secondaryCTA: m,
                    gradientColor: x = "nitro-pink",
                    badgeType: y = null,
                    badgeVariant: g = "expressive",
                    premiumModalAnalyticsLocation: w,
                    subscriptionTier: _ = p.pe.TIER_2,
                    hidePremiumOfferUpsell: f,
                    children: j,
                } = i,
                A = (0, o.V)(),
                I = (0, s.O)(),
                S = !f && (A?.subscriptionTrial?.skuId === _ || (0, u.U9)(I, _)) && null == v,
                z = d.intl.string(d.t.pj0XBN);
            S &&
                (null != A
                    ? (z = (0, l.FY)({
                          intervalType: A?.subscriptionTrial?.interval,
                          intervalCount: A?.subscriptionTrial?.intervalCount,
                      }))
                    : null != I && (z = d.intl.formatToPlainString(d.t.bkQ4bH, { percent: I.discount.amount })));
            let M = "beta" === y ? "beta" : null != A ? "free_trial" : y;
            return (0, e.jsx)(c.A, {
                subscriptionTier: _,
                onSubscribeModalClose: T,
                premiumModalAnalyticsLocation: w,
                children: (i) => {
                    let { onClick: l } = i;
                    return (0, e.jsx)(a.k, {
                        title: n,
                        subtitle: b,
                        graphic: k,
                        gradientColor: x,
                        transitionState: t,
                        onClose: async () => await C(),
                        actions: [
                            { text: m, variant: "secondary", size: "md", onClick: h },
                            {
                                text: z,
                                variant: "expressive",
                                size: "md",
                                onClick: async (i) => {
                                    (null == T && (await C()), l(i));
                                },
                                icon: r.NitroWheelIcon,
                            },
                        ],
                        ...(null !== M && { badge: { type: M, variant: g } }),
                        children: j,
                    });
                },
            });
        },
    },
);
