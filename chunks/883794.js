n.d(t, { U: () => a });
var r = n(818083),
    i = n(751823);
let o = (0, r.B)({
    kind: "user",
    id: "2025-07_agc2",
    label: "WebRTC AGC2",
    defaultConfig: { useAGC2: !1 },
    treatments: [
        {
            id: 1,
            label: "WebRTC defaults",
            config: {
                useAGC2: !0,
                enableAnalog: !1,
                enableDigital: !0,
                headroom_db: 5,
                max_gain_db: 50,
                initial_gain_db: 15,
                max_gain_change_db_per_second: 6,
                max_output_noise_level_dbfs: -50,
                fixed_gain_db: 0,
            },
        },
    ],
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0, disable: r = !1 } = e,
        { isInHoldout: a } = i.L.getCurrentConfig(
            { location: t },
            {
                disable: r,
                autoTrackExposure: n,
            },
        );
    return o.getCurrentConfig(
        { location: t },
        {
            disable: r || a,
            autoTrackExposure: n,
        },
    );
}
