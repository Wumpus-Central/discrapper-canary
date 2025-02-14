n.d(t, {
    Y: () => c,
    Z: () => d
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(129861),
    o = n(492395);
function d(e) {
    let { user: t, status: n, isFocused: l, guildId: r } = e;
    return (0, i.jsxs)('div', {
        className: o.memberItem,
        children: [
            (0, i.jsx)(a.qEK, {
                src: t.getAvatarURL(r, 24),
                className: o.avatar,
                'aria-label': t.username,
                size: a.EFr.SIZE_24,
                status: n,
                statusColor: l ? 'currentColor' : void 0
            }),
            (0, i.jsx)(s.Z, {
                user: t,
                hideDiscriminator: !0
            })
        ]
    });
}
function c(e) {
    let { label: t } = e;
    return (0, i.jsxs)('div', {
        className: o.memberItem,
        children: [(0, i.jsx)('div', { className: r()(o.avatar, o.unknown) }), (0, i.jsx)('div', { children: t })]
    });
}
