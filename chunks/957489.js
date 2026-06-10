n.d(t, { F: () => _ });
var l = n(627968),
    r = n(20742),
    i = n(430993),
    a = n(426398),
    s = n(211159),
    o = n(234419),
    u = n(862990),
    c = n(672525),
    d = n(428262),
    p = n(937008),
    m = n(166532),
    h = n(800471),
    A = n(169801),
    E = n(788868),
    C = n(375708),
    y = n(634378);
function _(e) {
    let { handleStepChange: t, referralTrialOfferId: n } = e,
        {
            setSelectedSkuId: r,
            setSelectedPlanId: i,
            priceOptions: u,
            activeSubscription: c,
            defaultPlanId: C,
            startedPaymentFlowWithPaymentSources: y,
        } = (0, s.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            priceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
            defaultPlanId: e.defaultPlanId,
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
        })),
        { hasPaymentSources: _ } = (0, a.jm)(),
        { isGift: S, claimableRewards: I } = (0, p.Pv)(),
        T = S && null != I && I.length > 0,
        f = (0, o.V)(n);
    return (0, l.jsx)(P, {
        selectSku: (e) =>
            (function (e) {
                let {
                    activeSubscription: t,
                    newSkuId: n,
                    setSelectedSkuId: l,
                    handleStepChange: r,
                    isGift: i,
                    userTrialOffer: a,
                    setSelectedPlanId: s,
                    startedPaymentFlowWithPaymentSources: o,
                    defaultPlanId: u,
                } = e;
                l(n);
                let c = m.pn.PLAN_SELECT,
                    p = (0, d.aZ)(t);
                (p !== E.pe.TIER_1 && p !== E.pe.TIER_2) || n !== E.pe.TIER_0 || i || (c = m.pn.WHAT_YOU_LOSE);
                let C = (0, A.t)({ userTrialOffer: a, isGift: i, skuId: n }),
                    y = (0, h.vT)({ isTrial: C, isGift: i, selectedSkuId: n, startedPaymentFlowWithPaymentSources: o });
                c !== m.pn.WHAT_YOU_LOSE && y && ((c = m.pn.REVIEW), s((0, h.xT)(n, t, u))),
                    r(c, { analyticsDataOverride: { sku_id: n } });
            })({
                activeSubscription: c,
                newSkuId: e,
                setSelectedSkuId: r,
                handleStepChange: t,
                isGift: S,
                userTrialOffer: f,
                startedPaymentFlowWithPaymentSources: y,
                setSelectedPlanId: i,
                defaultPlanId: C,
            }),
        onSelectPremiumGroup: () =>
            (function (e) {
                let { setSelectedPlanId: t, handleStepChange: n, hasPaymentSources: l, setSelectedSkuId: r } = e;
                r((0, d.mH)(E.pe.TIER_2)),
                    t(E.gD.PREMIUM_GROUP_MONTH),
                    n(l ? m.pn.REVIEW : m.pn.ADD_PAYMENT_STEPS, { analyticsDataOverride: { sku_id: E.pe.TIER_2 } });
            })({ setSelectedPlanId: i, handleStepChange: t, hasPaymentSources: _, setSelectedSkuId: r }),
        isGift: S,
        priceOptions: u,
        showPromotionalGiftBanner: T,
    });
}
function P(e) {
    let { selectSku: t, isGift: n, priceOptions: a, showPromotionalGiftBanner: s, onSelectPremiumGroup: o } = e,
        p = (0, u.FY)({ isGift: n });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.rQ, { titleTextVariant: "heading-lg/semibold", title: C.intl.string(C.t["r+SebU"]) }),
            p
                ? (0, l.jsx)(i.c, {
                      children: (0, l.jsx)("div", {
                          className: y.eE,
                          children: (0, l.jsx)(c.yS, {
                              onSelectSku: (e) => t((0, d.mH)(e)),
                              onSelectPremiumGroup: o,
                              priceOptions: a,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  })
                : (0, l.jsx)(i.c, {
                      children: (0, l.jsx)("div", {
                          className: y.a2,
                          children: (0, l.jsx)(c.Ay, {
                              onSelectSku: (e) => t((0, d.mH)(e)),
                              isGift: n,
                              priceOptions: a,
                              showPromotionalGiftBanner: s,
                          }),
                      }),
                  }),
        ],
    });
}
