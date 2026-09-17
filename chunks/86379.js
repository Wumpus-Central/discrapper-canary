n.d(t, { Hp: () => r, dw: () => a });
var l = n(945810),
    i = n(477421);
let s = (0, l.mj)({
    name: "2026-03-block-purchases",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r() {
    let { enabled: e } = s.useConfig({ location: "c519a9_1" }),
        { defaultBillingCountryCode: t } = (0, i.A)();
    return e || "RU" === t;
}
function a() {
    let { enabled: e } = s.useConfig({ location: "dc120b_3" });
    return e;
}
