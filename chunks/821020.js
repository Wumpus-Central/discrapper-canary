n.d(t, { L: () => l });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: 'user',
    id: '2025-04_desktop_notification_center',
    label: 'New Notification Center (Desktop)',
    defaultConfig: { notificationCenterVariant: null },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Show notification center in popout',
            config: { notificationCenterVariant: 'popout' }
        },
        {
            id: 2,
            label: 'Show notification center in sidebar',
            config: { notificationCenterVariant: 'sidebar' }
        }
    ]
});
