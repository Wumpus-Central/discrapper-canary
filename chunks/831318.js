a.d(t, { A: () => p });
var n = a(627968);
a(64700);
var r = a(403581),
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
            children: E,
        } = e,
        y = (0, o.V)(),
        I = (0, s.O)(),
        S = !A && (y?.subscription_trial?.sku_id === v || (0, d.U9)(I, v)) && null == f,
        j = h.intl.string(h.t.pj0XBN);
    S &&
        (null != y
            ? (j = (0, i.FY)({
                  intervalType: y?.subscription_trial?.interval,
                  intervalCount: y?.subscription_trial?.interval_count,
              }))
            : null != I && (j = h.intl.formatToPlainString(h.t.bkQ4bH, { percent: I.discount.amount })));
    let C = null != y ? "free_trial" : x;
    return (0, n.jsx)(c.A, {
        subscriptionTier: v,
        children: (e) => {
            let { onClick: i } = e;
            return (0, n.jsx)(l.k, {
                title: a,
                subtitle: p,
                graphic: m,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await b(),
                actions: [
                    { text: g, variant: "secondary", size: "md", onClick: _ },
                    {
                        text: j,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await b(), i(e);
                        },
                        icon: r.t,
                    },
                ],
                ...(null !== C && { badge: { type: C, variant: "expressive" } }),
                children: E,
            });
        },
    });
};
