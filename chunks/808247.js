i.d(e, { A: () => k });
var r = i(574381),
    s = i(562465),
    n = i(73153),
    l = i(803306),
    a = i(198982),
    o = i(419709),
    u = i(993046),
    d = i(622543),
    c = i(287809),
    p = i(615405),
    S = i(954571),
    h = i(403362),
    I = i(728458),
    _ = i(594832),
    f = i(310209),
    A = i(855052),
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
    let e = t.wishlist_items.map((t) => t.sku).filter(h.Vq);
    y(t), R(e), g(t.storefront_pricing, e);
}
function y(t) {
    if (null == t.user_discounts) return;
    let e = t.user_discounts.map((t) => o.T.fromServer(t));
    n.h.dispatch({ type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: e });
}
function R(t) {
    n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
function g(t, e) {
    null != t &&
        n.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: e.map((t) => t.id) },
            data: (0, u.Oj)(t),
        });
}
let k = {
    async fetchWishlist(t, e, i) {
        n.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: t });
        try {
            let r = await s.Bo.get({
                url: E.Rsh.USER_WISHLIST(t),
                query: { source: i ?? _.B5.USER_PROFILE, ...m() },
                rejectWithError: !0,
            });
            r.body?.wishlist_items == null && I.A.captureMessage("Wishlist items not found in response");
            let l = r.body;
            T(l);
            let a = A.Ay.fromServer(l);
            n.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: t, wishlistData: a, updatedAt: e });
        } catch (e) {
            n.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: t, error: new a.LG(e) }),
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
            let l = A.Ay.fromServer(r);
            if (
                (n.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: l.id, skuId: t, wishlistData: l }),
                null != e)
            )
                try {
                    let i = (0, A.Lh)(l);
                    S.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
                        action_type: "ADD",
                        sku_id: t,
                        sku_ids: i,
                        location_stack: e,
                    });
                } catch (t) {}
        } catch (e) {
            throw (n.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: t, error: new a.LG(e) }), e);
        }
        if (null == i) return;
        let r = c.default.getCurrentUser();
        if (null != r && null == d.A.getFirstWishlistId(r.id))
            try {
                await (0, l.eO)(r.id);
            } catch {}
    },
    async removeSkuFromWishlist(t, e, i) {
        n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: t, skuId: e });
        try {
            let r = (await s.Bo.del({ url: E.Rsh.USER_WISHLIST_ITEM(t, e), query: { ...m() }, rejectWithError: !0 }))
                .body;
            T(r);
            let l = A.Ay.fromServer(r);
            if (
                (n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: t, skuId: e, wishlistData: l }),
                null != i)
            )
                try {
                    let t = (0, A.Lh)(l);
                    S.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
                        action_type: "REMOVE",
                        sku_id: e,
                        sku_ids: t,
                        location_stack: i,
                    });
                } catch (t) {}
        } catch (i) {
            throw (
                (n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: t, skuId: e, error: new a.LG(i) }), i)
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
                T(r), n.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: t, visibility: e });
                try {
                    await (0, l.eO)(i.id);
                } catch {}
            } catch (e) {
                throw (
                    (n.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: t, error: new a.LG(e) }), e)
                );
            }
    },
    async reorderWishlistItem(t, e, i) {
        let { previousSkuId: r, nextSkuId: l, newWishlistData: o, analyticsLocations: u } = i;
        n.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: t,
            skuId: e,
            previousSkuId: r,
            nextSkuId: l,
            newWishlistData: o,
        });
        try {
            let i = (
                await s.Bo.patch({
                    url: E.Rsh.USER_WISHLIST_ITEM(t, e),
                    body: { previous_sku_id: r, next_sku_id: l, ...m() },
                    rejectWithError: !0,
                })
            ).body;
            T(i);
            let a = A.Ay.fromServer(i);
            if ((n.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: t, wishlistData: a }), null != u))
                try {
                    let i = (0, A.Lh)(a);
                    S.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: t,
                        action_type: "REORDER",
                        sku_id: e,
                        sku_ids: i,
                        location_stack: u,
                    });
                } catch (t) {}
        } catch (i) {
            n.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: t, skuId: e, error: new a.LG(i) }),
                I.A.captureException(i);
        }
    },
    async fetchWishlistRecommendations(t, e) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: e, applicationIds: t });
        try {
            let l = (
                await s.Bo.get({
                    url: E.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: t, user_ids: e, max_recommendations: i, localize: r, ...m() },
                    rejectWithError: !0,
                })
            ).body;
            y(l), R(l.skus), g(l.storefront_pricing, l.skus);
            let a = f.A.fromServer(l);
            n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: e, applicationIds: t, data: a });
        } catch (i) {
            I.A.captureException(i),
                n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: e, applicationIds: t });
        }
    },
};
