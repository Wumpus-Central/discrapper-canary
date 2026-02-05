i.d(t, { A: () => d });
var n = i(64700),
    r = i(20424),
    l = i(592356),
    s = i(950191),
    a = i(721932),
    o = i(594832),
    u = i(188275);
function d(e) {
    let { user: t, numItems: i = o.pl, location: d } = e,
        c = (0, s.Ay)(t.id),
        {
            defaultWishlistId: m,
            wishlist: p,
            popularCollectiblesProducts: _,
            isFetchingWishlist: f,
            isValidatingPopularProducts: h,
            isFetchingPopularProducts: g,
            wishlistError: I,
        } = (0, o.eT)({ giftRecipient: t, minNumItems: i, source: o.B5.USER_PROFILE }),
        S = (0, r.A)({ displayProfile: c, location: d }),
        x = n.useMemo(() => [t.id], [t.id]),
        { recommendations: C } = (0, l.A)({
            numWishlistItems: Math.max(i, o.pl),
            location: d,
            applicationId: u.XR,
            userIds: x,
            includeWishlists: !0,
        }),
        w = n.useMemo(
            () => ((p?.items ?? []).filter((e) => !0 !== e.isOwned && (0, a.$)(e)).length > 0 || S ? C : []),
            [p?.items, S, C],
        ),
        { displayItems: T, totalUnownedWishlistItemCount: b } = (0, o.mk)({
            wishlist: p,
            popularCollectiblesProducts: _,
            popularSocialLayerStorefrontItems: w,
            wishlistError: I,
            numItems: i,
        });
    return {
        displayItems: T,
        totalUnownedWishlistItemCount: b,
        fetchState: n.useMemo(
            () =>
                f || h || g ? { status: "loading" } : null != I ? { status: "error", error: I } : { status: "success" },
            [f, h, g, I],
        ),
        defaultWishlistId: m,
        wishlist: p,
    };
}
