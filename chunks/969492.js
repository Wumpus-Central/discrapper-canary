n.d(t, { H: () => N, L: () => T });
var i,
    r = n(627968);
n(64700);
var a = n(989349),
    l = n.n(a),
    s = n(192308),
    o = n(834269),
    d = n(333639),
    c = n(236697),
    u = n(768569),
    A = n(962915),
    h = n(164554),
    _ = n(305498),
    m = n(909255),
    p = n(374079),
    g = n(328717),
    E = n(52416),
    I = n(796878),
    f = n(858191),
    C = n(788868),
    T =
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
function N(e) {
    let {
        children: t,
        popoverType: n,
        targetElementRef: i,
        churnDiscountOffer: a,
        premiumSubscription: T,
        receivesUpdatedUpsellPopover: N,
        orbsRewardAmount: S,
        lastGrantedRewardAmount: x,
        dismissCoachMark: v,
        dismissOrbsDropPopover: b,
        dismissMarketingPopover: y,
        orbMultiplier: O,
        fpCurrentEntitlementEndsAt: L,
        trialOffer: R,
    } = e;
    if ((0, s.useHasAnyModalOpen)()) return t;
    switch (n) {
        case "churn_discount":
            if (null != a && null != T)
                return (0, r.jsx)(g.A, {
                    targetElementRef: i,
                    discountOffer: a,
                    premiumSubscription: T,
                    dismissCoachmark: v,
                    children: t,
                });
            break;
        case "premium_group":
            return (0, r.jsx)(u.p, { targetElementRef: i, dismissPopover: v, children: t });
        case "premium_group_tooltip":
            return (0, r.jsx)(A.A, { targetElementRef: i, children: t });
        case "orbs_upsell":
            if (N) return (0, r.jsx)(p.A, { targetElementRef: i, dismissPopover: v, numOrbs: S, children: t });
            return (0, r.jsx)(m.A, { targetElementRef: i, dismissPopover: v, children: t });
        case "orbs_intro":
            return (0, r.jsx)(h.A, { targetElementRef: i, dismissPopover: v, children: t });
        case "orbs_drop":
            if (null != x)
                return (0, r.jsx)(_.A, {
                    targetElementRef: i,
                    dismissPopover: b,
                    lastGrantedRewardAmount: x,
                    children: t,
                });
            break;
        case "reverse_trial": {
            let e = R?.trial_id === C.Tt,
                n = L ?? (R?.expires_at != null ? l()(R?.expires_at) : null);
            if (null != n) return (0, r.jsx)(f.A, { endsAt: n, variant: e ? "followup" : "initial", children: t });
            break;
        }
        case "tooltip":
            return (0, r.jsx)(I.A, { children: t });
        case "marketing_moment_popover":
            return (0, r.jsx)(E.A, { targetElementRef: i, dismissPopover: y, children: t });
        case "l_premium_sub_tooltip":
            return (0, r.jsx)(d.e, { children: t });
        case "l_upsell":
            return (0, r.jsx)(c.u, { targetElementRef: i, dismissPopover: v, children: t });
        case "orbs_multiplier":
            return (0, r.jsx)(o.A, { multiplier: O, children: t });
    }
    return t;
}
