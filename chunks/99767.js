n.d(t, { B: () => g }), n(388685), n(539854);
var r = n(647438),
    l = n(843611),
    i = n(335818),
    s = n(825102),
    a = n(870289),
    o = n(501431),
    c = n(149705),
    u = n(215023),
    d = n(981631);
let p = {
        [u.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [u.AW.BUNDLES]: i.G.BUNDLE,
    },
    g = (e) => {
        let { enabled: t } = (0, s.WX)({ location: "useShopViewTransition" }),
            n = (0, a.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: i, reset: g, setCurrentTab: f } = (0, o.S)(),
            h = r.useMemo(() => (e !== u.AW.ORBS || t ? ((0, u.RE)(e) && n ? u.AW.CATALOG : e) : u.AW.HOME), [e, t, n]),
            [C, m] = r.useState(h),
            [_, b] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            f(C);
        }, [C, f]),
            r.useEffect(() => {
                if ((m(h), e === u.AW.CATALOG)) g();
                else if ((0, u.RE)(e)) {
                    let t = p[e];
                    null != t ? i(t) : g();
                }
            }, [h, e, i, g]);
        let { clearError: v } = (0, c.a)(),
            E = (0, l.k6)(),
            x = r.useCallback(
                async (e, t) => {
                    if ((v(), e === u.AW.CATALOG)) g();
                    else if ((0, u.RE)(e) && e !== C) {
                        let t = p[e];
                        null != t ? i(t) : g();
                    }
                    if (C !== e) {
                        if (t) {
                            let e;
                            b(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                        }
                        m(n && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e),
                            t && b(u.f7.IN),
                            E.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            b(u.f7.VISIBLE);
                    }
                },
                [E, i, n, g, C, v],
            );
        return {
            selectedTab: C,
            transitionState: _,
            transitionToTab: x,
        };
    };
