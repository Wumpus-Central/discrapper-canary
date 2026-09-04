n.d(t, { c: () => E });
var l = n(477900),
    i = n(582128),
    r = n(951305),
    a = n(166532),
    s = n(735305),
    o = n(169801),
    u = n(580194),
    c = n(295405),
    d = n(75304),
    m = n(558620),
    p = n(721836),
    C = n(818348);
function h(e) {
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
                        i === C.VV.SUBSCRIPTION
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
        { selectedSkuId: n } = (0, p.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        s = (0, m.A)(),
        { isGift: c, claimableRewards: d } = (0, r.Pv)(),
        C = (0, o.A)({ isGift: c, skuId: n }),
        f = (0, p.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: C })),
        E = (0, u.px)(s, c, d),
        S = i.useMemo(() => {
            let e = null == t ? a.pn.PLAN_SELECT : a.pn.REVIEW;
            return f && (e = a.pn.REVIEW), E && (e = a.pn.SELECT_FREE_SKU), e;
        }, [f, E, t]);
    return (0, l.jsx)(h, { paymentModalStepProps: e, returnStep: a.pn.REVIEW, returnStepIfNoPaymentSources: S });
}
function E(e) {
    let { checkoutFlow: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: i, paymentModalStepProps: r } = e;
    return t === d.C.PREMIUM_CHECKOUT
        ? (0, l.jsx)(f, { ...r })
        : (0, l.jsx)(h, { paymentModalStepProps: r, returnStep: n, returnStepIfNoPaymentSources: i });
}
