n.d(r, { N: () => u, p: () => x });
var l = n(627968),
    t = n(284009),
    s = n.n(t),
    i = n(534514),
    a = n(156312),
    c = n(615310),
    d = n(632638),
    o = n(985018);
let u = (e) => {
    let { className: r } = e;
    return (0, l.jsx)("div", {
        className: r,
        children: (0, l.jsx)(i.D, { variant: "heading-md/semibold", children: o.intl.string(o.t.eALkIR) }),
    });
};
function x(e) {
    let { steps: r, currentStep: n, paymentError: t, className: i } = e,
        { steps: o, step: x } = (0, c.Ay)(),
        { paymentError: h } = (0, a.P5)();
    return (
        (r = r ?? o),
        null == n && null != x && (n = x),
        s()(n, "step should be set"),
        s()(r, "step should be set"),
        (t = t ?? h),
        (0, l.jsx)(d.A, {
            steps: r,
            currentStep: n,
            paymentError: t,
            body: (0, l.jsx)(u, { className: i }),
            footer: null,
        })
    );
}
