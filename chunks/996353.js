n.d(e, { A: () => d });
var i = n(64700),
    a = n(20424),
    s = n(592356),
    r = n(950191),
    _ = n(178213),
    l = n(721932),
    o = n(594832),
    c = n(188275);
function d(t) {
    let { user: e, numItems: n, location: d } = t,
        I = (0, _.G)("use_unowned_wishlist_items_and_recommendations"),
        g = (0, r.Ay)(e.id),
        {
            defaultWishlistId: A,
            wishlist: T,
            popularCollectiblesProducts: S,
            isFetchingWishlist: p,
            isValidatingPopularProducts: E,
            isFetchingPopularProducts: N,
            wishlistError: m,
        } = (0, o.eT)({ giftRecipient: e, minNumItems: n, source: o.B5.USER_PROFILE }),
        u = (0, a.A)({ displayProfile: g, location: d }),
        G = i.useMemo(() => [e.id], [e.id]),
        { recommendations: f } = (0, s.A)({
            numWishlistItems: Math.max(n, (0, o.Yu)(I)),
            location: d,
            applicationId: c.XR,
            userIds: G,
            includeWishlists: !0,
        }),
        L = i.useMemo(
            () => ((T?.items ?? []).filter((t) => !0 !== t.isOwned && (0, l.$)(t)).length > 0 || u ? f : []),
            [T?.items, u, f],
        ),
        { displayItems: b, totalUnownedWishlistItemCount: O } = (0, o.mk)({
            wishlist: T,
            popularCollectiblesProducts: S,
            popularSocialLayerStorefrontItems: L,
            wishlistError: m,
            numItems: n,
        });
    return {
        displayItems: b,
        totalUnownedWishlistItemCount: O,
        fetchState: i.useMemo(
            () =>
                p || E || N ? { status: "loading" } : null != m ? { status: "error", error: m } : { status: "success" },
            [p, E, N, m],
        ),
        defaultWishlistId: A,
        wishlist: T,
    };
}
