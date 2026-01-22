n.d(t, {
    u: () => i,
});
let r = (0, n(945810).mj)({
    name: "2025-12-user-profile-wishlist-popout",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        showRecommendations: !1,
    },
    variations: {
        0: {
            enabled: !1,
            showRecommendations: !1,
        },
        1: {
            enabled: !0,
            showRecommendations: !1,
        },
        2: {
            enabled: !0,
            showRecommendations: !0,
        },
    },
});

function i(e) {
    let { location: t } = e;
    return r.useConfig({
        location: t,
    });
}
