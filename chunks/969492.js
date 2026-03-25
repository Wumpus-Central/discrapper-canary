n.d(t, { H: () => g, L: () => m });
var i,
    a = n(627968);
n(64700);
var l = n(192308),
    r = n(768569),
    s = n(962915),
    o = n(164554),
    d = n(305498),
    c = n(909255),
    u = n(374079),
    A = n(328717),
    h = n(52416),
    _ = n(796878),
    m =
        (((i = {}).NONE = "none"),
        (i.CHURN_DISCOUNT = "churn_discount"),
        (i.PREMIUM_GROUP = "premium_group"),
        (i.PREMIUM_GROUP_TOOLTIP = "premium_group_tooltip"),
        (i.ORBS_UPSELL = "orbs_upsell"),
        (i.ORBS_INTRO = "orbs_intro"),
        (i.ORBS_DROP = "orbs_drop"),
        (i.TOOLTIP = "tooltip"),
        (i.MARKETING_MOMENT_POPOVER = "marketing_moment_popover"),
        i);
function g(e) {
    let {
        children: t,
        popoverType: n,
        targetElementRef: i,
        churnDiscountOffer: m,
        premiumSubscription: g,
        receivesUpdatedUpsellPopover: p,
        orbsRewardAmount: E,
        lastGrantedRewardAmount: I,
        dismissCoachMark: f,
        dismissOrbsDropPopover: C,
        dismissMarketingPopover: T,
    } = e;
    if ((0, l.useHasAnyModalOpen)()) return t;
    switch (n) {
        case "churn_discount":
            if (null != m && null != g)
                return (0, a.jsx)(A.A, {
                    targetElementRef: i,
                    discountOffer: m,
                    premiumSubscription: g,
                    dismissCoachmark: f,
                    children: t,
                });
            break;
        case "premium_group":
            return (0, a.jsx)(r.p, { targetElementRef: i, dismissPopover: f, children: t });
        case "premium_group_tooltip":
            return (0, a.jsx)(s.A, { targetElementRef: i, children: t });
        case "orbs_upsell":
            if (p) return (0, a.jsx)(u.A, { targetElementRef: i, dismissPopover: f, numOrbs: E, children: t });
            return (0, a.jsx)(c.A, { targetElementRef: i, dismissPopover: f, children: t });
        case "orbs_intro":
            return (0, a.jsx)(o.A, { targetElementRef: i, dismissPopover: f, children: t });
        case "orbs_drop":
            if (null != I)
                return (0, a.jsx)(d.A, {
                    targetElementRef: i,
                    dismissPopover: C,
                    lastGrantedRewardAmount: I,
                    children: t,
                });
            break;
        case "tooltip":
            return (0, a.jsx)(_.A, { children: t });
        case "marketing_moment_popover":
            return (0, a.jsx)(h.A, { targetElementRef: i, dismissPopover: T, children: t });
    }
    return t;
}
