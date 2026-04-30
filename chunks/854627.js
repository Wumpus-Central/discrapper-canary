t.d(a, { A: () => u });
var n = t(64700),
    r = t(17928),
    l = t(778712),
    i = t(562819),
    o = t(963977),
    s = t(287809),
    _ = t(62199);
function u(e) {
    let {
            userId: a,
            guildId: t,
            size: u,
            showPending: A = !1,
            animateOnHover: c = !1,
            avatarDecorationOverride: E,
            avatarOverride: p,
        } = e,
        R = (0, r.bG)([s.default], () => s.default.getUser(a)),
        {
            avatarSrc: d,
            isAvatarAnimating: g,
            eventHandlers: f,
        } = (0, _.A)({ user: R, guildId: t, size: (0, l.FT)(u), showPending: A, animateOnHover: c, avatarOverride: p }),
        {
            avatarPlaceholderSrc: m,
            avatarDecorationSrc: v,
            eventHandlers: O,
        } = (0, o.A)({
            user: R,
            guildId: t,
            avatarDecorationOverride: E,
            size: (0, i.Te)(u),
            onlyAnimateOnHoverOrFocus: c,
        });
    return {
        avatarPlaceholderSrc: m,
        avatarDecorationSrc: v,
        avatarSrc: d,
        isAnimating: g,
        eventHandlers: {
            onMouseEnter: n.useCallback(() => {
                f.onMouseEnter(), O.onMouseEnter();
            }, [f, O]),
            onMouseLeave: n.useCallback(() => {
                f.onMouseLeave(), O.onMouseLeave();
            }, [f, O]),
        },
    };
}
