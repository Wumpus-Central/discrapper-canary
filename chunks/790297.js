l.d(t, {
    N0: () => p,
    lC: () => b,
    uS: () => g,
}),
    l(896048);
var n = l(64700),
    r = l(311907),
    s = l(793574),
    a = l(688810),
    i = l(954571),
    o = l(927578),
    c = l(870216),
    u = l(758836),
    d = l(652215),
    f = l(788868);
let b = (e) => {
        let { analyticsSource: t, analyticsLocations: l } = (0, r.cf)([c.A], () => c.A.getAnalytics()),
            n = ((e) => {
                switch (e) {
                    case u.G2.ORBS:
                        return s.A.COLLECTIBLES_SHOP_ORBS_TAB;
                    case u.G2.HOME:
                        return s.A.COLLECTIBLES_SHOP_HOME_SCREEN;
                    case u.G2.BUNDLES:
                        return s.A.COLLECTIBLES_SHOP_BUNDLES_TAB;
                    case u.G2.AVATAR_DECORATIONS:
                        return s.A.COLLECTIBLES_SHOP_AVATAR_DECORATIONS_TAB;
                    case u.G2.PROFILE_EFFECTS:
                        return s.A.COLLECTIBLES_SHOP_PROFILE_EFFECTS_TAB;
                    case u.G2.NAMEPLATES:
                        return s.A.COLLECTIBLES_SHOP_NAMEPLATES_TAB;
                    case u.G2.CATALOG:
                        return s.A.COLLECTIBLES_SHOP;
                }
            })(e),
            { analyticsLocations: i, newestAnalyticsLocation: o } = (0, a.Ay)([...l, s.A.COLLECTIBLES_SHOP, n]);
        return {
            analyticsSource: t,
            analyticsLocations: i,
            newestAnalyticsLocation: o,
            currentTabLocation: n,
        };
    },
    g = (e, t, l, r, s) => {
        let { analyticsLocations: a, analyticsSource: o, currentTabLocation: c, newestAnalyticsLocation: f } = b(t);
        n.useEffect(() => {
            if (r !== u.Pf.VISIBLE || f !== c) return;
            let n = t === u.G2.CATALOG ? s : o;
            i.default.track(d.HAw.COLLECTIBLES_SHOP_VIEWED, {
                location_stack: a,
                source: n,
                page_session_id: e,
                page_type: t === u.G2.CATALOG ? "full" : t,
                category: t === u.G2.HOME ? void 0 : l,
            });
        }, [a, e, t, l, c, r, s, o, f]);
    },
    p = (e, t) => {
        let { analyticsLocations: l } = b(e);
        n.useEffect(() => {
            null == t ||
                o.Ay.canUseCollectibles(t) ||
                i.default.track(d.HAw.PREMIUM_UPSELL_VIEWED, {
                    type: f.e.COLLECTIBLES_SHOP,
                    location_stack: l,
                });
        }, [l, t]);
    };
