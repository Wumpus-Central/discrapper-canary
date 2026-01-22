n.d(t, {
    e: () => i,
});
let r = (0, n(600975).C)({
    kind: "user",
    id: "2025-03_user_profile_voice_activity_card_status",
    label: "User Profile Voice Activity Card Status Experiment",
    defaultConfig: {
        channelStatusEnabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Channel status enabled",
            config: {
                channelStatusEnabled: !0,
            },
        },
    ],
});

function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e;
    return r.useExperiment(
        {
            location: t,
        },
        {
            autoTrackExposure: n,
        },
    );
}
