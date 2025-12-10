n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(703656),
    s = n(769654),
    o = n(430824),
    c = n(626135),
    u = n(768581),
    d = n(125631),
    p = n(981631),
    f = n(388032),
    g = n(184904);
function h(e, t, n) {
    return (0, r.jsxs)(
        "button",
        {
            className: g.container,
            onClick: n,
            children: [
                "function" == typeof e
                    ? (0, r.jsx)("div", {
                          className: g.icon,
                          children: (0, r.jsx)(e, {
                              className: g.__invalid_iconInner,
                              color: l.TVs.colors.WHITE.css,
                          }),
                      })
                    : (0, r.jsx)("img", {
                          className: g.icon,
                          alt: "",
                          src: e,
                      }),
                (0, r.jsx)(l.Text, {
                    className: g.text,
                    variant: "text-md/medium",
                    children: t,
                }),
                (0, r.jsx)(d.Z, { className: g.arrow }),
            ],
        },
        t,
    );
}
function m() {
    let e = o.Z.getGuildsArray().filter((e) => e.features.has(p.GuildFeatures.HUB));
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)("header", {
                className: g.header,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        color: "header-primary",
                        children: f.intl.string(f.t.IuMx1Y),
                    }),
                    (0, r.jsx)(l.Text, {
                        tag: "div",
                        variant: "heading-md/normal",
                        children: f.intl.string(f.t.DwevPs),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: g.grid,
                children: [
                    e.map((e) =>
                        h(
                            u.ZP.getGuildIconURL({
                                id: e.id,
                                icon: e.icon,
                                size: 240,
                            }),
                            e.name,
                            () => {
                                var t;
                                (t = e.id),
                                    c.default.track(p.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, { guild_id: t }),
                                    (0, s.X)(t);
                            },
                        ),
                    ),
                    h(l.Jmo, f.intl.string(f.t.AhKnz4), () => {
                        c.default.track(p.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED),
                            (0, a.uL)(p.Z5c.GUILD_DISCOVERY);
                    }),
                ],
            }),
        ],
    });
}
