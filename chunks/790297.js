n.d(t, { N0: () => m, lC: () => E, uS: () => _ });
var s = n(64700),
    l = n(17928),
    r = n(793574),
    a = n(688810),
    i = n(174459),
    o = n(428262),
    u = n(870216),
    c = n(758836),
    d = n(652215),
    g = n(788868);
function E(e) {
    let { analyticsSource: t, analyticsLocations: n } = (0, l.cf)([u.A], () => u.A.getAnalytics()),
        s = (function (e) {
            switch (e) {
                case c.G2.ORBS:
                    return r.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case c.G2.HOME:
                    return r.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case c.G2.BUNDLES:
                    return r.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case c.G2.AVATAR_DECORATIONS:
                    return r.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case c.G2.PROFILE_EFFECTS:
                    return r.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case c.G2.NAMEPLATES:
                    return r.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case c.G2.PROFILE_FRAMES:
                    return r.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                case c.G2.COLLECTION_INDEX:
                    return r.A.COLLECTIBLES_SHOP_INDEX_PAGE;
                case c.G2.CATALOG:
                case c.G2.LAYOUT:
                    return r.A.COLLECTIBLES_SHOP;
                case c.G2.GAME_SHOPS:
                    return r.A.SLAYER_STOREFRONT_SHOP_TAB;
            }
        })(e),
        { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...n, r.A.COLLECTIBLES_SHOP, s]);
    return { analyticsSource: t, analyticsLocations: i, newestAnalyticsLocation: o, currentTabLocation: s };
}
function _(e, t, n, l, r) {
    let { analyticsLocations: a, analyticsSource: o, currentTabLocation: u, newestAnalyticsLocation: g } = E(t);
    s.useEffect(() => {
        if (l !== c.Pf.VISIBLE || g !== u) return;
        let s = t === c.G2.CATALOG ? r : o;
        i.default.track(d.HAw.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: a,
            source: s,
            page_session_id: e,
            page_type: t === c.G2.CATALOG ? "full" : t,
            category: t === c.G2.HOME ? void 0 : n,
        });
    }, [a, e, t, n, u, l, r, o, g]);
}
function m(e, t) {
    let { analyticsLocations: n } = E(e);
    s.useEffect(() => {
        null == t ||
            o.Ay.canUseCollectibles(t) ||
            i.default.track(d.HAw.PREMIUM_UPSELL_VIEWED, { type: g.e.COLLECTIBLES_SHOP, location_stack: n });
    }, [n, t]);
}
