"use strict";
n.d(e, { A: () => d });
var i = n(64700),
    a = n(20424),
    s = n(592356),
    r = n(950191),
    c = n(178213),
    l = n(721932),
    _ = n(594832),
    o = n(188275);
function d(t) {
    let { user: e, numItems: n, location: d } = t,
        I = (0, c.G)("use_unowned_wishlist_items_and_recommendations"),
        g = (0, r.Ay)(e.id),
        {
            defaultWishlistId: A,
            wishlist: u,
            popularCollectiblesProducts: T,
            isFetchingWishlist: S,
            isValidatingPopularProducts: p,
            isFetchingPopularProducts: E,
            wishlistError: N,
        } = (0, _.eT)({ giftRecipient: e, minNumItems: n, source: _.B5.USER_PROFILE }),
        f = (0, a.A)({ displayProfile: g, location: d }),
        m = i.useMemo(() => [e.id], [e.id]),
        { recommendations: G } = (0, s.A)({
            numWishlistItems: Math.max(n, (0, _.Yu)(I)),
            location: d,
            applicationId: o.XR,
            userIds: m,
            includeWishlists: !0,
        }),
        L = i.useMemo(
            () => ((u?.items ?? []).filter((t) => !0 !== t.isOwned && (0, l.$)(t)).length > 0 || f ? G : []),
            [u?.items, f, G],
        ),
        { displayItems: b, totalUnownedWishlistItemCount: O } = (0, _.mk)({
            wishlist: u,
            popularCollectiblesProducts: T,
            popularSocialLayerStorefrontItems: L,
            wishlistError: N,
            numItems: n,
        });
    return {
        displayItems: b,
        totalUnownedWishlistItemCount: O,
        fetchState: i.useMemo(
            () =>
                S || p || E ? { status: "loading" } : null != N ? { status: "error", error: N } : { status: "success" },
            [S, p, E, N],
        ),
        defaultWishlistId: A,
        wishlist: u,
    };
}
