n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(403581),
    a = n(772707),
    s = n(927578),
    _ = n(422936),
    l = n(234419),
    o = n(783420),
    E = n(511484),
    d = n(788868),
    c = n(985018);
let u = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: u,
            graphic: I,
            guildBoostProps: A,
            onClose: T,
            onSecondaryClick: S,
            secondaryCTA: N,
            badgeType: O = null,
            subscriptionTier: R = d.pe.TIER_2,
            hidePremiumOfferUpsell: f,
            children: C,
        } = e,
        p = (0, l.V)(),
        m = (0, _.O)(),
        L = !f && (p?.subscription_trial?.sku_id === R || (0, E.U9)(m, R)) && null == A,
        D = c.intl.string(c.t.pj0XBN);
    L &&
        (null != p
            ? (D = (0, s.FY)({
                  intervalType: p?.subscription_trial?.interval,
                  intervalCount: p?.subscription_trial?.interval_count,
              }))
            : null != m && (D = c.intl.formatToPlainString(c.t.bkQ4bH, { percent: m.discount.amount })));
    let h = null != p ? "free_trial" : O;
    return (0, i.jsx)(o.A, {
        subscriptionTier: R,
        children: (e) => {
            let { onClick: s } = e;
            return (0, i.jsx)(a.k, {
                title: n,
                subtitle: u,
                graphic: I,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await T(),
                actions: [
                    { text: N, variant: "secondary", size: "md", onClick: S },
                    {
                        text: D,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await T(), s(e);
                        },
                        icon: r.t,
                    },
                ],
                ...(null !== h && { badge: { type: h, variant: "expressive" } }),
                children: C,
            });
        },
    });
};
