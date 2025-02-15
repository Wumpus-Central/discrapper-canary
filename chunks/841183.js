n.d(t, { Z: () => d });
var l = n(192379),
    a = n(442837),
    i = n(481060),
    s = n(442552),
    r = n(314897),
    o = n(643879),
    c = n(27367);
function d(e) {
    let { avatarId: t, storageHash: n } = e,
        { onMouseEnter: d, onMouseLeave: u, shouldAnimate: m } = (0, s.Z)(),
        p = (0, a.e7)([r.default], () => r.default.getId());
    return {
        avatarSrc: l.useMemo(
            () =>
                (0, o.fD)({
                    userId: p,
                    avatarId: t,
                    storageHash: n,
                    canAnimate: m,
                    size: (0, i.pxk)(c.m)
                }),
            [p, t, n, m]
        ),
        isAvatarAnimating: m,
        eventHandlers: {
            onMouseEnter: d,
            onMouseLeave: u
        }
    };
}
