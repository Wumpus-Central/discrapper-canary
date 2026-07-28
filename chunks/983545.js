l.d(t, { o: () => d }), l(321073);
var r = l(582128),
    n = l(806163),
    s = l(641150),
    a = l(365491),
    i = l(856686),
    o = l(758836),
    c = l(652215);
let u = {
        [o.G2.AVATAR_DECORATIONS]: s.q.AVATAR_DECORATION,
        [o.G2.PROFILE_EFFECTS]: s.q.PROFILE_EFFECT,
        [o.G2.NAMEPLATES]: s.q.NAMEPLATE,
        [o.G2.PROFILE_FRAMES]: s.q.PROFILE_FRAME,
        [o.G2.BUNDLES]: s.q.BUNDLE,
    },
    d = (e) => {
        let {
                setItemTypeFilter: t,
                setThirdPartyOnlyFilter: l,
                setOfferEligibleFilter: s,
                reset: d,
                setCurrentTab: b,
            } = (0, a.v)(),
            f = r.useMemo(() => {
                var t;
                return (0, o.dF)(e) || (t = e) === o.G2.COLLABS || t === o.G2.OFFER_ELIGIBLE ? o.G2.CATALOG : e;
            }, [e]),
            [m, S] = r.useState(f),
            [E, p] = r.useState(o.Pf.VISIBLE);
        r.useEffect(() => {
            b(m);
        }, [m, b]),
            r.useEffect(() => {
                if ((S(f), e === o.G2.CATALOG)) d();
                else if (e === o.G2.COLLABS) l();
                else if (e === o.G2.OFFER_ELIGIBLE) s();
                else if ((0, o.dF)(e)) {
                    let l = u[e];
                    null != l ? t(l) : d();
                }
            }, [f, e, t, l, s, d]);
        let { clearError: g } = (0, i.S)(),
            h = (0, n.W6)(),
            C = r.useCallback(
                async (e, r) => {
                    if ((g(), e === o.G2.CATALOG)) d();
                    else if (e === o.G2.COLLABS) l();
                    else if (e === o.G2.OFFER_ELIGIBLE) s();
                    else if ((0, o.dF)(e) && e !== m) {
                        let l = u[e];
                        null != l ? t(l) : d();
                    }
                    if (m !== e) {
                        if (r) {
                            var n;
                            p(o.Pf.OUT), await ((n = 1.1 * o.H1), new Promise((e) => setTimeout(e, n)));
                        }
                        S(e === o.G2.HOME || e === o.G2.ORBS || e === o.G2.GAME_SERVERS ? e : o.G2.CATALOG),
                            r && p(o.Pf.IN),
                            h.push(c.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            p(o.Pf.VISIBLE);
                    }
                },
                [h, t, l, s, d, m, g],
            );
        return { selectedTab: m, transitionState: E, transitionToTab: C };
    };
