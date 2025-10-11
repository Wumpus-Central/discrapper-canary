n.d(t, { B: () => f }), n(388685), n(539854);
var r = n(647438),
    l = n(843611),
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
    f = (e, t) => {
        let { enabled: n } = (0, s.WX)({ location: "useShopViewTransition" }),
            i = (0, o.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: f, reset: p, setCurrentTab: C } = (0, a.S)(),
            h = r.useMemo(() => (e !== u.AW.ORBS || n ? ((0, u.RE)(e) && i ? u.AW.CATALOG : e) : u.AW.HOME), [e, n, i]),
            [_, m] = r.useState(h),
            [b, E] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            C(_);
        }, [_, C]),
            r.useEffect(() => {
                m(h);
            }, [h]);
        let { clearError: v } = (0, c.a)(),
            S = (0, l.k6)(),
            O = r.useCallback(
                async (e, n) => {
                    if ((v(), e === u.AW.CATALOG)) p();
                    else if ((0, u.RE)(e) && e !== _) {
                        let t = g[e];
                        null != t ? f(t) : p();
                    }
                    if (_ === e) return;
                    if (n) {
                        let e;
                        E(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                    }
                    let r = i && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    m(r),
                        n && E(u.f7.IN),
                        t || S.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r), { shallow: !0 }),
                        E(u.f7.VISIBLE);
                },
                [S, t, i, f, p, _, v],
            );
        return {
            selectedTab: _,
            transitionState: b,
            transitionToTab: O,
        };
    };
