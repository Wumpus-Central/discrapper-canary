a.d(t, { A: () => _ });
var r = a(64700),
    n = a(17928),
    l = a(919395),
    o = a(696451),
    i = a(486020),
    s = a(775602),
    c = a(531685),
    u = a(940622),
    p = a(601255),
    d = a(476324);
let _ = (e) => {
    let { user: t, guildId: a, size: _, avatarDecorationOverride: A, onlyAnimateOnHoverOrFocus: v = !1 } = e,
        [g, f] = r.useState(!1),
        { canAnimate: m } = ((e, t) => {
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
        })(g, v),
        E = (0, n.bG)([o.Ay], () => (null != a && null != t ? o.Ay.getMember(a, t.id) : null)),
        b = (0, p.A)((0, l.lw)({ userValue: t?.avatarDecoration, guildValue: E?.avatarDecoration, guildId: a })),
        R = (0, u.VU)(),
        O = r.useMemo(
            () =>
                null != R && "" !== R
                    ? R
                    : (0, i.F_)({ avatarDecoration: void 0 !== A ? A : b, canAnimate: m, size: _ }),
            [R, A, b, m, _],
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: O,
        isAvatarDecorationAnimating: m,
        eventHandlers: { onMouseEnter: r.useCallback(() => f(!0), []), onMouseLeave: r.useCallback(() => f(!1), []) },
    };
};
