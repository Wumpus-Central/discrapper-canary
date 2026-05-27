t.d(r, { A: () => f });
var a = t(64700),
    n = t(17928),
    l = t(919395),
    i = t(696451),
    o = t(486020),
    s = t(775602),
    u = t(531685),
    c = t(940622),
    p = t(601255),
    d = t(476324);
let f = (e) => {
    let { user: r, guildId: t, size: f, avatarDecorationOverride: v, onlyAnimateOnHoverOrFocus: m = !1 } = e,
        [A, _] = a.useState(!1),
        { canAnimate: g } = ((e, r) => {
            let t = (0, n.bG)([s.A], () => s.A.useReducedMotion),
                l = (0, n.bG)([u.A], () => u.A.isFocused()),
                [i, o] = a.useState(!1),
                c = a.useRef(null);
            return (
                a.useEffect(() => {
                    null !== c.current && (clearTimeout(c.current), (c.current = null));
                    let a = l && (e || (!t && !r));
                    a && t
                        ? (c.current = window.setTimeout(() => {
                              o(!0);
                          }, 1e3))
                        : o(a);
                }, [l, e, t, r]),
                a.useEffect(
                    () => () => {
                        null !== c.current && (clearTimeout(c.current), (c.current = null));
                    },
                    [],
                ),
                { canAnimate: i }
            );
        })(A, m),
        E = (0, n.bG)([i.Ay], () => (null != t && null != r ? i.Ay.getMember(t, r.id) : null)),
        b = (0, p.A)((0, l.lw)({ userValue: r?.avatarDecoration, guildValue: E?.avatarDecoration, guildId: t })),
        h = (0, c.VU)(),
        R = a.useMemo(
            () =>
                null != h && "" !== h
                    ? h
                    : (0, o.F_)({ avatarDecoration: void 0 !== v ? v : b, canAnimate: g, size: f }),
            [h, v, b, g, f],
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: R,
        isAvatarDecorationAnimating: g,
        eventHandlers: { onMouseEnter: a.useCallback(() => _(!0), []), onMouseLeave: a.useCallback(() => _(!1), []) },
    };
};
