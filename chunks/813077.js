"use strict";
n.d(t, { FW: () => s, wI: () => i });
let r = (0, n(945810).mj)({
        name: "2026-02-store-country-display",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    i = (e) => r.useConfig({ location: e }).enabled,
    s = (e) => r.getConfig({ location: e }).enabled;
