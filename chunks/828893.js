n.d(t, { F: () => c });
var i = n(419954),
    s = n(100406),
    l = n(878460),
    a = n(780964),
    r = n(136594),
    o = n(127707),
    d = n(985018);
let c = (0, i.zZ)(a.X.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => d.intl.string(d.t["w/qqKK"]),
    initialize: function () {
        let { initialized: e } = l.A.getEmailSettings();
        e || (0, s.cR)();
    },
    buildLayout: () => [...r.P, o.Q],
});
