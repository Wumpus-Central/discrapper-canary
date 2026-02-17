n.d(t, { A: () => E, L: () => C });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(110259),
    r = n(732955),
    o = n(397927),
    c = n(688810),
    d = n(139286),
    u = n(793943),
    _ = n(996254),
    m = n(12901),
    A = n(738419),
    g = n(520650),
    h = n(985018),
    x = n(996554),
    p = n(114149);
function E(e) {
    let { className: t } = e,
        { analyticsLocations: n } = (0, c.Ay)();
    (0, d.A)({
        name: l.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: l.ImpressionTypes.VIEW,
        properties: { location_stack: n },
    });
    let s = (0, _.X)({ "en-US": g.default["f/cLEi"], "en-GB": g.default["f/cLEi"] }, g.default.CARxAC);
    return (0, i.jsxs)("div", {
        className: a()(x.kL, t),
        children: [
            (0, i.jsx)("div", { className: x.zc, children: (0, i.jsx)("img", { src: p.A, className: x._e, alt: "" }) }),
            (0, i.jsxs)("div", {
                className: x.P_,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: s }),
                    (0, i.jsx)(o.Text, { variant: "text-sm/normal", children: h.intl.string(g.default.nla4RG) }),
                ],
            }),
            (0, i.jsx)("div", {
                className: x.UD,
                children: (0, i.jsx)(r.$nd, {
                    variant: "primary",
                    text: h.intl.string(h.t.uw9zI7),
                    onClick: () => {
                        (0, A.b0)(A.G8.APPEARANCE_SETTINGS),
                            (0, u.nf)(u.HP.CUSTOM_THEME, { from: u.xv.SETTING }),
                            (0, m.default)();
                    },
                }),
            }),
        ],
    });
}
function C() {
    return (0, i.jsx)(E, { className: x.YH });
}
