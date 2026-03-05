n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(732955),
    o = n(775602),
    d = n(103733),
    c = n(258799),
    u = n(253558),
    _ = n(985018),
    g = n(93662);
let m = (e) => {
    let { className: t, onBackClick: n } = e,
        s = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        { visibilityPercentageRef: m, visibilityPercentage: A } = (0, d.U)(!s);
    return (0, i.jsxs)("div", {
        className: l()(g.kL, t),
        "data-testid": "all-perks-hero-header",
        ref: m,
        children: [
            (0, i.jsx)("div", {
                className: g.FY,
                children: (0, i.jsx)(r.$nd, {
                    onClick: n,
                    text: _.intl.string(_.t["13/7kX"]),
                    variant: "overlay-secondary",
                }),
            }),
            (0, i.jsx)("div", {
                className: g.Qs,
                children: (0, i.jsxs)("div", {
                    className: g.N1,
                    children: [
                        (0, i.jsx)(c.A, { containerVisibilityPercentage: A, isMotionReduced: s }),
                        (0, i.jsx)(u.A, { children: _.intl.string(_.t["hqjDX/"]) }),
                    ],
                }),
            }),
        ],
    });
};
