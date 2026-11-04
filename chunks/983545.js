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
                    resetWithSearchQuery: h,
                    setCurrentTab: f,
                } = (0, c.v)(),
                x = (0, s.zy)(),
                C = x.state?.searchQuery,
                p = l.useMemo(() => {
                    var t;
                    return (0, d.dF)(e) || (t = e) === d.G2.COLLABS || t === d.G2.OFFER_ELIGIBLE ? d.G2.CATALOG : e;
                }, [e]),
                [S, _] = l.useState(p),
                [A, v] = l.useState(d.Pf.VISIBLE);
            (l.useEffect(() => {
                S !== d.G2.GAME_SERVERS && f(S);
            }, [S, f]),
                l.useEffect(() => {
                    if ((_(p), e === d.G2.CATALOG)) null != C ? h(C) : E();
                    else if (e === d.G2.COLLABS) a();
                    else if (e === d.G2.OFFER_ELIGIBLE) g();
                    else if ((0, d.dF)(e)) {
                        let t = m[e];
                        null != t ? n(t) : E();
                    }
                }, [p, e, n, a, g, E, h, C]));
            let { clearError: b } = (0, o.S)(),
                I = (0, s.W6)(),
                j = l.useCallback(
                    async (e, l, s) => {
                        if ((b(), e === d.G2.CATALOG)) s?.searchQuery != null ? h(s.searchQuery) : E();
                        else if (e === d.G2.COLLABS) a();
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
                            (_(e === d.G2.HOME || e === d.G2.ORBS || e === d.G2.GAME_SERVERS ? e : d.G2.CATALOG),
                                l && !t && v(d.Pf.IN),
                                I.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { searchQuery: s?.searchQuery }),
                                v(d.Pf.VISIBLE));
                        }
                    },
                    [I, n, a, g, E, h, S, b, t],
                );
            return { selectedTab: S, transitionState: A, transitionToTab: j };
        },
    },
);
