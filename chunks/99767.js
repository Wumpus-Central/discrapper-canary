n.d(t, { B: () => p }), n(388685), n(539854);
var r = n(473749),
    l = n(828700),
    i = n(335818),
    a = n(825102),
    s = n(870289),
    o = n(501431),
    c = n(149705),
    u = n(215023),
    d = n(981631);
let g = {
        [u.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [u.AW.BUNDLES]: i.G.BUNDLE,
    },
    p = (e) => {
        let { enabled: t } = (0, a.WX)({ location: "useShopViewTransition" }),
            n = (0, s.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: i, reset: p, setCurrentTab: f } = (0, o.S)(),
            m = r.useMemo(() => (e !== u.AW.ORBS || t ? ((0, u.RE)(e) && n ? u.AW.CATALOG : e) : u.AW.HOME), [e, t, n]),
            [h, C] = r.useState(m),
            [_, b] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            f(h);
        }, [h, f]),
            r.useEffect(() => {
                if ((C(m), e === u.AW.CATALOG)) p();
                else if ((0, u.RE)(e)) {
                    let t = g[e];
                    null != t ? i(t) : p();
                }
            }, [m, e, i, p]);
        let { clearError: v } = (0, c.a)(),
            x = (0, l.k6)(),
            E = r.useCallback(
                async (e, t) => {
                    if ((v(), e === u.AW.CATALOG)) p();
                    else if ((0, u.RE)(e) && e !== h) {
                        let t = g[e];
                        null != t ? i(t) : p();
                    }
                    if (h !== e) {
                        if (t) {
                            let e;
                            b(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                        }
                        C(n && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e),
                            t && b(u.f7.IN),
                            x.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            b(u.f7.VISIBLE);
                    }
                },
                [x, i, n, p, h, v],
            );
        return {
            selectedTab: h,
            transitionState: _,
            transitionToTab: E,
        };
    };
