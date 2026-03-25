n.d(t, { H: () => m, L: () => _ });
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
    h = n(796878),
    _ =
        (((i = {}).NONE = "none"),
        (i.CHURN_DISCOUNT = "churn_discount"),
        (i.PREMIUM_GROUP = "premium_group"),
        (i.PREMIUM_GROUP_TOOLTIP = "premium_group_tooltip"),
        (i.ORBS_UPSELL = "orbs_upsell"),
        (i.ORBS_INTRO = "orbs_intro"),
        (i.ORBS_DROP = "orbs_drop"),
        (i.TOOLTIP = "tooltip"),
        i);
function m(e) {
    let {
            children: t,
            popoverType: n,
            targetElementRef: i,
            churnDiscountOffer: _,
            premiumSubscription: m,
            receivesUpdatedUpsellPopover: g,
            orbsRewardAmount: p,
            lastGrantedRewardAmount: E,
            dismissCoachMark: I,
            dismissOrbsDropPopover: f,
        } = e,
        C = (0, l.useHasAnyModalOpen)();
    switch (n) {
        case "churn_discount":
            if (null != _ && null != m)
                return (0, a.jsx)(A.A, {
                    targetElementRef: i,
                    discountOffer: _,
                    premiumSubscription: m,
                    dismissCoachmark: I,
                    children: t,
                });
            break;
        case "premium_group":
            return (0, a.jsx)(r.p, { targetElementRef: i, dismissPopover: I, children: t });
        case "premium_group_tooltip":
            return (0, a.jsx)(s.A, { targetElementRef: i, children: t });
        case "orbs_upsell":
            if (g) return (0, a.jsx)(u.A, { targetElementRef: i, dismissPopover: I, numOrbs: p, children: t });
            return (0, a.jsx)(c.A, { targetElementRef: i, dismissPopover: I, children: t });
        case "orbs_intro":
            return (0, a.jsx)(o.A, { targetElementRef: i, dismissPopover: I, children: t });
        case "orbs_drop":
            if (null != E && !C)
                return (0, a.jsx)(d.A, {
                    targetElementRef: i,
                    dismissPopover: f,
                    lastGrantedRewardAmount: E,
                    children: t,
                });
            break;
        case "tooltip":
            return (0, a.jsx)(h.A, { children: t });
    }
    return t;
}
