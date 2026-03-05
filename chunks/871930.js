I.d(_, { _: () => n, h: () => i });
var S = I(627968);
I(64700);
var A = I(503698),
    T = I.n(A),
    C = I(397927),
    O = I(195043),
    t = I(725010),
    e = I(446541),
    R = I(792691),
    N = I(4354);
function n(E) {
    let { header: _, description: I, relatedId: A, disabled: O } = E;
    return (0, S.jsxs)("div", {
        className: N.wx,
        children: [
            (0, S.jsx)(C.Heading, {
                variant: "text-md/medium",
                color: "text-strong",
                children: (0, S.jsx)("label", { htmlFor: A, className: T()(N.DD, { [N.r9]: O }), children: _ }),
            }),
            (0, S.jsx)(C.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: T()(N.h_, { [N.r9]: O }),
                children: I,
            }),
        ],
    });
}
function P(E) {
    let { className: _, children: I } = E;
    return (0, S.jsx)("div", { className: T()(N.kL, _), children: I });
}
function D(E) {
    let { setting: _, className: I, children: A } = E;
    return (0, S.jsx)(O.x, { setting: _, children: (0, S.jsx)("div", { className: T()(N.kL, I), children: A }) });
}
function L(E) {
    let { setting: _, className: I, children: A, scrollPosition: C, scrollHighlightDelay: n } = E,
        P = (0, t.s)(C);
    return (0, S.jsx)(O.x, {
        setting: _,
        children: (0, S.jsxs)("div", {
            className: T()(N.kL, I, { [R.m]: null != C }),
            ref: P,
            children: [A, null != C ? (0, S.jsx)(e.A, { animationDelay: n, scrollPosition: C }) : null],
        }),
    });
}
function i(E) {
    return null != E.scrollPosition
        ? (0, S.jsx)(L, { ...E })
        : null != E.setting
          ? (0, S.jsx)(D, { ...E })
          : (0, S.jsx)(P, { ...E });
}
