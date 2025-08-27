n.d(t, { Z: () => u });
var i = n(524437),
    l = n(995774),
    r = n(509613),
    s = n(695346),
    a = n(869235),
    o = n(388032);
let u = (0, r.Em)(a.t.REACTION_NOTIFICATIONS, {
    useTitle: () => o.intl.string(o.t.Rq0NFh),
    useSubtitle: () => o.intl.string(o.t.oWF6eX),
    useOptions: () => [
        {
            label: o.intl.string(o.t["9x/Rtb"]),
            value: i.Ns.NOTIFICATIONS_ENABLED,
        },
        {
            label: o.intl.string(o.t.fJAbQU),
            value: i.Ns.ONLY_DMS,
        },
        {
            label: o.intl.string(o.t["xu+UDQ"]),
            value: i.Ns.NOTIFICATIONS_DISABLED,
        },
    ],
    useValue: s.fz.useSetting,
    setValue: (e) => (0, l.MR)(e, s.fz.getSetting()),
});
