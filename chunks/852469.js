n.d(t, { Z: () => r });
var i = n(524437),
    a = n(995774),
    o = n(281215),
    s = n(695346),
    l = n(388032);
let r = (0, o.Em)('ReactionNotifications', {
    useTitle: () => l.intl.string(l.t.Rq0NFh),
    options: [
        {
            label: () => l.intl.string(l.t['9x/Rtb']),
            value: i.Ns.NOTIFICATIONS_ENABLED
        },
        {
            label: () => l.intl.string(l.t.fJAbQU),
            value: i.Ns.ONLY_DMS
        },
        {
            label: () => l.intl.string(l.t['xu+UDQ']),
            value: i.Ns.NOTIFICATIONS_DISABLED
        }
    ],
    useValue: s.fz.useSetting,
    setValue: (e) => (0, a.MR)(e, s.fz.getSetting())
});
