n.d(t, { A: () => _ });
var r = n(562465),
    i = n(73153),
    a = n(803306),
    s = n(198982),
    o = n(622543),
    l = n(287809),
    c = n(954571),
    u = n(728458),
    d = n(594832),
    f = n(855052),
    p = n(652215);
let _ = {
    async fetchWishlist(e, t, n) {
        i.h.dispatch({
            type: "WISHLIST_FETCH_START",
            wishlistId: e,
        });
        try {
            var a;
            let s = await r.Bo.get({
                url: p.Rsh.USER_WISHLIST(e),
                query: { source: null != n ? n : d.B5.USER_PROFILE },
                rejectWithError: !0,
            });
            (null == (a = s.body) ? void 0 : a.wishlist_items) == null &&
                u.A.captureMessage("Wishlist items not found in response");
            let o = f.A.fromServer(s.body);
            i.h.dispatch({
                type: "WISHLIST_FETCH_SUCCESS",
                wishlistId: e,
                wishlistData: o,
                updatedAt: t,
            });
        } catch (t) {
            i.h.dispatch({
                type: "WISHLIST_FETCH_FAILURE",
                wishlistId: e,
                error: new s.LG(t),
            }),
                u.A.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            n = await r.Bo.post({
                url: p.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: e },
                rejectWithError: !0,
            });
            let a = f.A.fromServer(n.body);
            if (
                (i.h.dispatch({
                    type: "WISHLIST_ADD_SKU_SUCCESS",
                    wishlistId: a.id,
                    skuId: e,
                    wishlistData: a,
                }),
                null != t)
            )
                try {
                    let n = a.getSkuIds();
                    c.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: a.id,
                        action_type: "ADD",
                        sku_id: e,
                        sku_ids: n,
                        location_stack: t,
                    });
                } catch (e) {}
        } catch (t) {
            throw (
                (i.h.dispatch({
                    type: "WISHLIST_ADD_SKU_FAILURE",
                    skuId: e,
                    error: new s.LG(t),
                }),
                t)
            );
        }
        if (null == n) return;
        let u = l.default.getCurrentUser();
        if (null != u && null == o.A.getFirstWishlistId(u.id))
            try {
                await (0, a.eO)(u.id);
            } catch (e) {}
    },
    async removeSkuFromWishlist(e, t, n) {
        try {
            let a = await r.Bo.del({
                    url: p.Rsh.USER_WISHLIST_ITEM(e, t),
                    rejectWithError: !0,
                }),
                s = f.A.fromServer(a.body);
            if (
                (i.h.dispatch({
                    type: "WISHLIST_REMOVE_SKU_SUCCESS",
                    wishlistId: e,
                    skuId: t,
                    wishlistData: s,
                }),
                null != n)
            )
                try {
                    let e = s.getSkuIds();
                    c.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: s.id,
                        action_type: "REMOVE",
                        sku_id: t,
                        sku_ids: e,
                        location_stack: n,
                    });
                } catch (e) {}
        } catch (n) {
            throw (
                (i.h.dispatch({
                    type: "WISHLIST_REMOVE_SKU_FAILURE",
                    wishlistId: e,
                    skuId: t,
                    error: new s.LG(n),
                }),
                n)
            );
        }
    },
    async updateWishlistVisibility(e, t) {
        let n = l.default.getCurrentUser();
        if (null != n)
            try {
                await r.Bo.patch({
                    url: p.Rsh.USER_WISHLIST_PATCH(e),
                    body: { visibility: t },
                    rejectWithError: !0,
                }),
                    i.h.dispatch({
                        type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS",
                        wishlistId: e,
                        visibility: t,
                    });
                try {
                    await (0, a.eO)(n.id);
                } catch (e) {}
            } catch (t) {
                throw (
                    (i.h.dispatch({
                        type: "WISHLIST_UPDATE_VISIBILITY_FAILURE",
                        wishlistId: e,
                        error: new s.LG(t),
                    }),
                    t)
                );
            }
    },
    async reorderWishlistItem(e, t, n) {
        let { previousSkuId: a, nextSkuId: o, newWishlistData: l, analyticsLocations: d } = n;
        i.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: e,
            skuId: t,
            previousSkuId: a,
            nextSkuId: o,
            newWishlistData: l,
        });
        try {
            let n = await r.Bo.patch({
                    url: p.Rsh.USER_WISHLIST_ITEM(e, t),
                    body: {
                        previous_sku_id: a,
                        next_sku_id: o,
                    },
                    rejectWithError: !0,
                }),
                s = f.A.fromServer(n.body);
            if (
                (i.h.dispatch({
                    type: "WISHLIST_REORDER_SUCCESS",
                    wishlistId: e,
                    wishlistData: s,
                }),
                null != d)
            )
                try {
                    let n = s.getSkuIds();
                    c.default.track(p.HAw.WISHLIST_UPDATED, {
                        wishlist_id: e,
                        action_type: "REORDER",
                        sku_id: t,
                        sku_ids: n,
                        location_stack: d,
                    });
                } catch (e) {}
        } catch (n) {
            i.h.dispatch({
                type: "WISHLIST_REORDER_FAILURE",
                wishlistId: e,
                skuId: t,
                error: new s.LG(n),
            }),
                u.A.captureException(n);
        }
    },
};
