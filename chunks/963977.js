"use strict";
n.d(t, { A: () => f });
var i = n(64700),
    r = n(17928),
    s = n(919395),
    a = n(696451),
    o = n(486020),
    l = n(775602),
    u = n(531685),
    c = n(940622),
    d = n(601255),
    _ = n(476324);
let f = (e) => {
    let { user: t, guildId: n, size: f, avatarDecorationOverride: h, onlyAnimateOnHoverOrFocus: p = !1 } = e,
        [E, m] = i.useState(!1),
        { canAnimate: g } = ((e, t) => {
            let n = (0, r.bG)([l.A], () => l.A.useReducedMotion),
                s = (0, r.bG)([u.A], () => u.A.isFocused()),
                [a, o] = i.useState(!1),
                c = i.useRef(null);
            return (
                i.useEffect(() => {
                    null !== c.current && (clearTimeout(c.current), (c.current = null));
                    let i = s && (e || (!n && !t));
                    i && n
                        ? (c.current = window.setTimeout(() => {
                              o(!0);
                          }, 1e3))
                        : o(i);
                }, [s, e, n, t]),
                i.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { canAnimate: a }
            );
        })(E, p),
        A = (0, r.bG)([a.Ay], () => (null != n && null != t ? a.Ay.getMember(n, t.id) : null)),
        I = (0, d.A)((0, s.lw)({ userValue: t?.avatarDecoration, guildValue: A?.avatarDecoration, guildId: n })),
        T = (0, c.VU)(),
        S = i.useMemo(
            () =>
                null != T && "" !== T
                    ? T
                    : (0, o.F_)({ avatarDecoration: void 0 !== h ? h : I, canAnimate: g, size: f }),
            [T, h, I, g, f],
        );
    return {
        avatarPlaceholderSrc: _,
        avatarDecorationSrc: S,
        isAvatarDecorationAnimating: g,
        eventHandlers: { onMouseEnter: i.useCallback(() => m(!0), []), onMouseLeave: i.useCallback(() => m(!1), []) },
    };
};
