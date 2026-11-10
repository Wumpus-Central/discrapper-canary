var e = n(477900);
n(582128);
var r = n(403581),
    l = n(772707),
    a = n(448645),
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
                    secondaryCTA: x,
                    gradientColor: g = "nitro-pink",
                    badgeType: y = null,
                    subscriptionTier: m = p.pe.TIER_2,
                    hidePremiumOfferUpsell: w,
                    children: _,
                } = i,
                f = (0, o.V)(),
                j = (0, s.O)(),
                I = !w && (f?.subscriptionTrial?.skuId === m || (0, u.U9)(j, m)) && null == v,
                S = d.intl.string(d.t.pj0XBN);
            I &&
                (null != f
                    ? (S = (0, a.FY)({
                          intervalType: f?.subscriptionTrial?.interval,
                          intervalCount: f?.subscriptionTrial?.intervalCount,
                      }))
                    : null != j && (S = d.intl.formatToPlainString(d.t.bkQ4bH, { percent: j.discount.amount })));
            let z = "beta" === y ? "beta" : null != f ? "free_trial" : y;
            return (0, e.jsx)(c.A, {
                subscriptionTier: m,
                onSubscribeModalClose: T,
                children: (i) => {
                    let { onClick: a } = i;
                    return (0, e.jsx)(l.k, {
                        title: n,
                        subtitle: b,
                        graphic: k,
                        gradientColor: g,
                        transitionState: t,
                        onClose: async () => await C(),
                        actions: [
                            { text: x, variant: "secondary", size: "md", onClick: h },
                            {
                                text: S,
                                variant: "expressive",
                                size: "md",
                                onClick: async (i) => {
                                    (null == T && (await C()), a(i));
                                },
                                icon: r.NitroWheelIcon,
                            },
                        ],
                        ...(null !== z && { badge: { type: z, variant: "expressive" } }),
                        children: _,
                    });
                },
            });
        },
    },
);
