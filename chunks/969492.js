a.d(l, { H: () => Z, L: () => M });
var t,
    s = a(627968);
a(64700);
var i = a(989349),
    n = a.n(i),
    c = a(192308),
    h = a(834269),
    r = a(333639),
    o = a(236697),
    d = a(768569),
    v = a(962915),
    g = a(164554),
    p = a(305498),
    m = a(909255),
    f = a(374079),
    w = a(328717),
    x = a(52416),
    u = a(796878),
    A = a(858191),
    I = a(788868),
    M =
        (((t = {}).NONE = "none"),
        (t.CHURN_DISCOUNT = "churn_discount"),
        (t.PREMIUM_GROUP = "premium_group"),
        (t.PREMIUM_GROUP_TOOLTIP = "premium_group_tooltip"),
        (t.ORBS_UPSELL = "orbs_upsell"),
        (t.ORBS_INTRO = "orbs_intro"),
        (t.ORBS_DROP = "orbs_drop"),
        (t.TOOLTIP = "tooltip"),
        (t.MARKETING_MOMENT_POPOVER = "marketing_moment_popover"),
        (t.L_PREMIUM_SUB_TOOLTIP = "l_premium_sub_tooltip"),
        (t.L_UPSELL = "l_upsell"),
        (t.REVERSE_TRIAL = "reverse_trial"),
        (t.ORBS_MULTIPLIER = "orbs_multiplier"),
        t);
function Z(e) {
    let {
        children: l,
        popoverType: a,
        targetElementRef: t,
        churnDiscountOffer: i,
        premiumSubscription: M,
        receivesUpdatedUpsellPopover: Z,
        orbsRewardAmount: _,
        lastGrantedRewardAmount: E,
        dismissCoachMark: j,
        dismissOrbsDropPopover: C,
        dismissMarketingPopover: T,
        orbMultiplier: N,
        fpCurrentEntitlementEndsAt: R,
        trialOffer: V,
    } = e;
    if ((0, c.useHasAnyModalOpen)()) return l;
    switch (a) {
        case "churn_discount":
            if (null != i && null != M)
                return (0, s.jsx)(w.A, {
                    targetElementRef: t,
                    discountOffer: i,
                    premiumSubscription: M,
                    dismissCoachmark: j,
                    children: l,
                });
            break;
        case "premium_group":
            return (0, s.jsx)(d.p, { targetElementRef: t, dismissPopover: j, children: l });
        case "premium_group_tooltip":
            return (0, s.jsx)(v.A, { targetElementRef: t, children: l });
        case "orbs_upsell":
            if (Z) return (0, s.jsx)(f.A, { targetElementRef: t, dismissPopover: j, numOrbs: _, children: l });
            return (0, s.jsx)(m.A, { targetElementRef: t, dismissPopover: j, children: l });
        case "orbs_intro":
            return (0, s.jsx)(g.A, { targetElementRef: t, dismissPopover: j, children: l });
        case "orbs_drop":
            if (null != E)
                return (0, s.jsx)(p.A, {
                    targetElementRef: t,
                    dismissPopover: C,
                    lastGrantedRewardAmount: E,
                    children: l,
                });
            break;
        case "reverse_trial": {
            let e = V?.trial_id === I.Tt,
                a = R ?? (V?.expires_at != null ? n()(V?.expires_at) : null);
            if (null != a) return (0, s.jsx)(A.A, { endsAt: a, variant: e ? "followup" : "initial", children: l });
            break;
        }
        case "tooltip":
            return (0, s.jsx)(u.A, { children: l });
        case "marketing_moment_popover":
            return (0, s.jsx)(x.A, { targetElementRef: t, dismissPopover: T, children: l });
        case "l_premium_sub_tooltip":
            return (0, s.jsx)(r.e, { children: l });
        case "l_upsell":
            return (0, s.jsx)(o.u, { targetElementRef: t, dismissPopover: j, children: l });
        case "orbs_multiplier":
            return (0, s.jsx)(h.A, { multiplier: N, children: l });
    }
    return l;
}
