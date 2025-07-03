(n.d(t, {
    EB: () => b,
    MV: () => f,
    q3: () => h
}),
    n(388685));
var r = n(73800),
    l = n(442837),
    i = n(100527),
    o = n(906732),
    a = n(626135),
    s = n(74538),
    c = n(328347),
    u = n(215023),
    d = n(981631),
    p = n(474936);
let g = (e) => {
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
                return i.Z.COLLECTIBLES_SHOP_FULLSCREEN;
        }
    },
    f = (e) => {
        let { analyticsSource: t, analyticsLocations: n } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()),
            r = g(e),
            { analyticsLocations: a, newestAnalyticsLocation: s } = (0, o.ZP)([...n, i.Z.COLLECTIBLES_SHOP, r]);
        return {
            analyticsSource: t,
            analyticsLocations: a,
            newestAnalyticsLocation: s,
            currentTabLocation: r
        };
    },
    h = (e, t, n, l, i) => {
        let { analyticsLocations: o, analyticsSource: s, currentTabLocation: c, newestAnalyticsLocation: p } = f(t);
        r.useEffect(() => {
            if (l !== u.f7.VISIBLE || p !== c) return;
            let r = t === u.AW.CATALOG ? i : s;
            a.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: o,
                source: r,
                page_session_id: e,
                page_type: t === u.AW.CATALOG ? 'full' : t,
                category: t === u.AW.HOME ? void 0 : n
            });
        }, [o, e, t, n, c, l, i, s, p]);
    },
    b = (e, t) => {
        let { analyticsLocations: n } = f(e);
        r.useEffect(() => {
            null == t ||
                s.ZP.canUseCollectibles(t) ||
                a.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: p.cd.COLLECTIBLES_SHOP,
                    location_stack: n
                });
        }, [n, t]);
    };
