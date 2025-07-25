n.d(t, { E: () => o });
var r = n(818083),
    i = n(751823);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-06_async_audio_device',
    label: 'Desktop Asynchronous Audio Device Manager Controls',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Desktop Asynchronous Audio Device Manager Controls',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: r } = i.L.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return a.getCurrentConfig(
        { location: t },
        {
            disable: r,
            autoTrackExposure: n
        }
    );
}
