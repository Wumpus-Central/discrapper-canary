"use strict";
n.d(t, { sK: () => o, AL: () => r, RK: () => a });
var i = n(945810);
n(506774);
let r = "private_channel_obfuscation",
    s = (0, i.mj)({
        name: "2026-02-private-channel-hiding",
        kind: "user",
        defaultConfig: { enableObfuscation: !1, enableIntegrityCheck: !1 },
        variations: {
            1: { enableObfuscation: !0, enableIntegrityCheck: !1 },
            2: { enableObfuscation: !0, enableIntegrityCheck: !0 },
            3: { enableObfuscation: !1, enableIntegrityCheck: !1 },
        },
    });
function a(e) {
    return s.getConfig({ location: e }).enableObfuscation;
}
function o(e) {
    return s.useConfig({ location: e }).enableObfuscation;
}
