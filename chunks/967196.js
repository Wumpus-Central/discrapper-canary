n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(311907),
    l = n(732955),
    o = n(775602),
    c = n(371476),
    d = n(103733),
    u = n(982237),
    _ = n(985018),
    m = n(764694);
let A = (e) => {
    let { className: t, onBackClick: n } = e,
        s = (0, a.bG)([o.A], () => o.A.useReducedMotion),
        { visibilityPercentageRef: A, visibilityPercentage: g } = (0, d.U)(!s);
    return (0, i.jsxs)("div", {
        className: r()(m.kL, t),
        "data-testid": "all-perks-hero-header",
        ref: A,
        children: [
            (0, i.jsx)("div", {
                className: m.FY,
                children: (0, i.jsx)(l.$nd, {
                    onClick: n,
                    text: _.intl.string(_.t["13/7kX"]),
                    variant: "overlay-secondary",
                }),
            }),
            (0, i.jsx)("div", {
                className: m.Qs,
                children: (0, i.jsxs)("div", {
                    className: m.N1,
                    children: [
                        (0, i.jsx)(u.A, { containerVisibilityPercentage: g, isMotionReduced: s }),
                        (0, i.jsx)(c.A, { children: _.intl.string(_.t["hqjDX/"]) }),
                    ],
                }),
            }),
        ],
    });
};
