"use strict";
n.d(t, { O: () => s, h: () => a });
var i = n(600975),
    r = n(688151);
let s = (0, i.C)({
    kind: "guild",
    id: "2026-04_voice_invite_suggestion_placement",
    label: "Voice Invite Suggestion Placement",
    commonTriggerPoint: r.$G.VOICE_CALL,
    defaultConfig: { placement: "top" },
    treatments: [
        { id: 0, label: "Control (Top Placement)", config: { placement: "top" } },
        { id: 1, label: "Treatment (Bottom Placement)", config: { placement: "bottom" } },
    ],
});
function a(e, t) {
    return s.useExperiment({ guildId: e.guildId, location: e.location }, { autoTrackExposure: t.autoTrackExposure });
}
