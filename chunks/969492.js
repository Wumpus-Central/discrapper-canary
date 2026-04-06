n.d(t, { H: () => f, L: () => I });
var i,
    r = n(627968);
n(64700);
var a = n(192308),
    l = n(834269),
    s = n(333639),
    o = n(236697),
    d = n(768569),
    c = n(962915),
    u = n(164554),
    A = n(305498),
    h = n(909255),
    _ = n(374079),
    m = n(328717),
    p = n(52416),
    g = n(796878),
    E = n(858191),
    I =
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
        (i.REVERSE_TRIAL = "reverse_trial"),
        (i.ORBS_MULTIPLIER = "orbs_multiplier"),
        i);
function f(e) {
    let {
        children: t,
        popoverType: n,
        targetElementRef: i,
        churnDiscountOffer: I,
        premiumSubscription: f,
        receivesUpdatedUpsellPopover: C,
        orbsRewardAmount: T,
        lastGrantedRewardAmount: N,
        dismissCoachMark: S,
        dismissOrbsDropPopover: x,
        dismissMarketingPopover: v,
        fpEndsAt: b,
        orbMultiplier: y,
    } = e;
    if ((0, a.useHasAnyModalOpen)()) return t;
    switch (n) {
        case "churn_discount":
            if (null != I && null != f)
                return (0, r.jsx)(m.A, {
                    targetElementRef: i,
                    discountOffer: I,
                    premiumSubscription: f,
                    dismissCoachmark: S,
                    children: t,
                });
            break;
        case "premium_group":
            return (0, r.jsx)(d.p, { targetElementRef: i, dismissPopover: S, children: t });
        case "premium_group_tooltip":
            return (0, r.jsx)(c.A, { targetElementRef: i, children: t });
        case "orbs_upsell":
            if (C) return (0, r.jsx)(_.A, { targetElementRef: i, dismissPopover: S, numOrbs: T, children: t });
            return (0, r.jsx)(h.A, { targetElementRef: i, dismissPopover: S, children: t });
        case "orbs_intro":
            return (0, r.jsx)(u.A, { targetElementRef: i, dismissPopover: S, children: t });
        case "orbs_drop":
            if (null != N)
                return (0, r.jsx)(A.A, {
                    targetElementRef: i,
                    dismissPopover: x,
                    lastGrantedRewardAmount: N,
                    children: t,
                });
            break;
        case "reverse_trial":
            if (null != b) return (0, r.jsx)(E.A, { endsAt: b, children: t });
            break;
        case "tooltip":
            return (0, r.jsx)(g.A, { children: t });
        case "marketing_moment_popover":
            return (0, r.jsx)(p.A, { targetElementRef: i, dismissPopover: v, children: t });
        case "l_premium_sub_tooltip":
            return (0, r.jsx)(s.e, { children: t });
        case "l_upsell":
            return (0, r.jsx)(o.u, { targetElementRef: i, dismissPopover: S, children: t });
        case "orbs_multiplier":
            return (0, r.jsx)(l.A, { multiplier: y, children: t });
    }
    return t;
}
