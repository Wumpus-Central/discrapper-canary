s.d(t, { N0: () => m, lC: () => E, uS: () => _ });
var l = s(64700),
    r = s(17928),
    n = s(793574),
    a = s(688810),
    i = s(174459),
    o = s(428262),
    u = s(870216),
    c = s(758836),
    d = s(652215),
    g = s(788868);
let E = (e) => {
        let { analyticsSource: t, analyticsLocations: s } = (0, r.cf)([u.A], () => u.A.getAnalytics()),
            l = ((e) => {
                switch (e) {
                    case c.G2.ORBS:
                        return n.A.COLLECTIBLES_SHOP_ORBS_TAB;
                    case c.G2.HOME:
                        return n.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case c.G2.BUNDLES:
                        return n.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                    case c.G2.AVATAR_DECORATIONS:
                        return n.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                    case c.G2.PROFILE_EFFECTS:
                        return n.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                    case c.G2.NAMEPLATES:
                        return n.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                    case c.G2.PROFILE_FRAMES:
                        return n.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                    case c.G2.COLLECTION_INDEX:
                        return n.A.COLLECTIBLES_SHOP_INDEX_PAGE;
                    case c.G2.CATALOG:
                    case c.G2.LAYOUT:
                        return n.A.COLLECTIBLES_SHOP;
                    case c.G2.GAME_SHOPS:
                        return n.A.SLAYER_STOREFRONT_SHOP_TAB;
                }
            })(e),
            { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...s, n.A.COLLECTIBLES_SHOP, l]);
        return { analyticsSource: t, analyticsLocations: i, newestAnalyticsLocation: o, currentTabLocation: l };
    },
    _ = (e, t, s, r, n) => {
        let { analyticsLocations: a, analyticsSource: o, currentTabLocation: u, newestAnalyticsLocation: g } = E(t);
        l.useEffect(() => {
            if (r !== c.Pf.VISIBLE || g !== u) return;
            let l = t === c.G2.CATALOG ? n : o;
            i.default.track(d.HAw.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: l,
                page_session_id: e,
                page_type: t === c.G2.CATALOG ? "full" : t,
                category: t === c.G2.HOME ? void 0 : s,
            });
        }, [a, e, t, s, u, r, n, o, g]);
    },
    m = (e, t) => {
        let { analyticsLocations: s } = E(e);
        l.useEffect(() => {
            null == t ||
                o.Ay.canUseCollectibles(t) ||
                i.default.track(d.HAw.PREMIUM_UPSELL_VIEWED, { type: g.e.COLLECTIBLES_SHOP, location_stack: s });
        }, [s, t]);
    };
