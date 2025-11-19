n.d(t, { Z: () => u });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(793030),
    a = n(442837),
    s = n(607070),
    c = n(405029);
function u(e) {
    let { withHeader: t = !0, size: n = 15 } = e,
        i = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, r.jsxs)(o.Kqy, {
        gap: 4,
        children: [
            t &&
                (0, r.jsx)("div", {
                    className: l()(c.wrapper, { [c.noAnimation]: i }),
                    style: {
                        paddingTop: 8,
                        paddingBottom: 8,
                    },
                    children: (0, r.jsx)(d, { className: l()(c.lineShort, c.loadingAnimation) }),
                }),
            Array.from({ length: n }).map((e, t) => (0, r.jsx)(p, {}, t)),
        ],
    });
}
function d(e) {
    let { className: t } = e;
    return (0, r.jsx)("div", { className: l()(c.line, t) });
}
function p() {
    let e = (0, a.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, r.jsxs)("div", {
        style: {
            display: "flex",
            flexDirection: "row",
            gap: 12,
            padding: 4,
        },
        className: l()(c.wrapper, { [c.noAnimation]: e }),
        children: [
            (0, r.jsx)("div", { className: l()(c.avatar, c.loadingAnimation) }),
            (0, r.jsxs)("div", {
                className: c.lineContainer,
                children: [
                    (0, r.jsx)(d, { className: l()(c.lineMedium, c.loadingAnimation) }),
                    (0, r.jsx)(d, { className: l()(c.lineShort, c.loadingAnimation) }),
                    (0, r.jsx)(d, { className: l()(c.lineLong, c.loadingAnimation) }),
                ],
            }),
        ],
    });
}
