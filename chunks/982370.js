n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(159691),
    l = n(607070),
    c = n(175418),
    u = n(164662),
    d = n(732728),
    f = n(388032),
    p = n(527552);
let _ = (e) => {
    let { className: t, onBackClick: n } = e,
        i = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        { visibilityPercentageRef: _, visibilityPercentage: m } = (0, u.E)(!i);
    return (0, r.jsxs)("div", {
        className: a()(p.container, t),
        "data-testid": "all-perks-hero-header",
        ref: _,
        children: [
            (0, r.jsx)("div", {
                className: p.backButtonContainer,
                children: (0, r.jsx)(s.zxk, {
                    onClick: n,
                    text: f.intl.string(f.t["13/7kX"]),
                    variant: "overlay-secondary",
                }),
            }),
            (0, r.jsx)("div", {
                className: p.content,
                children: (0, r.jsxs)("div", {
                    className: p.headerContainer,
                    children: [
                        (0, r.jsx)(d.Z, {
                            containerVisibilityPercentage: m,
                            isMotionReduced: i,
                        }),
                        (0, r.jsx)(c.Z, { children: f.intl.string(f.t["hqjDX/"]) }),
                    ],
                }),
            }),
        ],
    });
};
