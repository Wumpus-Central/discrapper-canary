"use strict";
n.d(t, { Hp: () => l, cx: () => c, dw: () => u });
var i = n(600975),
    r = n(945810),
    s = n(477421);
let a = (0, i.C)({
        kind: "user",
        id: "2022-03_block_russian_purchases",
        label: "Block purchases based on country",
        defaultConfig: { paymentsBlocked: !1 },
        treatments: [{ id: 1, label: "Payments Blocked", config: { paymentsBlocked: !0 } }],
    }),
    o = (0, r.mj)({
        name: "2026-03-block-purchases",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l() {
    let { paymentsBlocked: e } = a.useExperiment({ location: "c519a9_1" }, { autoTrackExposure: !1 }),
        { enabled: t } = o.useConfig({ location: "c519a9_1" }),
        { defaultBillingCountryCode: n } = (0, s.A)();
    return e || t || "RU" === n;
}
function u() {
    let { paymentsBlocked: e } = a.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        { enabled: t } = o.useConfig({ location: "dc120b_3" });
    return e || t;
}
function c() {
    let { paymentsBlocked: e } = a.getCurrentConfig({ location: "1ee357_1" }, { autoTrackExposure: !1 }),
        { enabled: t } = o.getConfig({ location: "1ee357_1" });
    return e || t;
}
