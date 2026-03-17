e.d(i, { A: () => d });
var n = e(64700),
    a = e(20424),
    s = e(592356),
    l = e(950191),
    r = e(178213),
    o = e(721932),
    c = e(594832),
    u = e(188275);
function d(t) {
    let { user: i, numItems: e } = t,
        d = (0, r.GG)("use_unowned_wishlist_items_and_recommendations"),
        g = (0, l.Ay)(i.id),
        I = Math.max(e, (0, c.KQ)(d)),
        {
            defaultWishlistId: _,
            wishlist: f,
            popularCollectiblesProducts: p,
            isFetchingWishlist: A,
            isValidatingPopularProducts: m,
            isFetchingPopularProducts: T,
            wishlistError: S,
        } = (0, c.eT)({ giftRecipient: i, minNumItems: I, source: c.B5.USER_PROFILE }),
        h = (0, a.A)({ displayProfile: g }),
        E = n.useMemo(() => [i.id], [i.id]),
        { recommendations: C } = (0, s.A)({
            numWishlistItems: I,
            applicationId: u.XR,
            userIds: E,
            includeWishlists: !0,
        }),
        L = n.useMemo(
            () => ((f?.items ?? []).filter((t) => !0 !== t.isOwned && (0, o.$)(t)).length > 0 || h ? C : []),
            [f?.items, h, C],
        ),
        { displayItems: O, totalUnownedWishlistItemCount: k } = (0, c.mk)({
            wishlist: f,
            popularCollectiblesProducts: p,
            popularSocialLayerStorefrontItems: L,
            wishlistError: S,
            numItems: I,
        });
    return {
        displayItems: O,
        totalUnownedWishlistItemCount: k,
        fetchState: n.useMemo(
            () =>
                A || m || T ? { status: "loading" } : null != S ? { status: "error", error: S } : { status: "success" },
            [A, m, T, S],
        ),
        defaultWishlistId: _,
        wishlist: f,
    };
}
