r.d(t, { o: () => d }), r(321073);
var l = r(64700),
    n = r(873263),
    s = r(641150),
    a = r(23161),
    o = r(856686),
    i = r(758836),
    c = r(652215);
let u = {
        [i.G2.AVATAR_DECORATIONS]: s.q.AVATAR_DECORATION,
        [i.G2.PROFILE_EFFECTS]: s.q.PROFILE_EFFECT,
        [i.G2.NAMEPLATES]: s.q.NAMEPLATE,
        [i.G2.PROFILE_FRAMES]: s.q.PROFILE_FRAME,
        [i.G2.BUNDLES]: s.q.BUNDLE,
    },
    d = (e) => {
        let { setItemTypeFilter: t, reset: r, setCurrentTab: s } = (0, a.v)(),
            d = l.useMemo(() => ((0, i.dF)(e) ? i.G2.CATALOG : e), [e]),
            [b, m] = l.useState(d),
            [p, S] = l.useState(i.Pf.VISIBLE);
        l.useEffect(() => {
            s(b);
        }, [b, s]),
            l.useEffect(() => {
                if ((m(d), e === i.G2.CATALOG)) r();
                else if ((0, i.dF)(e)) {
                    let l = u[e];
                    null != l ? t(l) : r();
                }
            }, [d, e, t, r]);
        let { clearError: E } = (0, o.S)(),
            h = (0, n.W6)(),
            f = l.useCallback(
                async (e, l) => {
                    if ((E(), e === i.G2.CATALOG)) r();
                    else if ((0, i.dF)(e) && e !== b) {
                        let l = u[e];
                        null != l ? t(l) : r();
                    }
                    if (b !== e) {
                        if (l) {
                            let e;
                            S(i.Pf.OUT), await ((e = 1.1 * i.H1), new Promise((t) => setTimeout(t, e)));
                        }
                        m(e === i.G2.HOME || e === i.G2.ORBS ? e : i.G2.CATALOG),
                            l && S(i.Pf.IN),
                            h.push(c.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            S(i.Pf.VISIBLE);
                    }
                },
                [h, t, r, b, E],
            );
        return { selectedTab: b, transitionState: p, transitionToTab: f };
    };
