n.d(t, {
    Lk: () => l,
    jP: () => a,
    u3: () => o,
    v8: () => s
});
var r = n(818083),
    i = n(987338),
    a = (function (e) {
        return ((e.POPOUT = 'popout'), (e.SIDEBAR = 'sidebar'), (e.LEGACY = 'legacy'), e);
    })({}),
    o = (function (e) {
        return ((e.SERVER_RAIL_TOP = 'server-rail-top'), (e.SERVER_RAIL_BOTTOM = 'server-rail-bottom'), (e.TITLE_BAR_LEFT = 'title-bar-left'), e);
    })({}),
    s = (function (e) {
        return ((e.TABS = 'tabs'), (e.DROPDOWN = 'dropdown'), e);
    })({});
let l = (0, r.B)({
    kind: 'user',
    id: '2025-04_desktop_notification_center',
    label: 'New Notification Center (Desktop)',
    defaultConfig: {
        notificationCenterVariant: null,
        entrypoint: null,
        filterStyle: null
    },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
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
        },
        {
            id: 5,
            label: 'Title bar left with popout variant',
            config: {
                notificationCenterVariant: 'popout',
                entrypoint: 'title-bar-left',
                filterStyle: 'dropdown'
            }
        }
    ]
});
