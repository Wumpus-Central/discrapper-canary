var l = n(477900),
    i = n(582128),
    r = n(418200),
    a = n(166532),
    s = n(735305),
    o = n(169801),
    u = n(810498),
    c = n(295405),
    d = n(998312),
    m = n(558620),
    p = n(316363),
    h = n(818348);
function C(e) {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: r } = e,
        {
            purchaseType: o,
            continueSessionToInitialStep: u,
            initialPlanId: d,
        } = (0, p.t4)((e) => ({
            purchaseType: e.purchaseType,
            continueSessionToInitialStep: e.getSharedCheckoutParams().continueSessionToInitialStep,
            initialPlanId: e.getInitialPlanId(),
        })),
        m = i.useCallback(
            () =>
                (function (e) {
                    let {
                        paymentModalStepProps: t,
                        returnStep: n = a.pn.REVIEW,
                        returnStepIfNoPaymentSources: l,
                        purchaseType: i,
                    } = e;
                    if (0 === Object.keys(c.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        i === h.VV.SUBSCRIPTION
                            ? t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS })
                            : t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: r, purchaseType: o }),
            [t, n, r, o],
        );
    return (0, l.jsx)(s.x, { ...r, onReturn: m, initialPlanId: d, continueSessionToInitialStep: u });
}
function f(e) {
    let {
            selectedSkuId: t,
            isRecurringGiftCheckout: n,
            initialPlanId: s,
        } = (0, p.t4)((e) => ({
            initialPlanId: e.getInitialPlanId(),
            selectedSkuId: e.selectedSkuId,
            isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
        })),
        c = (0, m.A)(),
        { isGift: d, claimableRewards: h } = (0, r.Pv)(),
        f = (0, o.A)({ isGift: d, skuId: t }),
        E = (0, p.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: f })),
        S = (0, u.px)(c, d && !n, h),
        g = i.useMemo(() => {
            let e = null == s ? a.pn.PLAN_SELECT : a.pn.REVIEW;
            return (E && (e = a.pn.REVIEW), S && (e = a.pn.SELECT_FREE_SKU), e);
        }, [E, S, s]);
    return (0, l.jsx)(C, { paymentModalStepProps: e, returnStep: a.pn.REVIEW, returnStepIfNoPaymentSources: g });
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
                { isExpressCheckoutEnabled: o } = (0, p.t4)((e) => ({
                    isExpressCheckoutEnabled: e.getIsExpressCheckoutEnabled(),
                })),
                u = i.useMemo(() => (o ? a.pn.REVIEW : r ? a.pn.GIFT_CUSTOMIZATION : void 0), [r, o]);
            return t === d.C.PREMIUM_CHECKOUT
                ? (0, l.jsx)(f, { ...s })
                : (0, l.jsx)(C, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: u });
        },
    },
);
