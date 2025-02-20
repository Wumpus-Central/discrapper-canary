n.d(t, { O: () => a });
var r = n(818083),
    o = n(977156);
let s = (0, r.B)({
        id: '2024-03_quest_bar_progress_cta',
        kind: 'user',
        label: 'Quest Bar Progress CTA',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Quest Bar Progress CTA enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e,
            r = (0, o.Zy)({ location: t }),
            { enabled: a } = s.useExperiment({ location: t }, { autoTrackExposure: n });
        return r && a;
    };
