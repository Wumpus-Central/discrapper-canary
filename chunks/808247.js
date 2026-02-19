"use strict";
n.d(t, { A: () => h });
var r = n(562465),
    i = n(73153),
    s = n(803306),
    a = n(198982),
    o = n(622543),
    l = n(287809),
    u = n(954571),
    c = n(728458),
    d = n(594832),
    _ = n(310209),
    f = n(855052),
    p = n(652215);
let h = {
    async fetchWishlist(e, t, n) {
        i.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: e });
        try {
            let s = await r.Bo.get({
                url: p.Rsh.USER_WISHLIST(e),
                query: { source: n ?? d.B5.USER_PROFILE },
                rejectWithError: !0,
            });
            s.body?.wishlist_items == null && c.A.captureMessage("Wishlist items not found in response");
            let a = f.A.fromServer(s.body);
            i.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: e, wishlistData: a, updatedAt: t });
        } catch (t) {
            i.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: e, error: new a.LG(t) }),
                c.A.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            n = await r.Bo.post({ url: p.Rsh.USER_WISHLIST_ITEMS, body: { sku_id: e }, rejectWithError: !0 });
            let s = f.A.fromServer(n.body);
            if (
                (i.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: s.id, skuId: e, wishlistData: s }),
                null != t)
            )
                try {
                    let n = s.getSkuIds();
                    u.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: s.id,
                        action_type: "ADD",
                        sku_id: e,
                        sku_ids: n,
                        location_stack: t,
                    });
                } catch (e) {}
        } catch (t) {
            throw (i.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: e, error: new a.LG(t) }), t);
        }
        if (null == n) return;
        let c = l.default.getCurrentUser();
        if (null != c && null == o.A.getFirstWishlistId(c.id))
            try {
                await (0, s.eO)(c.id);
            } catch {}
    },
    async removeSkuFromWishlist(e, t, n) {
        i.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: e, skuId: t });
        try {
            let s = await r.Bo.del({ url: p.Rsh.USER_WISHLIST_ITEM(e, t), rejectWithError: !0 }),
                a = f.A.fromServer(s.body);
            if (
                (i.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: e, skuId: t, wishlistData: a }),
                null != n)
            )
                try {
                    let e = a.getSkuIds();
                    u.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: a.id,
                        action_type: "REMOVE",
                        sku_id: t,
                        sku_ids: e,
                        location_stack: n,
                    });
                } catch (e) {}
        } catch (n) {
            throw (
                (i.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: e, skuId: t, error: new a.LG(n) }), n)
            );
        }
    },
    async updateWishlistVisibility(e, t) {
        let n = l.default.getCurrentUser();
        if (null != n)
            try {
                await r.Bo.patch({ url: p.Rsh.USER_WISHLIST_PATCH(e), body: { visibility: t }, rejectWithError: !0 }),
                    i.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: e, visibility: t });
                try {
                    await (0, s.eO)(n.id);
                } catch {}
            } catch (t) {
                throw (
                    (i.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: e, error: new a.LG(t) }), t)
                );
            }
    },
    async reorderWishlistItem(e, t, n) {
        let { previousSkuId: s, nextSkuId: o, newWishlistData: l, analyticsLocations: d } = n;
        i.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: e,
            skuId: t,
            previousSkuId: s,
            nextSkuId: o,
            newWishlistData: l,
        });
        try {
            let n = await r.Bo.patch({
                    url: p.Rsh.USER_WISHLIST_ITEM(e, t),
                    body: { previous_sku_id: s, next_sku_id: o },
                    rejectWithError: !0,
                }),
                a = f.A.fromServer(n.body);
            if ((i.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: e, wishlistData: a }), null != d))
                try {
                    let n = a.getSkuIds();
                    u.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: e,
                        action_type: "REORDER",
                        sku_id: t,
                        sku_ids: n,
                        location_stack: d,
                    });
                } catch (e) {}
        } catch (n) {
            i.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: e, skuId: t, error: new a.LG(n) }),
                c.A.captureException(n);
        }
    },
    async fetchWishlistRecommendations(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        i.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: t, applicationIds: e });
        try {
            let a = await r.Bo.get({
                    url: p.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: e, user_ids: t, max_recommendations: n, localize: s },
                    rejectWithError: !0,
                }),
                o = _.A.fromServer(a.body);
            i.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: t, applicationIds: e, data: o });
        } catch (n) {
            c.A.captureException(n),
                i.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: t, applicationIds: e });
        }
    },
};
