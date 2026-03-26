n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var a = n(426611),
    l = n(459192),
    r = n(496431),
    s = n(366999),
    o = n(985018);
function d(e) {
    let { children: t, endsAt: n } = e,
        d = (0, r.A)(n.toDate(), 36e5),
        c = Math.max(1, (0, s.Vb)(d).days);
    return (0, i.jsx)(l.u, {
        title: o.intl.format(o.t.AQd9tZ, { days: c }),
        body: o.intl.string(o.t.aopiS6),
        asset: (0, i.jsx)(a.y, { alt: "", width: 48, height: 48 }),
        assetSize: 48,
        position: "right",
        asContainer: !0,
        children: (0, i.jsx)("div", { children: t }),
    });
}
