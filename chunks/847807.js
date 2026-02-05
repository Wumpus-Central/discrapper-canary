n.d(t, { A: () => d });
var a = n(627968),
    s = n(397927),
    i = n(817281),
    l = n(736653),
    r = n(653523),
    o = n(818348);
let d = function () {
    let e = (0, l.Ay)();
    return (0, a.jsx)(s.D0$, {
        label: "Theme",
        children: (0, a.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, a.jsx)(r.zy, {
                    theme: o.NJ.LIGHT,
                    isSelected: e === o.NJ.LIGHT,
                    onSelect: () => (0, i.u_)({ theme: o.NJ.LIGHT }),
                }),
                (0, a.jsx)(r.zy, {
                    theme: o.NJ.DARK,
                    isSelected: e === o.NJ.DARK,
                    onSelect: () => (0, i.u_)({ theme: o.NJ.DARK }),
                }),
            ],
        }),
    });
};
