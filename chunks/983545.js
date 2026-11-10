n(321073);
var l = n(582128),
    s = n(806163),
    a = n(641150),
    i = n(855986),
    r = n(775602),
    o = n(365491),
    c = n(856686),
    u = n(758836),
    d = n(652215);
let m = {
    [u.G2.AVATAR_DECORATIONS]: a.q.AVATAR_DECORATION,
    [u.G2.PROFILE_EFFECTS]: a.q.PROFILE_EFFECT,
    [u.G2.NAMEPLATES]: a.q.NAMEPLATE,
    [u.G2.PROFILE_FRAMES]: a.q.PROFILE_FRAME,
    [u.G2.BUNDLES]: a.q.BUNDLE,
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
                    return (0, u.dF)(e) || (t = e) === u.G2.COLLABS || t === u.G2.OFFER_ELIGIBLE ? u.G2.CATALOG : e;
                }, [e]),
                [S, p] = l.useState(C),
                [_, A] = l.useState(u.Pf.VISIBLE);
            (l.useEffect(() => {
                S !== u.G2.GAME_SERVERS && f(S);
            }, [S, f]),
                l.useEffect(() => {
                    if ((p(C), e === u.G2.CATALOG)) {
                        let e = x.location.state?.searchQuery;
                        null != e ? h(e) : E();
                    } else if (e === u.G2.COLLABS) a();
                    else if (e === u.G2.OFFER_ELIGIBLE) g();
                    else if ((0, u.dF)(e)) {
                        let t = m[e];
                        null != t ? n(t) : E();
                    }
                }, [C, e, n, a, g, E, h, x]),
                l.useEffect(() => {
                    if (S === u.G2.CATALOG)
                        return o.vs.subscribe(
                            (e) => e.searchQuery,
                            (e) =>
                                (function (e, t) {
                                    let { location: n } = e;
                                    e.replace({ ...n, state: { ...n.state, searchQuery: "" !== t ? t : void 0 } });
                                })(x, e),
                        );
                }, [S, x]));
            let { clearError: I } = (0, c.S)(),
                v = l.useCallback(
                    async (e, l, s) => {
                        if ((I(), e === u.G2.CATALOG)) s?.searchQuery != null ? h(s.searchQuery) : E();
                        else if (e === u.G2.COLLABS) a();
                        else if (e === u.G2.OFFER_ELIGIBLE) g();
                        else if ((0, u.dF)(e) && e !== S) {
                            let t = m[e];
                            null != t ? n(t) : E();
                        }
                        if (S !== e) {
                            if (l && !t) {
                                var i;
                                (A(u.Pf.OUT), await ((i = 800 * 1.1), new Promise((e) => setTimeout(e, i))));
                            }
                            (p(e === u.G2.HOME || e === u.G2.ORBS || e === u.G2.GAME_SERVERS ? e : u.G2.CATALOG),
                                l && !t && A(u.Pf.IN),
                                x.push(d.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { searchQuery: s?.searchQuery }),
                                A(u.Pf.VISIBLE));
                        }
                    },
                    [x, n, a, g, E, h, S, I, t],
                );
            return { selectedTab: S, transitionState: _, transitionToTab: v };
        },
    },
);
