(l.d(t, { o: () => p }), l(321073));
var n = l(582128),
    a = l(806163),
    i = l(641150),
    r = l(17928),
    s = l(775602),
    o = l(365491),
    c = l(856686),
    u = l(758836),
    E = l(652215);
let d = {
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
                setCurrentTab: _,
            } = (0, o.v)(),
            C = n.useMemo(() => {
                var t;
                return (0, u.dF)(e) || (t = e) === u.G2.COLLABS || t === u.G2.OFFER_ELIGIBLE ? u.G2.CATALOG : e;
            }, [e]),
            [O, S] = n.useState(C),
            [L, g] = n.useState(u.Pf.VISIBLE);
        (n.useEffect(() => {
            O !== u.G2.GAME_SERVERS && _(O);
        }, [O, _]),
            n.useEffect(() => {
                if ((S(C), e === u.G2.CATALOG)) A();
                else if (e === u.G2.COLLABS) i();
                else if (e === u.G2.OFFER_ELIGIBLE) p();
                else if ((0, u.dF)(e)) {
                    let t = d[e];
                    null != t ? l(t) : A();
                }
            }, [C, e, l, i, p, A]));
        let { clearError: G } = (0, c.S)(),
            T = (0, a.W6)(),
            I = n.useCallback(
                async (e, n) => {
                    if ((G(), e === u.G2.CATALOG)) A();
                    else if (e === u.G2.COLLABS) i();
                    else if (e === u.G2.OFFER_ELIGIBLE) p();
                    else if ((0, u.dF)(e) && e !== O) {
                        let t = d[e];
                        null != t ? l(t) : A();
                    }
                    if (O !== e) {
                        if (n && !t) {
                            var a;
                            (g(u.Pf.OUT), await ((a = 1.1 * u.H1), new Promise((e) => setTimeout(e, a))));
                        }
                        (S(e === u.G2.HOME || e === u.G2.ORBS || e === u.G2.GAME_SERVERS ? e : u.G2.CATALOG),
                            n && !t && g(u.Pf.IN),
                            T.push(E.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            g(u.Pf.VISIBLE));
                    }
                },
                [T, l, i, p, A, O, G, t],
            );
        return { selectedTab: O, transitionState: L, transitionToTab: I };
    };
