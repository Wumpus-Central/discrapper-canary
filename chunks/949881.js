t.d(n, { default: () => l });
var a = t(477900);
t(582128);
var c = t(980707),
    o = t(477782),
    i = t(192308),
    r = t(346411),
    d = t(442433),
    s = t(818348);
let l = function (e) {
    return (0, a.jsx)(c.W, {
        "data-menu-migrated": !0,
        onClose: d.Z_,
        navId: "staff-only-entry-debug",
        "aria-label": "staff only content inventory debug",
        onSelect: s.tE,
        children: (0, a.jsx)(o.Dr, {
            id: "test",
            label: "Debug (Staff-Only)",
            action: () => {
                (0, i.openModalLazy)(async () => {
                    let { default: n } = await t.e("194022").then(t.bind(t, 924037));
                    return (t) => (0, a.jsx)(n, { ...t, ...e });
                });
            },
            icon: r.WrenchIcon,
            leadingAccessory: { type: "icon", icon: r.WrenchIcon },
        }),
    });
};
