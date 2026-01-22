n.d(t, { A: () => c });
var a = n(627968),
    l = n(397927),
    i = n(817281),
    r = n(736653),
    s = n(653523),
    o = n(818348);
let c = function () {
    let e = (0, r.Ay)();
    return (0, a.jsx)(l.D0$, {
        label: "Theme",
        children: (0, a.jsxs)("div", {
            style: {
                display: "flex",
                justifyContent: "space-between",
            },
            children: [
                (0, a.jsx)(s.zy, {
                    theme: o.NJ.LIGHT,
                    isSelected: e === o.NJ.LIGHT,
                    onSelect: () => (0, i.u_)({ theme: o.NJ.LIGHT }),
                }),
                (0, a.jsx)(s.zy, {
                    theme: o.NJ.DARK,
                    isSelected: e === o.NJ.DARK,
                    onSelect: () => (0, i.u_)({ theme: o.NJ.DARK }),
                }),
            ],
        }),
    });
};
