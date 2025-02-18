n.d(t, {
    H1: () => r,
    s8: () => l
});
let a = (0, n(818083).B)({
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
function r(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
function l(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !0 }).enabled;
}
