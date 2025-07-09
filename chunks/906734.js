n.d(t, {
    A: () => s,
    F: () => a
});
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    id: '2025-06_display_name_styles',
    kind: 'user',
    label: 'Display Name Styles',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enables the display name styles Nitro perk.',
            config: { enabled: !0 }
        }
    ]
});
function a(e) {
    let { location: t } = e;
    return s.useExperiment({ location: t }).enabled;
}
