n.d(t, {
    Y: () => u,
    Z: () => c,
});
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    s = n(129861),
    o = n(961275);
function c(e) {
    let { user: t, status: n, isFocused: i, guildId: l } = e;
    return (0, r.jsxs)("div", {
        className: o.memberItem,
        children: [
            (0, r.jsx)(a.qEK, {
                src: t.getAvatarURL(l, 24),
                className: o.avatar,
                "aria-label": t.username,
                size: a.EFr.SIZE_24,
                status: n,
                statusColor: i ? "currentColor" : void 0,
            }),
            (0, r.jsx)(s.Z, {
                user: t,
                hideDiscriminator: !0,
            }),
        ],
    });
}
function u(e) {
    let { label: t } = e;
    return (0, r.jsxs)("div", {
        className: o.memberItem,
        children: [(0, r.jsx)("div", { className: l()(o.avatar, o.unknown) }), (0, r.jsx)("div", { children: t })],
    });
}
