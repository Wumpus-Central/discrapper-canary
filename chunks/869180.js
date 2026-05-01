t.d(l, { L: () => a, a: () => i });
let a = (0, t(600975).C)({
    kind: "guild",
    id: "2026-01_voice_channel_duration_mobile",
    label: "Voice Channel Duration (Mobile)",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Display the duration next to the Voice Channel", config: { enabled: !0 } }],
});
function i(e, l) {
    return a.useExperiment({ guildId: e, location: l }).enabled;
}
