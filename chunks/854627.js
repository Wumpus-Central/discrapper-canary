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
            avatarOverride: v,
        } = e,
        m = (0, n.bG)([s.default], () => s.default.getUser(r)),
        {
            avatarSrc: A,
            isAvatarAnimating: _,
            eventHandlers: g,
        } = (0, u.A)({ user: m, guildId: t, size: (0, l.FT)(c), showPending: p, animateOnHover: d, avatarOverride: v }),
        {
            avatarPlaceholderSrc: E,
            avatarDecorationSrc: b,
            eventHandlers: h,
        } = (0, o.A)({
            user: m,
            guildId: t,
            avatarDecorationOverride: f,
            size: (0, i.Te)(c),
            onlyAnimateOnHoverOrFocus: d,
        });
    return {
        avatarPlaceholderSrc: E,
        avatarDecorationSrc: b,
        avatarSrc: A,
        isAnimating: _,
        eventHandlers: {
            onMouseEnter: a.useCallback(() => {
                g.onMouseEnter(), h.onMouseEnter();
            }, [g, h]),
            onMouseLeave: a.useCallback(() => {
                g.onMouseLeave(), h.onMouseLeave();
            }, [g, h]),
        },
    };
}
