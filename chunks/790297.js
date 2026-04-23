"use strict";
s.d(t, { N0: () => m, lC: () => h, uS: () => _ });
var n = s(64700),
    l = s(311907),
    r = s(793574),
    a = s(688810),
    i = s(954571),
    o = s(927578),
    c = s(870216),
    d = s(758836),
    u = s(652215),
    g = s(788868);
let h = (e) => {
        let { analyticsSource: t, analyticsLocations: s } = (0, l.cf)([c.A], () => c.A.getAnalytics()),
            n = ((e) => {
                switch (e) {
                    case d.G2.ORBS:
                        return r.A.COLLECTIBLES_SHOP_ORBS_TAB;
                    case d.G2.HOME:
                        return r.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case d.G2.BUNDLES:
                        return r.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                    case d.G2.AVATAR_DECORATIONS:
                        return r.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                    case d.G2.PROFILE_EFFECTS:
                        return r.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                    case d.G2.NAMEPLATES:
                        return r.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                    case d.G2.CATALOG:
                    case d.G2.COLLECTION_INDEX:
                    case d.G2.LAYOUT:
                        return r.A.COLLECTIBLES_SHOP;
                    case d.G2.RIVALS:
                    case d.G2.GAME_SHOPS:
                        return r.A.SLAYER_STOREFRONT_SHOP_TAB;
                }
            })(e),
            { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...s, r.A.COLLECTIBLES_SHOP, n]);
        return { analyticsSource: t, analyticsLocations: i, newestAnalyticsLocation: o, currentTabLocation: n };
    },
    _ = (e, t, s, l, r) => {
        let { analyticsLocations: a, analyticsSource: o, currentTabLocation: c, newestAnalyticsLocation: g } = h(t);
        n.useEffect(() => {
            if (l !== d.Pf.VISIBLE || g !== c) return;
            let n = t === d.G2.CATALOG ? r : o;
            i.default.track(u.HAw.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: n,
                page_session_id: e,
                page_type: t === d.G2.CATALOG ? "full" : t,
                category: t === d.G2.HOME ? void 0 : s,
            });
        }, [a, e, t, s, c, l, r, o, g]);
    },
    m = (e, t) => {
        let { analyticsLocations: s } = h(e);
        n.useEffect(() => {
            null == t ||
                o.Ay.canUseCollectibles(t) ||
                i.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, { type: g.e.COLLECTIBLES_SHOP, location_stack: s });
        }, [s, t]);
    };
