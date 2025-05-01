n.d(t, { t: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_voice_message_playback_settings',
    label: 'Voice Message Playback Settings',
    defaultConfig: { playbackSettingsEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable voice message playback speed and position settings',
            config: { playbackSettingsEnabled: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment({ location: e });
}
