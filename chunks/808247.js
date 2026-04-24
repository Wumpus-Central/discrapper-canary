s.d(e, { A: () => L });
var r = s(574381),
    i = s(636537),
    n = s(228366),
    l = s(803306),
    a = s(845584),
    o = s(419709),
    u = s(723090),
    d = s(841595),
    c = s(287809),
    S = s(615405),
    h = s(954571),
    p = s(403362),
    _ = s(38405),
    I = s(594832),
    E = s(310209),
    A = s(855052),
    f = s(652215);
function T() {
    let t = {};
    return (
        null != S.A.ipCountryCode && (t.country_code = S.A.ipCountryCode),
        (0, r.m0)() ? (t.payment_gateway = f.kM_.GOOGLE) : (0, r.un)() && (t.payment_gateway = f.kM_.APPLE),
        t
    );
}
function m(t) {
    let e = t.wishlist_items.map((t) => t.sku).filter(p.Vq);
    R(t), y(e), k(t.storefront_pricing, e);
}
function R(t) {
    if (null == t.user_discounts) return;
    let e = t.user_discounts.map((t) => o.T.fromServer(t));
    n.h.dispatch({ type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: e });
}
function y(t) {
    n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
function k(t, e) {
    null != t &&
        n.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: e.map((t) => t.id) },
            data: (0, u.Oj)(t),
        });
}
let L = {
    async fetchWishlist(t, e, s) {
        n.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: t });
        try {
            let r = await i.Bo.get({
                url: f.Rsh.USER_WISHLIST(t),
                query: { source: s ?? I.B5.USER_PROFILE, ...T() },
                rejectWithError: !0,
            });
            r.body?.wishlist_items == null && _.A.captureMessage("Wishlist items not found in response");
            let l = r.body;
            m(l);
            let a = A.Ay.fromServer(l);
            n.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: t, wishlistData: a, updatedAt: e });
        } catch (e) {
            n.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: t, error: new a.LG(e) }),
                _.A.captureException(e);
        }
    },
    async addSkuToWishlist(t, e) {
        let s = null;
        try {
            let r = (s = await i.Bo.post({
                url: f.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: t, ...T() },
                rejectWithError: !0,
            })).body;
            m(r);
            let l = A.Ay.fromServer(r);
            if (
                (n.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: l.id, skuId: t, wishlistData: l }),
                null != e)
            )
                try {
                    let s = (0, A.Lh)(l);
                    h.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
                        action_type: "ADD",
                        sku_id: t,
                        sku_ids: s,
                        location_stack: e,
                    });
                } catch (t) {}
        } catch (e) {
            throw (n.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: t, error: new a.LG(e) }), e);
        }
        if (null == s) return;
        let r = c.default.getCurrentUser();
        if (null != r && null == d.A.getFirstWishlistId(r.id))
            try {
                await (0, l.eO)(r.id);
            } catch {}
    },
    async removeSkuFromWishlist(t, e, s) {
        n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: t, skuId: e });
        try {
            let r = (await i.Bo.del({ url: f.Rsh.USER_WISHLIST_ITEM(t, e), query: { ...T() }, rejectWithError: !0 }))
                .body;
            m(r);
            let l = A.Ay.fromServer(r);
            if (
                (n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: t, skuId: e, wishlistData: l }),
                null != s)
            )
                try {
                    let t = (0, A.Lh)(l);
                    h.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
                        action_type: "REMOVE",
                        sku_id: e,
                        sku_ids: t,
                        location_stack: s,
                    });
                } catch (t) {}
        } catch (s) {
            throw (
                (n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: t, skuId: e, error: new a.LG(s) }), s)
            );
        }
    },
    async updateWishlistVisibility(t, e) {
        let s = c.default.getCurrentUser();
        if (null != s)
            try {
                let r = (
                    await i.Bo.patch({
                        url: f.Rsh.USER_WISHLIST_PATCH(t),
                        body: { visibility: e, ...T() },
                        rejectWithError: !0,
                    })
                ).body;
                m(r), n.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: t, visibility: e });
                try {
                    await (0, l.eO)(s.id);
                } catch {}
            } catch (e) {
                throw (
                    (n.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: t, error: new a.LG(e) }), e)
                );
            }
    },
    async reorderWishlistItem(t, e, s) {
        let { previousSkuId: r, nextSkuId: l, newWishlistData: o, analyticsLocations: u } = s;
        n.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: t,
            skuId: e,
            previousSkuId: r,
            nextSkuId: l,
            newWishlistData: o,
        });
        try {
            let s = (
                await i.Bo.patch({
                    url: f.Rsh.USER_WISHLIST_ITEM(t, e),
                    body: { previous_sku_id: r, next_sku_id: l, ...T() },
                    rejectWithError: !0,
                })
            ).body;
            m(s);
            let a = A.Ay.fromServer(s);
            if ((n.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: t, wishlistData: a }), null != u))
                try {
                    let s = (0, A.Lh)(a);
                    h.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: t,
                        action_type: "REORDER",
                        sku_id: e,
                        sku_ids: s,
                        location_stack: u,
                    });
                } catch (t) {}
        } catch (s) {
            n.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: t, skuId: e, error: new a.LG(s) }),
                _.A.captureException(s);
        }
    },
    async fetchWishlistRecommendations(t, e) {
        let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: e, applicationIds: t });
        try {
            let l = (
                await i.Bo.get({
                    url: f.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: t, user_ids: e, max_recommendations: s, localize: r, ...T() },
                    rejectWithError: !0,
                })
            ).body;
            R(l), y(l.skus), k(l.storefront_pricing, l.skus);
            let a = E.A.fromServer(l);
            n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: e, applicationIds: t, data: a });
        } catch (s) {
            _.A.captureException(s),
                n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: e, applicationIds: t });
        }
    },
};
