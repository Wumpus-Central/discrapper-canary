n.d(t, { bu: () => i });
let r = (0, n(818083).B)({
    id: '2025-05_safety_flows',
    label: 'Safety Flows',
    kind: 'user',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
