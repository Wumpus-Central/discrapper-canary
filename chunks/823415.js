n.d(t, { ic: () => i });
let r = (0, n(818083).B)({
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
function i(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { enabled: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return i;
}
