n.d(t, { c: () => f });
var l = n(627968),
    i = n(64700),
    r = n(951305),
    a = n(166532),
    s = n(735305),
    o = n(169801),
    u = n(380619),
    c = n(295405),
    d = n(75304),
    p = n(558620),
    m = n(6938),
    C = n(818348);
function h(e) {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: r } = e,
        { purchaseType: o } = (0, m.t4)((e) => ({ purchaseType: e.purchaseType })),
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
function E(e) {
    let { initialPlanId: t } = e,
        { selectedSkuId: n } = (0, m.t4)((e) => ({ selectedSkuId: e.selectedSkuId })),
        s = (0, p.A)(),
        { isGift: c, claimableRewards: d } = (0, r.Pv)(),
        C = (0, o.A)({ isGift: c, skuId: n }),
        E = (0, m.t4)((e) => e.getIsInOneStepSubscriptionCheckout({ isTrial: C })),
        f = (0, u.px)(s, c, d),
        A = i.useMemo(() => {
            let e = null == t ? a.pn.PLAN_SELECT : a.pn.REVIEW;
            return E && (e = a.pn.REVIEW), f && (e = a.pn.SELECT_FREE_SKU), e;
        }, [E, f, t]);
    return (0, l.jsx)(h, { paymentModalStepProps: e, returnStep: a.pn.REVIEW, returnStepIfNoPaymentSources: A });
}
function f(e) {
    let { checkoutFlow: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: i, paymentModalStepProps: r } = e;
    return t === d.C.PREMIUM_CHECKOUT
        ? (0, l.jsx)(E, { ...r })
        : (0, l.jsx)(h, { paymentModalStepProps: r, returnStep: n, returnStepIfNoPaymentSources: i });
}
