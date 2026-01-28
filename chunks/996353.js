n.d(t, {
    Ay: () => f,
    aO: () => g,
    h: () => h,
});
var r = n(64700),
    l = n(871123),
    i = n(20424),
    s = n(592356),
    a = n(166492),
    o = n(950191),
    c = n(721932),
    u = n(594832),
    d = n(188275),
    p = n(985018);
let h = 4;

function f(e) {
    let { user: t, numItems: n = u.pl, location: p, source: h } = e,
        f = (0, o.Ay)(t.id),
        g = (0, a.a)({
            location: p,
        }),
        m = r.useMemo(() => h !== u.mQ.DM_SIDE_PANEL || g, [h, g]),
        {
            defaultWishlistId: b,
            wishlist: A,
            popularCollectiblesProducts: y,
            isFetchingWishlist: _,
            isValidatingPopularProducts: O,
            isFetchingPopularProducts: j,
            wishlistError: v,
        } = (0, u.eT)({
            giftRecipient: t,
            minNumItems: m ? n : 0,
            source: u.B5.USER_PROFILE,
        }),
        x = (0, i.A)({
            displayProfile: f,
            location: p,
        }),
        E = r.useMemo(() => [t.id], [t.id]),
        { recommendations: C } = (0, s.A)({
            guildId: (0, l.zf)(),
            numWishlistItems: m ? Math.max(n, u.pl) : 0,
            location: p,
            applicationId: d.XR,
            userIds: E,
            includeWishlists: !0,
        }),
        S = r.useMemo(() => {
            var e;
            return m &&
                ((null != (e = null == A ? void 0 : A.items) ? e : []).filter((e) => !0 !== e.isOwned && (0, c.$)(e))
                    .length > 0 ||
                    x)
                ? C
                : [];
        }, [null == A ? void 0 : A.items, x, m, C]),
        {
            displayItems: I,
            hasMoreItems: N,
            totalWishlistItemCount: T,
            wishlistItemCountToBeDisplayed: P,
        } = (0, u.mk)({
            wishlist: A,
            popularCollectiblesProducts: y,
            popularSocialLayerStorefrontItems: S,
            wishlistError: v,
            numItems: n,
        });
    return {
        displayItems: I,
        hasMoreItems: N,
        totalWishlistItemCount: T,
        wishlistItemCountToBeDisplayed: P,
        fetchState: r.useMemo(
            () =>
                _ || O || j
                    ? {
                          status: "loading",
                      }
                    : null != v
                      ? {
                            status: "error",
                            error: v,
                        }
                      : {
                            status: "success",
                        },
            [_, O, j, v],
        ),
        defaultWishlistId: b,
        wishlist: A,
    };
}

function g(e) {
    let { user: t, numItems: n = u.pl, source: l, location: i } = e,
        {
            displayItems: s,
            defaultWishlistId: a,
            wishlist: o,
        } = f({
            user: t,
            numItems: n,
            source: l,
            location: i,
        }),
        { displayedWishlistItems: c, title: d } = r.useMemo(() => {
            let e = null == o ? void 0 : o.items.filter((e) => !0 !== e.isOwned);
            return null == e || 0 === e.length
                ? {
                      displayedWishlistItems: null,
                      title: null,
                  }
                : e.length > 1 && e.length < n && s.length > e.length
                  ? {
                        displayedWishlistItems: s,
                        title: p.intl.string(p.t.BCi1gT),
                    }
                  : {
                        displayedWishlistItems: e.map((e) => ({
                            item: e,
                            source: u.uS.WISHLIST,
                        })),
                        title: p.intl.string(p.t["7lZ31J"]),
                    };
        }, [s, o, n]);
    return {
        defaultWishlistId: a,
        displayedWishlistItems: c,
        title: d,
    };
}
