"use strict";
n.d(t, { L: () => a, a: () => r });
let a = (0, n(600975).C)({
    kind: "guild",
    id: "2026-01_voice_channel_duration_mobile",
    label: "Voice Channel Duration (Mobile)",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Display the duration next to the Voice Channel", config: { enabled: !0 } }],
});
function r(e, t) {
    return a.useExperiment({ guildId: e, location: t }).enabled;
}
