n.d(t, {
    E: () => x,
    Z: () => C
}),
    n(388685);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    i = n.n(a),
    s = n(866442),
    l = n(481060),
    c = n(957537),
    u = n(839008),
    d = n(755641),
    p = n(742409),
    f = n(369509),
    m = n(116175),
    _ = n(680278),
    g = n(388032),
    b = n(606217);
function C() {
    let e = (0, l.Nv7)((0, s.Rf)(11156283), (0, s.Rf)(16730184), void 0);
    return (0, r.jsx)('div', {
        className: b.messageContainer,
        children: (0, r.jsx)(p.l, {
            avatar: c.Z,
            username: 'Cherry',
            usernameStyle: e.text.gradientStyle,
            usernameClassName: i()(e.text.gradientClassName, e.gradient.gradientClassName),
            message: g.NW.string(_.Z.eTHkQU)
        })
    });
}
function x(e) {
    let { guildId: t } = e,
        [n, a] = o.useState(m.ZD.HEART);
    return (0, r.jsxs)('div', {
        className: b.container,
        children: [
            (0, r.jsx)('div', {
                className: b.messageContainer,
                children: (0, r.jsx)(p.l, {
                    avatar: u.Z,
                    username: 'Roka',
                    usernameStyle: { color: 'var(--brand-400)' },
                    message: g.NW.string(_.Z.eTHkQU),
                    decorations: (0, r.jsx)(f.S, {
                        guildId: t,
                        tag: 'GGEZ',
                        badge: n
                    })
                })
            }),
            (0, r.jsx)(d.g, {
                selectedBadge: n,
                onBadgeClicked: a
            })
        ]
    });
}
