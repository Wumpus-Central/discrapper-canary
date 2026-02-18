"use strict";
i.d(t, { A: () => c });
var n = i(64700),
    s = i(20424),
    r = i(592356),
    l = i(950191),
    a = i(721932),
    o = i(594832),
    d = i(188275);
function c(e) {
    let { user: t, numItems: i = o.pl, location: c } = e,
        u = (0, l.Ay)(t.id),
        {
            defaultWishlistId: _,
            wishlist: m,
            popularCollectiblesProducts: I,
            isFetchingWishlist: f,
            isValidatingPopularProducts: p,
            isFetchingPopularProducts: g,
            wishlistError: h,
        } = (0, o.eT)({ giftRecipient: t, minNumItems: i, source: o.B5.USER_PROFILE }),
        S = (0, s.A)({ displayProfile: u, location: c }),
        A = n.useMemo(() => [t.id], [t.id]),
        { recommendations: T } = (0, r.A)({
            numWishlistItems: Math.max(i, o.pl),
            location: c,
            applicationId: d.XR,
            userIds: A,
            includeWishlists: !0,
        }),
        b = n.useMemo(
            () => ((m?.items ?? []).filter((e) => !0 !== e.isOwned && (0, a.$)(e)).length > 0 || S ? T : []),
            [m?.items, S, T],
        ),
        { displayItems: L, totalUnownedWishlistItemCount: C } = (0, o.mk)({
            wishlist: m,
            popularCollectiblesProducts: I,
            popularSocialLayerStorefrontItems: b,
            wishlistError: h,
            numItems: i,
        });
    return {
        displayItems: L,
        totalUnownedWishlistItemCount: C,
        fetchState: n.useMemo(
            () =>
                f || p || g ? { status: "loading" } : null != h ? { status: "error", error: h } : { status: "success" },
            [f, p, g, h],
        ),
        defaultWishlistId: _,
        wishlist: m,
    };
}
