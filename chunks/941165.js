n.d(t, {
    A: () => _,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(688810),
    c = n(808247),
    u = n(384377),
    d = n(518477),
    f = n(985018),
    p = n(616501);

function _(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: _ } = e,
        { analyticsLocations: h } = (0, l.Ay)(),
        m = async () => {
            try {
                await c.A.removeSkuFromWishlist(n, t.skuId, h);
            } catch (e) {
                (0, u.XA)(d.jM.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(s.m, {
        text: f.intl.string(f.t.jTW016),
        children: (0, r.jsx)(o.DUT, {
            onClick: m,
            "aria-label": f.intl.string(f.t.jTW016),
            className: a()(_, p.v),
            children: (0, r.jsx)(o.ucK, {
                size: i,
                className: p.K,
                color: o.LU0.colors.ICON_FEEDBACK_CRITICAL,
            }),
        }),
    });
}
