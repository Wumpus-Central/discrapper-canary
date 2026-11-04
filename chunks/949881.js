var a = t(477900);
t(582128);
var c = t(165862),
    i = t(477782),
    r = t(192308),
    o = t(346411),
    s = t(442433),
    d = t(818348);
t.d(
    e,
    {},
    {
        default: function (n) {
            return (0, a.jsx)(c.W, {
                "data-menu-migrated": !0,
                onClose: s.Z_,
                navId: "staff-only-entry-debug",
                "aria-label": "staff only content inventory debug",
                onSelect: d.tE,
                children: (0, a.jsx)(i.Dr, {
                    id: "test",
                    label: "Debug (Staff-Only)",
                    action: () => {
                        (0, r.mM)(async () => {
                            let { default: e } = await t.e(194022).then(t.bind(t, 146418));
                            return (t) => (0, a.jsx)(e, { ...t, ...n });
                        });
                    },
                    icon: o.WrenchIcon,
                    leadingAccessory: { type: "icon", icon: o.WrenchIcon },
                }),
            });
        },
    },
);
