n.d(t, { Z: () => d });
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    a = n(793030),
    o = n(51144),
    c = n(790773),
    s = n(388032),
    u = n(233616);
function d(e) {
    let { wishlist: t, analyticsLocations: n, user: i, isOwner: d, className: f } = e;
    return (0, r.jsxs)("div", {
        className: l()(u.container, f),
        children: [
            (0, r.jsx)(a.xvT, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: d
                    ? s.intl.string(s.t["+GB8Kt"])
                    : s.intl.formatToPlainString(s.t["D/FWJf"], { username: o.ZP.getName(i) }),
            }),
            (0, r.jsx)(c.Z, {
                wishlist: t,
                className: u.grid,
                analyticsLocations: n,
                numWishlistItemsToRecommend: 15,
                maxWishlistItemsToShow: 6,
            }),
        ],
    });
}
