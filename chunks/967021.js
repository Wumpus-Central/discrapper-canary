n.d(t, {
    HM: () => i,
    J_: () => a
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-05_flamingo_prefetch',
    label: 'Flamingo Prefetch (Download Experiments)',
    defaultConfig: {
        isPrefetchEnabled: !1,
        isDownloadIconEnabled: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Prefetch (Download on Popout)',
            config: {
                isPrefetchEnabled: !0,
                isDownloadIconEnabled: !1
            }
        },
        {
            id: 2,
            label: 'Download Icon',
            config: {
                isPrefetchEnabled: !1,
                isDownloadIconEnabled: !0
            }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n } = e,
        { isPrefetchEnabled: i } = r.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: __OVERLAY__
            }
        );
    return i;
}
function a(e) {
    let { location: t, autoTrackExposure: n, disable: i } = e,
        { isDownloadIconEnabled: a } = r.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: __OVERLAY__ || i
            }
        );
    return a;
}
