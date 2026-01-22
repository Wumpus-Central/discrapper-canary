n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(675704),
    a = n(793322),
    s = n(64983),
    o = n(652215),
    c = n(49999),
    u = n(985018),
    d = n(861968),
    p = n(208907);
let f = (e) => {
    let t = (0, r.jsx)(i.e7I, {
        shortcut: l.R.binds["0"],
        keyClassName: d.Eb,
    });
    return (0, r.jsx)(s.A, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(c.i.UNKNOWN),
        onClick: () => (0, a.WU)("CHANNEL_NOTICE"),
        message: u.intl.string(u.t.Qhk8cs),
        cta: t,
        trackingSource: o.kZU.QUICK_SWITCHER_NOTICE,
        type: o.n5X.QUICKSWITCHER,
        image: p,
        imageMarginX: 50,
    });
};
