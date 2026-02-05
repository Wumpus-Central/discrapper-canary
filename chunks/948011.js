n.d(t, { A: () => u });
var a = n(311907),
    s = n(354328),
    i = n(622543),
    l = n(287809),
    r = n(916023),
    o = n(816176),
    d = n(501838),
    c = n(188275);
function u(e) {
    let { location: t } = e,
        n = (0, r.kt)({ location: t }),
        u = (0, o.d)({ location: t }),
        m = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
        h = (0, a.bG)([i.A], () => (null != m ? i.A.getFirstWishlistId(m.id) : null)),
        x = (0, s.A)("wishlist_user_profile_account_popout_upsell"),
        p = (0, d.hJ)({ gameIds: c.sQ }),
        g = (0, d.ok)({ gameIds: c.sQ });
    return (u && n && null == h && (g || p)) || x;
}
