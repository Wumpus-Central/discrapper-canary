t.d(s, { A: () => d });
var e = t(64700),
    u = t(17928),
    r = t(95561),
    l = t(688810),
    c = t(976860),
    n = t(174459),
    _ = t(300233),
    p = t(636194),
    o = t(700206),
    a = t(652215);
function d(i) {
    let { guildId: s, groupListingId: t, location: d, relevantSubscriptionListingIds: b } = i,
        A = (0, _.X)("useTrackRoleSubscriptionUpsellAnalytics"),
        { activeSubscription: k } = (0, o.A)(t),
        f = null != k,
        h = (0, u.yK)([p.A], () => (b ?? []).filter((i) => p.A.getSubscriptionListing(i)?.published === !0), [b]),
        { analyticsLocations: E } = (0, l.Ay)((0, c.UC)() ?? []),
        S = e.useRef(!1);
    e.useEffect(() => {
        A &&
            null != t &&
            null != h &&
            !S.current &&
            ((S.current = !0),
            n.default.track(a.HAw.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
                role_subscription_group_listing_id: t,
                role_subscription_listing_ids: h,
                is_premium_member: f,
                location_stack: E,
                location: d,
                ...(0, r.H$)(s),
            }));
    }, [s, t, A, d, h, f, E]);
}
