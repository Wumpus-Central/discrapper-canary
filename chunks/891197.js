r.d(n, { N: () => u, p: () => p });
var l = r(627968),
    t = r(284009),
    s = r.n(t),
    i = r(534514),
    a = r(536302),
    d = r(615310),
    c = r(632638),
    o = r(375708);
let u = (e) => {
    let { className: n } = e;
    return (0, l.jsx)("div", {
        className: n,
        children: (0, l.jsx)(i.D, { variant: "heading-md/semibold", children: o.intl.string(o.t.eALkIR) }),
    });
};
function p(e) {
    let { steps: n, currentStep: r, paymentError: t, className: i } = e,
        { steps: o, step: p } = (0, d.Ay)(),
        { paymentError: x } = (0, a.P5)();
    return (
        (n = n ?? o),
        null == r && null != p && (r = p),
        s()(r, "step should be set"),
        s()(n, "step should be set"),
        (t = t ?? x),
        (0, l.jsx)(c.A, {
            steps: n,
            currentStep: r,
            paymentError: t,
            body: (0, l.jsx)(u, { className: i }),
            footer: null,
        })
    );
}
