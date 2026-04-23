r.d(t, { B: () => s, X: () => l });
let n = (0, r(945810).mj)({
    name: "2026-03-slayer-storefront-shop-tab",
    kind: "user",
    defaultConfig: { enabled: !1, useGameShopsDropdown: !1 },
    variations: {
        0: { enabled: !1, useGameShopsDropdown: !1 },
        1: { enabled: !0, useGameShopsDropdown: !1 },
        2: { enabled: !0, useGameShopsDropdown: !0 },
    },
});
function s(e) {
    let { location: t } = e,
        { enabled: r, useGameShopsDropdown: s } = n.useConfig({ location: t });
    return r && !s;
}
function l(e) {
    let { location: t } = e,
        { enabled: r, useGameShopsDropdown: s } = n.useConfig({ location: t });
    return r && s;
}
