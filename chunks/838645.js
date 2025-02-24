n.d(t, { s8: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2025-02_tigger_pawtect',
    label: 'Tigger pawtect',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Tigger pawtect',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    let { location: t } = e;
    return r.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
