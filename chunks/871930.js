A.d(t, { _: () => l, h: () => u });
var E = A(627968);
A(64700);
var e = A(503698),
    C = A.n(e),
    T = A(397927),
    I = A(195043),
    S = A(725010),
    n = A(446541),
    R = A(480357),
    i = A(606360);
function l(_) {
    let { header: t, description: A, relatedId: e, disabled: I } = _;
    return (0, E.jsxs)("div", {
        className: i.wx,
        children: [
            (0, E.jsx)(T.Heading, {
                variant: "text-md/medium",
                color: "text-strong",
                children: (0, E.jsx)("label", { htmlFor: e, className: C()(i.DD, { [i.r9]: I }), children: t }),
            }),
            (0, E.jsx)(T.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: C()(i.h_, { [i.r9]: I }),
                children: A,
            }),
        ],
    });
}
function r(_) {
    let { className: t, children: A } = _;
    return (0, E.jsx)("div", { className: C()(i.kL, t), children: A });
}
function N(_) {
    let { setting: t, className: A, children: e } = _;
    return (0, E.jsx)(I.x, { setting: t, children: (0, E.jsx)("div", { className: C()(i.kL, A), children: e }) });
}
function O(_) {
    let { setting: t, className: A, children: e, scrollPosition: T, scrollHighlightDelay: l } = _,
        r = (0, S.s)(T);
    return (0, E.jsx)(I.x, {
        setting: t,
        children: (0, E.jsxs)("div", {
            className: C()(i.kL, A, { [R.m]: null != T }),
            ref: r,
            children: [e, null != T ? (0, E.jsx)(n.A, { animationDelay: l, scrollPosition: T }) : null],
        }),
    });
}
function u(_) {
    return null != _.scrollPosition
        ? (0, E.jsx)(O, { ..._ })
        : null != _.setting
          ? (0, E.jsx)(N, { ..._ })
          : (0, E.jsx)(r, { ..._ });
}
