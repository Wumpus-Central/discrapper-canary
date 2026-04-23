n.d(t, { Hp: () => l, cx: () => E, dw: () => o });
var i = n(600975),
    r = n(945810),
    a = n(477421);
let s = (0, i.C)({
        kind: "user",
        id: "2022-03_block_russian_purchases",
        label: "Block purchases based on country",
        defaultConfig: { paymentsBlocked: !1 },
        treatments: [{ id: 1, label: "Payments Blocked", config: { paymentsBlocked: !0 } }],
    }),
    _ = (0, r.mj)({
        name: "2026-03-block-purchases",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l() {
    let { paymentsBlocked: e } = s.useExperiment({ location: "c519a9_1" }, { autoTrackExposure: !1 }),
        { enabled: t } = _.useConfig({ location: "c519a9_1" }),
        { defaultBillingCountryCode: n } = (0, a.A)();
    return e || t || "RU" === n;
}
function o() {
    let { paymentsBlocked: e } = s.useExperiment({ location: "dc120b_3" }, { autoTrackExposure: !1 }),
        { enabled: t } = _.useConfig({ location: "dc120b_3" });
    return e || t;
}
function E() {
    let { paymentsBlocked: e } = s.getCurrentConfig({ location: "1ee357_1" }, { autoTrackExposure: !1 }),
        { enabled: t } = _.getConfig({ location: "1ee357_1" });
    return e || t;
}
