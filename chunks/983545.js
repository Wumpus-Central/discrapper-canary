"use strict";
s.d(t, { o: () => g }), s(321073);
var n = s(64700),
    r = s(960488),
    l = s(641150),
    a = s(151252),
    i = s(365491),
    o = s(856686),
    c = s(758836),
    d = s(652215);
let u = {
        [c.G2.AVATAR_DECORATIONS]: l.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: l.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: l.q.NAMEPLATE,
        [c.G2.BUNDLES]: l.q.BUNDLE,
    },
    g = (e) => {
        let { enabled: t } = (0, a.Z)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: s, reset: l, setCurrentTab: g } = (0, i.v)(),
            m = n.useMemo(() => (e !== c.G2.ORBS || t ? ((0, c.dF)(e) ? c.G2.CATALOG : e) : c.G2.HOME), [e, t]),
            [_, h] = n.useState(m),
            [p, f] = n.useState(c.Pf.VISIBLE);
        n.useEffect(() => {
            g(_);
        }, [_, g]),
            n.useEffect(() => {
                if ((h(m), e === c.G2.CATALOG)) l();
                else if ((0, c.dF)(e)) {
                    let t = u[e];
                    null != t ? s(t) : l();
                }
            }, [m, e, s, l]);
        let { clearError: E } = (0, o.S)(),
            C = (0, r.W6)(),
            b = n.useCallback(
                async (e, t) => {
                    if ((E(), e === c.G2.CATALOG)) l();
                    else if ((0, c.dF)(e) && e !== _) {
                        let t = u[e];
                        null != t ? s(t) : l();
                    }
                    if (_ !== e) {
                        if (t) {
                            let e;
                            f(c.Pf.OUT), await ((e = 1.1 * c.H1), new Promise((t) => setTimeout(t, e)));
                        }
                        h([c.G2.HOME, c.G2.ORBS].includes(e) ? e : c.G2.CATALOG),
                            t && f(c.Pf.IN),
                            C.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            f(c.Pf.VISIBLE);
                    }
                },
                [C, s, l, _, E],
            );
        return { selectedTab: _, transitionState: p, transitionToTab: b };
    };
