n.d(t, { A: () => p });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(158954),
    o = n(397927),
    d = n(234560),
    c = n(613912),
    u = n(661251),
    m = n(288198);
let h = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    x = { "virtual-currency": c.B, nitro: d.$ };
function p() {
    let [e, t] = s.useState("virtual-currency"),
        n = s.useMemo(() => x[e], [e]);
    return (0, a.jsxs)("div", {
        className: l()(u.nd, m.kL),
        children: [
            (0, a.jsx)(o.VQ0, {
                className: m.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: h.map((e) => (0, a.jsx)(o.VQ0.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, a.jsx)(r.ArX, { children: (0, a.jsx)("div", { className: m.Qs, children: (0, a.jsx)(n, {}) }) }),
        ],
    });
}
