t.d(l, { o: () => d }), t(321073);
var n = t(582128),
    a = t(806163),
    s = t(641150),
    r = t(365491),
    i = t(856686),
    o = t(758836),
    c = t(652215);
let u = {
        [o.G2.AVATAR_DECORATIONS]: s.q.AVATAR_DECORATION,
        [o.G2.PROFILE_EFFECTS]: s.q.PROFILE_EFFECT,
        [o.G2.NAMEPLATES]: s.q.NAMEPLATE,
        [o.G2.PROFILE_FRAMES]: s.q.PROFILE_FRAME,
        [o.G2.BUNDLES]: s.q.BUNDLE,
    },
    d = (e) => {
        let {
                setItemTypeFilter: l,
                setThirdPartyOnlyFilter: t,
                setOfferEligibleFilter: s,
                reset: d,
                setCurrentTab: b,
            } = (0, r.v)(),
            E = n.useMemo(() => {
                var l;
                return (0, o.dF)(e) || (l = e) === o.G2.COLLABS || l === o.G2.OFFER_ELIGIBLE ? o.G2.CATALOG : e;
            }, [e]),
            [m, S] = n.useState(E),
            [A, C] = n.useState(o.Pf.VISIBLE);
        n.useEffect(() => {
            m !== o.G2.GAME_SERVERS && b(m);
        }, [m, b]),
            n.useEffect(() => {
                if ((S(E), e === o.G2.CATALOG)) d();
                else if (e === o.G2.COLLABS) t();
                else if (e === o.G2.OFFER_ELIGIBLE) s();
                else if ((0, o.dF)(e)) {
                    let t = u[e];
                    null != t ? l(t) : d();
                }
            }, [E, e, l, t, s, d]);
        let { clearError: h } = (0, i.S)(),
            f = (0, a.W6)(),
            p = n.useCallback(
                async (e, n) => {
                    if ((h(), e === o.G2.CATALOG)) d();
                    else if (e === o.G2.COLLABS) t();
                    else if (e === o.G2.OFFER_ELIGIBLE) s();
                    else if ((0, o.dF)(e) && e !== m) {
                        let t = u[e];
                        null != t ? l(t) : d();
                    }
                    if (m !== e) {
                        if (n) {
                            var a;
                            C(o.Pf.OUT), await ((a = 1.1 * o.H1), new Promise((e) => setTimeout(e, a)));
                        }
                        S(e === o.G2.HOME || e === o.G2.ORBS || e === o.G2.GAME_SERVERS ? e : o.G2.CATALOG),
                            n && C(o.Pf.IN),
                            f.push(c.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            C(o.Pf.VISIBLE);
                    }
                },
                [f, l, t, s, d, m, h],
            );
        return { selectedTab: m, transitionState: A, transitionToTab: p };
    };
