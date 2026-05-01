r.d(t, { o: () => b }), r(321073);
var l = r(64700),
    s = r(873263),
    n = r(641150),
    a = r(270051),
    o = r(23161),
    i = r(856686),
    c = r(758836),
    u = r(652215);
let d = {
        [c.G2.AVATAR_DECORATIONS]: n.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: n.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: n.q.NAMEPLATE,
        [c.G2.BUNDLES]: n.q.BUNDLE,
    },
    b = (e) => {
        let { enabled: t } = (0, a.Z)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: r, reset: n, setCurrentTab: b } = (0, o.v)(),
            p = l.useMemo(
                () => (e !== c.G2.RIVALS && (e !== c.G2.ORBS || t) ? ((0, c.dF)(e) ? c.G2.CATALOG : e) : c.G2.HOME),
                [e, t],
            ),
            [m, S] = l.useState(p),
            [h, E] = l.useState(c.Pf.VISIBLE);
        l.useEffect(() => {
            b(m);
        }, [m, b]),
            l.useEffect(() => {
                if ((S(p), e === c.G2.CATALOG)) n();
                else if ((0, c.dF)(e)) {
                    let t = d[e];
                    null != t ? r(t) : n();
                }
            }, [p, e, r, n]);
        let { clearError: f } = (0, i.S)(),
            C = (0, s.W6)(),
            g = l.useCallback(
                async (e, t) => {
                    if (e !== c.G2.RIVALS) {
                        if ((f(), e === c.G2.CATALOG)) n();
                        else if ((0, c.dF)(e) && e !== m) {
                            let t = d[e];
                            null != t ? r(t) : n();
                        }
                        if (m !== e) {
                            if (t) {
                                let e;
                                E(c.Pf.OUT), await ((e = 1.1 * c.H1), new Promise((t) => setTimeout(t, e)));
                            }
                            S(e === c.G2.HOME || e === c.G2.ORBS ? e : c.G2.CATALOG),
                                t && E(c.Pf.IN),
                                C.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                                E(c.Pf.VISIBLE);
                        }
                    }
                },
                [C, r, n, m, f],
            );
        return { selectedTab: m, transitionState: h, transitionToTab: g };
    };
