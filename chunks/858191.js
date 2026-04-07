n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(426611),
    a = n(459192),
    l = n(927578),
    s = n(580630),
    o = n(881489),
    d = n(985018);
function c(e) {
    let { children: t, endsAt: n, variant: c = "initial" } = e,
        u = (0, o.Zb)(n),
        A = (0, s.$g)(0, (0, l.Rr)(), { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        h = "followup" === c,
        _ = h ? d.intl.string(d.t.gzhz8w) : d.intl.string(d.t.aopiS6),
        m = h ? d.intl.format(d.t["3iUE+U"], { price: A }) : d.intl.format(d.t.AQd9tZ, { days: u });
    return (0, i.jsx)(a.u, {
        title: m,
        body: _,
        asset: (0, i.jsx)(r.y, { alt: "", width: 48, height: 48 }),
        assetSize: 48,
        position: "right",
        asContainer: !0,
        children: (0, i.jsx)("div", { children: t }),
    });
}
