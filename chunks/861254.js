n.d(t, {
    BK: () => o,
    ZP: () => s,
    kX: () => a
});
var r = n(818083),
    i = n(987338),
    o = (function (e) {
        return (e.MicPushToEnable = 'mic-push-to-enable'), (e.MicButtonMovedLeft = 'mic-button-moved-left'), (e.GroupedButtonsControlColors = 'grouped-buttons-control-colors'), (e.GroupedButtonsRedMic = 'grouped-buttons-red-mic'), e;
    })({});
let a = (0, r.B)({
    kind: 'user',
    id: '2024-12_voice_call_buttons',
    label: 'Voice/Video icon states',
    defaultConfig: {
        mode: 'mic-push-to-enable',
        groupedButtons: !1
    },
    commonTriggerPoint: i.$P.VOICE_CALL,
    treatments: [
        {
            id: 1,
            label: 'Microphone button moved to left',
            config: {
                mode: 'mic-button-moved-left',
                groupedButtons: !1
            }
        },
        {
            id: 2,
            label: 'Grouped buttons with control colors',
            config: {
                mode: 'grouped-buttons-control-colors',
                groupedButtons: !0
            }
        },
        {
            id: 3,
            label: 'Grouped buttons with only red mic',
            config: {
                mode: 'grouped-buttons-red-mic',
                groupedButtons: !0
            }
        }
    ]
});
function s(e) {
    return a.useExperiment(e, { autoTrackExposure: !1 });
}
