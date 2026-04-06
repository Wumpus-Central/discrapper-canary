n.d(t, { A: () => o });
var i = n(627968),
    r = n(435371),
    a = n(890687),
    l = n(985018),
    s = n(342225);
let o = (e) => {
    let { children: t, multiplier: n } = e,
        o = (0, a.Oq)()
            ? l.intl.format(l.t.NpUfej, { bonusOrbMultiplier: n })
            : l.intl.format(l.t["G5k+lZ"], { bonusOrbMultiplier: n });
    return (0, i.jsx)(r.un, {
        title: l.intl.string(l.t.F2MShO),
        body: o,
        asset: (0, i.jsx)("img", { src: s.A, alt: "", "aria-hidden": !0 }),
        assetSize: 80,
        position: "right",
        align: "center",
        asContainer: !0,
        children: t,
    });
};
