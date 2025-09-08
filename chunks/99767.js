n.d(t, { B: () => f }), n(388685), n(539854);
var r = n(647438),
    l = n(843611),
    a = n(335818),
    s = n(825102),
    o = n(870289),
    i = n(501431),
    c = n(149705),
    u = n(215023),
    d = n(981631);
let g = {
        [u.AW.AVATAR_DECORATIONS]: a.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: a.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: a.G.NAMEPLATE,
        [u.AW.BUNDLES]: a.G.BUNDLE,
    },
    f = (e, t) => {
        let { enabled: n } = (0, s.WX)({ location: "useShopViewTransition" }),
            a = (0, o.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: f, reset: p, setCurrentTab: m } = (0, i.S)(),
            h = r.useMemo(() => (e !== u.AW.ORBS || n ? ((0, u.RE)(e) && a ? u.AW.CATALOG : e) : u.AW.HOME), [e, n, a]),
            [_, C] = r.useState(h),
            [b, E] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            m(_);
        }, [_, m]),
            r.useEffect(() => {
                C(h);
            }, [h]);
        let { clearError: S } = (0, c.a)(),
            O = (0, l.k6)(),
            v = r.useCallback(
                async (e, n) => {
                    if ((S(), e === u.AW.CATALOG)) p();
                    else if ((0, u.RE)(e) && e !== _) {
                        let t = g[e];
                        null != t ? f(t) : p();
                    }
                    if (_ === e) return;
                    if (n) {
                        let e;
                        E(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                    }
                    let r = a && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    C(r),
                        n && E(u.f7.IN),
                        t || O.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r), { shallow: !0 }),
                        E(u.f7.VISIBLE);
                },
                [O, t, a, f, p, _, S],
            );
        return {
            selectedTab: _,
            transitionState: b,
            transitionToTab: v,
        };
    };
