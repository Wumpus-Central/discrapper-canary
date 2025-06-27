n.d(t, {
    EB: () => b,
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
    c = n(328347),
    u = n(215023),
    d = n(981631),
    p = n(474936);
let f = (e) => {
        switch (e) {
            case u.AW.ORBS:
                return a.Z.COLLECTIBLES_SHOP_ORBS_TAB;
            case u.AW.HOME:
                return a.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
            case u.AW.BUNDLES:
                return a.Z.COLLECTIBLES_SHOP_BUNDLES_TAB;
            case u.AW.AVATAR_DECORATIONS:
                return a.Z.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
            case u.AW.PROFILE_EFFECTS:
                return a.Z.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
            case u.AW.NAMEPLATES:
                return a.Z.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
            case u.AW.CATALOG:
                return a.Z.COLLECTIBLES_SHOP_FULLSCREEN;
        }
    },
    g = (e) => {
        let { analyticsSource: t, analyticsLocations: n } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()),
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
        let { analyticsLocations: i, analyticsSource: s, currentTabLocation: c, newestAnalyticsLocation: p } = g(t);
        r.useEffect(() => {
            if (l !== u.f7.VISIBLE || p !== c) return;
            let r = t === u.AW.CATALOG ? a : s;
            o.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: i,
                source: r,
                page_session_id: e,
                page_type: t === u.AW.CATALOG ? 'full' : t,
                category: t === u.AW.HOME ? void 0 : n
            });
        }, [i, e, t, n, c, l, a, s, p]);
    },
    b = (e, t) => {
        let { analyticsLocations: n } = g(e);
        r.useEffect(() => {
            null == t ||
                s.ZP.canUseCollectibles(t) ||
                o.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: p.cd.COLLECTIBLES_SHOP,
                    location_stack: n
                });
        }, [n, t]);
    };
