n.d(t, { I: () => l, V: () => a });
let i = (0, n(945810).mj)({
    name: "2026-05-slayer-storefront-shop-shim",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function l(e) {
    let { location: t } = e,
        { enabled: n } = i.useConfig({ location: t });
    return n;
}
function a(e) {
    let { location: t } = e,
        { enabled: n } = i.getConfig({ location: t });
    return n;
}
