"use strict";
i.d(e, { A: () => d });
var n = i(64700),
    s = i(20424),
    r = i(592356),
    l = i(950191),
    a = i(178213),
    o = i(721932),
    u = i(594832),
    c = i(188275);
function d(t) {
    let { user: e, numItems: i } = t,
        d = (0, a.G)("use_unowned_wishlist_items_and_recommendations"),
        g = (0, l.Ay)(e.id),
        I = Math.max(i, (0, u.KQ)(d)),
        {
            defaultWishlistId: m,
            wishlist: A,
            popularCollectiblesProducts: f,
            isFetchingWishlist: _,
            isValidatingPopularProducts: p,
            isFetchingPopularProducts: S,
            wishlistError: T,
        } = (0, u.eT)({ giftRecipient: e, minNumItems: I, source: u.B5.USER_PROFILE }),
        h = (0, s.A)({ displayProfile: g }),
        E = n.useMemo(() => [e.id], [e.id]),
        { recommendations: C } = (0, r.A)({
            numWishlistItems: I,
            applicationId: c.XR,
            userIds: E,
            includeWishlists: !0,
        }),
        O = n.useMemo(
            () => ((A?.items ?? []).filter((t) => !0 !== t.isOwned && (0, o.$)(t)).length > 0 || h ? C : []),
            [A?.items, h, C],
        ),
        { displayItems: R, totalUnownedWishlistItemCount: k } = (0, u.mk)({
            wishlist: A,
            popularCollectiblesProducts: f,
            popularSocialLayerStorefrontItems: O,
            wishlistError: T,
            numItems: I,
        });
    return {
        displayItems: R,
        totalUnownedWishlistItemCount: k,
        fetchState: n.useMemo(
            () =>
                _ || p || S ? { status: "loading" } : null != T ? { status: "error", error: T } : { status: "success" },
            [_, p, S, T],
        ),
        defaultWishlistId: m,
        wishlist: A,
    };
}
