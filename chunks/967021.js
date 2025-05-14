n.d(t, { vi: () => o });
var r = n(818083),
    i = n(875527);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-05_flamingo_prefetch',
    label: 'Flamingo Prefetch',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled - Prefetch (Download on Popout)',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: t, autoTrackExposure: n } = e,
        r = (0, i.Hu)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: o } = a.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: __OVERLAY__ || !r
            }
        );
    return o;
}
