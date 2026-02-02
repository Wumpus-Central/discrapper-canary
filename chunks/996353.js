i.d(t, {
    A: () => d,
});
var n = i(64700),
    r = i(871123),
    l = i(20424),
    s = i(592356),
    a = i(950191),
    o = i(721932),
    u = i(594832),
    c = i(188275);

function d(e) {
    let { user: t, numItems: i = u.pl, location: d } = e,
        m = (0, a.Ay)(t.id),
        {
            defaultWishlistId: p,
            wishlist: f,
            popularCollectiblesProducts: _,
            isFetchingWishlist: h,
            isValidatingPopularProducts: g,
            isFetchingPopularProducts: I,
            wishlistError: S,
        } = (0, u.eT)({
            giftRecipient: t,
            minNumItems: i,
            source: u.B5.USER_PROFILE,
        }),
        x = (0, l.A)({
            displayProfile: m,
            location: d,
        }),
        C = n.useMemo(() => [t.id], [t.id]),
        { recommendations: b } = (0, s.A)({
            guildId: (0, r.zf)(),
            numWishlistItems: Math.max(i, u.pl),
            location: d,
            applicationId: c.XR,
            userIds: C,
            includeWishlists: !0,
        }),
        w = n.useMemo(() => {
            var e;
            return (null != (e = null == f ? void 0 : f.items) ? e : []).filter((e) => !0 !== e.isOwned && (0, o.$)(e))
                .length > 0 || x
                ? b
                : [];
        }, [null == f ? void 0 : f.items, x, b]),
        { displayItems: y, totalUnownedWishlistItemCount: O } = (0, u.mk)({
            wishlist: f,
            popularCollectiblesProducts: _,
            popularSocialLayerStorefrontItems: w,
            wishlistError: S,
            numItems: i,
        });
    return {
        displayItems: y,
        totalUnownedWishlistItemCount: O,
        fetchState: n.useMemo(
            () =>
                h || g || I
                    ? {
                          status: "loading",
                      }
                    : null != S
                      ? {
                            status: "error",
                            error: S,
                        }
                      : {
                            status: "success",
                        },
            [h, g, I, S],
        ),
        defaultWishlistId: p,
        wishlist: f,
    };
}
