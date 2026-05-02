i.d(e, { A: () => k });
var r = i(574381),
    s = i(636537),
    l = i(228366),
    n = i(803306),
    a = i(845584),
    u = i(419709),
    o = i(723090),
    d = i(841595),
    c = i(287809),
    p = i(615405),
    h = i(174459),
    S = i(403362),
    I = i(38405),
    f = i(561794),
    A = i(310209),
    _ = i(855052),
    E = i(652215);
function m() {
    let t = {};
    return (
        null != p.A.ipCountryCode && (t.country_code = p.A.ipCountryCode),
        (0, r.m0)() ? (t.payment_gateway = E.kM_.GOOGLE) : (0, r.un)() && (t.payment_gateway = E.kM_.APPLE),
        t
    );
}
function T(t) {
    let e = t.wishlist_items.map((t) => t.sku).filter(S.Vq);
    y(t), g(e), R(t.storefront_pricing, e);
}
function y(t) {
    if (null == t.user_discounts) return;
    let e = t.user_discounts.map((t) => u.T.fromServer(t));
    l.h.dispatch({ type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: e });
}
function g(t) {
    l.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
function R(t, e) {
    null != t &&
        l.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: e.map((t) => t.id) },
            data: (0, o.Oj)(t),
        });
}
let k = {
    async fetchWishlist(t, e, i) {
        l.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: t });
        try {
            let r = await s.Bo.get({
                url: E.Rsh.USER_WISHLIST(t),
                query: { source: i ?? f.B5.USER_PROFILE, ...m() },
                rejectWithError: !0,
            });
            r.body?.wishlist_items == null && I.A.captureMessage("Wishlist items not found in response");
            let n = r.body;
            T(n);
            let a = _.Ay.fromServer(n);
            l.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: t, wishlistData: a, updatedAt: e });
        } catch (e) {
            l.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: t, error: new a.LG(e) }),
                I.A.captureException(e);
        }
    },
    async addSkuToWishlist(t, e) {
        let i = null;
        try {
            let r = (i = await s.Bo.post({
                url: E.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: t, ...m() },
                rejectWithError: !0,
            })).body;
            T(r);
            let n = _.Ay.fromServer(r);
            if (
                (l.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: n.id, skuId: t, wishlistData: n }),
                null != e)
            )
                try {
                    let i = (0, _.Lh)(n);
                    h.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: n.id,
                        action_type: "ADD",
                        sku_id: t,
                        sku_ids: i,
                        location_stack: e,
                    });
                } catch (t) {}
        } catch (e) {
            throw (l.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: t, error: new a.LG(e) }), e);
        }
        if (null == i) return;
        let r = c.default.getCurrentUser();
        if (null != r && null == d.A.getFirstWishlistId(r.id))
            try {
                await (0, n.eO)(r.id);
            } catch {}
    },
    async removeSkuFromWishlist(t, e, i) {
        l.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: t, skuId: e });
        try {
            let r = (await s.Bo.del({ url: E.Rsh.USER_WISHLIST_ITEM(t, e), query: { ...m() }, rejectWithError: !0 }))
                .body;
            T(r);
            let n = _.Ay.fromServer(r);
            if (
                (l.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: t, skuId: e, wishlistData: n }),
                null != i)
            )
                try {
                    let t = (0, _.Lh)(n);
                    h.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: n.id,
                        action_type: "REMOVE",
                        sku_id: e,
                        sku_ids: t,
                        location_stack: i,
                    });
                } catch (t) {}
        } catch (i) {
            throw (
                (l.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: t, skuId: e, error: new a.LG(i) }), i)
            );
        }
    },
    async updateWishlistVisibility(t, e) {
        let i = c.default.getCurrentUser();
        if (null != i)
            try {
                let r = (
                    await s.Bo.patch({
                        url: E.Rsh.USER_WISHLIST_PATCH(t),
                        body: { visibility: e, ...m() },
                        rejectWithError: !0,
                    })
                ).body;
                T(r), l.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: t, visibility: e });
                try {
                    await (0, n.eO)(i.id);
                } catch {}
            } catch (e) {
                throw (
                    (l.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: t, error: new a.LG(e) }), e)
                );
            }
    },
    async reorderWishlistItem(t, e, i) {
        let { previousSkuId: r, nextSkuId: n, newWishlistData: u, analyticsLocations: o } = i;
        l.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: t,
            skuId: e,
            previousSkuId: r,
            nextSkuId: n,
            newWishlistData: u,
        });
        try {
            let i = (
                await s.Bo.patch({
                    url: E.Rsh.USER_WISHLIST_ITEM(t, e),
                    body: { previous_sku_id: r, next_sku_id: n, ...m() },
                    rejectWithError: !0,
                })
            ).body;
            T(i);
            let a = _.Ay.fromServer(i);
            if ((l.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: t, wishlistData: a }), null != o))
                try {
                    let i = (0, _.Lh)(a);
                    h.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: t,
                        action_type: "REORDER",
                        sku_id: e,
                        sku_ids: i,
                        location_stack: o,
                    });
                } catch (t) {}
        } catch (i) {
            l.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: t, skuId: e, error: new a.LG(i) }),
                I.A.captureException(i);
        }
    },
    async fetchWishlistRecommendations(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        l.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: e, applicationIds: t });
        try {
            let n = (
                await s.Bo.get({
                    url: E.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: t, user_ids: e, max_recommendations: i, localize: r, ...m() },
                    rejectWithError: !0,
                })
            ).body;
            y(n), g(n.skus), R(n.storefront_pricing, n.skus);
            let a = A.A.fromServer(n);
            l.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: e, applicationIds: t, data: a });
        } catch (i) {
            I.A.captureException(i),
                l.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: e, applicationIds: t });
        }
    },
};
