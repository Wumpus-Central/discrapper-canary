"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(403581),
    s = n(772707),
    a = n(927578),
    o = n(422936),
    l = n(234419),
    u = n(783420),
    c = n(511484),
    d = n(788868),
    _ = n(985018);
let f = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: f,
            graphic: p,
            guildBoostProps: h,
            onClose: E,
            onSecondaryClick: m,
            secondaryCTA: g,
            badgeType: A = null,
            subscriptionTier: I = d.pe.TIER_2,
            hidePremiumOfferUpsell: T,
            children: S,
        } = e,
        y = (0, l.V)(),
        N = (0, o.O)(),
        v = !T && (y?.subscription_trial?.sku_id === I || (0, c.U9)(N, I)) && null == h,
        C = _.intl.string(_.t.pj0XBN);
    v &&
        (null != y
            ? (C = (0, a.FY)({
                  intervalType: y?.subscription_trial?.interval,
                  intervalCount: y?.subscription_trial?.interval_count,
              }))
            : null != N && (C = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: N.discount.amount })));
    let O = null != y ? "free_trial" : A;
    return (0, r.jsx)(u.A, {
        subscriptionTier: I,
        children: (e) => {
            let { onClick: a } = e;
            return (0, r.jsx)(s.k, {
                title: n,
                subtitle: f,
                graphic: p,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await E(),
                actions: [
                    { text: g, variant: "secondary", size: "md", onClick: m },
                    {
                        text: C,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await E(), a(e);
                        },
                        icon: i.t,
                    },
                ],
                ...(null !== O && { badge: { type: O, variant: "expressive" } }),
                children: S,
            });
        },
    });
};
