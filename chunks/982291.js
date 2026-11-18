var l = n(477900),
    i = n(582128),
    r = n(418200),
    a = n(166532),
    s = n(735305),
    o = n(169801),
    u = n(295405),
    c = n(998312),
    d = n(682689),
    m = n(818348);
function p(e) {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: r } = e,
        {
            purchaseType: o,
            continueSessionToInitialStep: c,
            initialPlanId: p,
        } = (0, d.t4)((e) => ({
            purchaseType: e.purchaseType,
            continueSessionToInitialStep: e.getSharedCheckoutParams().continueSessionToInitialStep,
            initialPlanId: e.getInitialPlanId(),
        })),
        h = i.useCallback(
            () =>
                (function (e) {
                    let {
                        paymentModalStepProps: t,
                        returnStep: n = a.pn.REVIEW,
                        returnStepIfNoPaymentSources: l,
                        purchaseType: i,
                    } = e;
                    if (0 === Object.keys(u.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        i === m.VV.SUBSCRIPTION
                            ? t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS })
                            : t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: r, purchaseType: o }),
            [t, n, r, o],
        );
    return (0, l.jsx)(s.x, { ...r, onReturn: h, initialPlanId: p, continueSessionToInitialStep: c });
}
function h(e) {
    let {
            selectedSkuId: t,
            initialPlanId: n,
            shouldShowFreeSkuSelectStep: s,
        } = (0, d.t4)((e) => ({
            initialPlanId: e.getInitialPlanId(),
            selectedSkuId: e.selectedSkuId,
            shouldShowFreeSkuSelectStep: e.getShouldShowSelectFreeSkuStep(),
        })),
        { isGift: u } = (0, r.Pv)(),
        c = (0, o.A)({ isGift: u, skuId: t }),
        m = (0, d.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: c })),
        h = i.useMemo(() => {
            let e = null == n ? a.pn.PLAN_SELECT : a.pn.REVIEW;
            return (m && (e = a.pn.REVIEW), s && (e = a.pn.SELECT_FREE_SKU), e);
        }, [m, s, n]);
    return (0, l.jsx)(p, { paymentModalStepProps: e, returnStep: a.pn.REVIEW, returnStepIfNoPaymentSources: h });
}
n.d(
    t,
    {},
    {
        c: function (e) {
            let {
                    checkoutFlow: t,
                    returnStep: n = a.pn.REVIEW,
                    isGiftCustomizationEnabled: r,
                    paymentModalStepProps: s,
                } = e,
                { isExpressCheckoutEnabled: o } = (0, d.t4)((e) => ({
                    isExpressCheckoutEnabled: e.getIsExpressCheckoutEnabled(),
                })),
                u = i.useMemo(() => (o ? a.pn.REVIEW : r ? a.pn.GIFT_CUSTOMIZATION : void 0), [r, o]);
            return t === c.C.PREMIUM_CHECKOUT
                ? (0, l.jsx)(h, { ...s })
                : (0, l.jsx)(p, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: u });
        },
    },
);
