n(321073);
var l = n(582128),
    s = n(806163),
    a = n(641150),
    i = n(855986),
    r = n(775602),
    c = n(365491),
    o = n(856686),
    d = n(758836),
    u = n(652215);
let m = {
    [d.G2.AVATAR_DECORATIONS]: a.q.AVATAR_DECORATION,
    [d.G2.PROFILE_EFFECTS]: a.q.PROFILE_EFFECT,
    [d.G2.NAMEPLATES]: a.q.NAMEPLATE,
    [d.G2.PROFILE_FRAMES]: a.q.PROFILE_FRAME,
    [d.G2.BUNDLES]: a.q.BUNDLE,
};
n.d(
    t,
    {},
    {
        o: (e) => {
            let t = (0, i.bG)([r.Ay], () => r.Ay.useReducedMotion),
                {
                    setItemTypeFilter: n,
                    setThirdPartyOnlyFilter: a,
                    setOfferEligibleFilter: g,
                    reset: E,
                    setCurrentTab: h,
                } = (0, c.v)(),
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
                    else if (e === d.G2.COLLABS) a();
                    else if (e === d.G2.OFFER_ELIGIBLE) g();
                    else if ((0, d.dF)(e)) {
                        let t = m[e];
                        null != t ? n(t) : E();
                    }
                }, [f, e, n, a, g, E]));
            let { clearError: A } = (0, o.S)(),
                _ = (0, s.W6)(),
                v = l.useCallback(
                    async (e, l) => {
                        if ((A(), e === d.G2.CATALOG)) E();
                        else if (e === d.G2.COLLABS) a();
                        else if (e === d.G2.OFFER_ELIGIBLE) g();
                        else if ((0, d.dF)(e) && e !== x) {
                            let t = m[e];
                            null != t ? n(t) : E();
                        }
                        if (x !== e) {
                            if (l && !t) {
                                var s;
                                (S(d.Pf.OUT), await ((s = 800 * 1.1), new Promise((e) => setTimeout(e, s))));
                            }
                            (C(e === d.G2.HOME || e === d.G2.ORBS || e === d.G2.GAME_SERVERS ? e : d.G2.CATALOG),
                                l && !t && S(d.Pf.IN),
                                _.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                                S(d.Pf.VISIBLE));
                        }
                    },
                    [_, n, a, g, E, x, A, t],
                );
            return { selectedTab: x, transitionState: p, transitionToTab: v };
        },
    },
);
