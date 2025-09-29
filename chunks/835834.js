n.d(t, { R: () => i });
let r = (0, n(427164).le)({
    name: "2025-09-activity-status-disable-verb",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i(e) {
    return r.getConfig({ location: e }).enabled;
}
