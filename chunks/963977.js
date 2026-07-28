"use strict";
n.d(t, { A: () => E });
var i = n(582128),
    r = n(17928),
    a = n(919395),
    s = n(696451),
    l = n(486020),
    o = n(775602),
    d = n(531685),
    c = n(940622),
    u = n(601255),
    _ = n(476324);
let E = function (e) {
    let { user: t, guildId: n, size: E, avatarDecorationOverride: A, onlyAnimateOnHoverOrFocus: h = !1 } = e,
        [I, f] = i.useState(!1),
        { canAnimate: p } = ((e, t) => {
            let n = (0, r.bG)([o.Ay], () => o.Ay.useReducedMotion),
                a = (0, r.bG)([d.A], () => d.A.isFocused()),
                [s, l] = i.useState(!1),
                c = i.useRef(null);
            return (
                i.useEffect(() => {
                    null !== c.current && (clearTimeout(c.current), (c.current = null));
                    let i = a && (e || (!n && !t));
                    i && n
                        ? (c.current = window.setTimeout(() => {
                              l(!0);
                          }, 1e3))
                        : l(i);
                }, [a, e, n, t]),
                i.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { canAnimate: s }
            );
        })(I, h),
        T = (0, r.bG)([s.Ay], () => (null != n && null != t ? s.Ay.getMember(n, t.id) : null)),
        m = (0, u.A)((0, a.lw)({ userValue: t?.avatarDecoration, guildValue: T?.avatarDecoration, guildId: n })),
        g = (0, c.VU)(),
        S = i.useMemo(
            () =>
                null != g && "" !== g
                    ? g
                    : (0, l.F_)({ avatarDecoration: void 0 !== A ? A : m, canAnimate: p, size: E }),
            [g, A, m, p, E],
        );
    return {
        avatarPlaceholderSrc: _,
        avatarDecorationSrc: S,
        isAvatarDecorationAnimating: p,
        eventHandlers: { onMouseEnter: i.useCallback(() => f(!0), []), onMouseLeave: i.useCallback(() => f(!1), []) },
    };
};
