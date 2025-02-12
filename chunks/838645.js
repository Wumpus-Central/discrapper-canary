n.d(e, {
    H1: () => r,
    s8: () => o
});
let i = (0, n(818083).B)({
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
function r(t) {
    let { location: e } = t;
    return i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }).enabled;
}
function o(t) {
    let { location: e } = t;
    return i.getCurrentConfig({ location: e }, { autoTrackExposure: !0 }).enabled;
}
