n.d(t, {
    $: () => s,
    y: () => l
});
var r,
    i = n(818083),
    s = (((r = {}).NEVER_SHOW = 'NEVER_SHOW'), (r.ALWAYS_SHOW = 'ALWAYS_SHOW'), r);
let a = (0, i.B)({
    id: '2025-02_quest_home_moved_callout',
    kind: 'user',
    label: 'Quest Home Moved Callout Experiment',
    defaultConfig: { variant: 'ALWAYS_SHOW' },
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: { variant: 'ALWAYS_SHOW' }
        },
        {
            id: 2,
            label: 'Hidden',
            config: { variant: 'NEVER_SHOW' }
        }
    ]
});
function l(e) {
    let { location: t } = e;
    return a.useExperiment({ location: t }, { autoTrackExposure: !0 }).variant;
}
