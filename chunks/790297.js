n.d(t, { N0: () => C, lC: () => h, uS: () => f });
var r = n(582128),
    l = n(17928),
    s = n(793574),
    a = n(688810),
    o = n(10392),
    i = n(82498),
    u = n(174459),
    c = n(158045),
    d = n(870216),
    p = n(758836),
    m = n(652215),
    g = n(202541);
function h(e) {
    let { analyticsSource: t, analyticsLocations: n } = (0, l.cf)([d.A], () => d.A.getAnalytics()),
        r = (function (e) {
            switch (e) {
                case p.G2.ORBS:
                    return s.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case p.G2.HOME:
                    return s.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case p.G2.BUNDLES:
                    return s.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case p.G2.AVATAR_DECORATIONS:
                    return s.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case p.G2.PROFILE_EFFECTS:
                    return s.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case p.G2.NAMEPLATES:
                    return s.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case p.G2.PROFILE_FRAMES:
                    return s.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                case p.G2.COLLECTION_INDEX:
                    return s.A.COLLECTIBLES_SHOP_INDEX_PAGE;
                case p.G2.PROMOTION:
                case p.G2.COLLABS:
                case p.G2.OFFER_ELIGIBLE:
                case p.G2.CATALOG:
                    return s.A.COLLECTIBLES_SHOP;
                case p.G2.GAME_SHOPS:
                    return s.A.SLAYER_STOREFRONT_SHOP_TAB;
                case p.G2.GAME_SERVERS:
                    return s.A.COLLECTIBLES_SHOP_GAME_SERVERS_TAB;
            }
        })(e),
        { analyticsLocations: o, newestAnalyticsLocation: i } = (0, a.Ay)([...n, s.A.COLLECTIBLES_SHOP, r]);
    return { analyticsSource: t, analyticsLocations: o, newestAnalyticsLocation: i, currentTabLocation: r };
}
function f(e, t, n, l) {
    let { sourceButton: s, enabled: a = !0 } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        { analyticsLocations: o, analyticsSource: i, currentTabLocation: c, newestAnalyticsLocation: d } = h(t);
    r.useEffect(() => {
        if (!a || l !== p.Pf.VISIBLE || d !== c) return;
        let r = t === p.G2.CATALOG ? s : i;
        u.default.track(m.HAw.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: o,
            source: r,
            page_session_id: e,
            page_type: t === p.G2.CATALOG ? "full" : t,
            category: t === p.G2.HOME ? void 0 : n,
        });
    }, [o, e, t, n, c, l, s, i, d, a]);
}
function C(e, t) {
    let { analyticsLocations: n } = h(e);
    r.useEffect(() => {
        null == t ||
            c.Ay.canUseCollectibles(t) ||
            (u.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, { type: g.e.COLLECTIBLES_SHOP, location_stack: n }),
            (0, o.sq)(m.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, i.uq)(g.e.COLLECTIBLES_SHOP)));
    }, [n, t]);
}
