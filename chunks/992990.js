n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(311907),
    r = n(732955),
    o = n(775602),
    c = n(103733),
    d = n(258799),
    u = n(253558),
    _ = n(985018),
    m = n(93662);
let A = (e) => {
    let { className: t, onBackClick: n } = e,
        s = (0, l.bG)([o.A], () => o.A.useReducedMotion),
        { visibilityPercentageRef: A, visibilityPercentage: g } = (0, c.U)(!s);
    return (0, i.jsxs)("div", {
        className: a()(m.kL, t),
        "data-testid": "all-perks-hero-header",
        ref: A,
        children: [
            (0, i.jsx)("div", {
                className: m.FY,
                children: (0, i.jsx)(r.$nd, {
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
                        (0, i.jsx)(d.A, { containerVisibilityPercentage: g, isMotionReduced: s }),
                        (0, i.jsx)(u.A, { children: _.intl.string(_.t["hqjDX/"]) }),
                    ],
                }),
            }),
        ],
    });
};
