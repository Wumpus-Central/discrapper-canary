s.d(t, { B: () => l, X: () => n });
let r = (0, s(945810).mj)({
    name: "2026-03-slayer-storefront-shop-tab",
    kind: "user",
    defaultConfig: { enabled: !1, useGameShopsDropdown: !1 },
    variations: {
        0: { enabled: !1, useGameShopsDropdown: !1 },
        1: { enabled: !0, useGameShopsDropdown: !1 },
        2: { enabled: !0, useGameShopsDropdown: !0 },
    },
});
function l(e) {
    let { location: t } = e,
        { enabled: s, useGameShopsDropdown: l } = r.useConfig({ location: t });
    return s && !l;
}
function n(e) {
    let { location: t } = e,
        { enabled: s, useGameShopsDropdown: l } = r.useConfig({ location: t });
    return s && l;
}
