"use strict";
n.d(t, { R: () => u });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(736843),
    o = n(945477);
let l = () => null;
function u(e) {
    let { step: t, renderStep: n } = e;
    return function (e) {
        let { paymentModalStepProps: i, unifiedStepDefinition: u } = e,
            { renderModalProps: c, sharedCheckoutContext: d } = (0, a.jP)();
        if ((s()(null != u, `Step config for ${t} is not set`), (0, o.O)(u))) {
            let e = u.StepController;
            return (0, r.jsx)(e, {
                renderStep: n ?? l,
                paymentModalStepProps: i,
                sharedCheckoutContext: d,
                renderModalProps: c,
            });
        }
        return null;
    };
}
