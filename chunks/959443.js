n.d(t, { A: () => T, L: () => f });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(110259),
    r = n(732955),
    o = n(397927),
    d = n(688810),
    c = n(139286),
    u = n(793943),
    m = n(996254),
    g = n(779733),
    _ = n(738419),
    x = n(674547),
    A = n(985018),
    h = n(660276),
    p = n(114149);
function T(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, d.Ay)();
    (0, c.A)({
        name: a.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: a.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let s = (0, m.X)({ "en-US": x.default["f/cLEi"], "en-GB": x.default["f/cLEi"] }, x.default.CARxAC);
    return (0, i.jsxs)("div", {
        className: l()(h.kL, t),
        children: [
            (0, i.jsx)("div", { className: h.zc, children: (0, i.jsx)("img", { src: p.A, className: h._e, alt: "" }) }),
            (0, i.jsxs)("div", {
                className: h.P_,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: s }),
                    (0, i.jsx)(o.Text, { variant: "text-sm/normal", children: A.intl.string(x.default.nla4RG) }),
                ],
            }),
            (0, i.jsx)("div", {
                className: h.UD,
                children: (0, i.jsx)(r.$nd, {
                    variant: "primary",
                    text: A.intl.string(A.t.uw9zI7),
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
    return (0, i.jsx)(T, { className: h.YH });
}
