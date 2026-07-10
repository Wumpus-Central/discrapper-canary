n.d(t, { N: () => d, p: () => m });
var l = n(627968),
    r = n(284009),
    i = n.n(r),
    a = n(534514),
    o = n(211083),
    s = n(615310),
    u = n(632638),
    c = n(375708);
function d(e) {
    let { className: t } = e;
    return (0, l.jsx)("div", {
        className: t,
        children: (0, l.jsx)(a.D, { variant: "heading-md/semibold", children: c.intl.string(c.t.eALkIR) }),
    });
}
function m(e) {
    let { steps: t, currentStep: n, paymentError: r, className: a } = e,
        { steps: c, step: m } = (0, s.Ay)(),
        { paymentError: E } = (0, o.o)();
    return (
        (t = t ?? c),
        null == n && null != m && (n = m),
        i()(n, "step should be set"),
        i()(t, "step should be set"),
        (r = r ?? E),
        (0, l.jsx)(u.A, {
            steps: t,
            currentStep: n,
            paymentError: r,
            body: (0, l.jsx)(d, { className: a }),
            footer: null,
        })
    );
}
