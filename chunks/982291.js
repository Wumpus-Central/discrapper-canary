"use strict";
n.d(t, { c: () => u });
var r = n(627968),
    i = n(64700),
    a = n(166532),
    s = n(735305),
    o = n(295405);
let l = (e) => {
        let { paymentModalStepProps: t, returnStep: n = a.pn.REVIEW, returnStepIfNoPaymentSources: r } = e;
        if (0 === Object.keys(o.A.paymentSources).length) {
            if (null != r) return void t.handleStepChange(r);
            t.handleClose();
        } else t.handleStepChange(n, { trackedFromStep: a.pn.ADD_PAYMENT_STEPS });
    },
    u = (e) => {
        let { returnStep: t = a.pn.REVIEW, returnStepIfNoPaymentSources: n, paymentModalStepProps: o } = e,
            u = i.useCallback(
                () => l({ returnStep: t, returnStepIfNoPaymentSources: n, paymentModalStepProps: o }),
                [t, n, o],
            );
        return (0, r.jsx)(s.x, { ...o, onReturn: u });
    };
