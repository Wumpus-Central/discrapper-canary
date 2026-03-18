n.d(t, { H: () => _, L: () => h });
var i,
    a = n(627968);
n(64700);
var l = n(192308),
    r = n(768569),
    s = n(164554),
    o = n(305498),
    d = n(909255),
    c = n(374079),
    u = n(328717),
    A = n(796878),
    h =
        (((i = {}).NONE = "none"),
        (i.CHURN_DISCOUNT = "churn_discount"),
        (i.PREMIUM_GROUP = "premium_group"),
        (i.ORBS_UPSELL = "orbs_upsell"),
        (i.ORBS_INTRO = "orbs_intro"),
        (i.ORBS_DROP = "orbs_drop"),
        (i.TOOLTIP = "tooltip"),
        i);
function _(e) {
    let {
            children: t,
            popoverType: n,
            targetElementRef: i,
            churnDiscountOffer: h,
            premiumSubscription: _,
            receivesUpdatedUpsellPopover: m,
            orbsRewardAmount: g,
            lastGrantedRewardAmount: p,
            dismissCoachMark: E,
            dismissOrbsDropPopover: I,
        } = e,
        f = (0, l.useHasAnyModalOpen)();
    switch (n) {
        case "churn_discount":
            if (null != h && null != _)
                return (0, a.jsx)(u.A, {
                    targetElementRef: i,
                    discountOffer: h,
                    premiumSubscription: _,
                    dismissCoachmark: E,
                    children: t,
                });
            break;
        case "premium_group":
            return (0, a.jsx)(r.p, { targetElementRef: i, dismissPopover: E, children: t });
        case "orbs_upsell":
            if (m) return (0, a.jsx)(c.A, { targetElementRef: i, dismissPopover: E, numOrbs: g, children: t });
            return (0, a.jsx)(d.A, { targetElementRef: i, dismissPopover: E, children: t });
        case "orbs_intro":
            return (0, a.jsx)(s.A, { targetElementRef: i, dismissPopover: E, children: t });
        case "orbs_drop":
            if (null != p && !f)
                return (0, a.jsx)(o.A, {
                    targetElementRef: i,
                    dismissPopover: I,
                    lastGrantedRewardAmount: p,
                    children: t,
                });
            break;
        case "tooltip":
            return (0, a.jsx)(A.A, { children: t });
    }
    return t;
}
