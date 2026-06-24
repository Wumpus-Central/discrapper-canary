"use strict";
n.d(t, { $i: () => l, GN: () => o, aJ: () => u, ak: () => a, qi: () => r });
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2026-04-clips-v3-runtime",
    defaultConfig: { enableClipsV3: !1, enableClipsV3ML: !1 },
    variations: { 1: { enableClipsV3: !0, enableClipsV3ML: !1 }, 2: { enableClipsV3: !0, enableClipsV3ML: !0 } },
});
function r(e) {
    return i.getConfig({ location: e }).enableClipsV3;
}
let s = null;
function a(e) {
    s = e;
}
function o(e) {
    return null != s ? s : r(e) ? "v3" : "v1";
}
function l(e) {
    let { enableClipsV3: t, enableClipsV3ML: n } = i.getConfig({ location: e });
    return t && n;
}
function u(e) {
    let { enableClipsV3: t, enableClipsV3ML: n } = i.useConfig({ location: e });
    return t && n;
}
