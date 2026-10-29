(l.d(t, { o: () => A }), l(321073));
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
    A = (e) => {
        let t = (0, r.bG)([s.Ay], () => s.Ay.useReducedMotion),
            {
                setItemTypeFilter: l,
                setThirdPartyOnlyFilter: a,
                setOfferEligibleFilter: A,
                reset: p,
                setCurrentTab: C,
            } = (0, o.v)(),
            _ = n.useMemo(() => {
                var t;
                return (0, u.dF)(e) || (t = e) === u.G2.COLLABS || t === u.G2.OFFER_ELIGIBLE ? u.G2.CATALOG : e;
            }, [e]),
            [S, O] = n.useState(_),
            [L, g] = n.useState(u.Pf.VISIBLE);
        (n.useEffect(() => {
            S !== u.G2.GAME_SERVERS && C(S);
        }, [S, C]),
            n.useEffect(() => {
                if ((O(_), e === u.G2.CATALOG)) p();
                else if (e === u.G2.COLLABS) a();
                else if (e === u.G2.OFFER_ELIGIBLE) A();
                else if ((0, u.dF)(e)) {
                    let t = E[e];
                    null != t ? l(t) : p();
                }
            }, [_, e, l, a, A, p]));
        let { clearError: G } = (0, c.S)(),
            T = (0, i.W6)(),
            f = n.useCallback(
                async (e, n) => {
                    if ((G(), e === u.G2.CATALOG)) p();
                    else if (e === u.G2.COLLABS) a();
                    else if (e === u.G2.OFFER_ELIGIBLE) A();
                    else if ((0, u.dF)(e) && e !== S) {
                        let t = E[e];
                        null != t ? l(t) : p();
                    }
                    if (S !== e) {
                        if (n && !t) {
                            var i;
                            (g(u.Pf.OUT), await ((i = 1.1 * u.H1), new Promise((e) => setTimeout(e, i))));
                        }
                        (O(e === u.G2.HOME || e === u.G2.ORBS || e === u.G2.GAME_SERVERS ? e : u.G2.CATALOG),
                            n && !t && g(u.Pf.IN),
                            T.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            g(u.Pf.VISIBLE));
                    }
                },
                [T, l, a, A, p, S, G, t],
            );
        return { selectedTab: S, transitionState: L, transitionToTab: f };
    };
