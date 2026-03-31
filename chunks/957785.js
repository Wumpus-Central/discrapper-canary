n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(435371),
    o = n(397927),
    c = n(661492),
    d = n(594832),
    u = n(183555),
    h = n(524380),
    A = n(985018),
    _ = n(842006);
let m = l.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipConfig: l,
            shouldScalePreview: s = !0,
            renderPreview: m,
            moreCount: g,
            isSingleCard: p = !1,
            wishlistId: f,
            wishlistItem: x,
            cardSize: E = h.Y.MEDIUM,
        } = e,
        { skuId: I, skuProductLine: C } = x,
        { trackUserProfileWishlistAction: N } = (0, u.NJ)(),
        T = s ? _.ho : _.C8,
        S = p ? _.pr : _.Nr,
        b = null != g && g > 0,
        y = b ? A.intl.string(A.t.TxBQzD) : (0, c.x2)(x),
        v = (0, i.jsxs)(o.DUT, {
            onClick: () => {
                n(),
                    N({
                        action: b ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: b ? null : I,
                        wishlistId: f,
                        productLines: new Set([C]),
                    });
            },
            className: a()(S, { [_.ax]: E === h.Y.SMALL }),
            "aria-label": y,
            innerRef: t,
            children: [
                (0, i.jsx)("div", { className: T, children: m() }),
                b &&
                    (0, i.jsx)("div", {
                        className: _.sv,
                        children: (0, i.jsxs)(o.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", g],
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(r.un, {
        asContainer: !0,
        asset: l.renderIcon?.(x),
        assetSize: d.Q8,
        title: l.title,
        body: l.body ?? "",
        children: v,
    });
});
