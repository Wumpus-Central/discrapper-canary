r.d(n, {
    BK: function () {
        return i;
    },
    ZP: function () {
        return l;
    },
    kX: function () {
        return s;
    }
});
var i,
    a = r(818083),
    o = r(987338);
!(function (e) {
    (e.MicPushToEnable = 'mic-push-to-enable'), (e.MicButtonMovedLeft = 'mic-button-moved-left'), (e.GroupedButtonsControlColors = 'grouped-buttons-control-colors'), (e.GroupedButtonsRedMic = 'grouped-buttons-red-mic');
})(i || (i = {}));
let s = (0, a.B)({
    kind: 'user',
    id: '2024-12_voice_call_buttons',
    label: 'Voice/Video icon states',
    defaultConfig: {
        mode: 'mic-push-to-enable',
        groupedButtons: !1
    },
    commonTriggerPoint: o.$P.VOICE_CALL,
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
function l(e) {
    return s.useExperiment(e, { autoTrackExposure: !1 });
}
