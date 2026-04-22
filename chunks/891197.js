"use strict";
a.d(t, { N: () => u, p: () => h });
var r = a(627968),
    l = a(284009),
    n = a.n(l),
    i = a(534514),
    s = a(156312),
    o = a(615310),
    d = a(632638),
    c = a(985018);
let u = (e) => {
    let { className: t } = e;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(i.D, { variant: "heading-md/semibold", children: c.intl.string(c.t.eALkIR) }),
    });
};
function h(e) {
    let { steps: t, currentStep: a, paymentError: l, className: i } = e,
        { steps: c, step: h } = (0, o.Ay)(),
        { paymentError: p } = (0, s.P5)();
    return (
        (t = t ?? c),
        null == a && null != h && (a = h),
        n()(a, "step should be set"),
        n()(t, "step should be set"),
        (l = l ?? p),
        (0, r.jsx)(d.A, {
            steps: t,
            currentStep: a,
            paymentError: l,
            body: (0, r.jsx)(u, { className: i }),
            footer: null,
        })
    );
}
