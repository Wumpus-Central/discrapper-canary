n.d(t, { r: () => l });
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-12_direct_message_status_indicators",
    label: "Voice/Video status indicators in direct messages",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "On",
            config: { enabled: !0 },
        },
    ],
});
function l(e) {
    let { location: t } = e;
    return r.useExperiment({ location: t });
}
