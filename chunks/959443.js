n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(732955),
    s = n(397927),
    a = n(688810),
    o = n(139286),
    c = n(793943),
    d = n(996254),
    u = n(12901),
    _ = n(738419),
    p = n(520650),
    m = n(985018),
    g = n(996554),
    A = n(114149);

function f() {
    let { analyticsLocations: e } = (0, a.Ay)();
    (0, o.A)({
        name: i.ImpressionNames.CUSTOM_THEMES_APPEARANCE_SETTINGS_BANNER,
        type: i.ImpressionTypes.VIEW,
        properties: {
            location_stack: e,
        },
    });
    let t = (0, d.X)(
        {
            "en-US": p.default["f/cLEi"],
            "en-GB": p.default["f/cLEi"],
        },
        p.default.CARxAC,
    );
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [
            (0, r.jsx)("div", {
                className: g.zc,
                children: (0, r.jsx)("img", {
                    src: A.A,
                    className: g._e,
                    alt: "",
                }),
            }),
            (0, r.jsxs)("div", {
                className: g.P_,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: m.intl.string(p.default.nla4RG),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.UD,
                children: (0, r.jsx)(l.$nd, {
                    variant: "primary",
                    text: m.intl.string(m.t.uw9zI7),
                    onClick: () => {
                        (0, _.b0)(_.G8.APPEARANCE_SETTINGS),
                            (0, c.nf)(c.HP.CUSTOM_THEME, {
                                from: c.xv.SETTING,
                            }),
                            (0, u.default)();
                    },
                }),
            }),
        ],
    });
}
