n.d(t, { Z: () => u });
var r = n(73800),
    a = n(442837),
    l = n(481060),
    i = n(442552),
    s = n(314897),
    o = n(643879),
    c = n(27367);
function u(e) {
    let { avatarId: t, storageHash: n, size: u } = e,
        { onMouseEnter: d, onMouseLeave: f, shouldAnimate: p } = (0, i.Z)(),
        g = (0, a.e7)([s.default], () => s.default.getId());
    return {
        avatarSrc: r.useMemo(
            () =>
                (0, o.fD)({
                    userId: g,
                    avatarId: t,
                    storageHash: n,
                    canAnimate: p,
                    size: (0, l.pxk)(null != u ? u : c.m)
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
