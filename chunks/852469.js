n.d(t, { Z: () => a });
var i = n(524437),
    l = n(995774),
    s = n(509613),
    o = n(695346),
    r = n(388032);
let a = (0, s.Em)("ReactionNotifications", {
    useTitle: () => r.intl.string(r.t.Rq0NFh),
    useSubtitle: () => r.intl.string(r.t.oWF6eX),
    useOptions: () => [
        {
            label: r.intl.string(r.t["9x/Rtb"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: r.intl.string(r.t.fJAbQU),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: r.intl.string(r.t["xu+UDQ"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: o.fz.useSetting,
    setValue: (e) => (0, l.MR)(e, o.fz.getSetting()),
});
