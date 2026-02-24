"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(435371),
    o = n(397927),
    c = n(594832),
    d = n(183555),
    u = n(524380),
    h = n(55751);
let A = s.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipConfig: s,
            shouldScalePreview: l = !0,
            renderPreview: A,
            moreCount: p,
            isSingleCard: g = !1,
            wishlistId: m,
            wishlistItem: _,
            cardSize: f = u.Y.MEDIUM,
        } = e,
        { skuId: x, skuProductLine: C } = _,
        { trackUserProfileWishlistAction: E } = (0, d.NJ)(),
        I = l ? h.ho : h.C8,
        N = g ? h.pr : h.Nr,
        b = null != p && p > 0,
        S = (0, i.jsxs)(o.DUT, {
            onClick: () => {
                n(),
                    E({
                        action: b ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: b ? null : x,
                        wishlistId: m,
                        productLines: new Set([C]),
                    });
            },
            className: r()(N, { [h.ax]: f === u.Y.SMALL }),
            "aria-label": s.title ?? "",
            innerRef: t,
            children: [
                (0, i.jsx)("div", { className: I, children: A() }),
                b &&
                    (0, i.jsx)("div", {
                        className: h.sv,
                        children: (0, i.jsxs)(o.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", p],
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(a.un, {
        asContainer: !0,
        asset: s.renderIcon?.(_),
        assetSize: c.Q8,
        title: s.title,
        body: s.body ?? "",
        children: S,
    });
});
