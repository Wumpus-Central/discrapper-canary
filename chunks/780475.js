(n.d(t, {
    EB: () => b,
    MV: () => f,
    q3: () => h
}),
    n(388685));
var r = n(73800),
    l = n(442837),
    o = n(100527),
    a = n(906732),
    i = n(626135),
    s = n(74538),
    c = n(328347),
    u = n(215023),
    d = n(981631),
    p = n(474936);
let g = (e) => {
        switch (e) {
            case u.AW.ORBS:
                return o.Z.COLLECTIBLES_SHOP_ORBS_TAB;
            case u.AW.HOME:
                return o.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
            case u.AW.BUNDLES:
                return o.Z.COLLECTIBLES_SHOP_BUNDLES_TAB;
            case u.AW.AVATAR_DECORATIONS:
                return o.Z.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
            case u.AW.PROFILE_EFFECTS:
                return o.Z.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
            case u.AW.NAMEPLATES:
                return o.Z.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
            case u.AW.CATALOG:
                return o.Z.COLLECTIBLES_SHOP_FULLSCREEN;
        }
    },
    f = (e) => {
        let { analyticsSource: t, analyticsLocations: n } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()),
            r = g(e),
            { analyticsLocations: i, newestAnalyticsLocation: s } = (0, a.ZP)([...n, o.Z.COLLECTIBLES_SHOP, r]);
        return {
            analyticsSource: t,
            analyticsLocations: i,
            newestAnalyticsLocation: s,
            currentTabLocation: r
        };
    },
    h = (e, t, n, l, o) => {
        let { analyticsLocations: a, analyticsSource: s, currentTabLocation: c, newestAnalyticsLocation: p } = f(t);
        r.useEffect(() => {
            if (l !== u.f7.VISIBLE || p !== c) return;
            let r = t === u.AW.CATALOG ? o : s;
            i.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: r,
                page_session_id: e,
                page_type: t === u.AW.CATALOG ? 'full' : t,
                category: t === u.AW.HOME ? void 0 : n
            });
        }, [a, e, t, n, c, l, o, s, p]);
    },
    b = (e, t) => {
        let { analyticsLocations: n } = f(e);
        r.useEffect(() => {
            null == t ||
                s.ZP.canUseCollectibles(t) ||
                i.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: p.cd.COLLECTIBLES_SHOP,
                    location_stack: n
                });
        }, [n, t]);
    };
