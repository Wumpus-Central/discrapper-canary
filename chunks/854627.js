"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(17928),
    s = n(778712),
    a = n(562819),
    o = n(963977),
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
            avatarOverride: h,
        } = e,
        p = (0, r.bG)([l.default], () => l.default.getUser(t)),
        {
            avatarSrc: E,
            isAvatarAnimating: m,
            eventHandlers: g,
        } = (0, u.A)({ user: p, guildId: n, size: (0, s.FT)(c), showPending: d, animateOnHover: _, avatarOverride: h }),
        {
            avatarPlaceholderSrc: A,
            avatarDecorationSrc: I,
            eventHandlers: T,
        } = (0, o.A)({
            user: p,
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
            onMouseEnter: i.useCallback(() => {
                g.onMouseEnter(), T.onMouseEnter();
            }, [g, T]),
            onMouseLeave: i.useCallback(() => {
                g.onMouseLeave(), T.onMouseLeave();
            }, [g, T]),
        },
    };
}
