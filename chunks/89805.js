n.d(t, {
    NR: () => o,
    Ob: () => l,
    ZI: () => a,
    m1: () => c,
    uc: () => s
});
var r = n(987170),
    i = n(987338);
let o = (0, r.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_user_settings_vanilla',
        label: 'CTP open user settings - A/A test - Vanilla',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.OPEN_USER_SETTINGS,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    a = (0, r.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_user_settings_filters',
        label: 'CTP open user settings - A/A test - Filters',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.OPEN_USER_SETTINGS,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    s = (0, r.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_user_settings_multiple_buckets',
        label: 'CTP open user settings - A/A test - Multiple buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.OPEN_USER_SETTINGS,
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
    l = (0, r.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_user_settings_everyone',
        label: 'CTP open user settings - A/A test - Everyone',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.OPEN_USER_SETTINGS,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    }),
    c = (0, r.Z)({
        kind: 'user',
        id: '2024-07_ctp_open_user_settings_uneven_buckets',
        label: 'CTP open user settings - A/A test - Uneven buckets',
        defaultConfig: { doSomething: !1 },
        commonTriggerPoint: i.$P.OPEN_USER_SETTINGS,
        treatments: [
            {
                id: 1,
                label: 'Treatment',
                config: { doSomething: !0 }
            }
        ]
    });
