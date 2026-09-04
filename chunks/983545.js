l.d(t, { o: () => d }), l(321073);
var n = l(582128),
    a = l(806163),
    i = l(641150),
    s = l(365491),
    r = l(856686),
    o = l(758836),
    c = l(652215);
let u = {
        [o.G2.AVATAR_DECORATIONS]: i.q.AVATAR_DECORATION,
        [o.G2.PROFILE_EFFECTS]: i.q.PROFILE_EFFECT,
        [o.G2.NAMEPLATES]: i.q.NAMEPLATE,
        [o.G2.PROFILE_FRAMES]: i.q.PROFILE_FRAME,
        [o.G2.BUNDLES]: i.q.BUNDLE,
    },
    d = (e) => {
        let {
                setItemTypeFilter: t,
                setThirdPartyOnlyFilter: l,
                setOfferEligibleFilter: i,
                reset: d,
                setCurrentTab: b,
            } = (0, s.v)(),
            E = n.useMemo(() => {
                var t;
                return (0, o.dF)(e) || (t = e) === o.G2.COLLABS || t === o.G2.OFFER_ELIGIBLE ? o.G2.CATALOG : e;
            }, [e]),
            [S, m] = n.useState(E),
            [A, C] = n.useState(o.Pf.VISIBLE);
        n.useEffect(() => {
            S !== o.G2.GAME_SERVERS && b(S);
        }, [S, b]),
            n.useEffect(() => {
                if ((m(E), e === o.G2.CATALOG)) d();
                else if (e === o.G2.COLLABS) l();
                else if (e === o.G2.OFFER_ELIGIBLE) i();
                else if ((0, o.dF)(e)) {
                    let l = u[e];
                    null != l ? t(l) : d();
                }
            }, [E, e, t, l, i, d]);
        let { clearError: p } = (0, r.S)(),
            g = (0, a.W6)(),
            f = n.useCallback(
                async (e, n) => {
                    if ((p(), e === o.G2.CATALOG)) d();
                    else if (e === o.G2.COLLABS) l();
                    else if (e === o.G2.OFFER_ELIGIBLE) i();
                    else if ((0, o.dF)(e) && e !== S) {
                        let l = u[e];
                        null != l ? t(l) : d();
                    }
                    if (S !== e) {
                        if (n) {
                            var a;
                            C(o.Pf.OUT), await ((a = 1.1 * o.H1), new Promise((e) => setTimeout(e, a)));
                        }
                        m(e === o.G2.HOME || e === o.G2.ORBS || e === o.G2.GAME_SERVERS ? e : o.G2.CATALOG),
                            n && C(o.Pf.IN),
                            g.push(c.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            C(o.Pf.VISIBLE);
                    }
                },
                [g, t, l, i, d, S, p],
            );
        return { selectedTab: S, transitionState: A, transitionToTab: f };
    };
