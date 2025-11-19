n.d(t, {
    EB: () => m,
    MV: () => p,
    q3: () => f,
}),
    n(388685);
var r = n(473749),
    l = n(442837),
    i = n(100527),
    a = n(906732),
    s = n(626135),
    o = n(74538),
    c = n(328347),
    u = n(215023),
    d = n(981631),
    g = n(474936);
let p = (e) => {
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
            { analyticsLocations: s, newestAnalyticsLocation: o } = (0, a.ZP)([...n, i.Z.COLLECTIBLES_SHOP, r]);
        return {
            analyticsSource: t,
            analyticsLocations: s,
            newestAnalyticsLocation: o,
            currentTabLocation: r,
        };
    },
    f = (e, t, n, l, i) => {
        let { analyticsLocations: a, analyticsSource: o, currentTabLocation: c, newestAnalyticsLocation: g } = p(t);
        r.useEffect(() => {
            if (l !== u.f7.VISIBLE || g !== c) return;
            let r = t === u.AW.CATALOG ? i : o;
            s.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: r,
                page_session_id: e,
                page_type: t === u.AW.CATALOG ? "full" : t,
                category: t === u.AW.HOME ? void 0 : n,
            });
        }, [a, e, t, n, c, l, i, o, g]);
    },
    m = (e, t) => {
        let { analyticsLocations: n } = p(e);
        r.useEffect(() => {
            null == t ||
                o.ZP.canUseCollectibles(t) ||
                s.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: g.cd.COLLECTIBLES_SHOP,
                    location_stack: n,
                });
        }, [n, t]);
    };
