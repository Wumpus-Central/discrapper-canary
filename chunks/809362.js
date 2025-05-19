n.d(t, {
    I: () => a,
    p: () => l
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-04_culture_creation_holdout',
    label: 'Culture Creation Holdout',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { inHoldout: !1 },
    treatments: [
        {
            id: 1,
            label: 'In Holdout',
            config: { inHoldout: !0 }
        }
    ]
});
function a(e) {
    let { inHoldout: t } = l.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t;
}
