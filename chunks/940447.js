n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(675704),
    r = n(793322),
    s = n(64983),
    o = n(652215),
    d = n(49999),
    c = n(985018),
    u = n(436965),
    A = n(208907);
let h = (e) => {
    let t = (0, i.jsx)(a.e7I, { shortcut: l.R.binds["0"], keyClassName: u.Eb });
    return (0, i.jsx)(s.A, {
        guild: e.guild,
        onDismissed: () => e.markAsDismissed(d.i.UNKNOWN),
        onClick: () => (0, r.WU)("CHANNEL_NOTICE"),
        message: c.intl.string(c.t.Qhk8cs),
        cta: t,
        trackingSource: o.kZU.QUICK_SWITCHER_NOTICE,
        type: o.n5X.QUICKSWITCHER,
        image: A,
        imageMarginX: 50,
    });
};
