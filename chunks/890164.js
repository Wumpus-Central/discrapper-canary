"use strict";
n.d(t, { W1: () => o, lX: () => a });
var r = n(945810),
    i = n(945939);
let s = (0, r.mj)({
        name: "2026-02-private-profiles",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    a = (e) => {
        let t = s.useConfig({ location: e }).enabled,
            n = (0, i.Q6)(e);
        return t || n;
    },
    o = (e) => s.getConfig({ location: e }).enabled || (0, i.De)(e);
