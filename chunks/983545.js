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
        oI: (e) => {
            let t = (0, i.bG)([r.Ay], () => r.Ay.useReducedMotion),
                {
                    setItemTypeFilter: n,
                    setThirdPartyOnlyFilter: s,
                    setOfferEligibleFilter: g,
                    reset: E,
                    resetWithSearchQuery: h,
                    setCurrentTab: f,
                } = (0, o.vs)(),
                x = (0, a.W6)(),
                C = l.useMemo(() => {
                    var t;
                    return (0, d.dF)(e) || (t = e) === d.G2.COLLABS || t === d.G2.OFFER_ELIGIBLE ? d.G2.CATALOG : e;
                }, [e]),
                [p, S] = l.useState(C),
                [A, v] = l.useState(d.Pf.VISIBLE);
            (l.useEffect(() => {
                p !== d.G2.GAME_SERVERS && f(p);
            }, [p, f]),
                l.useEffect(() => {
                    if ((S(C), e === d.G2.CATALOG)) {
                        let e = x.location.state?.searchQuery;
                        null != e ? h(e) : E();
                    } else if (e === d.G2.COLLABS) s();
                    else if (e === d.G2.OFFER_ELIGIBLE) g();
                    else if ((0, d.dF)(e)) {
                        let t = m[e];
                        null != t ? n(t) : E();
                    }
                }, [C, e, n, s, g, E, h, x]),
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
            let { clearError: _ } = (0, c.S)(),
                I = l.useCallback(
                    async (e, l, a) => {
                        if ((_(), e === d.G2.CATALOG)) a?.searchQuery != null ? h(a.searchQuery) : E();
                        else if (e === d.G2.COLLABS) s();
                        else if (e === d.G2.OFFER_ELIGIBLE) g();
                        else if ((0, d.dF)(e) && e !== p) {
                            let t = m[e];
                            null != t ? n(t) : E();
                        }
                        if (p !== e) {
                            if (l && !t) {
                                var i;
                                (v(d.Pf.OUT), await ((i = 800 * 1.1), new Promise((e) => setTimeout(e, i))));
                            }
                            (S(e === d.G2.HOME || e === d.G2.ORBS || e === d.G2.GAME_SERVERS ? e : d.G2.CATALOG),
                                l && !t && v(d.Pf.IN),
                                x.push(u.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { searchQuery: a?.searchQuery }),
                                v(d.Pf.VISIBLE));
                        }
                    },
                    [x, n, s, g, E, h, p, _, t],
                );
            return { selectedTab: p, transitionState: A, transitionToTab: I };
        },
    },
);
