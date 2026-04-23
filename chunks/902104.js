n.d(t, { I: () => d });
var i = n(70688),
    s = n(314116),
    l = n(830215),
    a = n(419954),
    r = n(780964),
    o = n(985018);
let d = (0, a.i4)(r.X.LOGOUT_SIDEBAR_ITEM, {
    variant: "destructive",
    useTitle: () => o.intl.string(o.t["2jxGer"]),
    icon: i.o,
    onClick: () => {
        (0, s.A)({
            title: o.intl.string(o.t["2jxGer"]),
            subtitle: o.intl.string(o.t.SUnWBB),
            confirmText: o.intl.string(o.t["2jxGer"]),
            onConfirm: () => {
                l.A.logout("settings");
            },
        });
    },
    buildLayout: () => [],
});
