n.d(t, {
    BK: () => a,
    ZP: () => o,
    kX: () => s
});
var i = n(818083),
    r = n(987338),
    a = (function (e) {
        return (e.MicPushToEnable = 'mic-push-to-enable'), (e.MicButtonMovedLeft = 'mic-button-moved-left'), (e.GroupedButtonsControlColors = 'grouped-buttons-control-colors'), (e.GroupedButtonsRedMic = 'grouped-buttons-red-mic'), e;
    })({});
let s = (0, i.B)({
    kind: 'user',
    id: '2024-12_voice_call_buttons',
    label: 'Voice/Video icon states',
    defaultConfig: {
        mode: 'mic-push-to-enable',
        groupedButtons: !1
    },
    commonTriggerPoint: r.$P.VOICE_CALL,
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
function o(e) {
    return s.useExperiment(e, { autoTrackExposure: !1 });
}
