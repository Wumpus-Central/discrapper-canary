n.d(t, { Hp: () => o, cx: () => c, dw: () => d });
var i = n(600975),
    a = n(945810),
    r = n(477421);
let s = (0, i.C)({
        kind: "user",
        id: "2022-03_block_russian_purchases",
        label: "Block purchases based on country",
        defaultConfig: { paymentsBlocked: !1 },
        treatments: [{ id: 1, label: "Payments Blocked", config: { paymentsBlocked: !0 } }],
    }),
    l = (0, a.mj)({
        name: "2026-03-block-purchases",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function o() {
    let { paymentsBlocked: e } = s.useExperiment({ location: "c519a9_1" }, { autoTrackExposure: !1 }),
        { enabled: t } = l.useConfig({ location: "c519a9_1" }),
        { defaultBillingCountryCode: n } = (0, r.A)();
    return e || t || "RU" === n;
}
function d() {
    let { paymentsBlocked: e } = s.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        { enabled: t } = l.useConfig({ location: "dc120b_3" });
    return e || t;
}
function c() {
    let { paymentsBlocked: e } = s.getCurrentConfig({ location: "1ee357_1" }, { autoTrackExposure: !1 }),
        { enabled: t } = l.getConfig({ location: "1ee357_1" });
    return e || t;
}
