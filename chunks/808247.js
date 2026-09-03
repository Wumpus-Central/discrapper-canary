r.d(e, { A: () => T });
var i = r(574381),
    n = r(636537),
    l = r(228366),
    s = r(803306),
    u = r(913122),
    a = r(993046),
    o = r(321191),
    c = r(287809),
    d = r(615405),
    S = r(174459),
    A = r(403362),
    h = r(38405),
    I = r(561794),
    p = r(310209),
    f = r(855052),
    _ = r(652215);
function E() {
    let t = {};
    return (
        null != d.A.ipCountryCode && (t.country_code = d.A.ipCountryCode),
        (0, i.m0)() ? (t.payment_gateway = _.kM_.GOOGLE) : (0, i.un)() && (t.payment_gateway = _.kM_.APPLE),
        t
    );
}
function m(t) {
    let e = t.wishlist_items.map((t) => t.sku).filter(A.Vq);
    y(e), g(t.storefront_pricing, e);
}
function y(t) {
    l.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
function g(t, e) {
    null != t &&
        l.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: e.map((t) => t.id) },
            data: (0, a.Oj)(t),
        });
}
let T = {
    async fetchWishlist(t, e, r) {
        l.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: t });
        try {
            let i = await n.Bo.get({
                url: _.Rsh.USER_WISHLIST(t),
                query: { source: r ?? I.B5.USER_PROFILE, ...E() },
                rejectWithError: !0,
            });
            i.body?.wishlist_items == null && h.A.captureMessage("Wishlist items not found in response");
            let s = i.body;
            m(s);
            let u = f.Ay.fromServer(s);
            l.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: t, wishlistData: u, updatedAt: e });
        } catch (e) {
            l.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: t, error: new u.LG(e) }),
                h.A.captureException(e);
        }
    },
    async addSkuToWishlist(t, e) {
        let r = null;
        try {
            let i = (r = await n.Bo.post({
                url: _.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: t, ...E() },
                rejectWithError: !0,
            })).body;
            m(i);
            let s = f.Ay.fromServer(i);
            if (
                (l.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: s.id, skuId: t, wishlistData: s }),
                null != e)
            )
                try {
                    let r = (0, f.Lh)(s);
                    S.default.track(_.HAw.WISHLIST_UPDATED, {
                        wishlist_id: s.id,
                        action_type: "ADD",
                        sku_id: t,
                        sku_ids: r,
                        location_stack: e,
                    });
                } catch (t) {}
        } catch (e) {
            throw (l.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: t, error: new u.LG(e) }), e);
        }
        if (null == r) return;
        let i = c.default.getCurrentUser();
        if (null != i && null == o.A.getFirstWishlistId(i.id))
            try {
                await (0, s.fetchProfile)(i.id);
            } catch {}
    },
    async removeSkuFromWishlist(t, e, r) {
        l.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: t, skuId: e });
        try {
            let i = (await n.Bo.del({ url: _.Rsh.USER_WISHLIST_ITEM(t, e), query: { ...E() }, rejectWithError: !0 }))
                .body;
            m(i);
            let s = f.Ay.fromServer(i);
            if (
                (l.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: t, skuId: e, wishlistData: s }),
                null != r)
            )
                try {
                    let t = (0, f.Lh)(s);
                    S.default.track(_.HAw.WISHLIST_UPDATED, {
                        wishlist_id: s.id,
                        action_type: "REMOVE",
                        sku_id: e,
                        sku_ids: t,
                        location_stack: r,
                    });
                } catch (t) {}
        } catch (r) {
            throw (
                (l.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: t, skuId: e, error: new u.LG(r) }), r)
            );
        }
    },
    async updateWishlistVisibility(t, e) {
        let r = c.default.getCurrentUser();
        if (null != r)
            try {
                let i = (
                    await n.Bo.patch({
                        url: _.Rsh.USER_WISHLIST_PATCH(t),
                        body: { visibility: e, ...E() },
                        rejectWithError: !0,
                    })
                ).body;
                m(i), l.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: t, visibility: e });
                try {
                    await (0, s.fetchProfile)(r.id);
                } catch {}
            } catch (e) {
                throw (
                    (l.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: t, error: new u.LG(e) }), e)
                );
            }
    },
    async reorderWishlistItem(t, e, r) {
        let { previousSkuId: i, nextSkuId: s, newWishlistData: a, analyticsLocations: o } = r;
        l.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: t,
            skuId: e,
            previousSkuId: i,
            nextSkuId: s,
            newWishlistData: a,
        });
        try {
            let r = (
                await n.Bo.patch({
                    url: _.Rsh.USER_WISHLIST_ITEM(t, e),
                    body: { previous_sku_id: i, next_sku_id: s, ...E() },
                    rejectWithError: !0,
                })
            ).body;
            m(r);
            let u = f.Ay.fromServer(r);
            if ((l.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: t, wishlistData: u }), null != o))
                try {
                    let r = (0, f.Lh)(u);
                    S.default.track(_.HAw.WISHLIST_UPDATED, {
                        wishlist_id: t,
                        action_type: "REORDER",
                        sku_id: e,
                        sku_ids: r,
                        location_stack: o,
                    });
                } catch (t) {}
        } catch (r) {
            l.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: t, skuId: e, error: new u.LG(r) }),
                h.A.captureException(r);
        }
    },
    async fetchWishlistRecommendations(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        l.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: e, applicationIds: t });
        try {
            let s = (
                await n.Bo.get({
                    url: _.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: t, user_ids: e, max_recommendations: r, localize: i, ...E() },
                    rejectWithError: !0,
                })
            ).body;
            y(s.skus), g(s.storefront_pricing, s.skus);
            let u = p.A.fromServer(s);
            l.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: e, applicationIds: t, data: u });
        } catch (r) {
            h.A.captureException(r),
                l.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: e, applicationIds: t });
        }
    },
};
