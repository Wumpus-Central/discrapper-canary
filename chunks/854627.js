a.d(t, { A: () => u });
var r = a(64700),
    n = a(17928),
    l = a(778712),
    o = a(562819),
    i = a(963977),
    s = a(287809),
    c = a(62199);
function u(e) {
    let {
            userId: t,
            guildId: a,
            size: u,
            showPending: p = !1,
            animateOnHover: d = !1,
            avatarDecorationOverride: _,
            avatarOverride: A,
        } = e,
        v = (0, n.bG)([s.default], () => s.default.getUser(t)),
        {
            avatarSrc: g,
            isAvatarAnimating: f,
            eventHandlers: m,
        } = (0, c.A)({ user: v, guildId: a, size: (0, l.FT)(u), showPending: p, animateOnHover: d, avatarOverride: A }),
        {
            avatarPlaceholderSrc: E,
            avatarDecorationSrc: b,
            eventHandlers: R,
        } = (0, i.A)({
            user: v,
            guildId: a,
            avatarDecorationOverride: _,
            size: (0, o.Te)(u),
            onlyAnimateOnHoverOrFocus: d,
        });
    return {
        avatarPlaceholderSrc: E,
        avatarDecorationSrc: b,
        avatarSrc: g,
        isAnimating: f,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                m.onMouseEnter(), R.onMouseEnter();
            }, [m, R]),
            onMouseLeave: r.useCallback(() => {
                m.onMouseLeave(), R.onMouseLeave();
            }, [m, R]),
        },
    };
}
