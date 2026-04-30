t.d(a, { A: () => E });
var n = t(64700),
    r = t(17928),
    l = t(919395),
    i = t(696451),
    o = t(486020),
    s = t(775602),
    _ = t(531685),
    u = t(940622),
    A = t(601255),
    c = t(476324);
let E = (e) => {
    let { user: a, guildId: t, size: E, avatarDecorationOverride: p, onlyAnimateOnHoverOrFocus: R = !1 } = e,
        [d, g] = n.useState(!1),
        { canAnimate: f } = ((e, a) => {
            let t = (0, r.bG)([s.A], () => s.A.useReducedMotion),
                l = (0, r.bG)([_.A], () => _.A.isFocused()),
                [i, o] = n.useState(!1),
                u = n.useRef(null);
            return (
                n.useEffect(() => {
                    null !== u.current && (clearTimeout(u.current), (u.current = null));
                    let n = l && (e || (!t && !a));
                    n && t
                        ? (u.current = window.setTimeout(() => {
                              o(!0);
                          }, 1e3))
                        : o(n);
                }, [l, e, t, a]),
                n.useEffect(
                    () => () => {
                        null !== u.current && (clearTimeout(u.current), (u.current = null));
                    },
                    [],
                ),
                { canAnimate: i }
            );
        })(d, R),
        m = (0, r.bG)([i.Ay], () => (null != t && null != a ? i.Ay.getMember(t, a.id) : null)),
        v = (0, A.A)((0, l.lw)({ userValue: a?.avatarDecoration, guildValue: m?.avatarDecoration, guildId: t })),
        O = (0, u.VU)(),
        L = n.useMemo(
            () =>
                null != O && "" !== O
                    ? O
                    : (0, o.F_)({ avatarDecoration: void 0 !== p ? p : v, canAnimate: f, size: E }),
            [O, p, v, f, E],
        );
    return {
        avatarPlaceholderSrc: c,
        avatarDecorationSrc: L,
        isAvatarDecorationAnimating: f,
        eventHandlers: { onMouseEnter: n.useCallback(() => g(!0), []), onMouseLeave: n.useCallback(() => g(!1), []) },
    };
};
