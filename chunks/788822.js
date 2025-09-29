n.d(t, { q: () => m });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(622535),
    o = n(481060),
    c = n(626135),
    u = n(381585),
    d = n(597688),
    g = n(297651),
    p = n(794324),
    f = n(215023),
    h = n(981631),
    _ = n(388032),
    C = n(687983);
let m = (e) => {
    var t, n, i, m;
    let b,
        { category: E, subblock: S, badgeText: v, handleTransition: x } = e;
    null != S &&
        (b =
            null == (t = d.Z.getCategoryByStoreListingId(null == S ? void 0 : S.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let O = null != (n = null != b ? b : null == E ? void 0 : E.skuId) ? n : "",
        { handleCardVisibilityChange: T } = (0, g.E)(O, "home", "marketing featured block"),
        y = (0, p.YG)(E, S),
        L = l.useRef(null),
        j = O === f.tb,
        k = j ? "NAMEPLATES VOL.3" : null,
        I = null == S ? void 0 : S.bodyText,
        P = (0, u.sp)();
    return (0, r.jsx)(s.$, {
        innerRef: L,
        onChange: T,
        threshold: 0,
        children: (0, r.jsxs)(o.P3F, {
            className: C.featuredBlock,
            innerRef: L,
            style: { backgroundImage: "url(".concat(y, ")") },
            onClick: () => {
                x("shop marketing tile", O),
                    c.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                        sku_id: O,
                        page_type: "home",
                        page_section: null == P ? void 0 : P.pageSection,
                        page_category: null == P ? void 0 : P.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == P ? void 0 : P.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != v &&
                    (0, r.jsx)(o.IGR, {
                        disableColor: !0,
                        text: v,
                        className: C.featuredBlockBadge,
                    }),
                (0, r.jsxs)("div", {
                    className: C.featuredBlockTextContainer,
                    children: [
                        null != k &&
                            (0, r.jsx)(o.X6q, {
                                lineClamp: 2,
                                className: a()(C.featuredBlockTitleText, { [C.featuredBlockTitleTextNameplate]: j }),
                                style: { color: null != (i = null == S ? void 0 : S.bannerTextColor) ? i : "white" },
                                variant: "heading-xl/semibold",
                                children: k,
                            }),
                        null != I &&
                            (0, r.jsx)(o.X6q, {
                                lineClamp: null != k ? 2 : 4,
                                className: C.featuredBlockBodyText,
                                style: { color: null != (m = null == S ? void 0 : S.bannerTextColor) ? m : "white" },
                                variant: "heading-md/medium",
                                children: I,
                            }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: C.featuredBlockButtonContainer,
                    children: (0, r.jsx)(o.zxk, {
                        variant: "overlay-primary",
                        text: _.intl.string(_.t.jVcuVV),
                        onClick: (e) => {
                            x("shop marketing take me there button", O),
                                e.stopPropagation(),
                                c.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == P ? void 0 : P.sessionId,
                                    sku_id: O,
                                    page_type: "home",
                                    page_section: null == P ? void 0 : P.pageSection,
                                    page_category: null == P ? void 0 : P.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == P ? void 0 : P.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
