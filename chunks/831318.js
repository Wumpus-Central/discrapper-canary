var e = n(477900);
n(582128);
var r = n(403581),
    a = n(772707),
    l = n(722178),
    s = n(423814),
    o = n(77528),
    c = n(783420),
    u = n(511484),
    p = n(682901),
    d = n(792996);
n.d(
    i,
    {},
    {
        A: function (t) {
            let {
                    transitionState: i,
                    title: n,
                    subtitle: b,
                    graphic: k,
                    guildBoostProps: v,
                    onClose: h,
                    onSecondaryClick: C,
                    secondaryCTA: T,
                    gradientColor: x = "nitro-pink",
                    badgeType: g = null,
                    subscriptionTier: y = p.pe.TIER_2,
                    hidePremiumOfferUpsell: m,
                    children: w,
                } = t,
                _ = (0, o.V)(),
                f = (0, s.O)(),
                j = !m && (_?.subscriptionTrial?.skuId === y || (0, u.U9)(f, y)) && null == v,
                I = d.intl.string(d.t.pj0XBN);
            j &&
                (null != _
                    ? (I = (0, l.FY)({
                          intervalType: _?.subscriptionTrial?.interval,
                          intervalCount: _?.subscriptionTrial?.intervalCount,
                      }))
                    : null != f && (I = d.intl.formatToPlainString(d.t.bkQ4bH, { percent: f.discount.amount })));
            let z = "beta" === g ? "beta" : null != _ ? "free_trial" : g;
            return (0, e.jsx)(c.A, {
                subscriptionTier: y,
                children: (t) => {
                    let { onClick: l } = t;
                    return (0, e.jsx)(a.k, {
                        title: n,
                        subtitle: b,
                        graphic: k,
                        gradientColor: x,
                        transitionState: i,
                        onClose: async () => await h(),
                        actions: [
                            { text: T, variant: "secondary", size: "md", onClick: C },
                            {
                                text: I,
                                variant: "expressive",
                                size: "md",
                                onClick: async (t) => {
                                    (await h(), l(t));
                                },
                                icon: r.NitroWheelIcon,
                            },
                        ],
                        ...(null !== z && { badge: { type: z, variant: "expressive" } }),
                        children: w,
                    });
                },
            });
        },
    },
);
