n.d(t, {
    OS: () => o,
    xD: () => s,
});
var r = n(945810),
    i = n(170887);
let a = (0, r.mj)({
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
        n = a.useConfig({
            location: t,
        }).enabled,
        r = (0, i.A)({
            location: t,
        });
    return n && r;
}

function o(e) {
    let { location: t } = e,
        n = s({
            location: t,
        }),
        r = a.useConfig({
            location: t,
        });
    return n && r.shouldShowShopBannerWhenWishlistEmpty;
}
