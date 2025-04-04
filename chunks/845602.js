t.d(n, { Z: () => p });
var r = t(200651),
    o = t(957537),
    a = t(755641),
    i = t(742409),
    s = t(369509),
    l = t(116175),
    c = t(388032),
    u = t(817239),
    d = t(606217);
function p(e) {
    let { guildId: n } = e;
    return (0, r.jsxs)('div', {
        className: d.container,
        children: [
            (0, r.jsx)('div', {
                className: d.messageContainer,
                children: (0, r.jsx)(i.v, {
                    avatar: o.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: c.NW.string(u.Z.bpghV1),
                    decorations: (0, r.jsx)(s.S, {
                        guildId: n,
                        tag: 'GGEZ',
                        badge: l.ZD.HEART
                    })
                })
            }),
            (0, r.jsx)(a.g, { selectedBadge: l.ZD.HEART })
        ]
    });
}
