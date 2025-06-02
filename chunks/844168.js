n.d(t, { C: () => l });
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-05_core_product_illustration_migration',
    label: 'Core Product Illustration Migration',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 0,
            label: 'Control',
            config: { enabled: !1 }
        },
        {
            id: 1,
            label: 'Enable Core Product Illustration Migration',
            config: { enabled: !0 }
        }
    ]
});
function l(e) {
    let { enabled: t } = s.useExperiment({ location: e });
    return t;
}
