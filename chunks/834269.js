a.d(l, { A: () => h });
var t = a(627968),
    s = a(459192),
    i = a(890687),
    n = a(985018),
    c = a(342225);
let h = (e) => {
    let { children: l, multiplier: a } = e,
        h = (0, i.Oq)()
            ? n.intl.format(n.t.NpUfej, { bonusOrbMultiplier: a })
            : n.intl.format(n.t["G5k+lZ"], { bonusOrbMultiplier: a });
    return (0, t.jsx)(s.u, {
        title: n.intl.string(n.t.F2MShO),
        body: h,
        asset: (0, t.jsx)("img", { src: c.A, alt: "", "aria-hidden": !0 }),
        assetSize: 80,
        position: "right",
        align: "center",
        asContainer: !0,
        children: l,
    });
};
