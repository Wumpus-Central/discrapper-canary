n.d(t, {
    Y: () => u,
    Z: () => c
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(129861),
    s = n(376316);
function c(e) {
    let { user: t, status: n, isFocused: i, guildId: l } = e;
    return (0, r.jsxs)('div', {
        className: s.memberItem,
        children: [
            (0, r.jsx)(a.qEK, {
                src: t.getAvatarURL(l, 24),
                className: s.avatar,
                'aria-label': t.username,
                size: a.EFr.SIZE_24,
                status: n,
                statusColor: i ? 'currentColor' : void 0
            }),
            (0, r.jsx)(o.Z, {
                user: t,
                hideDiscriminator: !0
            })
        ]
    });
}
function u(e) {
    let { label: t } = e;
    return (0, r.jsxs)('div', {
        className: s.memberItem,
        children: [(0, r.jsx)('div', { className: l()(s.avatar, s.unknown) }), (0, r.jsx)('div', { children: t })]
    });
}
