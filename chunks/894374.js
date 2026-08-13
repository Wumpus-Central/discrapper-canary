"use strict";
n.d(t, { A: () => r });
let i = (0, n(945810).mj)({
    name: "2026-02-referral-reminder-dc",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).enabled;
}
