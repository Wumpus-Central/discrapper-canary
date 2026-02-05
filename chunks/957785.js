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
    h = n(733557);
let A = l.forwardRef(function (e, t) {
    let {
            onCardClick: n,
            tooltipConfig: l,
            shouldScalePreview: s = !0,
            renderPreview: A,
            moreCount: g,
            isSingleCard: m = !1,
            wishlistId: p,
            wishlistItem: _,
            cardSize: x = u.Y.MEDIUM,
        } = e,
        { skuId: f, skuProductLine: E } = _,
        { trackUserProfileWishlistAction: C } = (0, c.NJ)(),
        I = s ? h.ho : h.C8,
        S = m ? h.pr : h.Nr,
        b = null != g && g > 0,
        N = (0, i.jsxs)(o.DUT, {
            onClick: () => {
                n(),
                    C({
                        action: b ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: b ? null : f,
                        wishlistId: p,
                        productLines: new Set([E]),
                    });
            },
            className: a()(S, { [h.ax]: x === u.Y.SMALL }),
            "aria-label": l.title ?? "",
            innerRef: t,
            children: [
                (0, i.jsx)("div", { className: I, children: A() }),
                b &&
                    (0, i.jsx)("div", {
                        className: h.sv,
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
        asset: l.renderIcon?.(_),
        assetSize: d.Q8,
        title: l.title,
        body: l.body ?? "",
        children: N,
    });
});
