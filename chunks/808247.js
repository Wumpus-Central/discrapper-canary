"use strict";
n.d(t, { A: () => I });
var r = n(574381),
    i = n(562465),
    s = n(73153),
    a = n(803306),
    o = n(198982),
    l = n(419709),
    u = n(622543),
    c = n(287809),
    d = n(615405),
    _ = n(954571),
    f = n(728458),
    p = n(594832),
    h = n(310209),
    m = n(855052),
    E = n(652215);
function g() {
    let e = {};
    return (
        null != d.A.ipCountryCode && (e.country_code = d.A.ipCountryCode),
        (0, r.m0)() ? (e.payment_gateway = E.kM_.GOOGLE) : (0, r.un)() && (e.payment_gateway = E.kM_.APPLE),
        e
    );
}
function A(e) {
    if (e.body?.user_discounts != null) {
        let t = e.body.user_discounts.map((e) => l.T.fromServer(e));
        s.h.dispatch({ type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: t });
    }
}
let I = {
    async fetchWishlist(e, t, n) {
        s.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: e });
        try {
            let r = await i.Bo.get({
                url: E.Rsh.USER_WISHLIST(e),
                query: { source: n ?? p.B5.USER_PROFILE, ...g() },
                rejectWithError: !0,
            });
            r.body?.wishlist_items == null && f.A.captureMessage("Wishlist items not found in response"), A(r);
            let a = m.A.fromServer(r.body);
            s.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: e, wishlistData: a, updatedAt: t });
        } catch (t) {
            s.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: e, error: new o.LG(t) }),
                f.A.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            (n = await i.Bo.post({ url: E.Rsh.USER_WISHLIST_ITEMS, body: { sku_id: e, ...g() }, rejectWithError: !0 })),
                A(n);
            let r = m.A.fromServer(n.body);
            if (
                (s.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: r.id, skuId: e, wishlistData: r }),
                null != t)
            )
                try {
                    let n = r.getSkuIds();
                    _.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: r.id,
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
        let r = c.default.getCurrentUser();
        if (null != r && null == u.A.getFirstWishlistId(r.id))
            try {
                await (0, a.eO)(r.id);
            } catch {}
    },
    async removeSkuFromWishlist(e, t, n) {
        s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: e, skuId: t });
        try {
            let r = await i.Bo.del({ url: E.Rsh.USER_WISHLIST_ITEM(e, t), query: { ...g() }, rejectWithError: !0 });
            A(r);
            let a = m.A.fromServer(r.body);
            if (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: e, skuId: t, wishlistData: a }),
                null != n)
            )
                try {
                    let e = a.getSkuIds();
                    _.default.track(E.HAw.WISHLIST_UPDATED, {
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
        let n = c.default.getCurrentUser();
        if (null != n)
            try {
                let r = await i.Bo.patch({
                    url: E.Rsh.USER_WISHLIST_PATCH(e),
                    body: { visibility: t, ...g() },
                    rejectWithError: !0,
                });
                A(r), s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: e, visibility: t });
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
        let { previousSkuId: r, nextSkuId: a, newWishlistData: l, analyticsLocations: u } = n;
        s.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: e,
            skuId: t,
            previousSkuId: r,
            nextSkuId: a,
            newWishlistData: l,
        });
        try {
            let n = await i.Bo.patch({
                url: E.Rsh.USER_WISHLIST_ITEM(e, t),
                body: { previous_sku_id: r, next_sku_id: a, ...g() },
                rejectWithError: !0,
            });
            A(n);
            let o = m.A.fromServer(n.body);
            if ((s.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: e, wishlistData: o }), null != u))
                try {
                    let n = o.getSkuIds();
                    _.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: e,
                        action_type: "REORDER",
                        sku_id: t,
                        sku_ids: n,
                        location_stack: u,
                    });
                } catch (e) {}
        } catch (n) {
            s.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: e, skuId: t, error: new o.LG(n) }),
                f.A.captureException(n);
        }
    },
    async fetchWishlistRecommendations(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: t, applicationIds: e });
        try {
            let a = await i.Bo.get({
                url: E.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                query: { application_ids: e, user_ids: t, max_recommendations: n, localize: r, ...g() },
                rejectWithError: !0,
            });
            A(a);
            let o = h.A.fromServer(a.body);
            s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: t, applicationIds: e, data: o });
        } catch (n) {
            f.A.captureException(n),
                s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: t, applicationIds: e });
        }
    },
};
