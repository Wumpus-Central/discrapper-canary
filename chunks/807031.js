r.d(n, {
    KR: function () {
        return a;
    },
    wC: function () {
        return o;
    }
});
let i = (0, r(818083).B)({
    kind: 'user',
    id: '2024-09_voice_channel_blocked_user_warning',
    label: 'Voice Channel Blocked User Warning',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show blocked user warning in voice channel as a modal',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: n } = e;
    return i.useExperiment({ location: n }, { autoTrackExposure: !0 }).enabled;
}
function o(e) {
    let { location: n } = e;
    return i.getCurrentConfig({ location: n }, { autoTrackExposure: !0 }).enabled;
}
