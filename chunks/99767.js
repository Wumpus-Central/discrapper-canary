n.d(t, { B: () => f }), n(388685), n(539854);
var r = n(647438),
    l = n(843611),
    i = n(335818),
    o = n(825102),
    s = n(870289),
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
        let { enabled: t } = (0, o.WX)({ location: "useShopViewTransition" }),
            n = (0, s.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: i, reset: f, setCurrentTab: p } = (0, a.S)(),
            C = r.useMemo(() => (e !== u.AW.ORBS || t ? ((0, u.RE)(e) && n ? u.AW.CATALOG : e) : u.AW.HOME), [e, t, n]),
            [h, _] = r.useState(C),
            [m, b] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            p(h);
        }, [h, p]),
            r.useEffect(() => {
                if ((_(C), e === u.AW.CATALOG)) f();
                else if ((0, u.RE)(e)) {
                    let t = g[e];
                    null != t ? i(t) : f();
                }
            }, [C, e, i, f]);
        let { clearError: E } = (0, c.a)(),
            v = (0, l.k6)(),
            O = r.useCallback(
                async (e, t) => {
                    if ((E(), e === u.AW.CATALOG)) f();
                    else if ((0, u.RE)(e) && e !== h) {
                        let t = g[e];
                        null != t ? i(t) : f();
                    }
                    if (h !== e) {
                        if (t) {
                            let e;
                            b(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                        }
                        _(n && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e),
                            t && b(u.f7.IN),
                            v.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            b(u.f7.VISIBLE);
                    }
                },
                [v, i, n, f, h, E],
            );
        return {
            selectedTab: h,
            transitionState: m,
            transitionToTab: O,
        };
    };
