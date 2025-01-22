var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(372900);
function l(e, n, r, i) {
    return e.getAvatarURL(i, n, r);
}
n.Z = a.memo(function (e) {
    let { user: n, size: r = o.AvatarSizes.SIZE_32, animate: u = !1, 'aria-hidden': c = !1, ...d } = e,
        f = a.useContext(s.Z);
    return (0, i.jsx)(o.Avatar, {
        src: l(n, (0, o.getAvatarSize)(r), u, f),
        size: r,
        'aria-label': c ? void 0 : n.username,
        'aria-hidden': c,
        ...d
    });
});
