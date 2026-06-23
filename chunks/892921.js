t.d(n, { A: () => v, AddQuestionsContextMenu: () => h });
var i = t(627968);
t(64700);
var l = t(980707),
    r = t(477782),
    a = t(565787),
    s = t(673185),
    o = t(916099),
    c = t(622629),
    d = t(442433),
    u = t(828208),
    x = t(513461),
    m = t(557420),
    f = t(54948),
    j = t(375708);
function h(e) {
    let { addFormField: n, onSelect: t, guild: m, allowTerms: h } = e;
    return (0, i.jsx)(l.W, {
        "data-menu-migrated": !0,
        navId: "add-questions",
        onClose: d.Z_,
        "aria-label": j.intl.string(j.t.liqwPJ),
        onSelect: t,
        children: (0, i.jsxs)(r.rX, {
            children: [
                (0, i.jsx)(r.Dr, {
                    id: "text-input",
                    icon: (0, a.k)(u.A),
                    leadingAccessory: { type: "icon", icon: (0, a.k)(u.A) },
                    label: j.intl.string(j.t.w6Q9wz),
                    action: () => (0, f.PV)(x.rX.TEXT_INPUT, n, m),
                }),
                (0, i.jsx)(r.Dr, {
                    id: "paragraph",
                    icon: s.$,
                    leadingAccessory: { type: "icon", icon: s.$ },
                    label: j.intl.string(j.t.gG0JBN),
                    action: () => (0, f.PV)(x.rX.PARAGRAPH, n, m),
                }),
                (0, i.jsx)(r.Dr, {
                    id: "multiple-choice",
                    icon: o.j,
                    leadingAccessory: { type: "icon", icon: o.j },
                    label: j.intl.string(j.t.ooKh3m),
                    action: () => (0, f.PV)(x.rX.MULTIPLE_CHOICE, n, m),
                }),
                h &&
                    (0, i.jsx)(r.Dr, {
                        id: "terms",
                        icon: c.B,
                        leadingAccessory: { type: "icon", icon: c.B },
                        label: j.intl.string(j.t["3pz9t3"]),
                        action: () => (0, f.PV)(x.rX.TERMS, n, m),
                    }),
            ],
        }),
    });
}
let v = function (e) {
    let { addFormField: n, guild: t, allowTerms: l } = e;
    return (0, i.jsx)(m.d, {
        text: j.intl.string(j.t.CoHdoG),
        tooltipText: j.intl.string(j.t.nsI4dU),
        onClick: function (e) {
            (0, d.jA)(e, (e) => (0, i.jsx)(h, { ...e, addFormField: n, guild: t, allowTerms: l }), {
                position: "top",
                align: "center",
            });
        },
    });
};
