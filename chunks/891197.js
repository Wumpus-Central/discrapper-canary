n.d(e, { N: () => I, p: () => T });
var r = n(627968),
    E = n(284009),
    l = n.n(E),
    _ = n(534514),
    i = n(211083),
    A = n(615310),
    s = n(632638),
    a = n(375708);
let I = (t) => {
    let { className: e } = t;
    return (0, r.jsx)("div", {
        className: e,
        children: (0, r.jsx)(_.D, { variant: "heading-md/semibold", children: a.intl.string(a.t.eALkIR) }),
    });
};
function T(t) {
    let { steps: e, currentStep: n, paymentError: E, className: _ } = t,
        { steps: a, step: T } = (0, A.Ay)(),
        { paymentError: u } = (0, i.o)();
    return (
        (e = e ?? a),
        null == n && null != T && (n = T),
        l()(n, "step should be set"),
        l()(e, "step should be set"),
        (E = E ?? u),
        (0, r.jsx)(s.A, {
            steps: e,
            currentStep: n,
            paymentError: E,
            body: (0, r.jsx)(I, { className: _ }),
            footer: null,
        })
    );
}
