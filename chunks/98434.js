"use strict";
n.d(t, { e: () => i });
let r = (0, n(945810).mj)({
        name: "2026-01-collectibles-assets-new-url",
        kind: "user",
        defaultConfig: { enableNewAssetUrl: !1 },
        variations: { 0: { enableNewAssetUrl: !1 }, 1: { enableNewAssetUrl: !0 } },
    }),
    i = (e) => r.getConfig({ location: e }).enableNewAssetUrl;
