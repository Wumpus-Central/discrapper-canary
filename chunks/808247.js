"use strict";
n.d(t, { A: () => S });
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
    f = n(403362),
    p = n(728458),
    h = n(594832),
    m = n(310209),
    E = n(855052),
    g = n(652215);
function A() {
    let e = {};
    return (
        null != d.A.ipCountryCode && (e.country_code = d.A.ipCountryCode),
        (0, r.m0)() ? (e.payment_gateway = g.kM_.GOOGLE) : (0, r.un)() && (e.payment_gateway = g.kM_.APPLE),
        e
    );
}
function I(e) {
    if (e.body?.user_discounts != null) {
        let t = e.body.user_discounts.map((e) => l.T.fromServer(e));
        s.h.dispatch({ type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: t });
    }
}
function T(e) {
    let t = e.wishlist_items.map((e) => e.sku).filter(f.Vq);
    s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
let S = {
    async fetchWishlist(e, t, n) {
        s.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: e });
        try {
            let r = await i.Bo.get({
                url: g.Rsh.USER_WISHLIST(e),
                query: { source: n ?? h.B5.USER_PROFILE, ...A() },
                rejectWithError: !0,
            });
            r.body?.wishlist_items == null && p.A.captureMessage("Wishlist items not found in response"), I(r);
            let a = r.body;
            T(a);
            let o = E.A.fromServer(a);
            s.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: e, wishlistData: o, updatedAt: t });
        } catch (t) {
            s.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: e, error: new o.LG(t) }),
                p.A.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            (n = await i.Bo.post({ url: g.Rsh.USER_WISHLIST_ITEMS, body: { sku_id: e, ...A() }, rejectWithError: !0 })),
                I(n);
            let r = n.body;
            T(r);
            let a = E.A.fromServer(r);
            if (
                (s.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: a.id, skuId: e, wishlistData: a }),
                null != t)
            )
                try {
                    let n = a.getSkuIds();
                    _.default.track(g.HAw.WISHLIST_UPDATED, {
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
        let r = c.default.getCurrentUser();
        if (null != r && null == u.A.getFirstWishlistId(r.id))
            try {
                await (0, a.eO)(r.id);
            } catch {}
    },
    async removeSkuFromWishlist(e, t, n) {
        s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: e, skuId: t });
        try {
            let r = await i.Bo.del({ url: g.Rsh.USER_WISHLIST_ITEM(e, t), query: { ...A() }, rejectWithError: !0 });
            I(r);
            let a = r.body;
            T(a);
            let o = E.A.fromServer(a);
            if (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: e, skuId: t, wishlistData: o }),
                null != n)
            )
                try {
                    let e = o.getSkuIds();
                    _.default.track(g.HAw.WISHLIST_UPDATED, {
                        wishlist_id: o.id,
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
                    url: g.Rsh.USER_WISHLIST_PATCH(e),
                    body: { visibility: t, ...A() },
                    rejectWithError: !0,
                });
                I(r), s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: e, visibility: t });
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
                url: g.Rsh.USER_WISHLIST_ITEM(e, t),
                body: { previous_sku_id: r, next_sku_id: a, ...A() },
                rejectWithError: !0,
            });
            I(n);
            let o = n.body;
            T(o);
            let l = E.A.fromServer(o);
            if ((s.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: e, wishlistData: l }), null != u))
                try {
                    let n = l.getSkuIds();
                    _.default.track(g.HAw.WISHLIST_UPDATED, {
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
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: t, applicationIds: e });
        try {
            let a = await i.Bo.get({
                url: g.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                query: { application_ids: e, user_ids: t, max_recommendations: n, localize: r, ...A() },
                rejectWithError: !0,
            });
            I(a);
            let o = a.body,
                l = m.A.fromServer(o);
            s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: t, applicationIds: e, data: l }),
                s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: o.skus });
        } catch (n) {
            p.A.captureException(n),
                s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: t, applicationIds: e });
        }
    },
};
