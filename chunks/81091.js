"use strict";
n.d(t, { g: () => a, t: () => i });
let r = (0, n(945810).mj)({
        kind: "user",
        name: "2025-10-age-verification-persona",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    i = (e) => r.useConfig({ location: e }).enabled,
    a = (e) => r.getConfig({ location: e }).enabled;
