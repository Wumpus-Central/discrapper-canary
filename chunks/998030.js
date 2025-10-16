n.d(t, {
    hS: () => l,
    yc: () => s,
});
var r = n(427164),
    i = n(46841),
    a = n(283066);
let o = (0, r.le)({
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
function s(e) {
    let { location: t } = e,
        n = o.useConfig({ location: t }).enabled,
        r = (0, a.Z)({ location: t }),
        s = (0, i.S)({ location: t });
    return n && r && s;
}
function l(e) {
    let { location: t } = e,
        n = s({ location: t }),
        r = o.useConfig({ location: t });
    return n && r.shouldShowShopBannerWhenWishlistEmpty;
}
