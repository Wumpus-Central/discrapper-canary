"use strict";
n.d(t, { A: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(778712),
    a = n(562819),
    o = n(963977),
    l = n(287809),
    d = n(62199);
function _(e) {
    let {
            userId: t,
            guildId: n,
            size: _,
            showPending: u = !1,
            animateOnHover: c = !1,
            avatarDecorationOverride: E,
            avatarOverride: h,
        } = e,
        m = (0, r.bG)([l.default], () => l.default.getUser(t)),
        {
            avatarSrc: f,
            isAvatarAnimating: g,
            eventHandlers: p,
        } = (0, d.A)({ user: m, guildId: n, size: (0, s.FT)(_), showPending: u, animateOnHover: c, avatarOverride: h }),
        {
            avatarPlaceholderSrc: A,
            avatarDecorationSrc: I,
            eventHandlers: T,
        } = (0, o.A)({
            user: m,
            guildId: n,
            avatarDecorationOverride: E,
            size: (0, a.Te)(_),
            onlyAnimateOnHoverOrFocus: c,
        });
    return {
        avatarPlaceholderSrc: A,
        avatarDecorationSrc: I,
        avatarSrc: f,
        isAnimating: g,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => {
                p.onMouseEnter(), T.onMouseEnter();
            }, [p, T]),
            onMouseLeave: i.useCallback(() => {
                p.onMouseLeave(), T.onMouseLeave();
            }, [p, T]),
        },
    };
}
