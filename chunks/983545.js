(l.d(t, { o: () => A }), l(321073));
var a = l(582128),
    n = l(806163),
    i = l(641150),
    s = l(17928),
    o = l(775602),
    c = l(365491),
    r = l(856686),
    E = l(758836),
    u = l(652215);
let C = {
        [E.G2.AVATAR_DECORATIONS]: i.q.AVATAR_DECORATION,
        [E.G2.PROFILE_EFFECTS]: i.q.PROFILE_EFFECT,
        [E.G2.NAMEPLATES]: i.q.NAMEPLATE,
        [E.G2.PROFILE_FRAMES]: i.q.PROFILE_FRAME,
        [E.G2.BUNDLES]: i.q.BUNDLE,
    },
    A = (e) => {
        let t = (0, s.bG)([o.Ay], () => o.Ay.useReducedMotion),
            {
                setItemTypeFilter: l,
                setThirdPartyOnlyFilter: i,
                setOfferEligibleFilter: A,
                reset: L,
                setCurrentTab: O,
            } = (0, c.v)(),
            S = a.useMemo(() => {
                var t;
                return (0, E.dF)(e) || (t = e) === E.G2.COLLABS || t === E.G2.OFFER_ELIGIBLE ? E.G2.CATALOG : e;
            }, [e]),
            [_, p] = a.useState(S),
            [d, G] = a.useState(E.Pf.VISIBLE);
        (a.useEffect(() => {
            _ !== E.G2.GAME_SERVERS && O(_);
        }, [_, O]),
            a.useEffect(() => {
                if ((p(S), e === E.G2.CATALOG)) L();
                else if (e === E.G2.COLLABS) i();
                else if (e === E.G2.OFFER_ELIGIBLE) A();
                else if ((0, E.dF)(e)) {
                    let t = C[e];
                    null != t ? l(t) : L();
                }
            }, [S, e, l, i, A, L]));
        let { clearError: T } = (0, r.S)(),
            I = (0, n.W6)(),
            g = a.useCallback(
                async (e, a) => {
                    if ((T(), e === E.G2.CATALOG)) L();
                    else if (e === E.G2.COLLABS) i();
                    else if (e === E.G2.OFFER_ELIGIBLE) A();
                    else if ((0, E.dF)(e) && e !== _) {
                        let t = C[e];
                        null != t ? l(t) : L();
                    }
                    if (_ !== e) {
                        if (a && !t) {
                            var n;
                            (G(E.Pf.OUT), await ((n = 1.1 * E.H1), new Promise((e) => setTimeout(e, n))));
                        }
                        (p(e === E.G2.HOME || e === E.G2.ORBS || e === E.G2.GAME_SERVERS ? e : E.G2.CATALOG),
                            a && !t && G(E.Pf.IN),
                            I.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            G(E.Pf.VISIBLE));
                    }
                },
                [I, l, i, A, L, _, T, t],
            );
        return { selectedTab: _, transitionState: d, transitionToTab: g };
    };
