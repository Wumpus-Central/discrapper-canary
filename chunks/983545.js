(l.d(t, { o: () => p }), l(321073));
var n = l(582128),
    a = l(806163),
    i = l(641150),
    r = l(17928),
    s = l(775602),
    o = l(365491),
    u = l(856686),
    c = l(758836),
    d = l(652215);
let E = {
        [c.G2.AVATAR_DECORATIONS]: i.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: i.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: i.q.NAMEPLATE,
        [c.G2.PROFILE_FRAMES]: i.q.PROFILE_FRAME,
        [c.G2.BUNDLES]: i.q.BUNDLE,
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
                return (0, c.dF)(e) || (t = e) === c.G2.COLLABS || t === c.G2.OFFER_ELIGIBLE ? c.G2.CATALOG : e;
            }, [e]),
            [S, g] = n.useState(C),
            [_, O] = n.useState(c.Pf.VISIBLE);
        (n.useEffect(() => {
            S !== c.G2.GAME_SERVERS && f(S);
        }, [S, f]),
            n.useEffect(() => {
                if ((g(C), e === c.G2.CATALOG)) A();
                else if (e === c.G2.COLLABS) i();
                else if (e === c.G2.OFFER_ELIGIBLE) p();
                else if ((0, c.dF)(e)) {
                    let t = E[e];
                    null != t ? l(t) : A();
                }
            }, [C, e, l, i, p, A]));
        let { clearError: h } = (0, u.S)(),
            b = (0, a.W6)(),
            L = n.useCallback(
                async (e, n) => {
                    if ((h(), e === c.G2.CATALOG)) A();
                    else if (e === c.G2.COLLABS) i();
                    else if (e === c.G2.OFFER_ELIGIBLE) p();
                    else if ((0, c.dF)(e) && e !== S) {
                        let t = E[e];
                        null != t ? l(t) : A();
                    }
                    if (S !== e) {
                        if (n && !t) {
                            var a;
                            (O(c.Pf.OUT), await ((a = 1.1 * c.H1), new Promise((e) => setTimeout(e, a))));
                        }
                        (g(e === c.G2.HOME || e === c.G2.ORBS || e === c.G2.GAME_SERVERS ? e : c.G2.CATALOG),
                            n && !t && O(c.Pf.IN),
                            b.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            O(c.Pf.VISIBLE));
                    }
                },
                [b, l, i, p, A, S, h, t],
            );
        return { selectedTab: S, transitionState: _, transitionToTab: L };
    };
