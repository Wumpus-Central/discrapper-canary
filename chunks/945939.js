"use strict";
n.d(t, { De: () => a, Q6: () => i });
let r = (0, n(945810).mj)({
        name: "2026-03-private-profiles-strict",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    }),
    i = (e) => r.useConfig({ location: e }).enabled,
    a = (e) => r.getConfig({ location: e }).enabled;
