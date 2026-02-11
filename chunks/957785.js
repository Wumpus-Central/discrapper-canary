n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(435371),
    o = n(397927),
    d = n(594832),
    c = n(183555),
    u = n(524380),
    h = n(55751);
let A = l.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipConfig: l,
            shouldScalePreview: s = !0,
            renderPreview: A,
            moreCount: m,
            isSingleCard: p = !1,
            wishlistId: g,
            wishlistItem: _,
            cardSize: f = u.Y.MEDIUM,
        } = e,
        { skuId: x, skuProductLine: C } = _,
        { trackUserProfileWishlistAction: E } = (0, c.NJ)(),
        I = s ? h.ho : h.C8,
        b = p ? h.pr : h.Nr,
        N = null != m && m > 0,
        S = (0, i.jsxs)(o.DUT, {
            onClick: () => {
                n(),
                    E({
                        action: N ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: N ? null : x,
                        wishlistId: g,
                        productLines: new Set([C]),
                    });
            },
            className: a()(b, { [h.ax]: f === u.Y.SMALL }),
            "aria-label": l.title ?? "",
            innerRef: t,
            children: [
                (0, i.jsx)("div", { className: I, children: A() }),
                N &&
                    (0, i.jsx)("div", {
                        className: h.sv,
                        children: (0, i.jsxs)(o.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", m],
                        }),
                    }),
            ],
        });
    return (0, i.jsx)(r.un, {
        asContainer: !0,
        asset: l.renderIcon?.(_),
        assetSize: d.Q8,
        title: l.title,
        body: l.body ?? "",
        children: S,
    });
});
