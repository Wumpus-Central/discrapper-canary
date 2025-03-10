n.d(t, { K: () => i });
let r = (0, n(987170).Z)({
    kind: 'guild',
    id: '2025-03_guild_profile_visibility_rollout',
    label: 'Guild Profile Visibility Rollout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Guild Profile Visibility Rollout',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { guildId: t, location: n, autoTrackExposure: i = !0 } = e,
        { enabled: s } = r.useExperiment(
            {
                guildId: t,
                location: n
            },
            { autoTrackExposure: i }
        );
    return s;
}
