n.d(t, { Z: () => u });
var r = n(192379),
    l = n(442837),
    a = n(481060),
    i = n(442552),
    s = n(314897),
    o = n(643879),
    c = n(27367);
function u(e) {
    let { avatarId: t, storageHash: n, size: u } = e,
        { onMouseEnter: d, onMouseLeave: f, shouldAnimate: p } = (0, i.Z)(),
        g = (0, l.e7)([s.default], () => s.default.getId());
    return {
        avatarSrc: r.useMemo(
            () =>
                (0, o.fD)({
                    userId: g,
                    avatarId: t,
                    storageHash: n,
                    canAnimate: p,
                    size: (0, a.pxk)(null != u ? u : c.m)
                }),
            [g, t, n, p, u]
        ),
        isAvatarAnimating: p,
        eventHandlers: {
            onMouseEnter: d,
            onMouseLeave: f
        }
    };
}
