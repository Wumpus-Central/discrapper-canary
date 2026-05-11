l.d(t, { A: () => c });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(761508),
    d = l(417255);
let c = function (e) {
    let {
            tabs: t,
            panelClassName: l,
            tabsClassName: s,
            defaultTab: c,
            onTabChange: u,
            orientation: o = "horizontal",
        } = e,
        x = c ?? t[0],
        [h, m] = i.useState(x ?? t[0]);
    i.useEffect(() => {
        m(x);
    }, [x]);
    let j = i.useMemo(() => {
        let e = h.component;
        return (0, n.jsx)(e, {});
    }, [h]);
    return (0, n.jsxs)("div", {
        className: a()(d.P5, { [d.Vd]: "vertical" === o }),
        children: [
            (0, n.jsx)(r.V, {
                className: a()(d.$H, { [d.Vd]: "vertical" === o }, s),
                selectedItem: h.id,
                onItemSelect: (e) => {
                    m(t.find((t) => t.id === e) ?? t[0]), u?.(e);
                },
                orientation: o,
                type: "vertical" === o ? "side" : "top",
                look: "brand",
                children: t.map((e) =>
                    (0, n.jsx)(
                        r.V.Item,
                        {
                            className: a()(d.Mf, { [d.Vd]: "vertical" === o, [d.wH]: e.id === h.id }),
                            id: e.id,
                            "aria-label": e.title,
                            children: e.title,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, n.jsx)(r.V.Panel, {
                id: h.id,
                "aria-labelledby": h.title,
                className: a()(d.NM, l, { [d.Vd]: "vertical" === o }),
                children: j,
            }),
        ],
    });
};
