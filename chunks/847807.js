a.d(t, { A: () => d });
var n = a(627968),
    l = a(452027),
    i = a(817281),
    s = a(736653),
    r = a(653523),
    o = a(818348);
let d = function () {
    let e = (0, s.Ay)();
    return (0, n.jsx)(l.D, {
        label: "Theme",
        children: (0, n.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, n.jsx)(r.zy, {
                    theme: o.NJ.LIGHT,
                    isSelected: e === o.NJ.LIGHT,
                    onSelect: () => (0, i.u_)({ theme: o.NJ.LIGHT }),
                }),
                (0, n.jsx)(r.zy, {
                    theme: o.NJ.DARK,
                    isSelected: e === o.NJ.DARK,
                    onSelect: () => (0, i.u_)({ theme: o.NJ.DARK }),
                }),
            ],
        }),
    });
};
