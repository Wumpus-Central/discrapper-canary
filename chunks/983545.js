(l.d(t, { o: () => p }), l(321073));
var n = l(582128),
    i = l(806163),
    a = l(641150),
    r = l(17928),
    s = l(775602),
    o = l(365491),
    c = l(856686),
    u = l(758836),
    d = l(652215);
let E = {
        [u.G2.AVATAR_DECORATIONS]: a.q.AVATAR_DECORATION,
        [u.G2.PROFILE_EFFECTS]: a.q.PROFILE_EFFECT,
        [u.G2.NAMEPLATES]: a.q.NAMEPLATE,
        [u.G2.PROFILE_FRAMES]: a.q.PROFILE_FRAME,
        [u.G2.BUNDLES]: a.q.BUNDLE,
    },
    p = (e) => {
        let t = (0, r.bG)([s.Ay], () => s.Ay.useReducedMotion),
            {
                setItemTypeFilter: l,
                setThirdPartyOnlyFilter: a,
                setOfferEligibleFilter: p,
                reset: A,
                setCurrentTab: C,
            } = (0, o.v)(),
            _ = n.useMemo(() => {
                var t;
                return (0, u.dF)(e) || (t = e) === u.G2.COLLABS || t === u.G2.OFFER_ELIGIBLE ? u.G2.CATALOG : e;
            }, [e]),
            [g, S] = n.useState(_),
            [O, f] = n.useState(u.Pf.VISIBLE);
        (n.useEffect(() => {
            g !== u.G2.GAME_SERVERS && C(g);
        }, [g, C]),
            n.useEffect(() => {
                if ((S(_), e === u.G2.CATALOG)) A();
                else if (e === u.G2.COLLABS) a();
                else if (e === u.G2.OFFER_ELIGIBLE) p();
                else if ((0, u.dF)(e)) {
                    let t = E[e];
                    null != t ? l(t) : A();
                }
            }, [_, e, l, a, p, A]));
        let { clearError: L } = (0, c.S)(),
            b = (0, i.W6)(),
            h = n.useCallback(
                async (e, n) => {
                    if ((L(), e === u.G2.CATALOG)) A();
                    else if (e === u.G2.COLLABS) a();
                    else if (e === u.G2.OFFER_ELIGIBLE) p();
                    else if ((0, u.dF)(e) && e !== g) {
                        let t = E[e];
                        null != t ? l(t) : A();
                    }
                    if (g !== e) {
                        if (n && !t) {
                            var i;
                            (f(u.Pf.OUT), await ((i = 1.1 * u.H1), new Promise((e) => setTimeout(e, i))));
                        }
                        (S(e === u.G2.HOME || e === u.G2.ORBS || e === u.G2.GAME_SERVERS ? e : u.G2.CATALOG),
                            n && !t && f(u.Pf.IN),
                            b.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            f(u.Pf.VISIBLE));
                    }
                },
                [b, l, a, p, A, g, L, t],
            );
        return { selectedTab: g, transitionState: O, transitionToTab: h };
    };
