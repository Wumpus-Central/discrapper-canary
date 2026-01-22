n.d(t, { A: () => f }), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(158954),
    o = n(397927),
    c = n(234560),
    d = n(613912),
    u = n(661251),
    m = n(288198);
let p = [
        {
            id: "virtual-currency",
            name: "Virtual Current (Orb) Components",
        },
        {
            id: "nitro",
            name: "Nitro Components",
        },
    ],
    h = {
        "virtual-currency": d.B,
        nitro: c.$,
    };
function f() {
    let [e, t] = l.useState("virtual-currency"),
        n = l.useMemo(() => h[e], [e]);
    return (0, a.jsxs)("div", {
        className: r()(u.nd, m.kL),
        children: [
            (0, a.jsx)(o.VQ0, {
                className: m.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: p.map((e) =>
                    (0, a.jsx)(
                        o.VQ0.Item,
                        {
                            id: e.id,
                            children: e.name,
                        },
                        e.id,
                    ),
                ),
            }),
            (0, a.jsx)(s.ArX, {
                children: (0, a.jsx)("div", {
                    className: m.Qs,
                    children: (0, a.jsx)(n, {}),
                }),
            }),
        ],
    });
}
