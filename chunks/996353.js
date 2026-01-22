n.d(t, {
    Ay: () => h,
    aO: () => m,
    h: () => _,
});
var r = n(64700),
    i = n(871123),
    a = n(20424),
    s = n(592356),
    o = n(166492),
    l = n(970354),
    c = n(950191),
    u = n(721932),
    d = n(594832),
    f = n(188275),
    p = n(985018);
let _ = 4;
function h(e) {
    let { user: t, numItems: n = d.pl, location: p, source: _ } = e,
        h = (0, c.Ay)(t.id),
        m = (0, o.a)({ location: p }),
        { showRecommendations: g } = (0, l.u)({ location: p }),
        E = r.useMemo(() => (_ === d.mQ.POPOUT ? g : _ !== d.mQ.DM_SIDE_PANEL || m), [_, m, g]),
        b = r.useMemo(() => (_ === d.mQ.POPOUT ? d.B5.POPOUT : d.B5.USER_PROFILE), [_]),
        {
            defaultWishlistId: y,
            wishlist: O,
            popularCollectiblesProducts: A,
            isFetchingWishlist: v,
            isValidatingPopularProducts: S,
            isFetchingPopularProducts: I,
            wishlistError: T,
        } = (0, d.eT)({
            giftRecipient: t,
            minNumItems: E ? n : 0,
            source: b,
        }),
        C = (0, a.A)({
            displayProfile: h,
            location: p,
        }),
        N = r.useMemo(() => [t.id], [t.id]),
        { recommendations: R } = (0, s.A)({
            guildId: (0, i.zf)(),
            numWishlistItems: E ? Math.max(n, d.pl) : 0,
            location: p,
            applicationId: f.XR,
            userIds: N,
            includeWishlists: !0,
        }),
        w = r.useMemo(() => {
            var e;
            return E &&
                ((null != (e = null == O ? void 0 : O.items) ? e : []).filter((e) => !0 !== e.isOwned && (0, u.$)(e))
                    .length > 0 ||
                    C)
                ? R
                : [];
        }, [null == O ? void 0 : O.items, C, E, R]),
        {
            displayItems: P,
            hasMoreItems: D,
            totalWishlistItemCount: x,
            wishlistItemCountToBeDisplayed: L,
        } = (0, d.mk)({
            wishlist: O,
            popularCollectiblesProducts: A,
            popularSocialLayerStorefrontItems: w,
            wishlistError: T,
            numItems: n,
        });
    return {
        displayItems: P,
        hasMoreItems: D,
        totalWishlistItemCount: x,
        wishlistItemCountToBeDisplayed: L,
        fetchState: r.useMemo(
            () =>
                v || S || I
                    ? { status: "loading" }
                    : null != T
                      ? {
                            status: "error",
                            error: T,
                        }
                      : { status: "success" },
            [v, S, I, T],
        ),
        defaultWishlistId: y,
        wishlist: O,
    };
}
function m(e) {
    let { user: t, numItems: n = d.pl, source: i, location: a } = e,
        {
            displayItems: s,
            defaultWishlistId: o,
            wishlist: l,
        } = h({
            user: t,
            numItems: n,
            source: i,
            location: a,
        }),
        { displayedWishlistItems: c, title: u } = r.useMemo(() => {
            let e = null == l ? void 0 : l.items.filter((e) => !0 !== e.isOwned);
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
                            source: d.uS.WISHLIST,
                        })),
                        title: p.intl.string(p.t["7lZ31J"]),
                    };
        }, [s, l, n]);
    return {
        defaultWishlistId: o,
        displayedWishlistItems: c,
        title: u,
    };
}
