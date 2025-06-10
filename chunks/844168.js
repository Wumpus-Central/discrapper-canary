n.d(t, {
    C: () => o,
    O: () => a
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2025-05_core_product_illustration_migration',
    label: 'Core Product Illustration Migration',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
function o(e) {
    let { enabled: t } = a.useExperiment({ location: e });
    return t;
}
