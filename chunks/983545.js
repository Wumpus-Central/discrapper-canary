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
            [E, p] = n.useState(m),
            [C, A] = n.useState(i.Pf.VISIBLE);
        n.useEffect(() => {
            b(E);
        }, [E, b]),
            n.useEffect(() => {
                if ((p(m), e === i.G2.CATALOG)) d();
                else if (e === i.G2.COLLABS) l();
                else if (e === i.G2.OFFER_ELIGIBLE) s();
                else if ((0, i.dF)(e)) {
                    let l = u[e];
                    null != l ? t(l) : d();
                }
            }, [m, e, t, l, s, d]);
        let { clearError: S } = (0, o.S)(),
            f = (0, a.W6)(),
            h = n.useCallback(
                async (e, n) => {
                    if ((S(), e === i.G2.CATALOG)) d();
                    else if (e === i.G2.COLLABS) l();
                    else if (e === i.G2.OFFER_ELIGIBLE) s();
                    else if ((0, i.dF)(e) && e !== E) {
                        let l = u[e];
                        null != l ? t(l) : d();
                    }
                    if (E !== e) {
                        if (n) {
                            var a;
                            A(i.Pf.OUT), await ((a = 1.1 * i.H1), new Promise((e) => setTimeout(e, a)));
                        }
                        p(e === i.G2.HOME || e === i.G2.ORBS || e === i.G2.GAME_SERVERS ? e : i.G2.CATALOG),
                            n && A(i.Pf.IN),
                            f.push(c.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            A(i.Pf.VISIBLE);
                    }
                },
                [f, t, l, s, d, E, S],
            );
        return { selectedTab: E, transitionState: C, transitionToTab: h };
    };
