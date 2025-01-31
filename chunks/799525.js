n.d(t, { U: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2024-09_test_child_2_safety_xp_holdout',
    label: 'Holdout experiment',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables the holdout experiment',
            config: { enabled: !0 }
        }
    ]
});
function r() {
    let { enabled: e } = i.getCurrentConfig({ location: '686da2_1' }, { autoTrackExposure: !0 });
    return e;
}
