r.d(t, { o: () => b }), r(321073);
var l = r(64700),
    s = r(873263),
    n = r(641150),
    a = r(371446),
    o = r(23161),
    i = r(856686),
    c = r(758836),
    u = r(652215);
let d = {
        [c.G2.AVATAR_DECORATIONS]: n.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: n.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: n.q.NAMEPLATE,
        [c.G2.PROFILE_FRAMES]: n.q.PROFILE_FRAME,
        [c.G2.BUNDLES]: n.q.BUNDLE,
    },
    b = (e) => {
        let { enabled: t } = (0, a.Z)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: r, reset: n, setCurrentTab: b } = (0, o.v)(),
            m = l.useMemo(() => (e !== c.G2.ORBS || t ? ((0, c.dF)(e) ? c.G2.CATALOG : e) : c.G2.HOME), [e, t]),
            [S, p] = l.useState(m),
            [E, h] = l.useState(c.Pf.VISIBLE);
        l.useEffect(() => {
            b(S);
        }, [S, b]),
            l.useEffect(() => {
                if ((p(m), e === c.G2.CATALOG)) n();
                else if ((0, c.dF)(e)) {
                    let t = d[e];
                    null != t ? r(t) : n();
                }
            }, [m, e, r, n]);
        let { clearError: f } = (0, i.S)(),
            C = (0, s.W6)(),
            g = l.useCallback(
                async (e, t) => {
                    if ((f(), e === c.G2.CATALOG)) n();
                    else if ((0, c.dF)(e) && e !== S) {
                        let t = d[e];
                        null != t ? r(t) : n();
                    }
                    if (S !== e) {
                        if (t) {
                            let e;
                            h(c.Pf.OUT), await ((e = 1.1 * c.H1), new Promise((t) => setTimeout(t, e)));
                        }
                        p(e === c.G2.HOME || e === c.G2.ORBS ? e : c.G2.CATALOG),
                            t && h(c.Pf.IN),
                            C.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            h(c.Pf.VISIBLE);
                    }
                },
                [C, r, n, S, f],
            );
        return { selectedTab: S, transitionState: E, transitionToTab: g };
    };
