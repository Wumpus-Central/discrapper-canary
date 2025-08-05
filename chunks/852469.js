n.d(t, { Z: () => s });
var i = n(524437),
    o = n(995774),
    l = n(509613),
    a = n(695346),
    r = n(388032);
let s = (0, l.Em)('ReactionNotifications', {
    useTitle: () => r.intl.string(r.t.Rq0NFh),
    options: [
        {
            label: () => r.intl.string(r.t['9x/Rtb']),
            value: i.Ns.NOTIFICATIONS_ENABLED
        },
        {
            label: () => r.intl.string(r.t.fJAbQU),
            value: i.Ns.ONLY_DMS
        },
        {
            label: () => r.intl.string(r.t['xu+UDQ']),
            value: i.Ns.NOTIFICATIONS_DISABLED
        }
    ],
    useValue: a.fz.useSetting,
    setValue: (e) => (0, o.MR)(e, a.fz.getSetting())
});
