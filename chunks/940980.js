"use strict";
s.d(t, { W: () => r });
let n = (0, s(945810).mj)({
        name: "2026-03-shop-fiat-prioritization",
        kind: "user",
        defaultConfig: { prioritizeFiat: !1 },
        variations: { 0: { prioritizeFiat: !1 }, 1: { prioritizeFiat: !0 } },
    }),
    r = (e) => n.useConfig({ location: e }).prioritizeFiat;
