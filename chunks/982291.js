n.d(t, { c: () => f });
var l = n(627968),
    i = n(64700),
    r = n(937008),
    a = n(166532),
    s = n(735305),
    o = n(800471),
    u = n(169801),
    c = n(380619),
    d = n(295405),
    p = n(75304),
    m = n(558620),
    C = n(6938),
    h = n(818348);
function E(e) {
    let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: r } = e,
        { purchaseType: o } = (0, C.t4)((e) => ({ purchaseType: e.purchaseType })),
        u = i.useCallback(
            () =>
                (function (e) {
                    let {
                        paymentModalStepProps: t,
                        returnStep: n = a.pn.REVIEW,
                        returnStepIfNoPaymentSources: l,
                        purchaseType: i,
                    } = e;
                    if (0 === Object.keys(d.A.paymentSources).length) {
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
function A(e) {
    let { initialPlanId: t } = e,
        n = (0, C.t4)((e) => e.selectedSkuId),
        s = (0, m.A)(),
        { isGift: d, claimableRewards: p } = (0, r.Pv)(),
        h = (0, u.A)({ isGift: d, skuId: n }),
        A = (0, o.lp)(h),
        f = (0, c.px)(s, d, p),
        S = i.useMemo(() => {
            let e = null == t ? a.pn.PLAN_SELECT : a.pn.REVIEW;
            return A && (e = a.pn.REVIEW), f && (e = a.pn.SELECT_FREE_SKU), e;
        }, [A, f, t]);
    return (0, l.jsx)(E, { paymentModalStepProps: e, returnStep: a.pn.REVIEW, returnStepIfNoPaymentSources: S });
}
function f(e) {
    let { checkoutFlow: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: i, paymentModalStepProps: r } = e;
    return t === p.C.PREMIUM_CHECKOUT
        ? (0, l.jsx)(A, { ...r })
        : (0, l.jsx)(E, { paymentModalStepProps: r, returnStep: n, returnStepIfNoPaymentSources: i });
}
