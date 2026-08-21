r.d(e, { A: () => R });
var i = r(574381),
    n = r(636537),
    s = r(228366),
    l = r(803306),
    u = r(913122),
    a = r(993046),
    o = r(321191),
    d = r(287809),
    c = r(615405),
    S = r(174459),
    I = r(403362),
    p = r(38405),
    h = r(594832),
    _ = r(310209),
    A = r(855052),
    f = r(652215);
function E() {
    let t = {};
    return (
        null != c.A.ipCountryCode && (t.country_code = c.A.ipCountryCode),
        (0, i.m0)() ? (t.payment_gateway = f.kM_.GOOGLE) : (0, i.un)() && (t.payment_gateway = f.kM_.APPLE),
        t
    );
}
function m(t) {
    let e = t.wishlist_items.map((t) => t.sku).filter(I.Vq);
    y(e), T(t.storefront_pricing, e);
}
function y(t) {
    s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
function T(t, e) {
    null != t &&
        s.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: e.map((t) => t.id) },
            data: (0, a.Oj)(t),
        });
}
let R = {
    async fetchWishlist(t, e, r) {
        s.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: t });
        try {
            let i = await n.Bo.get({
                url: f.Rsh.USER_WISHLIST(t),
                query: { source: r ?? h.B5.USER_PROFILE, ...E() },
                rejectWithError: !0,
            });
            i.body?.wishlist_items == null && p.A.captureMessage("Wishlist items not found in response");
            let l = i.body;
            m(l);
            let u = A.Ay.fromServer(l);
            s.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: t, wishlistData: u, updatedAt: e });
        } catch (e) {
            s.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: t, error: new u.LG(e) }),
                p.A.captureException(e);
        }
    },
    async addSkuToWishlist(t, e) {
        let r = null;
        try {
            let i = (r = await n.Bo.post({
                url: f.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: t, ...E() },
                rejectWithError: !0,
            })).body;
            m(i);
            let l = A.Ay.fromServer(i);
            if (
                (s.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: l.id, skuId: t, wishlistData: l }),
                null != e)
            )
                try {
                    let r = (0, A.Lh)(l);
                    S.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
                        action_type: "ADD",
                        sku_id: t,
                        sku_ids: r,
                        location_stack: e,
                    });
                } catch (t) {}
        } catch (e) {
            throw (s.h.dispatch({ type: "WISHLIST_ADD_SKU_FAILURE", skuId: t, error: new u.LG(e) }), e);
        }
        if (null == r) return;
        let i = d.default.getCurrentUser();
        if (null != i && null == o.A.getFirstWishlistId(i.id))
            try {
                await (0, l.fetchProfile)(i.id);
            } catch {}
    },
    async removeSkuFromWishlist(t, e, r) {
        s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: t, skuId: e });
        try {
            let i = (await n.Bo.del({ url: f.Rsh.USER_WISHLIST_ITEM(t, e), query: { ...E() }, rejectWithError: !0 }))
                .body;
            m(i);
            let l = A.Ay.fromServer(i);
            if (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: t, skuId: e, wishlistData: l }),
                null != r)
            )
                try {
                    let t = (0, A.Lh)(l);
                    S.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: l.id,
                        action_type: "REMOVE",
                        sku_id: e,
                        sku_ids: t,
                        location_stack: r,
                    });
                } catch (t) {}
        } catch (r) {
            throw (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: t, skuId: e, error: new u.LG(r) }), r)
            );
        }
    },
    async updateWishlistVisibility(t, e) {
        let r = d.default.getCurrentUser();
        if (null != r)
            try {
                let i = (
                    await n.Bo.patch({
                        url: f.Rsh.USER_WISHLIST_PATCH(t),
                        body: { visibility: e, ...E() },
                        rejectWithError: !0,
                    })
                ).body;
                m(i), s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: t, visibility: e });
                try {
                    await (0, l.fetchProfile)(r.id);
                } catch {}
            } catch (e) {
                throw (
                    (s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: t, error: new u.LG(e) }), e)
                );
            }
    },
    async reorderWishlistItem(t, e, r) {
        let { previousSkuId: i, nextSkuId: l, newWishlistData: a, analyticsLocations: o } = r;
        s.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: t,
            skuId: e,
            previousSkuId: i,
            nextSkuId: l,
            newWishlistData: a,
        });
        try {
            let r = (
                await n.Bo.patch({
                    url: f.Rsh.USER_WISHLIST_ITEM(t, e),
                    body: { previous_sku_id: i, next_sku_id: l, ...E() },
                    rejectWithError: !0,
                })
            ).body;
            m(r);
            let u = A.Ay.fromServer(r);
            if ((s.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: t, wishlistData: u }), null != o))
                try {
                    let r = (0, A.Lh)(u);
                    S.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: t,
                        action_type: "REORDER",
                        sku_id: e,
                        sku_ids: r,
                        location_stack: o,
                    });
                } catch (t) {}
        } catch (r) {
            s.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: t, skuId: e, error: new u.LG(r) }),
                p.A.captureException(r);
        }
    },
    async fetchWishlistRecommendations(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: e, applicationIds: t });
        try {
            let l = (
                await n.Bo.get({
                    url: f.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: t, user_ids: e, max_recommendations: r, localize: i, ...E() },
                    rejectWithError: !0,
                })
            ).body;
            y(l.skus), T(l.storefront_pricing, l.skus);
            let u = _.A.fromServer(l);
            s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: e, applicationIds: t, data: u });
        } catch (r) {
            p.A.captureException(r),
                s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: e, applicationIds: t });
        }
    },
};
