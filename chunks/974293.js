"use strict";
n.d(t, { $i: () => a, GN: () => s, aJ: () => o, qi: () => r });
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-clips-v3-runtime",
    defaultConfig: { enableClipsV3: !1, enableClipsV3ML: !1 },
    variations: { 1: { enableClipsV3: !0, enableClipsV3ML: !1 }, 2: { enableClipsV3: !0, enableClipsV3ML: !0 } },
});
function r() {
    return i.getConfig({ location: "isClipsV3Enabled" }).enableClipsV3;
}
function s() {
    return r() ? "v3" : "v1";
}
function a() {
    let { enableClipsV3: e, enableClipsV3ML: t } = i.getConfig({ location: "isClipsV3MLEnabled" });
    return e && t;
}
function o() {
    let { enableClipsV3: e, enableClipsV3ML: t } = i.useConfig({ location: "isClipsV3MLEnabled" });
    return e && t;
}
