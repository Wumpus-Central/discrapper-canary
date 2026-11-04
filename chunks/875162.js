var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(761508),
    d = n(51790);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    tabs: t,
                    panelClassName: n,
                    tabsClassName: r,
                    defaultTab: c,
                    onTabChange: u,
                    orientation: o = "horizontal",
                } = e,
                m = c ?? t[0],
                [x, h] = i.useState(m ?? t[0]);
            i.useEffect(() => {
                h(m);
            }, [m]);
            let f = i.useMemo(() => {
                let e = x.component;
                return (0, l.jsx)(e, {});
            }, [x]);
            return (0, l.jsxs)("div", {
                className: s()(d.P5, { [d.Vd]: "vertical" === o }),
                children: [
                    (0, l.jsx)(a.V, {
                        className: s()(d.$H, { [d.Vd]: "vertical" === o }, r),
                        selectedItem: x.id,
                        onItemSelect: function (e) {
                            (h(t.find((t) => t.id === e) ?? t[0]), u?.(e));
                        },
                        orientation: o,
                        type: "vertical" === o ? "side" : "top",
                        look: "brand",
                        children: t.map((e) =>
                            (0, l.jsx)(
                                a.V.Item,
                                {
                                    className: s()(d.Mf, { [d.Vd]: "vertical" === o, [d.wH]: e.id === x.id }),
                                    id: e.id,
                                    "aria-label": e.title,
                                    children: e.title,
                                },
                                e.id,
                            ),
                        ),
                    }),
                    (0, l.jsx)(a.V.Panel, {
                        id: x.id,
                        "aria-labelledby": x.title,
                        className: s()(d.NM, n, { [d.Vd]: "vertical" === o }),
                        children: f,
                    }),
                ],
            });
        },
    },
);
