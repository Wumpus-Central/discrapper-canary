n.d(t, {
    hS: () => s,
    yc: () => o,
});
var r = n(427164),
    i = n(283066);
let a = (0, r.le)({
    name: "2025-09-wishlist-in-dm-gifting-flow",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        shouldShowShopBannerWhenWishlistEmpty: !1,
    },
    variations: {
        0: {
            enabled: !1,
            shouldShowShopBannerWhenWishlistEmpty: !1,
        },
        1: {
            enabled: !0,
            shouldShowShopBannerWhenWishlistEmpty: !0,
        },
        2: {
            enabled: !0,
            shouldShowShopBannerWhenWishlistEmpty: !1,
        },
    },
});
function o(e) {
    let { location: t } = e,
        n = a.useConfig({ location: t }).enabled,
        r = (0, i.Z)({ location: t });
    return n && r;
}
function s(e) {
    let { location: t } = e,
        n = o({ location: t }),
        r = a.useConfig({ location: t });
    return n && r.shouldShowShopBannerWhenWishlistEmpty;
}
