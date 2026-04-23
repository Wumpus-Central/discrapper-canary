"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    s = n(778712),
    a = n(562819),
    o = n(215689),
    l = n(287809),
    u = n(62199);
function c(e) {
    let {
            userId: t,
            guildId: n,
            size: c,
            showPending: d = !1,
            animateOnHover: _ = !1,
            avatarDecorationOverride: f,
            avatarOverride: p,
        } = e,
        h = (0, i.bG)([l.default], () => l.default.getUser(t)),
        {
            avatarSrc: E,
            isAvatarAnimating: m,
            eventHandlers: g,
        } = (0, u.A)({ user: h, guildId: n, size: (0, s.FT)(c), showPending: d, animateOnHover: _, avatarOverride: p }),
        {
            avatarPlaceholderSrc: A,
            avatarDecorationSrc: I,
            eventHandlers: T,
        } = (0, o.A)({
            user: h,
            guildId: n,
            avatarDecorationOverride: f,
            size: (0, a.Te)(c),
            onlyAnimateOnHoverOrFocus: _,
        });
    return {
        avatarPlaceholderSrc: A,
        avatarDecorationSrc: I,
        avatarSrc: E,
        isAnimating: m,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                g.onMouseEnter(), T.onMouseEnter();
            }, [g, T]),
            onMouseLeave: r.useCallback(() => {
                g.onMouseLeave(), T.onMouseLeave();
            }, [g, T]),
        },
    };
}
