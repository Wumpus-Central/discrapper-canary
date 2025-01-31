n.d(t, { oV: () => r });
let i = (0, n(818083).B)({
    kind: 'user',
    id: '2023-09_iar_user_reporting',
    label: 'Safety Experience IAR User Reporting',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    return i.useExperiment({ location: e }, { autoTrackExposure: !0 }).enabled;
}
