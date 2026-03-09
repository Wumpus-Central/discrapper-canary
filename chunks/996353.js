"use strict";
i.d(e, { A: () => d });
var n = i(64700),
    r = i(20424),
    s = i(592356),
    a = i(950191),
    l = i(178213),
    o = i(721932),
    u = i(594832),
    c = i(188275);
function d(t) {
    let { user: e, numItems: i } = t,
        d = (0, l.GG)("use_unowned_wishlist_items_and_recommendations"),
        g = (0, a.Ay)(e.id),
        I = Math.max(i, (0, u.KQ)(d)),
        {
            defaultWishlistId: _,
            wishlist: p,
            popularCollectiblesProducts: A,
            isFetchingWishlist: m,
            isValidatingPopularProducts: S,
            isFetchingPopularProducts: f,
            wishlistError: C,
        } = (0, u.eT)({ giftRecipient: e, minNumItems: I, source: u.B5.USER_PROFILE }),
        T = (0, r.A)({ displayProfile: g }),
        E = n.useMemo(() => [e.id], [e.id]),
        { recommendations: L } = (0, s.A)({
            numWishlistItems: I,
            applicationId: c.XR,
            userIds: E,
            includeWishlists: !0,
        }),
        O = n.useMemo(
            () => ((p?.items ?? []).filter((t) => !0 !== t.isOwned && (0, o.$)(t)).length > 0 || T ? L : []),
            [p?.items, T, L],
        ),
        { displayItems: h, totalUnownedWishlistItemCount: k } = (0, u.mk)({
            wishlist: p,
            popularCollectiblesProducts: A,
            popularSocialLayerStorefrontItems: O,
            wishlistError: C,
            numItems: I,
        });
    return {
        displayItems: h,
        totalUnownedWishlistItemCount: k,
        fetchState: n.useMemo(
            () =>
                m || S || f ? { status: "loading" } : null != C ? { status: "error", error: C } : { status: "success" },
            [m, S, f, C],
        ),
        defaultWishlistId: _,
        wishlist: p,
    };
}
