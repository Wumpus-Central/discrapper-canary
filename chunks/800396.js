"use strict";
n.d(t, { E: () => l, A: () => o });
var i = n(17928);
let r = (0, n(945810).mj)({
    name: "2026-05-spatial-audio-for-voice",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var a = n(954035),
    s = n(731854);
function l(e) {
    let { enabled: t } = r.getConfig({ location: e }),
        n = a.Ay.supports(s.O5.SPATIAL_AUDIO);
    return t && n;
}
function o(e) {
    let { enabled: t } = r.useConfig({ location: e }),
        n = (0, i.bG)([a.Ay], () => a.Ay.supports(s.O5.SPATIAL_AUDIO));
    return t && n;
}
