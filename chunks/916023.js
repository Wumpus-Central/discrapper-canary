n.d(t, {
    Jw: () => s,
    kt: () => i,
    xD: () => a,
});
let r = (0, n(945810).mj)({
    name: "2025-12-social-layer-storefront-user-experiment",
    kind: "user",
    defaultConfig: {
        enabled: !1,
        wishlistRetargetingEnabled: !1,
    },
    variations: {
        0: {
            enabled: !1,
            wishlistRetargetingEnabled: !1,
        },
        1: {
            enabled: !0,
            wishlistRetargetingEnabled: !1,
        },
        2: {
            enabled: !0,
            wishlistRetargetingEnabled: !0,
        },
    },
});

function i(e) {
    let { location: t } = e;
    return r.useConfig({
        location: t,
    }).enabled;
}

function a(e) {
    let { location: t } = e;
    return r.getConfig({
        location: t,
    }).enabled;
}

function s(e) {
    let { location: t } = e;
    return r.useConfig({
        location: t,
    }).wishlistRetargetingEnabled;
}
