n.d(t, { D: () => o });
var r = n(818083),
    i = n(772209);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-03_user_profile_voice_activity_card_status',
    label: 'User Profile Voice Activity Card Status Experiment',
    defaultConfig: { channelStatusEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Channel status enabled',
            config: { channelStatusEnabled: !0 }
        }
    ]
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.q)({
            location: t,
            autoTrackExposure: n
        });
    return a.useExperiment(
        { location: t },
        {
            autoTrackExposure: n,
            disable: r
        }
    );
}
