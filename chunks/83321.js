n.d(t, { P: () => g });
var i = n(308645),
    s = n(271995),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(524916),
    d = n(985018);
let u = (0, l.zZ)(r.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [o.y] }),
    c = (0, l.t_)(r.X.ACCOUNT_STANDING_PANEL, { useTitle: () => d.intl.string(d.t["16r9jm"]), buildLayout: () => [u] }),
    g = (0, l.t0)(r.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: s.$b,
        useSubtitle: s.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, s._k)();
            return { type: a.Xy.ICON, icon: n, color: e, backgroundColor: t };
        },
        initialize: () => {
            i.Yn();
        },
        buildLayout: () => [c],
    });
