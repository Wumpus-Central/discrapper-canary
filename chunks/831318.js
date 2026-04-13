"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(934551),
    s = n(397927),
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
            onClose: m,
            onSecondaryClick: E,
            secondaryCTA: g,
            badgeType: A = null,
            subscriptionTier: I = d.pe.TIER_2,
            hidePremiumOfferUpsell: T,
            children: S,
        } = e,
        y = null != h,
        v = (0, l.V)(),
        N = (0, o.O)(),
        C = !T && (v?.subscription_trial?.sku_id === I || (0, c.U9)(N, I)) && !y,
        R = _.intl.string(_.t.pj0XBN);
    C &&
        (null != v
            ? (R = (0, a.FY)({
                  intervalType: v?.subscription_trial?.interval,
                  intervalCount: v?.subscription_trial?.interval_count,
              }))
            : null != N && (R = _.intl.formatToPlainString(_.t.bkQ4bH, { percent: N.discount.amount })));
    let O = null != v ? "free_trial" : A;
    return (0, r.jsx)(u.A, {
        subscriptionTier: I,
        children: (e) => {
            let { onClick: a } = e;
            return (0, r.jsx)(s.kpP, {
                title: n,
                subtitle: f,
                graphic: p,
                gradientColor: "nitro-pink",
                transitionState: t,
                onClose: async () => await m(),
                actions: [
                    { text: g, variant: "secondary", size: "md", onClick: E },
                    {
                        text: R,
                        variant: "expressive",
                        size: "md",
                        onClick: async (e) => {
                            await m(), a(e);
                        },
                        icon: i.NitroWheelIcon,
                    },
                ],
                ...(null !== O && { badge: { type: O, variant: "expressive" } }),
                children: S,
            });
        },
    });
};
