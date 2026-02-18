n.d(e, { A: () => c });
var i = n(64700),
    a = n(20424),
    s = n(592356),
    r = n(950191),
    l = n(721932),
    _ = n(594832),
    o = n(188275);
function c(t) {
    let { user: e, numItems: n = _.pl, location: c } = t,
        d = (0, r.Ay)(e.id),
        {
            defaultWishlistId: I,
            wishlist: g,
            popularCollectiblesProducts: A,
            isFetchingWishlist: T,
            isValidatingPopularProducts: S,
            isFetchingPopularProducts: p,
            wishlistError: E,
        } = (0, _.eT)({ giftRecipient: e, minNumItems: n, source: _.B5.USER_PROFILE }),
        N = (0, a.A)({ displayProfile: d, location: c }),
        f = i.useMemo(() => [e.id], [e.id]),
        { recommendations: G } = (0, s.A)({
            numWishlistItems: Math.max(n, _.pl),
            location: c,
            applicationId: o.XR,
            userIds: f,
            includeWishlists: !0,
        }),
        m = i.useMemo(
            () => ((g?.items ?? []).filter((t) => !0 !== t.isOwned && (0, l.$)(t)).length > 0 || N ? G : []),
            [g?.items, N, G],
        ),
        { displayItems: u, totalUnownedWishlistItemCount: L } = (0, _.mk)({
            wishlist: g,
            popularCollectiblesProducts: A,
            popularSocialLayerStorefrontItems: m,
            wishlistError: E,
            numItems: n,
        });
    return {
        displayItems: u,
        totalUnownedWishlistItemCount: L,
        fetchState: i.useMemo(
            () =>
                T || S || p ? { status: "loading" } : null != E ? { status: "error", error: E } : { status: "success" },
            [T, S, p, E],
        ),
        defaultWishlistId: I,
        wishlist: g,
    };
}
