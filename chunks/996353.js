i.d(t, {
    A: () => c,
});
var r = i(64700),
    n = i(871123),
    a = i(20424),
    l = i(592356),
    s = i(950191),
    o = i(721932),
    d = i(594832),
    u = i(188275);

function c(e) {
    let { user: t, numItems: i = d.pl, location: c } = e,
        m = (0, s.Ay)(t.id),
        {
            defaultWishlistId: f,
            wishlist: _,
            popularCollectiblesProducts: p,
            isFetchingWishlist: g,
            isValidatingPopularProducts: h,
            isFetchingPopularProducts: I,
            wishlistError: C,
        } = (0, d.eT)({
            giftRecipient: t,
            minNumItems: i,
            source: d.B5.USER_PROFILE,
        }),
        x = (0, a.A)({
            displayProfile: m,
            location: c,
        }),
        S = r.useMemo(() => [t.id], [t.id]),
        { recommendations: b } = (0, l.A)({
            guildId: (0, n.zf)(),
            numWishlistItems: Math.max(i, d.pl),
            location: c,
            applicationId: u.XR,
            userIds: S,
            includeWishlists: !0,
        }),
        T = r.useMemo(() => {
            var e;
            return (null != (e = null == _ ? void 0 : _.items) ? e : []).filter((e) => !0 !== e.isOwned && (0, o.$)(e))
                .length > 0 || x
                ? b
                : [];
        }, [null == _ ? void 0 : _.items, x, b]),
        {
            displayItems: A,
            hasMoreItems: j,
            totalWishlistItemCount: O,
            wishlistItemCountToBeDisplayed: v,
        } = (0, d.mk)({
            wishlist: _,
            popularCollectiblesProducts: p,
            popularSocialLayerStorefrontItems: T,
            wishlistError: C,
            numItems: i,
        });
    return {
        displayItems: A,
        hasMoreItems: j,
        totalWishlistItemCount: O,
        wishlistItemCountToBeDisplayed: v,
        fetchState: r.useMemo(
            () =>
                g || h || I
                    ? {
                          status: "loading",
                      }
                    : null != C
                      ? {
                            status: "error",
                            error: C,
                        }
                      : {
                            status: "success",
                        },
            [g, h, I, C],
        ),
        defaultWishlistId: f,
        wishlist: _,
    };
}
