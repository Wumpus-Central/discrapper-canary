n.d(t, { N0: () => A, lC: () => L, uS: () => g });
var r = n(582128),
    s = n(17928),
    l = n(793574),
    a = n(688810),
    i = n(10392),
    o = n(82498),
    u = n(174459),
    c = n(158045),
    d = n(870216),
    E = n(758836),
    _ = n(652215),
    S = n(202541);
function L(e) {
    let { analyticsSource: t, analyticsLocations: n } = (0, s.cf)([d.A], () => d.A.getAnalytics()),
        r = (function (e) {
            switch (e) {
                case E.G2.ORBS:
                    return l.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case E.G2.HOME:
                    return l.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case E.G2.BUNDLES:
                    return l.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case E.G2.AVATAR_DECORATIONS:
                    return l.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case E.G2.PROFILE_EFFECTS:
                    return l.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case E.G2.NAMEPLATES:
                    return l.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case E.G2.PROFILE_FRAMES:
                    return l.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                case E.G2.COLLECTION_INDEX:
                    return l.A.COLLECTIBLES_SHOP_INDEX_PAGE;
                case E.G2.COLLABS:
                case E.G2.OFFER_ELIGIBLE:
                case E.G2.CATALOG:
                case E.G2.LAYOUT:
                    return l.A.COLLECTIBLES_SHOP;
                case E.G2.GAME_SHOPS:
                    return l.A.SLAYER_STOREFRONT_SHOP_TAB;
                case E.G2.GAME_SERVERS:
                    return l.A.COLLECTIBLES_SHOP_GAME_SERVERS_TAB;
            }
        })(e),
        { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...n, l.A.COLLECTIBLES_SHOP, r]);
    return { analyticsSource: t, analyticsLocations: i, newestAnalyticsLocation: o, currentTabLocation: r };
}
function g(e, t, n, s, l) {
    let { analyticsLocations: a, analyticsSource: i, currentTabLocation: o, newestAnalyticsLocation: c } = L(t);
    r.useEffect(() => {
        if (s !== E.Pf.VISIBLE || c !== o) return;
        let r = t === E.G2.CATALOG ? l : i;
        u.default.track(_.HAw.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: a,
            source: r,
            page_session_id: e,
            page_type: t === E.G2.CATALOG ? "full" : t,
            category: t === E.G2.HOME ? void 0 : n,
        });
    }, [a, e, t, n, o, s, l, i, c]);
}
function A(e, t) {
    let { analyticsLocations: n } = L(e);
    r.useEffect(() => {
        null == t ||
            c.Ay.canUseCollectibles(t) ||
            (u.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, { type: S.e.COLLECTIBLES_SHOP, location_stack: n }),
            (0, i.sq)(_.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, o.uq)(S.e.COLLECTIBLES_SHOP)));
    }, [n, t]);
}
