t.d(n, { A: () => v, AddQuestionsContextMenu: () => j });
var i = t(477900);
t(582128);
var l = t(980707),
    r = t(477782),
    s = t(565787),
    a = t(673185),
    o = t(916099),
    c = t(622629),
    d = t(442433),
    u = t(828208),
    x = t(513461),
    m = t(557420),
    f = t(54948),
    h = t(375708);
function j(e) {
    let { addFormField: n, onSelect: t, guild: m, allowTerms: j } = e;
    return (0, i.jsx)(l.W, {
        "data-menu-migrated": !0,
        navId: "add-questions",
        onClose: d.Z_,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: t,
        children: (0, i.jsxs)(r.rX, {
            children: [
                (0, i.jsx)(r.Dr, {
                    id: "text-input",
                    icon: (0, s.k)(u.A),
                    leadingAccessory: { type: "icon", icon: (0, s.k)(u.A) },
                    label: h.intl.string(h.t.w6Q9wz),
                    action: () => (0, f.PV)(x.rX.TEXT_INPUT, n, m),
                }),
                (0, i.jsx)(r.Dr, {
                    id: "paragraph",
                    icon: a.$,
                    leadingAccessory: { type: "icon", icon: a.$ },
                    label: h.intl.string(h.t.gG0JBN),
                    action: () => (0, f.PV)(x.rX.PARAGRAPH, n, m),
                }),
                (0, i.jsx)(r.Dr, {
                    id: "multiple-choice",
                    icon: o.ListBulletsIcon,
                    leadingAccessory: { type: "icon", icon: o.ListBulletsIcon },
                    label: h.intl.string(h.t.ooKh3m),
                    action: () => (0, f.PV)(x.rX.MULTIPLE_CHOICE, n, m),
                }),
                j &&
                    (0, i.jsx)(r.Dr, {
                        id: "terms",
                        icon: c.B,
                        leadingAccessory: { type: "icon", icon: c.B },
                        label: h.intl.string(h.t["3pz9t3"]),
                        action: () => (0, f.PV)(x.rX.TERMS, n, m),
                    }),
            ],
        }),
    });
}
let v = function (e) {
    let { addFormField: n, guild: t, allowTerms: l } = e;
    return (0, i.jsx)(m.d, {
        text: h.intl.string(h.t.CoHdoG),
        tooltipText: h.intl.string(h.t.nsI4dU),
        onClick: function (e) {
            (0, d.jA)(e, (e) => (0, i.jsx)(j, { ...e, addFormField: n, guild: t, allowTerms: l }), {
                position: "top",
                align: "center",
            });
        },
    });
};
