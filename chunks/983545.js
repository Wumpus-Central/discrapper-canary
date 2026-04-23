r.d(t, { o: () => _ }), r(321073);
var n = r(64700),
    s = r(873263),
    l = r(641150),
    a = r(270051),
    o = r(23161),
    i = r(856686),
    c = r(758836),
    d = r(652215);
let u = {
        [c.G2.AVATAR_DECORATIONS]: l.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: l.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: l.q.NAMEPLATE,
        [c.G2.BUNDLES]: l.q.BUNDLE,
    },
    _ = (e) => {
        let { enabled: t } = (0, a.Z)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: r, reset: l, setCurrentTab: _ } = (0, o.v)(),
            b = n.useMemo(
                () => (e !== c.G2.RIVALS && (e !== c.G2.ORBS || t) ? ((0, c.dF)(e) ? c.G2.CATALOG : e) : c.G2.HOME),
                [e, t],
            ),
            [p, m] = n.useState(b),
            [f, C] = n.useState(c.Pf.VISIBLE);
        n.useEffect(() => {
            _(p);
        }, [p, _]),
            n.useEffect(() => {
                if ((m(b), e === c.G2.CATALOG)) l();
                else if ((0, c.dF)(e)) {
                    let t = u[e];
                    null != t ? r(t) : l();
                }
            }, [b, e, r, l]);
        let { clearError: g } = (0, i.S)(),
            h = (0, s.W6)(),
            S = n.useCallback(
                async (e, t) => {
                    if (e !== c.G2.RIVALS) {
                        if ((g(), e === c.G2.CATALOG)) l();
                        else if ((0, c.dF)(e) && e !== p) {
                            let t = u[e];
                            null != t ? r(t) : l();
                        }
                        if (p !== e) {
                            if (t) {
                                let e;
                                C(c.Pf.OUT), await ((e = 1.1 * c.H1), new Promise((t) => setTimeout(t, e)));
                            }
                            m(e === c.G2.HOME || e === c.G2.ORBS ? e : c.G2.CATALOG),
                                t && C(c.Pf.IN),
                                h.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                                C(c.Pf.VISIBLE);
                        }
                    }
                },
                [h, r, l, p, g],
            );
        return { selectedTab: p, transitionState: f, transitionToTab: S };
    };
