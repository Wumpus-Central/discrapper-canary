n.d(t, {
    Lk: () => u,
    jP: () => o,
    u3: () => c,
    v8: () => d
});
var i,
    r,
    s,
    l = n(818083),
    a = n(987338),
    o = 12633 == n.j ? (((i = {}).POPOUT = 'popout'), (i.SIDEBAR = 'sidebar'), (i.LEGACY = 'legacy'), i) : null,
    c = 12633 == n.j ? (((r = {}).SERVER_RAIL_TOP = 'server-rail-top'), (r.SERVER_RAIL_BOTTOM = 'server-rail-bottom'), r) : null,
    d = 12633 == n.j ? (((s = {}).TABS = 'tabs'), (s.DROPDOWN = 'dropdown'), s) : null;
let u = (0, l.B)({
    kind: 'user',
    id: '2025-04_desktop_notification_center',
    label: 'New Notification Center (Desktop)',
    defaultConfig: {
        notificationCenterVariant: null,
        entrypoint: null,
        filterStyle: null
    },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Show notification center in popout',
            config: {
                notificationCenterVariant: 'popout',
                entrypoint: 'server-rail-top',
                filterStyle: 'dropdown'
            }
        },
        {
            id: 2,
            label: 'Show notification center in sidebar',
            config: {
                notificationCenterVariant: 'sidebar',
                entrypoint: 'server-rail-top',
                filterStyle: 'dropdown'
            }
        },
        {
            id: 3,
            label: 'Legacy inbox with server rail entrypoint',
            config: {
                notificationCenterVariant: 'legacy',
                entrypoint: 'server-rail-top',
                filterStyle: null
            }
        },
        {
            id: 4,
            label: 'Panel variant with bottom rail entrypoint',
            config: {
                notificationCenterVariant: 'sidebar',
                entrypoint: 'server-rail-bottom',
                filterStyle: 'dropdown'
            }
        }
    ]
});
