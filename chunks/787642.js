n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(313201),
    o = n(540059),
    s = n(703656),
    c = n(769654),
    u = n(430824),
    d = n(626135),
    p = n(768581),
    h = n(125631),
    f = n(981631),
    g = n(388032),
    m = n(507750);
let b = (0, a.hQ)(),
    _ = ''.concat(b, '-decription');
function E(e, t, n) {
    return (0, r.jsxs)(
        'button',
        {
            className: m.container,
            onClick: n,
            children: [
                'function' == typeof e
                    ? (0, r.jsx)('div', {
                          className: m.icon,
                          children: (0, r.jsx)(e, {
                              className: m.__invalid_iconInner,
                              color: l.TVs.colors.WHITE.css
                          })
                      })
                    : (0, r.jsx)('img', {
                          className: m.icon,
                          alt: '',
                          src: e
                      }),
                (0, r.jsx)(l.Text, {
                    className: m.text,
                    variant: 'text-md/medium',
                    children: t
                }),
                (0, r.jsx)(h.Z, { className: m.arrow })
            ]
        },
        t
    );
}
function O() {
    let e = Object.values(u.Z.getGuilds()).filter((e) => e.hasFeature(f.oNc.HUB)),
        t = (0, o.Q3)('AddFriendOtherPlaces'),
        n = (e) => {
            d.default.track(f.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, { guild_id: e }), (0, c.X)(e);
        };
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('header', {
                className: m.header,
                children: [
                    (0, r.jsx)(l.vwX, {
                        tag: t ? 'h1' : 'h2',
                        className: m.title,
                        children: g.NW.string(g.t.IuMx1d)
                    }),
                    t
                        ? (0, r.jsx)(l.R94, {
                              id: _,
                              type: l.R94.Types.DESCRIPTION,
                              children: (0, r.jsx)(l.Text, {
                                  tag: 'div',
                                  variant: 'heading-md/normal',
                                  children: g.NW.string(g.t.DwevPj)
                              })
                          })
                        : null
                ]
            }),
            (0, r.jsxs)('div', {
                className: m.grid,
                children: [
                    e.map((e) =>
                        E(
                            p.ZP.getGuildIconURL({
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
                    E(l.Jmo, g.NW.string(g.t.AhKnz8), () => {
                        d.default.track(f.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, s.uL)(f.Z5c.GUILD_DISCOVERY);
                    })
                ]
            })
        ]
    });
}
