a.d(l, { A: () => o });
var t = a(627968);
a(64700);
var s = a(426611),
    i = a(459192),
    n = a(927578),
    c = a(580630),
    h = a(881489),
    r = a(985018);
function o(e) {
    let { children: l, endsAt: a, variant: o = "initial" } = e,
        d = (0, h.Zb)(a),
        v = (0, c.$g)(0, (0, n.Rr)(), { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
        g = "followup" === o,
        p = g ? r.intl.string(r.t.gzhz8w) : r.intl.string(r.t.aopiS6),
        m = g ? r.intl.format(r.t["3iUE+U"], { price: v }) : r.intl.format(r.t.AQd9tZ, { days: d });
    return (0, t.jsx)(i.u, {
        title: m,
        body: p,
        asset: (0, t.jsx)(s.y, { alt: "", width: 48, height: 48 }),
        assetSize: 48,
        position: "right",
        asContainer: !0,
        children: (0, t.jsx)("div", { children: l }),
    });
}
