(r.d(t, {
    EB: () => b,
    MV: () => f,
    q3: () => h
}),
    r(388685));
var n = r(73800),
    l = r(442837),
    o = r(100527),
    i = r(906732),
    a = r(626135),
    s = r(74538),
    c = r(328347),
    u = r(215023),
    d = r(981631),
    p = r(474936);
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
        let { analyticsSource: t, analyticsLocations: r } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()),
            n = g(e),
            { analyticsLocations: a, newestAnalyticsLocation: s } = (0, i.ZP)([...r, o.Z.COLLECTIBLES_SHOP, n]);
        return {
            analyticsSource: t,
            analyticsLocations: a,
            newestAnalyticsLocation: s,
            currentTabLocation: n
        };
    },
    h = (e, t, r, l, o) => {
        let { analyticsLocations: i, analyticsSource: s, currentTabLocation: c, newestAnalyticsLocation: p } = f(t);
        n.useEffect(() => {
            if (l !== u.f7.VISIBLE || p !== c) return;
            let n = t === u.AW.CATALOG ? o : s;
            a.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: i,
                source: n,
                page_session_id: e,
                page_type: t === u.AW.CATALOG ? 'full' : t,
                category: t === u.AW.HOME ? void 0 : r
            });
        }, [i, e, t, r, c, l, o, s, p]);
    },
    b = (e, t) => {
        let { analyticsLocations: r } = f(e);
        n.useEffect(() => {
            null == t ||
                s.ZP.canUseCollectibles(t) ||
                a.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: p.cd.COLLECTIBLES_SHOP,
                    location_stack: r
                });
        }, [r, t]);
    };
