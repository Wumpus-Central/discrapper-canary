"use strict";
n.d(t, { A: () => A });
var i = n(64700),
    s = n(311907),
    l = n(58149),
    r = n(688810),
    a = n(976860),
    o = n(954571),
    c = n(300233),
    d = n(636194),
    u = n(700206),
    h = n(652215);
function A(e) {
    let { guildId: t, groupListingId: n, location: A, relevantSubscriptionListingIds: p } = e,
        g = (0, c.X)("useTrackRoleSubscriptionUpsellAnalytics"),
        { activeSubscription: m } = (0, u.A)(n),
        _ = null != m,
        f = (0, s.yK)([d.A], () => (p ?? []).filter((e) => d.A.getSubscriptionListing(e)?.published === !0), [p]),
        { analyticsLocations: x } = (0, r.Ay)((0, a.UC)() ?? []),
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
                is_premium_member: _,
                location_stack: x,
                location: A,
                ...(0, l.H$)(t),
            }));
    }, [t, n, g, A, f, _, x]);
}
