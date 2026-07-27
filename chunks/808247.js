"use strict";
n.d(t, { A: () => N });
var i = n(574381),
    r = n(562465),
    a = n(228366),
    s = n(803306),
    l = n(913122),
    o = n(993046),
    d = n(82191),
    c = n(287809),
    u = n(615405),
    _ = n(174459),
    E = n(403362),
    A = n(38405),
    h = n(561794),
    I = n(310209),
    f = n(855052),
    p = n(652215);
function T() {
    let e = {};
    return (
        null != u.A.ipCountryCode && (e.country_code = u.A.ipCountryCode),
        (0, i.m0)() ? (e.payment_gateway = p.kM_.GOOGLE) : (0, i.un)() && (e.payment_gateway = p.kM_.APPLE),
        e
    );
}
function m(e) {
    let t = e.wishlist_items.map((e) => e.sku).filter(E.Vq);
    g(t), S(e.storefront_pricing, t);
}
function g(e) {
    a.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: e });
}
function S(e, t) {
    null != e &&
        a.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: t.map((e) => e.id) },
            data: (0, o.Oj)(e),
        });
}
let N = {
    async fetchWishlist(e, t, n) {
        a.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: e });
        try {
            let i = await r.Bo.get({
                url: p.Rsh.USER_WISHLIST(e),
                query: { source: n ?? h.B5.USER_PROFILE, ...T() },
                rejectWithError: !0,
            });
            i.body?.wishlist_items == null && A.A.captureMessage("Wishlist items not found in response");
            let s = i.body;
            m(s);
            let l = f.Ay.fromServer(s);
            a.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: e, wishlistData: l, updatedAt: t });
        } catch (t) {
            a.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: e, error: new l.LG(t) }),
                A.A.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            let i = (n = await r.Bo.post({
                url: p.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: e, ...T() },
                rejectWithError: !0,
            })).body;
            m(i);
            let s = f.Ay.fromServer(i);
            if (
                (a.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: s.id, skuId: e, wishlistData: s }),
                null != t)
            )
                try {
                    let n = (0, f.Lh)(s);
                    _.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: s.id,
                        action_type: "ADD",
                        sku_id: e,
                        sku_ids: n,
                        location_stack: t,
                    });
                } catch (e) {}
        } catch (t) {
            throw (a.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: e, error: new l.LG(t) }), t);
        }
        if (null == n) return;
        let i = c.default.getCurrentUser();
        if (null != i && null == d.A.getFirstWishlistId(i.id))
            try {
                await (0, s.fetchProfile)(i.id);
            } catch {}
    },
    async removeSkuFromWishlist(e, t, n) {
        a.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: e, skuId: t });
        try {
            let i = (await r.Bo.del({ url: p.Rsh.USER_WISHLIST_ITEM(e, t), query: { ...T() }, rejectWithError: !0 }))
                .body;
            m(i);
            let s = f.Ay.fromServer(i);
            if (
                (a.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: e, skuId: t, wishlistData: s }),
                null != n)
            )
                try {
                    let e = (0, f.Lh)(s);
                    _.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: s.id,
                        action_type: "REMOVE",
                        sku_id: t,
                        sku_ids: e,
                        location_stack: n,
                    });
                } catch (e) {}
        } catch (n) {
            throw (
                (a.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: e, skuId: t, error: new l.LG(n) }), n)
            );
        }
    },
    async updateWishlistVisibility(e, t) {
        let n = c.default.getCurrentUser();
        if (null != n)
            try {
                let i = (
                    await r.Bo.patch({
                        url: p.Rsh.USER_WISHLIST_PATCH(e),
                        body: { visibility: t, ...T() },
                        rejectWithError: !0,
                    })
                ).body;
                m(i), a.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: e, visibility: t });
                try {
                    await (0, s.fetchProfile)(n.id);
                } catch {}
            } catch (t) {
                throw (
                    (a.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: e, error: new l.LG(t) }), t)
                );
            }
    },
    async reorderWishlistItem(e, t, n) {
        let { previousSkuId: i, nextSkuId: s, newWishlistData: o, analyticsLocations: d } = n;
        a.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: e,
            skuId: t,
            previousSkuId: i,
            nextSkuId: s,
            newWishlistData: o,
        });
        try {
            let n = (
                await r.Bo.patch({
                    url: p.Rsh.USER_WISHLIST_ITEM(e, t),
                    body: { previous_sku_id: i, next_sku_id: s, ...T() },
                    rejectWithError: !0,
                })
            ).body;
            m(n);
            let l = f.Ay.fromServer(n);
            if ((a.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: e, wishlistData: l }), null != d))
                try {
                    let n = (0, f.Lh)(l);
                    _.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: e,
                        action_type: "REORDER",
                        sku_id: t,
                        sku_ids: n,
                        location_stack: d,
                    });
                } catch (e) {}
        } catch (n) {
            a.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: e, skuId: t, error: new l.LG(n) }),
                A.A.captureException(n);
        }
    },
    async fetchWishlistRecommendations(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        a.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: t, applicationIds: e });
        try {
            let s = (
                await r.Bo.get({
                    url: p.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: e, user_ids: t, max_recommendations: n, localize: i, ...T() },
                    rejectWithError: !0,
                })
            ).body;
            g(s.skus), S(s.storefront_pricing, s.skus);
            let l = I.A.fromServer(s);
            a.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: t, applicationIds: e, data: l });
        } catch (n) {
            A.A.captureException(n),
                a.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: t, applicationIds: e });
        }
    },
};
