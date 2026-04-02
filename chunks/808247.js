"use strict";
n.d(t, { A: () => N });
var r = n(735438),
    i = n(574381),
    s = n(562465),
    a = n(73153),
    o = n(803306),
    l = n(198982),
    u = n(419709),
    c = n(828596),
    d = n(622543),
    _ = n(287809),
    f = n(615405),
    p = n(954571),
    h = n(403362),
    m = n(728458),
    E = n(594832),
    g = n(310209),
    A = n(855052),
    I = n(652215);
function T(e) {
    let t = (0, r.uniq)(e.wishlist_items.map((e) => e.sku?.id).filter(h.Vq));
    t.length > 0 && (0, c.N4)(t);
}
function S() {
    let e = {};
    return (
        null != f.A.ipCountryCode && (e.country_code = f.A.ipCountryCode),
        (0, i.m0)() ? (e.payment_gateway = I.kM_.GOOGLE) : (0, i.un)() && (e.payment_gateway = I.kM_.APPLE),
        e
    );
}
function y(e) {
    if (e.body?.user_discounts != null) {
        let t = e.body.user_discounts.map((e) => u.T.fromServer(e));
        a.h.dispatch({ type: "WISHLIST_USER_DISCOUNTS_RESPONSE_SUCCESS", userDiscounts: t });
    }
}
function v(e) {
    let t = e.wishlist_items.map((e) => e.sku).filter(h.Vq);
    a.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
let N = {
    async fetchWishlist(e, t, n) {
        a.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: e });
        try {
            let r = await s.Bo.get({
                url: I.Rsh.USER_WISHLIST(e),
                query: { source: n ?? E.B5.USER_PROFILE, ...S() },
                rejectWithError: !0,
            });
            r.body?.wishlist_items == null && m.A.captureMessage("Wishlist items not found in response"), y(r);
            let i = r.body;
            v(i), T(i);
            let o = A.A.fromServer(i);
            a.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: e, wishlistData: o, updatedAt: t });
        } catch (t) {
            a.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: e, error: new l.LG(t) }),
                m.A.captureException(t);
        }
    },
    async addSkuToWishlist(e, t) {
        let n = null;
        try {
            (n = await s.Bo.post({ url: I.Rsh.USER_WISHLIST_ITEMS, body: { sku_id: e, ...S() }, rejectWithError: !0 })),
                y(n);
            let r = n.body;
            v(r), T(r);
            let i = A.A.fromServer(r);
            if (
                (a.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: i.id, skuId: e, wishlistData: i }),
                null != t)
            )
                try {
                    let n = i.getSkuIds();
                    p.default.track(I.HAw.WISHLIST_UPDATED, {
                        wishlist_id: i.id,
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
        let r = _.default.getCurrentUser();
        if (null != r && null == d.A.getFirstWishlistId(r.id))
            try {
                await (0, o.eO)(r.id);
            } catch {}
    },
    async removeSkuFromWishlist(e, t, n) {
        a.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: e, skuId: t });
        try {
            let r = await s.Bo.del({ url: I.Rsh.USER_WISHLIST_ITEM(e, t), query: { ...S() }, rejectWithError: !0 });
            y(r);
            let i = r.body;
            v(i), T(i);
            let o = A.A.fromServer(i);
            if (
                (a.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: e, skuId: t, wishlistData: o }),
                null != n)
            )
                try {
                    let e = o.getSkuIds();
                    p.default.track(I.HAw.WISHLIST_UPDATED, {
                        wishlist_id: o.id,
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
        let n = _.default.getCurrentUser();
        if (null != n)
            try {
                let r = await s.Bo.patch({
                    url: I.Rsh.USER_WISHLIST_PATCH(e),
                    body: { visibility: t, ...S() },
                    rejectWithError: !0,
                });
                y(r), a.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: e, visibility: t });
                try {
                    await (0, o.eO)(n.id);
                } catch {}
            } catch (t) {
                throw (
                    (a.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: e, error: new l.LG(t) }), t)
                );
            }
    },
    async reorderWishlistItem(e, t, n) {
        let { previousSkuId: r, nextSkuId: i, newWishlistData: o, analyticsLocations: u } = n;
        a.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: e,
            skuId: t,
            previousSkuId: r,
            nextSkuId: i,
            newWishlistData: o,
        });
        try {
            let n = await s.Bo.patch({
                url: I.Rsh.USER_WISHLIST_ITEM(e, t),
                body: { previous_sku_id: r, next_sku_id: i, ...S() },
                rejectWithError: !0,
            });
            y(n);
            let o = n.body;
            v(o), T(o);
            let l = A.A.fromServer(o);
            if ((a.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: e, wishlistData: l }), null != u))
                try {
                    let n = l.getSkuIds();
                    p.default.track(I.HAw.WISHLIST_UPDATED, {
                        wishlist_id: e,
                        action_type: "REORDER",
                        sku_id: t,
                        sku_ids: n,
                        location_stack: u,
                    });
                } catch (e) {}
        } catch (n) {
            a.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: e, skuId: t, error: new l.LG(n) }),
                m.A.captureException(n);
        }
    },
    async fetchWishlistRecommendations(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        a.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: t, applicationIds: e });
        try {
            let o = await s.Bo.get({
                url: I.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                query: { application_ids: e, user_ids: t, max_recommendations: n, localize: i, ...S() },
                rejectWithError: !0,
            });
            y(o);
            let l = o.body,
                u = g.A.fromServer(l);
            (0, c.N4)((0, r.uniq)(l.skus.map((e) => e.id))),
                a.h.dispatch({
                    type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS",
                    userIds: t,
                    applicationIds: e,
                    data: u,
                }),
                a.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: l.skus });
        } catch (n) {
            m.A.captureException(n),
                a.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: t, applicationIds: e });
        }
    },
};
