n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var a = n(403581),
    r = n(772707),
    s = n(927578),
    l = n(422936),
    o = n(234419),
    d = n(783420),
    c = n(511484),
    _ = n(788868),
    E = n(985018);
let u = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: u,
            graphic: A,
            guildBoostProps: I,
            onClose: T,
            onSecondaryClick: h,
            secondaryCTA: S,
            badgeType: N = null,
            subscriptionTier: f = _.pe.TIER_2,
            hidePremiumOfferUpsell: p,
            children: m,
        } = e,
        O = (0, o.V)(),
        C = (0, l.O)(),
        R = !p && (O?.subscription_trial?.sku_id === f || (0, c.U9)(C, f)) && null == I,
        g = E.intl.string(E.t.pj0XBN);
    R &&
        (null != O
            ? (g = (0, s.FY)({
                  intervalType: O?.subscription_trial?.interval,
                  intervalCount: O?.subscription_trial?.interval_count,
              }))
            : null != C && (g = E.intl.formatToPlainString(E.t.bkQ4bH, { percent: C.discount.amount })));
    let L = null != O ? "free_trial" : N;
    return (0, i.jsx)(d.A, {
        subscriptionTier: f,
        children: (e) => {
            let { onClick: s } = e;
            return (0, i.jsx)(r.k, {
                title: n,
                subtitle: u,
                graphic: A,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await T(),
                actions: [
                    { text: S, variant: "secondary", size: "md", onClick: h },
                    {
                        text: g,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await T(), s(e);
                        },
                        icon: a.t,
                    },
                ],
                ...(null !== L && { badge: { type: L, variant: "expressive" } }),
                children: m,
            });
        },
    });
};
