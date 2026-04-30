l.d(t, { A: () => i });
let n = (0, l(945810).mj)({
    name: "2026-02-referral-reminder-dc",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e;
    return n.useConfig({ location: t }).enabled;
}
