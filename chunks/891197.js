"use strict";
r.d(t, { N: () => u, p: () => _ });
var i = r(627968),
    a = r(284009),
    n = r.n(a),
    s = r(534514),
    l = r(156312),
    o = r(615310),
    c = r(632638),
    d = r(985018);
let u = (e) => {
    let { className: t } = e;
    return (0, i.jsx)("div", {
        className: t,
        children: (0, i.jsx)(s.D, { variant: "heading-md/semibold", children: d.intl.string(d.t.eALkIR) }),
    });
};
function _(e) {
    let { steps: t, currentStep: r, paymentError: a, className: s } = e,
        { steps: d, step: _ } = (0, o.Ay)(),
        { paymentError: p } = (0, l.P5)();
    return (
        (t = t ?? d),
        null == r && null != _ && (r = _),
        n()(r, "step should be set"),
        n()(t, "step should be set"),
        (a = a ?? p),
        (0, i.jsx)(c.A, {
            steps: t,
            currentStep: r,
            paymentError: a,
            body: (0, i.jsx)(u, { className: s }),
            footer: null,
        })
    );
}
