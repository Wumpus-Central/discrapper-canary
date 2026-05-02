a.d(t, { A: () => p });
var r = a(64700),
    n = a(17928),
    l = a(919395),
    o = a(696451),
    i = a(486020),
    s = a(775602),
    c = a(531685),
    u = a(940622),
    _ = a(601255),
    A = a(476324);
let p = (e) => {
    let { user: t, guildId: a, size: p, avatarDecorationOverride: E, onlyAnimateOnHoverOrFocus: d = !1 } = e,
        [v, R] = r.useState(!1),
        { canAnimate: g } = ((e, t) => {
            let a = (0, n.bG)([s.A], () => s.A.useReducedMotion),
                l = (0, n.bG)([c.A], () => c.A.isFocused()),
                [o, i] = r.useState(!1),
                u = r.useRef(null);
            return (
                r.useEffect(() => {
                    null !== u.current && (clearTimeout(u.current), (u.current = null));
                    let r = l && (e || (!a && !t));
                    r && a
                        ? (u.current = window.setTimeout(() => {
                              i(!0);
                          }, 1e3))
                        : i(r);
                }, [l, e, a, t]),
                r.useEffect(
                    () => () => {
                        null !== u.current && (clearTimeout(u.current), (u.current = null));
                    },
                    [],
                ),
                { canAnimate: o }
            );
        })(v, d),
        f = (0, n.bG)([o.Ay], () => (null != a && null != t ? o.Ay.getMember(a, t.id) : null)),
        m = (0, _.A)((0, l.lw)({ userValue: t?.avatarDecoration, guildValue: f?.avatarDecoration, guildId: a })),
        O = (0, u.VU)(),
        b = r.useMemo(
            () =>
                null != O && "" !== O
                    ? O
                    : (0, i.F_)({ avatarDecoration: void 0 !== E ? E : m, canAnimate: g, size: p }),
            [O, E, m, g, p],
        );
    return {
        avatarPlaceholderSrc: A,
        avatarDecorationSrc: b,
        isAvatarDecorationAnimating: g,
        eventHandlers: { onMouseEnter: r.useCallback(() => R(!0), []), onMouseLeave: r.useCallback(() => R(!1), []) },
    };
};
