"use strict";
n.d(t, { c: () => l });
var r = n(627968),
    i = n(64700),
    s = n(166532),
    a = n(735305),
    o = n(295405);
let l = (e) => {
    let { returnStep: t = s.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: l } = e,
        u = i.useCallback(
            () =>
                ((e) => {
                    let { paymentModalStepProps: t, returnStep: n = s.pn.REVIEW, returnStepIfNoPaymentSources: r } = e;
                    if (0 === Object.keys(o.A.paymentSources).length) {
                        if (null != r) return void t.handleStepChange(r);
                        t.handleClose();
                    } else t.handleStepChange(n, { trackedFromStep: s.pn.ADD_PAYMENT_STEPS });
                })({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: l }),
            [t, n, l],
        );
    return (0, r.jsx)(a.x, { ...l, onReturn: u });
};
