(l.d(t, { o: () => p }), l(321073));
var n = l(582128),
    a = l(806163),
    i = l(641150),
    r = l(17928),
    s = l(775602),
    o = l(365491),
    c = l(856686),
    u = l(758836),
    d = l(652215);
let E = {
        [u.G2.AVATAR_DECORATIONS]: i.q.AVATAR_DECORATION,
        [u.G2.PROFILE_EFFECTS]: i.q.PROFILE_EFFECT,
        [u.G2.NAMEPLATES]: i.q.NAMEPLATE,
        [u.G2.PROFILE_FRAMES]: i.q.PROFILE_FRAME,
        [u.G2.BUNDLES]: i.q.BUNDLE,
    },
    p = (e) => {
        let t = (0, r.bG)([s.Ay], () => s.Ay.useReducedMotion),
            {
                setItemTypeFilter: l,
                setThirdPartyOnlyFilter: i,
                setOfferEligibleFilter: p,
                reset: A,
                setCurrentTab: f,
            } = (0, o.v)(),
            C = n.useMemo(() => {
                var t;
                return (0, u.dF)(e) || (t = e) === u.G2.COLLABS || t === u.G2.OFFER_ELIGIBLE ? u.G2.CATALOG : e;
            }, [e]),
            [S, g] = n.useState(C),
            [_, O] = n.useState(u.Pf.VISIBLE);
        (n.useEffect(() => {
            S !== u.G2.GAME_SERVERS && f(S);
        }, [S, f]),
            n.useEffect(() => {
                if ((g(C), e === u.G2.CATALOG)) A();
                else if (e === u.G2.COLLABS) i();
                else if (e === u.G2.OFFER_ELIGIBLE) p();
                else if ((0, u.dF)(e)) {
                    let t = E[e];
                    null != t ? l(t) : A();
                }
            }, [C, e, l, i, p, A]));
        let { clearError: h } = (0, c.S)(),
            b = (0, a.W6)(),
            L = n.useCallback(
                async (e, n) => {
                    if ((h(), e === u.G2.CATALOG)) A();
                    else if (e === u.G2.COLLABS) i();
                    else if (e === u.G2.OFFER_ELIGIBLE) p();
                    else if ((0, u.dF)(e) && e !== S) {
                        let t = E[e];
                        null != t ? l(t) : A();
                    }
                    if (S !== e) {
                        if (n && !t) {
                            var a;
                            (O(u.Pf.OUT), await ((a = 1.1 * u.H1), new Promise((e) => setTimeout(e, a))));
                        }
                        (g(e === u.G2.HOME || e === u.G2.ORBS || e === u.G2.GAME_SERVERS ? e : u.G2.CATALOG),
                            n && !t && O(u.Pf.IN),
                            b.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            O(u.Pf.VISIBLE));
                    }
                },
                [b, l, i, p, A, S, h, t],
            );
        return { selectedTab: S, transitionState: _, transitionToTab: L };
    };
