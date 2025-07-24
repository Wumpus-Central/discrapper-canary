n.d(t, { Z: () => r });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-07_agc2',
    label: 'WebRTC AGC2',
    defaultConfig: { useAGC2: !1 },
    treatments: [
        {
            id: 1,
            label: 'WebRTC defaults',
            config: {
                useAGC2: !0,
                enableAnalog: !1,
                enableDigital: !0,
                headroom_db: 5,
                max_gain_db: 50,
                initial_gain_db: 15,
                max_gain_change_db_per_second: 6,
                max_output_noise_level_dbfs: -50,
                fixed_gain_db: 0
            }
        }
    ]
});
