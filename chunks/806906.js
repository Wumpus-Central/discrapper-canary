n.d(t, { w: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-06_nameplate_mobile_purchasing',
    label: 'Nameplates Mobile Purchasing',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { canPurchaseNameplates: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Mobile Purchasing',
            config: { canPurchaseNameplates: !0 }
        }
    ]
});
