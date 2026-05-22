n.d(t, { N: () => c, p: () => A });
var l = n(627968),
    r = n(284009),
    u = n.n(r),
    i = n(534514),
    a = n(834252),
    s = n(615310),
    o = n(632638),
    d = n(375708);
let c = (e) => {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(i.D, { variant: "heading-md/semibold", children: d.intl.string(d.t.eALkIR) }),
    });
};
function A(e) {
    let { steps: t, currentStep: n, paymentError: r, className: i } = e,
        { steps: d, step: A } = (0, s.Ay)(),
        { paymentError: E } = (0, a.P5)();
    return (
        (t = t ?? d),
        null == n && null != A && (n = A),
        u()(n, "step should be set"),
        u()(t, "step should be set"),
        (r = r ?? E),
        (0, l.jsx)(o.A, {
            steps: t,
            currentStep: n,
            paymentError: r,
            body: (0, l.jsx)(c, { className: i }),
            footer: null,
        })
    );
}
