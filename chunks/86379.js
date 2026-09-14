n.d(t, { Hp: () => s, dw: () => l });
var i = n(945810),
    r = n(477421);
let a = (0, i.mj)({
    name: "2026-03-block-purchases",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s() {
    let { enabled: e } = a.useConfig({ location: "c519a9_1" }),
        { defaultBillingCountryCode: t } = (0, r.A)();
    return e || "RU" === t;
}
function l() {
    let { enabled: e } = a.useConfig({ location: "dc120b_3" });
    return e;
}
