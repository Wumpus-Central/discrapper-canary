t.d(a, { A: () => _ });
var n = t(64700),
    r = t(17928),
    l = t(778712),
    i = t(562819),
    o = t(963977),
    s = t(287809),
    u = t(62199);
function _(e) {
    let {
            userId: a,
            guildId: t,
            size: _,
            showPending: c = !1,
            animateOnHover: p = !1,
            avatarDecorationOverride: d,
            avatarOverride: g,
        } = e,
        A = (0, r.bG)([s.default], () => s.default.getUser(a)),
        {
            avatarSrc: f,
            isAvatarAnimating: E,
            eventHandlers: v,
        } = (0, u.A)({ user: A, guildId: t, size: (0, l.FT)(_), showPending: c, animateOnHover: p, avatarOverride: g }),
        {
            avatarPlaceholderSrc: m,
            avatarDecorationSrc: b,
            eventHandlers: R,
        } = (0, o.A)({
            user: A,
            guildId: t,
            avatarDecorationOverride: d,
            size: (0, i.Te)(_),
            onlyAnimateOnHoverOrFocus: p,
        });
    return {
        avatarPlaceholderSrc: m,
        avatarDecorationSrc: b,
        avatarSrc: f,
        isAnimating: E,
        eventHandlers: {
            onMouseEnter: n.useCallback(() => {
                v.onMouseEnter(), R.onMouseEnter();
            }, [v, R]),
            onMouseLeave: n.useCallback(() => {
                v.onMouseLeave(), R.onMouseLeave();
            }, [v, R]),
        },
    };
}
