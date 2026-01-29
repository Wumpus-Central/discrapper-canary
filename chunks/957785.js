n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(397927),
    c = n(594832),
    u = n(183555),
    d = n(524380),
    p = n(733557);
let h = l.forwardRef(function (e, t) {
    var n, l, i;
    let {
            onCardClick: h,
            tooltipConfig: f,
            shouldScalePreview: g = !0,
            renderPreview: m,
            moreCount: b,
            isSingleCard: A = !1,
            wishlistId: y,
            wishlistItem: _,
            cardSize: O = d.Y.MEDIUM,
        } = e,
        { skuId: j, skuProductLine: v } = _,
        { trackUserProfileWishlistAction: x } = (0, u.NJ)(),
        E = g ? p.ho : p.C8,
        C = A ? p.pr : p.Nr,
        S = null != b && b > 0,
        I = (0, r.jsxs)(o.DUT, {
            onClick: () => {
                h(),
                    x({
                        action: S ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: S ? null : j,
                        wishlistId: y,
                        productLines: new Set([v]),
                    });
            },
            className: s()(C, {
                [p.ax]: O === d.Y.SMALL,
            }),
            "aria-label": null != (n = f.title) ? n : "",
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: E,
                    children: m(),
                }),
                S &&
                    (0, r.jsx)("div", {
                        className: p.sv,
                        children: (0, r.jsxs)(o.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", b],
                        }),
                    }),
            ],
        });
    return (0, r.jsx)(a.un, {
        asContainer: !0,
        asset: null == (i = f.renderIcon) ? void 0 : i.call(f, _),
        assetSize: c.Q8,
        title: f.title,
        body: null != (l = f.body) ? l : "",
        children: I,
    });
});
