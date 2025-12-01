n.d(t, { B: () => g }), n(388685), n(539854);
var r = n(473749),
    l = n(828700),
    i = n(335818),
    a = n(825102),
    o = n(870289),
    s = n(501431),
    c = n(149705),
    u = n(215023),
    d = n(981631);
let f = {
        [u.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [u.AW.BUNDLES]: i.G.BUNDLE,
    },
    g = (e) => {
        let { enabled: t } = (0, a.WX)({ location: "useShopViewTransition" }),
            n = (0, o.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: i, reset: g, setCurrentTab: p } = (0, s.S)(),
            m = r.useMemo(() => (e !== u.AW.ORBS || t ? ((0, u.RE)(e) && n ? u.AW.CATALOG : e) : u.AW.HOME), [e, t, n]),
            [h, C] = r.useState(m),
            [_, b] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            p(h);
        }, [h, p]),
            r.useEffect(() => {
                if ((C(m), e === u.AW.CATALOG)) g();
                else if ((0, u.RE)(e)) {
                    let t = f[e];
                    null != t ? i(t) : g();
                }
            }, [m, e, i, g]);
        let { clearError: v } = (0, c.a)(),
            x = (0, l.k6)(),
            E = r.useCallback(
                async (e, t) => {
                    if ((v(), e === u.AW.CATALOG)) g();
                    else if ((0, u.RE)(e) && e !== h) {
                        let t = f[e];
                        null != t ? i(t) : g();
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
                [x, i, n, g, h, v],
            );
        return {
            selectedTab: h,
            transitionState: _,
            transitionToTab: E,
        };
    };
