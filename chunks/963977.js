"use strict";
n.d(t, { A: () => E });
var i = n(64700),
    r = n(17928),
    s = n(919395),
    a = n(696451),
    o = n(486020),
    l = n(775602),
    d = n(531685),
    _ = n(940622),
    u = n(601255),
    c = n(476324);
let E = (e) => {
    let { user: t, guildId: n, size: E, avatarDecorationOverride: h, onlyAnimateOnHoverOrFocus: m = !1 } = e,
        [f, g] = i.useState(!1),
        { canAnimate: p } = ((e, t) => {
            let n = (0, r.bG)([l.A], () => l.A.useReducedMotion),
                s = (0, r.bG)([d.A], () => d.A.isFocused()),
                [a, o] = i.useState(!1),
                _ = i.useRef(null);
            return (
                i.useEffect(() => {
                    null !== _.current && (clearTimeout(_.current), (_.current = null));
                    let i = s && (e || (!n && !t));
                    i && n
                        ? (_.current = window.setTimeout(() => {
                              o(!0);
                          }, 1e3))
                        : o(i);
                }, [s, e, n, t]),
                i.useEffect(
                    () => () => {
                        null !== _.current && (clearTimeout(_.current), (_.current = null));
                    },
                    [],
                ),
                { canAnimate: a }
            );
        })(f, m),
        A = (0, r.bG)([a.Ay], () => (null != n && null != t ? a.Ay.getMember(n, t.id) : null)),
        I = (0, u.A)((0, s.lw)({ userValue: t?.avatarDecoration, guildValue: A?.avatarDecoration, guildId: n })),
        T = (0, _.VU)(),
        S = i.useMemo(
            () =>
                null != T && "" !== T
                    ? T
                    : (0, o.F_)({ avatarDecoration: void 0 !== h ? h : I, canAnimate: p, size: E }),
            [T, h, I, p, E],
        );
    return {
        avatarPlaceholderSrc: c,
        avatarDecorationSrc: S,
        isAvatarDecorationAnimating: p,
        eventHandlers: { onMouseEnter: i.useCallback(() => g(!0), []), onMouseLeave: i.useCallback(() => g(!1), []) },
    };
};
