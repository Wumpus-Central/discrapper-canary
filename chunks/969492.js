n.d(t, { H: () => E, L: () => p });
var i,
    a = n(627968);
n(64700);
var l = n(192308),
    r = n(333639),
    s = n(236697),
    o = n(768569),
    d = n(962915),
    c = n(164554),
    u = n(305498),
    A = n(909255),
    h = n(374079),
    _ = n(328717),
    m = n(52416),
    g = n(796878),
    p =
        (((i = {}).NONE = "none"),
        (i.CHURN_DISCOUNT = "churn_discount"),
        (i.PREMIUM_GROUP = "premium_group"),
        (i.PREMIUM_GROUP_TOOLTIP = "premium_group_tooltip"),
        (i.ORBS_UPSELL = "orbs_upsell"),
        (i.ORBS_INTRO = "orbs_intro"),
        (i.ORBS_DROP = "orbs_drop"),
        (i.TOOLTIP = "tooltip"),
        (i.MARKETING_MOMENT_POPOVER = "marketing_moment_popover"),
        (i.L_PREMIUM_SUB_TOOLTIP = "l_premium_sub_tooltip"),
        (i.L_UPSELL = "l_upsell"),
        i);
function E(e) {
    let {
        children: t,
        popoverType: n,
        targetElementRef: i,
        churnDiscountOffer: p,
        premiumSubscription: E,
        receivesUpdatedUpsellPopover: I,
        orbsRewardAmount: f,
        lastGrantedRewardAmount: C,
        dismissCoachMark: T,
        dismissOrbsDropPopover: N,
        dismissMarketingPopover: S,
    } = e;
    if ((0, l.useHasAnyModalOpen)()) return t;
    switch (n) {
        case "churn_discount":
            if (null != p && null != E)
                return (0, a.jsx)(_.A, {
                    targetElementRef: i,
                    discountOffer: p,
                    premiumSubscription: E,
                    dismissCoachmark: T,
                    children: t,
                });
            break;
        case "premium_group":
            return (0, a.jsx)(o.p, { targetElementRef: i, dismissPopover: T, children: t });
        case "premium_group_tooltip":
            return (0, a.jsx)(d.A, { targetElementRef: i, children: t });
        case "orbs_upsell":
            if (I) return (0, a.jsx)(h.A, { targetElementRef: i, dismissPopover: T, numOrbs: f, children: t });
            return (0, a.jsx)(A.A, { targetElementRef: i, dismissPopover: T, children: t });
        case "orbs_intro":
            return (0, a.jsx)(c.A, { targetElementRef: i, dismissPopover: T, children: t });
        case "orbs_drop":
            if (null != C)
                return (0, a.jsx)(u.A, {
                    targetElementRef: i,
                    dismissPopover: N,
                    lastGrantedRewardAmount: C,
                    children: t,
                });
            break;
        case "tooltip":
            return (0, a.jsx)(g.A, { children: t });
        case "marketing_moment_popover":
            return (0, a.jsx)(m.A, { targetElementRef: i, dismissPopover: S, children: t });
        case "l_premium_sub_tooltip":
            return (0, a.jsx)(r.e, { children: t });
        case "l_upsell":
            return (0, a.jsx)(s.u, { targetElementRef: i, dismissPopover: T, children: t });
    }
    return t;
}
