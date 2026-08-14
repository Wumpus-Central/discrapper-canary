n.d(i, { A: () => b });
var e = n(477900);
n(582128);
var r = n(403581),
    a = n(772707),
    l = n(158045),
    s = n(724651),
    o = n(732280),
    c = n(783420),
    u = n(511484),
    p = n(202541),
    d = n(375708);
let b = function (t) {
    let {
            transitionState: i,
            title: n,
            subtitle: b,
            graphic: k,
            guildBoostProps: v,
            onClose: C,
            onSecondaryClick: h,
            secondaryCTA: T,
            badgeType: x = null,
            subscriptionTier: g = p.pe.TIER_2,
            hidePremiumOfferUpsell: y,
            children: m,
        } = t,
        w = (0, o.V)(),
        _ = (0, s.O)(),
        f = !y && (w?.subscriptionTrial?.skuId === g || (0, u.U9)(_, g)) && null == v,
        j = d.intl.string(d.t.pj0XBN);
    f &&
        (null != w
            ? (j = (0, l.FY)({
                  intervalType: w?.subscriptionTrial?.interval,
                  intervalCount: w?.subscriptionTrial?.intervalCount,
              }))
            : null != _ && (j = d.intl.formatToPlainString(d.t.bkQ4bH, { percent: _.discount.amount })));
    let z = "beta" === x ? "beta" : null != w ? "free_trial" : x;
    return (0, e.jsx)(c.A, {
        subscriptionTier: g,
        children: (t) => {
            let { onClick: l } = t;
            return (0, e.jsx)(a.k, {
                title: n,
                subtitle: b,
                graphic: k,
                gradientColor: "nitro-pink",
                transitionState: i,
                onClose: async () => await C(),
                actions: [
                    { text: T, variant: "secondary", size: "md", onClick: h },
                    {
                        text: j,
                        variant: "expressive",
                        size: "md",
                        onClick: async (t) => {
                            await C(), l(t);
                        },
                        icon: r.t,
                    },
                ],
                ...(null !== z && { badge: { type: z, variant: "expressive" } }),
                children: m,
            });
        },
    });
};
