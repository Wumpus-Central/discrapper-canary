n.d(t, { A: () => A });
var r = n(582128),
    a = n(17928),
    i = n(778712),
    l = n(562819),
    u = n(963977),
    o = n(287809),
    s = n(62199);
function A(e) {
    let {
            userId: t,
            guildId: n,
            size: A,
            showPending: c = !1,
            animateOnHover: d = !1,
            avatarDecorationOverride: g,
            avatarOverride: E,
        } = e,
        v = (0, a.bG)([o.default], () => o.default.getUser(t)),
        {
            avatarSrc: f,
            isAvatarAnimating: p,
            eventHandlers: m,
        } = (0, s.A)({ user: v, guildId: n, size: (0, i.FT)(A), showPending: c, animateOnHover: d, avatarOverride: E }),
        {
            avatarPlaceholderSrc: R,
            avatarDecorationSrc: I,
            eventHandlers: T,
        } = (0, u.A)({
            user: v,
            guildId: n,
            avatarDecorationOverride: g,
            size: (0, l.Te)(A),
            onlyAnimateOnHoverOrFocus: d,
        });
    return {
        avatarPlaceholderSrc: R,
        avatarDecorationSrc: I,
        avatarSrc: f,
        isAnimating: p,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                m.onMouseEnter(), T.onMouseEnter();
            }, [m, T]),
            onMouseLeave: r.useCallback(() => {
                m.onMouseLeave(), T.onMouseLeave();
            }, [m, T]),
        },
    };
}
