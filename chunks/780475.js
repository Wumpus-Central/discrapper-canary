n.d(t, {
    EB: () => m,
    MV: () => g,
    q3: () => h
}),
    n(388685);
var r = n(73800),
    l = n(442837),
    a = n(100527),
    i = n(906732),
    o = n(626135),
    s = n(74538),
    c = n(597688),
    u = n(328347),
    d = n(215023),
    p = n(981631),
    b = n(474936);
let f = (e) => {
        switch (e) {
            case d.AW.ORBS:
                return a.Z.COLLECTIBLES_SHOP_ORBS_TAB;
            case d.AW.HOME:
                return a.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
            case d.AW.BUNDLES:
                return a.Z.COLLECTIBLES_SHOP_BUNDLES_TAB;
            case d.AW.AVATAR_DECORATIONS:
                return a.Z.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
            case d.AW.PROFILE_EFFECTS:
                return a.Z.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
            case d.AW.NAMEPLATES:
                return a.Z.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
            case d.AW.CATALOG:
                return a.Z.COLLECTIBLES_SHOP_FULLSCREEN;
        }
    },
    g = (e) => {
        let { analyticsSource: t, analyticsLocations: n } = (0, l.cj)([u.Z], () => u.Z.getAnalytics()),
            r = f(e),
            { analyticsLocations: o, newestAnalyticsLocation: s } = (0, i.ZP)([...n, a.Z.COLLECTIBLES_SHOP, r]);
        return {
            analyticsSource: t,
            analyticsLocations: o,
            newestAnalyticsLocation: s,
            currentTabLocation: r
        };
    },
    h = (e, t, n, l, a) => {
        let { analyticsLocations: i, analyticsSource: s, currentTabLocation: u, newestAnalyticsLocation: b } = g(t);
        r.useEffect(() => {
            var r;
            if (l !== d.f7.VISIBLE || b !== u) return;
            let f = t === d.AW.CATALOG ? a : s;
            o.default.track(p.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: i,
                source: f,
                page_session_id: e,
                page_type: t === d.AW.CATALOG ? 'full' : t,
                category: t === d.AW.HOME || null == (r = c.Z.getCategory(n)) ? void 0 : r.name
            });
        }, [i, e, t, n, u, l, a, s, b]);
    },
    m = (e, t) => {
        let { analyticsLocations: n } = g(e);
        r.useEffect(() => {
            null == t ||
                s.ZP.canUseCollectibles(t) ||
                o.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: b.cd.COLLECTIBLES_SHOP,
                    location_stack: n
                });
        }, [n, t]);
    };
