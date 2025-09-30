n.d(t, { q: () => _ });
var r = n(951288),
    l = n(647438),
    i = n(622535),
    a = n(481060),
    s = n(626135),
    o = n(381585),
    c = n(597688),
    u = n(297651),
    d = n(794324),
    g = n(981631),
    p = n(388032),
    f = n(310582);
let _ = (e) => {
    var t, n, _;
    let C,
        { category: h, subblock: m, badgeText: b, handleTransition: E } = e;
    null != m &&
        (C =
            null == (t = c.Z.getCategoryByStoreListingId(null == m ? void 0 : m.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let v = null != (n = null != C ? C : null == h ? void 0 : h.skuId) ? n : "",
        { handleCardVisibilityChange: S } = (0, u.E)(v, "home", "marketing featured block"),
        x = (0, d.YG)(h, m),
        O = l.useRef(null),
        T = null == m ? void 0 : m.bodyText,
        y = (0, o.sp)();
    return (0, r.jsx)(i.$, {
        innerRef: O,
        onChange: S,
        threshold: 0,
        children: (0, r.jsxs)(a.P3F, {
            className: f.featuredBlock,
            innerRef: O,
            style: { backgroundImage: "url(".concat(x, ")") },
            onClick: () => {
                E("shop marketing tile", v),
                    s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                        sku_id: v,
                        page_type: "home",
                        page_section: null == y ? void 0 : y.pageSection,
                        page_category: null == y ? void 0 : y.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == y ? void 0 : y.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != b &&
                    (0, r.jsx)(a.IGR, {
                        disableColor: !0,
                        text: b,
                        className: f.featuredBlockBadge,
                    }),
                (0, r.jsx)("div", {
                    className: f.featuredBlockTextContainer,
                    children:
                        null != T &&
                        (0, r.jsx)(a.X6q, {
                            lineClamp: 4,
                            className: f.featuredBlockBodyText,
                            style: { color: null != (_ = null == m ? void 0 : m.bannerTextColor) ? _ : "white" },
                            variant: "heading-md/medium",
                            children: T,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: f.featuredBlockButtonContainer,
                    children: (0, r.jsx)(a.zxk, {
                        variant: "overlay-primary",
                        text: p.intl.string(p.t.jVcuVV),
                        onClick: (e) => {
                            E("shop marketing take me there button", v),
                                e.stopPropagation(),
                                s.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == y ? void 0 : y.sessionId,
                                    sku_id: v,
                                    page_type: "home",
                                    page_section: null == y ? void 0 : y.pageSection,
                                    page_category: null == y ? void 0 : y.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == y ? void 0 : y.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
