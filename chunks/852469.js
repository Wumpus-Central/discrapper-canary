n.d(t, { Z: () => s });
var i = n(524437),
    o = n(995774),
    l = n(509613),
    r = n(695346),
    a = n(388032);
let s = (0, l.Em)("ReactionNotifications", {
    useTitle: () => a.intl.string(a.t.Rq0NFh),
    options: [
        {
            label: () => a.intl.string(a.t["9x/Rtb"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: () => a.intl.string(a.t.fJAbQU),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: () => a.intl.string(a.t["xu+UDQ"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: r.fz.useSetting,
    setValue: (e) => (0, o.MR)(e, r.fz.getSetting()),
});
