n.d(t, { O: () => o });
var s = n(818083),
    r = n(977156);
let a = (0, s.B)({
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
    o = (e) => {
        let { location: t, autoTrackExposure: n = !1 } = e,
            s = (0, r.Zy)({ location: t }),
            { enabled: o } = a.useExperiment({ location: t }, { autoTrackExposure: n });
        return s && o;
    };
