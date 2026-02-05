a.d(t, { default: () => c });
var n = a(627968);
a(64700);
var i = a(397927),
    s = a(442433),
    d = a(818348);
let c = (e) =>
    (0, n.jsx)(i.W1t, {
        "data-menu-migrated": !0,
        onClose: s.Z_,
        navId: "staff-only-entry-debug",
        "aria-label": "staff only content inventory debug",
        onSelect: d.tE,
        children: (0, n.jsx)(i.Drp, {
            id: "test",
            label: "Debug (Staff-Only)",
            action: () => {
                (0, i.mMO)(async () => {
                    let { default: t } = await a.e("94022").then(a.bind(a, 924037));
                    return (a) => (0, n.jsx)(t, { ...a, ...e });
                });
            },
            icon: i.PXj,
            leadingAccessory: { type: "icon", icon: i.PXj },
        }),
    });
