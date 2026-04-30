l.d(t, { o: () => b }), l(321073);
var r = l(64700),
    s = l(873263),
    n = l(641150),
    a = l(270051),
    o = l(23161),
    i = l(856686),
    c = l(758836),
    u = l(652215);
let d = {
        [c.G2.AVATAR_DECORATIONS]: n.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: n.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: n.q.NAMEPLATE,
        [c.G2.PROFILE_FRAMES]: n.q.PROFILE_FRAME,
        [c.G2.BUNDLES]: n.q.BUNDLE,
    },
    b = (e) => {
        let { enabled: t } = (0, a.Z)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: l, reset: n, setCurrentTab: b } = (0, o.v)(),
            S = r.useMemo(
                () => (e !== c.G2.RIVALS && (e !== c.G2.ORBS || t) ? ((0, c.dF)(e) ? c.G2.CATALOG : e) : c.G2.HOME),
                [e, t],
            ),
            [p, m] = r.useState(S),
            [E, h] = r.useState(c.Pf.VISIBLE);
        r.useEffect(() => {
            b(p);
        }, [p, b]),
            r.useEffect(() => {
                if ((m(S), e === c.G2.CATALOG)) n();
                else if ((0, c.dF)(e)) {
                    let t = d[e];
                    null != t ? l(t) : n();
                }
            }, [S, e, l, n]);
        let { clearError: f } = (0, i.S)(),
            C = (0, s.W6)(),
            g = r.useCallback(
                async (e, t) => {
                    if (e !== c.G2.RIVALS) {
                        if ((f(), e === c.G2.CATALOG)) n();
                        else if ((0, c.dF)(e) && e !== p) {
                            let t = d[e];
                            null != t ? l(t) : n();
                        }
                        if (p !== e) {
                            if (t) {
                                let e;
                                h(c.Pf.OUT), await ((e = 1.1 * c.H1), new Promise((t) => setTimeout(t, e)));
                            }
                            m(e === c.G2.HOME || e === c.G2.ORBS ? e : c.G2.CATALOG),
                                t && h(c.Pf.IN),
                                C.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                                h(c.Pf.VISIBLE);
                        }
                    }
                },
                [C, l, n, p, f],
            );
        return { selectedTab: p, transitionState: E, transitionToTab: g };
    };
