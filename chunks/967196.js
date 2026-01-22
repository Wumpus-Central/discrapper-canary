n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(732955),
    l = n(775602),
    c = n(371476),
    u = n(103733),
    d = n(982237),
    f = n(985018),
    p = n(764694);
let _ = (e) => {
    let { className: t, onBackClick: n } = e,
        i = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        { visibilityPercentageRef: _, visibilityPercentage: h } = (0, u.U)(!i);
    return (0, r.jsxs)("div", {
        className: a()(p.kL, t),
        "data-testid": "all-perks-hero-header",
        ref: _,
        children: [
            (0, r.jsx)("div", {
                className: p.FY,
                children: (0, r.jsx)(o.$nd, {
                    onClick: n,
                    text: f.intl.string(f.t["13/7kX"]),
                    variant: "overlay-secondary",
                }),
            }),
            (0, r.jsx)("div", {
                className: p.Qs,
                children: (0, r.jsxs)("div", {
                    className: p.N1,
                    children: [
                        (0, r.jsx)(d.A, {
                            containerVisibilityPercentage: h,
                            isMotionReduced: i,
                        }),
                        (0, r.jsx)(c.A, { children: f.intl.string(f.t["hqjDX/"]) }),
                    ],
                }),
            }),
        ],
    });
};
