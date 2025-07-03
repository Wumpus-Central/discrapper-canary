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
            label: 'Server Rail Entrypoint + Legacy Inbox',
            config: {
                notificationCenterVariant: 'legacy',
                entrypoint: 'server-rail-top',
                filterStyle: null
            }
        },
        {
            id: 2,
            label: 'Title Bar Entrypoint + Popout',
            config: {
                notificationCenterVariant: 'popout',
                entrypoint: 'title-bar-left',
                filterStyle: 'dropdown'
            }
        },
        {
            id: 3,
            label: 'Server Rail Entrypoint + Sidebar',
            config: {
                notificationCenterVariant: 'sidebar',
                entrypoint: 'server-rail-top',
                filterStyle: 'dropdown'
            }
        },
        {
            id: 4,
            label: 'Server Rail Entrypoint + Popout',
            config: {
                notificationCenterVariant: 'popout',
                entrypoint: 'server-rail-top',
                filterStyle: 'dropdown'
            }
        }
    ]
});
