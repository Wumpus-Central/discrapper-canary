n.d(t, { B: () => p }), n(388685), n(539854);
var r = n(647438),
    l = n(843611),
    a = n(335818),
    s = n(825102),
    i = n(870289),
    o = n(501431),
    c = n(149705),
    u = n(215023),
    d = n(981631);
let g = {
        [u.AW.AVATAR_DECORATIONS]: a.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: a.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: a.G.NAMEPLATE,
        [u.AW.BUNDLES]: a.G.BUNDLE,
    },
    p = (e, t) => {
        let { enabled: n } = (0, s.WX)({ location: "useShopViewTransition" }),
            a = (0, i.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: p, reset: f, setCurrentTab: C } = (0, o.S)(),
            h = r.useMemo(() => (e !== u.AW.ORBS || n ? ((0, u.RE)(e) && a ? u.AW.CATALOG : e) : u.AW.HOME), [e, n, a]),
            [_, m] = r.useState(h),
            [b, E] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            C(_);
        }, [_, C]),
            r.useEffect(() => {
                m(h);
            }, [h]);
        let { clearError: S } = (0, c.a)(),
            v = (0, l.k6)(),
            x = r.useCallback(
                async (e, n) => {
                    if ((S(), e === u.AW.CATALOG)) f();
                    else if ((0, u.RE)(e) && e !== _) {
                        let t = g[e];
                        null != t ? p(t) : f();
                    }
                    if (_ === e) return;
                    if (n) {
                        let e;
                        E(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                    }
                    let r = a && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    m(r),
                        n && E(u.f7.IN),
                        t || v.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r), { shallow: !0 }),
                        E(u.f7.VISIBLE);
                },
                [v, t, a, p, f, _, S],
            );
        return {
            selectedTab: _,
            transitionState: b,
            transitionToTab: x,
        };
    };
