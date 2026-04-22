n.d(t, { A: () => A });
var a = n(627968);
n(64700);
var r = n(403581),
    l = n(772707),
    i = n(927578),
    o = n(422936),
    s = n(234419),
    c = n(783420),
    u = n(511484),
    d = n(788868),
    p = n(985018);
let A = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: A,
            graphic: g,
            guildBoostProps: _,
            onClose: v,
            onSecondaryClick: f,
            secondaryCTA: m,
            badgeType: E = null,
            subscriptionTier: b = d.pe.TIER_2,
            hidePremiumOfferUpsell: R,
            children: h,
        } = e,
        O = (0, s.V)(),
        D = (0, o.O)(),
        T = !R && (O?.subscription_trial?.sku_id === b || (0, u.U9)(D, b)) && null == _,
        I = p.intl.string(p.t.pj0XBN);
    T &&
        (null != O
            ? (I = (0, i.FY)({
                  intervalType: O?.subscription_trial?.interval,
                  intervalCount: O?.subscription_trial?.interval_count,
              }))
            : null != D && (I = p.intl.formatToPlainString(p.t.bkQ4bH, { percent: D.discount.amount })));
    let N = null != O ? "free_trial" : E;
    return (0, a.jsx)(c.A, {
        subscriptionTier: b,
        children: (e) => {
            let { onClick: i } = e;
            return (0, a.jsx)(l.k, {
                title: n,
                subtitle: A,
                graphic: g,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await v(),
                actions: [
                    { text: m, variant: "secondary", size: "md", onClick: f },
                    {
                        text: I,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await v(), i(e);
                        },
                        icon: r.t,
                    },
                ],
                ...(null !== N && { badge: { type: N, variant: "expressive" } }),
                children: h,
            });
        },
    });
};
