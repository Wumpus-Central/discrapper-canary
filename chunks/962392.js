n.d(t, { O: () => a, h: () => r });
var i = n(600975),
    l = n(688151);
let a = (0, i.C)({
    kind: "guild",
    id: "2026-04_voice_invite_suggestion_placement",
    label: "Voice Invite Suggestion Placement",
    commonTriggerPoint: l.$G.VOICE_CALL,
    defaultConfig: { placement: "top" },
    treatments: [
        { id: 0, label: "Control (Top Placement)", config: { placement: "top" } },
        { id: 1, label: "Treatment (Bottom Placement)", config: { placement: "bottom" } },
    ],
});
function r(e, t) {
    return a.useExperiment({ guildId: e.guildId, location: e.location }, { autoTrackExposure: t.autoTrackExposure });
}
