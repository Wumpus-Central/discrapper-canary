n.d(t, { P: () => m });
var i = n(308645),
    s = n(271995),
    l = n(419954),
    r = n(933297),
    a = n(780964),
    o = n(524916),
    d = n(985018);
let c = (0, l.zZ)(a.X.ACCOUNT_STANDING_NESTED_CATEGORY, { buildLayout: () => [o.y] }),
    u = (0, l.t_)(a.X.ACCOUNT_STANDING_PANEL, { useTitle: () => d.intl.string(d.t["16r9jm"]), buildLayout: () => [c] }),
    m = (0, l.eA)(a.X.ACCOUNT_STANDING_NESTED_PANEL, {
        useTitle: s.$b,
        useSubtitle: s.bh,
        useLeadingDecoration: function () {
            let { color: e, backgroundColor: t, Icon: n } = (0, s._k)();
            return { type: r.IJ.ICON, icon: n, color: e, backgroundColor: t };
        },
        initialize: () => {
            i.Yn();
        },
        buildLayout: () => [u],
    });
