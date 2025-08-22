n.d(t, { q: () => b });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    i = n(180650),
    o = n(622535),
    c = n(481060),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    f = n(297651),
    p = n(794324),
    m = n(981631),
    _ = n(388032),
    h = n(310582);
let b = (e) => {
    var t, n, a, b;
    let C,
        { category: E, subblock: S, badgeText: O, handleTransition: v } = e;
    null != S &&
        (C =
            null == (t = g.Z.getCategoryByStoreListingId(null == S ? void 0 : S.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let x = null != (n = null != C ? C : null == E ? void 0 : E.skuId) ? n : "",
        { handleCardVisibilityChange: y } = (0, f.E)(x, "home", "marketing featured block"),
        T = (0, p.YG)(E, S),
        L = l.useRef(null),
        j = x === i.T.NAMEPLATES_V3,
        k = j ? "NAMEPLATES VOL.3" : null,
        I = null == S ? void 0 : S.bodyText,
        B = (0, d.sp)();
    return (0, r.jsx)(o.$, {
        innerRef: L,
        onChange: y,
        threshold: 0,
        children: (0, r.jsxs)(c.P3F, {
            className: h.featuredBlock,
            innerRef: L,
            style: { backgroundImage: "url(".concat(T, ")") },
            onClick: () => {
                v("shop marketing tile", x),
                    u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                        sku_id: x,
                        page_type: "home",
                        page_section: null == B ? void 0 : B.pageSection,
                        page_category: null == B ? void 0 : B.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == B ? void 0 : B.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != O &&
                    (0, r.jsx)(c.IGR, {
                        disableColor: !0,
                        text: O,
                        className: h.featuredBlockBadge,
                    }),
                (0, r.jsxs)("div", {
                    className: h.featuredBlockTextContainer,
                    children: [
                        null != k &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: 2,
                                className: s()(h.featuredBlockTitleText, { [h.featuredBlockTitleTextNameplate]: j }),
                                style: { color: null != (a = null == S ? void 0 : S.bannerTextColor) ? a : "white" },
                                variant: "heading-xl/semibold",
                                children: k,
                            }),
                        null != I &&
                            (0, r.jsx)(c.X6q, {
                                lineClamp: null != k ? 2 : 4,
                                className: h.featuredBlockBodyText,
                                style: { color: null != (b = null == S ? void 0 : S.bannerTextColor) ? b : "white" },
                                variant: "heading-md/medium",
                                children: I,
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: h.featuredBlockButtonContainer,
                    children: (0, r.jsx)(c.zxk, {
                        variant: "overlay-primary",
                        text: _.intl.string(_.t.jVcuVV),
                        onClick: (e) => {
                            v("shop marketing take me there button", x),
                                e.stopPropagation(),
                                u.default.track(m.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == B ? void 0 : B.sessionId,
                                    sku_id: x,
                                    page_type: "home",
                                    page_section: null == B ? void 0 : B.pageSection,
                                    page_category: null == B ? void 0 : B.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == B ? void 0 : B.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
