n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(313201),
    o = n(703656),
    s = n(769654),
    c = n(430824),
    u = n(626135),
    d = n(768581),
    p = n(125631),
    h = n(981631),
    f = n(388032),
    g = n(507750);
let m = (0, a.hQ)(),
    b = ''.concat(m, '-decription');
function _(e, t, n) {
    return (0, r.jsxs)(
        'button',
        {
            className: g.container,
            onClick: n,
            children: [
                'function' == typeof e
                    ? (0, r.jsx)('div', {
                          className: g.icon,
                          children: (0, r.jsx)(e, {
                              className: g.__invalid_iconInner,
                              color: l.TVs.colors.WHITE.css
                          })
                      })
                    : (0, r.jsx)('img', {
                          className: g.icon,
                          alt: '',
                          src: e
                      }),
                (0, r.jsx)(l.Text, {
                    className: g.text,
                    variant: 'text-md/medium',
                    children: t
                }),
                (0, r.jsx)(p.Z, { className: g.arrow })
            ]
        },
        t
    );
}
function E() {
    let e = c.Z.getGuildsArray().filter((e) => e.hasFeature(h.oNc.HUB)),
        t = (e) => {
            (u.default.track(h.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, { guild_id: e }), (0, s.X)(e));
        };
    return (0, r.jsxs)(i.Fragment, {
        children: [
            (0, r.jsxs)('header', {
                className: g.header,
                children: [
                    (0, r.jsx)(l.vwX, {
                        tag: 'h1',
                        className: g.title,
                        children: f.intl.string(f.t.IuMx1d)
                    }),
                    (0, r.jsx)(l.R94, {
                        id: b,
                        type: l.R94.Types.DESCRIPTION,
                        children: (0, r.jsx)(l.Text, {
                            tag: 'div',
                            variant: 'heading-md/normal',
                            children: f.intl.string(f.t.DwevPj)
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: g.grid,
                children: [
                    e.map((e) =>
                        _(
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
                    _(l.Jmo, f.intl.string(f.t.AhKnz8), () => {
                        (u.default.track(h.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, o.uL)(h.Z5c.GUILD_DISCOVERY));
                    })
                ]
            })
        ]
    });
}
