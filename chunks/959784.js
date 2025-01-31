n.d(t, {
    NR: () => a,
    Ob: () => l,
    ZI: () => s,
    m1: () => u,
    uc: () => o
});
var i = n(987170),
    r = n(987338);
let a = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_vanilla',
        label: 'CTP payment flow started - A/A test - Vanilla',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    s = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_filters_',
        label: 'CTP payment flow started - A/A test - Filters',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    o = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_multiple_buckets',
        label: 'CTP payment flow started - A/A test - Multiple buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment 1',
                config: { doSomething: !0 }
            },
            {
                id: 2,
                label: 'Treatment 2',
                config: { doSomething: !0 }
            }
        ]
    }),
    l = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_everyone',
        label: 'CTP payment flow started - A/A test - Everyone',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    u = (0, i.Z)({
        kind: 'user',
        id: '2024-07_ctp_payment_flow_started_uneven_buckets_',
        label: 'CTP payment flow started - A/A test - Uneven buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: r.$P.PAYMENT_FLOW_STARTED,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    });
