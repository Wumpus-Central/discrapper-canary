n.d(t, { Z: () => c });
var l = n(192379),
    a = n(442837),
    i = n(442552),
    s = n(314897),
    r = n(643879),
    o = n(27367);
function c(e) {
    let { avatarId: t, storageHash: n } = e,
        { onMouseEnter: c, onMouseLeave: d, shouldAnimate: u } = (0, i.Z)(),
        m = (0, a.e7)([s.default], () => s.default.getId());
    return {
        avatarSrc: l.useMemo(
            () =>
                (0, r.f)({
                    userId: m,
                    avatarId: t,
                    storageHash: n,
                    canAnimate: u,
                    size: o.m
                }),
            [m, t, n, u]
        ),
        isAvatarAnimating: u,
        eventHandlers: {
            onMouseEnter: c,
            onMouseLeave: d
        }
    };
}
