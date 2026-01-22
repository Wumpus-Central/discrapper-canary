n.d(t, { A: () => u });
var r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(954921),
    o = n(278539),
    l = n(287809),
    c = n(62199);
function u(e) {
    let {
            userId: t,
            guildId: n,
            size: u,
            showPending: d = !1,
            animateOnHover: f = !1,
            avatarDecorationOverride: p,
            avatarOverride: _,
        } = e,
        h = (0, i.bG)([l.default], () => l.default.getUser(t)),
        {
            avatarSrc: m,
            isAvatarAnimating: g,
            eventHandlers: E,
        } = (0, c.A)({
            user: h,
            guildId: n,
            size: (0, a.FT9)(u),
            showPending: d,
            animateOnHover: f,
            avatarOverride: _,
        }),
        {
            avatarPlaceholderSrc: b,
            avatarDecorationSrc: y,
            eventHandlers: O,
        } = (0, o.A)({
            user: h,
            guildId: n,
            avatarDecorationOverride: p,
            size: (0, s.Te)(u),
            onlyAnimateOnHoverOrFocus: f,
        });
    return {
        avatarPlaceholderSrc: b,
        avatarDecorationSrc: y,
        avatarSrc: m,
        isAnimating: g,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => {
                E.onMouseEnter(), O.onMouseEnter();
            }, [E, O]),
            onMouseLeave: r.useCallback(() => {
                E.onMouseLeave(), O.onMouseLeave();
            }, [E, O]),
        },
    };
}
