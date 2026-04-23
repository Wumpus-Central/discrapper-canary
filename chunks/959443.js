n.d(t, { L: () => S });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(110259),
    r = n(821609),
    o = n(534514),
    d = n(834730),
    u = n(688810),
    c = n(139286),
    g = n(793943),
    m = n(996254),
    _ = n(779733),
    A = n(738419),
    h = n(693227),
    p = n(985018),
    x = n(176409),
    E = n(114149);
function T(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, u.Ay)();
    (0, c.A)({
        name: a.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: a.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let s = (0, m.X)({ "en-US": h.default["f/cLEi"], "en-GB": h.default["f/cLEi"] }, h.default.CARxAC);
    return (0, i.jsxs)("div", {
        className: l()(x.kL, t),
        children: [
            (0, i.jsx)("div", { className: x.zc, children: (0, i.jsx)("img", { src: E.A, className: x._e, alt: "" }) }),
            (0, i.jsxs)("div", {
                className: x.P_,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-lg/semibold", color: "text-strong", children: s }),
                    (0, i.jsx)(d.E, { variant: "text-sm/normal", children: p.intl.string(h.default.nla4RG) }),
                ],
            }),
            (0, i.jsx)("div", {
                className: x.UD,
                children: (0, i.jsx)(r.$, {
                    variant: "primary",
                    text: p.intl.string(p.t.uw9zI7),
                    onClick: () => {
                        (0, A.b0)(A.G8.APPEARANCE_SETTINGS),
                            (0, g.nf)(g.HP.CUSTOM_THEME, { from: g.xv.SETTING }),
                            (0, _.default)();
                    },
                }),
            }),
        ],
    });
}
function S() {
    return (0, i.jsx)(T, { className: x.YH });
}
