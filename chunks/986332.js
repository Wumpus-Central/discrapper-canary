n.d(t, { o: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2022-12_channel_notice_redesign',
    label: 'Channel Notice Redesign',
    defaultConfig: {
        showRedesignedChannelNotice: !1,
        showRedesignedLiveChannelNotice: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Show Redesigned Channel Notices',
            config: {
                showRedesignedChannelNotice: !0,
                showRedesignedLiveChannelNotice: !1
            }
        },
        {
            id: 2,
            label: 'Show Redesigned Stage/Event Notices',
            config: {
                showRedesignedChannelNotice: !1,
                showRedesignedLiveChannelNotice: !0
            }
        },
        {
            id: 3,
            label: 'Show Redesigned Channel Notices & Stage/Event Notices',
            config: {
                showRedesignedChannelNotice: !0,
                showRedesignedLiveChannelNotice: !0
            }
        }
    ]
});
function i() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        { showRedesignedChannelNotice: t, showRedesignedLiveChannelNotice: n } = r.useExperiment({ location: 'c0d6eb_1' }, { autoTrackExposure: e });
    return {
        showRedesignedChannelNotice: t,
        showRedesignedLiveChannelNotice: n
    };
}
