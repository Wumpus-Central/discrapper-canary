n.d(t, { q: () => h });
var r = n(951288),
    l = n(647438),
    i = n(622535),
    s = n(481060),
    a = n(626135),
    o = n(381585),
    c = n(597688),
    u = n(297651),
    d = n(794324),
    p = n(981631),
    g = n(388032),
    f = n(310582);
let h = (e) => {
    var t, n, h;
    let C,
        { category: m, subblock: _, badgeText: b, handleTransition: v } = e;
    null != _ &&
        (C =
            null == (t = c.Z.getCategoryByStoreListingId(null == _ ? void 0 : _.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let E = null != (n = null != C ? C : null == m ? void 0 : m.skuId) ? n : "",
        { handleCardVisibilityChange: x } = (0, u.E)(E, "home", "marketing featured block"),
        O = (0, d.YG)(m, _),
        S = l.useRef(null),
        y = null == _ ? void 0 : _.bodyText,
        j = (0, o.sp)();
    return (0, r.jsx)(i.$, {
        innerRef: S,
        onChange: x,
        threshold: 0,
        children: (0, r.jsxs)(s.P3F, {
            className: f.featuredBlock,
            innerRef: S,
            style: (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, null != O && { backgroundImage: "url(".concat(O, ")") }),
            onClick: () => {
                v({
                    sourceButton: "shop marketing tile",
                    categorySkuId: E,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: null == m ? void 0 : m.isOrbsExclusive,
                }),
                    a.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                        sku_id: E,
                        page_type: "home",
                        page_section: null == j ? void 0 : j.pageSection,
                        page_category: null == j ? void 0 : j.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == j ? void 0 : j.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != b &&
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: b,
                        className: f.featuredBlockBadge,
                    }),
                (0, r.jsx)("div", {
                    className: f.featuredBlockTextContainer,
                    children:
                        null != y &&
                        (0, r.jsx)(s.Heading, {
                            lineClamp: 4,
                            className: f.featuredBlockBodyText,
                            style: { color: null != (h = null == _ ? void 0 : _.bannerTextColor) ? h : "white" },
                            variant: "heading-md/medium",
                            children: y,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: f.featuredBlockButtonContainer,
                    children: (0, r.jsx)(s.Button, {
                        variant: "overlay-primary",
                        text: g.intl.string(g.t.jVcuVY),
                        onClick: (e) => {
                            v({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: E,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: null == m ? void 0 : m.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                a.default.track(p.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == j ? void 0 : j.sessionId,
                                    sku_id: E,
                                    page_type: "home",
                                    page_section: null == j ? void 0 : j.pageSection,
                                    page_category: null == j ? void 0 : j.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == j ? void 0 : j.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
