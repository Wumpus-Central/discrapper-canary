r.d(e, { A: () => T });
var i = r(574381),
    s = r(636537),
    n = r(73153),
    l = r(803306),
    u = r(913122),
    o = r(993046),
    a = r(321191),
    d = r(287809),
    c = r(615405),
    S = r(174459),
    I = r(403362),
    _ = r(38405),
    p = r(820847),
    h = r(310209),
    A = r(855052),
    E = r(652215);
function f() {
    let t = {};
    return (
        null != c.A.ipCountryCode && (t.country_code = c.A.ipCountryCode),
        (0, i.m0)() ? (t.payment_gateway = E.kM_.GOOGLE) : (0, i.un)() && (t.payment_gateway = E.kM_.APPLE),
        t
    );
}
function m(t) {
    let e = t.wishlist_items.map((t) => t.sku).filter(I.Vq);
    (y(e), L(t.storefront_pricing, e));
}
function y(t) {
    n.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
function L(t, e) {
    null != t &&
        n.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: e.map((t) => t.id) },
            data: (0, o.Oj)(t),
        });
}
let T = {
    async fetchWishlist(t, e, r) {
        n.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: t });
        try {
            let i = await s.Bo.get({
                url: E.Rsh.USER_WISHLIST(t),
                query: { source: r ?? p.B.USER_PROFILE, ...f() },
                rejectWithError: !0,
            });
            i.body?.wishlist_items == null && _.A.captureMessage("Wishlist items not found in response");
            let l = i.body;
            m(l);
            let u = A.Ay.fromServer(l);
            n.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: t, wishlistData: u, updatedAt: e });
        } catch (e) {
            (n.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: t, error: new u.LG(e) }),
                _.A.captureException(e));
        }
    },
    async addSkuToWishlist(t, e) {
        let r = null;
        try {
            let i = (r = await s.Bo.post({
                url: E.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: t, ...f() },
                rejectWithError: !0,
            })).body;
            m(i);
            let l = A.Ay.fromServer(i);
            if (
                (n.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: l.id, skuId: t, wishlistData: l }),
                null != e)
            )
                try {
                    let r = (0, A.Lh)(l);
                    S.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
                        action_type: "ADD",
                        sku_id: t,
                        sku_ids: r,
                        location_stack: e,
                    });
                } catch (t) {}
        } catch (e) {
            throw (n.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: t, error: new u.LG(e) }), e);
        }
        if (null == r) return;
        let i = d.default.getCurrentUser();
        if (null != i && null == a.A.getFirstWishlistId(i.id))
            try {
                await (0, l.eO)(i.id);
            } catch {}
    },
    async removeSkuFromWishlist(t, e, r) {
        n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: t, skuId: e });
        try {
            let i = (await s.Bo.del({ url: E.Rsh.USER_WISHLIST_ITEM(t, e), query: { ...f() }, rejectWithError: !0 }))
                .body;
            m(i);
            let l = A.Ay.fromServer(i);
            if (
                (n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: t, skuId: e, wishlistData: l }),
                null != r)
            )
                try {
                    let t = (0, A.Lh)(l);
                    S.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
                        action_type: "REMOVE",
                        sku_id: e,
                        sku_ids: t,
                        location_stack: r,
                    });
                } catch (t) {}
        } catch (r) {
            throw (
                n.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: t, skuId: e, error: new u.LG(r) }), r
            );
        }
    },
    async updateWishlistVisibility(t, e) {
        let r = d.default.getCurrentUser();
        if (null != r)
            try {
                let i = (
                    await s.Bo.patch({
                        url: E.Rsh.USER_WISHLIST_PATCH(t),
                        body: { visibility: e, ...f() },
                        rejectWithError: !0,
                    })
                ).body;
                (m(i), n.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: t, visibility: e }));
                try {
                    await (0, l.eO)(r.id);
                } catch {}
            } catch (e) {
                throw (
                    n.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: t, error: new u.LG(e) }), e
                );
            }
    },
    async reorderWishlistItem(t, e, r) {
        let { previousSkuId: i, nextSkuId: l, newWishlistData: o, analyticsLocations: a } = r;
        n.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: t,
            skuId: e,
            previousSkuId: i,
            nextSkuId: l,
            newWishlistData: o,
        });
        try {
            let r = (
                await s.Bo.patch({
                    url: E.Rsh.USER_WISHLIST_ITEM(t, e),
                    body: { previous_sku_id: i, next_sku_id: l, ...f() },
                    rejectWithError: !0,
                })
            ).body;
            m(r);
            let u = A.Ay.fromServer(r);
            if ((n.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: t, wishlistData: u }), null != a))
                try {
                    let r = (0, A.Lh)(u);
                    S.default.track(E.HAw.WISHLIST_UPDATED, {
                        wishlist_id: t,
                        action_type: "REORDER",
                        sku_id: e,
                        sku_ids: r,
                        location_stack: a,
                    });
                } catch (t) {}
        } catch (r) {
            (n.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: t, skuId: e, error: new u.LG(r) }),
                _.A.captureException(r));
        }
    },
    async fetchWishlistRecommendations(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: e, applicationIds: t });
        try {
            let l = (
                await s.Bo.get({
                    url: E.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: t, user_ids: e, max_recommendations: r, localize: i, ...f() },
                    rejectWithError: !0,
                })
            ).body;
            (y(l.skus), L(l.storefront_pricing, l.skus));
            let u = h.A.fromServer(l);
            n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: e, applicationIds: t, data: u });
        } catch (r) {
            (_.A.captureException(r),
                n.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: e, applicationIds: t }));
        }
    },
};
