n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var a = n(403581),
    r = n(772707),
    _ = n(927578),
    s = n(422936),
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
            guildBoostProps: T,
            onClose: A,
            onSecondaryClick: S,
            secondaryCTA: N,
            badgeType: O = null,
            subscriptionTier: R = d.pe.TIER_2,
            hidePremiumOfferUpsell: f,
            children: C,
        } = e,
        p = (0, l.V)(),
        D = (0, s.O)(),
        L = !f && (p?.subscription_trial?.sku_id === R || (0, E.U9)(D, R)) && null == T,
        m = c.intl.string(c.t.pj0XBN);
    L &&
        (null != p
            ? (m = (0, _.FY)({
                  intervalType: p?.subscription_trial?.interval,
                  intervalCount: p?.subscription_trial?.interval_count,
              }))
            : null != D && (m = c.intl.formatToPlainString(c.t.bkQ4bH, { percent: D.discount.amount })));
    let h = null != p ? "free_trial" : O;
    return (0, i.jsx)(o.A, {
        subscriptionTier: R,
        children: (e) => {
            let { onClick: _ } = e;
            return (0, i.jsx)(r.k, {
                title: n,
                subtitle: u,
                graphic: I,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await A(),
                actions: [
                    { text: N, variant: "secondary", size: "md", onClick: S },
                    {
                        text: m,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await A(), _(e);
                        },
                        icon: a.t,
                    },
                ],
                ...(null !== h && { badge: { type: h, variant: "expressive" } }),
                children: C,
            });
        },
    });
};
