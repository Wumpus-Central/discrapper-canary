var i = t(477900);
t(582128);
var r = t(165862),
    s = t(477782),
    l = t(565787),
    o = t(673185),
    a = t(916099),
    c = t(622629),
    d = t(442433),
    u = t(828208),
    m = t(513461),
    x = t(557420),
    f = t(797446),
    h = t(792996);
function j(e) {
    let { addFormField: n, onSelect: t, guild: x, allowTerms: j } = e;
    return (0, i.jsx)(r.W, {
        "data-menu-migrated": !0,
        navId: "add-questions",
        onClose: d.Z_,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: t,
        children: (0, i.jsxs)(s.rX, {
            children: [
                (0, i.jsx)(s.Dr, {
                    id: "text-input",
                    icon: (0, l.k)(u.A),
                    leadingAccessory: { type: "icon", icon: (0, l.k)(u.A) },
                    label: h.intl.string(h.t.w6Q9wz),
                    action: () => (0, f.PV)(m.rX.TEXT_INPUT, n, x),
                }),
                (0, i.jsx)(s.Dr, {
                    id: "paragraph",
                    icon: o.$,
                    leadingAccessory: { type: "icon", icon: o.$ },
                    label: h.intl.string(h.t.gG0JBN),
                    action: () => (0, f.PV)(m.rX.PARAGRAPH, n, x),
                }),
                (0, i.jsx)(s.Dr, {
                    id: "multiple-choice",
                    icon: a.ListBulletsIcon,
                    leadingAccessory: { type: "icon", icon: a.ListBulletsIcon },
                    label: h.intl.string(h.t.ooKh3m),
                    action: () => (0, f.PV)(m.rX.MULTIPLE_CHOICE, n, x),
                }),
                j &&
                    (0, i.jsx)(s.Dr, {
                        id: "terms",
                        icon: c.B,
                        leadingAccessory: { type: "icon", icon: c.B },
                        label: h.intl.string(h.t["3pz9t3"]),
                        action: () => (0, f.PV)(m.rX.TERMS, n, x),
                    }),
            ],
        }),
    });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let { addFormField: n, guild: t, allowTerms: r } = e;
            return (0, i.jsx)(x.d, {
                text: h.intl.string(h.t.CoHdoG),
                tooltipText: h.intl.string(h.t.nsI4dU),
                onClick: function (e) {
                    (0, d.jA)(e, (e) => (0, i.jsx)(j, { ...e, addFormField: n, guild: t, allowTerms: r }), {
                        position: "top",
                        align: "center",
                    });
                },
            });
        },
        AddQuestionsContextMenu: j,
    },
);
