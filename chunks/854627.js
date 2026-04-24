a.d(n, { A: () => c });
var t = a(64700),
    r = a(17928),
    i = a(778712),
    l = a(562819),
    o = a(963977),
    s = a(287809),
    u = a(62199);
function c(e) {
    let {
            userId: n,
            guildId: a,
            size: c,
            showPending: d = !1,
            animateOnHover: p = !1,
            avatarDecorationOverride: _,
            avatarOverride: g,
        } = e,
        A = (0, r.bG)([s.default], () => s.default.getUser(n)),
        {
            avatarSrc: m,
            isAvatarAnimating: f,
            eventHandlers: E,
        } = (0, u.A)({ user: A, guildId: a, size: (0, i.FT)(c), showPending: d, animateOnHover: p, avatarOverride: g }),
        {
            avatarPlaceholderSrc: v,
            avatarDecorationSrc: b,
            eventHandlers: R,
        } = (0, o.A)({
            user: A,
            guildId: a,
            avatarDecorationOverride: _,
            size: (0, l.Te)(c),
            onlyAnimateOnHoverOrFocus: p,
        });
    return {
        avatarPlaceholderSrc: v,
        avatarDecorationSrc: b,
        avatarSrc: m,
        isAnimating: f,
        eventHandlers: {
            onMouseEnter: t.useCallback(() => {
                E.onMouseEnter(), R.onMouseEnter();
            }, [E, R]),
            onMouseLeave: t.useCallback(() => {
                E.onMouseLeave(), R.onMouseLeave();
            }, [E, R]),
        },
    };
}
