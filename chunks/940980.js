i.d(e, { W: () => n });
let l = (0, i(945810).mj)({
        name: "2026-03-shop-fiat-prioritization",
        kind: "user",
        defaultConfig: { prioritizeFiat: !1 },
        variations: { 0: { prioritizeFiat: !1 }, 1: { prioritizeFiat: !0 } },
    }),
    n = (t) => l.useConfig({ location: t }).prioritizeFiat;
