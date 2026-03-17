n.d(t, { H: () => h, L: () => A });
var i,
    r = n(627968);
n(64700);
var l = n(768569),
    a = n(164554),
    s = n(305498),
    o = n(909255),
    d = n(374079),
    c = n(328717),
    u = n(796878),
    A =
        (((i = {}).NONE = "none"),
        (i.CHURN_DISCOUNT = "churn_discount"),
        (i.PREMIUM_GROUP = "premium_group"),
        (i.ORBS_UPSELL = "orbs_upsell"),
        (i.ORBS_INTRO = "orbs_intro"),
        (i.ORBS_DROP = "orbs_drop"),
        (i.TOOLTIP = "tooltip"),
        i);
function h(e) {
    let {
        children: t,
        popoverType: n,
        targetElementRef: i,
        churnDiscountOffer: A,
        premiumSubscription: h,
        receivesUpdatedUpsellPopover: _,
        orbsRewardAmount: m,
        lastGrantedRewardAmount: g,
        dismissCoachMark: p,
        dismissOrbsDropPopover: E,
    } = e;
    switch (n) {
        case "churn_discount":
            if (null != A && null != h)
                return (0, r.jsx)(c.A, {
                    targetElementRef: i,
                    discountOffer: A,
                    premiumSubscription: h,
                    dismissCoachmark: p,
                    children: t,
                });
            break;
        case "premium_group":
            return (0, r.jsx)(l.p, { targetElementRef: i, dismissPopover: p, children: t });
        case "orbs_upsell":
            if (_) return (0, r.jsx)(d.A, { targetElementRef: i, dismissPopover: p, numOrbs: m, children: t });
            return (0, r.jsx)(o.A, { targetElementRef: i, dismissPopover: p, children: t });
        case "orbs_intro":
            return (0, r.jsx)(a.A, { targetElementRef: i, dismissPopover: p, children: t });
        case "orbs_drop":
            if (null != g)
                return (0, r.jsx)(s.A, {
                    targetElementRef: i,
                    dismissPopover: E,
                    lastGrantedRewardAmount: g,
                    children: t,
                });
            break;
        case "tooltip":
            return (0, r.jsx)(u.A, { children: t });
    }
    return t;
}
