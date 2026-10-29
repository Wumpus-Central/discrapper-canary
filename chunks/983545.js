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
            S = n.useMemo(() => {
                var t;
                return (0, u.dF)(e) || (t = e) === u.G2.COLLABS || t === u.G2.OFFER_ELIGIBLE ? u.G2.CATALOG : e;
            }, [e]),
            [_, g] = n.useState(S),
            [O, h] = n.useState(u.Pf.VISIBLE);
        (n.useEffect(() => {
            _ !== u.G2.GAME_SERVERS && C(_);
        }, [_, C]),
            n.useEffect(() => {
                if ((g(S), e === u.G2.CATALOG)) A();
                else if (e === u.G2.COLLABS) a();
                else if (e === u.G2.OFFER_ELIGIBLE) p();
                else if ((0, u.dF)(e)) {
                    let t = E[e];
                    null != t ? l(t) : A();
                }
            }, [S, e, l, a, p, A]));
        let { clearError: L } = (0, c.S)(),
            f = (0, i.W6)(),
            b = n.useCallback(
                async (e, n) => {
                    if ((L(), e === u.G2.CATALOG)) A();
                    else if (e === u.G2.COLLABS) a();
                    else if (e === u.G2.OFFER_ELIGIBLE) p();
                    else if ((0, u.dF)(e) && e !== _) {
                        let t = E[e];
                        null != t ? l(t) : A();
                    }
                    if (_ !== e) {
                        if (n && !t) {
                            var i;
                            (h(u.Pf.OUT), await ((i = 1.1 * u.H1), new Promise((e) => setTimeout(e, i))));
                        }
                        (g(e === u.G2.HOME || e === u.G2.ORBS || e === u.G2.GAME_SERVERS ? e : u.G2.CATALOG),
                            n && !t && h(u.Pf.IN),
                            f.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            h(u.Pf.VISIBLE));
                    }
                },
                [f, l, a, p, A, _, L, t],
            );
        return { selectedTab: _, transitionState: O, transitionToTab: b };
    };
