n.d(t, {
    EB: () => m,
    MV: () => f,
    q3: () => p,
}),
    n(388685);
var r = n(473749),
    l = n(442837),
    i = n(100527),
    o = n(906732),
    s = n(626135),
    a = n(74538),
    c = n(328347),
    u = n(215023),
    d = n(981631),
    g = n(474936);
let f = (e) => {
        let { analyticsSource: t, analyticsLocations: n } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()),
            r = ((e) => {
                switch (e) {
                    case u.AW.ORBS:
                        return i.Z.COLLECTIBLES_SHOP_ORBS_TAB;
                    case u.AW.HOME:
                        return i.Z.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case u.AW.BUNDLES:
                        return i.Z.COLLECTIBLES_SHOP_BUNDLES_TAB;
                    case u.AW.AVATAR_DECORATIONS:
                        return i.Z.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                    case u.AW.PROFILE_EFFECTS:
                        return i.Z.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                    case u.AW.NAMEPLATES:
                        return i.Z.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                    case u.AW.CATALOG:
                        return i.Z.COLLECTIBLES_SHOP;
                }
            })(e),
            { analyticsLocations: s, newestAnalyticsLocation: a } = (0, o.ZP)([...n, i.Z.COLLECTIBLES_SHOP, r]);
        return {
            analyticsSource: t,
            analyticsLocations: s,
            newestAnalyticsLocation: a,
            currentTabLocation: r,
        };
    },
    p = (e, t, n, l, i) => {
        let { analyticsLocations: o, analyticsSource: a, currentTabLocation: c, newestAnalyticsLocation: g } = f(t);
        r.useEffect(() => {
            if (l !== u.f7.VISIBLE || g !== c) return;
            let r = t === u.AW.CATALOG ? i : a;
            s.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: o,
                source: r,
                page_session_id: e,
                page_type: t === u.AW.CATALOG ? "full" : t,
                category: t === u.AW.HOME ? void 0 : n,
            });
        }, [o, e, t, n, c, l, i, a, g]);
    },
    m = (e, t) => {
        let { analyticsLocations: n } = f(e);
        r.useEffect(() => {
            null == t ||
                a.ZP.canUseCollectibles(t) ||
                s.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: g.cd.COLLECTIBLES_SHOP,
                    location_stack: n,
                });
        }, [n, t]);
    };
