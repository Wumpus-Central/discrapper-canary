l.d(t, {
    o: () => f,
}),
    l(896048),
    l(321073);
var n = l(64700),
    r = l(960488),
    s = l(641150),
    a = l(151252),
    i = l(365491),
    o = l(856686),
    c = l(758836),
    u = l(652215);
let d = {
        [c.G2.AVATAR_DECORATIONS]: s.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: s.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: s.q.NAMEPLATE,
        [c.G2.BUNDLES]: s.q.BUNDLE,
    },
    f = (e) => {
        let { enabled: t } = (0, a.Z)({
                location: "useShopViewTransition",
            }),
            { setItemTypeFilter: l, reset: s, setCurrentTab: f } = (0, i.v)(),
            b = n.useMemo(() => (e !== c.G2.ORBS || t ? ((0, c.dF)(e) ? c.G2.CATALOG : e) : c.G2.HOME), [e, t]),
            [g, p] = n.useState(b),
            [m, h] = n.useState(c.Pf.VISIBLE);
        n.useEffect(() => {
            f(g);
        }, [g, f]),
            n.useEffect(() => {
                if ((p(b), e === c.G2.CATALOG)) s();
                else if ((0, c.dF)(e)) {
                    let t = d[e];
                    null != t ? l(t) : s();
                }
            }, [b, e, l, s]);
        let { clearError: E } = (0, o.S)(),
            v = (0, r.W6)(),
            A = n.useCallback(
                async (e, t) => {
                    if ((E(), e === c.G2.CATALOG)) s();
                    else if ((0, c.dF)(e) && e !== g) {
                        let t = d[e];
                        null != t ? l(t) : s();
                    }
                    if (g !== e) {
                        if (t) {
                            let e;
                            h(c.Pf.OUT), await ((e = 1.1 * c.H1), new Promise((t) => setTimeout(t, e)));
                        }
                        p([c.G2.HOME, c.G2.ORBS].includes(e) ? e : c.G2.CATALOG),
                            t && h(c.Pf.IN),
                            v.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), {
                                shallow: !0,
                            }),
                            h(c.Pf.VISIBLE);
                    }
                },
                [v, l, s, g, E],
            );
        return {
            selectedTab: g,
            transitionState: m,
            transitionToTab: A,
        };
    };
