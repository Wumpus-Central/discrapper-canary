n.d(t, {
    A: () => u,
});
var a = n(311907),
    l = n(354328),
    i = n(622543),
    r = n(287809),
    s = n(916023),
    o = n(816176),
    c = n(501838),
    d = n(188275);

function u(e) {
    let { location: t } = e,
        n = (0, s.kt)({
            location: t,
        }),
        u = (0, o.d)({
            location: t,
        }),
        m = (0, a.bG)([r.default], () => r.default.getCurrentUser()),
        p = (0, a.bG)([i.A], () => (null != m ? i.A.getFirstWishlistId(m.id) : null)),
        h = (0, l.A)("wishlist_user_profile_account_popout_upsell"),
        f = (0, c.hJ)({
            gameIds: d.sQ,
        }),
        x = (0, c.ok)({
            gameIds: d.sQ,
        });
    return (u && n && null == p && (x || f)) || h;
}
