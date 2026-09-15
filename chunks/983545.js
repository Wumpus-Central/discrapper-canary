(l.d(t, { o: () => u }), l(321073));
var a = l(582128),
    n = l(806163),
    i = l(641150),
    s = l(365491),
    o = l(856686),
    c = l(758836),
    r = l(652215);
let E = {
        [c.G2.AVATAR_DECORATIONS]: i.q.AVATAR_DECORATION,
        [c.G2.PROFILE_EFFECTS]: i.q.PROFILE_EFFECT,
        [c.G2.NAMEPLATES]: i.q.NAMEPLATE,
        [c.G2.PROFILE_FRAMES]: i.q.PROFILE_FRAME,
        [c.G2.BUNDLES]: i.q.BUNDLE,
    },
    u = (e) => {
        let {
                setItemTypeFilter: t,
                setThirdPartyOnlyFilter: l,
                setOfferEligibleFilter: i,
                reset: u,
                setCurrentTab: C,
            } = (0, s.v)(),
            A = a.useMemo(() => {
                var t;
                return (0, c.dF)(e) || (t = e) === c.G2.COLLABS || t === c.G2.OFFER_ELIGIBLE ? c.G2.CATALOG : e;
            }, [e]),
            [L, O] = a.useState(A),
            [S, _] = a.useState(c.Pf.VISIBLE);
        (a.useEffect(() => {
            L !== c.G2.GAME_SERVERS && C(L);
        }, [L, C]),
            a.useEffect(() => {
                if ((O(A), e === c.G2.CATALOG)) u();
                else if (e === c.G2.COLLABS) l();
                else if (e === c.G2.OFFER_ELIGIBLE) i();
                else if ((0, c.dF)(e)) {
                    let l = E[e];
                    null != l ? t(l) : u();
                }
            }, [A, e, t, l, i, u]));
        let { clearError: p } = (0, o.S)(),
            d = (0, n.W6)(),
            G = a.useCallback(
                async (e, a) => {
                    if ((p(), e === c.G2.CATALOG)) u();
                    else if (e === c.G2.COLLABS) l();
                    else if (e === c.G2.OFFER_ELIGIBLE) i();
                    else if ((0, c.dF)(e) && e !== L) {
                        let l = E[e];
                        null != l ? t(l) : u();
                    }
                    if (L !== e) {
                        if (a) {
                            var n;
                            (_(c.Pf.OUT), await ((n = 1.1 * c.H1), new Promise((e) => setTimeout(e, n))));
                        }
                        (O(e === c.G2.HOME || e === c.G2.ORBS || e === c.G2.GAME_SERVERS ? e : c.G2.CATALOG),
                            a && _(c.Pf.IN),
                            d.push(r.BVt.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            _(c.Pf.VISIBLE));
                    }
                },
                [d, t, l, i, u, L, p],
            );
        return { selectedTab: L, transitionState: S, transitionToTab: G };
    };
