n.d(t, { A: () => g });
var r = n(582128),
    a = n(17928),
    i = n(919395),
    l = n(696451),
    u = n(486020),
    o = n(775602),
    s = n(531685),
    A = n(940622),
    c = n(601255),
    d = n(476324);
let g = function (e) {
    let { user: t, guildId: n, size: g, avatarDecorationOverride: E, onlyAnimateOnHoverOrFocus: v = !1 } = e,
        [f, p] = r.useState(!1),
        { canAnimate: m } = ((e, t) => {
            let n = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
                i = (0, a.bG)([s.A], () => s.A.isFocused()),
                [l, u] = r.useState(!1),
                A = r.useRef(null);
            return (
                r.useEffect(() => {
                    null !== A.current && (clearTimeout(A.current), (A.current = null));
                    let r = i && (e || (!n && !t));
                    r && n
                        ? (A.current = window.setTimeout(() => {
                              u(!0);
                          }, 1e3))
                        : u(r);
                }, [i, e, n, t]),
                r.useEffect(
                    () => () => {
                        null !== A.current && (clearTimeout(A.current), (A.current = null));
                    },
                    [],
                ),
                { canAnimate: l }
            );
        })(f, v),
        R = (0, a.bG)([l.Ay], () => (null != n && null != t ? l.Ay.getMember(n, t.id) : null)),
        I = (0, c.A)((0, i.lw)({ userValue: t?.avatarDecoration, guildValue: R?.avatarDecoration, guildId: n })),
        T = (0, A.VU)(),
        _ = r.useMemo(
            () =>
                null != T && "" !== T
                    ? T
                    : (0, u.F_)({ avatarDecoration: void 0 !== E ? E : I, canAnimate: m, size: g }),
            [T, E, I, m, g],
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: _,
        isAvatarDecorationAnimating: m,
        eventHandlers: { onMouseEnter: r.useCallback(() => p(!0), []), onMouseLeave: r.useCallback(() => p(!1), []) },
    };
};
