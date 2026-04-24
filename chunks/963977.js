a.d(n, { A: () => _ });
var t = a(64700),
    r = a(17928),
    i = a(919395),
    l = a(696451),
    o = a(486020),
    s = a(775602),
    u = a(531685),
    c = a(940622),
    d = a(601255),
    p = a(476324);
let _ = (e) => {
    let { user: n, guildId: a, size: _, avatarDecorationOverride: g, onlyAnimateOnHoverOrFocus: A = !1 } = e,
        [m, f] = t.useState(!1),
        { canAnimate: E } = ((e, n) => {
            let a = (0, r.bG)([s.A], () => s.A.useReducedMotion),
                i = (0, r.bG)([u.A], () => u.A.isFocused()),
                [l, o] = t.useState(!1),
                c = t.useRef(null);
            return (
                t.useEffect(() => {
                    null !== c.current && (clearTimeout(c.current), (c.current = null));
                    let t = i && (e || (!a && !n));
                    t && a
                        ? (c.current = window.setTimeout(() => {
                              o(!0);
                          }, 1e3))
                        : o(t);
                }, [i, e, a, n]),
                t.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { canAnimate: l }
            );
        })(m, A),
        v = (0, r.bG)([l.Ay], () => (null != a && null != n ? l.Ay.getMember(a, n.id) : null)),
        b = (0, d.A)((0, i.lw)({ userValue: n?.avatarDecoration, guildValue: v?.avatarDecoration, guildId: a })),
        R = (0, c.VU)(),
        h = t.useMemo(
            () =>
                null != R && "" !== R
                    ? R
                    : (0, o.F_)({ avatarDecoration: void 0 !== g ? g : b, canAnimate: E, size: _ }),
            [R, g, b, E, _],
        );
    return {
        avatarPlaceholderSrc: p,
        avatarDecorationSrc: h,
        isAvatarDecorationAnimating: E,
        eventHandlers: { onMouseEnter: t.useCallback(() => f(!0), []), onMouseLeave: t.useCallback(() => f(!1), []) },
    };
};
