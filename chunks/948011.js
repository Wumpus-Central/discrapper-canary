n.d(t, { A: () => c });
var a = n(311907),
    i = n(354328),
    s = n(622543),
    l = n(287809),
    r = n(816176),
    o = n(501838),
    d = n(188275);
function c(e) {
    let { location: t } = e,
        n = (0, r.d)({ location: t }),
        c = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
        u = (0, a.bG)([s.A], () => (null != c ? s.A.getFirstWishlistId(c.id) : null)),
        m = (0, i.A)("wishlist_user_profile_account_popout_upsell"),
        h = (0, o.hJ)({ gameIds: d.sQ }),
        x = (0, o.ok)({ gameIds: d.sQ });
    return (n && null == u && (x || h)) || m;
}
