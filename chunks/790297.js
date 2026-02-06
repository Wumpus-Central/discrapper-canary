"use strict";
s.d(t, { N0: () => h, lC: () => _, uS: () => m });
var n = s(64700),
    r = s(311907),
    l = s(793574),
    a = s(688810),
    i = s(954571),
    o = s(927578),
    c = s(870216),
    d = s(758836),
    u = s(652215),
    g = s(788868);
let _ = (e) => {
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
                        return l.A.COLLECTIBLES_SHOP;
                }
            })(e),
            { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...s, l.A.COLLECTIBLES_SHOP, n]);
        return { analyticsSource: t, analyticsLocations: i, newestAnalyticsLocation: o, currentTabLocation: n };
    },
    m = (e, t, s, r, l) => {
        let { analyticsLocations: a, analyticsSource: o, currentTabLocation: c, newestAnalyticsLocation: g } = _(t);
        n.useEffect(() => {
            if (r !== d.Pf.VISIBLE || g !== c) return;
            let n = t === d.G2.CATALOG ? l : o;
            i.default.track(u.HAw.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: n,
                page_session_id: e,
                page_type: t === d.G2.CATALOG ? "full" : t,
                category: t === d.G2.HOME ? void 0 : s,
            });
        }, [a, e, t, s, c, r, l, o, g]);
    },
    h = (e, t) => {
        let { analyticsLocations: s } = _(e);
        n.useEffect(() => {
            null == t ||
                o.Ay.canUseCollectibles(t) ||
                i.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, { type: g.e.COLLECTIBLES_SHOP, location_stack: s });
        }, [s, t]);
    };
