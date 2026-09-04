n.d(t, { $i: () => r, aJ: () => a });
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-clips-v3-runtime",
    defaultConfig: { enableClipsV3ML: !1 },
    variations: { 1: { enableClipsV3ML: !1 }, 2: { enableClipsV3ML: !0 } },
});
function r(e) {
    return i.getConfig({ location: e }).enableClipsV3ML;
}
function a(e) {
    return i.useConfig({ location: e }).enableClipsV3ML;
}
