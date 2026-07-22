n.d(t, { W: () => i });
let r = (0, n(945810).mj)({
    name: "2026-03-shop-fiat-prioritization",
    kind: "user",
    defaultConfig: { prioritizeFiat: !1 },
    variations: { 0: { prioritizeFiat: !1 }, 1: { prioritizeFiat: !0 } },
});
function i(e) {
    return r.useConfig({ location: e }).prioritizeFiat;
}
