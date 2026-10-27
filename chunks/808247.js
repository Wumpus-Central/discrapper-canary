r.d(e, { A: () => T });
var i = r(574381),
    l = r(636537),
    s = r(73153),
    n = r(803306),
    u = r(913122),
    o = r(993046),
    a = r(321191),
    d = r(287809),
    c = r(615405),
    S = r(174459),
    I = r(403362),
    A = r(38405),
    _ = r(820847),
    h = r(310209),
    p = r(855052),
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
    (y(e), L(t.storefront_pricing, e));
}
function y(t) {
    s.h.dispatch({ type: "SKUS_FETCH_SUCCESS", skus: t });
}
function L(t, e) {
    null != t &&
        s.h.dispatch({
            type: "SKUS_PRICING_FETCH_SUCCESS",
            priceId: { type: "skus", skuIds: e.map((t) => t.id) },
            data: (0, o.Oj)(t),
        });
}
let T = {
    async fetchWishlist(t, e, r) {
        s.h.dispatch({ type: "WISHLIST_FETCH_START", wishlistId: t });
        try {
            let i = await l.Bo.get({
                url: f.Rsh.USER_WISHLIST(t),
                query: { source: r ?? _.B.USER_PROFILE, ...E() },
                rejectWithError: !0,
            });
            i.body?.wishlist_items == null && A.A.captureMessage("Wishlist items not found in response");
            let n = i.body;
            m(n);
            let u = p.Ay.fromServer(n);
            s.h.dispatch({ type: "WISHLIST_FETCH_SUCCESS", wishlistId: t, wishlistData: u, updatedAt: e });
        } catch (e) {
            (s.h.dispatch({ type: "WISHLIST_FETCH_FAILURE", wishlistId: t, error: new u.LG(e) }),
                A.A.captureException(e));
        }
    },
    async addSkuToWishlist(t, e) {
        let r = null;
        try {
            let i = (r = await l.Bo.post({
                url: f.Rsh.USER_WISHLIST_ITEMS,
                body: { sku_id: t, ...E() },
                rejectWithError: !0,
            })).body;
            m(i);
            let n = p.Ay.fromServer(i);
            if (
                (s.h.dispatch({ type: "WISHLIST_ADD_SKU_SUCCESS", wishlistId: n.id, skuId: t, wishlistData: n }),
                null != e)
            )
                try {
                    let r = (0, p.Lh)(n);
                    S.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: n.id,
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
        if (null != i && null == a.A.getFirstWishlistId(i.id))
            try {
                await (0, n.eO)(i.id);
            } catch {}
    },
    async removeSkuFromWishlist(t, e, r) {
        s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_START", wishlistId: t, skuId: e });
        try {
            let i = (await l.Bo.del({ url: f.Rsh.USER_WISHLIST_ITEM(t, e), query: { ...E() }, rejectWithError: !0 }))
                .body;
            m(i);
            let n = p.Ay.fromServer(i);
            if (
                (s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_SUCCESS", wishlistId: t, skuId: e, wishlistData: n }),
                null != r)
            )
                try {
                    let t = (0, p.Lh)(n);
                    S.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: n.id,
                        action_type: "REMOVE",
                        sku_id: e,
                        sku_ids: t,
                        location_stack: r,
                    });
                } catch (t) {}
        } catch (r) {
            throw (
                s.h.dispatch({ type: "WISHLIST_REMOVE_SKU_FAILURE", wishlistId: t, skuId: e, error: new u.LG(r) }), r
            );
        }
    },
    async updateWishlistVisibility(t, e) {
        let r = d.default.getCurrentUser();
        if (null != r)
            try {
                let i = (
                    await l.Bo.patch({
                        url: f.Rsh.USER_WISHLIST_PATCH(t),
                        body: { visibility: e, ...E() },
                        rejectWithError: !0,
                    })
                ).body;
                (m(i), s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_SUCCESS", wishlistId: t, visibility: e }));
                try {
                    await (0, n.eO)(r.id);
                } catch {}
            } catch (e) {
                throw (
                    s.h.dispatch({ type: "WISHLIST_UPDATE_VISIBILITY_FAILURE", wishlistId: t, error: new u.LG(e) }), e
                );
            }
    },
    async reorderWishlistItem(t, e, r) {
        let { previousSkuId: i, nextSkuId: n, newWishlistData: o, analyticsLocations: a } = r;
        s.h.dispatch({
            type: "WISHLIST_REORDER_START",
            wishlistId: t,
            skuId: e,
            previousSkuId: i,
            nextSkuId: n,
            newWishlistData: o,
        });
        try {
            let r = (
                await l.Bo.patch({
                    url: f.Rsh.USER_WISHLIST_ITEM(t, e),
                    body: { previous_sku_id: i, next_sku_id: n, ...E() },
                    rejectWithError: !0,
                })
            ).body;
            m(r);
            let u = p.Ay.fromServer(r);
            if ((s.h.dispatch({ type: "WISHLIST_REORDER_SUCCESS", wishlistId: t, wishlistData: u }), null != a))
                try {
                    let r = (0, p.Lh)(u);
                    S.default.track(f.HAw.WISHLIST_UPDATED, {
                        wishlist_id: t,
                        action_type: "REORDER",
                        sku_id: e,
                        sku_ids: r,
                        location_stack: a,
                    });
                } catch (t) {}
        } catch (r) {
            (s.h.dispatch({ type: "WISHLIST_REORDER_FAILURE", wishlistId: t, skuId: e, error: new u.LG(r) }),
                A.A.captureException(r));
        }
    },
    async fetchWishlistRecommendations(t, e) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_START", userIds: e, applicationIds: t });
        try {
            let n = (
                await l.Bo.get({
                    url: f.Rsh.USER_WISHLIST_RECOMMENDATIONS,
                    query: { application_ids: t, user_ids: e, max_recommendations: r, localize: i, ...E() },
                    rejectWithError: !0,
                })
            ).body;
            (y(n.skus), L(n.storefront_pricing, n.skus));
            let u = h.A.fromServer(n);
            s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_SUCCESS", userIds: e, applicationIds: t, data: u });
        } catch (r) {
            (A.A.captureException(r),
                s.h.dispatch({ type: "WISHLIST_RECOMMENDATIONS_FETCH_FAILURE", userIds: e, applicationIds: t }));
        }
    },
};
