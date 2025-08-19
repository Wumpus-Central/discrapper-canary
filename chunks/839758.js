n.d(t, { n: () => o });
var r = n(818083),
    i = n(751823);
let a = (0, r.B)({
    kind: "user",
    id: "2025-08_noise_cancellation_during_processing",
    label: "Noise Cancellation During WebRTC Processing",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enabled",
            config: { enabled: !0 },
        },
    ],
});
function o(e) {
    let { location: t, autoTrackExposure: n = !0, disable: r = !1 } = e,
        { isInHoldout: o } = i.L.getCurrentConfig(
            { location: t },
            {
                disable: r,
                autoTrackExposure: n,
            },
        );
    return a.getCurrentConfig(
        { location: t },
        {
            disable: r || o,
            autoTrackExposure: n,
        },
    );
}
