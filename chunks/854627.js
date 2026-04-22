n.d(t, { A: () => u });
var a = n(64700),
    r = n(311907),
    l = n(778712),
    i = n(562819),
    o = n(215689),
    s = n(287809),
    c = n(62199);
function u(e) {
    let {
            userId: t,
            guildId: n,
            size: u,
            showPending: d = !1,
            animateOnHover: p = !1,
            avatarDecorationOverride: A,
            avatarOverride: g,
        } = e,
        _ = (0, r.bG)([s.default], () => s.default.getUser(t)),
        {
            avatarSrc: v,
            isAvatarAnimating: f,
            eventHandlers: m,
        } = (0, c.A)({ user: _, guildId: n, size: (0, l.FT)(u), showPending: d, animateOnHover: p, avatarOverride: g }),
        {
            avatarPlaceholderSrc: E,
            avatarDecorationSrc: b,
            eventHandlers: R,
        } = (0, o.A)({
            user: _,
            guildId: n,
            avatarDecorationOverride: A,
            size: (0, i.Te)(u),
            onlyAnimateOnHoverOrFocus: p,
        });
    return {
        avatarPlaceholderSrc: E,
        avatarDecorationSrc: b,
        avatarSrc: v,
        isAnimating: f,
        eventHandlers: {
            onMouseEnter: a.useCallback(() => {
                m.onMouseEnter(), R.onMouseEnter();
            }, [m, R]),
            onMouseLeave: a.useCallback(() => {
                m.onMouseLeave(), R.onMouseLeave();
            }, [m, R]),
        },
    };
}
