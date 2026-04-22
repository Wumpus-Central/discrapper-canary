a.d(t, { default: () => r });
var n = a(627968);
a(64700);
var s = a(861672),
    i = a(477782),
    l = a(192308),
    c = a(346411),
    d = a(442433),
    o = a(818348);
let r = (e) =>
    (0, n.jsx)(s.W, {
        "data-menu-migrated": !0,
        onClose: d.Z_,
        navId: "staff-only-entry-debug",
        "aria-label": "staff only content inventory debug",
        onSelect: o.tE,
        children: (0, n.jsx)(i.Dr, {
            id: "test",
            label: "Debug (Staff-Only)",
            action: () => {
                (0, l.openModalLazy)(async () => {
                    let { default: t } = await a.e("94022").then(a.bind(a, 924037));
                    return (a) => (0, n.jsx)(t, { ...a, ...e });
                });
            },
            icon: c.P,
            leadingAccessory: { type: "icon", icon: c.P },
        }),
    });
