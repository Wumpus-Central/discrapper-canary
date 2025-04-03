n.d(t, { Z: () => p });
var r = n(200651),
    o = n(957537),
    a = n(755641),
    i = n(742409),
    s = n(369509),
    c = n(116175),
    l = n(388032),
    u = n(817239),
    d = n(606217);
function p(e) {
    let { guildId: t } = e;
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsx)('div', {
                className: d.messageContainer,
                children: (0, r.jsx)(i.v, {
                    avatar: o.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: l.NW.string(u.Z.bpghV1),
                    decorations: (0, r.jsx)(s.S, {
                        guildId: t,
                        tag: 'GGEZ',
                        badge: c.ZD.HEART
                    })
                })
            }),
            (0, r.jsx)(a.g, { selectedBadge: c.ZD.HEART })
        ]
    });
}
