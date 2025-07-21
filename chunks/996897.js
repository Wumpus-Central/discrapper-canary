n.d(t, { w: () => o });
var r = n(818083),
    i = n(984134);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-07_device_filtering',
    label: 'Device filtering experiment',
    defaultConfig: { shouldFilterDevicesByFrecency: !1 },
    treatments: [
        {
            id: 1,
            label: 'Filter devices by frecency',
            config: { shouldFilterDevicesByFrecency: !0 }
        }
    ]
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.Y.useExperiment({ location: t }, { autoTrackExposure: n });
    return a.useExperiment(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
