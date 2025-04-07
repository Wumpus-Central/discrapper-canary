r.d(t, { ic: () => l });
let n = (0, r(818083).B)({
    kind: 'user',
    id: '2025-02_show_popout_on_delayed_hover',
    label: 'Show Profile Popout On Delayed Hover Experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable showing profile popout on delayed hover',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: r = !0 } = e,
        { enabled: l } = n.useExperiment({ location: t }, { autoTrackExposure: r });
    return l;
}
