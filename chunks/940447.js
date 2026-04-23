n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(475358),
    a = n(675704),
    l = n(793322),
    s = n(926466),
    o = n(652215),
    d = n(49999),
    u = n(985018),
    c = n(284245),
    A = n(208907);
let h = (e) => {
    let t = (0, i.jsx)(r.e, { shortcut: a.R.binds["0"], keyClassName: c.Eb });
    return (0, i.jsx)(s.A, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(d.i.UNKNOWN),
        onClick: () => (0, l.WU)("CHANNEL_NOTICE"),
        message: u.intl.string(u.t.Qhk8cs),
        cta: t,
        trackingSource: o.kZU.QUICK_SWITCHER_NOTICE,
        type: o.n5X.QUICKSWITCHER,
        image: A,
        imageMarginX: 50,
    });
};
