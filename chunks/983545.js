l.d(t, { o: () => d }), l(321073);
var n = l(64700),
    a = l(873263),
    s = l(641150),
    r = l(23161),
    o = l(856686),
    i = l(758836),
    c = l(652215);
let u = {
        [i.G2.AVATAR_DECORATIONS]: s.q.AVATAR_DECORATION,
        [i.G2.PROFILE_EFFECTS]: s.q.PROFILE_EFFECT,
        [i.G2.NAMEPLATES]: s.q.NAMEPLATE,
        [i.G2.PROFILE_FRAMES]: s.q.PROFILE_FRAME,
        [i.G2.BUNDLES]: s.q.BUNDLE,
    },
    d = (e) => {
        let { setItemTypeFilter: t, setThirdPartyOnlyFilter: l, reset: s, setCurrentTab: d } = (0, r.v)(),
            b = n.useMemo(() => ((0, i.dF)(e) || e === i.G2.COLLABS ? i.G2.CATALOG : e), [e]),
            [m, p] = n.useState(b),
            [C, E] = n.useState(i.Pf.VISIBLE);
        n.useEffect(() => {
            d(m);
        }, [m, d]),
            n.useEffect(() => {
                if ((p(b), e === i.G2.CATALOG)) s();
                else if (e === i.G2.COLLABS) l();
                else if ((0, i.dF)(e)) {
                    let l = u[e];
                    null != l ? t(l) : s();
                }
            }, [b, e, t, l, s]);
        let { clearError: A } = (0, o.S)(),
            S = (0, a.W6)(),
            f = n.useCallback(
                async (e, n) => {
                    if ((A(), e === i.G2.CATALOG)) s();
                    else if (e === i.G2.COLLABS) l();
                    else if ((0, i.dF)(e) && e !== m) {
                        let l = u[e];
                        null != l ? t(l) : s();
                    }
                    if (m !== e) {
                        if (n) {
                            var a;
                            E(i.Pf.OUT), await ((a = 1.1 * i.H1), new Promise((e) => setTimeout(e, a)));
                        }
                        p(e === i.G2.HOME || e === i.G2.ORBS || e === i.G2.GAME_SERVERS ? e : i.G2.CATALOG),
                            n && E(i.Pf.IN),
                            S.push(c.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            E(i.Pf.VISIBLE);
                    }
                },
                [S, t, l, s, m, A],
            );
        return { selectedTab: m, transitionState: C, transitionToTab: f };
    };
