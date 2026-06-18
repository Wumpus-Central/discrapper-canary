t.d(n, { I: () => i, V: () => a });
let l = (0, t(945810).mj)({
    name: "2026-05-slayer-storefront-shop-shim",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    let { location: n } = e,
        { enabled: t } = l.useConfig({ location: n });
    return t;
}
function a(e) {
    let { location: n } = e,
        { enabled: t } = l.getConfig({ location: n });
    return t;
}
