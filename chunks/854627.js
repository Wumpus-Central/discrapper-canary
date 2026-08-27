n.d(t, { A: () => A });
var r = n(582128),
    a = n(17928),
    l = n(778712),
    i = n(562819),
    u = n(963977),
    o = n(287809),
    s = n(62199);
function A(e) {
    let {
            userId: t,
            guildId: n,
            size: A,
            showPending: d = !1,
            animateOnHover: c = !1,
            avatarOverride: v,
            avatarDecorationOverride: E,
        } = e,
        g = (0, a.bG)([o.default], () => o.default.getUser(t)),
        {
            avatarSrc: f,
            isAvatarAnimating: p,
            eventHandlers: R,
        } = (0, s.A)({ user: g, guildId: n, size: (0, l.FT)(A), showPending: d, animateOnHover: c, avatarOverride: v }),
        {
            avatarPlaceholderSrc: m,
            avatarDecorationSrc: T,
            eventHandlers: _,
        } = (0, u.A)({
            user: g,
            guildId: n,
            avatarDecorationOverride: E,
            size: (0, i.Te)(A),
            onlyAnimateOnHoverOrFocus: c,
        });
    return {
        avatarPlaceholderSrc: m,
        avatarDecorationSrc: T,
        avatarSrc: f,
        isAnimating: p,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                R.onMouseEnter(), _.onMouseEnter();
            }, [R, _]),
            onMouseLeave: r.useCallback(() => {
                R.onMouseLeave(), _.onMouseLeave();
            }, [R, _]),
        },
    };
}
