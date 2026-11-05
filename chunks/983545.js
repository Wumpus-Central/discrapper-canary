n(321073);
var l = n(582128),
    a = n(806163),
    s = n(641150),
    i = n(855986),
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
};
n.d(
    t,
    {},
    {
        o: (e) => {
            let t = (0, i.bG)([r.Ay], () => r.Ay.useReducedMotion),
                {
                    setItemTypeFilter: n,
                    setThirdPartyOnlyFilter: s,
                    setOfferEligibleFilter: g,
                    reset: E,
                    resetWithSearchQuery: h,
                    setCurrentTab: f,
                } = (0, o.vs)(),
                x = (0, a.zy)(),
                C = x.state?.searchQuery,
                p = l.useMemo(() => {
                    var t;
                    return (0, d.dF)(e) || (t = e) === d.G2.COLLABS || t === d.G2.OFFER_ELIGIBLE ? d.G2.CATALOG : e;
                }, [e]),
                [S, A] = l.useState(p),
                [_, v] = l.useState(d.Pf.VISIBLE);
            (l.useEffect(() => {
                S !== d.G2.GAME_SERVERS && f(S);
            }, [S, f]),
                l.useEffect(() => {
                    if ((A(p), e === d.G2.CATALOG)) null != C ? h(C) : E();
                    else if (e === d.G2.COLLABS) s();
                    else if (e === d.G2.OFFER_ELIGIBLE) g();
                    else if ((0, d.dF)(e)) {
                        let t = m[e];
                        null != t ? n(t) : E();
                    }
                }, [p, e, n, s, g, E, h, C]));
            let { clearError: I } = (0, c.S)(),
                b = (0, a.W6)(),
                j = l.useCallback(
                    async (e, l, a) => {
                        if ((I(), e === d.G2.CATALOG)) a?.searchQuery != null ? h(a.searchQuery) : E();
                        else if (e === d.G2.COLLABS) s();
                        else if (e === d.G2.OFFER_ELIGIBLE) g();
                        else if ((0, d.dF)(e) && e !== S) {
                            let t = m[e];
                            null != t ? n(t) : E();
                        }
                        if (S !== e) {
                            if (l && !t) {
                                var i;
                                (v(d.Pf.OUT), await ((i = 800 * 1.1), new Promise((e) => setTimeout(e, i))));
                            }
                            (A(e === d.G2.HOME || e === d.G2.ORBS || e === d.G2.GAME_SERVERS ? e : d.G2.CATALOG),
                                l && !t && v(d.Pf.IN),
                                b.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { searchQuery: a?.searchQuery }),
                                v(d.Pf.VISIBLE));
                        }
                    },
                    [b, n, s, g, E, h, S, I, t],
                );
            return { selectedTab: S, transitionState: _, transitionToTab: j };
        },
    },
);
