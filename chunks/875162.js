n.d(t, { A: () => c });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(761508),
    d = n(51790);
let c = function (e) {
    let {
            tabs: t,
            panelClassName: n,
            tabsClassName: r,
            defaultTab: c,
            onTabChange: u,
            orientation: o = "horizontal",
        } = e,
        x = c ?? t[0],
        [m, h] = i.useState(x ?? t[0]);
    i.useEffect(() => {
        h(x);
    }, [x]);
    let f = i.useMemo(() => {
        let e = m.component;
        return (0, l.jsx)(e, {});
    }, [m]);
    return (0, l.jsxs)("div", {
        className: s()(d.P5, { [d.Vd]: "vertical" === o }),
        children: [
            (0, l.jsx)(a.V, {
                className: s()(d.$H, { [d.Vd]: "vertical" === o }, r),
                selectedItem: m.id,
                onItemSelect: function (e) {
                    h(t.find((t) => t.id === e) ?? t[0]), u?.(e);
                },
                orientation: o,
                type: "vertical" === o ? "side" : "top",
                look: "brand",
                children: t.map((e) =>
                    (0, l.jsx)(
                        a.V.Item,
                        {
                            className: s()(d.Mf, { [d.Vd]: "vertical" === o, [d.wH]: e.id === m.id }),
                            id: e.id,
                            "aria-label": e.title,
                            children: e.title,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, l.jsx)(a.V.Panel, {
                id: m.id,
                "aria-labelledby": m.title,
                className: s()(d.NM, n, { [d.Vd]: "vertical" === o }),
                children: f,
            }),
        ],
    });
};
