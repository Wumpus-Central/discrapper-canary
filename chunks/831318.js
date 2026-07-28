"use strict";
n.d(t, { A: () => E });
var i = n(477900);
n(582128);
var r = n(403581),
    a = n(772707),
    s = n(428262),
    l = n(422936),
    o = n(732280),
    d = n(783420),
    c = n(410516),
    u = n(202541),
    _ = n(375708);
let E = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: E,
            graphic: A,
            guildBoostProps: h,
            onClose: I,
            onSecondaryClick: f,
            secondaryCTA: p,
            badgeType: T = null,
            subscriptionTier: m = u.pe.TIER_2,
            hidePremiumOfferUpsell: g,
            children: S,
        } = e,
        N = (0, o.V)(),
        C = (0, l.O)(),
        O = !g && (N?.subscription_trial?.sku_id === m || (0, c.U9)(C, m)) && null == h,
        R = _.intl.string(_.t.pj0XBN);
    O &&
        (null != N
            ? (R = (0, s.FY)({
                  intervalType: N?.subscription_trial?.interval,
                  intervalCount: N?.subscription_trial?.interval_count,
              }))
            : null != C && (R = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: C.discount.amount })));
    let L = "beta" === T ? "beta" : null != N ? "free_trial" : T;
    return (0, i.jsx)(d.A, {
        subscriptionTier: m,
        children: (e) => {
            let { onClick: s } = e;
            return (0, i.jsx)(a.k, {
                title: n,
                subtitle: E,
                graphic: A,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await I(),
                actions: [
                    { text: p, variant: "secondary", size: "md", onClick: f },
                    {
                        text: R,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await I(), s(e);
                        },
                        icon: r.t,
                    },
                ],
                ...(null !== L && { badge: { type: L, variant: "expressive" } }),
                children: S,
            });
        },
    });
};
