t.d(n, { default: () => r });
var a = t(627968);
t(64700);
var i = t(980707),
    d = t(477782),
    o = t(192308),
    s = t(346411),
    c = t(442433),
    l = t(818348);
let r = function (e) {
    return (0, a.jsx)(i.W, {
        "data-menu-migrated": !0,
        onClose: c.Z_,
        navId: "staff-only-entry-debug",
        "aria-label": "staff only content inventory debug",
        onSelect: l.tE,
        children: (0, a.jsx)(d.Dr, {
            id: "test",
            label: "Debug (Staff-Only)",
            action: () => {
                (0, o.openModalLazy)(async () => {
                    let { default: n } = await t.e("94022").then(t.bind(t, 924037));
                    return (t) => (0, a.jsx)(n, { ...t, ...e });
                });
            },
            icon: s.P,
            leadingAccessory: { type: "icon", icon: s.P },
        }),
    });
};
