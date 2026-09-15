n.d(t, { N0: () => p, lC: () => S, uS: () => L });
var r = n(582128),
    s = n(17928),
    l = n(793574),
    a = n(688810),
    i = n(10392),
    o = n(82498),
    u = n(174459),
    c = n(158045),
    d = n(870216),
    _ = n(758836),
    E = n(652215),
    g = n(202541);
function S(e) {
    let { analyticsSource: t, analyticsLocations: n } = (0, s.cf)([d.A], () => d.A.getAnalytics()),
        r = (function (e) {
            switch (e) {
                case _.G2.ORBS:
                    return l.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case _.G2.HOME:
                    return l.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case _.G2.BUNDLES:
                    return l.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case _.G2.AVATAR_DECORATIONS:
                    return l.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case _.G2.PROFILE_EFFECTS:
                    return l.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case _.G2.NAMEPLATES:
                    return l.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case _.G2.PROFILE_FRAMES:
                    return l.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                case _.G2.COLLECTION_INDEX:
                    return l.A.COLLECTIBLES_SHOP_INDEX_PAGE;
                case _.G2.PROMOTION:
                case _.G2.COLLABS:
                case _.G2.OFFER_ELIGIBLE:
                case _.G2.CATALOG:
                case _.G2.LAYOUT:
                    return l.A.COLLECTIBLES_SHOP;
                case _.G2.GAME_SHOPS:
                    return l.A.SLAYER_STOREFRONT_SHOP_TAB;
                case _.G2.GAME_SERVERS:
                    return l.A.COLLECTIBLES_SHOP_GAME_SERVERS_TAB;
            }
        })(e),
        { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...n, l.A.COLLECTIBLES_SHOP, r]);
    return { analyticsSource: t, analyticsLocations: i, newestAnalyticsLocation: o, currentTabLocation: r };
}
function L(e, t, n, s, l) {
    let { analyticsLocations: a, analyticsSource: i, currentTabLocation: o, newestAnalyticsLocation: c } = S(t);
    r.useEffect(() => {
        if (s !== _.Pf.VISIBLE || c !== o) return;
        let r = t === _.G2.CATALOG ? l : i;
        u.default.track(E.HAw.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: a,
            source: r,
            page_session_id: e,
            page_type: t === _.G2.CATALOG ? "full" : t,
            category: t === _.G2.HOME ? void 0 : n,
        });
    }, [a, e, t, n, o, s, l, i, c]);
}
function p(e, t) {
    let { analyticsLocations: n } = S(e);
    r.useEffect(() => {
        null == t ||
            c.Ay.canUseCollectibles(t) ||
            (u.default.track(E.HAw.PREMIUM_UPSELL_VIEWED, { type: g.e.COLLECTIBLES_SHOP, location_stack: n }),
            (0, i.sq)(E.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, o.uq)(g.e.COLLECTIBLES_SHOP)));
    }, [n, t]);
}
