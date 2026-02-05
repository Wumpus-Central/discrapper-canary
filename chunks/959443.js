n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(110259),
    r = n(732955),
    a = n(397927),
    l = n(688810),
    o = n(139286),
    c = n(793943),
    d = n(996254),
    u = n(12901),
    _ = n(738419),
    m = n(520650),
    A = n(985018),
    g = n(996554),
    E = n(114149);
function h() {
    let { analyticsLocations: e } = (0, l.Ay)();
    (0, o.A)({
        name: s.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: s.ImpressionTypes.VIEW,
        properties: { location_stack: e },
    });
    let t = (0, d.X)({ "en-US": m.default["f/cLEi"], "en-GB": m.default["f/cLEi"] }, m.default.CARxAC);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [
            (0, i.jsx)("div", { className: g.zc, children: (0, i.jsx)("img", { src: E.A, className: g._e, alt: "" }) }),
            (0, i.jsxs)("div", {
                className: g.P_,
                children: [
                    (0, i.jsx)(a.Heading, { variant: "heading-lg/semibold", color: "text-strong", children: t }),
                    (0, i.jsx)(a.Text, { variant: "text-sm/normal", children: A.intl.string(m.default.nla4RG) }),
                ],
            }),
            (0, i.jsx)("div", {
                className: g.UD,
                children: (0, i.jsx)(r.$nd, {
                    variant: "primary",
                    text: A.intl.string(A.t.uw9zI7),
                    onClick: () => {
                        (0, _.b0)(_.G8.APPEARANCE_SETTINGS),
                            (0, c.nf)(c.HP.CUSTOM_THEME, { from: c.xv.SETTING }),
                            (0, u.default)();
                    },
                }),
            }),
        ],
    });
}
