n.d(t, {
    Do: () => s,
    JX: () => a,
    S2: () => o
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-10_stealth_remediation',
    label: 'A new user remediation tool',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable the new user remediation tool',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t } = e;
    return o.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function s(e) {
    let { location: t } = e;
    return o.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
