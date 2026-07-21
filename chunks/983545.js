l.d(t, { o: () => d }), l(321073);
var n = l(64700),
    s = l(873263),
    a = l(641150),
    r = l(23161),
    o = l(856686),
    i = l(758836),
    c = l(652215);
let u = {
        [i.G2.AVATAR_DECORATIONS]: a.q.AVATAR_DECORATION,
        [i.G2.PROFILE_EFFECTS]: a.q.PROFILE_EFFECT,
        [i.G2.NAMEPLATES]: a.q.NAMEPLATE,
        [i.G2.PROFILE_FRAMES]: a.q.PROFILE_FRAME,
        [i.G2.BUNDLES]: a.q.BUNDLE,
    },
    d = (e) => {
        let { setItemTypeFilter: t, reset: l, setCurrentTab: a } = (0, r.v)(),
            d = n.useMemo(() => ((0, i.dF)(e) ? i.G2.CATALOG : e), [e]),
            [b, m] = n.useState(d),
            [p, E] = n.useState(i.Pf.VISIBLE);
        n.useEffect(() => {
            a(b);
        }, [b, a]),
            n.useEffect(() => {
                if ((m(d), e === i.G2.CATALOG)) l();
                else if ((0, i.dF)(e)) {
                    let n = u[e];
                    null != n ? t(n) : l();
                }
            }, [d, e, t, l]);
        let { clearError: C } = (0, o.S)(),
            A = (0, s.W6)(),
            h = n.useCallback(
                async (e, n) => {
                    if ((C(), e === i.G2.CATALOG)) l();
                    else if ((0, i.dF)(e) && e !== b) {
                        let n = u[e];
                        null != n ? t(n) : l();
                    }
                    if (b !== e) {
                        if (n) {
                            var s;
                            E(i.Pf.OUT), await ((s = 1.1 * i.H1), new Promise((e) => setTimeout(e, s)));
                        }
                        m(e === i.G2.HOME || e === i.G2.ORBS || e === i.G2.GAME_SERVERS ? e : i.G2.CATALOG),
                            n && E(i.Pf.IN),
                            A.push(c.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            E(i.Pf.VISIBLE);
                    }
                },
                [A, t, l, b, C],
            );
        return { selectedTab: b, transitionState: p, transitionToTab: h };
    };
