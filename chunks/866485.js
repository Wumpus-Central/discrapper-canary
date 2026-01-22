n.d(t, { R: () => l });
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(736843),
    o = n(945477);
function l(e) {
    let { step: t, renderStep: n } = e;
    return function (e) {
        let { paymentModalStepProps: i, unifiedStepDefinition: l } = e,
            { renderModalProps: c, sharedCheckoutContext: u } = (0, s.jP)();
        if ((a()(null != l, "Step config for ".concat(t, " is not set")), (0, o.O)(l))) {
            let e = l.StepController;
            return (0, r.jsx)(e, {
                renderStep: n,
                paymentModalStepProps: i,
                sharedCheckoutContext: u,
                renderModalProps: c,
            });
        }
        return null;
    };
}
