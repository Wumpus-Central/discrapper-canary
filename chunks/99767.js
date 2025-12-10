n.d(t, { B: () => g }), n(388685), n(539854);
var r = n(473749),
    l = n(828700),
    i = n(335818),
    o = n(825102),
    s = n(501431),
    a = n(149705),
    c = n(215023),
    u = n(981631);
let d = {
        [c.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [c.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [c.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [c.AW.BUNDLES]: i.G.BUNDLE,
    },
    g = (e) => {
        let { enabled: t } = (0, o.W)({ location: "useShopViewTransition" }),
            { setItemTypeFilter: n, reset: i, setCurrentTab: g } = (0, s.S)(),
            f = r.useMemo(() => (e !== c.AW.ORBS || t ? ((0, c.RE)(e) ? c.AW.CATALOG : e) : c.AW.HOME), [e, t]),
            [p, m] = r.useState(f),
            [h, C] = r.useState(c.f7.VISIBLE);
        r.useEffect(() => {
            g(p);
        }, [p, g]),
            r.useEffect(() => {
                if ((m(f), e === c.AW.CATALOG)) i();
                else if ((0, c.RE)(e)) {
                    let t = d[e];
                    null != t ? n(t) : i();
                }
            }, [f, e, n, i]);
        let { clearError: _ } = (0, a.a)(),
            b = (0, l.k6)(),
            v = r.useCallback(
                async (e, t) => {
                    if ((_(), e === c.AW.CATALOG)) i();
                    else if ((0, c.RE)(e) && e !== p) {
                        let t = d[e];
                        null != t ? n(t) : i();
                    }
                    if (p !== e) {
                        if (t) {
                            let e;
                            C(c.f7.OUT), await ((e = 1.1 * c.lb), new Promise((t) => setTimeout(t, e)));
                        }
                        m([c.AW.HOME, c.AW.ORBS].includes(e) ? e : c.AW.CATALOG),
                            t && C(c.f7.IN),
                            b.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(e), { shallow: !0 }),
                            C(c.f7.VISIBLE);
                    }
                },
                [b, n, i, p, _],
            );
        return {
            selectedTab: p,
            transitionState: h,
            transitionToTab: v,
        };
    };
