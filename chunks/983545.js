l.d(t, { o: () => d }), l(321073);
var n = l(582128),
    a = l(806163),
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
        let {
                setItemTypeFilter: t,
                setThirdPartyOnlyFilter: l,
                setOfferEligibleFilter: s,
                reset: d,
                setCurrentTab: b,
            } = (0, r.v)(),
            m = n.useMemo(() => {
                var t;
                return (0, i.dF)(e) || (t = e) === i.G2.COLLABS || t === i.G2.OFFER_ELIGIBLE ? i.G2.CATALOG : e;
            }, [e]),
            [p, E] = n.useState(m),
            [C, h] = n.useState(i.Pf.VISIBLE);
        n.useEffect(() => {
            b(p);
        }, [p, b]),
            n.useEffect(() => {
                if ((E(m), e === i.G2.CATALOG)) d();
                else if (e === i.G2.COLLABS) l();
                else if (e === i.G2.OFFER_ELIGIBLE) s();
                else if ((0, i.dF)(e)) {
                    let l = u[e];
                    null != l ? t(l) : d();
                }
            }, [m, e, t, l, s, d]);
        let { clearError: f } = (0, o.S)(),
            S = (0, a.W6)(),
            A = n.useCallback(
                async (e, n) => {
                    if ((f(), e === i.G2.CATALOG)) d();
                    else if (e === i.G2.COLLABS) l();
                    else if (e === i.G2.OFFER_ELIGIBLE) s();
                    else if ((0, i.dF)(e) && e !== p) {
                        let l = u[e];
                        null != l ? t(l) : d();
                    }
                    if (p !== e) {
                        if (n) {
                            var a;
                            h(i.Pf.OUT), await ((a = 1.1 * i.H1), new Promise((e) => setTimeout(e, a)));
                        }
                        E(e === i.G2.HOME || e === i.G2.ORBS || e === i.G2.GAME_SERVERS ? e : i.G2.CATALOG),
                            n && h(i.Pf.IN),
                            S.push(c.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            h(i.Pf.VISIBLE);
                    }
                },
                [S, t, l, s, d, p, f],
            );
        return { selectedTab: p, transitionState: C, transitionToTab: A };
    };
