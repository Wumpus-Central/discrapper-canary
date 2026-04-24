n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var i = n(403581),
    l = n(772707),
    r = n(927578),
    o = n(422936),
    s = n(234419),
    c = n(783420),
    d = n(511484),
    u = n(788868),
    _ = n(985018);
let p = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: p,
            graphic: f,
            guildBoostProps: h,
            onClose: m,
            onSecondaryClick: g,
            secondaryCTA: b,
            badgeType: A = null,
            subscriptionTier: E = u.pe.TIER_2,
            hidePremiumOfferUpsell: v,
            children: I,
        } = e,
        y = (0, s.V)(),
        S = (0, o.O)(),
        C = !v && (y?.subscription_trial?.sku_id === E || (0, d.U9)(S, E)) && null == h,
        T = _.intl.string(_.t.pj0XBN);
    C &&
        (null != y
            ? (T = (0, r.FY)({
                  intervalType: y?.subscription_trial?.interval,
                  intervalCount: y?.subscription_trial?.interval_count,
              }))
            : null != S && (T = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: S.discount.amount })));
    let x = null != y ? "free_trial" : A;
    return (0, a.jsx)(c.A, {
        subscriptionTier: E,
        children: (e) => {
            let { onClick: r } = e;
            return (0, a.jsx)(l.k, {
                title: n,
                subtitle: p,
                graphic: f,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await m(),
                actions: [
                    { text: b, variant: "secondary", size: "md", onClick: g },
                    {
                        text: T,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await m(), r(e);
                        },
                        icon: i.t,
                    },
                ],
                ...(null !== x && { badge: { type: x, variant: "expressive" } }),
                children: I,
            });
        },
    });
};
