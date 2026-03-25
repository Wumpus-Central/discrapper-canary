"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(435371),
    o = n(397927),
    c = n(661492),
    d = n(594832),
    u = n(183555),
    h = n(524380),
    A = n(985018),
    m = n(733557);
let _ = s.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipConfig: s,
            shouldScalePreview: l = !0,
            renderPreview: _,
            moreCount: p,
            isSingleCard: g = !1,
            wishlistId: f,
            wishlistItem: x,
            cardSize: C = h.Y.MEDIUM,
        } = e,
        { skuId: E, skuProductLine: I } = x,
        { trackUserProfileWishlistAction: N } = (0, u.NJ)(),
        b = l ? m.ho : m.C8,
        S = g ? m.pr : m.Nr,
        T = null != p && p > 0,
        v = T ? A.intl.string(A.t.TxBQzD) : (0, c.x2)(x),
        y = (0, i.jsxs)(o.DUT, {
            onClick: () => {
                n(),
                    N({
                        action: T ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: T ? null : E,
                        wishlistId: f,
                        productLines: new Set([I]),
                    });
            },
            className: a()(S, { [m.ax]: C === h.Y.SMALL }),
            "aria-label": v,
            innerRef: t,
            children: [
                (0, i.jsx)("div", { className: b, children: _() }),
                T &&
                    (0, i.jsx)("div", {
                        className: m.sv,
                        children: (0, i.jsxs)(o.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", p],
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(r.un, {
        asContainer: !0,
        asset: s.renderIcon?.(x),
        assetSize: d.Q8,
        title: s.title,
        body: s.body ?? "",
        children: y,
    });
});
