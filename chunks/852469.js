n.d(t, { Z: () => a });
var i = n(524437),
    l = n(995774),
    o = n(509613),
    r = n(695346),
    s = n(388032);
let a = (0, o.Em)("ReactionNotifications", {
    useTitle: () => s.intl.string(s.t.Rq0NFh),
    useSubtitle: () => s.intl.string(s.t.oWF6eX),
    useOptions: () => [
        {
            label: s.intl.string(s.t["9x/Rtb"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: s.intl.string(s.t.fJAbQU),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: s.intl.string(s.t["xu+UDQ"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: r.fz.useSetting,
    setValue: (e) => (0, l.MR)(e, r.fz.getSetting()),
});
