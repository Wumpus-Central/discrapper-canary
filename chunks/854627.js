"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(954921),
    o = n(278539),
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
            avatarSrc: m,
            isAvatarAnimating: g,
            eventHandlers: E,
        } = (0, u.A)({
            user: h,
            guildId: n,
            size: (0, a.FT9)(c),
            showPending: d,
            animateOnHover: _,
            avatarOverride: p,
        }),
        {
            avatarPlaceholderSrc: A,
            avatarDecorationSrc: I,
            eventHandlers: T,
        } = (0, o.A)({
            user: h,
            guildId: n,
            avatarDecorationOverride: f,
            size: (0, s.Te)(c),
            onlyAnimateOnHoverOrFocus: _,
        });
    return {
        avatarPlaceholderSrc: A,
        avatarDecorationSrc: I,
        avatarSrc: m,
        isAnimating: g,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                E.onMouseEnter(), T.onMouseEnter();
            }, [E, T]),
            onMouseLeave: r.useCallback(() => {
                E.onMouseLeave(), T.onMouseLeave();
            }, [E, T]),
        },
    };
}
