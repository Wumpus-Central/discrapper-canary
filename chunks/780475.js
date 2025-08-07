r.d(t, {
    EB: () => h,
    MV: () => g,
    q3: () => b,
}),
    r(388685);
var n = r(73800),
    l = r(442837),
    a = r(100527),
    i = r(906732),
    o = r(626135),
    s = r(74538),
    c = r(328347),
    u = r(215023),
    d = r(981631),
    p = r(474936);
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
        let { analyticsSource: t, analyticsLocations: r } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()),
            n = f(e),
            { analyticsLocations: o, newestAnalyticsLocation: s } = (0, i.ZP)([...r, a.Z.COLLECTIBLES_SHOP, n]);
        return {
            analyticsSource: t,
            analyticsLocations: o,
            newestAnalyticsLocation: s,
            currentTabLocation: n,
        };
    },
    b = (e, t, r, l, a) => {
        let { analyticsLocations: i, analyticsSource: s, currentTabLocation: c, newestAnalyticsLocation: p } = g(t);
        n.useEffect(() => {
            if (l !== u.f7.VISIBLE || p !== c) return;
            let n = t === u.AW.CATALOG ? a : s;
            o.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: i,
                source: n,
                page_session_id: e,
                page_type: t === u.AW.CATALOG ? "full" : t,
                category: t === u.AW.HOME ? void 0 : r,
            });
        }, [i, e, t, r, c, l, a, s, p]);
    },
    h = (e, t) => {
        let { analyticsLocations: r } = g(e);
        n.useEffect(() => {
            null == t ||
                s.ZP.canUseCollectibles(t) ||
                o.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: p.cd.COLLECTIBLES_SHOP,
                    location_stack: r,
                });
        }, [r, t]);
    };
