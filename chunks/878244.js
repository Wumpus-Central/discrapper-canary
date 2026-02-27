"use strict";
i.d(e, { A: () => N, O: () => f });
var n = i(627968),
    s = i(64700),
    a = i(575593),
    r = i(311907),
    l = i(587895),
    o = i(954571),
    c = i(594832),
    d = i(146423),
    _ = i(460442),
    u = i(754804),
    I = i(479026),
    g = i(699976),
    A = i(652215),
    p = i(788868),
    S = i(804810);
let E = p.vQ.DM_CHANNEL_WISHLIST,
    T = g.Z.SIZE_133;
function f(t) {
    let { spec: e = T } = t;
    return (0, n.jsx)(d.$, { spec: e });
}
function L(t) {
    let {
            sku: e,
            onClick: i,
            onOpenWishlist: a,
            wishlistOwner: r,
            wishlistId: l,
            source: I,
            hasMultipleSources: g,
            totalUnownedWishlistItems: p,
            index: S,
            skuPreviewStyle: E,
            maxWishlistLength: f,
            spec: L = T,
            guildId: m,
            channelId: G,
        } = t,
        N = s.useMemo(() => ({ collectibles: { nameplate: { width: 136 } } }), []),
        O = S === f - 1 && p > f,
        b = p - f + 1,
        C = s.useCallback(() => {
            if (O) return void a();
            let t = I === c.uS.WISHLIST ? "wishlist" : "shop";
            o.default.track(A.HAw.GIFTING_ITEM_CLICKED, {
                sku_id: e.id,
                item_source: t,
                wishlist_id: I === c.uS.WISHLIST ? l : null,
                product_line: e.productLine,
            }),
                i?.();
        }, [i, l, I, e.id, e.productLine, a, O]),
        R = s.useMemo(
            () =>
                (0, n.jsxs)(d.A, {
                    sku: e,
                    user: r,
                    spec: L,
                    skuPreviewStyle: E,
                    options: N,
                    onClick: C,
                    children: [
                        g &&
                            I === c.uS.WISHLIST &&
                            (0, n.jsx)(u.X, { spec: L, users: [r], guildId: m ?? void 0, channelId: G ?? void 0 }),
                        O && (0, n.jsx)(_.Yb, { count: b }),
                    ],
                }),
            [e, r, C, I, g, N, b, E, O, L, m, G],
        );
    return (0, n.jsx)("div", { children: R });
}
function m(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: a, onClick: o, hasMultipleSources: c, source: d, ..._ } = t,
        u = (0, r.bG)([l.A], () => l.A.getApplication(e.applicationId)),
        g = s.useCallback(() => {
            o?.(),
                (0, I.T)({
                    isOwner: !1,
                    giftingOrigin: E,
                    profileOwner: i,
                    isItemOwned: !1,
                    application: u ?? void 0,
                    sku: e,
                    analyticsLocations: a ?? [],
                });
        }, [e, i, u, a, o]);
    return (0, n.jsx)(L, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: a,
        onClick: g,
        hasMultipleSources: c,
        source: d,
        ..._,
    });
}
function G(t) {
    let { sku: e, wishlistOwner: i, analyticsLocations: r, onClick: l, hasMultipleSources: o, source: c, ...d } = t,
        _ = s.useMemo(
            () =>
                null != e.bundledSkus && e.bundledSkus.length > 0
                    ? S.E
                    : e.tenantMetadata?.collectibles?.type === a.R.NAMEPLATE
                      ? S.q
                      : void 0,
            [e.bundledSkus, e.tenantMetadata?.collectibles?.type],
        ),
        u = s.useMemo(
            () => () => {
                (0, I._)({
                    isOwner: !1,
                    isItemOwned: !1,
                    onWishlistItemClick: l,
                    profileOwner: i,
                    sku: e,
                    analyticsLocations: r ?? [],
                    giftingOrigin: E,
                });
            },
            [e, i, l, r],
        );
    return (0, n.jsx)(L, {
        sku: e,
        wishlistOwner: i,
        analyticsLocations: r,
        onClick: u,
        hasMultipleSources: o,
        source: c,
        skuPreviewStyle: _,
        ...d,
    });
}
function N(t) {
    let { sku: e, ...i } = t;
    switch (e.productLine) {
        case A.EZt.SOCIAL_LAYER_GAME_ITEM:
            return (0, n.jsx)(m, { sku: e, ...i });
        case A.EZt.COLLECTIBLES:
            return (0, n.jsx)(G, { sku: e, ...i });
        default:
            return null;
    }
}
