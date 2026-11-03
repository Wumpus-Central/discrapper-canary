(l.d(t, { o: () => A }), l(321073));
var n = l(582128),
    a = l(806163),
    i = l(641150),
    s = l(17928),
    o = l(775602),
    r = l(365491),
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
    A = (e) => {
        let t = (0, s.bG)([o.Ay], () => o.Ay.useReducedMotion),
            {
                setItemTypeFilter: l,
                setThirdPartyOnlyFilter: i,
                setOfferEligibleFilter: A,
                reset: p,
                setCurrentTab: C,
            } = (0, r.v)(),
            f = n.useMemo(() => {
                var t;
                return (0, u.dF)(e) || (t = e) === u.G2.COLLABS || t === u.G2.OFFER_ELIGIBLE ? u.G2.CATALOG : e;
            }, [e]),
            [S, O] = n.useState(f),
            [b, g] = n.useState(u.Pf.VISIBLE);
        (n.useEffect(() => {
            S !== u.G2.GAME_SERVERS && C(S);
        }, [S, C]),
            n.useEffect(() => {
                if ((O(f), e === u.G2.CATALOG)) p();
                else if (e === u.G2.COLLABS) i();
                else if (e === u.G2.OFFER_ELIGIBLE) A();
                else if ((0, u.dF)(e)) {
                    let t = E[e];
                    null != t ? l(t) : p();
                }
            }, [f, e, l, i, A, p]));
        let { clearError: _ } = (0, c.S)(),
            L = (0, a.W6)(),
            h = n.useCallback(
                async (e, n) => {
                    if ((_(), e === u.G2.CATALOG)) p();
                    else if (e === u.G2.COLLABS) i();
                    else if (e === u.G2.OFFER_ELIGIBLE) A();
                    else if ((0, u.dF)(e) && e !== S) {
                        let t = E[e];
                        null != t ? l(t) : p();
                    }
                    if (S !== e) {
                        if (n && !t) {
                            var a;
                            (g(u.Pf.OUT), await ((a = 1.1 * u.H1), new Promise((e) => setTimeout(e, a))));
                        }
                        (O(e === u.G2.HOME || e === u.G2.ORBS || e === u.G2.GAME_SERVERS ? e : u.G2.CATALOG),
                            n && !t && g(u.Pf.IN),
                            L.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            g(u.Pf.VISIBLE));
                    }
                },
                [L, l, i, A, p, S, _, t],
            );
        return { selectedTab: S, transitionState: b, transitionToTab: h };
    };
