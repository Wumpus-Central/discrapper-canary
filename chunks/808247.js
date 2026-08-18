"use strict";
n.d(t, { A: () => S });
var l = n(574381),
    i = n(636537),
    s = n(228366),
    r = n(803306),
    a = n(913122),
    o = n(993046),
    u = n(321191),
    c = n(287809),
    d = n(615405),
    h = n(174459),
    m = n(403362),
    f = n(38405),
    p = n(561794),
    g = n(310209),
    x = n(855052),
    A = n(652215);
function E() {
    let e = {};
    return (
        null != d.A.ipCountryCode && (e.country_code = d.A.ipCountryCode),
        (0, l.m0)() ? (e.payment_gateway = A.kM_.GOOGLE) : (0, l.un)() && (e.payment_gateway = A.kM_.APPLE),
        e
    );
}
function C(e) {
    let t = e.wishlist_items.map((e) => e.sku).filter(m.Vq);
    I(t), y(e.storefront_pricing, t);
}
function I(e) {
    s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: e });
}
function y(e, t) {
    null != e &&
        s.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: t.map((e) => e.id) },
            data: (0, o.Oj)(e),
        });
}
let S = {
    async fetchWishlist(e, t, n) {
        s.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: e });
        try {
            let l = await i.Bo.get({
                url: A.Rsh.USER_WISHLIST(e),
                query: { source: n ?? p.B5.USER_PROFILE, ...E() },
                rejectWithError: !0,
            });
            l.body?.wishlist_items == null && f.A.captureMessage("Wishlist items not found in response");
            let r = l.body;
            C(r);
            let a = x.Ay.fromServer(r);
            s.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: e, wishlistData: a, updatedAt: t });
        } catch (t) {
            s.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: e, error: new a.LG(t) }),
                f.A.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            let l = (n = await i.Bo.post({
                url: A.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: e, ...E() },
                rejectWithError: !0,
            })).body;
            C(l);
            let r = x.Ay.fromServer(l);
            if (
                (s.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: r.id, skuId: e, wishlistData: r }),
                null != t)
            )
                try {
                    let n = (0, x.Lh)(r);
                    h.default.track(A.HAw.WISHLIST_UPDATED, {
                        wishlist_id: r.id,
                        action_type: "ADD",
                        sku_id: e,
                        sku_ids: n,
                        location_stack: t,
                    });
                } catch (e) {}
        } catch (t) {
            throw (s.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: e, error: new a.LG(t) }), t);
        }
        if (null == n) return;
        let l = c.default.getCurrentUser();
        if (null != l && null == u.A.getFirstWishlistId(l.id))
            try {
                await (0, r.fetchProfile)(l.id);
            } catch {}
    },
    async removeSkuFromWishlist(e, t, n) {
        s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: e, skuId: t });
        try {
            let l = (await i.Bo.del({ url: A.Rsh.USER_WISHLIST_ITEM(e, t), query: { ...E() }, rejectWithError: !0 }))
                .body;
            C(l);
            let r = x.Ay.fromServer(l);
            if (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: e, skuId: t, wishlistData: r }),
                null != n)
            )
                try {
                    let e = (0, x.Lh)(r);
                    h.default.track(A.HAw.WISHLIST_UPDATED, {
                        wishlist_id: r.id,
                        action_type: "REMOVE",
                        sku_id: t,
                        sku_ids: e,
                        location_stack: n,
                    });
                } catch (e) {}
        } catch (n) {
            throw (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: e, skuId: t, error: new a.LG(n) }), n)
            );
        }
    },
    async updateWishlistVisibility(e, t) {
        let n = c.default.getCurrentUser();
        if (null != n)
            try {
                let l = (
                    await i.Bo.patch({
                        url: A.Rsh.USER_WISHLIST_PATCH(e),
                        body: { visibility: t, ...E() },
                        rejectWithError: !0,
                    })
                ).body;
                C(l), s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: e, visibility: t });
                try {
                    await (0, r.fetchProfile)(n.id);
                } catch {}
            } catch (t) {
                throw (
                    (s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: e, error: new a.LG(t) }), t)
                );
            }
    },
    async reorderWishlistItem(e, t, n) {
        let { previousSkuId: l, nextSkuId: r, newWishlistData: o, analyticsLocations: u } = n;
        s.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: e,
            skuId: t,
            previousSkuId: l,
            nextSkuId: r,
            newWishlistData: o,
        });
        try {
            let n = (
                await i.Bo.patch({
                    url: A.Rsh.USER_WISHLIST_ITEM(e, t),
                    body: { previous_sku_id: l, next_sku_id: r, ...E() },
                    rejectWithError: !0,
                })
            ).body;
            C(n);
            let a = x.Ay.fromServer(n);
            if ((s.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: e, wishlistData: a }), null != u))
                try {
                    let n = (0, x.Lh)(a);
                    h.default.track(A.HAw.WISHLIST_UPDATED, {
                        wishlist_id: e,
                        action_type: "REORDER",
                        sku_id: t,
                        sku_ids: n,
                        location_stack: u,
                    });
                } catch (e) {}
        } catch (n) {
            s.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: e, skuId: t, error: new a.LG(n) }),
                f.A.captureException(n);
        }
    },
    async fetchWishlistRecommendations(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: t, applicationIds: e });
        try {
            let r = (
                await i.Bo.get({
                    url: A.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: e, user_ids: t, max_recommendations: n, localize: l, ...E() },
                    rejectWithError: !0,
                })
            ).body;
            I(r.skus), y(r.storefront_pricing, r.skus);
            let a = g.A.fromServer(r);
            s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: t, applicationIds: e, data: a });
        } catch (n) {
            f.A.captureException(n),
                s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: t, applicationIds: e });
        }
    },
};
