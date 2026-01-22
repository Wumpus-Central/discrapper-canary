n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(435371),
    l = n(397927),
    c = n(594832),
    u = n(183555),
    d = n(524380),
    f = n(733557);
let p = i.forwardRef(function (e, t) {
    var n, i, a;
    let {
            onCardClick: p,
            tooltipConfig: _,
            shouldScalePreview: h = !0,
            renderPreview: m,
            moreCount: g,
            isSingleCard: E = !1,
            wishlistId: b,
            wishlistItem: y,
            cardSize: O = d.Y.MEDIUM,
            itemSource: A,
        } = e,
        { skuId: v, skuProductLine: S } = y,
        { trackUserProfileWishlistAction: I } = (0, u.NJ)(),
        T = h ? f.ho : f.C8,
        C = E ? f.pr : f.Nr,
        N = null != g && g > 0,
        R = (0, r.jsxs)(l.DUT, {
            onClick: () => {
                p(),
                    I({
                        action: N ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
                        skuId: N ? null : v,
                        wishlistId: b,
                        productLines: new Set([S]),
                    });
            },
            className: s()(C, { [f.ax]: O === d.Y.SMALL }),
            "aria-label": null != (n = _.title) ? n : "",
            innerRef: t,
            children: [
                (0, r.jsx)("div", {
                    className: T,
                    children: m(),
                }),
                N &&
                    (0, r.jsx)("div", {
                        className: f.sv,
                        children: (0, r.jsxs)(l.Text, {
                            variant: "text-xs/medium",
                            color: "always-white",
                            children: ["+", g],
                        }),
                    }),
            ],
        }),
        w = !N && null != A;
    return (0, r.jsxs)("div", {
        className: s()({ [f.r4]: w }),
        children: [
            w &&
                (0, r.jsx)("div", {
                    className: f.RL,
                    children:
                        A === c.uS.POPULAR
                            ? (0, r.jsx)(l.Y3C, {
                                  className: s()(f.fd, f.I$),
                                  size: "xxs",
                                  color: "currentColor",
                              })
                            : (0, r.jsx)(l.C3E, {
                                  className: s()(f.fd, f.O1),
                                  size: "xxs",
                                  color: "currentColor",
                              }),
                }),
            (0, r.jsx)(o.un, {
                asContainer: !0,
                asset: null == (a = _.renderIcon) ? void 0 : a.call(_, y),
                assetSize: c.Q8,
                title: _.title,
                body: null != (i = _.body) ? i : "",
                children: R,
            }),
        ],
    });
});
