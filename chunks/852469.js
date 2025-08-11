n.d(t, { Z: () => r });
var i = n(524437),
    l = n(995774),
    s = n(509613),
    o = n(695346),
    a = n(388032);
let r = (0, s.Em)("ReactionNotifications", {
    useTitle: () => a.intl.string(a.t.Rq0NFh),
    useSubtitle: () => a.intl.string(a.t.oWF6eX),
    useOptions: () => [
        {
            label: a.intl.string(a.t["9x/Rtb"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: a.intl.string(a.t.fJAbQU),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: a.intl.string(a.t["xu+UDQ"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: o.fz.useSetting,
    setValue: (e) => (0, l.MR)(e, o.fz.getSetting()),
});
