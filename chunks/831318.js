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
            gradientColor: x = "nitro-pink",
            badgeType: g = null,
            subscriptionTier: y = p.pe.TIER_2,
            hidePremiumOfferUpsell: m,
            children: w,
        } = t,
        _ = (0, o.V)(),
        f = (0, s.O)(),
        j = !m && (_?.subscriptionTrial?.skuId === y || (0, u.U9)(f, y)) && null == v,
        z = d.intl.string(d.t.pj0XBN);
    j &&
        (null != _
            ? (z = (0, l.FY)({
                  intervalType: _?.subscriptionTrial?.interval,
                  intervalCount: _?.subscriptionTrial?.intervalCount,
              }))
            : null != f && (z = d.intl.formatToPlainString(d.t.bkQ4bH, { percent: f.discount.amount })));
    let A = "beta" === g ? "beta" : null != _ ? "free_trial" : g;
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
                onClose: async () => await C(),
                actions: [
                    { text: T, variant: "secondary", size: "md", onClick: h },
                    {
                        text: z,
                        variant: "expressive",
                        size: "md",
                        onClick: async (t) => {
                            await C(), l(t);
                        },
                        icon: r.t,
                    },
                ],
                ...(null !== A && { badge: { type: A, variant: "expressive" } }),
                children: w,
            });
        },
    });
};
