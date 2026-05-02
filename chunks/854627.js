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
            showPending: _ = !1,
            animateOnHover: A = !1,
            avatarDecorationOverride: p,
            avatarOverride: E,
        } = e,
        d = (0, n.bG)([s.default], () => s.default.getUser(t)),
        {
            avatarSrc: v,
            isAvatarAnimating: R,
            eventHandlers: g,
        } = (0, c.A)({ user: d, guildId: a, size: (0, l.FT)(u), showPending: _, animateOnHover: A, avatarOverride: E }),
        {
            avatarPlaceholderSrc: f,
            avatarDecorationSrc: m,
            eventHandlers: O,
        } = (0, i.A)({
            user: d,
            guildId: a,
            avatarDecorationOverride: p,
            size: (0, o.Te)(u),
            onlyAnimateOnHoverOrFocus: A,
        });
    return {
        avatarPlaceholderSrc: f,
        avatarDecorationSrc: m,
        avatarSrc: v,
        isAnimating: R,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                g.onMouseEnter(), O.onMouseEnter();
            }, [g, O]),
            onMouseLeave: r.useCallback(() => {
                g.onMouseLeave(), O.onMouseLeave();
            }, [g, O]),
        },
    };
}
