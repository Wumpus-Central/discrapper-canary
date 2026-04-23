n.d(t, { A: () => A });
var i = n(64700),
    l = n(17928),
    s = n(58149),
    r = n(688810),
    a = n(976860),
    o = n(954571),
    d = n(300233),
    c = n(636194),
    u = n(700206),
    h = n(652215);
function A(e) {
    let { guildId: t, groupListingId: n, location: A, relevantSubscriptionListingIds: _ } = e,
        g = (0, d.X)("useTrackRoleSubscriptionUpsellAnalytics"),
        { activeSubscription: m } = (0, u.A)(n),
        p = null != m,
        f = (0, l.yK)([c.A], () => (_ ?? []).filter((e) => c.A.getSubscriptionListing(e)?.published === !0), [_]),
        { analyticsLocations: E } = (0, r.Ay)((0, a.UC)() ?? []),
        C = i.useRef(!1);
    i.useEffect(() => {
        g &&
            null != n &&
            null != f &&
            !C.current &&
            ((C.current = !0),
            o.default.track(h.HAw.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
                role_subscription_group_listing_id: n,
                role_subscription_listing_ids: f,
                is_premium_member: p,
                location_stack: E,
                location: A,
                ...(0, s.H$)(t),
            }));
    }, [t, n, g, A, f, p, E]);
}
