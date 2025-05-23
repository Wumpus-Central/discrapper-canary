n.d(t, {
    Z: () => a,
    v: () => l
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-06_plan_selector_cards_nitro_rebrand_experiment',
    label: 'Plan Selector Cards Nitro Rebrand Experiment',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'User sees control plan selector cards',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'User sees nitro rebrand plan selector cards',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t } = e;
    return l.useExperiment({ location: t }, { autoTrackExposure: !0 }).enabled;
}
