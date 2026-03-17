s.d(t, { o: () => b }), s(321073);
var r = s(64700),
    l = s(873263),
    n = s(641150),
    a = s(151252),
    o = s(365491),
    i = s(856686),
    c = s(758836),
    u = s(652215);
let d = {
        [c.G2.AVATAR_DECORATIONS]: n.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: n.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: n.q.NAMEPLATE,
        [c.G2.BUNDLES]: n.q.BUNDLE,
    },
    b = (e) => {
        let { enabled: t } = (0, a.Z)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: s, reset: n, setCurrentTab: b } = (0, o.v)(),
            p = r.useMemo(
                () => (e !== c.G2.RIVALS && (e !== c.G2.ORBS || t) ? ((0, c.dF)(e) ? c.G2.CATALOG : e) : c.G2.HOME),
                [e, t],
            ),
            [S, E] = r.useState(p),
            [h, A] = r.useState(c.Pf.VISIBLE);
        r.useEffect(() => {
            b(S);
        }, [S, b]),
            r.useEffect(() => {
                if ((E(p), e === c.G2.CATALOG)) n();
                else if ((0, c.dF)(e)) {
                    let t = d[e];
                    null != t ? s(t) : n();
                }
            }, [p, e, s, n]);
        let { clearError: f } = (0, i.S)(),
            m = (0, l.W6)(),
            C = r.useCallback(
                async (e, t) => {
                    if (e !== c.G2.RIVALS) {
                        if ((f(), e === c.G2.CATALOG)) n();
                        else if ((0, c.dF)(e) && e !== S) {
                            let t = d[e];
                            null != t ? s(t) : n();
                        }
                        if (S !== e) {
                            if (t) {
                                let e;
                                A(c.Pf.OUT), await ((e = 1.1 * c.H1), new Promise((t) => setTimeout(t, e)));
                            }
                            E(e === c.G2.HOME || e === c.G2.ORBS ? e : c.G2.CATALOG),
                                t && A(c.Pf.IN),
                                m.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                                A(c.Pf.VISIBLE);
                        }
                    }
                },
                [m, s, n, S, f],
            );
        return { selectedTab: S, transitionState: h, transitionToTab: C };
    };
