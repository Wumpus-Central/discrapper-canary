"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(403581),
    s = n(772707),
    a = n(428262),
    o = n(422936),
    l = n(234419),
    u = n(783420),
    c = n(410516),
    d = n(788868),
    _ = n(375708);
let h = function (e) {
    let {
            transitionState: t,
            title: n,
            subtitle: h,
            graphic: f,
            guildBoostProps: p,
            onClose: E,
            onSecondaryClick: m,
            secondaryCTA: g,
            badgeType: A = null,
            subscriptionTier: I = d.pe.TIER_2,
            hidePremiumOfferUpsell: T,
            children: S,
        } = e,
        y = (0, l.V)(),
        C = (0, o.O)(),
        N = !T && (y?.subscription_trial?.sku_id === I || (0, c.U9)(C, I)) && null == p,
        v = _.intl.string(_.t.pj0XBN);
    N &&
        (null != y
            ? (v = (0, a.FY)({
                  intervalType: y?.subscription_trial?.interval,
                  intervalCount: y?.subscription_trial?.interval_count,
              }))
            : null != C && (v = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: C.discount.amount })));
    let R = "beta" === A ? "beta" : null != y ? "free_trial" : A;
    return (0, i.jsx)(u.A, {
        subscriptionTier: I,
        children: (e) => {
            let { onClick: a } = e;
            return (0, i.jsx)(s.k, {
                title: n,
                subtitle: h,
                graphic: f,
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
                ...(null !== R && { badge: { type: R, variant: "expressive" } }),
                children: S,
            });
        },
    });
};
