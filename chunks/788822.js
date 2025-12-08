n.d(t, { q: () => m });
var r = n(54381),
    l = n(473749),
    i = n(622535),
    s = n(481060),
    o = n(626135),
    a = n(381585),
    c = n(597688),
    u = n(297651),
    d = n(794324),
    g = n(981631),
    f = n(388032),
    p = n(310582);
let m = (e) => {
    var t, n, m;
    let C,
        { category: h, subblock: _, badgeText: b, handleTransition: E } = e;
    null != _ &&
        (C =
            null == (t = c.Z.getCategoryByStoreListingId(null == _ ? void 0 : _.categoryStoreListingId))
                ? void 0
                : t.skuId);
    let v = null != (n = null != C ? C : null == h ? void 0 : h.skuId) ? n : "",
        { handleCardVisibilityChange: S } = (0, u.E)(v, "home", "marketing featured block"),
        O = (0, d.YG)(h, _),
        x = l.useRef(null),
        y = null == _ ? void 0 : _.bodyText,
        k = (0, a.sp)();
    return (0, r.jsx)(i.$, {
        innerRef: x,
        onChange: S,
        threshold: 0,
        children: (0, r.jsxs)(s.P3F, {
            className: p.featuredBlock,
            innerRef: x,
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
                E({
                    sourceButton: "shop marketing tile",
                    categorySkuId: v,
                    isInternalShopDeeplink: !0,
                    isOrbsExclusive: null == h ? void 0 : h.isOrbsExclusive,
                }),
                    o.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                        collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                        sku_id: v,
                        page_type: "home",
                        page_section: null == k ? void 0 : k.pageSection,
                        page_category: null == k ? void 0 : k.pageCategory,
                        tile_type: "FEATURED_BLOCK",
                        tile_position: String(null == k ? void 0 : k.tilePosition),
                        cta_name: null,
                    });
            },
            children: [
                null != b &&
                    (0, r.jsx)(s.IGR, {
                        disableColor: !0,
                        text: b,
                        className: p.featuredBlockBadge,
                    }),
                (0, r.jsx)("div", {
                    className: p.featuredBlockTextContainer,
                    children:
                        null != y &&
                        (0, r.jsx)(s.Heading, {
                            lineClamp: 4,
                            className: p.featuredBlockBodyText,
                            style: { color: null != (m = null == _ ? void 0 : _.bannerTextColor) ? m : "white" },
                            variant: "heading-md/medium",
                            children: y,
                        }),
                }),
                (0, r.jsx)("div", {
                    className: p.featuredBlockButtonContainer,
                    children: (0, r.jsx)(s.Button, {
                        variant: "overlay-primary",
                        text: f.intl.string(f.t.jVcuVY),
                        onClick: (e) => {
                            E({
                                sourceButton: "shop marketing take me there button",
                                categorySkuId: v,
                                isInternalShopDeeplink: !0,
                                isOrbsExclusive: null == h ? void 0 : h.isOrbsExclusive,
                            }),
                                e.stopPropagation(),
                                o.default.track(g.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: null == k ? void 0 : k.sessionId,
                                    sku_id: v,
                                    page_type: "home",
                                    page_section: null == k ? void 0 : k.pageSection,
                                    page_category: null == k ? void 0 : k.pageCategory,
                                    tile_type: "FEATURED_BLOCK",
                                    tile_position: String(null == k ? void 0 : k.tilePosition),
                                    cta_name: "Take me there button",
                                });
                        },
                    }),
                }),
            ],
        }),
    });
};
