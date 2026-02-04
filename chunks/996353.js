i.d(t, {
    A: () => c,
});
var n = i(64700),
    r = i(20424),
    l = i(592356),
    s = i(950191),
    a = i(721932),
    o = i(594832),
    u = i(188275);

function c(e) {
    let { user: t, numItems: i = o.pl, location: c } = e,
        d = (0, s.Ay)(t.id),
        {
            defaultWishlistId: m,
            wishlist: p,
            popularCollectiblesProducts: f,
            isFetchingWishlist: _,
            isValidatingPopularProducts: h,
            isFetchingPopularProducts: g,
            wishlistError: I,
        } = (0, o.eT)({
            giftRecipient: t,
            minNumItems: i,
            source: o.B5.USER_PROFILE,
        }),
        S = (0, r.A)({
            displayProfile: d,
            location: c,
        }),
        x = n.useMemo(() => [t.id], [t.id]),
        { recommendations: C } = (0, l.A)({
            numWishlistItems: Math.max(i, o.pl),
            location: c,
            applicationId: u.XR,
            userIds: x,
            includeWishlists: !0,
        }),
        b = n.useMemo(() => {
            var e;
            return (null != (e = null == p ? void 0 : p.items) ? e : []).filter((e) => !0 !== e.isOwned && (0, a.$)(e))
                .length > 0 || S
                ? C
                : [];
        }, [null == p ? void 0 : p.items, S, C]),
        { displayItems: w, totalUnownedWishlistItemCount: y } = (0, o.mk)({
            wishlist: p,
            popularCollectiblesProducts: f,
            popularSocialLayerStorefrontItems: b,
            wishlistError: I,
            numItems: i,
        });
    return {
        displayItems: w,
        totalUnownedWishlistItemCount: y,
        fetchState: n.useMemo(
            () =>
                _ || h || g
                    ? {
                          status: "loading",
                      }
                    : null != I
                      ? {
                            status: "error",
                            error: I,
                        }
                      : {
                            status: "success",
                        },
            [_, h, g, I],
        ),
        defaultWishlistId: m,
        wishlist: p,
    };
}
