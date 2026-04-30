"use strict";
n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(403581),
    s = n(772707),
    a = n(927578),
    o = n(422936),
    l = n(234419),
    u = n(783420),
    c = n(511484),
    d = n(788868),
    _ = n(375708);
let f = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: f,
            graphic: h,
            guildBoostProps: p,
            onClose: E,
            onSecondaryClick: m,
            secondaryCTA: g,
            badgeType: A = null,
            subscriptionTier: I = d.pe.TIER_2,
            hidePremiumOfferUpsell: T,
            children: S,
        } = e,
        N = (0, l.V)(),
        y = (0, o.O)(),
        C = !T && (N?.subscription_trial?.sku_id === I || (0, c.U9)(y, I)) && null == p,
        v = _.intl.string(_.t.pj0XBN);
    C &&
        (null != N
            ? (v = (0, a.FY)({
                  intervalType: N?.subscription_trial?.interval,
                  intervalCount: N?.subscription_trial?.interval_count,
              }))
            : null != y && (v = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: y.discount.amount })));
    let O = null != N ? "free_trial" : A;
    return (0, i.jsx)(u.A, {
        subscriptionTier: I,
        children: (e) => {
            let { onClick: a } = e;
            return (0, i.jsx)(s.k, {
                title: n,
                subtitle: f,
                graphic: h,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await E(),
                actions: [
                    { text: g, variant: "secondary", size: "md", onClick: m },
                    {
                        text: v,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await E(), a(e);
                        },
                        icon: r.t,
                    },
                ],
                ...(null !== O && { badge: { type: O, variant: "expressive" } }),
                children: S,
            });
        },
    });
};
