i.d(t, { I: () => d });
var n = i(934551),
    l = i(314116),
    s = i(419954),
    r = i(203982),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.i4)(a.X.LOGOUT_SIDEBAR_ITEM, {
    variant: "destructive",
    useTitle: () => o.intl.string(o.t["2jxGer"]),
    icon: n.DoorExitIcon,
    onClick: () => {
        (0, l.A)({
            title: o.intl.string(o.t["2jxGer"]),
            subtitle: o.intl.string(o.t.SUnWBB),
            confirmText: o.intl.string(o.t["2jxGer"]),
            onConfirm: () => {
                r._.dispatch(u.jej.SETTINGS_TRIGGER_LOGOUT);
            },
        });
    },
    buildLayout: () => [],
});
