a.d(t, { A: () => p });
var r = a(627968);
a(64700);
var n = a(403581),
    l = a(772707),
    i = a(927578),
    s = a(422936),
    o = a(234419),
    c = a(783420),
    d = a(511484),
    u = a(788868),
    h = a(985018);
let p = function (e) {
    let {
            transitionState: t,
            title: a,
            subtitle: p,
            graphic: m,
            guildBoostProps: f,
            onClose: b,
            onSecondaryClick: _,
            secondaryCTA: g,
            badgeType: x = null,
            subscriptionTier: v = u.pe.TIER_2,
            hidePremiumOfferUpsell: A,
            children: y,
        } = e,
        E = (0, o.V)(),
        I = (0, s.O)(),
        j = !A && (E?.subscription_trial?.sku_id === v || (0, d.U9)(I, v)) && null == f,
        S = h.intl.string(h.t.pj0XBN);
    j &&
        (null != E
            ? (S = (0, i.FY)({
                  intervalType: E?.subscription_trial?.interval,
                  intervalCount: E?.subscription_trial?.interval_count,
              }))
            : null != I && (S = h.intl.formatToPlainString(h.t.bkQ4bH, { percent: I.discount.amount })));
    let C = null != E ? "free_trial" : x;
    return (0, r.jsx)(c.A, {
        subscriptionTier: v,
        children: (e) => {
            let { onClick: i } = e;
            return (0, r.jsx)(l.k, {
                title: a,
                subtitle: p,
                graphic: m,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await b(),
                actions: [
                    { text: g, variant: "secondary", size: "md", onClick: _ },
                    {
                        text: S,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await b(), i(e);
                        },
                        icon: n.t,
                    },
                ],
                ...(null !== C && { badge: { type: C, variant: "expressive" } }),
                children: y,
            });
        },
    });
};
