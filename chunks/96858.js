n.d(t, { hn: () => a, qw: () => r });
let i = (0, n(945810).mj)({
    name: "2026-10-embedded-app-shim-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r(e) {
    return i.useConfig({ location: e }).enabled ? 2 : 1;
}
function a(e) {
    return i.getConfig({ location: e }).enabled ? 2 : 1;
}
