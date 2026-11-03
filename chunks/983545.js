(n.d(t, { o: () => g }), n(321073));
var l = n(582128),
    a = n(806163),
    s = n(641150),
    i = n(17928),
    r = n(775602),
    o = n(365491),
    c = n(856686),
    d = n(758836),
    u = n(652215);
let m = {
        [d.G2.AVATAR_DECORATIONS]: s.q.AVATAR_DECORATION,
        [d.G2.PROFILE_EFFECTS]: s.q.PROFILE_EFFECT,
        [d.G2.NAMEPLATES]: s.q.NAMEPLATE,
        [d.G2.PROFILE_FRAMES]: s.q.PROFILE_FRAME,
        [d.G2.BUNDLES]: s.q.BUNDLE,
    },
    g = (e) => {
        let t = (0, i.bG)([r.Ay], () => r.Ay.useReducedMotion),
            {
                setItemTypeFilter: n,
                setThirdPartyOnlyFilter: s,
                setOfferEligibleFilter: g,
                reset: E,
                setCurrentTab: h,
            } = (0, o.v)(),
            f = l.useMemo(() => {
                var t;
                return (0, d.dF)(e) || (t = e) === d.G2.COLLABS || t === d.G2.OFFER_ELIGIBLE ? d.G2.CATALOG : e;
            }, [e]),
            [x, C] = l.useState(f),
            [p, S] = l.useState(d.Pf.VISIBLE);
        (l.useEffect(() => {
            x !== d.G2.GAME_SERVERS && h(x);
        }, [x, h]),
            l.useEffect(() => {
                if ((C(f), e === d.G2.CATALOG)) E();
                else if (e === d.G2.COLLABS) s();
                else if (e === d.G2.OFFER_ELIGIBLE) g();
                else if ((0, d.dF)(e)) {
                    let t = m[e];
                    null != t ? n(t) : E();
                }
            }, [f, e, n, s, g, E]));
        let { clearError: A } = (0, c.S)(),
            _ = (0, a.W6)(),
            v = l.useCallback(
                async (e, l) => {
                    if ((A(), e === d.G2.CATALOG)) E();
                    else if (e === d.G2.COLLABS) s();
                    else if (e === d.G2.OFFER_ELIGIBLE) g();
                    else if ((0, d.dF)(e) && e !== x) {
                        let t = m[e];
                        null != t ? n(t) : E();
                    }
                    if (x !== e) {
                        if (l && !t) {
                            var a;
                            (S(d.Pf.OUT), await ((a = 1.1 * d.H1), new Promise((e) => setTimeout(e, a))));
                        }
                        (C(e === d.G2.HOME || e === d.G2.ORBS || e === d.G2.GAME_SERVERS ? e : d.G2.CATALOG),
                            l && !t && S(d.Pf.IN),
                            _.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            S(d.Pf.VISIBLE));
                    }
                },
                [_, n, s, g, E, x, A, t],
            );
        return { selectedTab: x, transitionState: p, transitionToTab: v };
    };
