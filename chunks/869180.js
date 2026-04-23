"use strict";
n.d(t, { L: () => l, a: () => a });
let l = (0, n(600975).C)({
    kind: "guild",
    id: "2026-01_voice_channel_duration_mobile",
    label: "Voice Channel Duration (Mobile)",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Display the duration next to the Voice Channel", config: { enabled: !0 } }],
});
function a(e, t) {
    return l.useExperiment({ guildId: e, location: t }).enabled;
}
