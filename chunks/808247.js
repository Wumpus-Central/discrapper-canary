"use strict";
n.d(t, { A: () => C });
var i = n(574381),
    r = n(636537),
    s = n(228366),
    a = n(803306),
    o = n(845584),
    l = n(419709),
    u = n(723090),
    c = n(841595),
    d = n(287809),
    _ = n(615405),
    f = n(174459),
    h = n(403362),
    p = n(38405),
    E = n(561794),
    m = n(310209),
    g = n(855052),
    A = n(652215);
function I() {
    let e = {};
    return (
        null != _.A.ipCountryCode && (e.country_code = _.A.ipCountryCode),
        (0, i.m0)() ? (e.payment_gateway = A.kM_.GOOGLE) : (0, i.un)() && (e.payment_gateway = A.kM_.APPLE),
        e
    );
}
function T(e) {
    let t = e.wishlist_items.map((e) => e.sku).filter(h.Vq);
    S(e), N(t), y(e.storefront_pricing, t);
}
function S(e) {
    if (null == e.user_discounts) return;
    let t = e.user_discounts.map((e) => l.T.fromServer(e));
    s.h.dispatch({ type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: t });
}
function N(e) {
    s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: e });
}
function y(e, t) {
    null != e &&
        s.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: t.map((e) => e.id) },
            data: (0, u.Oj)(e),
        });
}
let C = {
    async fetchWishlist(e, t, n) {
        s.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: e });
        try {
            let i = await r.Bo.get({
                url: A.Rsh.USER_WISHLIST(e),
                query: { source: n ?? E.B5.USER_PROFILE, ...I() },
                rejectWithError: !0,
            });
            i.body?.wishlist_items == null && p.A.captureMessage("Wishlist items not found in response");
            let a = i.body;
            T(a);
            let o = g.Ay.fromServer(a);
            s.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: e, wishlistData: o, updatedAt: t });
        } catch (t) {
            s.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: e, error: new o.LG(t) }),
                p.A.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            let i = (n = await r.Bo.post({
                url: A.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: e, ...I() },
                rejectWithError: !0,
            })).body;
            T(i);
            let a = g.Ay.fromServer(i);
            if (
                (s.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: a.id, skuId: e, wishlistData: a }),
                null != t)
            )
                try {
                    let n = (0, g.Lh)(a);
                    f.default.track(A.HAw.WISHLIST_UPDATED, {
                        wishlist_id: a.id,
                        action_type: "ADD",
                        sku_id: e,
                        sku_ids: n,
                        location_stack: t,
                    });
                } catch (e) {}
        } catch (t) {
            throw (s.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: e, error: new o.LG(t) }), t);
        }
        if (null == n) return;
        let i = d.default.getCurrentUser();
        if (null != i && null == c.A.getFirstWishlistId(i.id))
            try {
                await (0, a.eO)(i.id);
            } catch {}
    },
    async removeSkuFromWishlist(e, t, n) {
        s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: e, skuId: t });
        try {
            let i = (await r.Bo.del({ url: A.Rsh.USER_WISHLIST_ITEM(e, t), query: { ...I() }, rejectWithError: !0 }))
                .body;
            T(i);
            let a = g.Ay.fromServer(i);
            if (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: e, skuId: t, wishlistData: a }),
                null != n)
            )
                try {
                    let e = (0, g.Lh)(a);
                    f.default.track(A.HAw.WISHLIST_UPDATED, {
                        wishlist_id: a.id,
                        action_type: "REMOVE",
                        sku_id: t,
                        sku_ids: e,
                        location_stack: n,
                    });
                } catch (e) {}
        } catch (n) {
            throw (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: e, skuId: t, error: new o.LG(n) }), n)
            );
        }
    },
    async updateWishlistVisibility(e, t) {
        let n = d.default.getCurrentUser();
        if (null != n)
            try {
                let i = (
                    await r.Bo.patch({
                        url: A.Rsh.USER_WISHLIST_PATCH(e),
                        body: { visibility: t, ...I() },
                        rejectWithError: !0,
                    })
                ).body;
                T(i), s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: e, visibility: t });
                try {
                    await (0, a.eO)(n.id);
                } catch {}
            } catch (t) {
                throw (
                    (s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: e, error: new o.LG(t) }), t)
                );
            }
    },
    async reorderWishlistItem(e, t, n) {
        let { previousSkuId: i, nextSkuId: a, newWishlistData: l, analyticsLocations: u } = n;
        s.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: e,
            skuId: t,
            previousSkuId: i,
            nextSkuId: a,
            newWishlistData: l,
        });
        try {
            let n = (
                await r.Bo.patch({
                    url: A.Rsh.USER_WISHLIST_ITEM(e, t),
                    body: { previous_sku_id: i, next_sku_id: a, ...I() },
                    rejectWithError: !0,
                })
            ).body;
            T(n);
            let o = g.Ay.fromServer(n);
            if ((s.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: e, wishlistData: o }), null != u))
                try {
                    let n = (0, g.Lh)(o);
                    f.default.track(A.HAw.WISHLIST_UPDATED, {
                        wishlist_id: e,
                        action_type: "REORDER",
                        sku_id: t,
                        sku_ids: n,
                        location_stack: u,
                    });
                } catch (e) {}
        } catch (n) {
            s.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: e, skuId: t, error: new o.LG(n) }),
                p.A.captureException(n);
        }
    },
    async fetchWishlistRecommendations(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: t, applicationIds: e });
        try {
            let a = (
                await r.Bo.get({
                    url: A.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: e, user_ids: t, max_recommendations: n, localize: i, ...I() },
                    rejectWithError: !0,
                })
            ).body;
            S(a), N(a.skus), y(a.storefront_pricing, a.skus);
            let o = m.A.fromServer(a);
            s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: t, applicationIds: e, data: o });
        } catch (n) {
            p.A.captureException(n),
                s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: t, applicationIds: e });
        }
    },
};
