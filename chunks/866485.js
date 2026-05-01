n.d(t, { R: () => o });
var l = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    r = n(945477);
let s = () => null;
function o(e) {
    let { step: t, renderStep: n } = e;
    return function (e) {
        let { paymentModalStepProps: i, unifiedStepDefinition: o } = e;
        if ((a()(null != o, `Step config for ${t} is not set`), (0, r.O)(o))) {
            let e = o.StepController;
            return (0, l.jsx)(e, { renderStep: n ?? s, paymentModalStepProps: i });
        }
        return null;
    };
}
