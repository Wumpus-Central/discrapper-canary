n.d(t, { Z: () => u });
var r = n(192379),
    l = n(442837),
    a = n(481060),
    i = n(442552),
    o = n(314897),
    s = n(643879),
    c = n(27367);
function u(e) {
    let { avatarId: t, storageHash: n, size: u } = e,
        { onMouseEnter: d, onMouseLeave: p, shouldAnimate: f } = (0, i.Z)(),
        m = (0, l.e7)([o.default], () => o.default.getId());
    return {
        avatarSrc: r.useMemo(
            () =>
                (0, s.fD)({
                    userId: m,
                    avatarId: t,
                    storageHash: n,
                    canAnimate: f,
                    size: (0, a.pxk)(null != u ? u : c.m)
                }),
            [m, t, n, f, u]
        ),
        isAvatarAnimating: f,
        eventHandlers: {
            onMouseEnter: d,
            onMouseLeave: p
        }
    };
}
