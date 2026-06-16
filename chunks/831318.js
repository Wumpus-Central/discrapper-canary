n.d(i, { A: () => b });
var e = n(627968);
n(64700);
var r = n(403581),
    a = n(772707),
    l = n(428262),
    s = n(422936),
    o = n(234419),
    c = n(783420),
    u = n(410516),
    p = n(788868),
    d = n(375708);
let b = function (t) {
    let {
            transitionState: i,
            title: n,
            subtitle: b,
            graphic: k,
            guildBoostProps: v,
            onClose: _,
            onSecondaryClick: h,
            secondaryCTA: C,
            badgeType: x = null,
            subscriptionTier: g = p.pe.TIER_2,
            hidePremiumOfferUpsell: y,
            children: m,
        } = t,
        w = (0, o.V)(),
        T = (0, s.O)(),
        f = !y && (w?.subscription_trial?.sku_id === g || (0, u.U9)(T, g)) && null == v,
        j = d.intl.string(d.t.pj0XBN);
    f &&
        (null != w
            ? (j = (0, l.FY)({
                  intervalType: w?.subscription_trial?.interval,
                  intervalCount: w?.subscription_trial?.interval_count,
              }))
            : null != T && (j = d.intl.formatToPlainString(d.t.bkQ4bH, { percent: T.discount.amount })));
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
                onClose: async () => await _(),
                actions: [
                    { text: C, variant: "secondary", size: "md", onClick: h },
                    {
                        text: j,
                        variant: "expressive",
                        size: "md",
                        onClick: async (t) => {
                            await _(), l(t);
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
