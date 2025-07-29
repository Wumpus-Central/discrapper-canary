(r.d(t, {
    EB: () => b,
    MV: () => g,
    q3: () => h
}),
    r(388685));
var n = r(73800),
    l = r(442837),
    i = r(100527),
    a = r(906732),
    o = r(626135),
    s = r(74538),
    c = r(328347),
    u = r(215023),
    d = r(981631),
    p = r(474936);
let f = (e) => {
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
    g = (e) => {
        let { analyticsSource: t, analyticsLocations: r } = (0, l.cj)([c.Z], () => c.Z.getAnalytics()),
            n = f(e),
            { analyticsLocations: o, newestAnalyticsLocation: s } = (0, a.ZP)([...r, i.Z.COLLECTIBLES_SHOP, n]);
        return {
            analyticsSource: t,
            analyticsLocations: o,
            newestAnalyticsLocation: s,
            currentTabLocation: n
        };
    },
    h = (e, t, r, l, i) => {
        let { analyticsLocations: a, analyticsSource: s, currentTabLocation: c, newestAnalyticsLocation: p } = g(t);
        n.useEffect(() => {
            if (l !== u.f7.VISIBLE || p !== c) return;
            let n = t === u.AW.CATALOG ? i : s;
            o.default.track(d.rMx.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: n,
                page_session_id: e,
                page_type: t === u.AW.CATALOG ? 'full' : t,
                category: t === u.AW.HOME ? void 0 : r
            });
        }, [a, e, t, r, c, l, i, s, p]);
    },
    b = (e, t) => {
        let { analyticsLocations: r } = g(e);
        n.useEffect(() => {
            null == t ||
                s.ZP.canUseCollectibles(t) ||
                o.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
                    type: p.cd.COLLECTIBLES_SHOP,
                    location_stack: r
                });
        }, [r, t]);
    };
