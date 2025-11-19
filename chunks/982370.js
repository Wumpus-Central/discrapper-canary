n.d(t, { Z: () => p });
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
    _ = n(947759);
let p = (e) => {
    let { className: t, onBackClick: n } = e,
        i = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        { visibilityPercentageRef: p, visibilityPercentage: h } = (0, u.E)(!i);
    return (0, r.jsxs)("div", {
        className: a()(_.container, t),
        "data-testid": "all-perks-hero-header",
        ref: p,
        children: [
            (0, r.jsx)("div", {
                className: _.backButtonContainer,
                children: (0, r.jsx)(s.zxk, {
                    onClick: n,
                    text: f.intl.string(f.t["13/7kX"]),
                    variant: "overlay-secondary",
                }),
            }),
            (0, r.jsx)("div", {
                className: _.content,
                children: (0, r.jsxs)("div", {
                    className: _.headerContainer,
                    children: [
                        (0, r.jsx)(d.Z, {
                            containerVisibilityPercentage: h,
                            isMotionReduced: i,
                        }),
                        (0, r.jsx)(c.Z, { children: f.intl.string(f.t["hqjDX/"]) }),
                    ],
                }),
            }),
        ],
    });
};
