n.d(t, { Z: () => u });
var r = n(192379),
    a = n(442837),
    l = n(481060),
    i = n(442552),
    s = n(314897),
    o = n(643879),
    c = n(27367);
function u(e) {
    let { avatarId: t, storageHash: n, size: u } = e,
        { onMouseEnter: f, onMouseLeave: d, shouldAnimate: p } = (0, i.Z)(),
        m = (0, a.e7)([s.default], () => s.default.getId());
    return {
        avatarSrc: r.useMemo(
            () =>
                (0, o.fD)({
                    userId: m,
                    avatarId: t,
                    storageHash: n,
                    canAnimate: p,
                    size: (0, l.pxk)(null != u ? u : c.m)
                }),
            [m, t, n, p, u]
        ),
        isAvatarAnimating: p,
        eventHandlers: {
            onMouseEnter: f,
            onMouseLeave: d
        }
    };
}
