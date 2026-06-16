t.d(r, { A: () => c });
var a = t(64700),
    n = t(17928),
    l = t(778712),
    i = t(562819),
    o = t(963977),
    s = t(287809),
    u = t(62199);
function c(e) {
    let {
            userId: r,
            guildId: t,
            size: c,
            showPending: p = !1,
            animateOnHover: d = !1,
            avatarDecorationOverride: f,
            avatarOverride: m,
        } = e,
        v = (0, n.bG)([s.default], () => s.default.getUser(r)),
        {
            avatarSrc: A,
            isAvatarAnimating: _,
            eventHandlers: g,
        } = (0, u.A)({ user: v, guildId: t, size: (0, l.FT)(c), showPending: p, animateOnHover: d, avatarOverride: m }),
        {
            avatarPlaceholderSrc: h,
            avatarDecorationSrc: E,
            eventHandlers: b,
        } = (0, o.A)({
            user: v,
            guildId: t,
            avatarDecorationOverride: f,
            size: (0, i.Te)(c),
            onlyAnimateOnHoverOrFocus: d,
        });
    return {
        avatarPlaceholderSrc: h,
        avatarDecorationSrc: E,
        avatarSrc: A,
        isAnimating: _,
        eventHandlers: {
            onMouseEnter: a.useCallback(() => {
                g.onMouseEnter(), b.onMouseEnter();
            }, [g, b]),
            onMouseLeave: a.useCallback(() => {
                g.onMouseLeave(), b.onMouseLeave();
            }, [g, b]),
        },
    };
}
