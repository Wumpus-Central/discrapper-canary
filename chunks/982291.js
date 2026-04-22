n.d(t, { c: () => o });
var l = n(627968),
    r = n(64700),
    i = n(166532),
    s = n(735305),
    a = n(295405);
let o = (e) => {
    let { returnStep: t = i.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: o } = e,
        u = r.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = i.pn.REVIEW, returnStepIfNoPaymentSources: l } = e;
                    if (0 === Object.keys(a.A.paymentSources).length) {
                        if (null != l) return void t.handleStepChange(l);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: i.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: o }),
            [t, n, o],
        );
    return (0, l.jsx)(s.x, { ...o, onReturn: u });
};
