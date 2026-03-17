E.d(t, { _: () => C, h: () => l });
var e = E(627968);
E(64700);
var A = E(503698),
    I = E.n(A),
    S = E(397927),
    T = E(195043),
    n = E(606360);
function C(_) {
    let { header: t, description: E, relatedId: A, disabled: T } = _;
    return (0, e.jsxs)("div", {
        className: n.wx,
        children: [
            (0, e.jsx)(S.Heading, {
                variant: "text-md/medium",
                color: "text-strong",
                children: (0, e.jsx)("label", { htmlFor: A, className: I()(n.DD, { [n.r9]: T }), children: t }),
            }),
            (0, e.jsx)(S.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: I()(n.h_, { [n.r9]: T }),
                children: E,
            }),
        ],
    });
}
function R(_) {
    let { className: t, children: E } = _;
    return (0, e.jsx)("div", { className: I()(n.kL, t), children: E });
}
function i(_) {
    let { setting: t, className: E, children: A } = _;
    return (0, e.jsx)(T.x, { setting: t, children: (0, e.jsx)("div", { className: I()(n.kL, E), children: A }) });
}
function l(_) {
    return null != _.setting ? (0, e.jsx)(i, { ..._ }) : (0, e.jsx)(R, { ..._ });
}
