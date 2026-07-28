"use strict";
n.d(t, { A: () => c });
var i = n(582128),
    r = n(17928),
    a = n(778712),
    s = n(562819),
    l = n(963977),
    o = n(287809),
    d = n(62199);
function c(e) {
    let {
            userId: t,
            guildId: n,
            size: c,
            showPending: u = !1,
            animateOnHover: _ = !1,
            avatarDecorationOverride: E,
            avatarOverride: A,
        } = e,
        h = (0, r.bG)([o.default], () => o.default.getUser(t)),
        {
            avatarSrc: I,
            isAvatarAnimating: f,
            eventHandlers: p,
        } = (0, d.A)({ user: h, guildId: n, size: (0, a.FT)(c), showPending: u, animateOnHover: _, avatarOverride: A }),
        {
            avatarPlaceholderSrc: T,
            avatarDecorationSrc: m,
            eventHandlers: g,
        } = (0, l.A)({
            user: h,
            guildId: n,
            avatarDecorationOverride: E,
            size: (0, s.Te)(c),
            onlyAnimateOnHoverOrFocus: _,
        });
    return {
        avatarPlaceholderSrc: T,
        avatarDecorationSrc: m,
        avatarSrc: I,
        isAnimating: f,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => {
                p.onMouseEnter(), g.onMouseEnter();
            }, [p, g]),
            onMouseLeave: i.useCallback(() => {
                p.onMouseLeave(), g.onMouseLeave();
            }, [p, g]),
        },
    };
}
