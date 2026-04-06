"use strict";
s.d(t, { N0: () => h, lC: () => g, uS: () => m });
var n = s(64700),
    r = s(311907),
    l = s(793574),
    i = s(688810),
    a = s(954571),
    o = s(927578),
    c = s(870216),
    d = s(758836),
    u = s(652215),
    _ = s(788868);
let g = (e) => {
        let { analyticsSource: t, analyticsLocations: s } = (0, r.cf)([c.A], () => c.A.getAnalytics()),
            n = ((e) => {
                switch (e) {
                    case d.G2.ORBS:
                        return l.A.COLLECTIBLES_SHOP_ORBS_TAB;
                    case d.G2.HOME:
                        return l.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case d.G2.BUNDLES:
                        return l.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                    case d.G2.AVATAR_DECORATIONS:
                        return l.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                    case d.G2.PROFILE_EFFECTS:
                        return l.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                    case d.G2.NAMEPLATES:
                        return l.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                    case d.G2.CATALOG:
                    case d.G2.COLLECTION_INDEX:
                    case d.G2.LAYOUT:
                        return l.A.COLLECTIBLES_SHOP;
                    case d.G2.RIVALS:
                    case d.G2.GAME_SHOPS:
                        return l.A.SLAYER_STOREFRONT_SHOP_TAB;
                }
            })(e),
            { analyticsLocations: a, newestAnalyticsLocation: o } = (0, i.Ay)([...s, l.A.COLLECTIBLES_SHOP, n]);
        return { analyticsSource: t, analyticsLocations: a, newestAnalyticsLocation: o, currentTabLocation: n };
    },
    m = (e, t, s, r, l) => {
        let { analyticsLocations: i, analyticsSource: o, currentTabLocation: c, newestAnalyticsLocation: _ } = g(t);
        n.useEffect(() => {
            if (r !== d.Pf.VISIBLE || _ !== c) return;
            let n = t === d.G2.CATALOG ? l : o;
            a.default.track(u.HAw.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: i,
                source: n,
                page_session_id: e,
                page_type: t === d.G2.CATALOG ? "full" : t,
                category: t === d.G2.HOME ? void 0 : s,
            });
        }, [i, e, t, s, c, r, l, o, _]);
    },
    h = (e, t) => {
        let { analyticsLocations: s } = g(e);
        n.useEffect(() => {
            null == t ||
                o.Ay.canUseCollectibles(t) ||
                a.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, { type: _.e.COLLECTIBLES_SHOP, location_stack: s });
        }, [s, t]);
    };
