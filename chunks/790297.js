r.d(t, { N0: () => _, lC: () => h, uS: () => E });
var n = r(582128),
    l = r(17928),
    s = r(793574),
    a = r(688810),
    i = r(10392),
    o = r(82498),
    u = r(174459),
    c = r(158045),
    d = r(870216),
    g = r(758836),
    p = r(652215),
    m = r(202541);
function h(e) {
    let { analyticsSource: t, analyticsLocations: r } = (0, l.cf)([d.A], () => d.A.getAnalytics()),
        n = (function (e) {
            switch (e) {
                case g.G2.ORBS:
                    return s.A.COLLECTIBLES_SHOP_ORBS_TAB;
                case g.G2.HOME:
                    return s.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                case g.G2.BUNDLES:
                    return s.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                case g.G2.AVATAR_DECORATIONS:
                    return s.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                case g.G2.PROFILE_EFFECTS:
                    return s.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                case g.G2.NAMEPLATES:
                    return s.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                case g.G2.PROFILE_FRAMES:
                    return s.A.COLLECTIBLES_SHOP_PROFILE_FRAMES_TAB;
                case g.G2.COLLECTION_INDEX:
                    return s.A.COLLECTIBLES_SHOP_INDEX_PAGE;
                case g.G2.PROMOTION:
                case g.G2.COLLABS:
                case g.G2.OFFER_ELIGIBLE:
                case g.G2.CATALOG:
                case g.G2.LAYOUT:
                    return s.A.COLLECTIBLES_SHOP;
                case g.G2.GAME_SHOPS:
                    return s.A.SLAYER_STOREFRONT_SHOP_TAB;
                case g.G2.GAME_SERVERS:
                    return s.A.COLLECTIBLES_SHOP_GAME_SERVERS_TAB;
            }
        })(e),
        { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...r, s.A.COLLECTIBLES_SHOP, n]);
    return { analyticsSource: t, analyticsLocations: i, newestAnalyticsLocation: o, currentTabLocation: n };
}
function E(e, t, r, l, s) {
    let { analyticsLocations: a, analyticsSource: i, currentTabLocation: o, newestAnalyticsLocation: c } = h(t);
    n.useEffect(() => {
        if (l !== g.Pf.VISIBLE || c !== o) return;
        let n = t === g.G2.CATALOG ? s : i;
        u.default.track(p.HAw.COLLECTIBLES_SHOP_VIEWED, {
            location_stack: a,
            source: n,
            page_session_id: e,
            page_type: t === g.G2.CATALOG ? "full" : t,
            category: t === g.G2.HOME ? void 0 : r,
        });
    }, [a, e, t, r, o, l, s, i, c]);
}
function _(e, t) {
    let { analyticsLocations: r } = h(e);
    n.useEffect(() => {
        null == t ||
            c.Ay.canUseCollectibles(t) ||
            (u.default.track(p.HAw.PREMIUM_UPSELL_VIEWED, { type: m.e.COLLECTIBLES_SHOP, location_stack: r }),
            (0, i.sq)(p.U7l.PREMIUM_UPSELL_VIEWED, r, () => (0, o.uq)(m.e.COLLECTIBLES_SHOP)));
    }, [r, t]);
}
