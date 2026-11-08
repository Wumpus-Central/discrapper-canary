n(321073);
var l = n(582128),
    s = n(806163),
    a = n(641150),
    i = n(855986),
    r = n(775602),
    o = n(365491),
    c = n(856686),
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
        oI: (e) => {
            let t = (0, i.bG)([r.Ay], () => r.Ay.useReducedMotion),
                {
                    setItemTypeFilter: n,
                    setThirdPartyOnlyFilter: a,
                    setOfferEligibleFilter: g,
                    reset: E,
                    resetWithSearchQuery: h,
                    setCurrentTab: f,
                } = (0, o.vs)(),
                x = (0, s.W6)(),
                C = l.useMemo(() => {
                    var t;
                    return (0, d.dF)(e) || (t = e) === d.G2.COLLABS || t === d.G2.OFFER_ELIGIBLE ? d.G2.CATALOG : e;
                }, [e]),
                [p, S] = l.useState(C),
                [_, A] = l.useState(d.Pf.VISIBLE);
            (l.useEffect(() => {
                p !== d.G2.GAME_SERVERS && f(p);
            }, [p, f]),
                l.useEffect(() => {
                    if ((S(C), e === d.G2.CATALOG)) {
                        let e = x.location.state?.searchQuery;
                        null != e ? h(e) : E();
                    } else if (e === d.G2.COLLABS) a();
                    else if (e === d.G2.OFFER_ELIGIBLE) g();
                    else if ((0, d.dF)(e)) {
                        let t = m[e];
                        null != t ? n(t) : E();
                    }
                }, [C, e, n, a, g, E, h, x]),
                l.useEffect(() => {
                    if (p === d.G2.CATALOG)
                        return o.vs.subscribe(
                            (e) => e.searchQuery,
                            (e) =>
                                (function (e, t) {
                                    let { location: n } = e;
                                    e.replace({ ...n, state: { ...n.state, searchQuery: "" !== t ? t : void 0 } });
                                })(x, e),
                        );
                }, [p, x]));
            let { clearError: v } = (0, c.S)(),
                I = l.useCallback(
                    async (e, l, s) => {
                        if ((v(), e === d.G2.CATALOG)) s?.searchQuery != null ? h(s.searchQuery) : E();
                        else if (e === d.G2.COLLABS) a();
                        else if (e === d.G2.OFFER_ELIGIBLE) g();
                        else if ((0, d.dF)(e) && e !== p) {
                            let t = m[e];
                            null != t ? n(t) : E();
                        }
                        if (p !== e) {
                            if (l && !t) {
                                var i;
                                (A(d.Pf.OUT), await ((i = 800 * 1.1), new Promise((e) => setTimeout(e, i))));
                            }
                            (S(e === d.G2.HOME || e === d.G2.ORBS || e === d.G2.GAME_SERVERS ? e : d.G2.CATALOG),
                                l && !t && A(d.Pf.IN),
                                x.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { searchQuery: s?.searchQuery }),
                                A(d.Pf.VISIBLE));
                        }
                    },
                    [x, n, a, g, E, h, p, v, t],
                );
            return { selectedTab: p, transitionState: _, transitionToTab: I };
        },
    },
);
