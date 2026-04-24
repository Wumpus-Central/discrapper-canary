n.d(t, { R: () => u });
var l = n(627968);
n(64700);
var a = n(284009),
    i = n.n(a),
    r = n(736843),
    s = n(945477);
let o = () => null;
function u(e) {
    let { step: t, renderStep: n } = e;
    return function (e) {
        let { paymentModalStepProps: a, unifiedStepDefinition: u } = e,
            { renderModalProps: c, sharedCheckoutContext: d } = (0, r.jP)();
        if ((i()(null != u, `Step config for ${t} is not set`), (0, s.O)(u))) {
            let e = u.StepController;
            return (0, l.jsx)(e, {
                renderStep: n ?? o,
                paymentModalStepProps: a,
                sharedCheckoutContext: d,
                renderModalProps: c,
            });
        }
        return null;
    };
}
