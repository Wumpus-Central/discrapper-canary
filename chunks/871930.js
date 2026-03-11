I.d(_, { _: () => n, h: () => i });
var A = I(627968);
I(64700);
var S = I(503698),
    T = I.n(S),
    C = I(397927),
    t = I(195043),
    O = I(725010),
    e = I(446541),
    R = I(792691),
    N = I(4354);
function n(E) {
    let { header: _, description: I, relatedId: S, disabled: t } = E;
    return (0, A.jsxs)("div", {
        className: N.wx,
        children: [
            (0, A.jsx)(C.Heading, {
                variant: "text-md/medium",
                color: "text-strong",
                children: (0, A.jsx)("label", { htmlFor: S, className: T()(N.DD, { [N.r9]: t }), children: _ }),
            }),
            (0, A.jsx)(C.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: T()(N.h_, { [N.r9]: t }),
                children: I,
            }),
        ],
    });
}
function P(E) {
    let { className: _, children: I } = E;
    return (0, A.jsx)("div", { className: T()(N.kL, _), children: I });
}
function L(E) {
    let { setting: _, className: I, children: S } = E;
    return (0, A.jsx)(t.x, { setting: _, children: (0, A.jsx)("div", { className: T()(N.kL, I), children: S }) });
}
function D(E) {
    let { setting: _, className: I, children: S, scrollPosition: C, scrollHighlightDelay: n } = E,
        P = (0, O.s)(C);
    return (0, A.jsx)(t.x, {
        setting: _,
        children: (0, A.jsxs)("div", {
            className: T()(N.kL, I, { [R.m]: null != C }),
            ref: P,
            children: [S, null != C ? (0, A.jsx)(e.A, { animationDelay: n, scrollPosition: C }) : null],
        }),
    });
}
function i(E) {
    return null != E.scrollPosition
        ? (0, A.jsx)(D, { ...E })
        : null != E.setting
          ? (0, A.jsx)(L, { ...E })
          : (0, A.jsx)(P, { ...E });
}
