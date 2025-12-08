n.d(t, { B: () => f }), n(388685), n(539854);
var r = n(473749),
    l = n(828700),
    i = n(335818),
    s = n(825102),
    o = n(870289),
    a = n(501431),
    c = n(149705),
    u = n(215023),
    d = n(981631);
let g = {
        [u.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [u.AW.BUNDLES]: i.G.BUNDLE,
    },
    f = (e) => {
        let { enabled: t } = (0, s.WX)({ location: "useShopViewTransition" }),
            n = (0, o.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: i, reset: f, setCurrentTab: p } = (0, a.S)(),
            m = r.useMemo(() => (e !== u.AW.ORBS || t ? ((0, u.RE)(e) && n ? u.AW.CATALOG : e) : u.AW.HOME), [e, t, n]),
            [C, h] = r.useState(m),
            [_, b] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            p(C);
        }, [C, p]),
            r.useEffect(() => {
                if ((h(m), e === u.AW.CATALOG)) f();
                else if ((0, u.RE)(e)) {
                    let t = g[e];
                    null != t ? i(t) : f();
                }
            }, [m, e, i, f]);
        let { clearError: E } = (0, c.a)(),
            v = (0, l.k6)(),
            S = r.useCallback(
                async (e, t) => {
                    if ((E(), e === u.AW.CATALOG)) f();
                    else if ((0, u.RE)(e) && e !== C) {
                        let t = g[e];
                        null != t ? i(t) : f();
                    }
                    if (C !== e) {
                        if (t) {
                            let e;
                            b(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                        }
                        h(n && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e),
                            t && b(u.f7.IN),
                            v.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            b(u.f7.VISIBLE);
                    }
                },
                [v, i, n, f, C, E],
            );
        return {
            selectedTab: C,
            transitionState: _,
            transitionToTab: S,
        };
    };
