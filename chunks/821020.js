n.d(t, { L: () => s });
var i = n(818083),
    r = n(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2025-04_desktop_notification_center',
    label: 'New Notification Center (Desktop)',
    defaultConfig: { notificationCenterVariant: null },
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
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
