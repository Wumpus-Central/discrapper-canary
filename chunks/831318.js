"use strict";
r.d(t, { A: () => p });
var n = r(627968);
r(64700);
var i = r(403581),
    a = r(772707),
    s = r(927578),
    l = r(422936),
    o = r(234419),
    c = r(783420),
    d = r(511484),
    u = r(788868),
    _ = r(985018);
let p = function (e) {
    let {
            transitionState: t,
            title: r,
            subtitle: p,
            graphic: f,
            guildBoostProps: m,
            onClose: h,
            onSecondaryClick: g,
            secondaryCTA: b,
            badgeType: A = null,
            subscriptionTier: E = u.pe.TIER_2,
            hidePremiumOfferUpsell: v,
            children: y,
        } = e,
        I = (0, o.V)(),
        S = (0, l.O)(),
        x = !v && (I?.subscription_trial?.sku_id === E || (0, d.U9)(S, E)) && null == m,
        T = _.intl.string(_.t.pj0XBN);
    x &&
        (null != I
            ? (T = (0, s.FY)({
                  intervalType: I?.subscription_trial?.interval,
                  intervalCount: I?.subscription_trial?.interval_count,
              }))
            : null != S && (T = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: S.discount.amount })));
    let C = null != I ? "free_trial" : A;
    return (0, n.jsx)(c.A, {
        subscriptionTier: E,
        children: (e) => {
            let { onClick: s } = e;
            return (0, n.jsx)(a.k, {
                title: r,
                subtitle: p,
                graphic: f,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await h(),
                actions: [
                    { text: b, variant: "secondary", size: "md", onClick: g },
                    {
                        text: T,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await h(), s(e);
                        },
                        icon: i.t,
                    },
                ],
                ...(null !== C && { badge: { type: C, variant: "expressive" } }),
                children: y,
            });
        },
    });
};
