n.d(t, { Z: () => C });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(313201),
    s = n(540059),
    o = n(703656),
    c = n(769654),
    d = n(430824),
    u = n(626135),
    h = n(768581),
    m = n(125631),
    p = n(981631),
    g = n(388032),
    _ = n(77418);
let f = (0, a.hQ)(),
    E = ''.concat(f, '-decription');
function I(e, t, n) {
    return (0, i.jsxs)(
        'button',
        {
            className: _.container,
            onClick: n,
            children: [
                'function' == typeof e
                    ? (0, i.jsx)('div', {
                          className: _.icon,
                          children: (0, i.jsx)(e, {
                              className: _.__invalid_iconInner,
                              color: r.TVs.colors.WHITE.css
                          })
                      })
                    : (0, i.jsx)('img', {
                          className: _.icon,
                          alt: '',
                          src: e
                      }),
                (0, i.jsx)(r.Text, {
                    className: _.text,
                    variant: 'text-md/medium',
                    children: t
                }),
                (0, i.jsx)(m.Z, { className: _.arrow })
            ]
        },
        t
    );
}
function C() {
    let e = Object.values(d.Z.getGuilds()).filter((e) => e.hasFeature(p.oNc.HUB)),
        t = (0, s.Q3)('AddFriendOtherPlaces'),
        n = (e) => {
            u.default.track(p.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, { guild_id: e }), (0, c.X)(e);
        };
    return (0, i.jsxs)(l.Fragment, {
        children: [
            (0, i.jsxs)('header', {
                className: _.header,
                children: [
                    (0, i.jsx)(r.vwX, {
                        tag: t ? 'h1' : 'h2',
                        className: _.title,
                        children: g.intl.string(g.t.IuMx1d)
                    }),
                    t
                        ? (0, i.jsx)(r.R94, {
                              id: E,
                              type: r.R94.Types.DESCRIPTION,
                              children: (0, i.jsx)(r.Text, {
                                  tag: 'div',
                                  variant: 'heading-md/normal',
                                  children: g.intl.string(g.t.DwevPj)
                              })
                          })
                        : null
                ]
            }),
            (0, i.jsxs)('div', {
                className: _.grid,
                children: [
                    e.map((e) =>
                        I(
                            h.ZP.getGuildIconURL({
                                id: e.id,
                                icon: e.icon,
                                size: 240
                            }),
                            e.name,
                            () => {
                                n(e.id);
                            }
                        )
                    ),
                    I(r.Jmo, g.intl.string(g.t.AhKnz8), () => {
                        u.default.track(p.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, o.uL)(p.Z5c.GUILD_DISCOVERY);
                    })
                ]
            })
        ]
    });
}
