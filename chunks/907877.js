n.d(t, {
    Q: () => a,
    f: () => r
});
var i = n(818083),
    l = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-11_teen_defaults__message_requests',
    label: 'New defaults for message requests',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: l.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable the new defaults for message requests',
            config: { enabled: !0 }
        }
    ]
});
function r(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
