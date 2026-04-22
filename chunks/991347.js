a.d(t, { A: () => c });
var n = a(627968),
    l = a(834730),
    i = a(736653),
    s = a(653523),
    r = a(641886),
    o = a(652215),
    d = a(809948);
function c(e) {
    let { selected: t, onSelect: a } = e,
        c = (0, i.Ay)();
    return (0, n.jsxs)("div", {
        className: d.N,
        children: [
            (0, n.jsx)(l.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, n.jsx)("div", {
                className: d.Z,
                children: r.Z6.map((e) => {
                    let l = c !== o.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, n.jsx)(
                        s.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: i },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
