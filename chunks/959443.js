n.d(t, { L: () => f });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(110259),
    a = n(732955),
    o = n(397927),
    d = n(688810),
    c = n(139286),
    u = n(793943),
    m = n(996254),
    g = n(779733),
    _ = n(738419),
    x = n(693227),
    h = n(985018),
    A = n(176409),
    p = n(114149);
function T(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, d.Ay)();
    (0, c.A)({
        name: r.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: r.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let s = (0, m.X)({ "en-US": x.default["f/cLEi"], "en-GB": x.default["f/cLEi"] }, x.default.CARxAC);
    return (0, i.jsxs)("div", {
        className: l()(A.kL, t),
        children: [
            (0, i.jsx)("div", { className: A.zc, children: (0, i.jsx)("img", { src: p.A, className: A._e, alt: "" }) }),
            (0, i.jsxs)("div", {
                className: A.P_,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: s }),
                    (0, i.jsx)(o.Text, { variant: "text-sm/normal", children: h.intl.string(x.default.nla4RG) }),
                ],
            }),
            (0, i.jsx)("div", {
                className: A.UD,
                children: (0, i.jsx)(a.$nd, {
                    variant: "primary",
                    text: h.intl.string(h.t.uw9zI7),
                    onClick: () => {
                        (0, _.b0)(_.G8.APPEARANCE_SETTINGS),
                            (0, u.nf)(u.HP.CUSTOM_THEME, { from: u.xv.SETTING }),
                            (0, g.default)();
                    },
                }),
            }),
        ],
    });
}
function f() {
    return (0, i.jsx)(T, { className: A.YH });
}
