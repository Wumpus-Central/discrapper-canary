n.d(t, { A: () => A });
var i = n(64700),
    l = n(311907),
    s = n(58149),
    a = n(688810),
    r = n(976860),
    o = n(954571),
    c = n(300233),
    d = n(636194),
    u = n(700206),
    h = n(652215);
function A(e) {
    let { guildId: t, groupListingId: n, location: A, relevantSubscriptionListingIds: _ } = e,
        m = (0, c.X)("useTrackRoleSubscriptionUpsellAnalytics"),
        { activeSubscription: g } = (0, u.A)(n),
        p = null != g,
        f = (0, l.yK)([d.A], () => (_ ?? []).filter((e) => d.A.getSubscriptionListing(e)?.published === !0), [_]),
        { analyticsLocations: x } = (0, a.Ay)((0, r.UC)() ?? []),
        E = i.useRef(!1);
    i.useEffect(() => {
        m &&
            null != n &&
            null != f &&
            !E.current &&
            ((E.current = !0),
            o.default.track(h.HAw.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
                role_subscription_group_listing_id: n,
                role_subscription_listing_ids: f,
                is_premium_member: p,
                location_stack: x,
                location: A,
                ...(0, s.H$)(t),
            }));
    }, [t, n, m, A, f, p, x]);
}
