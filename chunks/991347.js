n.d(t, { A: () => c });
var a = n(627968),
    i = n(397927),
    s = n(736653),
    l = n(653523),
    r = n(641886),
    o = n(652215),
    d = n(351067);
function c(e) {
    let { selected: t, onSelect: n } = e,
        c = (0, s.Ay)();
    return (0, a.jsxs)("div", {
        className: d.N,
        children: [
            (0, a.jsx)(i.Text, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, a.jsx)("div", {
                className: d.Z,
                children: r.Z6.map((e) => {
                    let i = c !== o.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, a.jsx)(
                        l.S4,
                        { onSelect: () => n(e), style: { background: i }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
