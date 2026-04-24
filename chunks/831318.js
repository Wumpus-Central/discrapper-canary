"use strict";
n.d(t, { A: () => p });
var a = n(627968);
n(64700);
var r = n(403581),
    i = n(772707),
    l = n(927578),
    s = n(422936),
    o = n(234419),
    c = n(783420),
    d = n(511484),
    u = n(788868),
    _ = n(985018);
let p = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: p,
            graphic: m,
            guildBoostProps: h,
            onClose: f,
            onSecondaryClick: g,
            secondaryCTA: b,
            badgeType: v = null,
            subscriptionTier: A = u.pe.TIER_2,
            hidePremiumOfferUpsell: x,
            children: E,
        } = e,
        T = (0, o.V)(),
        S = (0, s.O)(),
        C = !x && (T?.subscription_trial?.sku_id === A || (0, d.U9)(S, A)) && null == h,
        I = _.intl.string(_.t.pj0XBN);
    C &&
        (null != T
            ? (I = (0, l.FY)({
                  intervalType: T?.subscription_trial?.interval,
                  intervalCount: T?.subscription_trial?.interval_count,
              }))
            : null != S && (I = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: S.discount.amount })));
    let y = null != T ? "free_trial" : v;
    return (0, a.jsx)(c.A, {
        subscriptionTier: A,
        children: (e) => {
            let { onClick: l } = e;
            return (0, a.jsx)(i.k, {
                title: n,
                subtitle: p,
                graphic: m,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await f(),
                actions: [
                    { text: b, variant: "secondary", size: "md", onClick: g },
                    {
                        text: I,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await f(), l(e);
                        },
                        icon: r.t,
                    },
                ],
                ...(null !== y && { badge: { type: y, variant: "expressive" } }),
                children: E,
            });
        },
    });
};
