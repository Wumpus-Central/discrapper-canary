a.d(t, { A: () => x });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(573613),
    o = a(761508),
    d = a(234560),
    c = a(613912),
    u = a(505206),
    m = a(642153);
let h = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    p = { "virtual-currency": c.B, nitro: d.$ };
function x() {
    let [e, t] = l.useState("virtual-currency"),
        a = l.useMemo(() => p[e], [e]);
    return (0, n.jsxs)("div", {
        className: s()(u.nd, m.kL),
        children: [
            (0, n.jsx)(o.V, {
                className: m.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: h.map((e) => (0, n.jsx)(o.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, n.jsx)(r.Ar, { children: (0, n.jsx)("div", { className: m.Qs, children: (0, n.jsx)(a, {}) }) }),
        ],
    });
}
