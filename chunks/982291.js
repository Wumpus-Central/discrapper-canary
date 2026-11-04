n.d(t, { c: () => E });
var l = n(477900),
    i = n(582128),
    r = n(951305),
    a = n(166532),
    s = n(735305),
    o = n(169801),
    u = n(810498),
    c = n(295405),
    d = n(75304),
    m = n(558620),
    p = n(298208),
    h = n(818348);
function C(e) {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: r } = e,
        { purchaseType: o } = (0, p.t4)((e) => ({ purchaseType: e.purchaseType })),
        u = i.useCallback(
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
    return (0, l.jsx)(s.x, { ...r, onReturn: u });
}
function f(e) {
    let { initialPlanId: t } = e,
        { selectedSkuId: n, isRecurringGiftCheckout: s } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
        })),
        c = (0, m.A)(),
        { isGift: d, claimableRewards: h } = (0, r.Pv)(),
        f = (0, o.A)({ isGift: d, skuId: n }),
        E = (0, p.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: f })),
        S = (0, u.px)(c, d && !s, h),
        g = i.useMemo(() => {
            let e = null == t ? a.pn.PLAN_SELECT : a.pn.REVIEW;
            return (E && (e = a.pn.REVIEW), S && (e = a.pn.SELECT_FREE_SKU), e);
        }, [E, S, t]);
    return (0, l.jsx)(C, { paymentModalStepProps: e, returnStep: a.pn.REVIEW, returnStepIfNoPaymentSources: g });
}
function E(e) {
    let { checkoutFlow: t, returnStep: n = a.pn.REVIEW, isGiftCustomizationEnabled: r, paymentModalStepProps: s } = e,
        { isExpressCheckoutEnabled: o } = (0, p.t4)((e) => ({
            isExpressCheckoutEnabled: e.getIsExpressCheckoutEnabled(),
        })),
        u = i.useMemo(() => (o ? a.pn.REVIEW : r ? a.pn.GIFT_CUSTOMIZATION : void 0), [r, o]);
    return t === d.C.PREMIUM_CHECKOUT
        ? (0, l.jsx)(f, { ...s })
        : (0, l.jsx)(C, { paymentModalStepProps: s, returnStep: n, returnStepIfNoPaymentSources: u });
}
