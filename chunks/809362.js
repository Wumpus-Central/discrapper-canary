n.d(t, { I: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-04_culture_creation_holdout',
    label: 'Culture Creation Holdout',
    defaultConfig: { inHoldout: !1 },
    treatments: [
        {
            id: 1,
            label: 'In Holdout',
            config: { inHoldout: !0 }
        }
    ]
});
function i(e) {
    let { inHoldout: t } = r.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
