n.d(t, { A: () => v });
var r = n(582128),
    a = n(17928),
    l = n(919395),
    i = n(696451),
    u = n(486020),
    o = n(775602),
    s = n(531685),
    A = n(940622),
    d = n(601255),
    c = n(476324);
let v = function (e) {
    let { user: t, guildId: n, size: v, avatarDecorationOverride: E, onlyAnimateOnHoverOrFocus: g = !1 } = e,
        [f, p] = r.useState(!1),
        { canAnimate: R } = ((e, t) => {
            let n = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
                l = (0, a.bG)([s.A], () => s.A.isFocused()),
                [i, u] = r.useState(!1),
                A = r.useRef(null);
            return (
                r.useEffect(() => {
                    null !== A.current && (clearTimeout(A.current), (A.current = null));
                    let r = l && (e || (!n && !t));
                    r && n
                        ? (A.current = window.setTimeout(() => {
                              u(!0);
                          }, 1e3))
                        : u(r);
                }, [l, e, n, t]),
                r.useEffect(
                    () => () => {
                        null !== A.current && (clearTimeout(A.current), (A.current = null));
                    },
                    [],
                ),
                { canAnimate: i }
            );
        })(f, g),
        m = (0, a.bG)([i.Ay], () => (null != n && null != t ? i.Ay.getMember(n, t.id) : null)),
        T = (0, d.A)((0, l.lw)({ userValue: t?.avatarDecoration, guildValue: m?.avatarDecoration, guildId: n })),
        _ = (0, A.VU)(),
        I = r.useMemo(
            () =>
                null != _ && "" !== _
                    ? _
                    : (0, u.F_)({ avatarDecoration: void 0 !== E ? E : T, canAnimate: R, size: v }),
            [_, E, T, R, v],
        );
    return {
        avatarPlaceholderSrc: c,
        avatarDecorationSrc: I,
        isAvatarDecorationAnimating: R,
        eventHandlers: { onMouseEnter: r.useCallback(() => p(!0), []), onMouseLeave: r.useCallback(() => p(!1), []) },
    };
};
