n.d(t, { B: () => f }), n(388685), n(539854);
var r = n(473749),
    l = n(828700),
    a = n(335818),
    s = n(825102),
    o = n(501431),
    i = n(149705),
    c = n(215023),
    u = n(981631);
let d = {
        [c.AW.AVATAR_DECORATIONS]: a.G.AVATAR_DECORATION,
        [c.AW.PROFILE_EFFECTS]: a.G.PROFILE_EFFECT,
        [c.AW.NAMEPLATES]: a.G.NAMEPLATE,
        [c.AW.BUNDLES]: a.G.BUNDLE,
    },
    f = (e) => {
        let { enabled: t } = (0, s.W)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: n, reset: a, setCurrentTab: f } = (0, o.S)(),
            g = r.useMemo(() => (e !== c.AW.ORBS || t ? ((0, c.RE)(e) ? c.AW.CATALOG : e) : c.AW.HOME), [e, t]),
            [b, p] = r.useState(g),
            [m, h] = r.useState(c.f7.VISIBLE);
        r.useEffect(() => {
            f(b);
        }, [b, f]),
            r.useEffect(() => {
                if ((p(g), e === c.AW.CATALOG)) a();
                else if ((0, c.RE)(e)) {
                    let t = d[e];
                    null != t ? n(t) : a();
                }
            }, [g, e, n, a]);
        let { clearError: C } = (0, i.a)(),
            E = (0, l.k6)(),
            v = r.useCallback(
                async (e, t) => {
                    if ((C(), e === c.AW.CATALOG)) a();
                    else if ((0, c.RE)(e) && e !== b) {
                        let t = d[e];
                        null != t ? n(t) : a();
                    }
                    if (b !== e) {
                        if (t) {
                            let e;
                            h(c.f7.OUT), await ((e = 1.1 * c.lb), new Promise((t) => setTimeout(t, e)));
                        }
                        p([c.AW.HOME, c.AW.ORBS].includes(e) ? e : c.AW.CATALOG),
                            t && h(c.f7.IN),
                            E.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            h(c.f7.VISIBLE);
                    }
                },
                [E, n, a, b, C],
            );
        return {
            selectedTab: b,
            transitionState: m,
            transitionToTab: v,
        };
    };
