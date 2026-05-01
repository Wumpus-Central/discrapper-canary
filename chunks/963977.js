t.d(a, { A: () => d });
var n = t(64700),
    r = t(17928),
    l = t(919395),
    i = t(696451),
    o = t(486020),
    s = t(775602),
    u = t(531685),
    _ = t(940622),
    c = t(601255),
    p = t(476324);
let d = (e) => {
    let { user: a, guildId: t, size: d, avatarDecorationOverride: g, onlyAnimateOnHoverOrFocus: A = !1 } = e,
        [f, E] = n.useState(!1),
        { canAnimate: v } = ((e, a) => {
            let t = (0, r.bG)([s.A], () => s.A.useReducedMotion),
                l = (0, r.bG)([u.A], () => u.A.isFocused()),
                [i, o] = n.useState(!1),
                _ = n.useRef(null);
            return (
                n.useEffect(() => {
                    null !== _.current && (clearTimeout(_.current), (_.current = null));
                    let n = l && (e || (!t && !a));
                    n && t
                        ? (_.current = window.setTimeout(() => {
                              o(!0);
                          }, 1e3))
                        : o(n);
                }, [l, e, t, a]),
                n.useEffect(
                    () => () => {
                        null !== _.current && (clearTimeout(_.current), (_.current = null));
                    },
                    [],
                ),
                { canAnimate: i }
            );
        })(f, A),
        m = (0, r.bG)([i.Ay], () => (null != t && null != a ? i.Ay.getMember(t, a.id) : null)),
        b = (0, c.A)((0, l.lw)({ userValue: a?.avatarDecoration, guildValue: m?.avatarDecoration, guildId: t })),
        R = (0, _.VU)(),
        h = n.useMemo(
            () =>
                null != R && "" !== R
                    ? R
                    : (0, o.F_)({ avatarDecoration: void 0 !== g ? g : b, canAnimate: v, size: d }),
            [R, g, b, v, d],
        );
    return {
        avatarPlaceholderSrc: p,
        avatarDecorationSrc: h,
        isAvatarDecorationAnimating: v,
        eventHandlers: { onMouseEnter: n.useCallback(() => E(!0), []), onMouseLeave: n.useCallback(() => E(!1), []) },
    };
};
