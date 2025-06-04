n.d(t, {
    A: () => a,
    u: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-05_change_disconnect_icon_experiment',
    label: 'Change Disconnect Icon',
    defaultConfig: {
        changeLeaveCallAndActivityIcons: !1,
        isRTCIconRed: !1
    },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: 'Use door icon',
            config: {
                changeLeaveCallAndActivityIcons: !0,
                isRTCIconRed: !1
            }
        },
        {
            id: 2,
            label: 'Use door icon with red RTC icon',
            config: {
                changeLeaveCallAndActivityIcons: !0,
                isRTCIconRed: !0
            }
        }
    ]
});
function a(e) {
    return o.useExperiment(e, { autoTrackExposure: !1 });
}
