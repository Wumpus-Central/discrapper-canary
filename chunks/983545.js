s.d(t, { o: () => b }), s(321073);
var r = s(64700),
    l = s(960488),
    a = s(641150),
    n = s(151252),
    o = s(365491),
    i = s(856686),
    c = s(758836),
    u = s(652215);
let d = {
        [c.G2.AVATAR_DECORATIONS]: a.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: a.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: a.q.NAMEPLATE,
        [c.G2.BUNDLES]: a.q.BUNDLE,
    },
    b = (e) => {
        let { enabled: t } = (0, n.Z)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: s, reset: a, setCurrentTab: b } = (0, o.v)(),
            S = r.useMemo(() => (e !== c.G2.ORBS || t ? ((0, c.dF)(e) ? c.G2.CATALOG : e) : c.G2.HOME), [e, t]),
            [E, p] = r.useState(S),
            [f, h] = r.useState(c.Pf.VISIBLE);
        r.useEffect(() => {
            b(E);
        }, [E, b]),
            r.useEffect(() => {
                if ((p(S), e === c.G2.CATALOG)) a();
                else if ((0, c.dF)(e)) {
                    let t = d[e];
                    null != t ? s(t) : a();
                }
            }, [S, e, s, a]);
        let { clearError: m } = (0, i.S)(),
            A = (0, l.W6)(),
            C = r.useCallback(
                async (e, t) => {
                    if ((m(), e === c.G2.CATALOG)) a();
                    else if ((0, c.dF)(e) && e !== E) {
                        let t = d[e];
                        null != t ? s(t) : a();
                    }
                    if (E !== e) {
                        if (t) {
                            let e;
                            h(c.Pf.OUT), await ((e = 1.1 * c.H1), new Promise((t) => setTimeout(t, e)));
                        }
                        p([c.G2.HOME, c.G2.ORBS].includes(e) ? e : c.G2.CATALOG),
                            t && h(c.Pf.IN),
                            A.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            h(c.Pf.VISIBLE);
                    }
                },
                [A, s, a, E, m],
            );
        return { selectedTab: E, transitionState: f, transitionToTab: C };
    };
