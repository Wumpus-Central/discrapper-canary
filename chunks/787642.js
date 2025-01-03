n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(703656),
    s = n(769654),
    o = n(430824),
    c = n(626135),
    d = n(768581),
    u = n(125631),
    h = n(981631),
    m = n(388032),
    p = n(77418);
function g(e, t, n) {
    return (0, i.jsxs)(
        'button',
        {
            className: p.container,
            onClick: n,
            children: [
                'function' == typeof e
                    ? (0, i.jsx)('div', {
                          className: p.icon,
                          children: (0, i.jsx)(e, {
                              className: p.__invalid_iconInner,
                              color: l.tokens.colors.WHITE.css
                          })
                      })
                    : (0, i.jsx)('img', {
                          className: p.icon,
                          alt: '',
                          src: e
                      }),
                (0, i.jsx)(l.Text, {
                    className: p.text,
                    variant: 'text-md/medium',
                    children: t
                }),
                (0, i.jsx)(u.Z, { className: p.arrow })
            ]
        },
        t
    );
}
function f() {
    let e = Object.values(o.Z.getGuilds()).filter((e) => e.hasFeature(h.oNc.HUB)),
        t = (e) => {
            c.default.track(h.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, { guild_id: e }), (0, s.X)(e);
        };
    return (0, i.jsxs)(r.Fragment, {
        children: [
            (0, i.jsx)('header', {
                className: p.header,
                children: (0, i.jsx)(l.FormTitle, {
                    tag: 'h2',
                    className: p.title,
                    children: m.intl.string(m.t['qj7o//'])
                })
            }),
            (0, i.jsxs)('div', {
                className: p.grid,
                children: [
                    e.map((e) =>
                        g(
                            d.ZP.getGuildIconURL({
                                id: e.id,
                                icon: e.icon,
                                size: 240
                            }),
                            e.name,
                            () => {
                                t(e.id);
                            }
                        )
                    ),
                    g(l.CompassIcon, m.intl.string(m.t.AhKnz8), () => {
                        c.default.track(h.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, a.uL)(h.Z5c.GUILD_DISCOVERY);
                    })
                ]
            })
        ]
    });
}
