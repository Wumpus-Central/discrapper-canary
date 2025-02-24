n.d(t, { h: () => a });
var r = n(818083),
    o = n(46140);
let s = (0, r.B)({
    id: '2025-02_quest_home_static_image',
    kind: 'user',
    label: 'Quest Home Static Image Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { quest: t, location: n } = e,
        { enabled: r } = s.useExperiment({ location: n }, { autoTrackExposure: !1 });
    return !!t.config.features.includes(o.S7.QUEST_HOME_FORCE_STATIC_IMAGE) && (s.trackExposure({ location: n }), r);
}
