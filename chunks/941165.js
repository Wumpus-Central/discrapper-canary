"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927),
    l = n(688810),
    u = n(808247),
    c = n(384377),
    d = n(518477),
    _ = n(985018),
    f = n(616501);
function p(e) {
    let { item: t, wishlistId: n, iconSize: i = "refresh_sm", className: p } = e,
        { analyticsLocations: h } = (0, l.Ay)(),
        m = async () => {
            try {
                await u.A.removeSkuFromWishlist(n, t.skuId, h);
            } catch (e) {
                (0, c.XA)(d.jM.SOMETHING_WENT_WRONG);
            }
        };
    return (0, r.jsx)(s.m, {
        text: _.intl.string(_.t.jTW016),
        children: (0, r.jsx)(o.DUT, {
            onClick: m,
            "aria-label": _.intl.string(_.t.jTW016),
            className: a()(p, f.v),
            children: (0, r.jsx)(o.ucK, { size: i, className: f.K, color: o.LU0.colors.ICON_FEEDBACK_CRITICAL }),
        }),
    });
}
