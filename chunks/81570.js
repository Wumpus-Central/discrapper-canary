n.d(t, { T: () => a });
var r = n(818083),
    i = n(772209);
let o = (0, r.B)({
    kind: 'user',
    id: '2025-02_reaction_reply',
    label: 'Reaction Reply Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable reaction reply',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        r = (0, i.q)({
            location: t,
            autoTrackExposure: n
        }),
        { enabled: a } = o.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                disable: r
            }
        );
    return a;
}
